export interface CaseStudy {
  slug: string;
  /** Outcome-led title: card heading + detail-page H1. */
  title: string;
  /** Anonymized vertical (the client's name is withheld under NDA). */
  sector: string;
  /** Project type, e.g. "Website rebuild". */
  type: string;
  /** Optional compact SEO title (falls back to `${title} - Case Study`). Keep <=36 chars so the appended brand stays under ~60. */
  seoTitle?: string;
  /** Optional compact SEO/meta description under ~155 chars (falls back to summary). */
  seoDescription?: string;
  /** The primary service slug this case study substantiates (links the detail page to that money page). */
  serviceSlug?: string;
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
  /** Detail page: why the work produced the result (genuine reasoning, no new metrics). */
  whyItWorked?: string[];
  /** Detail page: the result. */
  outcome: string[];
}

/**
 * REAL, anonymized case studies. Client names, URLs and app names are withheld
 * under NDA - so each entry describes ACTUAL work (real scope, real measured
 * outcomes) with the client's identity removed. This is honest: an
 * anonymized-but-real case study is legitimate; an INVENTED one is fabrication
 * and breaks the whole "verifiable, never fake" strategy. NEVER add invented
 * metrics, quotes or projects here - only real work the founder has shipped, and
 * only figures the founder has confirmed (here: organic traffic ~+120%, 4-week
 * delivery). Elaboration is fine where it is genuine engineering/SEO reasoning;
 * new numbers are not.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "edtech-training-platform-rebuild",
    title: "A slow WordPress site, rebuilt on Next.js - organic traffic up around 120%",
    sector: "EdTech / professional training",
    type: "Website rebuild",
    seoTitle: "WordPress to Next.js Rebuild",
    seoDescription:
      "How we rebuilt a training institute's slow WordPress site on Next.js and grew organic search traffic by around 120%, shipped in four weeks.",
    serviceSlug: "web-design-development",
    summary:
      "Re-platformed a training institute's large, slow WordPress site onto a fast, statically-generated Next.js build with a headless-CMS blog - and grew organic search traffic by around 120%.",
    metrics: [
      { label: "Organic traffic", value: "~+120%" },
      { label: "Delivered in", value: "4 weeks" },
    ],
    stack: ["Next.js", "Sanity CMS", "React", "SSG", "SEO"],
    confidential: true,
    challenge: [
      "A professional-skills training institute - with a broad catalog of technical and digital upskilling programs and a busy content operation - had outgrown its website. The site ran on WordPress, and after years of themes, plugins and add-ons it had become slow. On a site this content- and catalog-heavy, that weight showed up everywhere: sluggish page loads, weak Core Web Vitals, and a mobile experience that made prospective learners wait before they ever saw a course.",
      "For a business that lives on search and enrolments, slow pages are not a cosmetic problem - they are a growth problem. Page speed feeds directly into how Google ranks a page and into how many visitors stay long enough to enquire, so every extra second of load time on a course page works against both rankings and leads.",
      "Scaling the site was just as painful. Reaching learners in different cities meant either one generic page trying to rank everywhere, or a sprawl of thin, near-duplicate pages that search engines quietly discount. And publishing anything new - a course update, a blog post, a landing page - meant going through developers and a cluttered admin, so the marketing team moved at the speed of the dev queue.",
    ],
    approach: [
      "Rebuilt the entire front end on Next.js and statically generated the pages, so they render as fast, pre-built HTML instead of being assembled on every request. The result is the opposite of the plugin-heavy stack it replaced: quick to load, stable under traffic, and fully crawlable for search.",
      "Moved the blog and editorial content onto Sanity, a headless CMS, so the marketing team writes and publishes on its own - no developer in the loop, and no more waiting on the dev queue to ship a post or a fresh landing page.",
      "Rebuilt the full course catalog as a fast, filterable experience, so a prospective learner can narrow a large program list down to exactly what they want in a couple of clicks.",
      "Designed the per-city course pages as one templated architecture rather than hand-built duplicates: a single program generates genuinely distinct, locally-relevant landing pages for 8+ cities, which lets the site rank for 'course in [city]' searches without tipping into the thin-content territory Google penalises.",
      "Placed demo-class and enquiry funnels through the journey, so the intent that a fast, well-ranked page creates actually converts into leads instead of leaking away.",
      "Handled the WordPress-to-Next.js migration carefully - carrying the existing content across so the rebuild built on the site's existing search footing rather than resetting it. That is the difference between a rebuild that grows traffic and one that loses it.",
      "Engineered speed and SEO in from the first line: right-sized, optimised images, clean semantic markup and structured metadata - so the performance and search gains are part of the architecture, not bolted on afterwards.",
      "Rebuilt the supporting modules the institute runs on - events, mentors, a jobs board, certificate validation and a structured FAQ - as part of one coherent, maintainable codebase instead of a stack of plugins.",
    ],
    whyItWorked: [
      "Rebuilds make people nervous for a good reason: a careless migration can wipe out years of rankings overnight. This one moved in the opposite direction because the gains and the risks were handled together.",
      "The speed came from the architecture itself - statically-generated pages are fast by default, and fast, stable pages are exactly what both Google and impatient visitors reward. The reach came from the per-city structure, which turned one program into many genuinely useful local pages. The content velocity came from the headless CMS, so the team could keep the site fresh - a signal search values - without a developer bottleneck. Fast, well-structured, freshly updated, and migrated without losing its existing equity: those are the ingredients behind the lift in organic traffic.",
    ],
    outcome: [
      "The new site shipped in four weeks. After the rebuild, organic search traffic grew by around 120%, and enquiries rose alongside it - the fast, well-ranked pages were finally doing the job the old WordPress site could not.",
      "Just as important, the result is durable and owned by the client. Their own team can extend the site - new courses, new cities, new posts - on an architecture built to scale, instead of going back to a developer for every change. And because it is a clean, standard Next.js and headless-CMS build, nothing about it is locked to us: the code and the content are theirs.",
    ],
  },
  {
    slug: "loan-comparison-website",
    title: "A fast loan-comparison and enquiry site, built fresh in 2 weeks",
    sector: "Financial services / lending",
    type: "New website",
    seoTitle: "Fast Loan-Comparison Site Build",
    seoDescription:
      "How we designed and built a fast loan-comparison and enquiry site - an EMI calculator, ten product pages and lead funnels - on Next.js in two weeks.",
    serviceSlug: "web-design-development",
    summary:
      "Designed and built a fast, statically-generated Next.js site for a loan advisory - an interactive EMI calculator, clear per-product pages and enquiry funnels - shipped in two weeks.",
    metrics: [
      { label: "Delivered in", value: "2 weeks" },
      { label: "Loan categories", value: "10" },
    ],
    stack: ["Next.js", "React", "SSG", "SEO"],
    confidential: true,
    challenge: [
      "A loan advisory that connects borrowers with banks and NBFCs needed a website that does two jobs at once: explain a wide range of loan products clearly, and turn interest into enquiries quickly. On a finance site, speed and clarity are the whole game - a borrower comparing options will not wait on a slow page, and a confusing one loses them to the next tab.",
      "The brief was a fresh build: a fast, modern site that could carry ten loan categories, an affordability tool and enquiry funnels, without the bloat that makes so many finance sites slow.",
    ],
    approach: [
      "Built the site fresh on Next.js and statically generated it, so pages render as fast, pre-built HTML - the foundation for a genuinely quick site rather than one patched for speed later.",
      "Built an interactive EMI calculator that computes the monthly figure in real time, so a borrower can check affordability instantly, before they ever fill in a form.",
      "Gave each loan category - home, business, personal, MSME, education, auto, machinery, working capital, loan-against-property and credit card - a clear, structured page with eligibility, rate ranges and document checklists.",
      "Placed 'Apply Now' enquiry funnels where borrower intent is highest, so a fast, clear page actually turns into leads.",
      "Optimised images and kept the front end lean, so speed is a property of the architecture, not an afterthought.",
    ],
    whyItWorked: [
      "On a comparison site, speed is not a nice-to-have - it is the conversion. A borrower weighing loan options is one slow page away from leaving, so a statically-generated, image-optimised build removes the friction between interest and enquiry. The real-time calculator does the same job for trust: it answers the borrower's first question - 'can I afford this?' - on the spot, before asking anything in return.",
    ],
    outcome: [
      "The site shipped fresh in two weeks: a fast, clear loan-comparison experience built for enquiries, with an affordability tool and structured product pages the advisory can point every prospect to.",
      "Built on a clean, standard Next.js foundation, it is fast by construction and straightforward to extend as new loan products and lenders come on board.",
    ],
  },
];
