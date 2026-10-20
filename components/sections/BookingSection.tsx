'use client';

import React, { useState, useEffect } from 'react';
import { salonConfig } from '@/config/salon.config';
import { generateWhatsAppBookingUrl, generateEmailBookingUrl, BookingFormData } from '@/lib/whatsapp';
import { Calendar, MessageSquare, Mail, Sparkles, CheckCircle2, Clock, User, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface BookingSectionProps {
  initialService?: string;
  initialStylist?: string;
  initialBranch?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialService = '',
  initialStylist = '',
  initialBranch = '',
}) => {
  const { branches, services, team } = salonConfig;

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedBranchId, setSelectedBranchId] = useState(
    branches.find((b) => b.name === initialBranch)?.id || branches[0].id
  );
  const [selectedService, setSelectedService] = useState(initialService || services[0].name);
  const [selectedStylist, setSelectedStylist] = useState(initialStylist || 'First Available Master Artist');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Afternoon (1:00 PM – 4:00 PM)');
  const [specialNotes, setSpecialNotes] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Sync external pre-selections
  useEffect(() => {
    if (initialService) setSelectedService(initialService);
  }, [initialService]);

  useEffect(() => {
    if (initialStylist) setSelectedStylist(initialStylist);
  }, [initialStylist]);

  useEffect(() => {
    if (initialBranch) {
      const match = branches.find((b) => b.name.toLowerCase().includes(initialBranch.toLowerCase()));
      if (match) setSelectedBranchId(match.id);
    }
  }, [initialBranch, branches]);

  const activeBranch = branches.find((b) => b.id === selectedBranchId) || branches[0];

  const formData: BookingFormData = {
    fullName,
    phoneNumber,
    branchName: activeBranch.name,
    whatsappNumber: activeBranch.whatsappNumber,
    serviceName: selectedService,
    date,
    timeSlot,
    stylistName: selectedStylist,
    specialNotes,
    branchEmail: activeBranch.email,
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) {
      alert('Please enter your name and phone number to proceed.');
      return;
    }
    const url = generateWhatsAppBookingUrl(formData);
    window.open(url, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  const handleEmailBooking = () => {
    if (!fullName || !phoneNumber) {
      alert('Please enter your name and phone number to proceed.');
      return;
    }
    const url = generateEmailBookingUrl(formData);
    window.location.href = url;
    setFormSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 bg-white border-b border-[#EBE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#C5A880] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Online Reservations
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#1F1E1D] font-bold tracking-tight">
              Reserve Your Atelier Experience
            </h2>
            <p className="mt-3 text-sm text-[#57524E] font-light max-w-xl mx-auto">
              Requests are sent straight to our salon concierge via WhatsApp or Email for immediate personal confirmation.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-[#FAF8F5] rounded-3xl border border-[#DFD7CA] p-6 sm:p-10 shadow-xl">
            {formSubmitted && (
              <div className="mb-8 p-4 rounded-2xl bg-[#E7F6ED] border border-[#BDE5CE] text-[#2D6A4F] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong>Reservation Initiated!</strong> Your request has opened in WhatsApp/Email. Our reservations concierge will confirm your exact slot within 15 minutes during operating hours.
                </div>
              </div>
            )}

            <form onSubmit={handleWhatsAppBooking} className="space-y-6">
              
              {/* Row 1: Guest Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1E1D] mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#C5A880]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Charlotte Montgomery"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFD7CA] text-xs sm:text-sm text-[#1F1E1D] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1E1D] mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. +44 7911 123456"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFD7CA] text-xs sm:text-sm text-[#1F1E1D] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Branch & Service Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1E1D] mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                    Preferred Atelier Branch *
                  </label>
                  <select
                    value={selectedBranchId}
                    onChange={(e) => setSelectedBranchId(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFD7CA] text-xs sm:text-sm text-[#1F1E1D] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-all"
                  >
                    {branches.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name} ({b.address.street})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1E1D] mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                    Desired Service / Ritual *
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFD7CA] text-xs sm:text-sm text-[#1F1E1D] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-all"
                  >
                    <option value="Complimentary 15-Min Consultation">
                      Complimentary 15-Min Diagnostic Consultation
                    </option>
                    {services.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.priceFormatted} · {s.durationMinutes}m)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Date, Time & Stylist */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1E1D] mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFD7CA] text-xs sm:text-sm text-[#1F1E1D] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1E1D] mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                    Preferred Time Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFD7CA] text-xs sm:text-sm text-[#1F1E1D] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-all"
                  >
                    <option value="Morning (9:30 AM – 12:30 PM)">Morning (9:30 AM – 12:30 PM)</option>
                    <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                    <option value="Evening (4:30 PM – 8:00 PM)">Evening (4:30 PM – 8:00 PM)</option>
                    <option value="Anytime (First Available Slot)">Anytime (First Available)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1E1D] mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#C5A880]" />
                    Requested Stylist
                  </label>
                  <select
                    value={selectedStylist}
                    onChange={(e) => setSelectedStylist(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFD7CA] text-xs sm:text-sm text-[#1F1E1D] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-all"
                  >
                    <option value="First Available Master Artist">First Available Master Artist</option>
                    {team.map((m) => (
                      <option key={m.id} value={m.name}>
                        {m.name} ({m.role.split('&')[0]})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Notes / Hair History */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F1E1D] mb-1.5">
                  Notes on Hair Length, Skin Concerns, or Allergies (Optional)
                </label>
                <textarea
                  rows={3}
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder="e.g. Previously bleached balayage, looking for root melt. Sensitive scalp."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFD7CA] text-xs sm:text-sm text-[#1F1E1D] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-all"
                />
              </div>

              {/* Dual Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  type="submit"
                  variant="whatsapp"
                  size="lg"
                  fullWidth
                  icon={<MessageSquare className="w-5 h-5" />}
                >
                  Book via WhatsApp (Instant Confirmation)
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={handleEmailBooking}
                  className="sm:w-auto sm:px-6"
                  icon={<Mail className="w-4 h-4" />}
                >
                  Send via Email
                </Button>
              </div>

              <div className="text-center text-[11px] text-[#57524E]">
                🔒 Zero payment required today · Free cancellation up to 48 hours in advance.
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
