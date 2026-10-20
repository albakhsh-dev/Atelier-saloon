'use client';

import React, { useState } from 'react';
import { salonConfig } from '@/config/salon.config';
import { GalleryItem, ServiceCategory } from '@/types/salon';
import { Sparkles, Maximize2, User } from 'lucide-react';
import { Lightbox } from '@/components/ui/Lightbox';

export const LookbookGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories: { key: ServiceCategory | 'all'; label: string }[] = [
    { key: 'all', label: 'All Looks' },
    { key: 'hair', label: 'Balayage & Blondes' },
    { key: 'bridal', label: 'Bridal Artistry' },
    { key: 'skin', label: 'Skin Glow' },
    { key: 'nails', label: 'Nail Suite' },
    { key: 'grooming', label: "Men's Craft" },
  ];

  const filteredItems = selectedCategory === 'all'
    ? salonConfig.gallery
    : salonConfig.gallery.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-[#FAF8F5] border-b border-[#EBE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#C5A880] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Editorial Portfolio
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#1F1E1D] font-bold tracking-tight">
            The Atelier Lookbook
          </h2>
          <p className="mt-3 text-sm text-[#57524E] font-light">
            Real transformations created in our Mayfair and Chelsea salons. Tap any image to examine in detail.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.key
                  ? 'bg-[#1F1E1D] text-white shadow-md'
                  : 'bg-white text-[#57524E] hover:bg-[#F2ECE4] border border-[#EBE5DB]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#EBE5DB] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.altText}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between">
                <div className="self-end">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-white space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C5A880]">
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="font-serif-luxury text-sm font-semibold leading-snug">
                    {item.title}
                  </h3>
                  {item.stylistCredit && (
                    <div className="flex items-center gap-1.5 text-[11px] text-white/80 pt-1">
                      <User className="w-3 h-3 text-[#C5A880]" />
                      <span>{item.stylistCredit}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Accessible Lightbox Modal */}
      <Lightbox
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />
    </section>
  );
};
