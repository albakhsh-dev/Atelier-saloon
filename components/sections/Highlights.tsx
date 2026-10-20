'use client';

import React from 'react';
import { Sparkles, Leaf, Award, ShieldCheck } from 'lucide-react';

export const Highlights: React.FC = () => {
  const highlights = [
    {
      icon: <Award className="w-5 h-5 text-[#C5A880]" />,
      title: "Master Certified Colorists",
      description: "Our artists train seasonally in Paris and London, specializing in hand-painted balayage and Scandinavian blondes.",
    },
    {
      icon: <Leaf className="w-5 h-5 text-[#C5A880]" />,
      title: "100% Clean Botanicals",
      description: "Sustainably harvested formulations free from formaldehyde, sulfates, and parabens. Gentle on your hair and scalp.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#C5A880]" />,
      title: "Bespoke Consultations",
      description: "Every appointment commences with a 15-minute diagnostic analysis of your hair texture, lifestyle, and facial bone structure.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#C5A880]" />,
      title: "Private VIP Sanctuaries",
      description: "Enjoy private bridal and VIP styling suites equipped with complimentary barista service, champagne, and tranquil lighting.",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-[#EBE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-[#EBE5DB] shadow-sm hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#DFD7CA] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-[#1F1E1D] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#57524E] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F2ECE4] text-[11px] font-semibold tracking-wider text-[#C5A880] uppercase">
                Atelier Standard
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
