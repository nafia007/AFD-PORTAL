import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, User, Users, BarChart3, Building, Menu, X, Trophy } from "lucide-react";
import { toast } from "sonner";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useAuth } from "@/contexts/AuthContext";
import { useAdminCheck } from "@/hooks/useAdminCheck";
import { switchToPolygon } from "@/integrations/contracts/filmNFT";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const Navigation = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAdmin } = useAdminCheck();
  const {
    user,
    loading: authLoading
  } = useAuth();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  console.log("Navigation - user:", user, "authLoading:", authLoading);
  useEffect(() => {
    const checkWallet = async () => {
      if (typeof window !== 'undefined' && window.ethereum && window.ethereum.selectedAddress) {
        setAccount(window.ethereum.selectedAddress);
      }
    };
    checkWallet();
  }, []);
  const connectWallet = async () => {
    if (typeof window === 'undefined' || !window.ethereum) {
      toast.error("Please install MetaMask!");
      return;
    }
    setLoading(true);
    try {
      // First switch to Polygon network
      await switchToPolygon();

      // Then connect wallet
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      setAccount(accounts[0]);
      toast.success("Wallet connected to Polygon network!");
    } catch (error) {
      console.error("Error connecting wallet:", error);
      toast.error("Failed to connect wallet or switch to Polygon network");
    }
    setLoading(false);
  };
  const disconnectWallet = () => {
    setAccount(null);
    toast.success("Wallet disconnected");
  };
  const handleLogout = async () => {
    setLoading(true);
    try {
      console.log("Attempting to sign out...");
      if (account) {
        disconnectWallet();
      }
      const {
        error
      } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      localStorage.removeItem('user');
      toast.success("Successfully signed out");
      console.log("Successfully signed out");
      navigate('/login');
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Failed to sign out");
    } finally {
      setLoading(false);
    }
  };
  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };
  const MobileMenu = () => (
    <div className="flex flex-col space-y-4 p-4">
      <Link 
        to="/marketplace" 
        className="text-foreground hover:text-accent transition-colors p-2 rounded-md"
        onClick={() => setMobileMenuOpen(false)}
      >
        Marketplace
      </Link>
      <Link 
        to="/afd" 
        className="text-foreground hover:text-accent transition-colors flex items-center gap-2 p-2 rounded-md"
        onClick={() => setMobileMenuOpen(false)}
      >
        <Users className="w-4 h-4" />
        AFD
      </Link>
      <Link 
        to="/achievements" 
        className="text-foreground hover:text-accent transition-colors flex items-center gap-2 p-2 rounded-md"
        onClick={() => setMobileMenuOpen(false)}
      >
        <Trophy className="w-4 h-4" />
        Achievements
      </Link>
      <Link 
        to="/mint-nft" 
        className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 transition-all px-3 py-2 rounded-lg font-semibold text-sm text-center"
        onClick={() => setMobileMenuOpen(false)}
      >
        Mint NFT
      </Link>
      {isAdmin && (
        <Link 
          to="/admin" 
          className="text-foreground hover:text-accent transition-colors p-2 rounded-md"
          onClick={() => setMobileMenuOpen(false)}
        >
          Admin
        </Link>
      )}
      
      {user && !authLoading && (
        <>
          <div className="border-t border-border my-2"></div>
          <Link 
            to="/profile" 
            className="text-foreground hover:text-accent transition-colors flex items-center gap-2 p-2 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            <User className="w-4 h-4" />
            Profile
          </Link>
          <Link 
            to="/community" 
            className="text-foreground hover:text-accent transition-colors flex items-center gap-2 p-2 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Users className="w-4 h-4" />
            Community
          </Link>
          <Link 
            to="/showcase" 
            className="text-foreground hover:text-accent transition-colors flex items-center gap-2 p-2 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Building className="w-4 h-4" />
            Showcase
          </Link>
          
          <div className="border-t border-border my-2"></div>
          
          {account ? (
            <Button 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-sm shadow-md w-full" 
              onClick={() => {
                disconnectWallet();
                setMobileMenuOpen(false);
              }} 
              disabled={loading}
            >
              {shortenAddress(account)}
            </Button>
          ) : (
            <Button 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-sm shadow-md w-full" 
              onClick={() => {
                connectWallet();
                setMobileMenuOpen(false);
              }} 
              disabled={loading}
            >
              Connect Wallet
            </Button>
          )}
          
          <Button 
            variant="outline" 
            onClick={() => {
              handleLogout();
              setMobileMenuOpen(false);
            }} 
            disabled={loading} 
            className="font-semibold text-sm gap-2 w-full"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </>
      )}
      
      {!user && !authLoading && (
        <>
          <div className="border-t border-border my-2"></div>
          <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="outline" className="font-semibold text-sm w-full">
              Login
            </Button>
          </Link>
          <Button 
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-sm shadow-md w-full" 
            onClick={() => {
              connectWallet();
              setMobileMenuOpen(false);
            }} 
            disabled={loading}
          >
            Connect Wallet
          </Button>
        </>
      )}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-lg md:text-xl font-bold text-accent hover:text-primary transition-colors">
              AFD PORTAL
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 ml-8">
              <Link to="/marketplace" className="text-foreground/70 hover:text-accent transition-colors">
                Marketplace
              </Link>
              <Link to="/afd" className="text-foreground/70 hover:text-accent transition-colors flex items-center gap-2">
                <Users className="w-4 h-4" />
                AFD
              </Link>
              <Link to="/achievements" className="text-foreground/70 hover:text-accent transition-colors flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Achievements
              </Link>
              <Link to="/mint-nft" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 transition-all px-3 py-1.5 rounded-lg font-semibold text-sm">
                Mint NFT
              </Link>
              {isAdmin && (
                <Link to="/admin" className="text-foreground/70 hover:text-accent transition-colors">
                  Admin
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            
            {/* Desktop Actions */}
            {!isMobile && (
              <>
                {user && !authLoading ? (
                  <div className="flex items-center gap-2">
                    <Link to="/profile">
                      <Button variant="ghost" size="sm" className="gap-2" aria-label="Profile">
                        <User className="w-4 h-4" />
                        <span className="hidden xl:inline">Profile</span>
                      </Button>
                    </Link>
                    <Link to="/community">
                      <Button variant="secondary" size="sm" className="gap-2" aria-label="Community">
                        <Users className="w-4 h-4" />
                        <span className="hidden xl:inline">Community</span>
                      </Button>
                    </Link>
                    <Link to="/showcase">
                      <Button variant="ghost" size="sm" className="gap-2" aria-label="Showcase">
                        <Building className="w-4 h-4" />
                        <span className="hidden xl:inline">Showcase</span>
                      </Button>
                    </Link>
                    {account ? (
                      <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-sm shadow-md" onClick={disconnectWallet} disabled={loading}>
                        {shortenAddress(account)}
                      </Button>
                    ) : (
                      <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-sm shadow-md" onClick={connectWallet} disabled={loading}>
                        Connect Wallet
                      </Button>
                    )}
                    <Button variant="outline" onClick={handleLogout} disabled={loading} className="font-semibold text-sm gap-2">
                      <LogOut className="w-4 h-4" />
                      <span className="hidden xl:inline">Sign Out</span>
                    </Button>
                  </div>
                ) : authLoading ? (
                  <div className="w-8 h-8 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Link to="/login">
                      <Button variant="outline" size="sm" className="font-semibold">
                        Login
                      </Button>
                    </Link>
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-sm shadow-md" onClick={connectWallet} disabled={loading}>
                      Connect Wallet
                    </Button>
                  </div>
                )}
              </>
            )}

            {/* Mobile Menu */}
            {isMobile && (
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="lg:hidden">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(false)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <MobileMenu />
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;