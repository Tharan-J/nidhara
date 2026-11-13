'use client';

import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-navy text-white relative overflow-hidden">
      
      {/* Subtle ambient light blooms */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-light text-teal-light font-bold text-xs tracking-wider uppercase border border-white/10">
          <span>CREDIT READINESS FOR MICRO-ENTERPRISES</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight font-display">
          Your business has a story.<br />
          <span className="text-teal-light">Let's make its evidence ready.</span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
          Start with what you already have. Nidhara helps you organise the next step.
        </p>

        {/* Primary Action Button */}
        <div className="pt-2 flex justify-center">
          <a
            href="#dashboard"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FF693D] hover:bg-[#E05327] text-white font-bold text-base transition-all shadow-[0_10px_25px_-5px_rgba(255,105,61,0.4)] group"
          >
            <span>Start Your Credit Journey</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mandatory Regulatory Disclaimer */}
        <div className="pt-10 max-w-2xl mx-auto">
          <div className="p-4 rounded-2xl bg-navy-light/60 border border-white/10 text-xs text-slate-300 flex items-start gap-3 text-left">
            <ShieldCheck className="w-4 h-4 text-teal-light shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Regulatory Notice:</strong> Nidhara is a credit-readiness and application-support platform. It does not lend, sanction or guarantee loans. Final lending decisions, terms and disbursements remain the independent authority of regulated financial institutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCtaSection;
