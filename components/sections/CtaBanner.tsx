'use client';

import React from 'react';
import { salonConfig } from '@/config/salon.config';
import { Calendar, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const CtaBanner: React.FC = () => {
  const { brand, branches } = salonConfig;
  const defaultBranch = branches[0];

  return (
    <section className="py-20 bg-dark-editorial text-white relative overflow-hidden border-t border-white/10">
      {/* Decorative Golden Ambient Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs text-[#D5BD9B]">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="font-semibold tracking-wider uppercase text-[11px]">
            Your Signature Glow Awaits
          </span>
        </div>

        <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Ready to Experience the{' '}
          <span className="italic font-normal text-gold-gradient">
            Atelier Standard?
          </span>
        </h2>

        <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed font-light">
          Whether you desire multi-dimensional balayage, an architectural scissor cut, or cellular skin renewal, our master artists are ready to welcome you.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#booking" className="w-full sm:w-auto">
            <Button
              variant="gold"
              size="lg"
              fullWidth
              icon={<Calendar className="w-4 h-4" />}
            >
              Reserve an Appointment
            </Button>
          </a>

          <a
            href={`https://wa.me/${defaultBranch.whatsappNumber}?text=${encodeURIComponent(
              `Hello ${brand.name}! I would like to inquire about booking availability.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="whatsapp"
              size="lg"
              fullWidth
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Chat on WhatsApp
            </Button>
          </a>
        </div>

        <div className="pt-2 text-xs text-white/50">
          Mayfair Flagship · Chelsea Waterfront · Private Bridal Suites
        </div>

      </div>
    </section>
  );
};
