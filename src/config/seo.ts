import { siteConfig } from "@/config/site";
import { getService, getIndustry, getTechnology } from "@/content/catalog";
import { serviceDetails } from "@/content/service-details";

/**
 * ┌───────────────────────────────────────────────────────────────────────┐
 * │  CENTRAL SEO - the single place to manage SEO for every fixed page.     │
 * │  `staticPages` below drives BOTH page <head> metadata AND the sitemap,  │
 * │  so a page is defined once. Section pages (services/industries/tech)    │
 * │  derive from the catalog via the *PageSeo() helpers.                    │
 * │                                                                         │
 * │  EXCLUDED (managed elsewhere, per plan): individual /blog/* posts and   │
 * │  future /resources content -> those will come from Sanity, which will   │
 * │  supply their title/description/OG per document.                        │
 * └───────────────────────────────────────────────────────────────────────┘
 */

export type ChangeFreq =
  | "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export interface PageSeo {
  /** Route path from root, e.g. "/about". Also the canonical + sitemap URL. */
  path: string;
  /** Title text. The layout applies the "%s | Brand" template unless titleAbsolute. */
  title: string;
  titleAbsolute?: boolean;
  description: string;
  /** Absolute-or-root OG image path; falls back to the site default. */
  ogImage?: string;
  noindex?: boolean;
  changeFrequency?: ChangeFreq;
  priority?: number;
}

export const seoConfig = {
  siteName: siteConfig.name,
  titleTemplate: `%s - ${siteConfig.name}`,
  defaultTitle: `${siteConfig.name} - ${siteConfig.tagline}`,
  defaultDescription: siteConfig.description,
  defaultOgImage: "/og-default.png",
  twitterHandle: "@IInfoservice",
  locale: "en_US",
} as const;

// ── Static pages (edit SEO for any fixed page here, in one place) ──────────
export const staticPages: PageSeo[] = [
  {
    path: "/",
    title: "Web, App & Software Development - Intention InfoService",
    titleAbsolute: true,
    description:
      "Full-service web, app and software development for startups to enterprises. Custom websites, web apps and mobile apps at transparent fixed prices - US, UK, UAE, EU and India.",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/services",
    title: "Web, App, Software & AI Services",
    description:
      "Full-service web, app and software development, plus UI/UX, marketing, maintenance and AI for startups to enterprises, on any stack, at transparent fixed prices.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    // REBUILT HUB (2026-07-11), now that all six verticals are bespoke + indexed. Two faults in the
    // old indexed SERP promise are fixed here:
    //  1. Title "Industries We Serve" was keyword-poor, and "serve" leans into the fabricated-portfolio
    //     read the whole hub is built to avoid (we have zero clients in any of the six). New title
    //     front-loads a real category keyword ("Software Development for Regulated Industries") that is
    //     NOT any child's exact head term ("<Sector> Software Development"), so no child cannibalization.
    //  2. Description "sector-specific builds ... for startups to enterprises" asserted a portfolio of
    //     delivered sector work (the "builds" plural) AND carried the retired ceiling. Both removed; the
    //     six sector nouns stay (entity consistency), and the tail now states the honest thesis.
    // staticPages descriptions are used VERBATIM - clip() only runs inside servicePageSeo and
    // industryPageSeo, never here - so this must self-limit under ~158 chars (hand-counted ~153).
    // The hub title/desc live HERE in staticPages, NOT in industrySeoOverrides (that map is keyed by
    // CHILD slug and is never read for the /industries hub itself).
    path: "/industries",
    title: "Software Development for Regulated Industries",
    description:
      "Software for EdTech, healthcare, fintech, real estate, travel and media - built around which obligation binds whom, and the liability roles we won't take.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    // HONESTY FIX (2026-07-10): this description used to end "Hire vetted developers for your
    // stack." That advertises STAFF AUGMENTATION, which we do not sell - we sell scoped,
    // fixed-price delivery with code you own. The "Hire developers" NAV LABEL is a deliberate
    // placeholder for future /hire-<tech>-developers pages, and the founder accepted that; a
    // meta description is a different surface entirely - an indexed, machine-read SERP promise
    // that manufactures demand we cannot fulfil. `staticPages` descriptions are used VERBATIM
    // (clip() only runs in servicePageSeo/industryPageSeo), so keep this under ~158 chars.
    //
    // "Each guide says when not to use it" is now true of every technology - all 21 have a bespoke,
    // in-depth page and none is a noindexed stub. "guide" and "every technology" are equivalent now.
    path: "/technologies",
    title: "Technologies & Tech Stacks We Build With",
    description:
      "We build on the right stack for your project - Next.js, React, WordPress, Shopify, Laravel, React Native and more. Each guide says when not to use it.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/work",
    title: "Our Work",
    description:
      "See how we build fast, accessible websites and apps, with the stack, timeline and measurable results behind each project.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    // The complete published-pricing HUB. Title is NOT absolute, so the template appends the
    // brand -> "Website, App & Software Pricing - Intention InfoService" (~55 chars). Front-loads
    // the three highest-value build categories (each the head of a "cost to build a ___" query)
    // before the money word "Pricing". Description is USD-only (the multi-currency claim was a
    // fabrication - pricing.ts is USD-only) and deliberately OMITS AI, which has no fixed price.
    // priority 0.7 -> 0.8 to peer with /work + /contact (high commercial intent). Used verbatim,
    // 142 chars.
    path: "/pricing",
    title: "Website, App & Software Pricing",
    description:
      "Published starting prices for websites, web apps, mobile apps, custom software, design, marketing and care plans - all in USD, no quote walls.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/about",
    // titleAbsolute so the tag renders exactly "About Intention InfoService" (an exact match for the
    // "about Intention InfoService" query) instead of the template doubling the brand. Description is
    // full-spectrum ("startups to enterprises", not the retired "startups and SMBs") + entity-accurate.
    title: "About Intention InfoService",
    titleAbsolute: true,
    description:
      "Intention InfoService is a digital product and growth company, incorporated in 2016, serving startups to enterprises worldwide at transparent fixed prices.",
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    // The CONTACT / navigational / conversion node of the brand cluster - the most internally
    // linked page on the site (every CTA routes here). titleAbsolute so the tag renders exactly
    // "Contact Intention InfoService" (exact match for the "contact Intention InfoService" query),
    // like /about + /careers. Brand-navigational only, NOT category head or geo head. Description
    // leads with the honest pricing wedge (the honest answer to "get a quote" is "see the published
    // price"), never an instant-quote promise. priority 0.6 -> 0.8 (the primary conversion
    // destination, peer with /work, below the money/category pages). ~141 chars, used verbatim.
    path: "/contact",
    title: "Contact Intention InfoService",
    titleAbsolute: true,
    description:
      "Contact Intention InfoService. See published fixed prices first, then reach the senior people who do the work. Reply within one business day.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    // Brand/entity intent only ("careers/jobs/work at Intention InfoService"), a low-priority page
    // (0.4). titleAbsolute so the tag renders exactly "Careers at Intention InfoService" (an exact
    // match for the brand query) instead of the template doubling the brand. Description is
    // full-spectrum (de-"startups and SMBs"), stack-agnostic (no Next.js/React-as-identity), and
    // honest about there being no listed openings. `staticPages` descriptions are used VERBATIM
    // (clip() only runs in the section-page helpers), so keep this under ~158 chars.
    path: "/careers",
    title: "Careers at Intention InfoService",
    titleAbsolute: true,
    description:
      "Careers at Intention InfoService: a senior, stack-agnostic team building for startups to enterprises worldwide. Strong engineers and designers welcome.",
    priority: 0.4,
    changeFrequency: "yearly",
  },
  {
    // Resources section hub. INDEXED (flipped 2026-07-12): the glossary child is
    // populated with 16 real terms, so the hub links to real content. Descriptive,
    // honest meta (no "leading/definitive").
    path: "/resources",
    title: "Resources: Guides, Glossary and Blog",
    description:
      "Guides, definitions and articles on web development, performance and AI search, written by the senior team that does the work.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    // INDEXED (flipped 2026-07-12): 3 real first-person posts are published. Posts
    // and their per-doc SEO come from Sanity.
    path: "/blog",
    title: "Web Development and Digital Growth Blog",
    description:
      "Practical articles on web development, Next.js, Core Web Vitals and SEO for startups to enterprises, from Intention InfoService.",
    priority: 0.7,
    changeFrequency: "weekly",
  },
  {
    // INDEXED (flipped 2026-07-12): a full Web Development pillar (4 guides) plus 3
    // mobile guides are live, reviewed and approved by the founder.
    path: "/guides",
    title: "Web, App and SEO Guides",
    description:
      "In-depth guides on web development, mobile apps and SEO for startups to enterprises.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    // INDEXED (flipped 2026-07-12): 16 real, substantial DefinedTerms are live.
    path: "/glossary",
    title: "Web Development and SEO Glossary",
    description:
      "Plain-English definitions of web development, mobile and digital marketing terms.",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    description:
      "How Intention InfoService collects, uses and protects the information you share through our website and contact forms.",
    priority: 0.2,
    changeFrequency: "yearly",
  },
  {
    path: "/terms",
    title: "Terms of Service",
    description: "The terms that apply when you use the Intention InfoService website.",
    priority: 0.2,
    changeFrequency: "yearly",
  },
];

export function getStaticPageSeo(path: string): PageSeo | undefined {
  return staticPages.find((p) => p.path === path);
}

// ── Section pages (derive SEO from the catalog, still one place) ───────────
function clip(text: string, max = 158): string {
  if (text.length <= max) return text;
  return text.slice(0, text.lastIndexOf(" ", max)).trim() + ".";
}

/**
 * Per-slug SEO overrides for money pages that need bespoke, keyword-tuned meta
 * instead of the generic "<Name> Services" template. Merged over the base below.
 */
const serviceSeoOverrides: Record<string, Partial<PageSeo>> = {
  "web-design-development": {
    title: "Web Design & Development Services",
    description:
      "Full-service, stack-agnostic web design and development for startups, SMBs and enterprises. Custom sites, web apps and ecommerce at transparent, published fixed prices, shipped in weeks.",
  },
  "mobile-app-development": {
    title: "Mobile App Development Services",
    description:
      "Native and cross-platform iOS and Android app development - React Native, Flutter, SwiftUI, Kotlin - at transparent, published fixed prices, shipped in weeks. You own the code.",
  },
  "custom-software-development": {
    title: "Custom Software Development Services",
    description:
      "Bespoke custom software - SaaS platforms, internal tools, portals, APIs and workflow automation - on the right stack, scoped and priced up front. You own the code, IP and data.",
  },
  "digital-marketing": {
    title: "Organic Digital Marketing Services",
    description:
      "SEO-led organic growth - technical SEO, AI-search (AEO/GEO), content, organic social, email and CRO. We build the site and run the SEO. No paid ads, no vanity metrics.",
  },
  "performance-marketing": {
    title: "Performance Marketing & PPC Management",
    description:
      "Flat-fee paid media management - Google Ads, Meta, LinkedIn and more. You own the ad accounts, we never mark up your spend, and it's month-to-month. No results claims.",
  },
  "ui-ux-design-services": {
    title: "UI/UX Design & Branding Services",
    description:
      "UI/UX design, design systems and brand identity for startups to enterprises - designed in Figma, dev-ready and yours to own. Transparent fixed pricing, audit-first.",
  },
  "website-maintenance-services": {
    title: "Website Maintenance Services",
    description:
      "Ongoing website maintenance and support on any stack - updates, security, backups, performance and monitoring - on transparent published care plans, no lock-in.",
  },
  "ai-development": {
    title: "AI Development Services",
    description:
      "Applied AI development - AI chatbots trained on your content, workflow automation and AI features for your site or app. Grounded in your data, and yours to own.",
  },
};

export function servicePageSeo(slug: string): PageSeo | undefined {
  const s = getService(slug);
  if (!s) return undefined;
  const detail = serviceDetails[slug];
  const base: PageSeo = {
    path: `/services/${slug}`,
    title: `${s.name} Services`,
    description: clip(detail?.intro ?? s.tagline),
    priority: 0.9,
    changeFrequency: "monthly",
  };
  return { ...base, ...serviceSeoOverrides[slug] };
}

// ── Industry page overrides ─────────────────────────────────────────────────
// NOTE: until 2026-07-10 `industryPageSeo` was the ONLY one of the three section-page
// helpers that did not spread an overrides map (servicePageSeo and technologyPageSeo both
// do). Adding a map without also adding the spread below would have been silently inert -
// neither the title override nor any `noindex` would ever have reached a page.
//
// ALL SIX industry verticals now have a bespoke, indexed page (entertainment-media was the last, and
// its noindex came off the day its bespoke folder + catalog.deep:true landed). `templateIndustries`
// is now empty, so the /industries/[slug] route statically generates nothing and 404s any unknown
// slug. Each override below carries a bespoke title + description keyword-tuned per vertical.
//
// MECHANISM (unchanged): each override spreads over `base` -> metadataFrom() emits the head +
// robots, and sitemap.ts includes it because none of the six sets `noindex` any more.
const industrySeoOverrides: Record<string, Partial<PageSeo>> = {
  // The money keyword in this vertical is the PRODUCT term ("custom LMS development"), not
  // the sector term - so it rides the title, H1 and body while the slug stays sector-clean.
  // "app" is deliberately absent from every headline surface: we have shipped zero mobile
  // apps, and "eLearning app development" in an indexed SERP promise implies a portfolio.
  // No compliance or accessibility OUTCOME claim - method language only.
  edtech: {
    title: "Custom LMS & eLearning Development",
    description:
      "Custom LMS, eLearning and student-portal development on open standards - LTI 1.3, SCORM and xAPI - privacy and accessibility engineered in, not bolted on.",
    priority: 0.7,
  },
  // The money terms here are the SECTOR term ("healthcare software development") and the honest
  // PRODUCT term ("patient portal development") - both ride the title/H1/body while the slug stays
  // sector-clean. "app" is deliberately absent from every headline surface (zero mobile apps
  // shipped; app intent routes to /services/mobile-app-development). "compliant" never appears -
  // HIPAA is a noun only. The meta is self-disciplined under 158 chars because an override REPLACES
  // the base string un-clipped (clip() only runs on the base).
  healthcare: {
    title: "Healthcare Software Development",
    description:
      "Custom healthcare software and patient portals on the right stack, built to HL7 and FHIR, and architected so PHI stays inside your infrastructure, not ours.",
    priority: 0.7,
  },
  // Sector term "fintech software development" leads the title; the honest product terms
  // ("payments", "financial dashboards", "financial back ends") ride the meta/H1/body. "app" is
  // absent from every headline surface (zero mobile apps shipped; app intent routes to the mobile
  // money page). "compliant"/"bank-grade" never appear; "money moves on a licensed provider, not
  // on us" is the you-are-not-the-bank spine as a method. Meta hand-counted under 158 (an override
  // REPLACES the base string un-clipped - clip() only runs on the base).
  fintech: {
    title: "Fintech Software Development",
    description:
      "Custom fintech software - payments, dashboards and financial back ends - built on regulated rails, so the money moves on a licensed provider, not on us.",
    priority: 0.7,
  },
  // Sector term "real estate software development" leads the title; the honest product constellation
  // (listing portals, property search, agent CRM) rides the meta/H1/body. "app" is absent from every
  // headline surface (zero mobile apps shipped). "built to RESO and IDX" names the OPEN standards
  // (not "built to MLS" - an MLS is a licensed data source you connect to, not a spec you build to).
  // "designed against disparate impact" is the signature as a METHOD, never "compliant"/an outcome.
  // Meta hand-counted under 158 (an override REPLACES the base string un-clipped).
  "real-estate": {
    title: "Real Estate Software Development",
    description:
      "Custom real estate software - listing portals, property search and agent CRM - built to RESO and IDX, and designed against disparate impact.",
    priority: 0.7,
  },
  // KEY moved from "travel-hospitality" to "travel" (the slug change). Sector term "travel software
  // development" leads the title (NOT "Travel & Hospitality Software Development" - the "& X" suffix
  // truncates in SERP; the full name rides the H1 and the webPageSchema name, exactly as healthcare's
  // title drops "& Patient Portals"). "app" is absent (zero mobile apps). "built to NDC and
  // OpenTravel" names the OPEN standards only. "so a booking stays a promise you can keep" is the
  // signature as a method. Meta hand-counted under 158 (an override REPLACES the base un-clipped).
  "travel": {
    title: "Travel Software Development",
    description:
      "Custom travel software - booking engines, reservations and hotel platforms - built to NDC and OpenTravel, so a booking stays a promise you can keep.",
    priority: 0.7,
  },
  // Sector term "entertainment and media software development" leads the title in the majority
  // "Media & Entertainment" order the SERP prefers; the four honest product lanes (streaming,
  // publishing, community, ticketing) ride the meta/H1/body. Title is stored BARE - the root template
  // appends " - Intention InfoService" (do not paste a piped brand into it). "app" is absent from
  // every headline surface (zero mobile apps shipped; app intent routes to the mobile money page).
  // "compliant" never appears; "so you can prove the rights and lawfully host the rest" is the
  // non-authorship signature as a method. Meta hand-counted under 158 (an override REPLACES the base
  // string un-clipped - clip() only runs on the base).
  "entertainment-media": {
    title: "Entertainment & Media Software Development",
    description:
      "Entertainment and media software for streaming, publishing, community and ticketing platforms - so you can prove the rights and lawfully host the rest.",
    priority: 0.7,
  },
};

export function industryPageSeo(slug: string): PageSeo | undefined {
  const i = getIndustry(slug);
  if (!i) return undefined;
  const base: PageSeo = {
    path: `/industries/${slug}`,
    title: `${i.name} Development`,
    description: clip(`Web and app development for ${i.name}. ${i.tagline}`),
    priority: 0.7,
    changeFrequency: "monthly",
  };
  return { ...base, ...industrySeoOverrides[slug] };
}

/** Per-slug SEO overrides for tech pages with a bespoke, keyword-tuned build. */
const techSeoOverrides: Record<string, Partial<PageSeo>> = {
  nextjs: {
    description:
      "Next.js development services for websites, web apps, ecommerce and SaaS, on the App Router at published fixed prices. This page is a Next.js build - inspect it.",
    priority: 0.7,
  },
  react: {
    description:
      "Custom React development services: SPAs, dashboards, design systems and front-ends for your backend. Published fixed pricing - and this page is a live React 19 app.",
    priority: 0.7,
  },
  angular: {
    description:
      "Custom Angular development for enterprise web apps, dashboards and AngularJS migrations - modern Angular with signals and SSR, your code, no lock-in, fixed pricing.",
    priority: 0.7,
  },
  // The CONTENT-SITE / frontend lane. Title stays the base "Astro Development Services" (no override -
  // it IS the head term, like nodejs/laravel/php). Meta is app-term-free and carries NO KB-of-JS figure
  // and NO Lighthouse/CWV score (those would be laundering - our real numbers are our Next.js site's).
  // Hand-counted ~151 chars (an override REPLACES the base un-clipped - clip() only runs on the base).
  astro: {
    description:
      "Astro development for content-driven sites - marketing pages, blogs, docs and landing pages. Fast static HTML with islands, from Intention InfoService.",
    priority: 0.7,
  },
  nodejs: {
    description:
      "Node.js development services - custom backends, REST and GraphQL APIs, real-time and microservices in TypeScript, at published fixed prices. You own the code.",
    priority: 0.7,
  },
  python: {
    description:
      "Python development services - FastAPI and Flask backends, data pipelines, automation and ML integration, at published fixed prices. You own the code and data.",
    priority: 0.7,
  },
  laravel: {
    description:
      "Laravel development services - custom web apps, SaaS, admin panels and APIs on Laravel 13, Livewire and Filament, at published fixed prices. You own the code.",
    priority: 0.7,
  },
  django: {
    description:
      "Django development services - custom Python web apps, admin panels, dashboards and DRF APIs on Django 5.2 LTS, at published fixed prices. You own the code.",
    priority: 0.7,
  },
  "java-spring-boot": {
    description:
      "Java and Spring Boot development services - enterprise-grade backends, APIs and microservices on Java 25 and Spring Boot 4, at published fixed prices. You own the code.",
    priority: 0.7,
  },
  // The RAW / no-framework PHP + legacy-modernization lane the live Laravel page routes here.
  // Title stays the base "PHP Development Services" (no override needed - it IS the head term,
  // like nodejs/python/laravel). "applications" is qualified as "without a framework" so the meta
  // does not re-compete with Laravel's printed "custom PHP web applications". No PHP version pin
  // (version-conservative). Hand-counted ~151 chars (an override REPLACES the base un-clipped).
  php: {
    description:
      "Custom PHP development services - applications and APIs without a framework, plus legacy PHP upgrades, modernization and maintenance. You own the code.",
    priority: 0.7,
  },
  wordpress: {
    description:
      "WordPress development services - fast, secure CMS sites, custom block themes and headless WordPress at published fixed prices. You own the site and content.",
    priority: 0.7,
  },
  // The first CMS spoke - structured/headless (vs WordPress, the traditional one). Title stays the base
  // "Sanity Development Services" (no override - it IS the head term). Ownership close is the SHOPIFY-
  // hosted-SaaS pattern ("content, schema and Studio", NOT "the platform", NOT flat "no lock-in" - the
  // Content Lake is hosted). No generic "headless CMS" head (that would cannibalize the sibling CMS
  // spokes). Hand-counted ~140 chars (an override REPLACES the base un-clipped).
  sanity: {
    description:
      "Sanity CMS development - structured content, GROQ, a custom Studio and a Next.js or Astro front end. You own your content, schema and Studio.",
    priority: 0.7,
  },
  // The OPEN-SOURCE, SELF-HOSTED CMS spoke (vs Sanity's hosted SaaS). Title stays the base "Strapi
  // Development Services" (no override - it IS the head term). Signature = own the CMS SOFTWARE itself
  // (not "no lock-in", not "headless CMS" head, which would cannibalize the sibling CMS spokes). Front
  // ends (Next.js/Astro) are route-outs, not staked. Hand-counted ~139 chars.
  strapi: {
    description:
      "Open-source, self-hosted Strapi development: own the CMS code and your data, extend it in Node, and ship the front end on Next.js or Astro.",
    priority: 0.7,
  },
  // The ENTERPRISE, hosted-SaaS CMS spoke (Sanity's peer; the governance/orchestration/scale one). Title
  // stays the base "Contentful Development Services" (no override - it IS the head term). Ownership is the
  // hosted-SaaS way (content + model yours and exportable, the platform rented), NOT "own the platform"/
  // flat "no lock-in". No generic "headless CMS" head; "enterprise headless CMS" is the qualified variant.
  // Hand-counted ~153 chars (an override REPLACES the base un-clipped; clip() never runs on it).
  contentful: {
    description:
      "Contentful development services - enterprise headless CMS implementation, migration and a Next.js/Astro front end. Content yours; the platform is rented.",
    priority: 0.7,
  },
  // Shopify is a HOSTED platform, so "you own your store" would be false (Shopify owns the
  // checkout, admin and hosting). The honest, checkable ownership claim is data + domain + code.
  // No own-site Shopify claim: this site is a static Next.js build, not a Shopify store.
  shopify: {
    description:
      "Custom Shopify development - store builds, custom themes, headless storefronts and migrations, at published fixed prices. You own your data, domain and code.",
    priority: 0.7,
  },
  // WooCommerce is SELF-HOSTED and GPL, so the ownership claim is genuinely the strongest of any
  // spoke - stronger than Shopify's (hosted: data/domain/code only) and than WordPress's. Here the
  // merchant owns the store software, the checkout and the database too. No own-site claim: this
  // site is a static Next.js build, and WooCommerce is PHP on WordPress.
  woocommerce: {
    description:
      "Custom WooCommerce development - store builds, block themes, extensions, speed and migrations, at published fixed prices. You own the store, the code and the data.",
    priority: 0.7,
  },
  // FIRST tech spoke to override `title`. Every other spoke keeps the base template
  // "{Tech} Development Services", which is right for web and backend techs because
  // "{tech} development" IS the head phrase there. The mobile SERP does not phrase itself
  // that way - the commercial token is "app development" - so the base template would drop
  // the single highest-value word. `titleAbsolute` stays false, so the root "%s - Intention
  // InfoService" template still appends the brand. No own-site claim: this site is a static
  // Next.js/React DOM build and contains no React Native.
  "react-native": {
    title: "React Native App Development Services",
    description:
      "React Native app development - iOS and Android from one codebase, on the New Architecture with Expo and native modules. Fixed pricing, and you own the code.",
    priority: 0.7,
  },
  // Same title-override reasoning as react-native: the mobile SERP's commercial token is "app
  // development", and the base template "{Tech} Development Services" drops it. The fact that
  // Flutter also targets web and desktop actually REINFORCES the "app" scoping - this page is a
  // mobile spoke, priced from mobileAppDevTiers, and it deliberately routes Flutter-web-for-SEO
  // out to Next.js. No own-site claim: nothing here is Dart, and Flutter draws its own pixels.
  flutter: {
    title: "Flutter App Development Services",
    description:
      "Flutter app development - iOS and Android from one Dart codebase, drawn pixel-for-pixel by Impeller. Published fixed pricing, and you own the code and store accounts.",
    priority: 0.7,
  },

  // The LAST CMS spoke and the LAST of all 21 technologies to go bespoke - the traditional/enterprise
  // PHP CMS (WordPress-family, but structured-content-native). Title stays the base "Drupal Development
  // Services" (no override - it IS the head term). Ownership is stated the self-hosted way (code, site
  // and data, GPL - never "the host"); the signature is structure-as-native-core, not ownership. No
  // generic "headless CMS" head. Hand-counted ~149 chars (an override REPLACES the base un-clipped).
  //
  // NOTE (2026-07-12): with drupal bespoke, EVERY technology now has a full override here and the shared
  // [slug] template renders nothing (templateTechnologies === []). There is no thin-noindex block left -
  // the "never ship thin pages" tier split is fully resolved. A NEW technology added to the catalog with
  // deep:false would render on that template and should get a `{ noindex: true }` entry here until written.
  drupal: {
    description:
      "Drupal development services - structured content, taxonomy, workflows and multilingual native in core, on Drupal 11. You own the code, site and data.",
    priority: 0.7,
  },
  // Third mobile spoke to go bespoke (after react-native + flutter). Title override adds the mobile
  // SERP's money word "App" (the base "{Tech} Development Services" template drops it); "SwiftUI"
  // signals native-iOS/Apple so no qualifier is needed. Head "SwiftUI app development" is disjoint
  // from the mobile money page's "iOS app development" head - overlapping platform, disjoint phrase.
  // No own-site claim: this site is a static Next.js/React DOM build and contains no Swift/SwiftUI.
  // Version-conservative: names FRAMEWORKS (Swift, SwiftData, Observation) not OS/point versions.
  // Meta hand-counted ~150 (an override REPLACES the base string un-clipped - clip() only runs on base).
  swiftui: {
    title: "SwiftUI App Development Services",
    description:
      "SwiftUI app development for native iOS and Apple platforms - built in Swift, with SwiftData, Observation and Apple's accessibility APIs. You own the code.",
    priority: 0.7,
  },
  // Last mobile spoke to go bespoke. Title override adds the mobile SERP money word "App" AND the
  // "Android" qualifier: Kotlin is the one polysemous mobile token (native Android / JVM backend /
  // KMP), and /technologies/java-spring-boot owns "Kotlin on Spring Boot", so the title disambiguates
  // to Android while keeping "Kotlin" front (winnable head + sibling parallel) and NOT leading with
  // the hub's bare "Android app development" head. No own-site claim: this site is a static
  // Next.js/React DOM build and contains no Kotlin. Version-conservative: FRAMEWORKS only (Kotlin,
  // Jetpack Compose, Material 3), no Android/Kotlin point-version. Meta hand-counted ~150.
  kotlin: {
    title: "Kotlin Android App Development Services",
    description:
      "Kotlin app development for native Android - built in Kotlin and Jetpack Compose with the Jetpack libraries and Material 3. You own the code and the Play account.",
    priority: 0.7,
  },
};

export function technologyPageSeo(slug: string): PageSeo | undefined {
  const t = getTechnology(slug);
  if (!t) return undefined;
  const base: PageSeo = {
    path: `/technologies/${slug}`,
    title: `${t.name} Development Services`,
    description: clip(`Custom ${t.name} development. ${t.tagline} Transparent fixed pricing, verifiable proof, shipped in weeks.`),
    priority: 0.6,
    changeFrequency: "monthly",
  };
  return { ...base, ...techSeoOverrides[slug] };
}
