/**
 * SINGLE SOURCE OF TRUTH for site-wide constants.
 *
 * Everything (layout metadata, JSON-LD, header, footer, sitemap) reads from here.
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │  ⚠️  FILL THESE BEFORE LAUNCH - do NOT ship placeholder/■ values.         │
 * │  Anything marked `TODO:` needs the real value from the founder.           │
 * │  Keep NAP (name / address / phone) BYTE-FOR-BYTE identical to GBP,        │
 * │  Clutch, GoodFirms, LinkedIn - entity consistency is an AEO/GEO signal.   │
 * └─────────────────────────────────────────────────────────────────────────┘
 */

export const siteConfig = {
  // ── Identity ──────────────────────────────────────────────────────────────
  name: "Intention InfoService",
  legalName: "Intention InfoService Private Limited",
  shortName: "IIS",
  foundingYear: 2016,
  url: "https://www.intentioninfoservice.com",

  // One-liner USP (hero + meta). Honest, no fabricated stats.
  tagline: "Web and app development for startups and SMBs, at transparent fixed prices.",
  description:
    "Intention InfoService is a founder-led web and app development studio, " +
    "incorporated in 2016. We build fast Next.js and React websites, web apps and " +
    "mobile apps for startups and SMBs at transparent fixed prices. Serving India, " +
    "the US, UK, UAE and Europe.",

  // ── Contact / NAP ─────────────────────────────────────────────────────────
  // Keep byte-for-byte identical to GBP, Clutch, GoodFirms, LinkedIn.
  contact: {
    email: "contact@intentioninfoservice.com",
    phone: "+91-7021539267",
    phoneDisplay: "+91 70215 39267",
    whatsapp: "917021539267",
    address: {
      streetAddress: "Juchandra",
      addressLocality: "Naigaon East",
      addressRegion: "Maharashtra",
      postalCode: "401208",
      addressCountry: "IN",
    },
  },

  // ── Markets served (drives schema areaServed + copy) ──────────────────────
  areaServed: ["IN", "US", "GB", "AE", "EU"] as const,
  primaryMarket: "IN",

  // ── Social / entity profiles (sameAs) ─────────────────────────────────────
  // Every one is a `sameAs` entity node (AEO/GEO). "" = omitted until it exists.
  social: {
    linkedin: "https://in.linkedin.com/company/intentioninfoservice",
    x: "https://x.com/IInfoservice",
    instagram: "https://www.instagram.com/intention_infoservice/",
    facebook: "https://www.facebook.com/intentioninfoservice/",
    youtube: "",
    github: "",
    clutch: "", // https://clutch.co/profile/... (add once claimed)
    goodfirms: "",
    designrush: "",
    crunchbase: "",
    wikidata: "", // https://www.wikidata.org/wiki/Q... (add once created)
  },
};

export type SiteConfig = typeof siteConfig;

/** Absolute URL helper - always use this for canonicals, OG, sitemap. */
export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}

/** Real, non-empty sameAs URLs for JSON-LD + footer. */
export function sameAs(): string[] {
  return Object.values(siteConfig.social).filter((v): v is string => v.length > 0);
}
