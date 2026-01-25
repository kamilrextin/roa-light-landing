
import React from 'react';

const CaseStudy: React.FC<{ company: string, metric: string, desc: string }> = ({ company, metric, desc }) => (
  <div className="p-12 border border-white/5 bg-zinc-950 hover:bg-zinc-900/50 transition-all group">
    <h4 className="text-zinc-500 font-black text-lg mb-2 tracking-tighter uppercase group-hover:text-white transition-colors">{company}</h4>
    <div className="text-brand-green text-4xl font-black mb-8 leading-tight tracking-tighter">{metric}</div>
    <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export const Proof: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-900/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="text-brand-green text-[10px] font-black uppercase tracking-widest mb-4 block">Case Studies</span>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">PROOF IN PIPELINE.</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-32">
          <CaseStudy 
            company="Cin7" 
            metric="-30% Cost per SQL" 
            desc="Reduced acquisition costs while generating more qualified demand through full-stack system optimization." 
          />
          <CaseStudy 
            company="Odaseva" 
            metric="+45% Pipeline Growth" 
            desc="Increased qualified leads and full-funnel pipeline by aligning activation with modern data infrastructure." 
          />
          <CaseStudy 
            company="eSUB" 
            metric="-39% Cost per SQL" 
            desc="Efficiency gains driven by fixing attribution breaks and audience saturation issues identified in the ROA." 
          />
        </div>

        <div className="max-w-4xl mx-auto text-center border-t border-brand-green/20 pt-32">
           <blockquote className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter mb-12 uppercase italic">
            "42 Agency are problem solvers. They bring a holistic view to improve results. That's what I look for in a partner."
           </blockquote>
           <div className="flex flex-col items-center">
              <span className="text-white font-black uppercase tracking-widest text-sm mb-1">Eric Stockton</span>
              <span className="text-brand-green font-bold uppercase tracking-widest text-[10px]">CMO — Evolve IP</span>
           </div>
        </div>
      </div>
    </section>
  );
};
