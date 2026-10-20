import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { salonConfig } from "@/config/salon.config";
import { generateSalonJsonLd } from "@/lib/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${salonConfig.brand.name} | ${salonConfig.brand.tagline}`,
  description: salonConfig.brand.description,
  keywords: [
    "luxury salon London",
    "balayage specialists",
    "hair atelier",
    "botanical facial",
    "bridal hair and makeup",
    "precision haircut",
    "Russian manicure",
  ],
  authors: [{ name: salonConfig.brand.name }],
  openGraph: {
    title: `${salonConfig.brand.name} | Haute Coiffure & Botanical Beauty`,
    description: salonConfig.brand.description,
    url: "https://etoileatelier.com",
    siteName: salonConfig.brand.name,
    images: [
      {
        url: salonConfig.branches[0].image,
        width: 1200,
        height: 630,
        alt: `${salonConfig.brand.name} Flagship Salon`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${salonConfig.brand.name} | Luxury Hair & Skincare`,
    description: salonConfig.brand.description,
    images: [salonConfig.branches[0].image],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateSalonJsonLd();

  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans-clean">
        {children}
      </body>
    </html>
  );
}
