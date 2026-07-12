import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow, IconCheck } from "@/components/icons";
import { mobileAppDevTiers } from "@/content/pricing";

// FIRST spoke priced from mobileAppDevTiers rather than webDesignDevTiers. Copying the react or
// woocommerce page assembly would emit the wrong five WEB tiers ($300-$12,000) into this page's
// Offer schema. Two tiers only: Starter App $500, Mobile App Build $15,000. Both must be VISIBLE
// on the page or the Offer markup is spam. Never invent a middle "Mobile MVP" tier - it has been
// discussed and not set.
//
// THE BULLET DECISION, and why it is the OPPOSITE of WordPress/Shopify/WooCommerce.
// On those three we suppressed tier.includes because the bullets contained FABRICATIONS on those
// pages ("Perfect-Lighthouse performance" on a build we'd never shipped). Here every bullet is
// TRUE, is already published verbatim on the mobile money page, and is PROTECTIVE: "Up to a few
// screens, static or light content" and "Info / content, no complex backend" are precisely what
// stops the $500 tier from reading as a full React Native app. Suppressing them would remove the
// guardrail, not add one. The rule is: suppress fabrications, never inconvenient truths.
//
// The bullets name Flutter on a React Native page. That stays. It is true, it is byte-consistent
// with MobileFaq ("Both, chosen per project"), and the mapping panel explains it as honesty rather
// than confusion. We render ALL bullets - do NOT copy ReactPricing's includes.slice(0, 3), which
// would drop the protective fourth bullet and leave the Flutter mention leading the card.
export function RnPricing() {
  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="What a React Native app costs"
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

        {/* MANDATORY mapping panel. It kills the "a React Native app from $500" implicature, which
            a bare two-tier grid invites, and explains why Flutter appears in the bullets. It must
            not gesture at a middle tier. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              How React Native maps to the tiers - and what these tiers are not
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              On this page the cross-platform layer is React Native. Flutter still appears in the
              bullets above because we choose between the two per project and recommend the better fit
              in discovery, and we&apos;d rather show you that than hide it. The{" "}
              <span className="font-semibold text-foreground">Starter App from $500</span> is a
              genuinely simple, single-purpose app - a few screens, static or light content, no
              complex backend. Please don&apos;t read it as the price of a full React Native app,
              because it isn&apos;t. A real product-grade build - a backend and APIs, offline, push,
              real-device QA and both stores - is the{" "}
              <span className="font-semibold text-foreground">Mobile App Build from $15,000</span>.
              App Store and Google Play submission is included either way, and the store accounts are
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
            <Link href="/pricing" className="font-medium text-brand-500 hover:text-brand-600">
              pricing
            </Link>{" "}
            and our{" "}
            <Link href="/services/mobile-app-development" className="font-medium text-brand-500 hover:text-brand-600">
              mobile app development service
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
