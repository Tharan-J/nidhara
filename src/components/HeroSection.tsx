'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Mic, FileCheck, ShieldCheck, Briefcase, CheckCircle2 } from 'lucide-react';
interface HeroSectionProps {
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-[#FFFDF7] select-none">
      
      {/* Background Decorations: Organic subtle mint gradient and soft botanical leaves */}
      {/* Light mint curved radial bloom behind the smartphone */}
      <div 
        className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#DDF5EC]/70 via-[#E8F4F8]/50 to-transparent blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* Very soft secondary light-blue wash */}
      <div 
        className="absolute top-12 left-1/4 w-[380px] h-[380px] rounded-full bg-[#E8F4F8]/40 blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* Botanical Leaf Vector on the Far Right matching reference */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] sm:w-[340px] lg:w-[420px] h-[540px] pointer-events-none opacity-30 -z-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain object-right"
        >
          {/* Main stem curving upward */}
          <path
            d="M380 580C340 450 310 320 330 140"
            stroke="#20B85A"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Top leaves */}
          <path
            d="M330 140C330 140 375 160 385 200C395 240 355 245 330 215C325 210 328 170 330 140Z"
            fill="#20B85A"
            fillOpacity="0.45"
          />
          <path
            d="M325 180C325 180 270 190 250 230C230 270 270 285 295 260C315 240 320 205 325 180Z"
            fill="#087F78"
            fillOpacity="0.35"
          />
          {/* Middle leaves */}
          <path
            d="M320 280C320 280 375 290 390 340C405 390 360 400 330 365C315 345 318 305 320 280Z"
            fill="#20B85A"
            fillOpacity="0.5"
          />
          <path
            d="M320 340C320 340 250 360 230 410C210 460 260 475 285 440C305 410 315 370 320 340Z"
            fill="#087F78"
            fillOpacity="0.35"
          />
          {/* Lower leaf */}
          <path
            d="M340 430C340 430 385 450 395 500C405 540 365 545 345 510C335 490 338 455 340 430Z"
            fill="#20B85A"
            fillOpacity="0.4"
          />
        </svg>
      </div>

      {/* Main Two-Column Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-28 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Logo, Headline, Description, CTA, Badges     */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Main Headline */}
            <div className="space-y-1 pt-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.12] text-[#10264B] font-display">
                Your Business.<br />
                Your Documents.<br />
                <span className="relative inline-block mt-0.5">
                  <span className="bg-gradient-to-r from-[#087F78] via-[#0E9B93] to-[#20B85A] bg-clip-text text-transparent">
                    Credit Ready.
                  </span>
                  {/* Short warm orange underline beneath final headline matching reference */}
                  <svg
                    className="absolute -bottom-2.5 left-0 w-[190px] sm:w-[220px] h-[10px] text-[#FF792E] overflow-visible"
                    viewBox="0 0 220 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 7C55 2.5 135 1.5 217.5 6"
                      stroke="#FF792E"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* 3. Supporting Description */}
            <p className="text-[17px] sm:text-[18px] text-slate-600 leading-relaxed font-normal max-w-[450px] pt-1">
              Get guided support to explore loan options, organise your records and move forward.
            </p>

            {/* 4. Primary CTA Button */}
            <div className="pt-2">
              <a
                href="#dashboard"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FF792E] hover:bg-[#E8671F] text-white font-bold text-base transition-all duration-200 shadow-[0_12px_28px_-6px_rgba(255,121,46,0.38)] hover:shadow-[0_16px_34px_-6px_rgba(255,121,46,0.48)] transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>Start Your Credit Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* 5. Feature Highlights (Three Horizontal Indicators with Vertical Dividers) */}
            <div className="pt-4 flex items-center gap-4 sm:gap-6 text-left">
              
              {/* Feature 1 */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#DDF5EC]/70 text-[#087F78] flex items-center justify-center shrink-0">
                  <Mic className="w-4 h-4 stroke-[1.8]" />
                </div>
                <span className="text-[13px] font-semibold text-[#10264B] leading-tight">
                  Voice-Led<br />Guidance
                </span>
              </div>

              {/* Separator */}
              <div className="h-7 w-px bg-slate-200/90" />

              {/* Feature 2 */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#DDF5EC]/70 text-[#087F78] flex items-center justify-center shrink-0">
                  <FileCheck className="w-4 h-4 stroke-[1.8]" />
                </div>
                <span className="text-[13px] font-semibold text-[#10264B] leading-tight">
                  Smart Document<br />Organisation
                </span>
              </div>

              {/* Separator */}
              <div className="h-7 w-px bg-slate-200/90" />

              {/* Feature 3 */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#DDF5EC]/70 text-[#087F78] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 stroke-[1.8]" />
                </div>
                <span className="text-[13px] font-semibold text-[#10264B] leading-tight">
                  Credit<br />Readiness
                </span>
              </div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Smartphone Mockup & Floating Cards          */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Phone Wrapper with subtle tilt and natural shadow */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] flex items-center justify-center">
              
              {/* Natural soft shadow behind/beneath phone */}
              <div 
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[75%] h-8 bg-navy/20 rounded-full blur-xl pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Actual Generated Mobile UI Smartphone Image */}
              <div className="relative z-10 w-full aspect-[574/1024] max-h-[560px] transform rotate-[1.5deg] hover:rotate-0 transition-transform duration-300 drop-shadow-[0_20px_40px_rgba(16,38,75,0.18)]">
                <Image
                  src="/assets/nidhara-phone-app.png"
                  alt="Nidhara Mobile App Interface showing Tamil voice assistant and loan readiness profile"
                  fill
                  priority
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
                  className="object-contain"
                />
              </div>

              {/* Floating Card 1: Left Upper Side (Business Profile 85% Complete) */}
              <div className="absolute top-[8%] -left-3 sm:-left-8 lg:-left-12 z-20 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl shadow-[0_12px_32px_-4px_rgba(16,38,75,0.12)] border border-[#E8F4F8] flex items-center gap-3 transition-transform hover:-translate-y-0.5 duration-200">
                <div className="w-8 h-8 rounded-xl bg-[#DDF5EC] text-[#20B85A] flex items-center justify-center shrink-0 shadow-xs">
                  <Briefcase className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-500 leading-tight">
                    Business Profile
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold text-[#10264B] leading-tight mt-0.5">
                    85% Complete
                  </p>
                </div>
              </div>

              {/* Floating Card 2: Right Middle Side (Documents Organised) */}
              <div className="absolute top-[52%] -right-2 sm:-right-8 lg:-right-10 z-20 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl shadow-[0_12px_32px_-4px_rgba(16,38,75,0.12)] border border-[#E8F4F8] flex items-center gap-3 transition-transform hover:-translate-y-0.5 duration-200">
                <div className="w-8 h-8 rounded-full bg-[#DDF5EC] text-[#20B85A] flex items-center justify-center shrink-0 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-500 leading-tight">
                    Documents
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold text-[#10264B] leading-tight mt-0.5">
                    Organised
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
