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
  titleTemplate: `%s | ${siteConfig.name}`,
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
    title: "Web and App Development for Startups and SMBs | Intention InfoService",
    titleAbsolute: true,
    description:
      "Fast Next.js and React websites, web apps and mobile apps for startups and SMBs, at transparent fixed prices. Founder-led studio serving India and worldwide.",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/services",
    title: "Web, App and Digital Marketing Services",
    description:
      "Web design and development, mobile apps, UI/UX, digital marketing, website maintenance and AI solutions for startups and SMBs. Fixed pricing, modern stack.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/industries",
    title: "Industries We Serve",
    description:
      "Web and app development for EdTech, e-commerce, healthcare, fintech, real estate, travel and media. Sector-specific builds for startups and SMBs.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/technologies",
    title: "Technologies We Build With",
    description:
      "We build with Next.js, React, Node.js, Laravel, Django, WordPress, Shopify, React Native and Flutter. Hire vetted developers for your stack.",
    priority: 0.7,
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
    path: "/pricing",
    title: "Transparent, Fixed-Price Packages",
    description:
      "Fixed-price packages for websites, web apps and AI, with published starting prices and no quote walls. Quotes in INR, USD, GBP, AED and EUR.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/about",
    title: "About Us",
    description:
      "Intention InfoService is a founder-led web and app development studio, incorporated in 2016, building modern products for startups and SMBs worldwide.",
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/contact",
    title: "Contact Us",
    description:
      "Start a project with Intention InfoService. Tell us what you are building and get a fixed-price quote. We reply within one business day.",
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/careers",
    title: "Careers",
    description:
      "Join a founder-led web and app development studio. See how we work with Next.js, React and React Native, and how to apply.",
    priority: 0.4,
    changeFrequency: "monthly",
  },
  {
    // Blog INDEX only. Individual posts are managed by Sanity later.
    path: "/blog",
    title: "Web Development and Digital Growth Blog",
    description:
      "Practical articles on web development, Next.js, Core Web Vitals and SEO for startups and SMBs, from Intention InfoService.",
    priority: 0.7,
    changeFrequency: "weekly",
  },
  {
    path: "/guides",
    title: "Guides",
    description:
      "In-depth guides on web development, mobile apps and SEO for startups and SMBs.",
    noindex: true,
  },
  {
    path: "/glossary",
    title: "Glossary",
    description:
      "Plain-English definitions of web development, mobile and digital marketing terms.",
    noindex: true,
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

export function servicePageSeo(slug: string): PageSeo | undefined {
  const s = getService(slug);
  if (!s) return undefined;
  const detail = serviceDetails[slug];
  return {
    path: `/services/${slug}`,
    title: `${s.name} Services`,
    description: clip(detail?.intro ?? s.tagline),
    priority: 0.9,
    changeFrequency: "monthly",
  };
}

export function industryPageSeo(slug: string): PageSeo | undefined {
  const i = getIndustry(slug);
  if (!i) return undefined;
  return {
    path: `/industries/${slug}`,
    title: `${i.name} Development`,
    description: clip(`Web and app development for ${i.name}. ${i.tagline}`),
    priority: 0.7,
    changeFrequency: "monthly",
  };
}

export function technologyPageSeo(slug: string): PageSeo | undefined {
  const t = getTechnology(slug);
  if (!t) return undefined;
  return {
    path: `/technologies/${slug}`,
    title: `${t.name} Development Company`,
    description: clip(`Expert ${t.name} development for startups and SMBs. ${t.tagline}`),
    priority: 0.6,
    changeFrequency: "monthly",
  };
}
