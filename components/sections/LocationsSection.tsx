'use client';

import React, { useState } from 'react';
import { salonConfig } from '@/config/salon.config';
import { MapPin, Phone, MessageSquare, Clock, Navigation, CheckCircle2, Sparkles } from 'lucide-react';
import { BranchStatusBadge } from '@/components/ui/BranchStatusBadge';
import { formatFriendlyTime } from '@/lib/hours';
import { Button } from '@/components/ui/Button';

interface LocationsSectionProps {
  onSelectBranch?: (branchName: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSelectBranch }) => {
  const { branches } = salonConfig;
  const [activeBranchId, setActiveBranchId] = useState(branches[0].id);

  const activeBranch = branches.find((b) => b.id === activeBranchId) || branches[0];

  const handleBookAtBranch = (branchName: string) => {
    if (onSelectBranch) {
      onSelectBranch(branchName);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="locations" className="py-20 bg-[#FAF8F5] border-b border-[#EBE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#C5A880] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Atelier Locations
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#1F1E1D] font-bold tracking-tight">
            Find Your Nearest Sanctuary
          </h2>
          <p className="mt-3 text-sm text-[#57524E] font-light">
            Two distinct architectural locations across London, unified by identical formulas and standards of care.
          </p>
        </div>

        {/* Branch Selector Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#EBE5DB] p-1.5 rounded-full inline-flex gap-1.5 max-w-md w-full sm:w-auto">
            {branches.map((b) => (
              <button
                key={b.id}
                onClick={() => setActiveBranchId(b.id)}
                className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  b.id === activeBranchId
                    ? 'bg-[#1F1E1D] text-white shadow-md'
                    : 'text-[#57524E] hover:text-[#1F1E1D]'
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Branch Card Panel */}
        <div className="bg-white rounded-3xl border border-[#DFD7CA] shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Info Panel (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8">
              <div>
                {/* Branch Heading & Status */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1F1E1D]">
                      {activeBranch.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#C5A880] font-medium mt-0.5">
                      {activeBranch.tagline}
                    </p>
                  </div>
                  <BranchStatusBadge hours={activeBranch.hours} showDetails />
                </div>

                {/* Address & Quick Contacts */}
                <div className="space-y-3 pt-3 border-t border-[#F2ECE4] text-xs sm:text-sm text-[#57524E]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C5A880] flex-shrink-0 mt-0.5" />
                    <span>
                      {activeBranch.address.street}, {activeBranch.address.city}, {activeBranch.address.postalCode}, {activeBranch.address.country}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-1">
                    <a
                      href={`tel:${activeBranch.phone}`}
                      className="flex items-center gap-2 text-[#1F1E1D] hover:text-[#C5A880] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#C5A880]" />
                      <span className="font-medium">{activeBranch.phoneDisplay}</span>
                    </a>
                    <a
                      href={`https://wa.me/${activeBranch.whatsappNumber}?text=${encodeURIComponent(
                        `Hello ${activeBranch.name}, I would like to check appointment availability.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[#25D366] font-medium hover:underline"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Directly</span>
                    </a>
                  </div>
                </div>

                {/* Branch Features */}
                <div className="pt-6">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1F1E1D] mb-3">
                    Boutique Amenities & Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {activeBranch.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#57524E]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hours Schedule Table */}
                <div className="pt-6">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1F1E1D] mb-3 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                    Opening & Consultation Hours
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 bg-[#FAF8F5] p-4 rounded-xl border border-[#EBE5DB] text-xs">
                    {activeBranch.hours.map((h, i) => (
                      <div key={i} className="flex items-center justify-between py-1 border-b border-[#F2ECE4] last:border-none">
                        <span className="font-medium text-[#1F1E1D]">{h.day}</span>
                        <span className="text-[#57524E]">
                          {h.isClosed ? 'Closed' : `${formatFriendlyTime(h.open)} – ${formatFriendlyTime(h.close)}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => handleBookAtBranch(activeBranch.name)}
                >
                  Book at {activeBranch.name.split(' ')[0]}
                </Button>
                <a
                  href={activeBranch.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="outline"
                    size="md"
                    icon={<Navigation className="w-3.5 h-3.5" />}
                  >
                    Get Directions (Maps)
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Map Embed & Photo (5 cols) */}
            <div className="lg:col-span-5 bg-[#FAF8F5] border-t lg:border-t-0 lg:border-l border-[#DFD7CA] flex flex-col">
              {/* Google Maps Iframe (Embed without API key) */}
              <div className="relative w-full h-72 sm:h-80 lg:h-1/2 bg-[#EBE5DB]">
                <iframe
                  title={`${activeBranch.name} Location Map`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${activeBranch.googleMapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full grayscale-[25%] contrast-105"
                />
              </div>

              {/* Branch Facade / Interior Photo */}
              <div className="relative w-full h-56 sm:h-64 lg:h-1/2 overflow-hidden bg-[#1F1E1D]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeBranch.image}
                  alt={activeBranch.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white text-xs">
                    <div className="font-semibold">{activeBranch.name} Storefront</div>
                    <div className="text-white/70">{activeBranch.address.street}</div>
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
