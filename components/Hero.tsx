
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-32 overflow-hidden border-b border-white/5">
      {/* Brand accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-brand-green-glow -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-10">
            <span className="inline-block px-3 py-1 bg-brand-green/10 border border-brand-green/20 text-brand-green text-[10px] font-black tracking-widest uppercase">
              Diagnostic Taste
            </span>
            <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">
              Exclusive: 15% MKT1 discount on ROA Light
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-10 text-white">
            REVENUE <br />
            IS NOT <br />
            <span className="text-brand-green">EXECUTION.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-2xl mb-12">
            Most agencies run ads. We fix the system first. Get a board-ready diagnostic that reveals why your pipeline isn't compounding—and exactly what to do about it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#form" className="bg-brand-green text-white px-10 py-6 text-lg font-black uppercase tracking-tighter hover:bg-brand-green/90 transition-all flex items-center justify-center group shadow-xl shadow-brand-green/20">
              GET YOUR DIAGNOSTIC
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
