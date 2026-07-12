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

// ── Canonical host (environment-aware) ──────────────────────────────────────
// PRODUCTION_URL is the one true canonical. On any NON-production deployment (a
// *.vercel.app preview or staging.intentioninfoservice.com), set the env var
// NEXT_PUBLIC_SITE_URL to THAT deployment's own URL, so canonicals, sitemap, OG
// images and JSON-LD @id/url all stay internally consistent and never point at
// the separate live site. Unset (local dev) falls back to the production URL.
const PRODUCTION_URL = "https://www.intentioninfoservice.com";
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_URL).replace(/\/$/, "");

// Indexing is an EXPLICIT opt-in that ONLY the real production deployment gets:
// set NEXT_PUBLIC_SITE_INDEXABLE="true" there. Every other environment (local,
// *.vercel.app, staging.intentioninfoservice.com) stays noindex by default.
// Forgetting the flag fails SAFE (production noindexed - a visible, fixable
// mistake), never the dangerous way (staging indexed alongside the live site).
// Consumed by robots.ts + the root layout's robots metadata.
export const isIndexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true";

export const siteConfig = {
  // ── Identity ──────────────────────────────────────────────────────────────
  name: "Intention InfoService",
  legalName: "Intention InfoService Private Limited",
  shortName: "IIS",
  foundingYear: 2016,
  url: SITE_URL,

  // One-liner USP (hero + meta). Honest, no fabricated stats.
  tagline: "Full-service web, app and software development, at transparent fixed prices.",

  // Canonical entity sentence - MUST stay byte-identical between the homepage
  // hero capsule and the Organization schema `description` (AEO/GEO entity anchor).
  entityDescription:
    "Intention InfoService is a digital product and growth company that designs, " +
    "builds, and grows fast websites, web apps, mobile apps, custom software, and AI " +
    "solutions for businesses from startups to enterprises worldwide, at transparent, " +
    "published fixed prices.",

  // Default meta-description fallback (pages without their own). Founding date +
  // address live in structured schema fields, not this prose.
  description:
    "Intention InfoService is a full-service web, app and software development company " +
    "building fast websites, web apps, mobile apps and custom software for businesses of " +
    "every size, at transparent, published fixed prices. Serving India, the US, UK, UAE and Europe.",

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
    // ── Contact form backend (Web3Forms) ──────────────────────────────────
    // The /contact form POSTs to Web3Forms (https://api.web3forms.com/submit) when this
    // access key is set. It is a PUBLIC, client-side key by design (tied to the destination
    // inbox; Web3Forms does the spam filtering), so it is safe to commit. Get a free key in
    // ~2 min at https://web3forms.com (enter contact@intentioninfoservice.com, no account).
    // UNTIL it is set, the form gracefully falls back to a prefilled mailto - no dead form,
    // and no fake "sent" confirmation. Empty string = fallback, mirroring the `social` convention.
    web3formsKey: "",
    // A real Calendly / Cal.com booking URL, when one exists. "" = the "Book a call" channel
    // is omitted entirely (no fabricated booking link ever renders).
    bookingUrl: "",
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
