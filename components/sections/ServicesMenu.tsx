'use client';

import React, { useState } from 'react';
import { salonConfig } from '@/config/salon.config';
import { ServiceCategory } from '@/types/salon';
import { Clock, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ServicesMenuProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesMenu: React.FC<ServicesMenuProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');

  const categories: { key: ServiceCategory | 'all'; label: string }[] = [
    { key: 'all', label: 'Complete Menu' },
    { key: 'hair', label: 'Hair & Color' },
    { key: 'skin', label: 'Advanced Skin' },
    { key: 'makeup', label: 'Couture Makeup' },
    { key: 'nails', label: 'Nail Artistry' },
    { key: 'bridal', label: 'Bridal Atelier' },
    { key: 'grooming', label: "Men's Grooming" },
  ];

  const filteredServices = activeCategory === 'all'
    ? salonConfig.services
    : salonConfig.services.filter((s) => s.category === activeCategory);

  const handleBookService = (name: string) => {
    if (onSelectService) {
      onSelectService(name);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-[#EBE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#C5A880] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Price List & Treatments
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#1F1E1D] font-bold tracking-tight">
            Services & Rituals
          </h2>
          <p className="mt-3 text-sm text-[#57524E] font-light">
            Each ritual is tailored to your unique biology and aesthetic aspirations, using cruelty-free, clinical-grade botanicals.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.key
                  ? 'bg-[#1F1E1D] text-white shadow-md'
                  : 'bg-[#FAF8F5] text-[#57524E] hover:bg-[#F2ECE4] border border-[#EBE5DB]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EBE5DB] hover:border-[#C5A880]/50 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-serif-luxury text-lg font-bold text-[#1F1E1D] group-hover:text-[#9E825A] transition-colors">
                      {service.name}
                    </h3>
                    {service.badge && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#C5A880]/20 text-[#9E825A] border border-[#C5A880]/40">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-lg font-bold text-[#1F1E1D]">
                      {service.priceFormatted}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#57524E] leading-relaxed mb-4 font-light">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EBE5DB] flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-[#57524E]">
                  <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{service.durationMinutes} minutes</span>
                </div>

                <button
                  onClick={() => handleBookService(service.name)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1F1E1D] hover:text-[#C5A880] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Book This Ritual</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Consultations Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F6F2EC] border border-[#DFD7CA] text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif-luxury font-bold text-base text-[#1F1E1D]">
              Uncertain which ritual aligns with your goals?
            </h4>
            <p className="text-xs text-[#57524E] mt-0.5">
              Book a complimentary 15-minute diagnostic consultation with our master colorists or skin aestheticians.
            </p>
          </div>
          <Button
            variant="dark"
            size="sm"
            onClick={() => handleBookService('Complimentary 15-Min Consultation')}
          >
            Book Free Consultation
          </Button>
        </div>

      </div>
    </section>
  );
};
