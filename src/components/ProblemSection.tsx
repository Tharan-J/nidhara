'use client';

import React from 'react';
import { FileText, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 sm:py-28 bg-mint border-y border-mint-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-teal font-bold text-xs tracking-wider uppercase border border-mint-border">
            <span>THE REALITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
            Running a business is hard.<br />
            <span className="text-teal">Navigating credit shouldn't be.</span>
          </h2>

          {/* One Concise Paragraph */}
          <p className="text-base sm:text-lg text-navy/80 leading-relaxed font-normal pt-1">
            Small business owners have real daily turnover, loyal customers, and years of effort. Yet when they approach formal credit, scattered records across notebooks, UPI receipts and passbooks make it difficult to identify the right loan, organise paperwork and resolve repeated bank clarifications.
          </p>
        </div>

        {/* One Strong Illustration: Scattered Records Becoming Organised */}
        <div className="mt-14 max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-app-card border border-mint-border">
          <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center">
            
            {/* Left: Scattered Informal Records */}
            <div className="md:col-span-5 bg-paleblue/80 rounded-2xl p-5 border border-paleblue-border space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-paleblue-border">
                <span className="text-xs font-bold uppercase tracking-wider text-navy/70">
                  Scattered Everyday Records
                </span>
                <span className="text-[11px] font-semibold text-navy/50">Unstructured</span>
              </div>

              <div className="space-y-2 text-xs text-navy/80">
                <div className="p-2.5 rounded-xl bg-white border border-paleblue-border flex items-center justify-between">
                  <span>Handwritten sales & order notebooks</span>
                  <span className="text-navy/40 font-mono text-[10px]">Notebook</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-paleblue-border flex items-center justify-between">
                  <span>UPI QR transaction screenshots</span>
                  <span className="text-navy/40 font-mono text-[10px]">Phone</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-paleblue-border flex items-center justify-between">
                  <span>Daily collection slips & supplier bills</span>
                  <span className="text-navy/40 font-mono text-[10px]">Paper chits</span>
                </div>
              </div>
            </div>

            {/* Center: Directed Bridge Indicator */}
            <div className="md:col-span-1 flex items-center justify-center py-2 md:py-0">
              <div className="w-9 h-9 rounded-full bg-teal text-white flex items-center justify-center shadow-xs">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Right: Organised Credit Readiness Dossier */}
            <div className="md:col-span-5 bg-mint/80 rounded-2xl p-5 border border-mint-border space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-mint-border">
                <span className="text-xs font-bold uppercase tracking-wider text-teal">
                  Organised Credit Evidence
                </span>
                <span className="text-[11px] font-bold text-green">Ready</span>
              </div>

              <div className="space-y-2 text-xs text-navy font-medium">
                <div className="p-2.5 rounded-xl bg-white border border-mint-border flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                  <span>Structured business turnover profile</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-mint-border flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                  <span>Reconciled digital & cash earnings</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-mint-border flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                  <span>Scheme checklist matched before visit</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
