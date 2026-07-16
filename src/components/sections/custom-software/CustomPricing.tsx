import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow, IconCheck } from "@/components/icons";
import { customSoftwareTiers } from "@/content/pricing";

// Custom software is scoped, not guessed - so this is NOT a fixed price-tier
// table. It publishes the honest, real anchor: a fixed-price Discovery Sprint
// (the anti-quote-wall move) that ends in a written scope + a FIXED build quote.
// The Discovery Sprint price is byte-identical to the shared pricing source.
const discovery = customSoftwareTiers[0];

const afterDiscovery = [
  { t: "A fixed build price", d: "Discovery ends in a fixed price for the build, which you approve before any code - never open-ended hourly billing." },
  { t: "Milestone-based payments", d: "Payments are tied to delivered, approved work - never 100% upfront." },
  { t: "You own the code, IP & data", d: "Full ownership transfers to you on final payment. No lock-in." },
];

export function CustomPricing() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we price"
            title="How much does custom software cost?"
            sub="Custom software is scoped, not guessed. Every system is different, so we don't pretend to a fixed price before we understand it - and we don't hide behind a quote wall either. Here's exactly how it works."
          />
        </Reveal>

        {/* The one honest, publishable anchor: a fixed-price Discovery Sprint */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1] flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Start with a {discovery.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A paid, fixed-price discovery that turns a vague idea into a written scope, an
                  architecture, and a fixed price for the build - and it&apos;s credited toward your
                  build. That&apos;s how a bespoke project gets a real price without a quote wall.
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {discovery.includes.map((inc) => (
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
                  <span className="font-display text-4xl font-bold text-foreground">{discovery.from}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{discovery.timeline}</p>
                <Button href="/contact" className="mt-4">
                  Start a Discovery Sprint
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* what happens after discovery */}
        <Reveal group className="mt-6 grid gap-4 sm:grid-cols-3">
          {afterDiscovery.map((d) => (
            <div key={d.t} className="card p-5">
              <h3 className="font-display text-sm font-semibold text-foreground">{d.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d.d}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Building a web-first SaaS MVP as your product front-end?{" "}
            <Link href="/services/web-design-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              See the MVP Sprint on web design &amp; development
            </Link>
            . Just automating one process or connecting two tools? That can be small - tell us your
            budget and we&apos;ll scope an honest fixed price.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
