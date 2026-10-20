import { salonConfig } from '@/config/salon.config';

export function generateSalonJsonLd() {
  const { brand, branches } = salonConfig;

  return {
    "@context": "https://schema.org",
    "@graph": branches.map((branch) => ({
      "@type": "BeautySalon",
      "@id": `https://etoileatelier.com/#branch-${branch.id}`,
      "name": `${brand.name} - ${branch.name}`,
      "description": brand.description,
      "image": branch.image,
      "telephone": branch.phone,
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": branch.address.street,
        "addressLocality": branch.address.city,
        "addressRegion": branch.address.state,
        "postalCode": branch.address.postalCode,
        "addressCountry": branch.address.country,
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": branch.id === "mayfair-flagship" ? 51.5095 : 51.4875,
        "longitude": branch.id === "mayfair-flagship" ? -0.1444 : -0.1685,
      },
      "url": "https://etoileatelier.com",
      "openingHoursSpecification": branch.hours.map((h) => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": `https://schema.org/${h.day}`,
        "opens": h.open,
        "closes": h.close,
      })),
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": brand.ratingScore.toString(),
        "reviewCount": brand.ratingCount.toString(),
      },
    })),
  };
}
