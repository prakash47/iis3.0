import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow, IconCheck } from "@/components/icons";
import { digitalMarketingTiers } from "@/content/pricing";

// Organic marketing is scoped per client, so - like custom software - it is
// priced through a fixed-price entry AUDIT (the honest, publishable anchor),
// then a monthly plan scoped to the client's goals. The audit price is
// byte-identical to the shared pricing source.
const audit = digitalMarketingTiers[0];

const afterAudit = [
  { t: "A monthly plan scoped to you", d: "The audit ends in a recommended plan with a real scope and a from price - you approve it before we start." },
  { t: "Month-to-month, no lock-in", d: "No forced annual contract. We earn the renewal every month with the work and the reporting." },
  { t: "Transparent, no vanity metrics", d: "A live dashboard and a plain-language monthly report tied to real outcomes, not impressions." },
];

export function MarketingPricing() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we price"
            title="How much does digital marketing cost?"
            sub="Start with an audit, not a contract. Every site and market is different, so we don't quote a monthly number before we understand yours - and we don't hide behind a quote wall either. Here's how it works."
          />
        </Reveal>

        {/* The honest, publishable anchor: a fixed-price audit */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1] flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Start with a {audit.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A fixed-price audit of your SEO, content and AI-search readiness that ends in
                  prioritized fixes and a recommended monthly plan - yours to keep even if you never
                  continue, and credited toward your first month if you do.
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {audit.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 lg:text-right">
                <div>
                  <span className="text-sm text-muted-foreground">from </span>
                  <span className="font-display text-4xl font-bold text-foreground">{audit.from}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{audit.timeline}</p>
                <Button href="/contact" className="mt-4">
                  Book your audit
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal group className="mt-6 grid gap-4 sm:grid-cols-3">
          {afterAudit.map((d) => (
            <div key={d.t} className="card p-5">
              <h3 className="font-display text-sm font-semibold text-foreground">{d.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d.d}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Just want your foundations checked, or one thing fixed - a technical pass or an
            AI-search structuring pass? That can be small - tell us your budget and we&apos;ll scope
            an honest fixed price. See our{" "}
            <Link href="/pricing" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              transparent pricing
            </Link>{" "}
            for the rest.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
