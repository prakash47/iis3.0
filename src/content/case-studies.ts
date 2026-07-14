export interface CaseStudy {
  slug: string;
  /** Outcome-led title: card heading + detail-page H1. */
  title: string;
  /** Anonymized vertical (the client's name is withheld under NDA). */
  sector: string;
  /** Project type, e.g. "Website rebuild". */
  type: string;
  /** One- or two-line card blurb. */
  summary: string;
  /** REAL, measured figures only - never fabricated. */
  metrics: { label: string; value: string }[];
  stack: string[];
  /** true = client name withheld at the client's request (renders a confidential note). */
  confidential?: boolean;
  /** Detail page: the situation before. */
  challenge: string[];
  /** Detail page: what we built. */
  approach: string[];
  /** Detail page: the result. */
  outcome: string[];
}

/**
 * REAL, anonymized case studies. Client names, URLs and app names are withheld
 * under NDA - so each entry describes ACTUAL work (real scope, real measured
 * outcomes) with the client's identity removed. This is honest: an
 * anonymized-but-real case study is legitimate; an INVENTED one is fabrication
 * and breaks the whole "verifiable, never fake" strategy. NEVER add invented
 * metrics, quotes or projects here - only real work the founder has shipped.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "edtech-training-platform-rebuild",
    title: "A slow WordPress site, rebuilt on Next.js - traffic up around 120%",
    sector: "EdTech / professional training",
    type: "Website rebuild",
    summary:
      "Re-platformed a training institute's large, slow WordPress site onto a fast, statically-generated Next.js build with a headless CMS - and grew traffic by around 120%.",
    metrics: [
      { label: "Traffic", value: "~+120%" },
      { label: "Delivered in", value: "4 weeks" },
    ],
    stack: ["Next.js", "Sanity CMS", "React", "SSG", "SEO"],
    confidential: true,
    challenge: [
      "A professional-skills training institute - running programs in software testing, data science, analytics, AI and digital marketing - had outgrown its website. The site ran on WordPress and had become slow: a heavy theme-and-plugin stack dragged load times on a catalog- and content-heavy site, which hurts both the visitor experience and search rankings.",
      "Scaling was just as painful. Reaching learners in different cities meant thin, near-duplicate pages, and publishing anything new leaned on developers and a cluttered admin.",
    ],
    approach: [
      "Rebuilt the entire front end on Next.js, statically generating pages so they load fast and stay fully crawlable - the opposite of the plugin-heavy stack it replaced.",
      "Moved the editorial content into Sanity, a headless CMS, so the marketing team publishes and updates content itself, without a developer in the loop.",
      "Built a filterable course catalog across five program tracks (software testing, data science, business intelligence, AI and digital marketing).",
      "Generated per-city course landing pages for 8+ cities from one templated architecture, so a single program ranks for local searches instead of one generic page.",
      "Placed demo-class and enquiry funnels through the journey, since the site's job is enrolments.",
      "Handled the WordPress-to-Next.js migration so the rebuild grew traffic rather than resetting it.",
      "Added the modules the institute runs on: events, mentors, a jobs board, certificate validation and a structured FAQ.",
    ],
    outcome: [
      "The new site shipped in four weeks. Traffic grew by around 120%, and enquiries rose alongside it.",
      "Just as important, the institute's own team can now extend the site - new courses, new cities, new posts - on an architecture built to scale, instead of going back to a developer for every change.",
    ],
  },
];
