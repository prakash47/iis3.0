export interface CaseStudy {
  slug: string;
  /** Outcome-led title, e.g. "Cut Shopify LCP from 4.8s to 1.1s (+23% conversions)". */
  title: string;
  client: string;
  summary: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  liveUrl?: string;
}

/**
 * TODO: add the 2 real projects (the brochure site + the e-commerce build).
 * Each must lead with a REAL before/after metric (Core Web Vitals, Lighthouse,
 * conversion lift), the stack, timeline, a named client quote, and a live link.
 * Two exceptional case studies beat twenty vague ones.
 */
export const caseStudies: CaseStudy[] = [];
