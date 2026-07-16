import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow, IconCheck } from "@/components/icons";
import { mobileAppDevTiers } from "@/content/pricing";

// Priced from mobileAppDevTiers, NOT webDesignDevTiers. Copying a web spoke's assembly would emit
// the wrong five web tiers ($300-$12,000) into this page's Offer schema. Two tiers only: Starter
// App $500, Mobile App Build $15,000. Both must be VISIBLE or the Offer markup is spam. Never
// invent a middle "Mobile MVP" tier - it has been discussed and never set.
//
// THE BULLET RULING (settled on the react-native page, applied here). On WordPress, Shopify and
// WooCommerce we suppressed tier.includes because the bullets were FABRICATIONS on those pages.
// Here every bullet is TRUE, already published verbatim on the mobile money page, and PROTECTIVE:
// "Up to a few screens, static or light content" and "Info / content, no complex backend" are
// precisely what stop the $500 tier reading as a full Flutter app. Suppressing them would remove
// the guardrail. The standing rule is: SUPPRESS FABRICATIONS, NEVER INCONVENIENT TRUTHS.
//
// The bullets name React Native FIRST, on a Flutter page. That stays, by exactly the logic that
// let Flutter appear on the React Native page: it is true, it is byte-consistent with MobileFaq's
// "Both, chosen per project", and pricing.ts is a shared single source of truth - reordering it to
// put Flutter first would silently corrupt the money page and the react-native page. The mapping
// panel converts it from confusion into honesty. Do NOT copy ReactPricing's includes.slice(0, 3).
//
// Language discipline: "a Flutter app", never "our Flutter app". We have shipped none.
export function FlutterPricing() {
  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="What a Flutter app costs"
            sub="No quote wall. These are our two published mobile app prices - the same numbers on our pricing page, on our mobile service page and in our schema. You see them before you commit, and you pay against delivered milestones, never all upfront."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-5 sm:grid-cols-2">
          {mobileAppDevTiers.map((tier) => (
            <div key={tier.name} className="card relative flex flex-col p-6">
              <h3 className="font-display text-lg font-bold text-foreground">{tier.name}</h3>
              <div className="mt-3">
                <span className="text-xs text-muted-foreground">from </span>
                <span className="font-display text-4xl font-bold text-foreground">{tier.from}</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{tier.timeline}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tier.for}</p>
              <ul className="mt-5 flex-1 space-y-2 border-t border-border pt-5">
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

        {/* MANDATORY mapping panel. It kills the "a Flutter app from $500" implicature that a bare
            two-tier grid invites, and explains why React Native appears in the bullets. It must not
            gesture at a middle tier. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              How Flutter maps to the tiers - and what these tiers are not
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              On this page the cross-platform layer is Flutter. React Native still appears in the
              bullets above because we choose between the two per project and recommend the better fit
              in discovery, and we&apos;d rather show you that than hide it. The{" "}
              <span className="font-semibold text-foreground">Starter App from $500</span> is a
              genuinely simple, single-purpose app - a few screens, static or light content, no
              complex backend. Please don&apos;t read it as the price of a full Flutter app, because it
              isn&apos;t. A real product-grade build - a design system, a backend and APIs,
              accessibility, real-device QA and both stores - is the{" "}
              <span className="font-semibold text-foreground">Mobile App Build from $15,000</span>. App
              Store and Google Play submission is included either way, and the store accounts are
              registered in your name. Sitting somewhere between the two, or validating an idea before
              you commit? Tell us the idea and your budget, and we&apos;ll scope one honest fixed price
              in a short discovery, in writing, before any build begins.
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
            <Link href="/services/mobile-app-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              mobile app development service
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
