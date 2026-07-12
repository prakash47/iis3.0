import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/icons";
import { webDesignDevTiers } from "@/content/pricing";

// A Sanity build - the content model, the Studio, the GROQ layer and a Next.js/Astro front end - is
// priced by the same published web tiers, byte-identical Offer schema (300/1500/4000/7000/12000).
// CRITICAL: render name/from/timeline/for ONLY, never tier.includes - those bullets carry "Next.js +
// CMS", "Headless Shopify or Next.js commerce" and "Perfect-Lighthouse performance" (a fabricated-CWV
// landmine on a build we have not shipped). WordPress/Astro/PHP suppression, NOT the Laravel slice(0,3)
// leak. The mapping panel states the client pays Sanity DIRECTLY for the Content Lake (no markup) - the
// hosted-SaaS honesty. No pricing figures as stats.
export function SanityPricing() {
  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="What a Sanity build costs"
            sub="No quote wall. A Sanity build - the content model, the Studio, the data layer and a Next.js or Astro front end - is priced by our published web tiers, the same numbers as everywhere else. You always see the price before you commit."
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

        {/* Mapping panel - what maps to the tiers, and the hosted-SaaS honesty (client pays Sanity). */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              How a Sanity build maps to these numbers
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A content or marketing site on Sanity with a Next.js or Astro front end maps to the Starter,
              Launch or Growth tier by scope; a larger content platform, a bespoke Studio, or a migration
              onto Sanity is scoped as part of our{" "}
              <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
                web design and development service
              </Link>
              . One honest note on cost: our fee is for the build. The Content Lake is Sanity&apos;s hosted
              service, billed by Sanity on a free-then-usage-based plan, and you pay Sanity directly for it -
              we take no markup. We help you model editor headcount and traffic up front so there are no
              surprises.
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
            <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
              web development service
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
