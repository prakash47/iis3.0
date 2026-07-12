/**
 * SINGLE SOURCE OF TRUTH for published pricing tiers.
 *
 * Both /pricing and the /services/web-design-development money page (plus the
 * Offer JSON-LD on that page) read from here, so every price stays BYTE-IDENTICAL
 * across the site - entity/AEO consistency + buyer trust. Prices are honest,
 * published "starting-at" floors in USD. Edit prices ONLY here.
 */

export type PricingService =
  | "web-design-development"
  | "mobile-app-development"
  | "custom-software-development"
  | "digital-marketing"
  | "performance-marketing"
  | "ui-ux-design-services"
  | "website-maintenance-services";

export interface PricingTier {
  name: string;
  /** Display floor, e.g. "$300". */
  from: string;
  /** Numeric floor for JSON-LD Offer/PriceSpecification, e.g. 1500. Must match `from`. */
  fromValue: number;
  best?: boolean;
  for: string;
  includes: string[];
  /** Typical delivery window (shown on the money page; optional on /pricing). */
  timeline?: string;
  /** Which catalog service this tier belongs to (scopes per-service pages). */
  service: PricingService;
}

export const priceCurrency = "USD";
export const carePlanFrom = "$100/month";

// ── Websites ────────────────────────────────────────────────────────────────
export const websiteTiers: PricingTier[] = [
  {
    name: "Starter",
    from: "$300",
    fromValue: 300,
    for: "A single-page site or landing page, live fast",
    includes: ["1 to 5 page site or landing page", "Mobile-responsive, on-brand design", "SEO & schema baseline", "Perfect-Lighthouse performance", "Contact form or booking CTA"],
    timeline: "1 week",
    service: "web-design-development",
  },
  {
    name: "Launch Sprint",
    from: "$1,500",
    fromValue: 1500,
    for: "Startups needing a fast, credible site",
    includes: ["Up to 8 pages", "Next.js + CMS", "SEO & schema baseline", "Perfect-Lighthouse performance"],
    timeline: "2-3 weeks",
    service: "web-design-development",
  },
  {
    name: "Growth Site",
    from: "$4,000",
    fromValue: 4000,
    best: true,
    for: "SMBs that want a lead engine",
    includes: ["8-30 pages", "Blog / CMS", "AEO/GEO content structure", "Analytics & conversion CTAs"],
    timeline: "3-5 weeks",
    service: "web-design-development",
  },
  {
    name: "Commerce Sprint",
    from: "$7,000",
    fromValue: 7000,
    for: "DTC / e-commerce brands",
    includes: ["Headless Shopify or Next.js commerce", "Payments", "Performance-tuned PDP & checkout"],
    timeline: "4-6 weeks",
    service: "web-design-development",
  },
];

// ── Products & AI ───────────────────────────────────────────────────────────
export const productTiers: PricingTier[] = [
  {
    name: "MVP Sprint",
    from: "$12,000",
    fromValue: 12000,
    for: "Pre-seed / seed founders",
    includes: ["Core-feature web app / SaaS", "Auth + database", "Deployed & measured"],
    timeline: "6-10 weeks",
    service: "web-design-development",
  },
  {
    name: "Starter App",
    from: "$500",
    fromValue: 500,
    for: "A simple, static or single-purpose iOS + Android app",
    includes: ["Cross-platform (React Native or Flutter)", "Up to a few screens, static or light content", "App Store & Play submission", "Info / content, no complex backend"],
    timeline: "2-4 weeks",
    service: "mobile-app-development",
  },
  {
    name: "Mobile App Build",
    from: "$15,000",
    fromValue: 15000,
    for: "SMBs and teams needing a full iOS + Android app",
    includes: ["Cross-platform (React Native / Flutter)", "App Store & Play submission", "Backend & APIs", "Real-device QA"],
    timeline: "8-14 weeks",
    service: "mobile-app-development",
  },
];

export const allTiers: PricingTier[] = [...websiteTiers, ...productTiers];

/** Tiers relevant to the Web Design & Development money page (web + web-app). */
export const webDesignDevTiers: PricingTier[] = allTiers.filter(
  (t) => t.service === "web-design-development",
);

/** Tiers relevant to the Mobile App Development money page (Starter App -> full build). */
export const mobileAppDevTiers: PricingTier[] = allTiers.filter(
  (t) => t.service === "mobile-app-development",
);

/**
 * Custom software is bespoke and priced per project, NOT via fixed tiers - so it
 * is priced through a fixed-price Discovery Sprint that ends in a written scope
 * and a fixed build quote (credited toward the build). This is the one honest,
 * publishable price anchor for that page; the build price is set in discovery.
 * Standalone (not in allTiers) - it drives only the custom-software page + its
 * Offer schema, and is intentionally not listed on the tiered /pricing groups.
 */
export const customSoftwareTiers: PricingTier[] = [
  {
    name: "Discovery Sprint",
    from: "$1,000",
    fromValue: 1000,
    for: "A paid discovery that ends in a written scope and a fixed build quote",
    includes: ["Architecture & data model", "Written scope + user stories", "Integration & risk audit", "A fixed price for the build", "Credited toward your build"],
    timeline: "1-2 weeks",
    service: "custom-software-development",
  },
];

/**
 * Organic digital marketing is a retainer service, scoped per client - not fixed
 * tiers - so like custom software it is priced through a fixed-price entry AUDIT
 * (the honest, publishable anchor), then a monthly plan scoped to the client's
 * goals. Standalone (not in allTiers) - drives only the digital-marketing page +
 * its Offer schema. The monthly plan number is set in the audit, not on the page.
 */
export const digitalMarketingTiers: PricingTier[] = [
  {
    name: "Marketing Audit",
    from: "$200",
    fromValue: 200,
    for: "A fixed-price audit of your SEO, content and AI-search readiness",
    includes: ["Technical, on-page & content SEO audit", "AEO / AI-search readiness check", "Competitive & keyword-gap snapshot", "Prioritized fixes + a recommended plan", "Credited toward your first month"],
    timeline: "About 1 week",
    service: "digital-marketing",
  },
];

/**
 * Paid media is a flat monthly MANAGEMENT fee (never a % of ad spend), scoped per
 * client - and the client always pays the ad platforms directly (no markup). So
 * like the other services it enters through a fixed-price Paid Media Audit (the
 * honest anchor), then a flat monthly fee set in the audit. Standalone. Audit
 * price is Indian-market-competitive (a professional manual PPC audit in India
 * starts around Rs 8,000 ~ $100).
 */
export const performanceMarketingTiers: PricingTier[] = [
  {
    name: "Paid Media Audit",
    from: "$100",
    fromValue: 100,
    for: "A fixed-price audit of your ad accounts, tracking and wasted spend",
    includes: ["Account structure & wasted-spend review", "Conversion tracking & attribution check", "Audience, keyword & creative assessment", "A prioritized action plan you keep", "Credited toward your first month"],
    timeline: "About 1 week",
    service: "performance-marketing",
  },
];

/**
 * UI/UX design & branding is bespoke - a quick UX audit and a full product design
 * system are not "tiers" of one thing - so like custom software and marketing it is
 * priced through low, fixed-price ENTRY DOORS (the honest, publishable anchors),
 * then the full engagement is scoped into a fixed quote afterwards. These doors are
 * "prove-it-cheaply" starting points a portfolio-less practice offers, NOT
 * full-project prices. Standalone (not in allTiers) - they drive only the
 * ui-ux-design-services page + its Offer schema, and are intentionally not listed
 * on the tiered /pricing groups.
 */
export const uiUxDesignTiers: PricingTier[] = [
  {
    name: "UX/UI Audit",
    from: "$100",
    fromValue: 100,
    for: "See our thinking on your own product, for a small fixed fee",
    includes: [
      "Expert review of one site, app or key flow",
      "Prioritized findings with annotated screens",
      "Quick wins plus a recommended plan",
      "Credited toward your project",
    ],
    timeline: "About 1 week",
    service: "ui-ux-design-services",
  },
  {
    name: "Design Sprint",
    from: "$200",
    fromValue: 200,
    for: "See our design on one key screen or flow before you commit",
    includes: [
      "A focused, time-boxed design sprint",
      "One key screen or short flow in Figma, high-fidelity",
      "The core style direction - color, type, spacing",
      "Editable Figma file, yours to keep",
    ],
    timeline: "About 1 week",
    service: "ui-ux-design-services",
  },
  {
    name: "Brand Sprint",
    from: "$500",
    fromValue: 500,
    for: "A visual identity foundation to build a brand on",
    includes: [
      "Primary logo lockup direction",
      "A color and type system",
      "A one-page mini brand guide",
      "Editable source files, yours to keep",
    ],
    timeline: "1-2 weeks",
    service: "ui-ux-design-services",
  },
];

/**
 * Website maintenance is a PRODUCTIZED recurring retainer (unlike the bespoke
 * design/software pages), so the category norm - and the honest, transparent move
 * - is a PUBLISHED MONTHLY TIER TABLE. Three ascending monthly care plans + a
 * one-time health audit on-ramp for sites we did not build. `from` is the monthly
 * floor (the page appends "/mo"); prices are byte-identical to the money page and
 * the Offer schema. carePlanFrom above is the entry floor ($100/month = Essential).
 */
export const websiteMaintenanceTiers: PricingTier[] = [
  {
    name: "Essential",
    from: "$100",
    fromValue: 100,
    for: "Keep a live site updated, backed up and secure",
    includes: [
      "Monthly core, plugin & dependency updates, tested in staging",
      "Scheduled offsite backups + restore on request",
      "Security monitoring, malware scans & SSL checks",
      "Uptime monitoring with alerts",
      "Up to 30 minutes of content edits a month",
      "A plain monthly health report",
    ],
    timeline: "Month-to-month",
    service: "website-maintenance-services",
  },
  {
    name: "Growth",
    from: "$200",
    fromValue: 200,
    best: true,
    for: "Active care for a site the business runs on",
    includes: [
      "Everything in Essential, plus:",
      "More frequent updates and checks",
      "Performance upkeep - caching, images, Core Web Vitals",
      "Broken-link, form and checkout checks",
      "Up to 1 hour of content edits a month",
      "Prioritized support and a detailed report",
    ],
    timeline: "Month-to-month",
    service: "website-maintenance-services",
  },
  {
    name: "Pro",
    from: "$300",
    fromValue: 300,
    for: "Hands-on care for a site you can't afford to have slip",
    includes: [
      "Everything in Growth, plus:",
      "Highest update cadence and priority security fixes",
      "Ongoing performance optimization",
      "Up to 2 hours of content and small-feature edits a month",
      "Priority support queue",
      "Monthly report plus a quarterly review",
    ],
    timeline: "Month-to-month",
    service: "website-maintenance-services",
  },
];

/**
 * One-time entry door for sites we did NOT build (or that arrive in poor shape):
 * a fixed-price health audit + quick-win fixes that can then roll onto a care
 * plan. Standalone one-time offering alongside the recurring tiers; drives this
 * page + its Offer schema only.
 */
export const websiteAuditTier: PricingTier = {
  name: "Website Health Audit & Tune-up",
  from: "$100",
  fromValue: 100,
  for: "A one-time health check and fix for any live site, on any stack",
  includes: [
    "Full audit - security, performance, versions, backups, broken links",
    "A prioritized findings report you keep",
    "A set of quick-win fixes applied",
    "Works on sites we didn't build, on any stack",
    "Roll onto a care plan if you want ongoing care",
  ],
  timeline: "One-time, about 1 week",
  service: "website-maintenance-services",
};
