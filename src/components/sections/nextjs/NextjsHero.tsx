import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconCode, IconLayers, IconBolt, IconSearch } from "@/components/icons";

const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own 100% of the code" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconBolt className="h-4 w-4" />, label: "App Router, React 19" },
];

// The at-a-glance card doubles as the proof teaser: it states the real stack of
// THIS live site, which is itself a Next.js build the visitor can inspect.
const stack = [
  { icon: <IconCode className="h-4 w-4" />, k: "Framework", v: "Next.js 16 - App Router" },
  { icon: <IconLayers className="h-4 w-4" />, k: "Rendering", v: "SSG + React Server Components" },
  { icon: <IconBolt className="h-4 w-4" />, k: "UI", v: "React 19 - Tailwind v4" },
  { icon: <IconSearch className="h-4 w-4" />, k: "Built in", v: "SEO, structured data, self-hosted fonts" },
];

/**
 * Next.js spoke hero. The wedge unique to THIS page: the site the visitor is
 * reading is itself a real Next.js build, so the proof and the product are the
 * same object. Number-free at brand level (prices live in the pricing section).
 */
export function NextjsHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Next.js development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Next.js development services - and the proof is{" "}
                <span className="gradient-text">the page you&apos;re on.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds custom Next.js websites and web apps - App-Router-first,
                server-rendered, and fast by construction - for startups, SMBs and enterprises
                worldwide, at transparent, published fixed prices. The site you&apos;re reading is a
                Next.js 16 build, so you can inspect the craft (and run PageSpeed on it) before you
                hire the team. You own 100% of the code.
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
                  This site&apos;s stack
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Live
                  </span>
                </p>
                <dl className="relative z-[1] mt-5 space-y-4">
                  {stack.map((g) => (
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
                <p className="relative z-[1] mt-5 border-t border-border pt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
                  You&apos;re reading a Next.js build. View source: server-rendered HTML, not an
                  empty div.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
