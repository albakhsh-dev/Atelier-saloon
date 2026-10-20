# Étoile Atelier — Luxury Salon & Spa Website Template

> **Turnkey, High-Converting Digital Storefront Template** engineered for hair salons, day spas, aesthetics clinics, and grooming lounges. Demo to clients, rebrand in 10 minutes, and deploy with zero backend overhead.

---

## 🌟 Key Features

- **Single Source of Truth (`salon.config.ts`):** 100% of brand identity, branch coordinates, operating hours, service menus, prices, master stylists, testimonials, and FAQs are managed in **one central file**.
- **Multi-Branch Engine with Live Operating Hours:** Real-time client-side calculation showing `Open Now` or `Closed` badges dynamically calculated from your branch schedule.
- **Frictionless WhatsApp Booking Engine:** Generates pre-formatted WhatsApp click-to-chat appointment inquiries directly to the branch concierge (plus email fallback).
- **Free Map Embeds:** Embeds interactive Google Maps locations without requiring paid Google Cloud API keys.
- **Mobile-First Experience:** Floating mobile action dock with instant Click-to-Call and WhatsApp direct buttons.
- **Built for Speed & SEO:** Next.js 15 App Router, Tailwind CSS, Lucide icons, LocalBusiness JSON-LD structured schema, and lazy-loaded WebP photography.

---

## ⚡ Quick Start

```bash
# 1. Navigate to the project directory
cd etoile-salon

# 2. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## 🎨 How to Rebrand for a New Client in 10 Minutes

You never need to edit JSX code or touch layout components to launch a new salon client. Simply edit `config/salon.config.ts`:

### 1. Update Salon Name & Brand Identity
Open `config/salon.config.ts` and modify `brand`:
```typescript
brand: {
  name: "The Velvet Lounge",
  tagline: "Artisan Hair & Ritual Wellness",
  description: "Bespoke hair design, organic balayage, and restorative treatments.",
  logoWordmark: "VELVET LOUNGE",
  currencySymbol: "$", // or "£", "€", "₹", "AED"
  ratingScore: 4.95,
  ratingCount: 320,
}
```

### 2. Configure Branches & Live Operating Hours
Under `branches`, specify one or more locations:
```typescript
branches: [
  {
    id: "downtown-salon",
    name: "Downtown Flagship",
    phone: "+1 555 123 4567",
    phoneDisplay: "(555) 123-4567",
    whatsappNumber: "15551234567", // International format without '+' or spaces
    email: "appointments@velvetlounge.com",
    googleMapsQuery: "123+Main+Street+Los+Angeles+CA",
    directionsUrl: "https://maps.google.com/?q=123+Main+Street+Los+Angeles+CA",
    hours: [
      { day: "Monday", open: "09:00", close: "19:00" },
      { day: "Tuesday", open: "09:00", close: "20:00" },
      // ...
      { day: "Sunday", open: "10:00", close: "17:00", isClosed: true },
    ],
  }
]
```

### 3. Update Services & Pricing Menu
Modify items in the `services` array:
- Assign category: `'hair'`, `'skin'`, `'makeup'`, `'nails'`, `'bridal'`, or `'grooming'`
- Set price string and duration in minutes:
```typescript
{
  id: "signature-balayage",
  name: "Signature Hand-Painted Balayage",
  category: "hair",
  categoryName: "Hair Design & Color",
  durationMinutes: 150,
  priceStartingAt: 180,
  priceFormatted: "$180+",
  popular: true,
  badge: "Best Seller"
}
```

### 4. Update Stylists & Team Members
Add your client's team under `team`:
```typescript
{
  id: "stylist-1",
  name: "Marcus Vance",
  role: "Master Colorist",
  experienceYears: 10,
  specialties: ["Balayage", "Blondes"],
  image: "https://images.unsplash.com/photo-...",
  instagramHandle: "marcus_hair"
}
```

### 5. Custom Photos
To use local photography instead of Unsplash, place your images in `/public/images/` and reference them as `/images/your-photo.jpg`.

---

## 🚀 Deployment (100% Free Hosting)

This template is static-export friendly and can be hosted for free on **Vercel**, **Netlify**, or **Cloudflare Pages**.

### Deploy to Vercel
1. Push the repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository, keep default settings, and click **Deploy**.

---

## 📂 Project Architecture

```text
etoile-salon/
├── app/
│   ├── globals.css         # Design tokens, luxury serif styling & utilities
│   ├── layout.tsx          # Google Fonts, SEO metadata & JSON-LD Schema
│   └── page.tsx            # Main landing page assembling all sections
├── components/
│   ├── layout/
│   │   ├── AnnouncementBar.tsx  # Promo banner
│   │   ├── Header.tsx           # Sticky nav with branch switcher
│   │   ├── Footer.tsx           # Full brand footer with branch snapshot
│   │   └── MobileActionBar.tsx  # Sticky bottom Call + WhatsApp dock
│   ├── sections/
│   │   ├── HeroSection.tsx      # Editorial hero with trust badges
│   │   ├── Highlights.tsx       # 4 USP value pillars
│   │   ├── ServicesMenu.tsx     # Filterable tabbed price menu
│   │   ├── LookbookGallery.tsx  # Lookbook masonry + accessible lightbox
│   │   ├── TeamSection.tsx      # Stylist bio cards with booking trigger
│   │   ├── LocationsSection.tsx # Multi-branch engine with live hours & maps
│   │   ├── Testimonials.tsx     # Verified customer quotes & star ratings
│   │   ├── SpecialOffers.tsx    # Promo privilege packages
│   │   ├── BookingSection.tsx   # Interactive WhatsApp reservation form
│   │   ├── FaqSection.tsx       # Accessible accordion FAQ
│   │   ├── InstagramGrid.tsx    # Social grid preview
│   │   └── CtaBanner.tsx        # High-impact closing CTA
│   └── ui/
│       ├── Button.tsx           # Luxury button states
│       ├── Badge.tsx            # Pill tags
│       ├── Lightbox.tsx         # Full-screen image zoom modal
│       └── BranchStatusBadge.tsx# Real-time Open/Closed indicator
├── config/
│   └── salon.config.ts          # Central Single Source of Truth
├── lib/
│   ├── hours.ts                 # Time calculation for open/closed states
│   ├── whatsapp.ts              # WhatsApp URL message generator
│   └── seo.ts                   # LocalBusiness Schema generator
└── types/
    └── salon.ts                 # TypeScript interfaces
```
