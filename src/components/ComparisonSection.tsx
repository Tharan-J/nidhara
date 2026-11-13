'use client';

import React from 'react';
import { Search, ScanLine, Users, CheckCircle2, XCircle } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const comparisons = [
    {
      category: 'Loan Portals',
      conventionalTitle: 'Scheme Discovery Portals',
      conventionalDesc: 'Help find schemes and list generic eligibility criteria.',
      nidharaAdvantage: 'Nidhara helps prepare the actual evidence needed for the application.',
      icon: Search,
    },
    {
      category: 'OCR Tools',
      conventionalTitle: 'Generic Document Scanners',
      conventionalDesc: 'Extract raw text and digitise paper receipts into PDF files.',
      nidharaAdvantage: 'Nidhara connects records, checks inconsistencies and maintains source links.',
      icon: ScanLine,
    },
    {
      category: 'Manual Intermediaries',
      conventionalTitle: 'Manual Assistance',
      conventionalDesc: 'Depends on repeated explanations and opaque third-party handling.',
      nidharaAdvantage: 'Nidhara gives the borrower a visible, guided and traceable process.',
      icon: Users,
    },
  ];

  return (
    <section id="why-nidhara" className="py-20 sm:py-28 bg-[#F4F8FA] border-b border-paleblue-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-teal font-bold text-xs tracking-wider uppercase border border-mint-border">
            <span>THE CORE DIFFERENTIATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
            Not just a loan search.<br />
            <span className="text-teal">Not just document scanning.</span>
          </h2>
        </div>

        {/* Three Side-by-Side Comparison Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {comparisons.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-paleblue-border shadow-xs hover:border-teal/30 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-paleblue text-teal flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-navy/50 block">
                        Comparison 0{idx + 1}
                      </span>
                      <h3 className="text-base font-bold text-navy">
                        {c.category}
                      </h3>
                    </div>
                  </div>

                  {/* What Conventional Approaches Do */}
                  <div className="p-4 rounded-2xl bg-paleblue/50 border border-paleblue-border space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-navy/50 block">
                      Conventional Focus:
                    </span>
                    <p className="text-xs text-navy/70 leading-relaxed font-normal">
                      {c.conventionalDesc}
                    </p>
                  </div>

                  {/* What Nidhara Delivers */}
                  <div className="p-4 rounded-2xl bg-mint border border-mint-border space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal block flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green" />
                      <span>The Nidhara Advantage:</span>
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-navy leading-snug">
                      {c.nidharaAdvantage}
                    </p>
                  </div>

                </div>

                <div className="pt-2 text-[11px] text-navy/40 border-t border-paleblue-border">
                  Keeps the borrower in full control of their data.
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;
