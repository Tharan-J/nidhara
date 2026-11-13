'use client';

import React from 'react';
import Logo from './Logo';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark text-slate-300 py-12 border-t border-navy-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Row: Logo & Quick Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
          <Logo size="md" light />
          
          <div className="flex items-center space-x-6 text-xs font-semibold text-slate-300">
            <a href="#problem" className="hover:text-white transition-colors">The Problem</a>
            <a href="#dashboard" className="hover:text-white transition-colors">Product Dashboard</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#why-nidhara" className="hover:text-white transition-colors">Why Nidhara</a>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="bg-navy p-4 rounded-2xl border border-white/10 flex items-start gap-3 text-xs text-slate-300 leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-teal-light shrink-0 mt-0.5" />
          <p>
            <strong>Regulatory Notice:</strong> Nidhara is a credit-readiness and application-support platform. It does not lend, sanction or guarantee loans. Final lending decisions remain with the respective regulated financial institutions.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} Nidhara. From informal business records to structured credit readiness.</p>
          <p>Built for Indian micro-enterprises and SHGs.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
