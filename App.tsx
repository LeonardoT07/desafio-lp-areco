import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Credentials } from './components/Credentials';
import { Challenges } from './components/Challenges';
import { ThreePillars } from './components/ThreePillars';
import { PracticalBenefits } from './components/PracticalBenefits';
import { DashboardValue } from './components/DashboardValue';
import { Sectors } from './components/Sectors';
import { TaxReform } from './components/TaxReform';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden font-sans bg-white">
      <Header />
      <main>
        <Hero />
        <Credentials />
        <Challenges />
        <ThreePillars />
        <PracticalBenefits />
        <DashboardValue />
        <Sectors />
        <TaxReform />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;