'use client';

import React from 'react';
import { salonConfig } from '@/config/salon.config';
import { Heart, Sparkles } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/SocialIcons';

export const InstagramGrid: React.FC = () => {
  const { instagramFeed, brand, socialLinks } = salonConfig;

  return (
    <section className="py-20 bg-white border-b border-[#EBE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#C5A880] mb-2">
            <InstagramIcon className="w-3.5 h-3.5" />
            Social Journal
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#1F1E1D] font-bold tracking-tight">
            Follow Our Atelier Journey
          </h2>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A880] hover:text-[#9E825A] underline underline-offset-4 tracking-wider uppercase transition-colors"
          >
            <span>@etoile.atelier.demo</span>
          </a>
        </div>

        {/* 6-Col Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramFeed.map((post) => (
            <a
              key={post.id}
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#EBE5DB] shadow-sm cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between text-white">
                <div className="flex items-center gap-1 text-[11px] font-semibold text-[#D5BD9B] self-end">
                  <Heart className="w-3 h-3 fill-[#D5BD9B]" />
                  <span>{post.likes}</span>
                </div>
                <p className="text-[10px] text-white/90 line-clamp-3 leading-tight">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
