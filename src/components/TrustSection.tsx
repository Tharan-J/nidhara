'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Link2, 
  SlidersHorizontal, 
  BadgeAlert, 
  Lock, 
  CheckCircle2 
} from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPillars = [
    {
      num: '01',
      title: 'Your consent comes first',
      subtitle: 'Information is shared only with appropriate consent.',
      icon: ShieldCheck,
      description:
        'We never sell your business data, send unsolicited broker leads, or share your dossier with lenders without your explicit, recorded approval. You decide who sees your records and when.',
      badge: 'Granular Consent',
    },
    {
      num: '02',
      title: 'Your records remain traceable',
      subtitle: 'Important extracted figures can be linked back to their source documents.',
      icon: Link2,
      description:
        'Every calculated number — whether monthly revenue, customer volume, or operating expense — is tied to a verifiable photograph of your original records. No black-box approximations.',
      badge: '100% Audit Trail',
    },
    {
      num: '03',
      title: 'You stay in control',
      subtitle: 'Review and confirm important information before it is included in your application-support pack.',
      icon: SlidersHorizontal,
      description:
        'Before any readiness summary or support pack is finalized, Nidhara presents the extracted facts to you for direct confirmation. If something is incomplete or incorrect, you edit it instantly.',
      badge: 'Borrower Agency',
    },
    {
      num: '04',
      title: 'No false promises',
      subtitle: 'Nidhara does not guarantee loan approval or pretend to make lending decisions.',
      icon: BadgeAlert,
      description:
        'We believe in radical honesty. We do not promise instant sanctions or act as a shadow lender. We prepare your evidence rigorously so that formal lenders can evaluate your real merit fairly.',
      badge: 'Ethical Transparency',
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-white border-t border-cream-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 text-navy font-semibold text-xs tracking-wider uppercase">
            <Lock className="w-3.5 h-3.5 text-navy" />
            <span>ETHICAL FINTECH ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight font-display leading-[1.15]">
            Your business. Your information.<br />
            <span className="text-navy underline decoration-teal/40 decoration-4 underline-offset-8">
              Your decision.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-muted leading-relaxed font-normal pt-2">
            Built from the ground up for dignity, data sovereignty, and transparent borrower control.
          </p>
        </div>

        {/* 4 Trust Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {trustPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="bg-cream-light/60 rounded-3xl p-8 sm:p-9 border border-cream-border hover:border-teal/30 hover:bg-white shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-teal tracking-widest uppercase">
                      PILLAR {pillar.num}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white text-xs font-bold text-navy border border-cream-border">
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-teal-soft flex items-center justify-center text-teal mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-navy font-display mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-sm font-semibold text-orange mb-3">
                    {pillar.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-cream-border/80 flex items-center gap-2 text-xs font-semibold text-teal">
                  <CheckCircle2 className="w-4 h-4 text-teal" />
                  <span>Guaranteed by Nidhara Borrower Charter</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
