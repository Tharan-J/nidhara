'use client';

import React, { useState, useEffect } from 'react';
import { Mic, Volume2, X, CheckCircle2, ArrowRight, Sparkles, MessageSquare, Play, Pause } from 'lucide-react';
import Image from 'next/image';

type LanguageKey = 'tamil' | 'hindi' | 'kannada' | 'english';

interface ConversationMessage {
  sender: 'assistant' | 'user';
  text: string;
  trans?: string;
}

interface VoiceAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const conversations: Record<LanguageKey, ConversationMessage[]> = {
  tamil: [
    {
      sender: 'assistant',
      text: 'வணக்கம்! உங்கள் தொழில் பற்றிய செய்திகளை சொல்லுங்கள். நான் உதவுகிறேன்.',
      trans: 'Vanakkam! Tell me about your business. I am here to help you get loan-ready.',
    },
    {
      sender: 'user',
      text: 'நான் தையல் தொழில் செய்கிறேன். 3 வருடங்களாக 2 மெஷின் வச்சு பெண்களுக்கான உடைகள் தைக்கிறேன்.',
      trans: 'I run a tailoring business. For 3 years I have been stitching garments with 2 machines.',
    },
    {
      sender: 'assistant',
      text: 'அருமை! உங்கள் தொழில் விவரம் பதிவு செய்யப்பட்டுள்ளது. தற்போது நீங்கள் எவ்வளவு கடன் தொகை தேவைப்படுகிறீர்கள்?',
      trans: 'Great! Your tailoring unit is recorded. What loan amount do you require to expand?',
    },
    {
      sender: 'user',
      text: 'புதிய ஜுக்கி மெஷின் மற்றும் துணி வாங்க 1.5 லட்சம் தேவை.',
      trans: 'I need ₹1.5 Lakhs to buy an industrial Juki machine and fabric rolls.',
    },
    {
      sender: 'assistant',
      text: 'பிரதான் மந்திரி முத்ரா திட்டத்தின் "சிசு" கடன் இதற்கு மிகவும் பொருந்தும்! உங்களின் காகிதக் குறிப்பேடு அல்லது வங்கி பாஸ்புக் பக்கத்தை போட்டோ எடுங்கள்.',
      trans: 'Pradhan Mantri Mudra Yojana (Shishu) is a direct match! Just snap a photo of your order notebook or passbook.',
    },
  ],
  hindi: [
    {
      sender: 'assistant',
      text: 'नमस्ते! अपने व्यवसाय के बारे में बताइए। मैं आपको लोन के लिए तैयार करने में मदद करूंगी।',
      trans: 'Namaste! Tell me about your enterprise. I will help you prepare for loan readiness.',
    },
    {
      sender: 'user',
      text: 'मेरी दूध की डेयरी है। रोज़ 85 लीटर दूध सहकारी समिति में जाता है।',
      trans: 'I run a dairy unit. Daily 85 litres of milk is supplied to the cooperative society.',
    },
    {
      sender: 'assistant',
      text: 'बहुत बढ़िया! आपकी डेयरी आय दर्ज हो गई है। विस्तार के लिए आपको कितनी राशि चाहिए?',
      trans: 'Excellent! Your dairy income is captured. What amount do you need for expansion?',
    },
    {
      sender: 'user',
      text: '2 नई मुर्रा भैंस और चारे की मशीन के लिए 2 लाख रुपये चाहिए।',
      trans: 'I need ₹2 Lakhs for 2 Murrah buffaloes and a fodder cutting machine.',
    },
    {
      sender: 'assistant',
      text: 'डेयरी उद्यमिता विकास योजना और पशुपालन केसीसी इसके लिए उपयुक्त हैं। बस अपनी दूध पर्ची की फोटो खींचें!',
      trans: 'Dairy scheme and Animal Husbandry KCC are suitable. Just snap a photo of your milk slips!',
    },
  ],
  kannada: [
    {
      sender: 'assistant',
      text: 'ನಮಸ್ಕಾರ! ನಿಮ್ಮ ವ್ಯವಹಾರದ ಬಗ್ಗೆ ತಿಳಿಸಿ. ನಾನು ನಿಮಗೆ ಸಾಲ ಪಡೆಯಲು ಸಿದ್ಧರಾಗಲು ಸಹಾಯ ಮಾಡುತ್ತೇನೆ.',
      trans: 'Namaskara! Tell me about your business. I will help you become loan-ready.',
    },
    {
      sender: 'user',
      text: 'ನಾನು ಚಿಕ್ಕ ಫ್ಯಾಬ್ರಿಕೇಶನ್ ವರ್ಕ್‌ಶಾಪ್ ನಡೆಸುತ್ತಿದ್ದೇನೆ. ಗೇಟ್ ಮತ್ತು ಗ್ರಿಲ್ ತಯಾರಿಸುತ್ತೇವೆ.',
      trans: 'I run a small fabrication workshop making gates and window grills.',
    },
    {
      sender: 'assistant',
      text: 'ಉತ್ತಮ! ನಿಮ್ಮ ಕೆಲಸದ ವಿವರ ದಾಖಲಾಗಿದೆ. ಯಂತ್ರ ಅಥವಾ ಕಚ್ಚಾ ಸಾಮಗ್ರಿಗೆ ಎಷ್ಟು ಸಾಲ ಬೇಕು?',
      trans: 'Great! Your workshop is recorded. How much working capital or machinery loan is needed?',
    },
    {
      sender: 'user',
      text: 'ವೆಲ್ಡಿಂಗ್ ಯಂತ್ರ ಮತ್ತು ಶೀಟ್‌ಗಳಿಗೆ 2.5 ಲಕ್ಷ ರೂ. ಬೇಕು.',
      trans: 'Need ₹2.5 Lakhs for welding equipment and sheet metal inventory.',
    },
    {
      sender: 'assistant',
      text: 'ಮುದ್ರಾ ಕಿಶೋರ್ ಯೋಜನೆಯಡಿ ಇದು ಅರ್ಹವಾಗಿದೆ. ನಿಮ್ಮ ಕೆಲಸದ ಆರ್ಡರ್ ಬುಕ್ ಅಥವಾ ಬಿಲ್‌ಗಳ ಫೋಟೋ ತೆಗೆಯಿರಿ.',
      trans: 'Eligible under Mudra Kishor! Just snap a picture of your job-work book or bills.',
    },
  ],
  english: [
    {
      sender: 'assistant',
      text: 'Hello! Tell me about your daily business operations in your own words. I will help you get loan-ready.',
    },
    {
      sender: 'user',
      text: 'I run a home catering and lunch-box service with 4 women from my SHG. We do 60 meals daily.',
    },
    {
      sender: 'assistant',
      text: 'Wonderful! Self-Help Group micro-enterprise registered. How much capital do you need to expand?',
    },
    {
      sender: 'user',
      text: 'We need ₹1.8 Lakhs for commercial steam cookware and a small delivery scooter.',
    },
    {
      sender: 'assistant',
      text: 'National Rural Livelihoods Mission (NRLM) enterprise fund and Mudra Shishu match perfectly. Let us photograph your SHG register.',
    },
  ],
};

export const VoiceAssistantModal: React.FC<VoiceAssistantModalProps> = ({ isOpen, onClose }) => {
  const [language, setLanguage] = useState<LanguageKey>('tamil');
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const activeMessages = conversations[language];

  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0);
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    setCurrentStep(0);
  }, [isOpen, language]);

  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    if (currentStep < activeMessages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 2600);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isPlaying, currentStep, activeMessages.length]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-cream-border flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-navy px-6 py-4 flex items-center justify-between text-white border-b border-navy-light">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-white shadow-md">
              <Mic className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight flex items-center gap-2">
                Nidhara Voice Assistant
                <span className="text-xs px-2 py-0.5 rounded-full bg-teal/40 text-teal-light font-medium">
                  Live Interactive Demo
                </span>
              </h3>
              <p className="text-xs text-slate-300">
                Experience voice-led onboarding in Indian languages
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Language Switcher Tabs */}
        <div className="bg-cream-light px-6 py-3 border-b border-cream-border flex items-center justify-between flex-wrap gap-2">
          <span className="text-xs font-semibold text-slate-muted uppercase tracking-wider">
            Choose Language:
          </span>
          <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-cream-border shadow-sm">
            {([
              { id: 'tamil', label: 'தமிழ் (Tamil)' },
              { id: 'hindi', label: 'हिंदी (Hindi)' },
              { id: 'kannada', label: 'ಕನ್ನಡ (Kannada)' },
              { id: 'english', label: 'English' },
            ] as { id: LanguageKey; label: string }[]).map((lang) => (
              <button
                key={lang.id}
                onClick={() => {
                  setLanguage(lang.id);
                  setCurrentStep(0);
                  setIsPlaying(true);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  language === lang.id
                    ? 'bg-teal text-white shadow-sm'
                    : 'text-navy/70 hover:bg-cream hover:text-navy'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chat / Voice Conversation Stream */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1 bg-gradient-to-b from-cream to-white">
          {activeMessages.slice(0, currentStep + 1).map((msg, idx) => {
            const isAssistant = msg.sender === 'assistant';
            return (
              <div
                key={idx}
                className={`flex items-start gap-3 transition-all duration-300 ${
                  isAssistant ? 'justify-start' : 'justify-end'
                }`}
              >
                {isAssistant && (
                  <div className="w-9 h-9 rounded-full bg-teal-soft border border-teal/20 flex items-center justify-center text-teal shrink-0 shadow-sm mt-1">
                    <Sparkles className="w-4 h-4 text-teal" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl p-4 shadow-sm text-sm leading-relaxed ${
                    isAssistant
                      ? 'bg-white border border-teal/20 text-navy rounded-tl-sm'
                      : 'bg-teal text-white rounded-tr-sm'
                  }`}
                >
                  <p className="font-medium text-base mb-1">{msg.text}</p>
                  {msg.trans ? (
                    <p
                      className={`text-xs mt-1.5 pt-1.5 border-t italic ${
                        isAssistant
                          ? 'border-slate-100 text-slate-muted'
                          : 'border-white/20 text-white/80'
                      }`}
                    >
                      "{msg.trans}"
                    </p>
                  ) : null}
                </div>

                {!isAssistant && (
                  <div className="w-9 h-9 rounded-full bg-orange-soft border border-orange/20 flex items-center justify-center text-orange shrink-0 shadow-sm mt-1">
                    <span className="text-xs font-bold">You</span>
                  </div>
                )}
              </div>
            );
          })}

          {currentStep < activeMessages.length - 1 && isPlaying && (
            <div className="flex items-center gap-2 text-teal text-xs font-medium py-2">
              <span className="w-2 h-2 rounded-full bg-teal animate-ping" />
              <span>Voice assistant is listening and processing...</span>
            </div>
          )}
        </div>

        {/* Bottom Audio Interaction Bar */}
        <div className="bg-white p-4 border-t border-cream-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 px-3 py-1.5 bg-teal-soft rounded-full">
              <div className="w-1.5 h-3 bg-teal soundwave-bar rounded-full" />
              <div className="w-1.5 h-5 bg-teal soundwave-bar rounded-full" />
              <div className="w-1.5 h-4 bg-teal soundwave-bar rounded-full" />
              <div className="w-1.5 h-6 bg-teal soundwave-bar rounded-full" />
              <div className="w-1.5 h-3 bg-teal soundwave-bar rounded-full" />
            </div>
            <span className="text-xs font-medium text-navy">
              Natural speech to verified credit profile
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (currentStep >= activeMessages.length - 1) {
                  setCurrentStep(0);
                  setIsPlaying(true);
                } else {
                  setIsPlaying(!isPlaying);
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cream-border text-xs font-semibold text-navy hover:bg-cream transition-colors"
            >
              {currentStep >= activeMessages.length - 1 ? (
                <>Replay Demo</>
              ) : isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-navy" /> Pause
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-navy" /> Continue
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-teal text-white rounded-lg text-xs font-semibold hover:bg-teal-dark transition-colors shadow-sm"
            >
              Got It
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistantModal;
