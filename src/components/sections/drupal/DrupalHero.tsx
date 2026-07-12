import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconShield, IconServer, IconLayers, IconBuilding } from "@/components/icons";

const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "Fixed price, set before we start" },
  { icon: <IconTag className="h-4 w-4" />, label: "Standard Drupal 11, no in-house lock-in" },
  { icon: <IconShield className="h-4 w-4" />, label: "Senior team, direct since 2016" },
];

// IMPORTANT: Drupal powers NOTHING in our stack, and (like Strapi/Contentful, UNLIKE Sanity) it is NOT
// our planned own-site CMS - it is a PERMANENT own-site zero, and the honest reason IS the signature
// (our content is a handful of simple types, exactly the case where Drupal's native structural power is
// over-engineered). This card describes DRUPAL IN 2026 as a discipline; it does NOT claim "this site
// runs Drupal". VERSION: hero badge "11" (major-version identity, like Strapi 5 / Laravel 13) - no
// minor/point pins, no Drupal 12 promise. SIGNATURE = structure-as-native-core (NOT ownership - that is
// spent by Strapi/Woo and lives ONLY in the demoted Proof card). The at-a-glance card carries a
// GOVERNANCE row (the unspent trust asset), NOT an ownership row; ownership appears once, lightly, in
// the capsule ("hosting you rent in your own name" - never "own the host"). No Lighthouse/CWV.
const at2026 = [
  { icon: <IconServer className="h-4 w-4" />, k: "Core", v: "Drupal 11, PHP on Symfony, Twig, Composer" },
  { icon: <IconLayers className="h-4 w-4" />, k: "Structure", v: "Types, taxonomy, roles, workflow, languages - native" },
  { icon: <IconArrow className="h-4 w-4" />, k: "Delivery", v: "Full-stack, or decoupled with a Next.js/Astro front end" },
  { icon: <IconBuilding className="h-4 w-4" />, k: "Governance", v: "Community-owned, GPL, vendor-neutral" },
];

/**
 * Drupal spoke hero - our 21st and FINAL tech spoke, the 4th and last CMS spoke. Drupal is the
 * TRADITIONAL, self-hosted PHP CMS built for COMPLEX STRUCTURED content and native editorial governance.
 * The signature (structure-as-native-core + the fit wedge) lives in the Why band. Drupal renders its own
 * site AND can run decoupled (route the decoupled FRONT-END build OUT to Next.js/Astro). No own-site
 * claim. Number-free at brand level. Self-hosted ownership is DEMOTED (one light capsule touch + one
 * Proof card), never the headline - the headline is structure.
 */
export function DrupalHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Drupal development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Drupal development for content whose structure lives in the core -{" "}
                <span className="gradient-text">not in a stack of plugins.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService is a small senior team, incorporated in 2016, building in Drupal 11
                at a fixed price agreed before we start. Drupal earns its keep when content is genuinely
                complex - deep taxonomies, many interrelated types, fine-grained editorial roles and real
                multilingual, all native to the core rather than bolted on as plugins - and we say so
                plainly when a lighter platform would serve you better. Because Drupal is open-source and
                self-hosted, what we build runs on hosting you rent in your own name. For startups, SMBs
                and enterprises worldwide.
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
                Fixed price, structure done right, no in-house lock-in.
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
                  Drupal in 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Community
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
                  Built on Drupal core - not a stack of plugins pretending to be structure.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
