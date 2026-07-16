import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/icons";
import { webDesignDevTiers, customSoftwareTiers } from "@/content/pricing";

// A PHP web build is priced by the same published web tiers used everywhere else - single
// source of truth, byte-identical Offer schema (300/1500/4000/7000/12000). CRITICAL: render
// name/from/timeline/for ONLY, never tier.includes - those bullets carry "Next.js + CMS" and
// "Headless Shopify or Next.js commerce" (cross-stack contradictions on a raw-PHP page) plus a
// "Perfect-Lighthouse" fabricated-CWV landmine. This is the WordPress/Shopify/Woo suppression,
// NOT the Laravel page's slice(0,3) leak. The mapping panel is mandatory: the bare tier `for`
// strings are marketing/e-commerce framed, so a plain grid would imply "custom PHP from $300".
// Most PHP work is legacy and genuinely scoped, so it routes to the Discovery Sprint; ongoing
// upkeep routes to website-maintenance (not web-dev). No invented PHP prices.
const discoverySprint = customSoftwareTiers[0];

export function PhpPricing() {
  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="What custom PHP and legacy modernization cost"
            sub="No quote wall. A PHP web build is priced by our published web tiers - the same numbers on our pricing page and everywhere else. Most PHP work, though, is legacy: a rescue, an upgrade or a modernization of code you already own, which is genuinely scoped rather than dropped into a tier. You always see the price before you commit."
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
            </div>
          ))}
        </Reveal>

        {/* Mandatory mapping panel - a bare grid would imply "custom PHP from $300". */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              How PHP work maps to these numbers
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              These tiers price a PHP web build the same way we price any web build - a small tool or
              endpoint sits at the low end, a fuller custom PHP application at the upper tiers. But a
              legacy rescue, a version upgrade or a modernization is genuinely scoped work, not a
              fixed tier, so it enters through our{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                custom software Discovery Sprint
              </Link>{" "}
              from {discoverySprint.from}, which ends in a written scope and a fixed build quote. And
              ongoing upkeep of an existing PHP codebase - updates, patches and small fixes - runs on
              a{" "}
              <Link href="/services/website-maintenance-services" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                website maintenance care plan
              </Link>
              , not a fresh build.
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
            <Link href="/pricing" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              pricing
            </Link>{" "}
            and our{" "}
            <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              custom software service
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
