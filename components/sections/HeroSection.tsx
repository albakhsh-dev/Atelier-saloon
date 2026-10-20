'use client';

import React from 'react';
import { salonConfig } from '@/config/salon.config';
import { Calendar, MessageSquare, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const HeroSection: React.FC = () => {
  const { brand, branches } = salonConfig;
  const defaultBranch = branches[0];

  return (
    <section className="relative overflow-hidden bg-champagne-gradient pt-8 pb-16 sm:py-20 lg:py-28 border-b border-[#EBE5DB]">
      {/* Decorative background ambiance */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A880]/15 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 bg-[#F2ECE4] border border-[#DFD7CA] px-3.5 py-1.5 rounded-full text-xs text-[#1F1E1D]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="font-semibold tracking-wide uppercase text-[11px] text-[#9E825A]">
                London’s Premier Atelier
              </span>
              <span className="text-[#DFD7CA]">|</span>
              <span className="text-[#57524E]">Mayfair & Chelsea</span>
            </div>

            {/* H1 Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#1F1E1D] leading-[1.12] tracking-tight">
              Where Haute Coiffure Meets{' '}
              <span className="italic font-normal text-[#C5A880]">
                Botanical Serenity.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#57524E] max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Experience bespoke French balayage, precision scissor craft, and restorative cellular skin rituals designed around your individual grace.
            </p>

            {/* Dual CTAs & Micro-copy */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a href="#booking" className="w-full sm:w-auto">
                <Button
                  variant="gold"
                  size="lg"
                  fullWidth
                  icon={<Calendar className="w-4 h-4" />}
                >
                  Reserve Your Ritual
                </Button>
              </a>

              <a
                href={`https://wa.me/${defaultBranch.whatsappNumber}?text=${encodeURIComponent(
                  `Hello ${brand.name}! I would like to inquire about booking an appointment.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  fullWidth
                  icon={<MessageSquare className="w-4 h-4 text-[#25D366]" />}
                >
                  WhatsApp Concierge
                </Button>
              </a>
            </div>

            {/* Trust Proof Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-[#57524E]">
              <div className="flex items-center gap-1.5">
                <div className="flex text-[#C5A880]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880]" />
                  ))}
                </div>
                <span className="font-semibold text-[#1F1E1D]">4.96/5.0</span>
                <span>(840+ verified guests)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                <span>100% Cruelty-Free Botanicals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                <span>Private VIP Suites</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Layered Aesthetic (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Frame Border */}
              <div className="absolute -inset-3 rounded-[2.5rem] border border-[#C5A880]/30 -rotate-2 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-[#EBE5DB]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                  alt={`${brand.name} Luxury Salon Interior`}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Bottom Overlay Pill on Image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#9E825A]">
                        Signature Specialty
                      </div>
                      <div className="text-sm font-serif-luxury font-bold text-[#1F1E1D]">
                        French Freehand Balayage
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-[#1F1E1D] text-white rounded-full">
                      From $240
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Award Chip */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md border border-[#DFD7CA] shadow-xl rounded-2xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#57524E] uppercase tracking-wider font-semibold">
                    Vogue Beauty Awards
                  </div>
                  <div className="text-xs font-bold text-[#1F1E1D]">
                    Best Boutique Atelier 2025
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
