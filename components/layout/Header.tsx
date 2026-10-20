'use client';

import React, { useState, useEffect } from 'react';
import { salonConfig } from '@/config/salon.config';
import { Menu, X, Calendar, Phone, MessageSquare, ChevronDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedBranchId, setSelectedBranchId] = useState(salonConfig.branches[0].id);

  const selectedBranch = salonConfig.branches.find((b) => b.id === selectedBranchId) || salonConfig.branches[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services & Prices', href: '#services' },
    { label: 'Lookbook', href: '#gallery' },
    { label: 'Master Stylists', href: '#team' },
    { label: 'Locations & Hours', href: '#locations' },
    { label: 'Special Offers', href: '#offers' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-sm py-3' : 'bg-[#FAF8F5]/95 py-4 border-b border-[#EBE5DB]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark Logo */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-[0.22em] text-[#1F1E1D] group-hover:text-[#C5A880] transition-colors">
              {salonConfig.brand.name.toUpperCase()}
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#57524E] font-medium -mt-0.5">
              HAUTE COIFFURE & BOTANICAL BEAUTY
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-wider font-medium text-[#1F1E1D] hover:text-[#C5A880] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A880] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Stack (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Branch Dropdown */}
            <div className="relative group">
              <button
                className="inline-flex items-center gap-1.5 text-xs text-[#57524E] hover:text-[#1F1E1D] bg-[#F2ECE4] px-3 py-2 rounded-full border border-[#EBE5DB] transition-colors"
                aria-label="Select active branch"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="font-medium">{selectedBranch.name}</span>
                <ChevronDown className="w-3 h-3 text-[#57524E]" />
              </button>
              <div className="absolute right-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-[#EBE5DB] py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all z-50">
                <div className="px-3 py-1 text-[11px] font-semibold text-[#57524E] uppercase tracking-wider border-b border-[#F2ECE4] mb-1">
                  Select Branch
                </div>
                {salonConfig.branches.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBranchId(b.id)}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-[#FAF8F5] transition-colors ${
                      b.id === selectedBranchId ? 'text-[#C5A880] font-semibold bg-[#FAF8F5]' : 'text-[#1F1E1D]'
                    }`}
                  >
                    <span>{b.name}</span>
                    <span className="text-[10px] text-[#57524E]">{b.address.city}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick WhatsApp */}
            <a
              href={`https://wa.me/${selectedBranch.whatsappNumber}?text=${encodeURIComponent(
                `Hello ${salonConfig.brand.name} (${selectedBranch.name}), I would like to inquire about appointment availability.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-[#1F1E1D] hover:text-[#25D366] hover:bg-white transition-all border border-[#EBE5DB]"
              title={`WhatsApp ${selectedBranch.name}`}
              aria-label={`WhatsApp ${selectedBranch.name}`}
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Primary Booking Button */}
            <a href="#booking">
              <Button variant="gold" size="sm" icon={<Calendar className="w-3.5 h-3.5" />}>
                Book Appointment
              </Button>
            </a>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <a href="#booking">
              <Button variant="gold" size="sm" className="px-3 py-1.5 text-xs">
                Book
              </Button>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1F1E1D] hover:bg-[#F2ECE4] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF8F5] border-b border-[#EBE5DB] px-4 pt-3 pb-6 animate-slide-down">
          {/* Branch Switcher for Mobile */}
          <div className="mb-4 p-3 bg-white rounded-xl border border-[#EBE5DB]">
            <div className="text-[11px] font-semibold text-[#57524E] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              Current Branch
            </div>
            <div className="grid grid-cols-2 gap-2">
              {salonConfig.branches.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBranchId(b.id)}
                  className={`text-left p-2 rounded-lg text-xs transition-colors border ${
                    b.id === selectedBranchId
                      ? 'border-[#C5A880] bg-[#FAF8F5] text-[#1F1E1D] font-semibold'
                      : 'border-[#EBE5DB] text-[#57524E]'
                  }`}
                >
                  <div className="truncate">{b.name}</div>
                  <div className="text-[10px] text-[#57524E]">{b.phoneDisplay}</div>
                </button>
              ))}
            </div>
          </div>

          <nav className="flex flex-col gap-3 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#1F1E1D] hover:text-[#C5A880] py-1 border-b border-[#F2ECE4]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${selectedBranch.phone}`}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-medium border border-[#1F1E1D] text-[#1F1E1D]"
            >
              <Phone className="w-3.5 h-3.5" />
              Call {selectedBranch.name.split(' ')[0]}
            </a>
            <a
              href={`https://wa.me/${selectedBranch.whatsappNumber}?text=${encodeURIComponent(
                `Hello ${salonConfig.brand.name}, I would like to inquire about appointments.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-medium bg-[#25D366] text-white"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
