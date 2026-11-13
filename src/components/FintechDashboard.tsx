'use client';

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Store, 
  FolderCheck, 
  TrendingUp, 
  Compass, 
  FileCheck2, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ChevronRight, 
  ShieldCheck, 
  Info,
  Calendar,
  IndianRupee,
  Building,
  Check
} from 'lucide-react';

export const FintechDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Overview' | 'Business Profile' | 'Documents' | 'Financial Records' | 'Scheme Matching' | 'Readiness Report'>('Overview');
  const [hoveredMonth, setHoveredMonth] = useState<number | null>(null);

  // Illustrative 6-Month Financial Data: Receipts vs Expenses
  const monthlyData = [
    { month: 'Oct 2025', receipts: 44000, expenses: 26000 },
    { month: 'Nov 2025', receipts: 52000, expenses: 31000 },
    { month: 'Dec 2025', receipts: 58000, expenses: 35000 }, // festive surge
    { month: 'Jan 2026', receipts: 48000, expenses: 28000 },
    { month: 'Feb 2026', receipts: 42000, expenses: 24000 },
    { month: 'Mar 2026', receipts: 51000, expenses: 29000 },
  ];

  const maxVal = 60000;

  const documents = [
    { name: 'Bank Statement (6 Months)', type: 'Passbook Photo', status: 'Received', date: 'Verified 2 days ago' },
    { name: 'UPI Transaction Records', type: 'QR History', status: 'Received', date: '38 Transactions' },
    { name: 'Order Register', type: 'Notebook Ledger', status: 'Received', date: '14 Blouse / Uniform Orders' },
    { name: 'Purchase Receipts', type: 'Fabric & Thread Bills', status: 'Received', date: '5 Supplier Invoices' },
    { name: 'Identity / KYC Document', type: 'Aadhaar / Voter ID', status: 'Pending', date: 'Awaiting Clear Photo' },
  ];

  return (
    <section id="dashboard" className="py-20 sm:py-28 bg-[#EFF5F8] border-b border-paleblue-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-teal font-bold text-xs tracking-wider uppercase border border-mint-border">
            <span>WORKING PRODUCT INTERFACE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            From scattered records to<br />
            <span className="text-teal">structured credit readiness.</span>
          </h2>

          <p className="text-sm sm:text-base text-navy/70 leading-relaxed font-normal pt-1 max-w-2xl mx-auto">
            Experience how Nidhara turns unstructured physical notebooks and digital payments into a verified, source-linked borrower dossier.
          </p>
        </div>

        {/* Realistic Web Dashboard Container */}
        <div className="bg-white rounded-3xl border border-paleblue-border shadow-xl overflow-hidden">
          
          {/* Dashboard Window Header Bar */}
          <div className="bg-navy px-6 py-4 flex items-center justify-between text-white border-b border-navy-light">
            <div className="flex items-center gap-3">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green/80" />
              </div>
              <span className="h-4 w-px bg-white/20 ml-2" />
              <span className="text-xs font-mono font-medium text-slate-300">
                app.nidhara.in/dossier/lakshmi-tailoring
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-slate-300 font-medium">Borrower Session: Active</span>
            </div>
          </div>

          {/* Main Dashboard Layout (Sidebar + Content) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[680px]">
            
            {/* Left Navigation Sidebar */}
            <aside className="lg:col-span-3 bg-[#FAFBFD] p-5 border-r border-paleblue-border flex flex-col justify-between">
              <div className="space-y-6">
                
                {/* Enterprise Mini Badge */}
                <div className="p-3.5 rounded-2xl bg-white border border-paleblue-border shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-mint text-teal flex items-center justify-center font-bold text-sm shrink-0">
                      LT
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold text-navy truncate">Lakshmi Tailoring</p>
                      <p className="text-[10px] text-navy/60 truncate">Home-based tailoring</p>
                    </div>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-paleblue-border flex justify-between items-center text-[10px]">
                    <span className="text-navy/50">Loan Goal:</span>
                    <span className="font-bold text-navy font-mono">₹2,00,000</span>
                  </div>
                </div>

                {/* Nav Links */}
                <nav className="space-y-1">
                  {[
                    { name: 'Overview', icon: LayoutDashboard },
                    { name: 'Business Profile', icon: Store },
                    { name: 'Documents', icon: FolderCheck },
                    { name: 'Financial Records', icon: TrendingUp },
                    { name: 'Scheme Matching', icon: Compass },
                    { name: 'Readiness Report', icon: FileCheck2 },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.name;
                    return (
                      <button
                        key={item.name}
                        onClick={() => setActiveTab(item.name as any)}
                        className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                          isActive
                            ? 'bg-navy text-white shadow-xs'
                            : 'text-navy/70 hover:bg-white hover:text-navy'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </nav>

              </div>

              {/* Sidebar Footer Note */}
              <div className="pt-6 border-t border-paleblue-border text-[11px] text-navy/50 space-y-1">
                <p className="font-semibold text-navy/70">Borrower Consent Active</p>
                <p>All data strictly controlled and verified by borrower.</p>
              </div>
            </aside>

            {/* Main Overview Canvas */}
            <main className="lg:col-span-9 p-6 sm:p-8 space-y-8 bg-white">
              
              {/* Profile Overview Header */}
              <div className="p-5 rounded-2xl bg-[#F6FAF8] border border-mint-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-extrabold text-navy font-display">
                      Lakshmi Tailoring Works
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-mint text-teal font-bold text-[10px] border border-mint-border">
                      Verified MSME Unit
                    </span>
                  </div>
                  <p className="text-xs text-navy/70 mt-0.5">
                    Home-based micro-enterprise • Working Capital & Juki Sewing Machine • Goal: <strong className="text-navy font-mono">₹2,00,000</strong>
                  </p>
                </div>

                {/* Profile Completion Bar */}
                <div className="sm:text-right shrink-0">
                  <div className="text-xs font-bold text-navy flex items-center sm:justify-end gap-1.5">
                    <span>Profile Completion:</span>
                    <span className="text-teal font-mono">85%</span>
                  </div>
                  <div className="w-40 h-2 bg-paleblue-border rounded-full mt-1.5 overflow-hidden">
                    <div className="w-[85%] h-full bg-teal rounded-full" />
                  </div>
                </div>
              </div>

              {/* Evidence Summary Cards (4 Metrics) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-paleblue-border">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-navy/60 block">
                    Documents Collected
                  </span>
                  <div className="text-2xl font-extrabold text-navy font-display mt-1">
                    4 / 5
                  </div>
                  <span className="text-[10px] text-teal font-semibold mt-1 block">
                    80% Checklist Done
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-paleblue-border">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-navy/60 block">
                    Records Classified
                  </span>
                  <div className="text-2xl font-extrabold text-navy font-display mt-1">
                    18
                  </div>
                  <span className="text-[10px] text-green font-semibold mt-1 block">
                    UPI + Order Ledger
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-paleblue-border">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-navy/60 block">
                    Periods Covered
                  </span>
                  <div className="text-2xl font-extrabold text-navy font-display mt-1">
                    6 Months
                  </div>
                  <span className="text-[10px] text-navy/60 font-semibold mt-1 block">
                    Oct 2025 – Mar 2026
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-paleblue-border">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-navy/60 block">
                    Requires Confirmation
                  </span>
                  <div className="text-2xl font-extrabold text-[#D04C25] font-display mt-1">
                    2 Items
                  </div>
                  <span className="text-[10px] text-[#D04C25] font-semibold mt-1 block">
                    1 Pending KYC Photo
                  </span>
                </div>
              </div>

              {/* Financial Snapshot: Real SVG Bar Chart */}
              <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-paleblue-border space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-paleblue-border">
                  <div>
                    <h4 className="text-sm font-bold text-navy flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-teal" />
                      <span>Financial Snapshot (6 Months Receipts vs Expenses)</span>
                    </h4>
                    <p className="text-[11px] text-navy/55">
                      Illustrative sample business data. Does not represent net profit or loan repayment capacity.
                    </p>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded bg-teal" />
                      <span className="text-navy font-medium text-[11px]">Monthly Receipts</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded bg-[#2C4875]" />
                      <span className="text-navy font-medium text-[11px]">Business Expenses</span>
                    </div>
                  </div>
                </div>

                {/* SVG Bar Chart */}
                <div className="pt-2">
                  <div className="h-48 w-full flex items-end justify-between gap-3 sm:gap-6 px-2">
                    {monthlyData.map((d, idx) => {
                      const receiptHeight = (d.receipts / maxVal) * 100;
                      const expenseHeight = (d.expenses / maxVal) * 100;
                      const isHovered = hoveredMonth === idx;

                      return (
                        <div
                          key={d.month}
                          onMouseEnter={() => setHoveredMonth(idx)}
                          onMouseLeave={() => setHoveredMonth(null)}
                          className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative"
                        >
                          {/* Hover Tooltip */}
                          {isHovered && (
                            <div className="absolute -top-12 z-20 bg-navy text-white p-1.5 rounded-lg text-[10px] font-mono shadow-md whitespace-nowrap">
                              <div>Receipts: ₹{d.receipts.toLocaleString('en-IN')}</div>
                              <div>Expenses: ₹{d.expenses.toLocaleString('en-IN')}</div>
                            </div>
                          )}

                          {/* Bars Pair */}
                          <div className="w-full flex items-end justify-center gap-1 sm:gap-2 h-40">
                            {/* Receipts Bar (Teal) */}
                            <div
                              style={{ height: `${receiptHeight}%` }}
                              className="w-1/2 max-w-[28px] bg-teal hover:bg-teal-light rounded-t-sm transition-all duration-300"
                            />
                            {/* Expenses Bar (Navy) */}
                            <div
                              style={{ height: `${expenseHeight}%` }}
                              className="w-1/2 max-w-[28px] bg-[#2C4875] hover:bg-[#3B5F99] rounded-t-sm transition-all duration-300"
                            />
                          </div>

                          {/* Month Label */}
                          <span className="text-[10px] text-navy/60 font-semibold mt-2 truncate w-full text-center">
                            {d.month.split(' ')[0]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Split: Document Checklist Table & Scheme Match Panel */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Document Checklist Table */}
                <div className="lg:col-span-7 p-5 rounded-2xl bg-[#FAFBFD] border border-paleblue-border space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-paleblue-border">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy">
                      Document Checklist (4/5 Complete)
                    </span>
                    <span className="text-[10px] font-bold text-teal">Source Linked</span>
                  </div>

                  <div className="space-y-2">
                    {documents.map((doc, idx) => {
                      const isReceived = doc.status === 'Received';
                      return (
                        <div
                          key={idx}
                          className="p-2.5 rounded-xl bg-white border border-paleblue-border flex items-center justify-between text-xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                                isReceived ? 'bg-mint text-green' : 'bg-[#FFF2ED] text-[#D04C25]'
                              }`}
                            >
                              {isReceived ? <Check className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                            </div>
                            <div>
                              <p className="font-semibold text-navy leading-tight">{doc.name}</p>
                              <p className="text-[10px] text-navy/50">{doc.type}</p>
                            </div>
                          </div>

                          <div className="text-right">
                            <span
                              className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-bold ${
                                isReceived
                                  ? 'bg-mint text-green border border-mint-border'
                                  : 'bg-[#FFF2ED] text-[#D04C25] border border-[#FFE2D6]'
                              }`}
                            >
                              {doc.status}
                            </span>
                            <p className="text-[9px] text-navy/40 mt-0.5">{doc.date}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Scheme Requirement & Readiness Progress Panel */}
                <div className="lg:col-span-5 space-y-4">
                  
                  {/* Scheme Match Card */}
                  <div className="p-5 rounded-2xl bg-[#F6FAF8] border border-mint-border space-y-3">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-teal uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal" />
                      <span>Potentially Suitable Route Identified</span>
                    </div>

                    <div>
                      <h5 className="text-sm font-bold text-navy">
                        Pradhan Mantri Mudra Yojana (Shishu/Kishor)
                      </h5>
                      <p className="text-[11px] text-navy/70 mt-1 leading-relaxed">
                        Matched for home garment unit working capital & machinery loan up to ₹2,00,000.
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-mint-border text-xs">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-navy/70">Requirements Matched:</span>
                        <span className="font-bold text-green">4 Matched</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-navy/70">Requirements Pending:</span>
                        <span className="font-bold text-[#D04C25]">1 Pending (KYC)</span>
                      </div>
                    </div>

                    <div className="pt-2 text-[10px] text-navy/50 italic border-t border-mint-border">
                      Final eligibility subject to lender verification and credit appraisal.
                    </div>
                  </div>

                  {/* Readiness Indicator (80%) */}
                  <div className="p-4 rounded-2xl bg-white border border-paleblue-border flex items-center gap-4 shadow-xs">
                    <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                      <svg className="w-12 h-12 transform -rotate-90">
                        <circle cx="24" cy="24" r="20" stroke="#E2E8F0" strokeWidth="4" fill="none" />
                        <circle
                          cx="24"
                          cy="24"
                          r="20"
                          stroke="#087F79"
                          strokeWidth="4"
                          strokeDasharray={125}
                          strokeDashoffset={25}
                          strokeLinecap="round"
                          fill="none"
                        />
                      </svg>
                      <span className="absolute font-mono text-xs font-bold text-navy">
                        80%
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      <p className="text-xs font-bold text-navy">Checklist Completion: 80%</p>
                      <p className="text-[10px] text-navy/60 leading-tight">
                        Progress indicator of document readiness. Not loan approval probability.
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </main>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FintechDashboard;
