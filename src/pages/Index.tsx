import ThreeDScene from "@/components/ThreeDScene";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Film, Wallet, Users, Play, Info, BookText, ChartBar } from "lucide-react";
import ChatInterface from "@/components/ChatInterface";
import HeroBackground from "@/components/HeroBackground";
import { useEffect, useState } from "react";

// Data definitions
const features = [
  {
    icon: <Film className="w-12 h-12" />,
    title: "Tokenized Film IP",
    description: "Transform film intellectual property into tradeable digital assets, enabling fractional ownership and investment opportunities."
  },
  {
    icon: <Wallet className="w-12 h-12" />,
    title: "Decentralized Exchange",
    description: "Trade film tokens seamlessly using our built-in DEX, powered by secure smart contracts and lightning-fast transactions."
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Community Driven",
    description: "Join a vibrant community of filmmakers, investors, and enthusiasts shaping the future of film financing together."
  }
];

const stats = [
  { value: "$10M+", label: "Total Volume" },
  { value: "1000+", label: "Active Users" },
  { value: "500+", label: "Film IPs Listed" }
];

const challenges = [
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "Funding Difficulties",
    description: "African filmmakers often struggle to acquire funding to support their films."
  },
  {
    icon: <Film className="w-8 h-8" />,
    title: "Limited Distribution",
    description: "The film industry in Africa faces obstacles including lack of infrastructure and limited distribution networks."
  },
  {
    icon: <ChartBar className="w-8 h-8" />,
    title: "Low Budgets",
    description: "With limited funding, filmmakers have to work with smaller budgets, which can impact film quality."
  }
];

const solutions = [
  {
    title: "Tokenization of IP Assets",
    description: "We tokenize IP assets and allow investors to purchase them on the open market."
  },
  {
    title: "Access NFT",
    description: "Membership NFT which allows access to our festival, pitch forum and token release."
  },
  {
    title: "Transparent Democratic Voting",
    description: "We use a democratic voting system where token holders choose which projects will get funding."
  },
  {
    title: "Polygon Blockchain Technology",
    description: "Polygon Blockchain technology ensures transparency and security in the voting process."
  }
];

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white">
      {/* Hero section with cinematic background */}
      <HeroBackground />
      
      {/* Hero Section */}
      <section className="relative z-20 min-h-screen flex items-center px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div 
              className="text-left max-w-2xl"
              style={{
                transform: `translateY(${scrollY * 0.3}px)`,
                opacity: Math.max(0, 1 - scrollY / 800)
              }}
            >
              <h1 
                className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-fade-in"
                style={{
                  transform: `translateY(${scrollY * 0.2}px)`,
                }}
              >
                African Film DAO
              </h1>
              <h2 
                className="text-2xl md:text-3xl font-semibold mb-10 text-purple-200 animate-fade-in-delay"
                style={{
                  transform: `translateY(${scrollY * 0.25}px)`,
                }}
              >
                Empowering African Cinema Through Blockchain
              </h2>
              <p 
                className="text-lg md:text-xl mb-16 text-gray-300 leading-relaxed animate-fade-in-delay-2"
                style={{
                  transform: `translateY(${scrollY * 0.35}px)`,
                }}
              >
                Submit your film projects, get community reviews, and access funding through our decentralized platform. Join the revolution in African storytelling.
              </p>
              <div 
                className="flex flex-col sm:flex-row gap-6 animate-fade-in-delay-3"
                style={{
                  transform: `translateY(${scrollY * 0.4}px)`,
                }}
              >
                <Link to="/submit">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                    <Film className="mr-2 h-5 w-5" />
                    Submit Your Film
                  </Button>
                </Link>
                <Link to="/explore">
                  <Button size="lg" variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                    <Play className="mr-2 h-5 w-5" />
                    Explore Projects
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right side - 3D Robot interaction area */}
            <div className="relative h-96 lg:h-full flex items-center justify-center">
              {/* 3D Robot area - no text overlay */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content Sections */}
      <main className="relative z-10 bg-gradient-to-b from-transparent via-black/50 to-black">
        
        {/* Challenges and Solutions */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Challenges Facing African Filmmakers
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understanding the obstacles that limit African cinema's potential
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {challenges.map((challenge, index) => (
                <Card key={index} className={`bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-lg border-purple-600/40 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 animate-slide-up-delay-${index + 1}`}>
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="text-amber-400 mb-6 flex justify-center">
                        {challenge.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-white">{challenge.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{challenge.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Solutions Section */}
            <div className="bg-gradient-to-r from-purple-900/40 to-purple-700/30 border border-purple-500/40 rounded-2xl p-12 mb-24">
              <h3 className="text-3xl font-bold mb-12 text-center">
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  The African Film DAO Solution
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">{solution.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 px-4 bg-gradient-to-b from-black to-purple-900/20">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Platform Features
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cutting-edge technology empowering African filmmakers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
               {features.map((feature, index) => (
                 <Card key={index} className={`bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-lg border-purple-600/40 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 animate-slide-up-delay-${index + 1}`}>
                   <CardContent className="p-8 text-center">
                     <div className="text-purple-400 mb-6 flex justify-center">
                       {feature.icon}
                     </div>
                     <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                     <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                   </CardContent>
                 </Card>
               ))}
            </div>

            {/* Stats Section */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Join the Revolution</h3>
              <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto">
                Be part of the growing community transforming African cinema
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {stats.map((stat, index) => (
                   <div key={index} className={`bg-gradient-to-br from-purple-900/40 to-purple-800/30 rounded-xl p-8 border border-purple-600/30 animate-slide-up-delay-${index + 1}`}>
                     <div className="text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
                     <div className="text-gray-300 text-lg">{stat.label}</div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <ChatInterface />
    </div>
  );
};

export default Index;