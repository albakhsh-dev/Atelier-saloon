'use client';

import React, { useState } from 'react';
import { salonConfig } from '@/config/salon.config';
import { Tag, Sparkles, Check, Copy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface SpecialOffersProps {
  onSelectOffer?: (offerTitle: string) => void;
}

export const SpecialOffers: React.FC<SpecialOffersProps> = ({ onSelectOffer }) => {
  const { specialOffers } = salonConfig;
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const handleClaim = (offerTitle: string) => {
    if (onSelectOffer) {
      onSelectOffer(offerTitle);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offers" className="py-20 bg-[#FAF8F5] border-b border-[#EBE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#C5A880] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Seasonal Privileges
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#1F1E1D] font-bold tracking-tight">
            Curated Invitations & Packages
          </h2>
          <p className="mt-3 text-sm text-[#57524E] font-light">
            Exclusive entry points designed for debut guests and milestone celebrations.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {specialOffers.map((offer) => (
            <div
              key={offer.id}
              className="p-8 rounded-3xl bg-white border border-[#DFD7CA] shadow-md hover-lift flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D5BD9B] via-[#C5A880] to-[#9E825A]" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#9E825A]">
                    {offer.subtitle}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#9E825A] border border-[#C5A880]/30">
                    {offer.discountBadge}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl font-bold text-[#1F1E1D] mb-3">
                  {offer.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#57524E] leading-relaxed mb-6 font-light">
                  {offer.description}
                </p>

                {/* Inclusions */}
                <div className="space-y-2 mb-6">
                  {offer.includedServices.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#1F1E1D]">
                      <Check className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Claim Action & Code Box */}
              <div className="pt-6 border-t border-[#F2ECE4] space-y-4">
                <div className="flex items-center justify-between gap-3 bg-[#FAF8F5] p-3 rounded-xl border border-[#EBE5DB]">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-[#C5A880]" />
                    <span className="text-xs font-mono font-bold tracking-wider text-[#1F1E1D]">
                      {offer.code}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopyCode(offer.code)}
                    className="text-xs font-medium text-[#57524E] hover:text-[#1F1E1D] flex items-center gap-1 transition-colors"
                  >
                    {copiedCode === offer.code ? (
                      <span className="text-[#2D6A4F] flex items-center gap-1 font-semibold">
                        <Check className="w-3 h-3" /> Copied!
                      </span>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" /> Copy Code
                      </>
                    )}
                  </button>
                </div>

                <Button
                  variant="gold"
                  size="md"
                  fullWidth
                  onClick={() => handleClaim(offer.title)}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Claim This Invitation
                </Button>
                <div className="text-center text-[11px] text-[#57524E]">
                  {offer.validUntil}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
