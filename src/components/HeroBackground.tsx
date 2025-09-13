
import { useEffect, useState, useRef } from 'react';

const HeroBackground = () => {
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animationTime, setAnimationTime] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const animate = () => {
      setAnimationTime(prev => prev + 0.02);
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30 z-0" />
      
      {/* Spline 3D Robot via iframe - positioned in top right */}
        <div className="absolute top-4 right-4 w-96 h-96 md:w-[500px] md:h-[500px] z-10">
          <iframe 
            src="https://my.spline.design/genkubgreetingrobot-PPZ6YYHXV8FlcNCeuZ9gN9wA/" 
            frameBorder="0" 
            width="100%" 
            height="100%"
            className="w-full h-full rounded-lg"
            style={{
               transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
               transition: 'transform 0.2s ease-out',
             }}
          />
        </div>

      {/* Cursor tracking indicator */}
      <div 
        className="absolute w-4 h-4 bg-blue-500/30 rounded-full pointer-events-none z-10 transition-all duration-300"
        style={{
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Fallback gradient background */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black/40" />
      )}
    </div>
  );
};

export default HeroBackground;
