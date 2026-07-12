import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. Includes the hard questions
// (no guaranteed rankings, prove-it-without-a-case-study) and the scope-clarifier
// (no paid ads). No fabricated traffic/ranking/ROI, no guarantees.
const faqs = [
  {
    question: "What is organic digital marketing?",
    answer:
      "Organic digital marketing grows your visibility through owned and earned channels - SEO, AI-search optimization, content, organic social, email and conversion optimization - rather than paid ads. It compounds over time into an asset you own, instead of traffic you rent for as long as you keep spending.",
  },
  {
    question: "Do you do paid ads, Google Ads or PPC?",
    answer:
      "No - this service is organic and owned-media only. We focus where growth compounds and you keep the asset: SEO, AI-search, content, organic social and email. We don't run Google Ads, paid social or other paid media on this service.",
  },
  {
    question: "What is AEO / GEO, and do I need it in 2026?",
    answer:
      "AEO (Answer Engine Optimization) and GEO get your business cited inside AI answers - ChatGPT, Perplexity and Google AI Overviews - instead of just ranking a blue link. With around a third of people now using AI search and most queries ending without a click, being in the answer is fast becoming the visibility that matters.",
  },
  {
    question: "How is this different from the SEO built into a website?",
    answer:
      "A website build ships with a one-time SEO and schema baseline - correct technical foundations so the site launches search-ready. This service is the ongoing growth on top of that: continuous content, authority building, AI-search work, CRO and monthly measurement. Foundation is one-time; growth is a continuous practice. Because we did the foundation, growth starts without a retrofit.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Honestly, it depends on your starting point and market. Technical and on-page fixes can show within weeks; meaningful organic movement usually takes 3 to 6 months; durable authority compounds over 6 to 12. AI-search citations can appear faster for well-structured, freshly-indexed pages. We report monthly from day one, so you're never guessing.",
  },
  {
    question: "What do I actually get each month?",
    answer:
      "A defined scope, not a vague retainer - typically technical-SEO monitoring and fixes, a set amount of content and on-page work, authority and AI-search structuring, plus a transparent monthly report showing exactly what we did and what moved. You see the work; there's no black box.",
  },
  {
    question: "Can you prove results when you have no case study yet?",
    answer:
      "We won't show you a client traffic chart we haven't earned. Our proof is this website: run Lighthouse on it, validate its schema in Google's Rich Results Test, see the answer-first structure. It's the exact discipline we'd apply to your site - measurable, in front of you, right now.",
  },
  {
    question: "Do you guarantee a #1 ranking?",
    answer:
      "No, and anyone who does is a red flag. No one controls Google's algorithm - Google's own guidance warns to beware SEOs who guarantee rankings, and guaranteed-ranking offers usually rely on tactics that get sites penalized. We guarantee the quality of the work, full transparency and honest reporting - we control the inputs, not Google's output.",
  },
  {
    question: "How do you measure and report?",
    answer:
      "With a live dashboard and a plain-language monthly report tied to real outcomes - organic and AI-referral sessions, conversions, pages indexed and cited, Core Web Vitals and topic-cluster progress. We deliberately avoid vanity metrics like raw impressions, follower counts or Domain Authority, and we tell you honestly when something underperforms and how we'll fix it.",
  },
  {
    question: "Is a small senior team really enough?",
    answer:
      "For organic growth, yes - it rewards judgment and consistency over headcount. The person who audits your site does the work, with no junior handoff or account-manager telephone game. We take on a limited number of engagements deliberately, so each gets senior attention.",
  },
  {
    question: "What does organic digital marketing cost?",
    answer:
      "Start with a fixed-price Marketing Audit from $200 (credited toward your first month), which ends in a recommended monthly plan scoped to your goals with a from price you approve before we start. Plans are month-to-month with no annual lock-in. We publish the entry price and scope the rest honestly, rather than hiding behind a quote wall.",
  },
  {
    question: "Can you do a one-off audit or fix on a tight budget?",
    answer:
      "Yes. Not everything needs a retainer - a standalone audit, a one-time technical-SEO pass or a single AI-search structuring pass can be a small, focused job. Tell us what you have in mind and your budget, and we'll scope an honest fixed price.",
  },
];

export function MarketingFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Organic marketing, answered" />
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
