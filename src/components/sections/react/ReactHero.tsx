import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconCode, IconGrid, IconLayers, IconBolt } from "@/components/icons";

const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own 100% of the code" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconBolt className="h-4 w-4" />, label: "React 19 + TypeScript" },
];

// Distinct from the Next.js hero card ("this site's stack"): this one is the React
// toolkit the visitor's current UI is built with - the proof teaser.
const toolkit = [
  { icon: <IconCode className="h-4 w-4" />, k: "This UI", v: "React 19 components + TypeScript" },
  { icon: <IconGrid className="h-4 w-4" />, k: "State", v: "Hooks, TanStack Query + Zustand" },
  { icon: <IconLayers className="h-4 w-4" />, k: "Components", v: "Tailwind + shadcn/ui + Radix" },
  { icon: <IconBolt className="h-4 w-4" />, k: "Tested", v: "Vitest + Playwright" },
];

/**
 * React spoke hero. The wedge, even stronger than the Next.js page's: the very
 * interface the visitor is clicking (menus, toggle, accordions) IS React - a claim
 * they can feel and verify in real time. Number-free at brand level.
 */
export function ReactHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>React development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                React development services - and the UI you&apos;re using is{" "}
                <span className="gradient-text">one of ours.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds custom React interfaces - single-page apps, dashboards,
                design systems and front-ends for your existing backend - by a small senior team, at
                transparent published fixed prices, shipped in weeks. The interface you&apos;re using
                right now is a React 19 app, so you can inspect the craft before you hire the team.
                You own 100% of the code - standard React, no lock-in.
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
                Fixed price, code you own, shipped in weeks.
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
                  This UI&apos;s toolkit
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-700 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Live
                  </span>
                </p>
                <ul className="relative z-[1] mt-5 space-y-4">
                  {toolkit.map((g) => (
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
                  Open React DevTools - the component tree you&apos;ll see is our work.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
