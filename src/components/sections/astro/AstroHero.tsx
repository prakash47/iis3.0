import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconBolt, IconLayout, IconPen, IconServer } from "@/components/icons";

const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own 100% of the code" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconBolt className="h-4 w-4" />, label: "Ships almost no JavaScript" },
];

// IMPORTANT: Astro powers NOTHING in our stack - our site is a Next.js/React build (compiled
// by Webpack/Turbopack, NOT Vite - never claim Vite for our own site). So this card describes
// ASTRO IN 2026 as a discipline; it does NOT claim "this site's stack, inspect it". Currency is
// signalled by the current major (verified: Astro 6, stable March 2026) plus features, never a
// pinned minor. Zero-own-site model (Angular/Laravel/PHP), fenced hard in the Proof section.
const at2026 = [
  { icon: <IconLayout className="h-4 w-4" />, k: "Rendering", v: "Static HTML, islands where needed" },
  { icon: <IconBolt className="h-4 w-4" />, k: "Interactivity", v: "Opt-in, one island at a time" },
  { icon: <IconPen className="h-4 w-4" />, k: "Content", v: "Content Layer, MDX, collections" },
  { icon: <IconServer className="h-4 w-4" />, k: "Deploy", v: "Any host - platform-agnostic" },
];

/**
 * Astro spoke hero - our 17th tech spoke and the content-site/frontend one. The live Next.js
 * page already positions Astro as "mostly-static content & marketing, we'll pick it for
 * content-only sites"; this page owns that lane and routes app intent BACK to Next.js. No
 * own-site claim (our site is Next.js, not Astro). Number-free at brand level: no KB-of-JS
 * figure, no Lighthouse/CWV score anywhere (those would be laundering - our real numbers are
 * our Next.js site's). Signature (the JavaScript-diet thesis) lives in the Why band.
 */
export function AstroHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Astro development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Astro development for content-driven sites -{" "}
                <span className="gradient-text">fast static HTML, JavaScript only where you need it.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds fast, content-driven sites on Astro - marketing sites,
                blogs, documentation and landing pages that ship almost no JavaScript by default and
                add interactivity one island at a time, by a small senior team at transparent
                published fixed prices. We build Next.js too, so we will tell you honestly when your
                site is content that belongs on Astro, and when it needs to behave like an app. You
                own the code outright, with no lock-in. For startups, SMBs and enterprises worldwide.
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
                  Astro in 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    v6
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
                  A content page starts as static HTML with no framework runtime - you opt into
                  JavaScript, you do not inherit it.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
