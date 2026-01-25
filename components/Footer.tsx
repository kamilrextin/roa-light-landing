
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <a href="https://42agency.com" className="flex items-center mb-10 md:mb-0 group">
            <img
              src="/logo.png"
              alt="42 Agency"
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
          </a>

          <nav className="flex flex-wrap gap-x-12 gap-y-4 text-xs font-black uppercase tracking-[0.2em] text-zinc-600">
            <a href="https://www.linkedin.com/company/42agency/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">LinkedIn</a>
            <a href="https://42agency.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">42agency.com</a>
          </nav>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[10px] font-black text-zinc-800 uppercase tracking-widest">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} 42 AGENCY INC. BUILT FOR SCALE.
          </div>
          <div>
            TORONTO | NEW YORK | LONDON
          </div>
        </div>
      </div>
    </footer>
  );
};
