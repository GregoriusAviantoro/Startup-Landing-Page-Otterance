import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="bg-light-blue text-dark min-h-screen w-full font-body relative overflow-hidden">
      {/* Global background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full filter blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full filter blur-3xl animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
      </div>
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="relative">
          <HeroSection />
          {/* Decorative connector */}
          <div className="absolute left-0 right-0 h-40 bg-gradient-to-b from-light-blue to-transparent -bottom-20 z-20"></div>
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>;
}