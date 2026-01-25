
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="https://42agency.com" className="flex items-center group cursor-pointer">
          <img
            src="/logo.png"
            alt="42 Agency"
            className="h-10 w-auto transition-transform group-hover:scale-105"
          />
        </a>
        
        <nav className="hidden md:flex items-center space-x-10 text-xs font-bold tracking-widest text-zinc-500">
          <a href="#problem" className="hover:text-white transition-colors">THE PROBLEM</a>
          <a href="#roa" className="hover:text-white transition-colors">THE ROA</a>
          <a href="#snapshot" className="hover:text-white transition-colors">FREE SNAPSHOT</a>
          <a href="#paths" className="hover:text-white transition-colors">INVESTMENT</a>
        </nav>

        <a href="#form" className="bg-brand-green text-white px-6 py-2.5 text-xs font-black uppercase tracking-widest hover:bg-brand-green/90 transition-all shadow-lg shadow-brand-green/10">
          GET STARTED
        </a>
      </div>
    </header>
  );
};
