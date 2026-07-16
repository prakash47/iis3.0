import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconBolt, IconCode, IconServer, IconLayers } from "@/components/icons";

const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own 100% of the code" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconBolt className="h-4 w-4" />, label: "Node 24 LTS + TypeScript" },
];

// IMPORTANT: Node is a RUNTIME, not a UI framework, and our site is NOT served by a
// live Node server. So this card describes the Node RUNTIME in 2026 - it does NOT
// claim "this site's stack, inspect it" like the React/Next.js heroes (that would be
// a lie for a static SSG page). Honest, current-to-2026 framing instead.
const runtime = [
  { icon: <IconServer className="h-4 w-4" />, k: "Runtime", v: "Node 24 LTS, Node 26 current" },
  { icon: <IconBolt className="h-4 w-4" />, k: "Concurrency", v: "Non-blocking event loop" },
  { icon: <IconCode className="h-4 w-4" />, k: "Language", v: "TypeScript-native, ES modules" },
  { icon: <IconLayers className="h-4 w-4" />, k: "Ecosystem", v: "npm, the largest registry" },
];

/**
 * Node.js spoke hero - our FIRST backend spoke. Unlike the React and Next.js heroes
 * there is NO "inspect this page, it's Node" wedge: this is a static site with no
 * live Node server. The angle rests on honest backend scope + code/data ownership +
 * transparent pricing + the judgment of when you need a backend. Number-free at
 * brand level (concrete prices live only in the pricing table + schema).
 */
export function NodejsHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Node.js development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Node.js development services - scalable backends, APIs and real-time,{" "}
                <span className="gradient-text">priced up front and yours to own.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds custom Node.js backends - REST and GraphQL APIs,
                real-time services and microservices - by a small senior team, in TypeScript, at
                transparent published fixed prices. You own 100% of the standard-Node code, deployed
                to your own cloud accounts, with no lock-in. And because a backend is the part you
                can&apos;t see, we&apos;ll tell you honestly when you need a Node server and when you
                don&apos;t. For startups, SMBs and enterprises worldwide.
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
                Fixed price, code and data you own, no lock-in.
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
                  Node.js in 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Node 24 LTS
                  </span>
                </p>
                <ul className="relative z-[1] mt-5 space-y-4">
                  {runtime.map((g) => (
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
                  A JavaScript runtime on V8 - we default new builds to the current LTS.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
