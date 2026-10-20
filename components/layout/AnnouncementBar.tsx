'use client';

import React, { useState } from 'react';
import { salonConfig } from '@/config/salon.config';
import { Sparkles, X, ArrowRight } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { announcement } = salonConfig;

  if (!announcement.enabled || !isVisible) return null;

  return (
    <div className="bg-[#1F1E1D] text-[#FAF8F5] text-xs py-2 px-4 border-b border-white/10 relative z-40 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-2 text-center">
          {announcement.badgeText && (
            <span className="hidden sm:inline-flex items-center gap-1 bg-[#C5A880]/20 text-[#D5BD9B] border border-[#C5A880]/40 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase">
              <Sparkles className="w-3 h-3" />
              {announcement.badgeText}
            </span>
          )}
          <span className="font-light tracking-wide text-[#FAF8F5]/90">
            {announcement.text}
          </span>
          {announcement.actionText && (
            <a
              href={announcement.actionHref || "#booking"}
              className="inline-flex items-center gap-1 text-[#D5BD9B] hover:text-white font-medium underline underline-offset-4 decoration-[#C5A880]/60 transition-colors ml-1"
            >
              {announcement.actionText}
              <ArrowRight className="w-3 h-3" />
            </a>
          )}
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-[#FAF8F5]/60 hover:text-white p-1 rounded-md transition-colors"
          aria-label="Dismiss Announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
