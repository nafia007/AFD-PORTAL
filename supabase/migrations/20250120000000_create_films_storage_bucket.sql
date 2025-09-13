-- Create storage bucket for film uploads
INSERT INTO storage.buckets (id, name, public)
VALUES ('films', 'films', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage policies for film uploads
-- Allow authenticated users to upload their own films
CREATE POLICY "Users can upload their own films" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'films' 
  AND auth.uid() IS NOT NULL
);

-- Allow users to update their own film files
CREATE POLICY "Users can update their own films" 
ON storage.objects 
FOR UPDATE 
USING (
  bucket_id = 'films' 
  AND auth.uid() IS NOT NULL
);

-- Allow users to delete their own film files
CREATE POLICY "Users can delete their own films" 
ON storage.objects 
FOR DELETE 
USING (
  bucket_id = 'films' 
  AND auth.uid() IS NOT NULL
);

-- Allow public access to view films (since bucket is public)
CREATE POLICY "Public can view films" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'films');

-- Allow admins to manage all film files
CREATE POLICY "Admins can manage all films" 
ON storage.objects 
FOR ALL 
USING (
  bucket_id = 'films' 
  AND EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() 
    AND profiles.role = 'admin'::user_role
  )
);