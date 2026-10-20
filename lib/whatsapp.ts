export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  branchName: string;
  whatsappNumber: string;
  serviceName: string;
  serviceCategory?: string;
  date: string;
  timeSlot: string;
  stylistName?: string;
  specialNotes?: string;
  branchEmail?: string;
}

/**
 * Formats booking details into an encoded WhatsApp click-to-chat URL
 */
export function generateWhatsAppBookingUrl(data: BookingFormData): string {
  const sanitizedPhone = data.whatsappNumber.replace(/[^0-9]/g, '');

  const lines = [
    `✨ *New Appointment Request — ${data.branchName}*`,
    ``,
    `👤 *Guest:* ${data.fullName || 'Not specified'}`,
    `📞 *Phone:* ${data.phoneNumber || 'Not specified'}`,
    `✂️ *Service:* ${data.serviceName || 'General Consultation'}`,
    `📅 *Preferred Date:* ${data.date || 'Earliest available'}`,
    `⏰ *Preferred Time:* ${data.timeSlot || 'Anytime'}`,
    `🌟 *Requested Stylist:* ${data.stylistName || 'First Available Master Artist'}`,
  ];

  if (data.specialNotes && data.specialNotes.trim()) {
    lines.push(`📝 *Notes:* ${data.specialNotes.trim()}`);
  }

  lines.push(``);
  lines.push(`Sent via Étoile Atelier Online Reservations.`);

  const fullMessage = lines.join('\n');
  const encodedText = encodeURIComponent(fullMessage);

  return `https://wa.me/${sanitizedPhone}?text=${encodedText}`;
}

/**
 * Generates an email mailto fallback for reservations
 */
export function generateEmailBookingUrl(data: BookingFormData): string {
  const email = data.branchEmail || 'reservations@etoileatelier.com';
  const subject = encodeURIComponent(`Reservation Request: ${data.serviceName} - ${data.fullName}`);

  const bodyText = [
    `Hello Étoile Atelier Concierge,`,
    ``,
    `I would like to request an appointment:`,
    `• Guest Name: ${data.fullName}`,
    `• Phone: ${data.phoneNumber}`,
    `• Desired Branch: ${data.branchName}`,
    `• Service: ${data.serviceName}`,
    `• Desired Date: ${data.date}`,
    `• Desired Time: ${data.timeSlot}`,
    `• Requested Stylist: ${data.stylistName || 'First Available'}`,
    `• Notes: ${data.specialNotes || 'None'}`,
    ``,
    `Please contact me to confirm availability.`,
  ].join('\n');

  return `mailto:${email}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
}
