'use client';

import React from 'react';
import { salonConfig } from '@/config/salon.config';
import { Star, Sparkles, Quote, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { testimonials, brand } = salonConfig;

  return (
    <section className="py-20 bg-white border-b border-[#EBE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#C5A880] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Guest Praise
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#1F1E1D] font-bold tracking-tight">
            Loved by London’s Most Discerning
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#57524E]">
            <div className="flex text-[#C5A880]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
              ))}
            </div>
            <span className="font-semibold text-[#1F1E1D]">{brand.ratingScore} Out of 5.0</span>
            <span>· Verified across {brand.ratingCount}+ guest appointments</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EBE5DB] flex flex-col justify-between hover-lift shadow-sm relative"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#C5A880]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#DFD7CA]" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#1F1E1D] italic leading-relaxed mb-6 font-light">
                  &ldquo;{t.reviewText}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#EBE5DB] flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.clientName}
                  className="w-10 h-10 rounded-full object-cover border border-[#C5A880]/30"
                  loading="lazy"
                />
                <div className="overflow-hidden">
                  <div className="text-xs font-semibold text-[#1F1E1D] truncate flex items-center gap-1">
                    <span>{t.clientName}</span>
                    <CheckCircle className="w-3 h-3 text-[#2D6A4F] flex-shrink-0" />
                  </div>
                  <div className="text-[10px] text-[#C5A880] truncate font-medium">
                    {t.serviceReceived}
                  </div>
                  <div className="text-[10px] text-[#57524E]">
                    {t.branchName} · {t.source}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
