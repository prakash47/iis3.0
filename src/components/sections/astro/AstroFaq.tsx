import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. NO <Link> in any answer (schema leak) - routing
// is described in prose. Byte-consistent with the LIVE NextjsFaq/NextjsCompare (Astro = content-only,
// ships less JS, Next.js for apps). The production-ready + Cloudflare myth-buster is MERGED into one
// item (Q4) and carries the SINGLE qualitative adoption mention (red-team: max one, no borrowed
// logos). No KB-of-JS figures, no Lighthouse/CWV scores. "early 2026", never a pinned date. Cost
// byte-identical to the published tiers. Cert/partner handled in the Proof card, not repeated here.
const faqs = [
  {
    question: "What is Astro used for?",
    answer:
      "Astro is a web framework for content-driven sites - marketing sites, blogs, documentation and landing pages - where the job is to load fast, read cleanly and rank in search. Its defining idea is that a page ships as static HTML with almost no JavaScript by default, and interactivity is added only where you need it. For a site that has to behave like an application, a framework like Next.js is the better fit, and we will point you there.",
  },
  {
    question: "Should I use Astro or Next.js?",
    answer:
      "It comes down to content versus app. For a mostly-static content site - marketing, blog, docs, landing pages - Astro ships less JavaScript and is the leaner choice. For interactive, data-driven or authenticated products that behave like an application, Next.js is the stronger fit. We build both and recommend Astro when a site is content-only and Next.js when it needs to behave like an app, which is also why our own site runs on Next.js.",
  },
  {
    question: "Is Astro good for SEO?",
    answer:
      "Yes, for content sites. Astro renders real static HTML that a search crawler reads directly, with semantic markup as the baseline rather than something bolted on afterwards, so the content exists without a client-side render step. We build to pass Core Web Vitals as a method, measured on your pages after launch. We claim SEO as engineering structure, never as a ranking guarantee.",
  },
  {
    question: "Is Astro production-ready, and is it a risk now that Cloudflare owns it?",
    answer:
      "Yes to production-ready, and no, the acquisition is not a lock-in risk. Astro is used in production by large brands and hundreds of thousands of developers for content and marketing sites. In early 2026 the Astro team joined Cloudflare and now work on Astro full-time with more resources behind it, and Astro stayed MIT-licensed, open-source and platform-agnostic - it still deploys to any host, not just Cloudflare, and keeping it open to every platform was a stated condition of the deal. You get a mature framework with a bigger backer, not a proprietary trap.",
  },
  {
    question: "Does Astro support React?",
    answer:
      "Yes. Astro is UI-framework-agnostic, so an interactive island can be a React component - or Vue, Svelte or Solid - mounted inside an otherwise static Astro page. If you already own a React widget, it can drop in as an island rather than being rebuilt. Our own site is built in React, so this is an area we genuinely understand, though our site itself is Next.js, not Astro.",
  },
  {
    question: "Can Astro use a headless CMS?",
    answer:
      "Yes. Astro reads a headless source - such as Sanity, Strapi, Contentful, or WordPress used headless - through the Content Layer, and renders it as fast static or hybrid output. The CMS is where non-developers edit and Astro is the presentation layer. If day-to-day editing by a non-technical team is the whole point, we would often route you to WordPress directly instead.",
  },
  {
    question: "Is Astro a good choice for a blog, marketing site or docs site?",
    answer:
      "Yes - that is exactly its lane. Content collections with typed frontmatter and MDX make a blog fast and maintainable as the archive grows; marketing and landing pages ship as fast static HTML with a single island where interactivity is needed; and documentation sites can use Starlight, Astro's documentation-site toolkit, for search and navigation that stay quick across hundreds of pages.",
  },
  {
    question: "How much does an Astro website cost?",
    answer:
      "We publish fixed tiers instead of a quote wall: Starter from $300, Launch Sprint from $1,500, Growth Site from $4,000, Commerce Sprint from $7,000, and an MVP Sprint from $12,000. A content or marketing site on Astro maps directly onto the lower tiers - a landing page or small site at Starter or Launch, a fuller content, blog or docs site around Growth. A larger content platform or a migration is scoped as part of our web development service. No hourly rates, no mystery pricing.",
  },
  {
    question: "Does this website run on Astro?",
    answer:
      "No, and we will not pretend it does. This site is a static Next.js and React build - it shares the same npm, Node and TypeScript ecosystem Astro lives in, and Astro islands can be React, which our site is, but it is Next.js, not Astro. A pure content site on Astro would actually ship even less JavaScript than ours does, because that is Astro's default and our site is a growing platform, not pure content. The proof on this page is the engineering depth and the standard, open Astro code you would own outright.",
  },
  {
    question: "Do I own the Astro code you build?",
    answer:
      "Yes - 100% ownership. It is standard, open Astro on mainstream open-source packages, in your repository and deployed to a host of your choice, so the code, the content collections, the configuration and the IP are yours from day one, and any competent Astro developer can take it over. Astro is MIT-licensed and platform-agnostic, so you are not locked into us or into any single hosting vendor.",
  },
];

export function AstroFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Astro development, answered" />
        </Reveal>
        <Reveal className="mt-9">
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-foreground">
                  {f.question}
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-brand-500 transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
