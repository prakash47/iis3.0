import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconBolt, IconCode, IconServer, IconDatabase } from "@/components/icons";

const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own the code, data & models" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconBolt className="h-4 w-4" />, label: "Python 3.14 + FastAPI" },
];

// IMPORTANT: Python powers NONE of our stack (our site is Next.js/React SSG; even
// the build runs on Node, not Python). So this card describes PYTHON IN 2026 - it
// does NOT claim "this site's stack, inspect it" like the React/Next.js heroes, and
// does not borrow Node's "runs our build" wedge. Honest, current-to-2026 framing.
const at2026 = [
  { icon: <IconCode className="h-4 w-4" />, k: "Language", v: "Python 3.14, typed and modern" },
  { icon: <IconServer className="h-4 w-4" />, k: "Backends", v: "FastAPI, async and ASGI-native" },
  { icon: <IconDatabase className="h-4 w-4" />, k: "Its home turf", v: "Data, ML and automation" },
  { icon: <IconCheck className="h-4 w-4" />, k: "Typing", v: "Type hints, checked with mypy" },
];

/**
 * Python spoke hero - our 5th tech spoke, 2nd backend spoke. Python spans web + data
 * + AI/ML + automation, and that breadth is exactly why buyers get sold vague "we do
 * everything". The hero resists the breadth trap: we tell you WHICH Python job yours
 * is. No own-site claim (Angular-style). Number-free at brand level.
 */
export function PythonHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Python development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Python development services for backends, data and{" "}
                <span className="gradient-text">AI-ready systems.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds custom Python backends - FastAPI and Flask APIs, data
                pipelines, automation and machine-learning integration - by a small senior team, in
                clean, typed Python, at transparent published fixed prices. Python spans web, data
                and AI, so every agency claims all three. We&apos;ll tell you honestly which one your
                project actually is - and you own 100% of the code, data and models, with no lock-in.
                For startups, SMBs and enterprises worldwide.
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
                  Python in 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    3.14
                  </span>
                </p>
                <ul className="relative z-[1] mt-5 space-y-4">
                  {at2026.map((g) => (
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
                  The No. 1 language for AI and data - and we build it the 2026 way.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
