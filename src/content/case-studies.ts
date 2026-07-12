export interface CaseStudy {
  slug: string;
  /** Outcome-led title, e.g. "Cut store LCP from 4.8s to 1.1s (+23% conversions)". */
  title: string;
  client: string;
  /** Vertical / project type, e.g. "E-commerce". */
  type: string;
  summary: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  liveUrl?: string;
  /** true = SAMPLE/placeholder data (renders a "Sample" badge). Remove when real. */
  placeholder?: boolean;
}

/**
 * ⚠️  The entries below are PLACEHOLDER / SAMPLE data so the homepage + /work
 * render with content during the build. REPLACE with the 2 REAL projects (the
 * brochure site + the e-commerce build) BEFORE launch - real client, real
 * before/after metric, real stack + timeline, a named client quote, and a live
 * link - and delete `placeholder: true`. Shipping FABRICATED case studies is an
 * E-E-A-T / Google site-reputation / FTC-honesty risk and breaks the whole
 * "verifiable proof, never fake breadth" strategy. See strategy/01 + 06.
 * Two exceptional real case studies beat twenty vague ones.
 *
 * NOTE (2026-07-10): entry 1 previously described a "headless Shopify replatform" with
 * stack tags Next.js/Shopify/Headless. The founder confirmed the real store was a CUSTOM,
 * FULL-STACK NEXT.JS build - never Shopify - so that sample was inventing a Shopify project
 * we have never done. It also directly contradicted /technologies/shopify, which states we
 * have shipped no Shopify store and links here via "See our work". Retagged to match the
 * real project's shape. The client name and metrics below are STILL sample data.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "custom-ecommerce",
    title: "A custom storefront that loads before the eye can blink",
    client: "Northwind Supply Co.",
    type: "E-commerce",
    summary:
      "Designed and built a custom, full-stack Next.js online store - product catalog, cart, checkout and payments on its own backend - tuned for fast pages and a clean buying flow.",
    metrics: [
      { label: "Largest Contentful Paint", value: "1.1s" },
      { label: "Checkout conversions", value: "+23%" },
    ],
    stack: ["Next.js", "Full-stack", "E-commerce"],
    placeholder: true,
  },
  {
    slug: "corporate-rebuild",
    title: "A brochure site rebuilt for speed, SEO and trust",
    client: "Brightpath Advisory",
    type: "Corporate site",
    summary:
      "Designed and shipped a fast, accessible marketing site on a clean headless CMS - with perfect Core Web Vitals and schema built in.",
    metrics: [
      { label: "Lighthouse, every page", value: "100" },
      { label: "Organic clicks, 90 days", value: "+64%" },
    ],
    // NOTE (2026-07-11): stack previously tagged "Sanity". The founder confirmed this corporate
    // site is NOT a confirmed Sanity build, and a specific "Sanity" tag on /work (one click from
    // the Sanity spoke's honest "we have shipped no Sanity work" bridge) would contradict that
    // page - the exact error the Northwind Shopify tag made. Retagged to the generic, honest
    // "Headless CMS" (the summary already says "a clean headless CMS"). Still sample data.
    stack: ["Next.js", "Headless CMS", "SEO"],
    placeholder: true,
  },
];
