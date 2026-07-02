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

// ── SERVICES (6 core offerings) ─────────────────────────────────────────────
export const services: readonly CatalogEntry[] = [
  {
    slug: "web-design-development",
    name: "Web Design & Development",
    tagline:
      "Custom, high-performance websites & web apps on Next.js, React and headless CMS.",
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    tagline:
      "Native, cross-platform and PWA apps - React Native, Flutter, SwiftUI, Kotlin.",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    tagline:
      "SEO, social, performance marketing and email that turns traffic into leads.",
  },
  {
    slug: "ui-ux-branding",
    name: "UI/UX & Branding",
    tagline: "Product design, design systems and brand identity that convert.",
  },
  {
    slug: "website-maintenance",
    name: "Website Maintenance",
    tagline: "Hosting, security, performance and content care plans that keep you fast.",
  },
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    tagline: "AI chatbots and workflow automation trained on your business.",
  },
] as const;

// ── INDUSTRIES (6 verticals) ────────────────────────────────────────────────
// `lead` = front-page verticals with proof or a fast path to it. Others are
// capability pages only (built gradually, never headline promises).
export const industries: readonly (CatalogEntry & { lead: boolean })[] = [
  {
    slug: "edtech-lms",
    name: "EdTech & LMS",
    tagline: "Learning platforms and LMS builds for education startups.",
    lead: true,
  },
  {
    slug: "healthcare",
    name: "Healthcare Portals",
    tagline: "Secure, compliant patient and provider portals.",
    lead: false,
  },
  {
    slug: "fintech",
    name: "FinTech Solutions",
    tagline: "Secure financial dashboards, payments and compliant apps.",
    lead: false,
  },
  {
    slug: "real-estate",
    name: "Real Estate Platforms",
    tagline: "Listing portals and property platforms that scale.",
    lead: false,
  },
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    tagline: "Booking engines and travel platforms built to perform.",
    lead: false,
  },
  {
    slug: "entertainment-media",
    name: "Entertainment & Media",
    tagline: "Streaming, publishing and media platforms.",
    lead: false,
  },
] as const;

// ── TECHNOLOGIES (drive /technologies/* and /hire-*-developers) ─────────────
export interface TechEntry extends CatalogEntry {
  category: "frontend" | "backend" | "cms" | "ecommerce" | "mobile";
  /** true → also generate a transactional /hire-<slug>-developers page. */
  hire: boolean;
}

export const technologies: readonly TechEntry[] = [
  { slug: "nextjs", name: "Next.js", tagline: "React framework for fast, SEO-ready apps.", category: "frontend", hire: true },
  { slug: "react", name: "React", tagline: "Interactive, component-driven UIs.", category: "frontend", hire: true },
  { slug: "astro", name: "Astro", tagline: "Ultra-fast content and marketing sites.", category: "frontend", hire: false },
  { slug: "node", name: "Node.js", tagline: "Scalable JavaScript backends and APIs.", category: "backend", hire: true },
  { slug: "laravel", name: "Laravel", tagline: "Robust PHP applications, done right.", category: "backend", hire: true },
  { slug: "django", name: "Django", tagline: "Python web apps with batteries included.", category: "backend", hire: true },
  { slug: "java-spring-boot", name: "Java & Spring Boot", tagline: "Enterprise-grade backend systems.", category: "backend", hire: false },
  { slug: "wordpress", name: "WordPress", tagline: "Flexible CMS sites and custom themes.", category: "cms", hire: true },
  { slug: "drupal", name: "Drupal", tagline: "Enterprise content management.", category: "cms", hire: false },
  { slug: "strapi", name: "Strapi", tagline: "Open-source headless CMS.", category: "cms", hire: false },
  { slug: "sanity", name: "Sanity", tagline: "Real-time headless content platform.", category: "cms", hire: false },
  { slug: "contentful", name: "Contentful", tagline: "Composable headless CMS at scale.", category: "cms", hire: false },
  { slug: "shopify", name: "Shopify", tagline: "Headless & custom commerce stores.", category: "ecommerce", hire: true },
  { slug: "react-native", name: "React Native", tagline: "One codebase, iOS + Android.", category: "mobile", hire: true },
  { slug: "flutter", name: "Flutter", tagline: "Beautiful cross-platform apps.", category: "mobile", hire: true },
  { slug: "swiftui", name: "SwiftUI", tagline: "Modern native iOS apps.", category: "mobile", hire: false },
  { slug: "kotlin", name: "Kotlin", tagline: "Modern native Android apps.", category: "mobile", hire: false },
] as const;

// ── Convenience lookups ─────────────────────────────────────────────────────
export const leadIndustries = industries.filter((i) => i.lead);
export const hireTechnologies = technologies.filter((t) => t.hire);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
export function getTechnology(slug: string) {
  return technologies.find((t) => t.slug === slug);
}
