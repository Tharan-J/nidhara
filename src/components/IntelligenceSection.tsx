'use client';

import React, { useState } from 'react';
import { 
  Languages, 
  Binary, 
  FileCheck, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Eye,
  Link as LinkIcon
} from 'lucide-react';

export const IntelligenceSection: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number>(0);

  const layers = [
    {
      num: '01',
      name: 'Borrower Guidance Agent',
      badge: 'Multilingual Empathy',
      icon: Languages,
      accent: 'teal',
      role: 'Talks naturally in your language, asks simple contextual questions, and builds your profile without intimidating forms.',
      features: [
        'Fluent in Tamil, Hindi, Kannada, Telugu, Marathi, Bengali & Indian English',
        'Translates formal financial terms ("working capital", "hypothecation") into everyday trade metaphors',
        'Contextual question engine — tailors dialogue to whether you run a dairy, tailor shop, or SHG unit',
        'Explains every single step conversationally before asking for any document',
      ],
      sampleOutput: {
        title: 'Conversational Business Intake',
        quote: '"வணக்கம்! உங்கள் தையல் தொழில் விவரம் பதிவு செய்யப்பட்டது. இப்போது நீங்கள் புதிய மெஷின் வாங்க திட்டமிடுகிறீர்களா?"',
        caption: 'Adapts dialect and tone to ensure comfortable, pressure-free dialogue.',
      },
    },
    {
      num: '02',
      name: 'Evidence Intelligence Agent',
      badge: 'Document Parsing & Truth Audit',
      icon: Binary,
      accent: 'orange',
      role: 'Reads handwritten registers, receipts and bank statements, reconciling numbers and linking every figure to its proof.',
      features: [
        'Multi-format recognition: extracts from handwritten notebooks, UPI screenshots, and cooperative slips',
        'Cross-document reconciliation: verifies that sales in your notebook match your UPI bank inflows',
        'Anomaly & duplicate detection: catches accidental double-entries or inconsistent dates immediately',
        'Source-linked citations: every aggregated number clickable directly to its original photographed proof',
      ],
      sampleOutput: {
        title: 'Source-Linked Citation Proof',
        quote: 'Monthly Turnover: ₹84,200 (Corroborated across 3 sources: 48 UPI txns, 12 cash chits, and bank statement line #42)',
        caption: 'Zero black-box hallucinations. Everything is transparently cited.',
      },
    },
    {
      num: '03',
      name: 'Credit Application Assistant',
      badge: 'Scheme Rules & Readiness',
      icon: FileCheck,
      accent: 'green',
      role: 'Maps your organised business evidence against government schemes and lender checklists, identifying gaps proactively.',
      features: [
        'Continuous scheme mapping against Mudra (Shishu/Kishor), PMEGP, Stand-Up India and PSL priority sectors',
        'Automated checklist audit: shows exactly which requirements are 100% satisfied and which need attention',
        'Generates an investor-grade Application-Support Pack ready for JanSamarth or bank branch review',
        'Assists with post-submission bank clarification queries so you never feel stranded',
      ],
      sampleOutput: {
        title: 'Application-Support Pack Preview',
        quote: 'Readiness Score: 94% • Pradhan Mantri Mudra Yojana Ready • Missing: 1 Branch Passbook Seal',
        caption: 'Empowers micro-entrepreneurs to walk into a bank with complete confidence.',
      },
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-cream-light border-t border-cream-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-soft text-teal font-semibold text-xs tracking-wider uppercase border border-teal/20">
            <Sparkles className="w-3.5 h-3.5 text-teal" />
            <span>THE INTELLIGENCE BEHIND NIDHARA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight font-display leading-[1.15]">
            Three intelligent layers.<br />
            <span className="text-teal underline decoration-teal/20 decoration-wavy decoration-2">
              One connected journey.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-muted leading-relaxed font-normal pt-2">
            Intelligence that listens, understands, and structures — designed specifically for how Indian micro-enterprises operate in the real world.
          </p>
        </div>

        {/* 3 Interactive Connected Layers */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {layers.map((layer, idx) => {
            const Icon = layer.icon;
            const isSelected = selectedLayer === idx;
            return (
              <div
                key={layer.num}
                onClick={() => setSelectedLayer(idx)}
                className={`cursor-pointer rounded-3xl p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between border relative ${
                  isSelected
                    ? 'bg-white shadow-warm-lg border-teal ring-2 ring-teal/20'
                    : 'bg-white/80 hover:bg-white shadow-warm-sm border-cream-border hover:border-teal/40'
                }`}
              >
                <div>
                  {/* Top Layer Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black tracking-widest text-teal uppercase font-mono">
                      LAYER {layer.num}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-cream-card text-[11px] font-semibold text-navy border border-cream-border">
                      {layer.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-teal-soft flex items-center justify-center text-teal mb-4 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-navy font-display mb-2">
                    {layer.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-muted leading-relaxed mb-6">
                    {layer.role}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-2 border-t border-cream-border/90">
                    {layer.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Output Mini-Box */}
                <div className="mt-6 pt-4 border-t border-cream-border bg-cream-light/80 p-3.5 rounded-2xl">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-navy mb-1.5">
                    <Eye className="w-3.5 h-3.5 text-teal" />
                    <span>{layer.sampleOutput.title}</span>
                  </div>
                  <p className="text-xs text-slate-700 italic font-medium leading-relaxed">
                    {layer.sampleOutput.quote}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    {layer.sampleOutput.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible AI & Borrower Control Statement */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-white p-6 sm:p-7 border border-cream-border shadow-xs flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-teal flex items-center justify-center text-white shrink-0 shadow-sm">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-navy">
              Human-In-The-Loop by Design
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              "AI helps organise and explain. Important financial information is validated, the borrower confirms key facts, and final sharing remains strictly under the borrower's control."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IntelligenceSection;
