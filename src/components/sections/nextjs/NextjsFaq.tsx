import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD - the highest-leverage cluster
// for this page (the "vs / is-it-good-for / how-much" queries). Correctness is
// E-E-A-T and what earns AI-overview citations. Cost is byte-identical to the
// published web tiers; technical claims are 2026-current (INP, App Router, RSC).
const faqs = [
  {
    question: "What is Next.js, and what is it used for?",
    answer:
      "Next.js is a React framework for building fast, SEO-friendly websites and web apps. It adds server rendering, file-based routing, data fetching and built-in performance tooling on top of React, so it's used for everything from marketing sites and ecommerce to full SaaS products.",
  },
  {
    question: "Is Next.js good for SEO?",
    answer:
      "Yes. Next.js server-renders real HTML, has a first-class Metadata API and structured-data support, and clean routing, so search engines and AI answer engines get full content instead of an empty JavaScript shell. You can verify it - this page is a Next.js build, so run PageSpeed or view source on it.",
  },
  {
    question: "What is the difference between Next.js and React?",
    answer:
      "React is a UI library for building components. Next.js is a full framework built on React that adds routing, server rendering, data fetching and optimization out of the box. Put simply, Next.js is React plus everything you'd otherwise have to assemble yourself - they're not competitors.",
  },
  {
    question: "Next.js vs WordPress - which should I choose?",
    answer:
      "WordPress is excellent when non-technical editors need full control of a content site. Next.js wins for speed, custom interactivity and app-like or SEO-critical builds. You can also have both: run WordPress headless as the editor while a Next.js front end keeps the site fast and modern.",
  },
  {
    question: "Next.js vs Astro - which is faster?",
    answer:
      "For mostly-static content, Astro ships less JavaScript and can load faster. For interactive, data-driven or authenticated apps, Next.js is the stronger fit. We're stack-agnostic, so we'll recommend Astro when a site is content-only and Next.js when it needs to behave like an app.",
  },
  {
    question: "Is Next.js good for ecommerce?",
    answer:
      "Yes. Incremental static regeneration keeps large product catalogs fast, server rendering keeps product pages SEO-friendly, and Next.js integrates cleanly with Shopify, WooCommerce or headless commerce as the storefront front end.",
  },
  {
    question: "How much does a Next.js website cost?",
    answer:
      "We publish fixed tiers: Starter from $300 (single page), Launch Sprint from $1,500, Growth Site from $4,000, Commerce Sprint from $7,000, and a web-app MVP Sprint from $12,000. A Next.js build is priced by these same web tiers - you see the number before you commit, no quote wall.",
  },
  {
    question: "How long does it take to build a Next.js site?",
    answer:
      "Weeks, not months, for most builds - a Launch Sprint site ships fast, and larger apps scale up from there. You get a real timeline after a short discovery, with the scope and fixed price agreed before any build starts.",
  },
  {
    question: "What is the App Router in Next.js?",
    answer:
      "The App Router is Next.js's modern routing system, built on React Server Components. It enables nested layouts, per-route rendering choices (static, ISR, server-rendered or streamed), and the current caching model. We build App-Router-first as the 2026 production default.",
  },
  {
    question: "What are React Server Components?",
    answer:
      "React Server Components render on the server, so less JavaScript is shipped to the browser. That means faster loads and better responsiveness. In a Next.js App Router build, components are server-rendered by default, and only interactive 'islands' run on the client.",
  },
  {
    question: "Does Next.js improve Core Web Vitals?",
    answer:
      "It's built to. Server rendering and streaming help LCP, shipping less client JavaScript helps INP, and reserved image and font sizing protects CLS. We engineer to the real 2026 thresholds - LCP under about 2.5s, INP under 200ms, CLS under 0.1 - and you can measure this page to check.",
  },
  {
    question: "Can you migrate my WordPress or old React site to Next.js?",
    answer:
      "Yes. We migrate from WordPress, Create React App, Gatsby or a legacy Pages-Router Next.js app to a modern App Router build - incrementally where possible, with URLs and redirects mapped so your SEO rankings survive the move.",
  },
  {
    question: "Is Next.js still worth it in 2026, with AI search?",
    answer:
      "Yes - arguably more so. Because Next.js serves real server-rendered HTML and structured data, it's well-positioned for both Google and AI answer engines, which need crawlable content to cite. A fast, well-structured Next.js site is a strong foundation for AI search visibility.",
  },
  {
    question: "Do I own the code you build?",
    answer:
      "Yes - 100% ownership. It's standard Next.js with no proprietary lock-in, and you get the repository, so you can hand it to any developer later. Transparent fixed pricing and code you own outright are the whole point.",
  },
];

export function NextjsFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Next.js development, answered" />
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
