"use client"
import React, { useState } from 'react';
import { Zap, Home, Play, Sparkles } from 'lucide-react';
import Link from 'next/link';

function App() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div >
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI Video Generation
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Showcase
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Explore the power of Google's Gemini (Veo3) with two interactive 
            demonstrations. Select a use case below to get started.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
          <div
            className={`relative group cursor-pointer transition-all duration-500 ${
              hoveredCard === 'marketing' ? 'scale-105' : ''
            }`}
            onMouseEnter={() => setHoveredCard('marketing')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          
          <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 h-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
            <div className="flex flex-col items-center text-center h-full">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  Marketing Video Generator
                </h3>
                
                <p className="text-slate-300 mb-8 leading-relaxed flex-grow">
                  Create a high-energy ad for the 'Supplmax' energy drink. 
                  Input product features and let AI do the rest.
                </p>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                     <Link href="/suplimax">Generate Suplimax Ad</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Real Estate Video Tour Card */}
          <div
            className={`relative group cursor-pointer transition-all duration-500 ${
              hoveredCard === 'realestate' ? 'scale-105' : ''
            }`}
            onMouseEnter={() => setHoveredCard('realestate')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          
          <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 h-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
            <div className="flex flex-col items-center text-center h-full">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl mb-6 shadow-lg">
                <Home className="w-8 h-8 text-white" />
              </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  Real Estate Video Tour
                </h3>
                
                <p className="text-slate-300 mb-8 leading-relaxed flex-grow">
                  Generate a virtual tour for a luxury Beverly Hills property 
                  from a real listing.
                </p>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                    <Link href="/real-estate">Generate Property Tour</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm">
            Powered by Faiq Ahmad (Veo3) • Built with Next & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;