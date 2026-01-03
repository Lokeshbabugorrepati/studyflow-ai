import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111118] dark:text-white font-display overflow-x-hidden">
      <div className="relative flex min-h-screen w-full flex-col group/design-root">
        <div className="layout-container flex h-full grow flex-col">
          <Header />
          <div className="flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 px-4 sm:px-6 lg:px-8">
              <Hero />
              <Features />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
