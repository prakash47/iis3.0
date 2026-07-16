import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/icons";
import { webDesignDevTiers, carePlanFrom } from "@/content/pricing";

// A Shopify store is priced by the same published web tiers - single source of truth,
// byte-identical prices + Offer schema. Publishing numbers is THE differentiator on a SERP
// where Shopify agencies either hide price behind "contact us" or quote a vague range.
//
// CRITICAL 1: we deliberately do NOT render tier.includes here. The shared bullets contain
// "Perfect-Lighthouse performance" (a fabricated Core Web Vitals claim about a Shopify build we
// have never shipped - the sharpest trap on this page), plus "Next.js + CMS". The Commerce
// tier's "Headless Shopify or Next.js commerce" bullet is actually on-topic here, but rendering
// includes for one tier and not the others is inconsistent, and rendering them all re-introduces
// the fabricated CWV claim. So: name / from / timeline / for only, exactly as WordpressPricing.
//
// CRITICAL 2: the mapping panel below is MANDATORY, and this page needs it more than WordPress
// did. The rendered `for` copy on the non-Commerce tiers describes non-Shopify deliverables
// (Starter "a single-page site or landing page", MVP Sprint "Pre-seed / seed founders"). On a
// Shopify page the raw five-tier grid would silently imply "Shopify store from $300". The panel
// says plainly which tiers are not stores, and routes that buyer away from Shopify entirely.
export function ShopifyPricing() {
  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent Shopify pricing"
            sub="No quote wall - unlike almost every Shopify agency. A Shopify store is priced by our published web tiers, the same numbers everywhere on this site, and ongoing care is a published monthly plan. You pay Shopify and any app vendors directly, at their price, with no markup from us. You see the price before you commit."
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

        {/* The mandatory mapping panel: kills the "$300 Shopify store" implicature, names the
            tiers that are NOT stores, and routes the no-store buyer away from Shopify. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              How Shopify maps to the tiers - and what these tiers are not
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A Shopify store is the Commerce Sprint, from $7,000. A smaller storefront with a tight
              catalog can land on the Growth Site, from $4,000. The Starter and Launch Sprint tiers are
              simple marketing and content sites, and the MVP Sprint is a custom web-app build - none of
              those three is a Shopify store, and we won&apos;t sell you one as though it were. If a
              marketing site with a buy button or two is all you actually need, paying for Shopify is
              overkill, and a{" "}
              <Link href="/technologies/nextjs" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                custom Next.js build
              </Link>{" "}
              is the leaner call. Ongoing work is separate: a live store needs app, theme and content
              attention, so we run it on published{" "}
              <Link href="/services/website-maintenance-services" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                monthly care plans
              </Link>{" "}
              from {carePlanFrom}, plus a one-time Website Health Audit from $100. Your Shopify
              subscription and any app subscriptions are billed to you by Shopify and the app vendors,
              never through us.
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
              web design &amp; ecommerce development service
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
