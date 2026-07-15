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
// Tolerate a bare host in the env var (e.g. "staging.intentioninfoservice.com"
// with no scheme, as copied from Vercel's Domains field): trim whitespace, strip
// trailing slashes, and prepend https:// when a scheme is missing - so
// `new URL(siteConfig.url)` (metadataBase) never crashes the build on a value
// that is merely missing its protocol.
const RAW_SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_URL).trim().replace(/\/+$/, "");
const SITE_URL = /^https?:\/\//i.test(RAW_SITE_URL) ? RAW_SITE_URL : `https://${RAW_SITE_URL}`;

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
    // ── Contact form backend ──────────────────────────────────────────────
    // The /contact form POSTs to our own /api/contact route, which sends the enquiry over SMTP
    // (Google Workspace Gmail). Credentials are SERVER-ONLY env vars, never in this committed
    // config: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (a Google App Password), CONTACT_TO,
    // CONTACT_FROM. Until they are set the API returns 503 and the form shows its honest
    // email/WhatsApp fallback. See .env.local.example.
    //
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
    linkedin: "https://www.linkedin.com/company/iinfoservice/",
    x: "https://x.com/IInfoservice",
    instagram: "https://www.instagram.com/iinfoservice/",
    facebook: "https://www.facebook.com/iinfoservice",
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
