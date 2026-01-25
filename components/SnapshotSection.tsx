
import React from 'react';

export const SnapshotSection: React.FC = () => {
  return (
    <section id="snapshot" className="py-32 bg-zinc-950 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <span className="text-brand-green text-[10px] font-black uppercase tracking-widest mb-6 block">Low Risk, High Impact</span>
          <h2 className="text-5xl md:text-7xl font-black mb-10 leading-none tracking-tighter uppercase">THE DIAGNOSTIC <br /><span className="text-brand-green">TASTE.</span></h2>
          <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
            We spend 4 hours in your accounts to find the problems your current agency hasn't mentioned. It's a high-conviction POV that earns us the right to go deeper.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
             {[
               { title: "Point of View", desc: "No generic advice. We name problems you probably haven't seen." },
               { title: "Board-Ready", desc: "A deck you can present to your leadership team in 20 minutes." },
               { title: "Clean Break", desc: "Keep the snapshot. Use it to fix your leaks. No hard feelings." }
             ].map((item, i) => (
               <div key={i} className="flex items-start group">
                 <div className="w-10 h-10 rounded-full border border-brand-green/30 flex items-center justify-center text-xs font-black mt-1 group-hover:bg-brand-green group-hover:text-white group-hover:border-brand-green transition-all duration-300 shrink-0">
                  0{i+1}
                 </div>
                 <div className="ml-8">
                    <h4 className="text-white font-black uppercase text-lg tracking-tighter mb-2">{item.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};
