
import React from 'react';

export const TheProblem: React.FC = () => {
  return (
    <section id="problem" className="py-32 bg-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-brand-green text-[10px] font-black uppercase tracking-widest mb-6 block">The Gap</span>
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-none tracking-tighter uppercase">
              The Agency <br />Churn <br /><span className="text-zinc-700">Loop.</span>
            </h2>
            <div className="space-y-8 text-xl text-zinc-400 leading-relaxed">
              <p>
                Hire agency. Run ads. Report MQLs. Blame sales when pipeline stalls. Churn. <span className="text-white font-bold">Repeat.</span>
              </p>
              <p>
                The problem isn't execution. It's <span className="text-brand-green italic">single-layer thinking</span>. Most agencies operate in a silo, ignoring your data infrastructure and measurement models.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="p-10 border border-white/5 bg-zinc-900/10 hover:border-brand-green/30 transition-all group">
              <h4 className="text-white font-black mb-4 uppercase tracking-tighter text-xl group-hover:text-brand-green transition-colors">Execution Without Data</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">Optimization at the platform level is a race to the bottom. If your campaigns run on weak data, your pipeline results will be inconsistent.</p>
            </div>
            <div className="p-10 border border-white/5 bg-zinc-900/10 hover:border-brand-green/30 transition-all group">
              <h4 className="text-white font-black mb-4 uppercase tracking-tighter text-xl group-hover:text-brand-green transition-colors">Broken Revenue Systems</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">Leads from marketing aren't matching CRM revenue. Attribution is a black box. Your data isn't actionable for the leadership team.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
