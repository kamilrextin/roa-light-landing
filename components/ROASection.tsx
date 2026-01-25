
import React from 'react';

export const ROASection: React.FC = () => {
  const areas = [
    { title: "Pipeline Analysis", desc: "Where does revenue actually come from? Not what attribution says—what's real when we connect campaigns to closed-won." },
    { title: "Deal Flow Audit", desc: "Why do deals close? Why do they stall? We find the objections and messaging gaps within your CRM flow." },
    { title: "Messaging Match", desc: "Does your content match what resonates in sales conversations? We audit your funnel's messaging architecture." },
    { title: "Technical Infra", desc: "The unsexy stuff. Tracking, pixels, data flows. We fix the foundational breaks that sabotage scale." },
    { title: "RevOps Alignment", desc: "Lifecycle stages, lead routing, and source tracking. We build systems that marketing and sales actually trust." },
    { title: "Reporting Architecture", desc: "Custom measurement models that help you make decisions. No more looking at dashboards with zero utility." }
  ];

  return (
    <section id="roa" className="py-32 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-brand-green text-[10px] font-black uppercase tracking-widest mb-4 block">The Methodology</span>
          <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">REVENUE <br />OPPORTUNITY <br /><span className="text-zinc-700">ANALYSIS.</span></h2>
          <p className="text-xl text-zinc-500 max-w-3xl leading-relaxed">
            The ROA is a 4-week diagnostic across your full revenue stack. We don't run campaigns until we understand your business. It's our methodology, not an upsell.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {areas.map((area, idx) => (
            <div key={idx} className="p-12 bg-black hover:bg-brand-green group transition-all duration-500">
              <span className="text-zinc-600 text-[10px] font-black uppercase mb-6 block group-hover:text-white/50">ROA-0{idx+1}</span>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-white group-hover:text-white">{area.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-white/80">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
