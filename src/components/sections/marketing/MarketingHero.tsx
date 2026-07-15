import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconSearch, IconCheck, IconCode, IconTrendingUp, IconPin } from "@/components/icons";

const trustChips = [
  { icon: <IconSearch className="h-4 w-4" />, label: "SEO + AI-search (AEO/GEO)" },
  { icon: <IconCheck className="h-4 w-4" />, label: "No vanity metrics" },
  { icon: <IconCode className="h-4 w-4" />, label: "Built and marketed as one" },
];

const glance = [
  { icon: <IconSearch className="h-4 w-4" />, k: "Focus", v: "SEO, AEO, content, social, email" },
  { icon: <IconTrendingUp className="h-4 w-4" />, k: "Model", v: "Audit, then a monthly plan" },
  { icon: <IconCheck className="h-4 w-4" />, k: "Reporting", v: "Live, monthly, no vanity metrics" },
  { icon: <IconPin className="h-4 w-4" />, k: "Serves", v: "US, UK, UAE, EU & India" },
];

/**
 * Digital-marketing (organic only) money-page hero. Leads on the one honest,
 * provable differentiator: SEO/AI-search-led AND we build the site, so the proof
 * is this very page. Number-free at brand level. "No paid ads" states the scope.
 */
export function MarketingHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Digital marketing</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Organic digital marketing from an SEO and AI-search team that{" "}
                <span className="gradient-text">also builds the site.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService runs organic digital marketing - SEO, AI-search optimization
                (AEO/GEO), content, organic social, email and conversion optimization - for
                startups, SMBs and enterprises across the US, UK, UAE, Europe and India. Because we
                build sites too, your technical foundations, schema and content architecture are
                right from day one instead of retrofitted. No paid ads, no vanity metrics, and no
                guaranteed-ranking promises - just measurable, compounding organic growth.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Get an SEO &amp; AEO audit
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="#how-we-work" variant="ghost" size="lg">
                  See how it works
                </Button>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                Start with a fixed-price audit. No guaranteed-ranking nonsense.
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
