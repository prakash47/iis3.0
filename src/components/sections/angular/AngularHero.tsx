import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconBolt, IconCode, IconSearch } from "@/components/icons";

const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own 100% of the code" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconBolt className="h-4 w-4" />, label: "Modern Angular (v22, signals)" },
];

// IMPORTANT: this card describes MODERN ANGULAR's features - NOT "this site's
// stack" (our site is Next.js/React, not Angular). Labelling it "this site's
// stack" like the React/Next.js heroes would be a lie. Honest framing instead.
const modern = [
  { icon: <IconBolt className="h-4 w-4" />, k: "Reactivity", v: "Signals + zoneless change detection" },
  { icon: <IconCode className="h-4 w-4" />, k: "Architecture", v: "Standalone components, DI" },
  { icon: <IconSearch className="h-4 w-4" />, k: "SEO", v: "Built-in SSR + hydration" },
  { icon: <IconCheck className="h-4 w-4" />, k: "Language", v: "TypeScript-native, typed forms" },
];

/**
 * Angular spoke hero. The enterprise front-end framework page. Unlike the React
 * and Next.js heroes there is NO "inspect this page, it's Angular" wedge - our
 * site isn't Angular and we won't imply it is. The angle rests on modern-Angular
 * depth + ownership + transparent pricing. Number-free at brand level.
 */
export function AngularHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Angular development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Angular development services - the enterprise framework,{" "}
                <span className="gradient-text">built the 2026 way.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds enterprise-grade Angular applications - data-heavy
                dashboards, internal tools, regulated-industry portals, and AngularJS-to-modern-Angular
                migrations - by a small senior team, at transparent published fixed prices. We build
                on modern Angular (signals, standalone components, zoneless change detection, SSR
                with hydration), you own 100% of the standard-Angular code, and there&apos;s no
                lock-in. For startups, SMBs and enterprises worldwide.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Get a fixed quote
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="#how-we-work" variant="ghost" size="lg">
                  See how we work
                </Button>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                Fixed price, code you own, no lock-in.
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
                <p className="relative z-[1] flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Modern Angular, 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    v22
                  </span>
                </p>
                <ul className="relative z-[1] mt-5 space-y-4">
                  {modern.map((g) => (
                    <li key={g.k} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-brand-500">
                        {g.icon}
                      </span>
                      <div className="min-w-0">
                        <span className="block text-xs text-muted-foreground">{g.k}</span>
                        <span className="block font-display text-sm font-semibold text-foreground">{g.v}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="relative z-[1] mt-5 border-t border-border pt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
                  We build with Angular 22 - not the Angular of 2018.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
