import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/icons";
import { webDesignDevTiers, carePlanFrom } from "@/content/pricing";

// A Drupal build - the content model, the governance, the theme or a decoupled front end - is priced by
// the same published web tiers, byte-identical Offer schema (300/1500/4000/7000/12000). CRITICAL: render
// name/from/timeline/for ONLY, never tier.includes - those bullets carry "Next.js + CMS", "Headless
// Shopify or Next.js commerce" and "Perfect-Lighthouse performance" (a fabricated-CWV landmine on a build
// we have not shipped). WordPress/Astro/Sanity/Strapi/Contentful suppression. The mapping panel cross-
// links website-maintenance-services care plans (Drupal, like WordPress, is self-hosted and needs ongoing
// security updates - the WordPress pattern). No pricing figures as stats.
export function DrupalPricing() {
  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent Drupal pricing"
            sub="No quote wall. A Drupal build - the content model, the governance setup, and a traditional or decoupled front end - is priced by our published web tiers, the same numbers as everywhere else. You always see the price before you commit."
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

        {/* Mapping panel - what maps to the tiers, plus the self-hosted-care honesty (care plans). */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              How Drupal maps to our tiers - and why care plans matter
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A content or marketing site on Drupal maps to the Starter, Launch or Growth tier by scope; a
              larger structured platform, a complex governance model, or a Drupal 7 migration is scoped as
              part of our{" "}
              <Link href="/services/web-design-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                web design and development service
              </Link>
              . One honest note: Drupal is self-hosted, so it needs ongoing security updates, dependency
              upkeep and backups. We keep a build current on a{" "}
              <Link href="/services/website-maintenance-services" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                care plan from {carePlanFrom}
              </Link>
              , or hand you a documented site any competent Drupal team can maintain. You pay for your own
              hosting directly; we take no markup on it.
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
            <Link href="/services/web-design-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              web development service
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
