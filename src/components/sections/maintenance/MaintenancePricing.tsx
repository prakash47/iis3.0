import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow, IconCheck } from "@/components/icons";
import { websiteMaintenanceTiers, websiteAuditTier } from "@/content/pricing";

// Website maintenance is a productized retainer, so - unlike the bespoke pages -
// this IS a published monthly tier table (the transparent, on-brand move). Three
// ascending monthly care plans + a one-time health audit on-ramp for sites we
// did not build. Prices are byte-identical to the shared source + the Offer schema.
export function MaintenancePricing() {
  return (
    <Section id="pricing" className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Care plans"
            title="How much does website maintenance cost?"
            sub="Published plans, month-to-month, no quote wall and no lock-in. Pick a plan for a site we look after every month, or start with a one-time health audit if you're not ready to commit. Prices in USD."
          />
        </Reveal>

        {/* Three monthly care plans */}
        <Reveal group className="mt-10 grid gap-5 lg:grid-cols-3">
          {websiteMaintenanceTiers.map((tier) => (
            <div
              key={tier.name}
              className={`card relative flex flex-col p-6 ${tier.best ? "glow-border ring-1 ring-brand-400/40" : ""}`}
            >
              {tier.best && (
                <span className="absolute -top-3 left-6 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  Recommended
                </span>
              )}
              <h3 className="font-display text-lg font-bold text-foreground">{tier.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{tier.for}</p>
              <div className="mt-5">
                <span className="font-display text-4xl font-bold text-foreground">{tier.from}</span>
                <span className="text-sm text-muted-foreground">/mo</span>
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
              <Button href="/contact" variant={tier.best ? "primary" : "outline"} className="mt-6">
                Start {tier.name}
              </Button>
            </div>
          ))}
        </Reveal>

        {/* One-time health audit on-ramp (sites we didn't build) */}
        <Reveal className="mt-6">
          <div className="card relative overflow-hidden p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Didn&apos;t build it with us? Start with a {websiteAuditTier.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A one-time, fixed-price health check for any live site, on any stack. We audit
                  first because we won&apos;t blindly promise to keep a codebase healthy we&apos;ve
                  never seen - then you can roll onto a care plan if you want ongoing care.
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {websiteAuditTier.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 lg:text-right">
                <div>
                  <span className="text-sm text-muted-foreground">from </span>
                  <span className="font-display text-4xl font-bold text-foreground">{websiteAuditTier.from}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{websiteAuditTier.timeline}</p>
                <Button href="/contact" className="mt-4">
                  Book a health audit
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Every plan is month-to-month with no lock-in, and you keep full ownership of your site
            and accounts. Not sure which plan fits, or need something bigger?{" "}
            <Link href="/contact" className="font-medium text-brand-500 hover:text-brand-600">
              Tell us about your site
            </Link>{" "}
            and we&apos;ll recommend the right level honestly.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
