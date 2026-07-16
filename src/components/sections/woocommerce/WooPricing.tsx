import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/icons";
import { webDesignDevTiers, carePlanFrom } from "@/content/pricing";

// A WooCommerce store is priced by the same published web tiers - single source of truth,
// byte-identical prices + Offer schema. The Commerce Sprint from $7,000 is a LOCKED anchor: it is
// already published on WordpressPricing, WordpressProof and WordpressFaq ("a WooCommerce store
// lands on the Commerce Sprint"). Never propose another number.
//
// CRITICAL 1: we deliberately do NOT render tier.includes. The shared bullets contain
// "Perfect-Lighthouse performance" (a fabricated Core Web Vitals claim about a Woo store we have
// never built), "Next.js + CMS" and "Headless Shopify or Next.js commerce" - all wrong here.
// Same solution as WordpressPricing and ShopifyPricing: name / from / timeline / for only.
//
// CRITICAL 2: the mapping panel is MANDATORY. The tiers' own `for` copy describes non-store
// deliverables (Starter = "A single-page site or landing page"; MVP Sprint = "Pre-seed / seed
// founders"), so a bare five-tier grid silently implies "WooCommerce store from $300".
//
// CRITICAL 3: this panel carries care-plan link #4, and it MUST carry the portability clause with
// it. A care-plan line standing naked inside a PRICING panel is the one place the ownership-cost
// spine tips from honest disclosure into a retainer upsell. The cost is disclosed; who is paid for
// it is explicitly not the point.
export function WooPricing() {
  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent WooCommerce pricing"
            sub="No quote wall - unlike almost every WooCommerce agency. A WooCommerce store is priced by our published web tiers, the same numbers everywhere on this site. You buy your hosting and any paid extensions directly from those vendors, at their price, with no markup from us. You see the price before you commit."
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

        {/* The mandatory mapping panel: kills the "$300 WooCommerce store" implicature, names the
            tiers that are NOT stores, names the real running costs, and carries the care-plan link
            WITH the portability clause attached. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              How WooCommerce maps to the tiers - and the costs to plan for
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A WooCommerce store is the Commerce Sprint, from $7,000. A smaller store with a tight
              catalog can land on the Growth Site, from $4,000. The Starter and Launch Sprint tiers
              are simple marketing and content sites, and the MVP Sprint is a custom web-app build -
              none of those three is a WooCommerce store, and we won&apos;t sell you one as though it
              were. Two ongoing costs are real, and we&apos;d rather name them now than surprise you
              later. First, WooCommerce itself is free and open-source, so there is no platform
              subscription - but a self-hosted store still has running costs you pay directly: managed
              hosting, an SSL certificate, your payment gateway&apos;s per-transaction fees, and the
              annual licences for any premium extensions such as subscriptions, bookings or
              memberships. Second, upkeep. A self-hosted store is living software you own and must
              keep patched - core, theme, extensions and PHP - and that is true whether we do it, your
              team does it in-house, or you hand it to any other WordPress developer, because standard
              GPL WooCommerce is portable and never locked to us. We publish ours as{" "}
              <Link href="/services/website-maintenance-services" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                monthly care plans
              </Link>{" "}
              from {carePlanFrom}, plus a one-time Website Health Audit from $100, rather than a
              mystery retainer. And if never touching any of that is what you actually want, a{" "}
              <Link href="/technologies/shopify" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                hosted store on Shopify
              </Link>{" "}
              is the better call, and we&apos;ll say so before you commit.
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
