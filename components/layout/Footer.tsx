'use client';

import React from 'react';
import { salonConfig } from '@/config/salon.config';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons';
import { BranchStatusBadge } from '@/components/ui/BranchStatusBadge';

export const Footer: React.FC = () => {
  const { brand, branches, socialLinks } = salonConfig;

  return (
    <footer className="bg-[#191817] text-[#FAF8F5] pt-16 pb-24 sm:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Manifesto & Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif-luxury text-2xl font-bold tracking-[0.2em] text-white">
                {brand.name.toUpperCase()}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-medium">
                {brand.tagline}
              </span>
            </div>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed font-light">
              {brand.description}
            </p>
            
            <div className="pt-2 flex items-center gap-3">
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C5A880] hover:text-[#1F1E1D] flex items-center justify-center transition-all border border-white/10"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C5A880] hover:text-[#1F1E1D] flex items-center justify-center transition-all border border-white/10"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
              <div className="text-xs text-white/50 pl-2">
                ★ {brand.ratingScore} / 5.0 ({brand.ratingCount}+ guest reviews)
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
              The Atelier
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Services & Pricing</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Editorial Lookbook</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Master Artists</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Salon Locations</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#offers" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Special Privileges</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Guest FAQ & Policies</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Multi-Branch Snapshot (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
              Our Locations
            </h4>
            <div className="space-y-4">
              {branches.map((b) => (
                <div key={b.id} className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-white flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#C5A880]" />
                      {b.name}
                    </span>
                    <BranchStatusBadge hours={b.hours} />
                  </div>
                  <p className="text-xs text-white/60">
                    {b.address.street}, {b.address.city}
                  </p>
                  <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
                    <a
                      href={`tel:${b.phone}`}
                      className="text-white/80 hover:text-white flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-[#C5A880]" />
                      {b.phoneDisplay}
                    </a>
                    <a
                      href={b.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C5A880] hover:underline text-[11px]"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Credits & Rebranding Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
          <div>
            © {new Date().getFullYear()} {brand.name}. All rights reserved. Cruelty-free & sustainably sourced.
          </div>
          <div className="flex items-center gap-4">
            <a href="#faq" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#faq" className="hover:text-white transition-colors">Terms of Service</a>
            <span>·</span>
            <span className="text-[#C5A880]/80">Turnkey Salon Template by Studio Étoile</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
