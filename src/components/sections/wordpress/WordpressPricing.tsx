import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/icons";
import { webDesignDevTiers, carePlanFrom } from "@/content/pricing";

// A WordPress site is priced by the same published web tiers - single source of truth,
// byte-identical prices + Offer schema. Publishing numbers is THE differentiator on a SERP
// where ~90% of WordPress agencies hide price behind a quote wall.
// CRITICAL: we deliberately do NOT render tier.includes here - the shared bullets contain
// "Perfect-Lighthouse performance" (a fabricated-CWV landmine on WordPress), "Next.js + CMS"
// and "Headless Shopify or Next.js commerce" (off-brand / ecommerce mis-route). We show
// name/from/timeline/for only, so those strings never surface on a WordPress page. WordPress's
// hub is web-dev, and its natural pairing is the maintenance care plans (heavy cross-link).
export function WordpressPricing() {
  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent WordPress pricing"
            sub="No quote wall - unlike almost every WordPress agency. A WordPress site is priced by our published web tiers, the same numbers everywhere on this site, and ongoing care is a published monthly plan. You see the price before you commit."
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

        {/* Tier mapping + WooCommerce route + the heavy care-plan cross-link (WP's natural pairing) */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              How WordPress maps to the tiers - and why care plans matter
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A brochure or content site is a Starter or Launch Sprint, a larger multi-section
              marketing site is a Growth Site, and a WordPress store lands on the Commerce Sprint -
              though selling online is really{" "}
              <Link href="/technologies/woocommerce" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                WooCommerce
              </Link>
              , on its own page. Ongoing updates, security and backups are separate, on published{" "}
              <Link href="/services/website-maintenance-services" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                monthly care plans
              </Link>{" "}
              from {carePlanFrom}, plus a one-time Website Health Audit from $100 - because WordPress
              is living software that needs real maintenance, not launch-and-forget.
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
              web design &amp; development service
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
