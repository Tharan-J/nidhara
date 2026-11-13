'use client';

import React, { useState } from 'react';
import { 
  Scissors, 
  Milk, 
  Wrench, 
  Users2, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const RealBusinessesSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const industries = [
    {
      id: 'tailor',
      title: 'Tailoring & Garment Units',
      subtitle: 'Home boutiques, embroidery shops, blouse & uniform makers',
      icon: Scissors,
      accent: 'orange',
      story: 'Meenakshi has stitched festive blouses and school uniforms for 6 years in Salem. She has 2 manual Usha sewing machines and wants a modern motorized Juki machine.',
      records: [
        'Customer measurement & order books',
        'Stitching charge rate-card & daily tally',
        'Cloth & lining material supplier bills',
        'Customer delivery receipt register',
        'UPI QR code payments & cash receipts',
      ],
      howNidharaHelps: 'Reconciles festive seasonal surges (Diwali/Pongal/Weddings) with steady daily school uniform orders, proving cash flow predictability.',
      applicableSchemes: 'PMMY Shishu / Mudra Kishore (₹50k - ₹2L)',
    },
    {
      id: 'dairy',
      title: 'Dairy & Livestock Businesses',
      subtitle: 'Small dairy farmers, village milk collection, cattle owners',
      icon: Milk,
      accent: 'teal',
      story: 'Anand maintains 4 cross-bred dairy cows in Erode. Twice a day, his milk is poured at the local Aavin cooperative collection center.',
      records: [
        'Daily morning & evening milk collection slips',
        'Fat & SNF measurement register chits',
        'Cooperative society 10-day payment vouchers',
        'Cattle feed, mineral mix & vet medicine bills',
        'Passbook credits from dairy federation',
      ],
      howNidharaHelps: 'Extracts 10-day cooperative credit cycles and links them directly to cattle count, proving recurring, stable dairy revenue.',
      applicableSchemes: 'Kisan Credit Card for Animal Husbandry & Dairy Scheme',
    },
    {
      id: 'fabrication',
      title: 'Workshops & Fabrication Units',
      subtitle: 'Grill works, lathe workshops, welding & metal repair units',
      icon: Wrench,
      accent: 'orange',
      story: 'Karthik runs a 3-person fabrication unit making architectural window grills, warehouse rolling shutters, and farm implements.',
      records: [
        'Job-work order registers and customer specifications',
        'Formal quotation duplicates and material estimates',
        'Steel section and welding rod supplier bills',
        'Job completion and customer handover sign-offs',
        'Machinery asset details (welder, cutter, compressor)',
      ],
      howNidharaHelps: 'Calculates high-ticket, milestone-based payments and material-to-labor margin ratios, organizing proof of steady enterprise demand.',
      applicableSchemes: 'PMEGP Subsidy Scheme / Mudra Tarun (₹2L - ₹5L)',
    },
    {
      id: 'shg',
      title: 'Self-Help Group (SHG) Units',
      subtitle: 'Women cooperatives, masala making, catering, handicraft groups',
      icon: Users2,
      accent: 'teal',
      story: 'The Annai SHG group in Madurai produces organic ground spices, idli podi and snacks, distributing across 24 local retail provision stores.',
      records: [
        'Group meeting resolution books and attendance registers',
        'Monthly member savings and contribution records',
        'Internal group lending and timely repayment ledgers',
        'Consolidated group sales invoices and retail distribution slips',
        'Gram Panchayat / NABARD SHG certification',
      ],
      howNidharaHelps: 'Synthesizes multi-member collective savings records and peer-repayment discipline into a structured, unified institutional dossier.',
      applicableSchemes: 'NRLM Enterprise Loan / Deendayal Antyodaya Yojana',
    },
  ];

  return (
    <section id="businesses" className="relative py-24 sm:py-32 bg-cream/70 border-t border-cream-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 text-navy font-semibold text-xs tracking-wider uppercase">
            <span>RESPECTING REAL GROUND WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight font-display leading-[1.15]">
            Every business has a different way of keeping records.<br />
            <span className="text-teal underline decoration-teal/20 decoration-wavy decoration-2">
              We understand that.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-muted leading-relaxed font-normal pt-2">
            Your business doesn't need to look like a large company to have meaningful evidence of its activity. Nidhara respects the authentic tools you already use.
          </p>
        </div>

        {/* Industry Switcher Buttons */}
        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-white rounded-2xl border border-cream-border shadow-xs w-full max-w-4xl">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              const isSelected = selectedIndustry === idx;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(idx)}
                  className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isSelected
                      ? 'bg-navy text-white shadow-sm'
                      : 'text-navy/70 hover:bg-cream-card hover:text-navy'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{ind.title.split('&')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Industry Card Showcase */}
        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-10 shadow-warm-md border border-cream-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Story & Context */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-card text-navy text-xs font-bold uppercase tracking-wider border border-cream-border">
                {industries[selectedIndustry].applicableSchemes}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-navy font-display">
                {industries[selectedIndustry].title}
              </h3>

              <p className="text-xs font-semibold text-slate-muted">
                {industries[selectedIndustry].subtitle}
              </p>

              <div className="p-4 rounded-2xl bg-cream-light border border-cream-border text-sm text-slate-700 leading-relaxed italic">
                "{industries[selectedIndustry].story}"
              </div>

              <div className="p-4 rounded-2xl bg-teal-soft/70 border border-teal/20 text-xs sm:text-sm text-navy leading-relaxed">
                <span className="font-bold text-teal block mb-1">How Nidhara prepares this business:</span>
                {industries[selectedIndustry].howNidharaHelps}
              </div>
            </div>

            {/* Evidence Checklist for this Business */}
            <div className="lg:col-span-7 bg-cream-card/60 p-6 sm:p-8 rounded-2xl border border-cream-border space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-cream-border">
                <span className="text-xs font-bold text-navy uppercase tracking-wider">
                  Everyday Business Records Nidhara Accepts
                </span>
                <span className="text-xs text-teal font-semibold">5 of 5 Accepted</span>
              </div>

              <div className="space-y-3">
                {industries[selectedIndustry].records.map((rec, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-3 bg-white rounded-xl border border-cream-border flex items-center justify-between text-xs sm:text-sm shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-lg bg-teal-soft text-teal flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-teal" />
                      </div>
                      <span className="font-medium text-navy">{rec}</span>
                    </div>
                    <span className="text-[11px] font-bold text-green bg-green-soft px-2 py-0.5 rounded-full shrink-0">
                      Corroborated
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-muted italic pt-2">
                Nidhara correlates handwritten dates with bank credit deposits, validating transaction authenticity.
              </p>
            </div>

          </div>
        </div>

        {/* Regulatory Disclosure Banner */}
        <div className="mt-12 bg-white rounded-2xl p-5 border border-cream-border shadow-xs flex items-center gap-4 text-xs sm:text-sm text-slate-600">
          <AlertCircle className="w-5 h-5 text-orange shrink-0" />
          <p>
            <strong>Important Regulatory Clarity:</strong> Informal records (notebooks, milk slips, handwritten chits) can meaningfully support and corroborate a credit application, but do not automatically replace mandatory statutory lender documents (such as PAN, Aadhaar KYC, or bank-mandated declarations).
          </p>
        </div>

      </div>
    </section>
  );
};

export default RealBusinessesSection;
