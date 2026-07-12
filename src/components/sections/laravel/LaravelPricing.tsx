import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow, IconCheck } from "@/components/icons";
import { webDesignDevTiers, customSoftwareTiers } from "@/content/pricing";

// A Laravel build is priced by the same published web tiers used on /pricing and the
// web-dev money page - single source of truth, byte-identical. Publishing real numbers
// is a category-break on a SERP where every Laravel agency hides price behind a quote
// wall. HONEST routing: a web app/SaaS lands at the upper tiers; a bespoke system/API ->
// custom-software Discovery Sprint. The web-dev in-body link is the first-class secondary
// hub (Laravel is full-stack-web). No invented Laravel prices.
const discoverySprint = customSoftwareTiers[0];

export function LaravelPricing() {
  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="What Laravel development costs"
            sub="No quote wall. A Laravel build is priced by our published web tiers - the same numbers on our pricing page and everywhere else. A web app or SaaS usually lands at the upper tiers; a bespoke system or API is scoped up front. You always see the price before you commit."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {webDesignDevTiers.map((tier) => (
            <div
              key={tier.name}
              className={`card relative flex flex-col p-5 ${tier.best ? "glow-border ring-1 ring-brand-400/40" : ""}`}
            >
              {tier.best && (
                <span className="absolute -top-3 left-5 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  Recommended
                </span>
              )}
              <h3 className="font-display text-base font-bold text-foreground">{tier.name}</h3>
              <div className="mt-3">
                <span className="text-xs text-muted-foreground">from </span>
                <span className="font-display text-3xl font-bold text-foreground">{tier.from}</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{tier.timeline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{tier.for}</p>
              <ul className="mt-4 space-y-1.5">
                {tier.includes.slice(0, 3).map((inc) => (
                  <li key={inc} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                    <IconCheck className="mt-0.5 h-3 w-3 shrink-0 text-emerald-500" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        {/* Honest routing for bespoke SaaS/systems + the full-build web-dev secondary */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              Pricing a SaaS platform, portal or standalone API?
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A Laravel web app usually lands at the upper tiers. A bespoke SaaS platform, portal or
              standalone API is genuinely scoped work, so it enters through our{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
                custom software Discovery Sprint
              </Link>{" "}
              from {discoverySprint.from}, which ends in a written scope and a fixed build quote. And
              if you need the broader web build - design, content and front end together - that&apos;s
              our{" "}
              <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
                web design and development service
              </Link>
              .
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button href="/contact">
            Get a fixed quote
            <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
          <p className="text-sm text-muted-foreground">
            See full package details on{" "}
            <Link href="/pricing" className="font-medium text-brand-500 hover:text-brand-600">
              pricing
            </Link>{" "}
            and our{" "}
            <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
              custom software service
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
