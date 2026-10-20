'use client';

import React from 'react';
import { salonConfig } from '@/config/salon.config';
import { Sparkles, Calendar, Award } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/SocialIcons';
import { Button } from '@/components/ui/Button';

interface TeamSectionProps {
  onSelectStylist?: (stylistName: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectStylist }) => {
  const { team, branches } = salonConfig;

  const handleBookWithStylist = (name: string) => {
    if (onSelectStylist) {
      onSelectStylist(name);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-20 bg-white border-b border-[#EBE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#C5A880] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            The Artisans
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#1F1E1D] font-bold tracking-tight">
            Meet Our Master Artists
          </h2>
          <p className="mt-3 text-sm text-[#57524E] font-light">
            Seasoned masters dedicated to the fine art of color chemistry, organic skin rejuvenation, and bespoke silhouette styling.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => {
            const branch = branches.find((b) => b.id === member.branchId);

            return (
              <div
                key={member.id}
                className="rounded-2xl bg-[#FAF8F5] border border-[#EBE5DB] overflow-hidden flex flex-col justify-between hover-lift group"
              >
                <div>
                  {/* Portrait */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#EBE5DB]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-[#1F1E1D]/80 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1">
                      <Award className="w-3 h-3 text-[#C5A880]" />
                      <span>{member.experienceYears} Yrs Exp</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-serif-luxury text-lg font-bold text-[#1F1E1D]">
                        {member.name}
                      </h3>
                      {member.instagramHandle && (
                        <a
                          href={`https://instagram.com/${member.instagramHandle}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#57524E] hover:text-[#C5A880] transition-colors p-1"
                          title="View Instagram portfolio"
                          aria-label={`${member.name} Instagram`}
                        >
                          <InstagramIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <div className="text-xs font-semibold text-[#C5A880] uppercase tracking-wider mb-2">
                      {member.role}
                    </div>

                    {branch && (
                      <div className="text-[11px] text-[#57524E] mb-3">
                        Based at: <strong className="text-[#1F1E1D]">{branch.name}</strong>
                      </div>
                    )}

                    <p className="text-xs text-[#57524E] leading-relaxed mb-4 font-light">
                      {member.bio}
                    </p>

                    {/* Specialties Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {member.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-white border border-[#DFD7CA] text-[#57524E] px-2 py-0.5 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 bg-white border-t border-[#EBE5DB]">
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    onClick={() => handleBookWithStylist(member.name)}
                    icon={<Calendar className="w-3.5 h-3.5 text-[#C5A880]" />}
                  >
                    Book with {member.name.split(' ')[0]}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
