import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconShield, IconType, IconServer, IconLayout } from "@/components/icons";

const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "Your content, yours and exportable" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconShield className="h-4 w-4" />, label: "Governance and orchestration at scale" },
];

// IMPORTANT: Contentful powers NOTHING in our stack, and (like Strapi, UNLIKE Sanity) it is NOT our
// planned own-site CMS - it is a PERMANENT own-site zero, and the honest reason IS the signature (our
// site is one small team's content, exactly the case where Contentful's enterprise governance is
// overkill). This card describes CONTENTFUL IN 2026 as a discipline; it does NOT claim "this site runs
// Contentful". No version pins; the badge is a category signal. No Lighthouse/CWV number anywhere.
// Ownership is stated the Shopify/hosted-SaaS way (content + model yours and exportable; the platform is
// rented) - never "own the platform", never flat "no lock-in". Salesforce is NOT billed here (the deal
// is signed, not closed) - the acquisition is treated once, in its own section.
const at2026 = [
  { icon: <IconType className="h-4 w-4" />, k: "Model", v: "Content types, references, Rich Text" },
  { icon: <IconShield className="h-4 w-4" />, k: "Governance", v: "Environments, Merge, roles, releases" },
  { icon: <IconServer className="h-4 w-4" />, k: "APIs", v: "CDA, CMA, CPA and GraphQL" },
  { icon: <IconLayout className="h-4 w-4" />, k: "Delivery", v: "Next.js or Astro reads it" },
];

/**
 * Contentful spoke hero - our 20th tech spoke and the 3rd of the 4 CMS spokes. Contentful is the
 * ENTERPRISE, hosted-SaaS peer of Sanity - the CMS built for content as a coordination problem at
 * scale (many teams, brands, locales, channels). The signature (coordination-at-scale + the fit wedge)
 * lives in the Why band. Contentful is the content BACKEND; the FRONT-END build routes OUT to Next.js
 * (app/SEO-critical) or Astro (content site). No own-site claim. Number-free at brand level.
 */
export function ContentfulHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Contentful development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Contentful development for content at enterprise scale -{" "}
                <span className="gradient-text">where coordination is the hard part, not content.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds on Contentful - modelling your content, wiring the
                governance and delivery, and building the fast front end that reads it in Next.js or
                Astro - by a small senior team at transparent published fixed prices. Contentful earns
                its keep at enterprise scale, where content stops being a writing problem and becomes a
                coordination problem: many teams, brands, locales and channels shipping at once. You own
                your content and your content model, exportable through the Content Management API or the
                CLI whenever you want; the platform itself is Contentful&apos;s hosted service you pay for
                directly. For startups, SMBs and enterprises worldwide.
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
                  Contentful in 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-700 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Enterprise
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
                  Contentful is the content backend - your front end reads it, and many teams govern it.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
