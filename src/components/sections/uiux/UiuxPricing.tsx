import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow, IconCheck } from "@/components/icons";
import { uiUxDesignTiers } from "@/content/pricing";

// Design is bespoke, so this is NOT a fixed price-tier table. It publishes low,
// fixed-price ENTRY DOORS - "prove-it-cheaply" starting points - then the full
// engagement is scoped into a fixed quote afterwards. Prices are byte-identical
// to the shared pricing source and mirrored in the Offer schema on this page.
const afterDoor = [
  { t: "You always see a fixed price", d: "Full product design, complete design systems and full brand identities are scoped into a fixed quote after the audit or sprint - never open-ended hourly billing." },
  { t: "You own every file", d: "Editable Figma, tokens and IP transfer to you - with no lock-in and no license back to us." },
  { t: "Priced by scope, never hidden", d: "The number moves with screens, states and research depth - and we show you exactly what drives it." },
];

export function UiuxPricing() {
  return (
    <Section id="pricing" className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we price"
            title="How much does UI/UX design cost?"
            sub="Design is scoped, not guessed. A quick UX audit and a full design system are not tiers of one thing, so we don't pretend to a single price - and we don't hide behind a quote wall either. You start with a low, fixed-price door, see the work, then we scope the rest to a fixed number."
          />
        </Reveal>

        {/* The three fixed-price entry doors */}
        <Reveal group className="mt-10 grid gap-5 lg:grid-cols-3">
          {uiUxDesignTiers.map((tier) => (
            <div key={tier.name} className="card relative flex flex-col p-6">
              <h3 className="font-display text-lg font-bold text-foreground">{tier.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{tier.for}</p>
              <div className="mt-5">
                <span className="text-sm text-muted-foreground">from </span>
                <span className="font-display text-4xl font-bold text-foreground">{tier.from}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{tier.timeline}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {tier.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-5">
          <Button href="/contact">
            Start with a UX/UI Audit
            <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
        </Reveal>

        {/* What happens beyond the entry door */}
        <Reveal group className="mt-8 grid gap-4 sm:grid-cols-3">
          {afterDoor.map((d) => (
            <div key={d.t} className="card p-5">
              <h3 className="font-display text-sm font-semibold text-foreground">{d.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d.d}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Need the site or app designed <em>and</em> built as one fixed-price project?{" "}
            <Link href="/services/web-design-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              See web design &amp; development pricing
            </Link>
            . Not sure which door fits? Tell us what you&apos;re working on and your budget, and
            we&apos;ll point you to the smallest step that moves you forward.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
