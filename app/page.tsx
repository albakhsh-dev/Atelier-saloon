'use client';

import React, { useState } from 'react';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { Highlights } from '@/components/sections/Highlights';
import { ServicesMenu } from '@/components/sections/ServicesMenu';
import { LookbookGallery } from '@/components/sections/LookbookGallery';
import { TeamSection } from '@/components/sections/TeamSection';
import { LocationsSection } from '@/components/sections/LocationsSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { SpecialOffers } from '@/components/sections/SpecialOffers';
import { BookingSection } from '@/components/sections/BookingSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { InstagramGrid } from '@/components/sections/InstagramGrid';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Footer } from '@/components/layout/Footer';
import { MobileActionBar } from '@/components/layout/MobileActionBar';

export default function Home() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedStylist, setSelectedStylist] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1F1E1D]">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Sticky Header Navigation */}
      <Header />

      <main className="flex-1">
        {/* 1. Hero Experience */}
        <HeroSection />

        {/* 2. Brand Value Pillars & Highlights */}
        <Highlights />

        {/* 3. Services & Price Catalog */}
        <ServicesMenu
          onSelectService={(serviceName) => setSelectedService(serviceName)}
        />

        {/* 4. Lookbook Gallery & Lightbox */}
        <LookbookGallery />

        {/* 5. Master Stylists & Team */}
        <TeamSection
          onSelectStylist={(stylistName) => setSelectedStylist(stylistName)}
        />

        {/* 6. Multi-Branch Locations & Live Hours Engine */}
        <LocationsSection
          onSelectBranch={(branchName) => setSelectedBranch(branchName)}
        />

        {/* 7. Verified Client Testimonials */}
        <Testimonials />

        {/* 8. Special Privileges & Seasonal Offers */}
        <SpecialOffers
          onSelectOffer={(offerTitle) => setSelectedService(`Special Offer: ${offerTitle}`)}
        />

        {/* 9. Interactive WhatsApp Booking Engine */}
        <BookingSection
          initialService={selectedService}
          initialStylist={selectedStylist}
          initialBranch={selectedBranch}
        />

        {/* 10. Guest FAQ & Salon Etiquette */}
        <FaqSection />

        {/* 11. Instagram Social Grid */}
        <InstagramGrid />

        {/* 12. Pre-Footer High-Impact CTA Banner */}
        <CtaBanner />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Mobile Floating Action Dock (Call + WhatsApp + Book) */}
      <MobileActionBar />
    </div>
  );
}
