import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/icons";
import { webDesignDevTiers } from "@/content/pricing";

// An Astro content site is priced by the same published web tiers used everywhere else - single
// source of truth, byte-identical Offer schema (300/1500/4000/7000/12000). CRITICAL: render
// name/from/timeline/for ONLY, never tier.includes - those bullets carry "Next.js + CMS",
// "Headless Shopify or Next.js commerce" (cross-stack contradictions on an Astro page) AND
// "Perfect-Lighthouse performance" (a fabricated-CWV landmine on a page whose whole discipline
// forbids Lighthouse/CWV numbers). This is the WordPress/Shopify/Woo/PHP suppression, NOT the
// Laravel slice(0,3) leak. A content/marketing site maps cleanly to Starter/Launch/Growth. No
// Discovery Sprint routing (Astro sites are content-shaped, priced by the web tiers, not bespoke
// systems); ongoing content + SEO growth routes to digital-marketing.
export function AstroPricing() {
  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="What an Astro content site costs"
            sub="No quote wall. An Astro site is priced by our published web tiers - the same numbers on our pricing page and everywhere else. A content or marketing site maps directly onto them, and you always see the price before you commit."
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

        {/* Mapping panel - a content/marketing site maps to the lower tiers; a bigger platform
            or migration is scoped; ongoing content + SEO growth is a marketing service. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              How an Astro site maps to these numbers
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A landing page or small marketing site sits at the Starter or Launch tier; a fuller
              content site, blog or docs site lands around the Growth tier. A large content platform,
              or a migration of an existing site onto Astro, is scoped as part of our{" "}
              <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
                web design and development service
              </Link>
              . And if what you need is to keep publishing and grow the site&apos;s search traffic over
              time, that is our{" "}
              <Link href="/services/digital-marketing" className="font-medium text-brand-500 hover:text-brand-600">
                organic digital marketing service
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
