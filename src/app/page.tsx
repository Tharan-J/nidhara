'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemScaleSection from '@/components/ProblemScaleSection';
import FintechDashboard from '@/components/FintechDashboard';
import HowItWorksSteps from '@/components/HowItWorksSteps';
import ComparisonSection from '@/components/ComparisonSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#FFFDF7] flex flex-col selection:bg-[#087F78] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* 1. Hero: Resembles uploaded reference with single dominant mobile app mockup */}
      <HeroSection onExploreClick={scrollToHowItWorks} />

      {/* 2. The Problem: Show the Scale (Statistics Strip, Flow Diagram & Difficult Points) */}
      <ProblemScaleSection />

      {/* 3. The Nidhara Solution: Realistic Working Web Dashboard Centrepiece */}
      <FintechDashboard />

      {/* 4. How It Works: Three Steps (Talk, Organise, Prepare with real app crops) */}
      <HowItWorksSteps />

      {/* 5. Why Nidhara: 3-Way Comparison Matrix (Portals, OCR, Manual vs Nidhara) */}
      <ComparisonSection />

      {/* 6. Final Call to Action with Regulatory Notice */}
      <FinalCtaSection />

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
