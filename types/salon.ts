export type ServiceCategory = 'hair' | 'skin' | 'makeup' | 'nails' | 'bridal' | 'grooming';

export interface BranchHours {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  open: string;  // "09:00" in 24hr format
  close: string; // "20:00" in 24hr format
  isClosed?: boolean;
}

export interface Branch {
  id: string;
  name: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string; // international digits only, e.g. "442071234567"
  email: string;
  googleMapsQuery: string;
  directionsUrl: string;
  hours: BranchHours[];
  image: string;
  features: string[];
}

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  categoryName: string;
  description: string;
  durationMinutes: number;
  priceStartingAt: number;
  priceFormatted: string;
  popular?: boolean;
  featured?: boolean;
  badge?: string;
  includedNotes?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experienceYears: number;
  specialties: string[];
  bio: string;
  image: string;
  instagramHandle?: string;
  branchId?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: ServiceCategory;
  image: string;
  stylistCredit?: string;
  altText: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  serviceReceived: string;
  rating: number; // 1-5
  reviewText: string;
  date: string;
  avatar: string;
  branchName: string;
  source: 'Google Reviews' | 'Fresha' | 'Vogue Beauty Verified';
}

export interface SpecialOffer {
  id: string;
  title: string;
  subtitle: string;
  discountBadge: string;
  description: string;
  code: string;
  validUntil: string;
  includedServices: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface SalonConfig {
  brand: {
    name: string;
    tagline: string;
    description: string;
    foundedYear: number;
    logoWordmark: string;
    currencySymbol: string;
    ratingScore: number;
    ratingCount: number;
    theme: {
      primaryColor: string;
      accentColor: string;
      backgroundColor: string;
    };
  };
  announcement: {
    enabled: boolean;
    text: string;
    badgeText?: string;
    actionText?: string;
    actionHref?: string;
  };
  socialLinks: {
    instagram: string;
    facebook?: string;
    tiktok?: string;
    pinterest?: string;
  };
  branches: Branch[];
  services: ServiceItem[];
  team: TeamMember[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  specialOffers: SpecialOffer[];
  faqs: FaqItem[];
  instagramFeed: {
    id: string;
    image: string;
    caption: string;
    likes: string;
  }[];
}
