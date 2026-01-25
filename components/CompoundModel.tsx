
import React from 'react';

const Layer: React.FC<{
  title: string;
  items: string;
  description: string;
  order: string;
}> = ({ title, items, description, order }) => (
  <div className="relative pl-20 py-12 group border-b border-white/5 last:border-b-0">
    <div className="absolute left-0 top-12 w-12 h-12 border border-brand-green/20 rounded-full flex items-center justify-center font-black text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
      {order}
    </div>
    <div className="mb-4 flex items-center">
      <h3 className="text-3xl font-black uppercase tracking-tighter mr-6 group-hover:translate-x-1 transition-transform">{title}</h3>
      <div className="h-px flex-grow bg-white/5 group-hover:bg-brand-green/20 transition-all"></div>
    </div>
    <p className="text-brand-green/60 font-mono text-[10px] font-black uppercase tracking-[0.2em] mb-4">{items}</p>
    <p className="text-zinc-500 text-sm md:text-base max-w-2xl leading-relaxed">{description}</p>
  </div>
);

export const CompoundModel: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest mb-6 block">Our Philosophy</span>
          <h2 className="text-5xl md:text-6xl font-black mb-8 uppercase tracking-tighter">Demand Gen That <br /><span className="text-brand-green">Compounds.</span></h2>
          <p className="text-zinc-500 text-lg md:text-xl">Execution follows decisions. We build the full stack so each layer reinforces the others, creating a growth engine that scales without proportional spend increases.</p>
        </div>
        
        <div className="max-w-4xl mx-auto border border-white/5 bg-black/50 p-2 md:p-8 backdrop-blur-sm">
          <Layer 
            order="01"
            title="Data Layer"
            items="FIRST-PARTY ENRICHMENT | AUDIENCE BUILDING | INTENT"
            description="Better data means better targeting. We leverage Clay, Clearbit, and custom intent signals to reach your 100% addressable market."
          />
          <Layer 
            order="02"
            title="Activation Layer"
            items="PAID MEDIA | OUTBOUND | CREATIVE | CONTENT"
            description="Omnichannel activation that targets both in-market buyers (20%) and out-of-market future customers (80%)."
          />
          <Layer 
            order="03"
            title="Measurement Layer"
            items="BRAND RECALL | CHANNEL IMPACT | INCREMENTALITY"
            description="True channel impact analysis. We move beyond platform vanity metrics to incrementality and pipeline correlation."
          />
          <Layer 
            order="04"
            title="Operations Layer"
            items="REVOPS | CRM ARCHITECTURE | ATTRIBUTION SETUP"
            description="The systems catch the growth. Marketing and Sales working from the same single source of truth."
          />
        </div>
      </div>
    </section>
  );
};
