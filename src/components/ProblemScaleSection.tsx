'use client';

import React from 'react';
import { 
  Building2, 
  TrendingDown, 
  Wallet, 
  Clock, 
  ArrowRight, 
  AlertCircle, 
  FileText, 
  Search, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';

export const ProblemScaleSection: React.FC = () => {
  const stats = [
    {
      value: '10.1 crore',
      label: 'Registered Enterprises',
      context: 'Udyam and Udyam Assist registrations',
      source: 'Ministry of MSME / Udyam Portal',
      icon: Building2,
    },
    {
      value: '47%',
      label: 'Formal Credit Penetration',
      context: 'Enterprises accessing formal institutional credit',
      source: 'SIDBI MSME Pulse Report, Dec 2025',
      icon: TrendingDown,
    },
    {
      value: '₹30 lakh crore',
      label: 'Addressable Credit Gap',
      context: 'Estimated unmet credit demand across MSMEs',
      source: "SIDBI Credit Gap Study, May 2025",
      icon: Wallet,
    },
    {
      value: '14 working days',
      label: 'Bank Decision Timeline',
      context: 'RBI-advised timeline for MSE loans up to ₹25 lakh',
      source: 'RBI Master Directions (Bank appraisal only, excluding prep)',
      icon: Clock,
    },
  ];

  return (
    <section id="problem" className="py-20 sm:py-28 bg-[#F4F8FA] border-b border-paleblue-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-teal font-bold text-xs tracking-wider uppercase border border-mint-border">
            <span>THE CREDIT GAP IN NUMBERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
            Millions of businesses.<br />
            <span className="text-teal">A difficult journey to formal credit.</span>
          </h2>
        </div>

        {/* Compact Statistics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-paleblue-border shadow-xs hover:border-teal/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-navy/60">
                      {stat.label}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-paleblue text-teal flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-3xl font-extrabold text-navy font-display tracking-tight">
                    {stat.value}
                  </div>

                  <p className="mt-2 text-xs text-navy/75 leading-relaxed font-medium">
                    {stat.context}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-paleblue-border text-[10px] text-navy/50 leading-tight">
                  Source: {stat.source}
                </div>
              </div>
            );
          })}
        </div>

        {/* Concise Statement Below Numbers */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg text-navy/85 font-medium leading-relaxed">
            "A business owner may know every detail of their business, but still struggle to turn everyday records into the evidence a formal credit application requires."
          </p>
        </div>

        {/* Visual Process Diagram: Scattered -> Repeated Clarification -> Organised Evidence */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-paleblue-border shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center text-xs">
            
            {/* Step 1: Scattered records */}
            <div className="md:col-span-3 p-4 rounded-xl bg-paleblue/70 border border-paleblue-border space-y-1.5">
              <span className="font-bold text-navy block text-xs">Everyday Business Records</span>
              <p className="text-navy/70 text-[11px] leading-relaxed">
                Scattered notebooks + UPI QR records + supplier receipts + bank passbooks
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="md:col-span-1 flex items-center justify-center text-teal">
              <ArrowRight className="w-4 h-4" />
            </div>

            {/* Step 2: Friction */}
            <div className="md:col-span-3 p-4 rounded-xl bg-[#FFF6F2] border border-[#FFE2D6] space-y-1.5">
              <span className="font-bold text-[#D04C25] block text-xs">Process Uncertainty</span>
              <p className="text-navy/70 text-[11px] leading-relaxed">
                Repeated branch visits, confusing scheme criteria & document clarification requests
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="md:col-span-1 flex items-center justify-center text-teal">
              <ArrowRight className="w-4 h-4" />
            </div>

            {/* Step 3: Organised evidence */}
            <div className="md:col-span-3 p-4 rounded-xl bg-mint border border-mint-border space-y-1.5">
              <span className="font-bold text-teal block text-xs">Organised Credit Evidence</span>
              <p className="text-navy/70 text-[11px] leading-relaxed">
                Structured financial dossier with source citations ready for formal submission
              </p>
            </div>

          </div>
        </div>

        {/* Section 4: Where the credit journey gets difficult (Data Visualisation) */}
        <div className="pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
              Where the credit journey gets difficult
            </h3>
            <p className="text-xs sm:text-sm text-navy/60 font-medium">
              Three critical friction points identified during formal loan preparation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Stage 1 */}
            <div className="bg-white rounded-2xl p-6 border border-paleblue-border shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-paleblue text-navy font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-navy/40">Discovery</span>
              </div>
              <h4 className="font-bold text-navy text-sm">
                Finding the right loan route
              </h4>
              <p className="text-xs text-navy/70 leading-relaxed font-normal">
                Evaluating which government scheme (Mudra, PMEGP, Stand-Up India) fits specific business needs and meets lender collateral rules.
              </p>
            </div>

            {/* Stage 2 */}
            <div className="bg-white rounded-2xl p-6 border border-paleblue-border shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-paleblue text-navy font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-navy/40">Structuring</span>
              </div>
              <h4 className="font-bold text-navy text-sm">
                Collecting and organising evidence
              </h4>
              <p className="text-xs text-navy/70 leading-relaxed font-normal">
                Connecting informal receipts, customer order books and digital transaction history into structured financial proof.
              </p>
            </div>

            {/* Stage 3 */}
            <div className="bg-white rounded-2xl p-6 border border-paleblue-border shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-paleblue text-navy font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-navy/40">Compliance</span>
              </div>
              <h4 className="font-bold text-navy text-sm">
                Completing requirements & clarifications
              </h4>
              <p className="text-xs text-navy/70 leading-relaxed font-normal">
                Resolving missing documents, verifying turnover figures and answering lender audit clarifications without closing shop.
              </p>
            </div>

          </div>

          {/* Early Field Observation Callout */}
          <div className="mt-8 max-w-2xl mx-auto p-4 rounded-2xl bg-white border border-teal/20 shadow-xs flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-lg bg-mint text-teal flex items-center justify-center shrink-0 mt-0.5">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold text-navy">
                Field Observation: <span className="text-teal font-extrabold">Approximately 2 months</span> to collect and finalise documents.
              </div>
              <p className="text-[11px] text-navy/55 leading-relaxed">
                Observed in early field conversations; small qualitative sample, not a national average.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProblemScaleSection;
