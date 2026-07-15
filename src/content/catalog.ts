/**
 * Product catalog: Services × Industries × Technologies.
 *
 * This typed data is the backbone for navigation, the sitemap, and every
 * programmatic landing page. Keep entries HONEST and only mark a combination
 * `substantiated: true` once there is real proof (a case study / delivered
 * project) - thin, unsubstantiated permutations are the #1 SEO penalty risk.
 */

export interface CatalogEntry {
  slug: string;
  name: string;
  /** Short, benefit-led one-liner (used in nav + cards + meta descriptions). */
  tagline: string;
}

// ── SERVICES (8 offerings) ─────────────────────────────────────────────
export const services: readonly CatalogEntry[] = [
  {
    slug: "web-design-development",
    name: "Web Design & Development",
    tagline:
      "Custom, high-performance websites and web apps on the right stack for your project.",
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    tagline:
      "Native, cross-platform and PWA apps - React Native, Flutter, SwiftUI, Kotlin.",
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    tagline:
      "SaaS platforms, internal tools, APIs and automations, built on the right stack.",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    tagline:
      "SEO, AI-search (AEO), content, organic social and email that grow organic traffic.",
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    tagline:
      "Paid search and paid social that answer to revenue - transparent, and you own the accounts.",
  },
  {
    slug: "ui-ux-design-services",
    name: "UI/UX Design & Branding",
    tagline:
      "UI/UX design, design systems and brand identity - crafted in Figma, yours to own.",
  },
  {
    slug: "website-maintenance-services",
    name: "Website Maintenance",
    tagline:
      "Updates, security, backups and performance care plans that keep your site fast, on any stack.",
  },
  {
    slug: "ai-development",
    name: "AI Development",
    tagline:
      "AI chatbots, workflow automation and AI features - grounded in your own data.",
  },
] as const;

// ── INDUSTRIES (6 verticals) ────────────────────────────────────────────────
// `lead`  = front-page vertical (drives leadIndustries -> the money-page pill strip).
// `deep`  = has a bespoke, in-depth page under src/app/industries/<slug>/.
//
// THESE TWO ARE ORTHOGONAL. Do NOT gate routing or rendering on `lead` - that is the
// same trap `hire` is for technologies. They coincide on edtech today by coincidence:
// the day healthcare gets a bespoke page it becomes deep:true while staying lead:false.
//
// COUPLING (same one-directional contract as technologies, read before editing): the
// [slug] route sets dynamicParams = false and builds params from `templateIndustries`.
// A folder that exists but is NOT marked deep -> [slug] also emits it -> duplicate route
// -> LOUD build failure (good). A slug marked deep with NO folder -> silently 404s, and
// the build will NOT catch it. Check both directions.
//
// SLUG NOTE (2026-07-10): edtech-lms -> edtech. The old slug fused a SECTOR entity
// (EdTech) with a PRODUCT entity (LMS) inside a namespace that already reads /industries/.
// The five siblings are clean sector nouns, and `edtech` parallels `fintech` exactly. The
// LMS money keyword lives in the title, H1 and body instead - the slug is not the keyword
// lane, exactly as the thirteen one-word technology spokes prove.
export const industries: readonly (CatalogEntry & { lead: boolean; deep: boolean })[] = [
  {
    slug: "edtech",
    name: "EdTech & LMS",
    // Capability-only descriptor - no "compliant"/"secure" outcome claim (IndustriesGrid
    // renders this verbatim), no "LMS builds" plural implying a shipped portfolio, and no
    // "for education startups" ceiling. Named standards signal domain literacy.
    tagline: "Custom LMS, learning platforms and student portals, built on open standards like LTI, SCORM and xAPI.",
    lead: true,
    deep: true,
  },
  {
    slug: "healthcare",
    name: "Healthcare & Patient Portals",
    // Names the OPEN, published standards (FHIR, SMART on FHIR) the honest way, exactly as the
    // edtech tagline names LTI/SCORM/xAPI - method-not-outcome, domain literacy without implying a
    // shipped EHR integration. NOT "EHR integrations" plural (that would imply a portfolio), NOT
    // "compliant"/"secure" (outcome claims), NOT HITRUST/SOC 2 (credentials we don't hold). The
    // "on your side" clause encodes the PHI-free posture as method. IndustriesGrid renders this
    // verbatim, so it must carry zero fabrication.
    tagline: "Patient and provider portals built on FHIR and SMART on FHIR, architected so patient data stays on your side.",
    lead: false,
    deep: true,
  },
  {
    slug: "fintech",
    // Name parallels the sibling pattern (sector + honest product noun): "EdTech & LMS",
    // "Healthcare & Patient Portals", "FinTech & Payments". LOCKSTEP: this string must equal the
    // page breadcrumb literal and the Hero Pill exactly, and drives the homepage grid card title.
    name: "FinTech & Payments",
    // Names the integration SURFACE (payment processors, open-banking rails) as method literacy,
    // the honest way healthcare names FHIR/SMART on FHIR and edtech names LTI/SCORM. NOT "apps"
    // (banned - zero mobile apps shipped, and it renders verbatim on the homepage), NOT
    // "compliant"/"secure" (outcome claims), NOT any implication we hold funds or a licence.
    tagline: "Embedded-payment front ends, financial dashboards and back-office tooling, built on payment processors and open-banking rails.",
    lead: false,
    deep: true,
  },
  {
    slug: "real-estate",
    // Name parallels the sibling pattern (sector + honest product noun): "EdTech & LMS",
    // "Healthcare & Patient Portals", "FinTech & Payments", "Real Estate & Listing Portals".
    // LOCKSTEP: this string auto-propagates to the homepage grid, the /industries hub, the nav
    // dropdown and the footer; the page breadcrumb literal and the Hero Pill must be typed to match.
    name: "Real Estate & Listing Portals",
    // Names the open listings-data standards (RESO Web API, IDX) as method literacy - the FHIR /
    // payment-rails parallel - without implying a shipped MLS integration. The fair-housing
    // signature is deliberately NOT spent in this grid blurb (siblings spend only the interop
    // layer). NOT "apps" (banned), NOT "compliant"/"secure" (outcome claims). IndustriesGrid
    // renders this verbatim on the homepage.
    tagline: "Listing portals, property search and agent CRM, built on the RESO Web API and IDX.",
    lead: false,
    deep: true,
  },
  {
    // SLUG changed "travel-hospitality" -> "travel" (the edtech-lms -> edtech precedent): a clean
    // single-token sector slug, while the display NAME keeps "& Hospitality" so hospitality/hotels
    // aren't lost. The money terms ride the title/H1/body, not the slug. This slug string is also
    // the KEY for the seo.ts override and BOTH IndustriesGrid Record maps - all four moved together.
    slug: "travel",
    name: "Travel & Hospitality",
    // Names the OPEN standards (NDC, OpenTravel) as method literacy - the FHIR / RESO / payment-rails
    // parallel - and deliberately OMITS the licensed/commercial systems (GDS, PMS), exactly as the
    // real-estate tagline omits "MLS": naming a contract-gated system in verbatim homepage copy would
    // imply a shipped integration. NOT "integrations" plural (the EHR-plural portfolio trap), NOT
    // "apps", NOT "compliant". IndustriesGrid renders this verbatim on the homepage.
    tagline: "Booking engines, reservation systems and hotel platforms, built to the open standards travel runs on - NDC and OpenTravel.",
    lead: false,
    deep: true,
  },
  {
    slug: "entertainment-media",
    // LOCKSTEP: this name auto-propagates to the homepage grid, the /industries hub, the nav dropdown
    // and the footer; the page breadcrumb literal and the Hero Pill are hand-typed to match it exactly.
    // The slug carries the minority word order (entertainment-first) to mirror this display name; the
    // majority "Media & Entertainment" order rides the page <title> and the free webPageSchema.name.
    name: "Entertainment & Media",
    // Names the four locked sub-verticals (streaming, publishing, community/UGC, ticketing) + the
    // machinery-not-liability posture, method-not-outcome. NOT "app" (zero mobile apps shipped, and
    // this renders verbatim on the homepage grid), NOT "compliant"/"secure" (outcome claims), NOT any
    // implication we are the licensee, rights-holder, royalty payer or host of record.
    tagline: "Streaming, publishing, community and ticketing platforms, with the rights, moderation and paywall machinery built into the software.",
    lead: false,
    deep: true,
  },
] as const;

// ── TECHNOLOGIES (drive /technologies/*) ────────────────────────────────────
export interface TechEntry extends CatalogEntry {
  category: "frontend" | "backend" | "cms" | "ecommerce" | "mobile";
  /**
   * Featured in the "Hire developers" mega-menu + footer column. NOTE: those links
   * currently point at /technologies/<slug>; the transactional /hire-<slug>-developers
   * pages do not exist yet. This flag is about NAV PLACEMENT, nothing else.
   */
  hire: boolean;
  /**
   * SINGLE SOURCE OF TRUTH: this technology has a bespoke, deeply-written page at
   * src/app/technologies/<slug>/page.tsx. Everything else renders from the shared
   * [slug] template.
   *
   * COUPLING, read before editing. The [slug] route sets `dynamicParams = false` and
   * builds its params from `templateTechnologies` (deep === false):
   *  - a folder that exists but is NOT marked deep  -> the [slug] route also emits that
   *    slug -> two routes resolve to one path -> LOUD build failure. Good.
   *  - a slug marked deep with NO folder            -> excluded from params, no folder,
   *    so it silently 404s. The build will NOT catch this. Check both directions.
   *
   * Do NOT key page behaviour off `hire`. It happens to align with `deep` today, but
   * that is build-order coincidence, not a rule - `hire` means nav placement.
   */
  deep: boolean;
}

export const technologies: readonly TechEntry[] = [
  { slug: "nextjs", name: "Next.js", tagline: "React framework for fast, SEO-ready apps.", category: "frontend", hire: true, deep: true },
  { slug: "react", name: "React", tagline: "Interactive, component-driven UIs.", category: "frontend", hire: true, deep: true },
  { slug: "angular", name: "Angular", tagline: "Enterprise-grade, TypeScript-first web apps.", category: "frontend", hire: true, deep: true },
  { slug: "astro", name: "Astro", tagline: "Ultra-fast content and marketing sites.", category: "frontend", hire: false, deep: true },
  { slug: "nodejs", name: "Node.js", tagline: "Scalable JavaScript backends and APIs.", category: "backend", hire: true, deep: true },
  { slug: "python", name: "Python", tagline: "Backends, APIs, automation and AI-ready apps.", category: "backend", hire: true, deep: true },
  { slug: "laravel", name: "Laravel", tagline: "Robust PHP applications, done right.", category: "backend", hire: true, deep: true },
  { slug: "php", name: "PHP", tagline: "Raw and legacy PHP - custom builds, APIs and modernization.", category: "backend", hire: false, deep: true },
  { slug: "django", name: "Django", tagline: "Python web apps with batteries included.", category: "backend", hire: true, deep: true },
  { slug: "java-spring-boot", name: "Java & Spring Boot", tagline: "Enterprise-grade backend systems.", category: "backend", hire: true, deep: true },
  { slug: "wordpress", name: "WordPress", tagline: "Flexible CMS sites and custom themes.", category: "cms", hire: true, deep: true },
  { slug: "drupal", name: "Drupal", tagline: "Structured content, native to the core.", category: "cms", hire: false, deep: true },
  { slug: "strapi", name: "Strapi", tagline: "Open-source headless CMS.", category: "cms", hire: false, deep: true },
  { slug: "sanity", name: "Sanity", tagline: "Real-time headless content platform.", category: "cms", hire: false, deep: true },
  { slug: "contentful", name: "Contentful", tagline: "Composable headless CMS at scale.", category: "cms", hire: false, deep: true },
  { slug: "shopify", name: "Shopify", tagline: "Headless & custom commerce stores.", category: "ecommerce", hire: true, deep: true },
  { slug: "woocommerce", name: "WooCommerce", tagline: "Flexible WordPress commerce stores.", category: "ecommerce", hire: true, deep: true },
  { slug: "react-native", name: "React Native", tagline: "One codebase, iOS + Android.", category: "mobile", hire: true, deep: true },
  { slug: "flutter", name: "Flutter", tagline: "Beautiful cross-platform apps.", category: "mobile", hire: true, deep: true },
  { slug: "swiftui", name: "SwiftUI", tagline: "Modern native iOS apps.", category: "mobile", hire: false, deep: true },
  { slug: "kotlin", name: "Kotlin", tagline: "Modern native Android apps.", category: "mobile", hire: false, deep: true },
] as const;

// ── Convenience lookups ─────────────────────────────────────────────────────
export const leadIndustries = industries.filter((i) => i.lead);
export const hireTechnologies = technologies.filter((t) => t.hire);

/** The industries with a bespoke, in-depth page. */
export const deepIndustries = industries.filter((i) => i.deep);
/** The rest, rendering from the shared [slug] template. Noindexed until each is written. */
export const templateIndustries = industries.filter((i) => !i.deep);

/** All 21 technologies now have a bespoke, in-depth page. Drives the hub's guide grid + ItemList. */
export const deepTechnologies = technologies.filter((t) => t.deep);
/** Now empty - every technology is bespoke. Kept so the shared [slug] template builds cleanly with 0
 *  params (like services/industries [slug] after all went bespoke); repopulates if a new tech is added. */
export const templateTechnologies = technologies.filter((t) => !t.deep);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
export function getTechnology(slug: string) {
  return technologies.find((t) => t.slug === slug);
}
