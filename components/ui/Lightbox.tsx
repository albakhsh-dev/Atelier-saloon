'use client';

import React, { useEffect } from 'react';
import { GalleryItem } from '@/types/salon';
import { X, Sparkles, User } from 'lucide-react';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        className="relative max-w-4xl w-full bg-[#1F1E1D] text-white rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.altText}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-6 bg-[#1F1E1D] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs uppercase tracking-wider text-[#C5A880] font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                {item.category.toUpperCase()}
              </span>
            </div>
            <h3 className="text-lg font-serif-luxury text-white">
              {item.title}
            </h3>
          </div>

          {item.stylistCredit && (
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs text-white/80">
              <User className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Artistry by <strong className="text-white">{item.stylistCredit}</strong></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
