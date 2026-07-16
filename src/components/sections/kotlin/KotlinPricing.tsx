import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow, IconCheck } from "@/components/icons";
import { mobileAppDevTiers } from "@/content/pricing";

// Priced from mobileAppDevTiers (Starter App $500, Mobile App Build $15,000), NOT webDesignDevTiers.
// Both tiers must be VISIBLE (Offer integrity). Never invent a middle tier.
//
// RENDER ALL BULLETS (mirror SwiftuiPricing; do NOT slice). The bullets are TRUE and PROTECTIVE, and
// they literally read "Cross-platform (React Native or Flutter)" and "no complex backend" - written
// for cross-platform pricing. On a NATIVE-ANDROID page the mapping panel must (i) reconcile that
// cross-platform bullet, (ii) state native Android sits AT or ABOVE the $15,000 tier because native is
// the pricier route, and (iii) state the $500 Starter is emphatically NOT a native app.
export function KotlinPricing() {
  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="What a native Android app costs"
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

        {/* MANDATORY mapping panel. Reconciles the cross-platform wording on a native page, makes the
            native-is-the-pricier-route point explicit, and kills the "a native Android app from $500"
            implicature. It must not gesture at a middle tier. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              How native Android maps to these tiers - and what they are not
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A fair heads-up: these are our two published <span className="font-semibold text-foreground">mobile</span>{" "}
              prices, and their bullets name cross-platform, React Native and Flutter, because
              cross-platform is the more common and lower-cost route - we&apos;d rather show you that than
              hide it. Native Android in Kotlin is the pricier path, not the cheaper one: a real,
              product-grade native build - screens, data, the Android SDKs it integrates, a backend,
              real-device QA across the landscape and Play Store submission - sits at or above the{" "}
              <span className="font-semibold text-foreground">Mobile App Build from $15,000</span>, because
              a fully native app is more work than a shared cross-platform codebase, not less. The{" "}
              <span className="font-semibold text-foreground">Starter App from $500</span> is a genuinely
              simple, single-purpose app - a few screens, static or light content, no complex backend -
              and it is emphatically <span className="font-semibold text-foreground">not</span> a native
              Kotlin app; please don&apos;t read it as one. Play Store submission is included, and the
              Google Play Developer account is registered in your name. The honest way to a real number is
              a short discovery: tell us the app and your budget and we&apos;ll scope one fixed price, in
              writing, before any build begins.
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
