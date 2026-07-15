import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. NO <Link> in any answer (schema leak) - routing in
// prose. The "vs Contentful" question is REFRAMED so it does not stake the "Sanity vs Contentful" head
// query on this page (Contentful is now a live sibling) - it names Contentful at most once, descriptively,
// with no verdict. Partner/cert is NOT repeated here (it lives only in the Proof risk-reversal card).
// The ownership answer uses the Shopify-style split. One qualitative adoption mention (Q3). No pricing
// figures, no Lighthouse/CWV. Byte-consistent with how NextjsCapabilities/AstroScope name Sanity as a
// source their front ends read.
const faqs = [
  {
    question: "What is Sanity, and what is structured content?",
    answer:
      "Sanity is an API-first, headless CMS: it stores and serves your content but does not render your website. Structured content means your content is modelled as typed data - documents and fields with defined shapes - stored as JSON in Sanity's Content Lake, rather than as pages of HTML. Because it is data, the same article or product is authored once and served to a website, an app, an email or another surface, and queried with GROQ, Sanity's query language.",
  },
  {
    question: "Sanity vs WordPress - what's the difference?",
    answer:
      "Different models. WordPress is a traditional, page-based CMS where a team edits whole pages through a familiar themed admin with plugins - it is often the simpler, cheaper choice for a single site one team maintains. Sanity is structured and headless: content is typed data you model in code, edited in a custom Studio, and rendered by a separate front end you build. Sanity earns its keep when content is structured and reused across surfaces, or needs custom editorial workflows. If your team just wants to edit pages in a familiar admin, we will route you to WordPress.",
  },
  {
    question: "Is Sanity the right headless CMS for me, or should I look at another one?",
    answer:
      "It depends on your editorial model and budget, and we recommend the fit rather than a badge we hold. Sanity is a strong choice when you want schema-in-code developer control, real-time collaborative editing, and a fully customizable Studio; it sits in the same structured, headless family as options like Contentful and Strapi, which lean to different strengths. Sanity is used in production by large brands and many product teams. Because we are not a Sanity partner, we have no incentive to push it - if a different headless source or a traditional CMS fits you better, we will say so.",
  },
  {
    question: "Is Sanity good for SEO?",
    answer:
      "Sanity itself renders nothing, so SEO is a property of the front end you put in front of it. Pairing Sanity with a fast Next.js (for app- or SEO-critical sites) or Astro (for content sites) front end gives you server-rendered, fast-loading pages with full control of metadata and structured data. On a migration, we protect SEO by mapping every URL, preserving metadata, and setting redirects before cutover. We claim the method, never a ranking outcome.",
  },
  {
    question: "Do I own my content on Sanity, and am I locked in?",
    answer:
      "You own your content, your schema, your Studio and your GROQ queries: your content is structured JSON exportable through Sanity's CLI, and your schema and Studio are open-source and live in your own repository. What you do not own is the Content Lake, which is Sanity's hosted service you pay for. So the honest answer is not a flat 'no lock-in' - moving off any hosted platform is real work - but your content is exportable, structured data rather than a database held hostage, which is a very different risk than a closed page-builder you cannot leave.",
  },
  {
    question: "What does Sanity cost?",
    answer:
      "Sanity has a free tier with quotas, a usage-based paid plan billed per occupied seat with no annual lock-in, and an enterprise plan. The client pays Sanity directly for the Content Lake and we take no markup, so our fee is only for the build. Because cost scales with editor seats and traffic, the honest planning move is to model those up front rather than quote a single number.",
  },
  {
    question: "Is Sanity good with Next.js?",
    answer:
      "Yes - it is one of the most natural pairings. Sanity is API-first, so a Next.js front end reads it over GROQ from server components, uses on-demand revalidation to refresh only the routes an edit affects, and shows editors in-context live preview. Sanity Studio is itself a React application, which is our core stack. That adjacency is why Sanity is the headless CMS we reach for with Next.js - and it is exactly how this site works: our blog, guides and glossary are Sanity content rendered by a Next.js front end.",
  },
  {
    question: "Does this website run on Sanity?",
    answer:
      "The part of it that is content does. This site is a static Next.js and React build, and everything under Resources - the blog, the guides and the glossary - is modelled in a Sanity Studio, stored in the Content Lake and queried over GROQ. It is our home ground because the Studio is a React app, and rather than just recommend Sanity we put our own content on it, so what you read there is the result. The marketing, service and technology pages are code, not Sanity - we won't overstate it - but the resource library is genuinely Sanity-powered.",
  },
  {
    question: "Do I own the code you build?",
    answer:
      "Yes - the code is yours. Your Sanity schema, your custom Studio and your GROQ queries are standard, open Sanity in your own repository, so any competent Sanity developer can take them over, and you can move on without asking us. The one hosted piece is the Content Lake, Sanity's service you pay for directly. Fixed pricing and code you own outright are the whole point.",
  },
];

export function SanityFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Sanity development, answered" />
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
