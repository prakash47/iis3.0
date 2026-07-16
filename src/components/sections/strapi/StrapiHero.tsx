import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconCode, IconServer, IconDatabase, IconCpu } from "@/components/icons";

const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own the code and the data" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconCode className="h-4 w-4" />, label: "Open-source, self-hosted" },
];

// IMPORTANT: Strapi powers NOTHING in our stack - our site is a Next.js/React build, and (UNLIKE
// Sanity) Strapi is NOT our planned own-site CMS, so this is a PERMANENT zero, never "we plan to
// adopt it". This card describes STRAPI IN 2026 as a discipline; it does NOT claim "this site runs
// Strapi". Strong Node/React adjacency (Strapi is Node.js + a React admin) is fenced in Proof, never
// a shipped-Strapi claim. No version pin; the badge is a category signal. No Lighthouse/CWV number.
const at2026 = [
  { icon: <IconCode className="h-4 w-4" />, k: "License", v: "MIT, open-source core" },
  { icon: <IconCpu className="h-4 w-4" />, k: "Runtime", v: "Node.js, React admin" },
  { icon: <IconServer className="h-4 w-4" />, k: "API", v: "REST out of the box, GraphQL plugin" },
  { icon: <IconDatabase className="h-4 w-4" />, k: "Hosting", v: "Self-hosted, or managed Strapi Cloud" },
];

/**
 * Strapi spoke hero - our 19th tech spoke and the 2nd of 4 CMS spokes. Strapi is the OPEN-SOURCE,
 * SELF-HOSTED headless CMS - the ownership counterpart to the SaaS/hosted Sanity spoke. The signature
 * (own the CMS SOFTWARE itself, not just the content) lives in the Why band. Strapi is the content
 * backend; the FRONT-END build routes OUT to Next.js (app/SEO-critical) or Astro (content site). No
 * own-site claim. Number-free at brand level; honest that self-hosting is a responsibility (Proof/Why).
 */
export function StrapiHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Strapi development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Strapi development - the open-source, self-hosted headless CMS{" "}
                <span className="gradient-text">whose software is yours, not just the content.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds on Strapi - modelling your content types, extending the CMS
                in Node, and shipping the fast front end that reads it in Next.js or Astro, by a small
                senior team at transparent published fixed prices. Because the Community Edition is
                open-source and self-hosted, you own the running software, the code and the database -
                not just the content. Self-hosting is a real responsibility, and we say so up front. For
                startups, SMBs and enterprises worldwide.
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
                Fixed price, software you own, no in-house lock-in.
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
                  Strapi in 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Open source
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
                  The Community Edition is MIT-licensed - yours to read, patch, extend and self-host.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
