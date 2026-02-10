
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TheProblem } from './components/TheProblem';
import { CompoundModel } from './components/CompoundModel';
import { ROASection } from './components/ROASection';
import { SnapshotSection } from './components/SnapshotSection';
import { Investment } from './components/Investment';
import { Proof } from './components/Proof';
import { FormSection } from './components/FormSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-white selection:text-black">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TheProblem />
        <CompoundModel />
        <ROASection />
        <SnapshotSection />
        <Proof />
        <Investment />
        <FormSection />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
