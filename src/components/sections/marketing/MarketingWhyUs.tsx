import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";

// Concrete, checkable operating claims - never adjectives, never a fabricated
// result. The build-and-market integration + "the proof is this site" are the
// two honest levers a marketing-only agency cannot copy.
const reasons = [
  { t: "We build the site and run the SEO", d: "So the technical foundations, schema and content architecture are right from day one, not retrofitted." },
  { t: "The proof is this site", d: "Run Lighthouse and Rich Results on this page - the exact discipline we'd apply to yours, measurable now." },
  { t: "SEO and AI-search led", d: "Built for how people search in 2026 - Google AI Overviews, ChatGPT and Perplexity, not just ten blue links." },
  { t: "No vanity metrics", d: "We report outcomes tied to your goals - not impressions, follower counts or Domain Authority theatre." },
  { t: "No guaranteed rankings", d: "We're honest about what we control (the work) and what we don't (Google's algorithm). Anyone who guarantees a rank is a red flag.", link: { label: "See how we report", href: "#how-we-work" } },
  { t: "Senior, direct, month-to-month", d: "A registered company since 2016 - the person who audits your site does the work, and we earn the renewal each month." },
];

export function MarketingWhyUs() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why us"
            title="Why teams choose us for organic growth"
            sub="Six things you can check, not adjectives you have to trust."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.t} className="card flex flex-col p-6">
              <span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                <IconCheck className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{r.t}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
              {r.link && (
                <Link
                  href={r.link.href}
                  className="mt-4 inline-flex text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 dark:text-brand-400"
                >
                  {r.link.label}
                </Link>
              )}
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
