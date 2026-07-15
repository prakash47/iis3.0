import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconTrendingUp, IconCode, IconPin } from "@/components/icons";

const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own the ad accounts" },
  { icon: <IconTag className="h-4 w-4" />, label: "Zero markup on your spend" },
  { icon: <IconTrendingUp className="h-4 w-4" />, label: "Flat fee, not % of spend" },
];

const glance = [
  { icon: <IconTrendingUp className="h-4 w-4" />, k: "Channels", v: "Google Ads, Meta, LinkedIn, TikTok & more" },
  { icon: <IconTag className="h-4 w-4" />, k: "Fee", v: "Flat monthly - never % of spend" },
  { icon: <IconCode className="h-4 w-4" />, k: "Ad spend", v: "You pay the platforms directly" },
  { icon: <IconPin className="h-4 w-4" />, k: "Serves", v: "US, UK, UAE, EU & India" },
];

/**
 * Performance-marketing (paid media) hero. The tightest-trust page: no ROAS to
 * show, and unlike the digital-marketing page our own site can't prove paid
 * skill - so the wedge is the MODEL (ownership, no markup, flat fee, revenue
 * reporting). Number-free at brand level. No Lighthouse, no results claims.
 */
export function PerfHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Performance marketing</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Performance marketing{" "}
                <span className="gradient-text">without the agency games.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService runs performance marketing and PPC - Google Ads, paid social,
                display and retargeting - for startups, SMBs and enterprises across the US, UK, UAE, Europe and
                India. The difference is the model: you own every ad account and all the data, you
                pay the platforms directly so we never mark up your spend, we charge one flat
                monthly fee (not a cut of your budget), and we report revenue - not impressions.
                Month-to-month. No results claims we can&apos;t back.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Get a Paid Media Audit
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="#how-we-work" variant="ghost" size="lg">
                  See how it works
                </Button>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                A flat fee, not a cut of your spend. You own everything.
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {trustChips.map((c) => (
                  <li key={c.label}>
                    <TrustChip icon={c.icon}>{c.label}</TrustChip>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 lg:justify-self-end">
              <div className="card glow-border relative w-full max-w-sm overflow-hidden p-6">
                <p className="relative z-[1] text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  At a glance
                </p>
                <dl className="relative z-[1] mt-5 space-y-4">
                  {glance.map((g) => (
                    <div key={g.k} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-brand-500">
                        {g.icon}
                      </span>
                      <div className="min-w-0">
                        <dt className="text-xs text-muted-foreground">{g.k}</dt>
                        <dd className="font-display text-sm font-semibold text-foreground">{g.v}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
