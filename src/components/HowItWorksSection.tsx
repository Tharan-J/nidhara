'use client';

import React from 'react';
import { Mic, FileCheck, CheckCircle2 } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Tell us about your business.',
      desc: 'Speak naturally in your language. Answer simple questions about your daily trade, earnings and loan purpose.',
      icon: Mic,
      uiSnippet: (
        <div className="p-3 bg-paleblue rounded-xl border border-paleblue-border text-xs space-y-1.5">
          <p className="font-tamil text-teal font-semibold">"வணக்கம்! உங்கள் தொழில் விவரம் சொல்லுங்கள்."</p>
          <p className="text-navy/70 text-[11px]">"I run a tailoring unit with 2 machines."</p>
        </div>
      ),
    },
    {
      num: '02',
      title: 'Organise your business evidence.',
      desc: 'Capture photos of whatever records you currently have — notebooks, milk slips, receipts or UPI transactions.',
      icon: FileCheck,
      uiSnippet: (
        <div className="p-3 bg-mint rounded-xl border border-mint-border text-xs flex items-center justify-between">
          <span className="font-semibold text-navy">4 Records Linked</span>
          <span className="text-green font-bold text-[11px]">✓ No Duplicates</span>
        </div>
      ),
    },
    {
      num: '03',
      title: 'Understand requirements and prepare your application.',
      desc: 'See which schemes match your profile, know what is missing, and get a clear readiness pack before applying.',
      icon: CheckCircle2,
      uiSnippet: (
        <div className="p-3 bg-white rounded-xl border border-mint-border text-xs flex items-center justify-between shadow-xs">
          <span className="font-bold text-navy">Mudra Shishu Ready</span>
          <span className="px-2 py-0.5 rounded-full bg-teal text-white font-bold text-[10px]">92% Ready</span>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-helps" className="py-20 sm:py-28 bg-paleblue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-teal font-bold text-xs tracking-wider uppercase border border-mint-border">
            <span>HOW NIDHARA HELPS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
            One guided journey.<br />
            <span className="text-teal">Three simple steps.</span>
          </h2>
        </div>

        {/* Three Compact Visual Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-3xl p-7 shadow-app-card border border-paleblue-border flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-teal tracking-widest">
                      STEP {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-mint text-teal flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-navy leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-navy/70 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Compact In-Card Visual */}
                <div className="pt-2">
                  {step.uiSnippet}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
