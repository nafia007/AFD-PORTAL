import React from 'react';
import { Award, Globe, Users, Zap } from 'lucide-react';

const Achievements = () => {
  return (
    <div className="min-h-screen" style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)",
      color: "#ffffff",
      lineHeight: "1.6"
    }}>
      <div className="max-w-6xl mx-auto px-5 py-16">
        {/* Header */}
        <div className="text-center mb-20 border-b border-gray-700 pb-10">
          <h1 className="text-6xl font-light mb-5 tracking-widest" style={{
            background: "linear-gradient(90deg, #00d4ff, #5b63f7, #ff6b9d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            ACHIEVEMENTS
          </h1>
          <p className="text-xl text-gray-400 font-light mb-4">
            Celebrating African Cinema Excellence
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Discover the milestones, innovations, and groundbreaking moments that have shaped the African Film DAO community.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">3+</h3>
            <p className="text-gray-300">Years of Innovation</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Global</h3>
            <p className="text-gray-300">Reach & Distribution</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">20M+</h3>
            <p className="text-gray-300">Partner Platform Reach (myco.io)</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Web3</h3>
            <p className="text-gray-300">Pioneer Status</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-light text-cyan-400 mb-10 pl-5 border-l-4 border-indigo-600">
            Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-lg p-8 transition-all duration-300 hover:bg-opacity-10 hover:border-cyan-400 hover:border-opacity-30">
               <div className="flex flex-col items-center text-center">
                 <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-orange-500">
                   <img 
                      src="/weaam-williams.jpg" 
                      alt="Weaam Williams" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                   <div className="w-full h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                     <Users className="w-12 h-12 text-white" />
                   </div>
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Weaam Williams</h3>
                 <p className="text-lg text-cyan-400 mb-4">Founder & Creative Director</p>
                 <p className="text-gray-300 leading-relaxed text-sm">
                   Writer/Director/Actor in Film3 & Web3 • Founder of African Film DAO • Founder of Holocene Films & Tribal Alchemy Productions • Creative Director of Hollywood African Cinema Connection • Film Consultant for Entertainment Technologists
                 </p>
               </div>
             </div>
            <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-lg p-8 transition-all duration-300 hover:bg-opacity-10 hover:border-cyan-400 hover:border-opacity-30">
               <div className="flex flex-col items-center text-center">
                 <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-purple-500">
                   <img 
                     src="/nafia-kocks.jpg" 
                     alt="Nafia Kocks" 
                     className="w-full h-full object-cover"
                     onError={(e) => {
                       const target = e.target as HTMLImageElement;
                       target.style.display = 'none';
                       const fallback = target.nextElementSibling as HTMLElement;
                       if (fallback) fallback.style.display = 'flex';
                     }}
                   />
                   <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                     <Users className="w-12 h-12 text-white" />
                   </div>
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Nafia Kocks</h3>
                 <p className="text-lg text-cyan-400 mb-4">CTO and Co-Founder</p>
                 <p className="text-gray-300 leading-relaxed text-sm">
                   Technology leader driving the Web3 infrastructure and blockchain innovation behind African Film DAO's decentralized platform.
                 </p>
               </div>
             </div>
            <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-lg p-8 transition-all duration-300 hover:bg-opacity-10 hover:border-cyan-400 hover:border-opacity-30">
               <div className="flex flex-col items-center text-center">
                 <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-green-500">
                   <img 
                     src="/bheki-dlaldla.jpg" 
                     alt="Bheki Dlaldla" 
                     className="w-full h-full object-cover"
                     onError={(e) => {
                       const target = e.target as HTMLImageElement;
                       target.style.display = 'none';
                       const fallback = target.nextElementSibling as HTMLElement;
                       if (fallback) fallback.style.display = 'flex';
                     }}
                   />
                   <div className="w-full h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                     <Users className="w-12 h-12 text-white" />
                   </div>
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Bheki Dlaldla</h3>
                 <p className="text-lg text-cyan-400 mb-4">Co-Founder</p>
                 <p className="text-gray-300 leading-relaxed text-sm">
                   Strategic governance leader overseeing DAO operations and community development initiatives across the African film ecosystem.
                 </p>
               </div>
             </div>
             <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-lg p-8 transition-all duration-300 hover:bg-opacity-10 hover:border-cyan-400 hover:border-opacity-30">
               <div className="flex flex-col items-center text-center">
                 <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-yellow-500">
                   <img 
                     src="/thandikaya-ncosani.jpg" 
                     alt="Thandikaya Ncosani" 
                     className="w-full h-full object-cover"
                     onError={(e) => {
                       const target = e.target as HTMLImageElement;
                       target.style.display = 'none';
                       const fallback = target.nextElementSibling as HTMLElement;
                       if (fallback) fallback.style.display = 'flex';
                     }}
                   />
                   <div className="w-full h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                     <Users className="w-12 h-12 text-white" />
                   </div>
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Thandikaya Ncosani</h3>
                 <p className="text-lg text-cyan-400 mb-4">Governor</p>
                 <p className="text-gray-300 leading-relaxed text-sm">
                   Governance specialist focused on policy development and stakeholder engagement within the decentralized African film community.
                 </p>
               </div>
             </div>
          </div>
        </div>

        {/* Achievements Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-light text-cyan-400 mb-10 pl-5 border-l-4 border-indigo-600">
            Major Milestones
          </h2>
          <div className="relative pl-10">
            <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{
              background: "linear-gradient(180deg, #00d4ff, #5b63f7, #ff6b9d)"
            }}></div>
            
            {/* Achievement Items */}
            <div className="relative mb-12 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-lg p-8 ml-5 transition-all duration-300 hover:bg-opacity-10 hover:border-cyan-400 hover:border-opacity-30 hover:translate-x-1">
              <div className="absolute -left-8 top-8 w-3 h-3 rounded-full bg-cyan-400 border-4 border-gray-900"></div>
              <div className="inline-block text-lg font-semibold text-indigo-400 mb-3 px-3 py-1 bg-indigo-400 bg-opacity-10 rounded border border-indigo-400 border-opacity-20">
                January 11-13, 2024
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">
                First Hollywood African Cinema Connection Festival
              </h3>
              <p className="text-gray-300 mb-4">
                Launched the inaugural HACC festival, establishing the foundational event that would bridge African cinema with global audiences and create the blueprint for future international showcases.
              </p>
              <div className="bg-indigo-400 bg-opacity-10 p-4 rounded border-l-4 border-indigo-600 italic text-gray-200 mt-4">
                "Historic first event that set the stage for African Film DAO's global expansion strategy"
              </div>
            </div>

            <div className="relative mb-12 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-lg p-8 ml-5 transition-all duration-300 hover:bg-opacity-10 hover:border-cyan-400 hover:border-opacity-30 hover:translate-x-1">
              <div className="absolute -left-8 top-8 w-3 h-3 rounded-full bg-cyan-400 border-4 border-gray-900"></div>
              <div className="inline-block text-lg font-semibold text-indigo-400 mb-3 px-3 py-1 bg-indigo-400 bg-opacity-10 rounded border border-indigo-400 border-opacity-20">
                2024
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">
                DAO Foundation & Blockchain Innovation
              </h3>
              <p className="text-gray-300 mb-4">
                Established the African Film DAO as a decentralized platform for discovery, creation, and distribution of African films. Pioneered tokenization of intellectual property assets to democratize film financing.
              </p>
              <div className="bg-indigo-400 bg-opacity-10 p-4 rounded border-l-4 border-indigo-600 italic text-gray-200 mt-4">
                "Providing a decentralized platform for funding, allowing filmmakers to access capital from a global pool of investors"
              </div>
            </div>

            <div className="relative mb-12 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-lg p-8 ml-5 transition-all duration-300 hover:bg-opacity-10 hover:border-cyan-400 hover:border-opacity-30 hover:translate-x-1">
              <div className="absolute -left-8 top-8 w-3 h-3 rounded-full bg-cyan-400 border-4 border-gray-900"></div>
              <div className="inline-block text-lg font-semibold text-indigo-400 mb-3 px-3 py-1 bg-indigo-400 bg-opacity-10 rounded border border-indigo-400 border-opacity-20">
                April 2024
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">
                AdLunam Strategic Partnership
              </h3>
              <p className="text-gray-300 mb-4">
                Secured partnership with AdLunam Inc through their Zero to IDO Accelerator program, gaining access to vast networks of partners, investors, and mentors in the Web3 ecosystem.
              </p>
              <div className="bg-indigo-400 bg-opacity-10 p-4 rounded border-l-4 border-indigo-600 italic text-gray-200 mt-4">
                "Opened new opportunities for filmmakers to connect with investors and secure blockchain-based funding"
              </div>
            </div>

            <div className="relative mb-12 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-lg p-8 ml-5 transition-all duration-300 hover:bg-opacity-10 hover:border-cyan-400 hover:border-opacity-30 hover:translate-x-1">
              <div className="absolute -left-8 top-8 w-3 h-3 rounded-full bg-cyan-400 border-4 border-gray-900"></div>
              <div className="inline-block text-lg font-semibold text-indigo-400 mb-3 px-3 py-1 bg-indigo-400 bg-opacity-10 rounded border border-indigo-400 border-opacity-20">
                2025
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">
                Historic NFT Film Distribution
              </h3>
              <p className="text-gray-300 mb-4">
                Weaam Williams made history with "Two Hues" - Africa's first NFT-distributed film, establishing new precedents for blockchain-based film distribution across the continent.
              </p>
              <div className="bg-indigo-400 bg-opacity-10 p-4 rounded border-l-4 border-indigo-600 italic text-gray-200 mt-4">
                "Pioneered NFT film distribution in Africa, paving the way for Web3 entertainment innovation"
              </div>
            </div>

            <div className="relative mb-12 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-lg p-8 ml-5 transition-all duration-300 hover:bg-opacity-10 hover:border-cyan-400 hover:border-opacity-30 hover:translate-x-1">
              <div className="absolute -left-8 top-8 w-3 h-3 rounded-full bg-cyan-400 border-4 border-gray-900"></div>
              <div className="inline-block text-lg font-semibold text-indigo-400 mb-3 px-3 py-1 bg-indigo-400 bg-opacity-10 rounded border border-indigo-400 border-opacity-20">
                April 2025
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">
                HACC Live Showcase Success
              </h3>
              <p className="text-gray-300 mb-4">
                Executed highly successful live HACC showcase, demonstrating the viability of the African cinema bridge to Hollywood model and setting the foundation for expanded digital distribution.
              </p>
              <div className="bg-indigo-400 bg-opacity-10 p-4 rounded border-l-4 border-indigo-600 italic text-gray-200 mt-4">
                "More than a film festival—it's a movement, an eco-system working towards sustainability" - Weaam Williams
              </div>
            </div>

            <div className="relative mb-12 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-lg p-8 ml-5 transition-all duration-300 hover:bg-opacity-10 hover:border-cyan-400 hover:border-opacity-30 hover:translate-x-1">
              <div className="absolute -left-8 top-8 w-3 h-3 rounded-full bg-cyan-400 border-4 border-gray-900"></div>
              <div className="inline-block text-lg font-semibold text-indigo-400 mb-3 px-3 py-1 bg-indigo-400 bg-opacity-10 rounded border border-indigo-400 border-opacity-20">
                June 20-30, 2025
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">
                Global Web3 Streaming Partnership
              </h3>
              <p className="text-gray-300 mb-4">
                Partnered with myco.io (20M+ subscribers) for virtual streaming event, showcasing curated African films including gripping narratives, profound documentaries, and avant-garde content to international audiences.
              </p>
              <div className="bg-indigo-400 bg-opacity-10 p-4 rounded border-l-4 border-indigo-600 italic text-gray-200 mt-4">
                "Successfully bridged African creativity with global Web3 streaming infrastructure"
              </div>
            </div>

            <div className="relative mb-12 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-lg p-8 ml-5 transition-all duration-300 hover:bg-opacity-10 hover:border-cyan-400 hover:border-opacity-30 hover:translate-x-1">
              <div className="absolute -left-8 top-8 w-3 h-3 rounded-full bg-cyan-400 border-4 border-gray-900"></div>
              <div className="inline-block text-lg font-semibold text-indigo-400 mb-3 px-3 py-1 bg-indigo-400 bg-opacity-10 rounded border border-indigo-400 border-opacity-20">
                September 1-3, 2025
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">
                MIP Africa Technology Expansion
              </h3>
              <p className="text-gray-300 mb-4">
                Led Entertainment Technologists' expansion into Africa's film scene with Media Shippers platform debut at MIP Africa 2025, positioning at the continent's biggest film and television industry event.
              </p>
              <div className="bg-indigo-400 bg-opacity-10 p-4 rounded border-l-4 border-indigo-600 italic text-gray-200 mt-4">
                "Established presence at Africa's premier entertainment industry event, expanding technological partnerships"
              </div>
            </div>

            <div className="relative mb-12 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-lg p-8 ml-5 transition-all duration-300 hover:bg-opacity-10 hover:border-cyan-400 hover:border-opacity-30 hover:translate-x-1">
              <div className="absolute -left-8 top-8 w-3 h-3 rounded-full bg-cyan-400 border-4 border-gray-900"></div>
              <div className="inline-block text-lg font-semibold text-indigo-400 mb-3 px-3 py-1 bg-indigo-400 bg-opacity-10 rounded border border-indigo-400 border-opacity-20">
                2025 Ongoing
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">
                Multi-Platform Ecosystem Leadership
              </h3>
              <p className="text-gray-300 mb-4">
                Created comprehensive entertainment ecosystem including Holocene Films, Tribal Alchemy Productions, and strategic consulting across multiple Web3 entertainment platforms, establishing sustainable funding models.
              </p>
              <div className="bg-indigo-400 bg-opacity-10 p-4 rounded border-l-4 border-indigo-600 italic text-gray-200 mt-4">
                "Bridging continents, amplifying African creativity, proving the next generation of cinematic genius is rising from the continent"
              </div>
            </div>
          </div>
        </div>

        {/* DAO Composition */}
        <div className="mb-20">
          <h2 className="text-4xl font-light text-cyan-400 mb-10 pl-5 border-l-4 border-indigo-600">
            DAO Composition
          </h2>
          <div className="mb-8">
            <h3 className="text-2xl font-medium text-white mb-4">Diverse Industry Collective</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              The African Film DAO, unlike any other organisation, is composed of filmmakers from all facets of the industry—writers, directors, actors, crew and producers, creating a truly decentralized creative ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-lg p-8 transition-all duration-300 hover:bg-opacity-10 hover:border-pink-400 hover:border-opacity-30">
              <h3 className="text-xl font-medium text-pink-400 mb-4">
                Writers & Directors
              </h3>
              <p className="text-gray-300">
                Creative visionaries developing authentic African narratives and bringing stories to life through innovative blockchain-enabled production models.
              </p>
            </div>
            <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-lg p-8 transition-all duration-300 hover:bg-opacity-10 hover:border-pink-400 hover:border-opacity-30">
              <h3 className="text-xl font-medium text-pink-400 mb-4">
                Actors & Performers
              </h3>
              <p className="text-gray-300">
                Talent collective participating in Web3 film production and NFT-based distribution models across the continent.
              </p>
            </div>
            <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-lg p-8 transition-all duration-300 hover:bg-opacity-10 hover:border-pink-400 hover:border-opacity-30">
              <h3 className="text-xl font-medium text-pink-400 mb-4">
                Crew & Producers
              </h3>
              <p className="text-gray-300">
                Technical and production specialists implementing blockchain technology solutions for decentralized film financing and distribution.
              </p>
            </div>
            <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-lg p-8 transition-all duration-300 hover:bg-opacity-10 hover:border-pink-400 hover:border-opacity-30">
              <h3 className="text-xl font-medium text-pink-400 mb-4">
                Technology Partners
              </h3>
              <p className="text-gray-300">
                Web3 developers and blockchain specialists creating infrastructure for tokenized IP assets and decentralized funding mechanisms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;