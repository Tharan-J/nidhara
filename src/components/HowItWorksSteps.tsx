'use client';

import React from 'react';
import Image from 'next/image';
import { Mic, FolderSync, FileCheck2 } from 'lucide-react';

export const HowItWorksSteps: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Talk',
      tag: 'Voice-Led Intake',
      desc: 'Explain your business and loan requirement in your language.',
      sub: 'Speak naturally in Tamil, Hindi, Kannada, or English without filling complex forms.',
      image: '/assets/step-talk.png',
      alt: 'Nidhara Voice Assistant in Tamil',
      icon: Mic,
    },
    {
      step: '02',
      title: 'Organise',
      tag: 'Evidence Extraction',
      desc: 'Nidhara extracts and connects your available business records.',
      sub: 'Turns notebook tallies, milk collection slips and UPI screenshots into reconciled proof.',
      image: '/assets/step-organise.png',
      alt: 'Nidhara Document and Business Profile Verification',
      icon: FolderSync,
    },
    {
      step: '03',
      title: 'Prepare',
      tag: 'Readiness Dossier',
      desc: 'Understand requirements, resolve missing information and create an application-support pack.',
      sub: 'Know what is ready, resolve documentation gaps, and take structured evidence to your lender.',
      image: '/assets/step-prepare.png',
      alt: 'Nidhara 92% Loan Readiness Score',
      icon: FileCheck2,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#FAFBFD] border-b border-paleblue-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-teal font-bold text-xs tracking-wider uppercase border border-mint-border">
            <span>THE 3-STEP PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
            Simple for the borrower.<br />
            <span className="text-teal">Structured behind the scenes.</span>
          </h2>
        </div>

        {/* 3 Step Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-white rounded-3xl p-6 border border-paleblue-border shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-teal tracking-widest">
                      STEP {s.step}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-mint text-teal flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-navy font-display">
                      {s.title}
                    </h3>
                    <p className="text-xs font-bold text-teal uppercase tracking-wider mt-0.5">
                      {s.tag}
                    </p>
                  </div>

                  <p className="text-sm font-semibold text-navy/85 leading-snug">
                    {s.desc}
                  </p>

                  <p className="text-xs text-navy/60 leading-relaxed font-normal">
                    {s.sub}
                  </p>
                </div>

                {/* Actual App Screenshot Crop Visual */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-paleblue-border bg-paleblue/50 shadow-inner">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-contain p-2"
                  />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSteps;
