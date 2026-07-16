import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow, IconCheck } from "@/components/icons";
import { webDesignDevTiers, customSoftwareTiers } from "@/content/pricing";

// A Python build is priced by the same published web tiers used on /pricing and the
// web-dev money page - single source of truth, byte-identical. Publishing real numbers
// obliterates the competitor set (every Python agency page hides price behind a quote
// wall). HONEST routing: a Python web app lands at the upper tiers; data/ML/standalone
// systems -> custom-software Discovery Sprint; AI PRODUCTS -> ai-development
// (requirement-based, NO price). Never imply a cheap tier "buys" an ML system.
const discoverySprint = customSoftwareTiers[0];

export function PythonPricing() {
  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="What Python development costs"
            sub="No quote wall. A Python build is priced by our published web tiers - the same numbers on our pricing page and everywhere else. A backend or web app usually lands at the upper tiers; data, ML and standalone systems are scoped up front. You always see the price before you commit."
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

        {/* Honest routing for data/ML/standalone work - keeps "a cheap tier buys an
            ML system" off the table and fires the two boundary links. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              Pricing a data pipeline, ML system or standalone API?
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A Python web app lands at the upper tiers. A standalone API, a data pipeline or an
              ML-integration system is genuinely bespoke, so it&apos;s scoped through our{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                custom software Discovery Sprint
              </Link>{" "}
              from {discoverySprint.from}, which ends in a written scope and a fixed build quote. And a
              finished AI product is requirement-based on our{" "}
              <Link href="/services/ai-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                AI development service
              </Link>{" "}
              - never a fixed tier. No published tier &quot;buys&quot; a machine-learning system: an
              ML or data build is scoped to what it actually takes, up front and in writing.
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
