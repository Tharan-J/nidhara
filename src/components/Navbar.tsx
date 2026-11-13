'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Problem', href: '#problem' },
    { name: 'Product Dashboard', href: '#dashboard' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Nidhara', href: '#why-nidhara' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFDF7]/95 backdrop-blur-md border-b border-[#DDF5EC] shadow-xs py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - fades in on scroll when hero top scrolls out */}
          <Link 
            href="/" 
            className={`flex items-center transition-opacity duration-300 ${
              isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none sm:opacity-100 sm:pointer-events-auto'
            }`}
          >
            <Logo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-semibold text-[#10264B]/75 hover:text-[#087F78] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action & Language Pill */}
          <div className="hidden sm:flex items-center space-x-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#DDF5EC]/70 text-[#087F78] font-bold text-xs border border-[#DDF5EC]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#20B85A]" />
              <span>தமிழ் • Eng</span>
            </div>

            <a
              href="#dashboard"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#10264B] hover:bg-[#1B3B6F] text-white text-xs sm:text-sm font-bold transition-all shadow-xs"
            >
              Start Your Journey
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#10264B] hover:bg-black/5 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF7] border-b border-[#DDF5EC] px-4 py-4 space-y-3 shadow-md animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-[#10264B] hover:bg-[#DDF5EC]/50 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#DDF5EC] flex items-center justify-between">
            <span className="text-xs font-bold text-[#087F78]">தமிழ் & English</span>
            <a
              href="#dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-full bg-[#10264B] text-white text-xs font-bold"
            >
              Start Journey
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
