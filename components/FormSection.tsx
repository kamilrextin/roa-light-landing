
import React from 'react';

export const FormSection: React.FC = () => {
  return (
    <section id="form" className="py-32 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-green text-[10px] font-black uppercase tracking-widest mb-4 block">Get Started</span>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6">REQUEST YOUR DIAGNOSTIC.</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Fill out the form below and we'll reach out within 24 hours to schedule your kickoff.
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-black border border-white/10 px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green transition-colors"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-3">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-black border border-white/10 px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green transition-colors"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-3">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full bg-black border border-white/10 px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green transition-colors"
                  placeholder="Acme Inc."
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-3">
                  Website URL *
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  required
                  className="w-full bg-black border border-white/10 px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green transition-colors"
                  placeholder="https://company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="adspend" className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-3">
                Monthly Ad Spend *
              </label>
              <select
                id="adspend"
                name="adspend"
                required
                className="w-full bg-black border border-white/10 px-5 py-4 text-white focus:outline-none focus:border-brand-green transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-black">Select range...</option>
                <option value="<25k" className="bg-black">&lt;$25K</option>
                <option value="25-50k" className="bg-black">$25K - $50K</option>
                <option value="50-100k" className="bg-black">$50K - $100K</option>
                <option value="100k+" className="bg-black">$100K+</option>
              </select>
            </div>

            <div>
              <label htmlFor="challenge" className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-3">
                What's your biggest GTM challenge right now?
              </label>
              <textarea
                id="challenge"
                name="challenge"
                rows={4}
                className="w-full bg-black border border-white/10 px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green transition-colors resize-none"
                placeholder="Tell us about the revenue bottlenecks you're experiencing..."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-brand-green text-white text-xl font-black py-6 px-12 hover:bg-brand-green/90 transition-all flex items-center justify-center group tracking-tighter uppercase shadow-xl shadow-brand-green/20"
              >
                REQUEST MY DIAGNOSTIC
                <svg className="ml-4 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-zinc-500 text-xs font-bold uppercase tracking-tight">10-Day Turnaround</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-zinc-500 text-xs font-bold uppercase tracking-tight">100% Credit Policy</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <span className="text-zinc-500 text-xs font-bold uppercase tracking-tight">No Strings Attached</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
