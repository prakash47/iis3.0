import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow, IconCheck } from "@/components/icons";
import { webDesignDevTiers } from "@/content/pricing";

// An Angular app is priced by the same published web tiers used on /pricing and
// the web-dev money page - single source of truth, byte-identical. Publishing real
// numbers is a category differentiator: the Angular SERP hides price behind hourly
// rates or "contact us". Enterprise builds tend to land in the upper tiers.
export function AngularPricing() {
  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="What an Angular app costs"
            sub="Almost every Angular agency hides price behind an hourly rate or 'contact us'. We don't. An Angular build is priced by our published web tiers - the same numbers everywhere. Enterprise apps and migrations usually land in the upper tiers, and anything larger gets a scoped fixed quote."
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
            <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
              web design &amp; development service
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
