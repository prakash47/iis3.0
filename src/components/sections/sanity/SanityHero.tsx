import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconLayers, IconType, IconServer, IconDatabase } from "@/components/icons";

const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own your content and schema" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconLayers className="h-4 w-4" />, label: "Content as data, not pages" },
];

// This site's blog, guides and glossary NOW run on Sanity (shipped 2026-07) - so Sanity is a real
// dogfooded track record, not a plan. This card describes SANITY IN 2026 as a discipline. Adjacency:
// Sanity is API-first + pairs with Next.js/React, and the Studio is a React app. No version pin
// (Studio versions are not marketed as a badge); the badge is a category signal. No Lighthouse/CWV
// number for a CLIENT build (laundering - measured on real content after launch, per Proof).
const at2026 = [
  { icon: <IconType className="h-4 w-4" />, k: "Content model", v: "Typed schemas, in code" },
  { icon: <IconDatabase className="h-4 w-4" />, k: "Query", v: "GROQ, joins in one request" },
  { icon: <IconLayers className="h-4 w-4" />, k: "Studio", v: "Open-source React, yours" },
  { icon: <IconServer className="h-4 w-4" />, k: "Delivery", v: "Real-time or cached, per surface" },
];

/**
 * Sanity spoke hero - our 18th tech spoke and the first of the 4 CMS spokes. Sanity is the
 * headless SOURCE the rest of our site already names as the backend our Next.js/Astro front ends
 * read; this page reciprocates - it owns the CMS side and routes the FRONT-END build to Next.js
 * (app/SEO-critical) or Astro (content site). Own-site dogfooding is real (resources run on Sanity).
 * Signature (content-as-data) lives
 * in the Why band. Ownership stated the Shopify-hosted-SaaS way (content/schema/Studio yours, the
 * Content Lake is Sanity's hosted service) - never "own the platform", never flat "no lock-in".
 */
export function SanityHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Sanity development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Sanity CMS development for structured, headless content -{" "}
                <span className="gradient-text">modelled once, served to every surface.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService models your content as structured data on Sanity - typed schemas,
                a custom Studio and GROQ queries - and builds the fast front end that reads it in
                Next.js or Astro, by a small senior team at transparent published fixed prices. You own
                your content, your schema and your Studio; the Content Lake is Sanity&apos;s hosted
                service you pay for directly. For startups, SMBs and enterprises worldwide.
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
                Fixed price, content you own, no in-house lock-in.
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
                  Sanity in 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Headless
                  </span>
                </p>
                <dl className="relative z-[1] mt-5 space-y-4">
                  {at2026.map((g) => (
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
                  Content stored as structured JSON - queried and reused across web, app and whatever
                  surface comes next.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
