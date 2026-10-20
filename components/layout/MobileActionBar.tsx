'use client';

import React from 'react';
import { salonConfig } from '@/config/salon.config';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

export const MobileActionBar: React.FC = () => {
  const defaultBranch = salonConfig.branches[0];

  return (
    <div className="sm:hidden fixed bottom-3 left-3 right-3 z-40 animate-slide-up">
      <div className="bg-[#1F1E1D] text-white rounded-2xl shadow-2xl p-2 border border-white/10 flex items-center justify-between gap-2 backdrop-blur-md">
        {/* Click to Call */}
        <a
          href={`tel:${defaultBranch.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
          aria-label="Call salon directly"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Call Us</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href={`https://wa.me/${defaultBranch.whatsappNumber}?text=${encodeURIComponent(
            `Hello ${salonConfig.brand.name}! I would like to check appointment availability.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold shadow-md transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Quick Book */}
        <a
          href="#booking"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#C5A880] hover:bg-[#B3946B] text-white text-xs font-semibold shadow-md transition-colors"
          aria-label="Scroll to booking form"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </a>
      </div>
    </div>
  );
};
