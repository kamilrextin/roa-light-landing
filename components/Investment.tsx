
import React from 'react';

export const Investment: React.FC = () => {
  return (
    <section id="paths" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <span className="text-brand-green text-[10px] font-black uppercase tracking-widest mb-4 block">Pricing & Engagement</span>
          <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">THE INVESTMENT.</h2>
          <p className="text-zinc-500 text-xl leading-relaxed">Lower friction to commit. A fast-tracked diagnostic to fix your most immediate revenue leaks.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative p-[1px] bg-white/10 group hover:bg-brand-green transition-all duration-700">
            <div className="bg-zinc-950 p-12 md:p-24 text-center">
              <div className="inline-block px-4 py-1 bg-brand-green text-white text-[10px] font-black uppercase tracking-widest mb-10 shadow-lg shadow-brand-green/20">
                MKT1 CUSTOMER EXCLUSIVE
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter">ROA LIGHT</h3>
              
              <div className="flex flex-col md:flex-row items-center justify-center mb-12 space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex flex-col">
                  <span className="text-xs font-black text-zinc-600 uppercase tracking-widest mb-1">Standard Rate</span>
                  <span className="text-2xl text-zinc-600 line-through font-bold">$2,500</span>
                </div>
                <div className="hidden md:block w-px h-12 bg-white/5"></div>
                <div className="flex flex-col">
                  <span className="text-xs font-black text-brand-green uppercase tracking-widest mb-1">MKT1 Offer</span>
                  <span className="text-7xl font-black text-white">$2,125*</span>
                </div>
              </div>
              
              <p className="text-zinc-400 mb-16 max-w-xl mx-auto text-lg leading-relaxed">
                A 10-day high-impact diagnostic focused on your core revenue architecture. 100% of the cost is credited back towards your first month of execution.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left mb-16 max-w-2xl mx-auto border-y border-white/5 py-12">
                {[
                  "15% Exclusive MKT1 Discount",
                  "100% Retainer Credit Policy",
                  "Ad Account Efficiency Audit",
                  "CRM Surface Hygiene Check",
                  "Conversion Path Audit",
                  "Prioritized GTM Fixes"
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center mr-4">
                      <svg className="w-3 h-3 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-zinc-300 text-sm font-bold uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
              
              <a href="#form" className="bg-white text-black text-xl font-black py-7 px-16 hover:bg-brand-green hover:text-white transition-all flex items-center justify-center mx-auto group tracking-tighter uppercase">
                GET STARTED NOW
                <svg className="ml-4 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <p className="mt-12 text-zinc-600 text-[10px] font-mono uppercase tracking-[0.2em]">
                *15% MKT1 subscriber discount. 100% credited toward retainer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
