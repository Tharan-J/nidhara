'use client';

import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section id="get-started" className="py-20 sm:py-28 bg-teal text-white relative overflow-hidden">
      {/* Subtle background ambient accents */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-green rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-navy rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-bold text-xs tracking-wider uppercase border border-white/20">
          <span>GET LOAN-READY</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          Your business deserves a clearer path to credit.
        </h2>

        {/* Supporting Line */}
        <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto font-light leading-relaxed">
          Start with a conversation in your preferred language. Organise the records you already have and know where you stand.
        </p>

        {/* Primary Button */}
        <div className="pt-3 flex justify-center">
          <a
            href="#get-started"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-navy hover:bg-navy-dark text-white font-bold text-base transition-all shadow-app-card group"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default CtaSection;
