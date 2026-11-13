'use client';

import React from 'react';
import { Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const DifferentiatorSection: React.FC = () => {
  const points = [
    {
      title: 'Connects informal business records with structured evidence.',
      description:
        'Turns daily notebooks, milk slips and UPI receipts into reconciled, source-linked proof that lenders can easily verify.',
    },
    {
      title: 'Matches available evidence against scheme and lender requirements.',
      description:
        'Audits requirements upfront so you understand potential eligibility and know exactly what is missing before stepping into a branch.',
    },
    {
      title: 'Keeps information traceable and the borrower in control.',
      description:
        'Every number links back to your original records. You review, confirm and approve your details before any dossier is created.',
    },
  ];

  return (
    <section id="why-nidhara" className="py-20 sm:py-28 bg-navy text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-light text-teal-light font-bold text-xs tracking-wider uppercase border border-teal/30">
            <span>THE NIDHARA DIFFERENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            More than finding a loan.<br />
            <span className="text-teal-light">Preparing for the journey.</span>
          </h2>
        </div>

        {/* Three Short Difference Points */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-navy-light/70 rounded-3xl p-7 border border-white/10 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </div>

                <h3 className="text-base font-bold text-white leading-snug">
                  {pt.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {pt.description}
              </p>
            </div>
          ))}
        </div>

        {/* App Philosophy Note */}
        <div className="mt-12 text-center text-xs text-slate-400">
          <p>
            Digitising a document is not enough — Nidhara connects your business evidence directly to formal credit criteria.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DifferentiatorSection;
