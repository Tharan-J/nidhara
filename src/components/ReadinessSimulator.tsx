'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight,
  RefreshCw,
  FolderCheck,
  Check,
  Mic
} from 'lucide-react';

type EnterpriseKey = 'tailor' | 'dairy' | 'workshop' | 'shg';

interface ReadinessSimulatorProps {
  onOpenVoiceDemo: () => void;
}

export const ReadinessSimulator: React.FC<ReadinessSimulatorProps> = ({ onOpenVoiceDemo }) => {
  const [enterpriseType, setEnterpriseType] = useState<EnterpriseKey>('tailor');
  const [selectedDocs, setSelectedDocs] = useState<string[]>(['order_book', 'upi_qr']);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const docOptions: Record<EnterpriseKey, { id: string; label: string; weight: number }[]> = {
    tailor: [
      { id: 'order_book', label: 'Handwritten Order / Measurement Book', weight: 25 },
      { id: 'upi_qr', label: 'UPI / PhonePe QR Transaction Records', weight: 30 },
      { id: 'cloth_bills', label: 'Cloth & Material Purchase Invoices', weight: 15 },
      { id: 'passbook', label: 'Bank Account Passbook (6 Months)', weight: 22 },
    ],
    dairy: [
      { id: 'milk_slips', label: 'Daily Cooperative Milk Slips (Fat/SNF)', weight: 30 },
      { id: 'coop_passbook', label: '10-Day Cooperative Credit Ledger', weight: 25 },
      { id: 'cattle_vet', label: 'Cattle Purchase & Vet Expense Receipts', weight: 15 },
      { id: 'bank_kyc', label: 'Bank Account Passbook with Aadhaar KYC', weight: 22 },
    ],
    workshop: [
      { id: 'job_register', label: 'Job-Work Register & Quotations', weight: 30 },
      { id: 'metal_bills', label: 'Steel & Welding Supplier Purchase Bills', weight: 25 },
      { id: 'upi_current', label: 'UPI & Bank Current Account Statement', weight: 20 },
      { id: 'equipment_list', label: 'Existing Welding Machine Ownership Details', weight: 17 },
    ],
    shg: [
      { id: 'group_resolution', label: 'SHG Meeting Resolution & Member Roster', weight: 30 },
      { id: 'internal_lending', label: 'Internal Savings & Micro-Lending Book', weight: 25 },
      { id: 'sales_slips', label: 'Spice / Product Sales Counter-Receipts', weight: 20 },
      { id: 'bank_shg', label: 'SHG Joint Bank Account Passbook', weight: 17 },
    ],
  };

  const schemeMatches = {
    tailor: {
      name: 'Pradhan Mantri Mudra Yojana (Shishu)',
      amount: 'Up to ₹1,50,000 Working Capital & Machinery',
      interest: '8.5% - 10.2% p.a. (No Collateral Required)',
    },
    dairy: {
      name: 'Kisan Credit Card (Dairy & Animal Husbandry)',
      amount: 'Up to ₹2,00,000 for Cattle Feed & Maintenance',
      interest: '7.0% p.a. with 3% prompt repayment incentive',
    },
    workshop: {
      name: 'PMMY Kishor & PMEGP Margin Money Subsidy',
      amount: 'Up to ₹3,50,000 for Metal Lathe & Welding Equipment',
      interest: 'Subsidised capital grant up to 25% for rural units',
    },
    shg: {
      name: 'DAY-NRLM Community Enterprise Loan',
      amount: 'Up to ₹2,50,000 for Collective Production Equipment',
      interest: 'Interest subvention down to 7% for women SHGs',
    },
  };

  const toggleDoc = (id: string) => {
    let next: string[];
    if (selectedDocs.includes(id)) {
      next = selectedDocs.filter((d) => d !== id);
    } else {
      next = [...selectedDocs, id];
    }
    setSelectedDocs(next);

    const activeList = docOptions[enterpriseType];
    const score = next.reduce((acc, docId) => {
      const found = activeList.find((d) => d.id === docId);
      return acc + (found ? found.weight : 0);
    }, 0);

    if (score >= 90) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
      });
    }
  };

  const currentDocs = docOptions[enterpriseType];
  const readinessScore = currentDocs.reduce((acc, doc) => {
    return selectedDocs.includes(doc.id) ? acc + doc.weight : acc;
  }, 0);

  return (
    <section id="readiness-demo" className="relative py-24 sm:py-32 bg-warm-hero border-t border-cream-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-soft text-teal font-semibold text-xs tracking-wider uppercase border border-teal/20">
            <Sparkles className="w-3.5 h-3.5 text-teal" />
            <span>INTERACTIVE SIMULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight font-display leading-[1.15]">
            See how your everyday records<br />
            <span className="text-teal underline decoration-teal/20 decoration-wavy decoration-2">
              become credit-ready.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-muted leading-relaxed font-normal pt-2">
            Select an enterprise and toggle the records you currently keep. Watch Nidhara organize the evidence and audit scheme eligibility in real time.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="mt-14 max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-warm-lg border border-cream-border">
          
          {/* Step 1: Select Enterprise */}
          <div className="mb-8">
            <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-3">
              1. Choose Sample Business Type:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {([
                { id: 'tailor', label: 'Tailoring Unit', sub: 'Blouse & Garments' },
                { id: 'dairy', label: 'Dairy Farm', sub: 'Milk Collections' },
                { id: 'workshop', label: 'Fabrication', sub: 'Grills & Works' },
                { id: 'shg', label: 'SHG Cooperative', sub: 'Spices & Food' },
              ] as { id: EnterpriseKey; label: string; sub: string }[]).map((ent) => (
                <button
                  key={ent.id}
                  onClick={() => {
                    setEnterpriseType(ent.id);
                    setSelectedDocs([docOptions[ent.id][0].id, docOptions[ent.id][1].id]);
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    enterpriseType === ent.id
                      ? 'bg-navy text-white border-navy shadow-sm'
                      : 'bg-cream-light text-navy border-cream-border hover:bg-cream-card'
                  }`}
                >
                  <p className="text-xs sm:text-sm font-bold leading-tight">{ent.label}</p>
                  <p className={`text-[11px] mt-0.5 ${enterpriseType === ent.id ? 'text-teal-light' : 'text-slate-muted'}`}>
                    {ent.sub}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Main Interactive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Document Checklist Toggles */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-cream-border">
                <label className="text-xs font-bold text-navy uppercase tracking-wider">
                  2. Available Records (Tap to Include):
                </label>
                <span className="text-xs text-slate-muted">
                  {selectedDocs.length} of {currentDocs.length} selected
                </span>
              </div>

              <div className="space-y-3">
                {currentDocs.map((doc) => {
                  const isChecked = selectedDocs.includes(doc.id);
                  return (
                    <div
                      key={doc.id}
                      onClick={() => toggleDoc(doc.id)}
                      className={`cursor-pointer p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-teal-soft/80 border-teal text-navy shadow-xs'
                          : 'bg-white border-cream-border text-slate-500 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                            isChecked ? 'bg-teal text-white' : 'border border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium">{doc.label}</span>
                      </div>
                      <span className="text-xs font-bold text-teal font-mono">
                        +{doc.weight}%
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={onOpenVoiceDemo}
                  className="inline-flex items-center gap-2 text-xs font-bold text-teal hover:text-teal-dark transition-colors"
                >
                  <Mic className="w-3.5 h-3.5" />
                  <span>Don't have documents yet? Try voice explanation</span>
                </button>
              </div>
            </div>

            {/* Right: Real-time Loan Readiness Gauge & Scheme Match */}
            <div className="lg:col-span-5 bg-gradient-to-br from-cream to-cream-card p-6 sm:p-7 rounded-3xl border border-cream-border flex flex-col justify-between space-y-6">
              
              {/* Circular Gauge */}
              <div className="text-center space-y-3">
                <div className="relative inline-flex items-center justify-center">
                  <svg className="w-36 h-36 transform -rotate-90">
                    <circle
                      cx="72"
                      cy="72"
                      r="60"
                      stroke="#E2E8F0"
                      strokeWidth="10"
                      fill="transparent"
                    />
                    <circle
                      cx="72"
                      cy="72"
                      r="60"
                      stroke={readinessScore > 75 ? '#21A875' : readinessScore > 50 ? '#087F79' : '#FF693D'}
                      strokeWidth="10"
                      strokeDasharray={377}
                      strokeDashoffset={377 - (377 * readinessScore) / 100}
                      strokeLinecap="round"
                      fill="transparent"
                      className="transition-all duration-700 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-extrabold text-navy font-display">
                      {readinessScore}%
                    </span>
                    <span className="text-[10px] font-bold text-slate-muted uppercase tracking-wider">
                      Readiness
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold text-navy font-display">
                    {readinessScore >= 90
                      ? 'Ready for Application Pack!'
                      : readinessScore >= 60
                      ? 'Good Foundation — 1 Doc Needed'
                      : 'Initial Evidence Stage'}
                  </h4>
                  <p className="text-xs text-slate-muted mt-0.5">
                    {readinessScore >= 90
                      ? 'All primary records verified & corroborated.'
                      : 'Toggle bank statement or receipts above to improve score.'}
                  </p>
                </div>
              </div>

              {/* Matched Scheme Pill */}
              <div className="p-4 bg-white rounded-2xl border border-cream-border shadow-xs space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-teal uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Eligible Scheme Match:</span>
                </div>
                <p className="text-xs font-bold text-navy leading-snug">
                  {schemeMatches[enterpriseType].name}
                </p>
                <p className="text-[11px] text-slate-600">
                  {schemeMatches[enterpriseType].amount}
                </p>
                <p className="text-[10px] text-green-dark font-medium">
                  {schemeMatches[enterpriseType].interest}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenVoiceDemo}
                className="w-full py-3 px-4 rounded-xl bg-orange hover:bg-orange-dark text-white font-bold text-xs shadow-warm-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Save This Dossier & Talk to Assistant</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ReadinessSimulator;
