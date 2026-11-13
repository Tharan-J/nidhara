'use client';

import React, { useState } from 'react';
import { 
  FileText, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ScanLine, 
  FileCheck, 
  AlertTriangle,
  FolderSync,
  HelpCircle,
  FileSpreadsheet,
  ChevronRight
} from 'lucide-react';

export const TurningPointSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'tailor' | 'dairy'>('all');

  return (
    <section id="solution" className="relative py-24 sm:py-32 bg-gradient-to-b from-cream/40 via-white to-cream/30 overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-teal-soft/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-soft text-teal font-semibold text-xs tracking-wider uppercase border border-teal/20">
            <Sparkles className="w-3.5 h-3.5 text-teal" />
            <span>INTRODUCING NIDHARA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight font-display leading-[1.15]">
            What if someone helped you prepare<br />
            <span className="text-teal underline decoration-teal/20 decoration-wavy decoration-2">
              before you approached the bank?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-muted leading-relaxed font-normal pt-2">
            Meet <strong>Nidhara</strong> — a guided credit-readiness platform that understands your business, helps organise your records and makes the loan application journey easier to navigate.
          </p>
        </div>

        {/* Visual Transformation Diagram: 3 Connected Stages */}
        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-stretch">
            
            {/* Stage 1: Left - What you have (Scattered Records) */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-7 border border-orange/20 shadow-warm-sm flex flex-col justify-between relative group hover:border-orange/40 transition-colors">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-orange text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-xs">
                Stage 01 • Starting Point
              </div>

              <div>
                <div className="pt-2 flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-navy font-display">
                    Scattered Everyday Records
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-orange-soft flex items-center justify-center text-orange">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs text-slate-muted leading-relaxed mb-5">
                  Informal documents reflect real business revenue, but exist in disparate physical and digital formats.
                </p>

                {/* Evidence Artifacts */}
                <div className="space-y-2.5">
                  <div className="p-2.5 rounded-xl bg-orange-soft/40 border border-orange/20 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-orange shrink-0" />
                    <span className="text-xs font-medium text-navy">Handwritten diary / Customer orders</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-orange-soft/40 border border-orange/20 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-orange shrink-0" />
                    <span className="text-xs font-medium text-navy">Daily milk collection chits & slips</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-orange-soft/40 border border-orange/20 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-orange shrink-0" />
                    <span className="text-xs font-medium text-navy">UPI QR transaction screenshots</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-orange-soft/40 border border-orange/20 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-orange shrink-0" />
                    <span className="text-xs font-medium text-navy">Paper raw-material purchase bills</span>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-6 pt-4 border-t border-orange/15 flex items-center gap-2 text-[11px] text-orange-dark font-medium">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                <span>Unstructured • Prone to missing details</span>
              </div>
            </div>

            {/* Transition Arrow 1 (Desktop) */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center text-teal">
              <div className="w-10 h-10 rounded-full bg-teal-soft border border-teal/30 flex items-center justify-center text-teal shadow-xs animate-pulse">
                <ArrowRight className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-teal mt-2 uppercase tracking-tight">
                Guidance
              </span>
            </div>

            {/* Stage 2: Centre - Nidhara's Evidence Intelligence */}
            <div className="lg:col-span-3 bg-navy text-white rounded-3xl p-6 sm:p-7 shadow-warm-lg flex flex-col justify-between relative border border-teal/40 group hover:border-teal transition-all">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-teal text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-xs flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>Stage 02 • Nidhara Engine</span>
              </div>

              <div>
                <div className="pt-2 flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white font-display">
                    Evidence Intelligence
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center text-white">
                    <ScanLine className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  AI reads, reconciles, and organizes informal proof while maintaining borrower consent and traceable source links.
                </p>

                {/* Processing Steps */}
                <div className="space-y-2.5">
                  <div className="p-2.5 rounded-xl bg-navy-light/90 border border-teal/30 flex items-center justify-between text-xs">
                    <span className="text-slate-200">1. Multilingual Voice Intake</span>
                    <span className="text-teal-light font-mono text-[10px]">Tamil/Hindi</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-navy-light/90 border border-teal/30 flex items-center justify-between text-xs">
                    <span className="text-slate-200">2. Optical Record Extraction</span>
                    <span className="text-green-light font-mono text-[10px]">Auto-OCR</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-navy-light/90 border border-teal/30 flex items-center justify-between text-xs">
                    <span className="text-slate-200">3. Cross-Document Reconciliation</span>
                    <span className="text-teal-light font-mono text-[10px]">No Duplicates</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-navy-light/90 border border-teal/30 flex items-center justify-between text-xs">
                    <span className="text-slate-200">4. Checklist Gap Detection</span>
                    <span className="text-orange-light font-mono text-[10px]">Instant Audit</span>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-6 pt-4 border-t border-navy-light flex items-center gap-2 text-[11px] text-teal-light font-medium">
                <FolderSync className="w-3.5 h-3.5 shrink-0 text-teal-light" />
                <span>Borrower confirms facts • Traceable source links</span>
              </div>
            </div>

            {/* Transition Arrow 2 (Desktop) */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center text-green">
              <div className="w-10 h-10 rounded-full bg-green-soft border border-green/30 flex items-center justify-center text-green shadow-xs animate-pulse">
                <ArrowRight className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-green mt-2 uppercase tracking-tight">
                Readiness
              </span>
            </div>

            {/* Stage 3: Right - Credit-Ready Application Support Pack */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-7 border border-green/30 shadow-warm-sm flex flex-col justify-between relative group hover:border-green/50 transition-colors">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-green text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3" />
                <span>Stage 03 • The Result</span>
              </div>

              <div>
                <div className="pt-2 flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-navy font-display">
                    Application-Support Pack
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-green-soft flex items-center justify-center text-green">
                    <FileCheck className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs text-slate-muted leading-relaxed mb-5">
                  Organised evidence, transparent gap checklist, and verified financial profile ready for formal submission.
                </p>

                {/* Structured Outputs */}
                <div className="space-y-2.5">
                  <div className="p-2.5 rounded-xl bg-green-soft/50 border border-green/30 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                    <span className="text-xs font-semibold text-navy">Structured Business Summary</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-green-soft/50 border border-green/30 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                    <span className="text-xs font-semibold text-navy">Reconciled Cash Flow Proof</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-green-soft/50 border border-green/30 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                    <span className="text-xs font-semibold text-navy">Scheme Match: Mudra / PMEGP</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-green-soft/50 border border-green/30 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                    <span className="text-xs font-semibold text-navy">Clear Missing-Document Audit</span>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-6 pt-4 border-t border-green/20 flex items-center gap-2 text-[11px] text-green-dark font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-green" />
                <span>Walk into bank or portal with complete confidence</span>
              </div>
            </div>

          </div>
        </div>

        {/* Supporting Statement */}
        <div className="mt-14 sm:mt-16 text-center max-w-2xl mx-auto">
          <p className="text-xl sm:text-2xl font-bold text-navy font-display">
            "Your business already has a story.<br className="hidden sm:inline" />
            <span className="text-orange">Nidhara helps organise the evidence that tells it.</span>"
          </p>
        </div>

      </div>
    </section>
  );
};

export default TurningPointSection;
