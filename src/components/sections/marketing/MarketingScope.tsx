import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";

// SEO + AEO/GEO are the spine; content, social, email and CRO are the
// amplification layer; analytics is the through-line. Presented as one system,
// not a menu. AEO/GEO is featured - the 2026 wedge a technical shop can own.
const services = [
  { t: "AEO / AI-search (GEO)", d: "Get cited inside ChatGPT, Perplexity and Google AI Overviews - schema, llms.txt, entity clarity and answer-first content.", featured: true },
  { t: "Technical SEO", d: "Crawlability, indexation, site architecture and Core Web Vitals - the foundation everything else compounds on." },
  { t: "On-page & content SEO", d: "Titles, structure, internal links, topic clusters and content mapped to real search intent." },
  { t: "Content marketing", d: "Strategy, pillar and cluster content, and refresh cycles that fuel both search and AI-answer visibility." },
  { t: "Off-page authority", d: "Earned mentions and brand-entity building - because AI answers reward mentions, not just backlinks." },
  { t: "Organic social media", d: "Organic strategy, content and community that amplify reach and AI visibility - no ad buying." },
  { t: "Email marketing", d: "Campaigns, newsletters and lifecycle automation - the owned audience you actually control." },
  { t: "Conversion optimization (CRO)", d: "Landing-page and funnel work - and because we build, we change the site, not just recommend it." },
  { t: "Analytics & reporting", d: "GA4, Search Console and AI-visibility tracking, in a transparent monthly report. No vanity metrics." },
];

export function MarketingScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="One organic growth system, not a menu of tactics"
            sub="SEO and AI-search are the spine; content, social, email and CRO amplify it; analytics keeps it honest. It works as one connected loop:"
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.t}
              className={
                "card flex flex-col p-5 " +
                (s.featured ? "border-brand-500/40 ring-1 ring-brand-500/20" : "")
              }
            >
              {s.featured && (
                <span className="mb-2 inline-flex w-fit rounded-full bg-brand-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                  The 2026 wedge
                </span>
              )}
              <h3 className="font-display text-base font-semibold text-foreground">{s.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </Reveal>

        {/* Boundary vs the web build's one-time SEO baseline */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              Foundation vs growth
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Every site we build ships with an SEO and schema baseline - the one-time technical
              foundation that makes a site findable from day one (that&apos;s part of{" "}
              <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
                web design &amp; development
              </Link>
              ). This is the ongoing growth on top of it. If we built your site, we start growing
              on day one instead of fixing foundations. If we didn&apos;t, we start with an audit.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Looking for the paid half - Google Ads and paid social?{" "}
              <Link href="/services/performance-marketing" className="font-medium text-brand-500 hover:text-brand-600">
                See performance marketing
              </Link>
              . Organic compounds; paid buys speed - most teams run both.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
