import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconBolt, IconType, IconLayers, IconServer } from "@/components/icons";

const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own 100% of the code" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconBolt className="h-4 w-4" />, label: "Typed, tested, standard PHP" },
];

// IMPORTANT: PHP powers NOTHING in our stack - not runtime (Next.js/React SSG), not
// build (Node), not even the package manager (npm, not Composer). So this card describes
// PHP IN 2026 as a discipline - it does NOT claim "this site's stack, inspect it" like the
// React/Next.js heroes. The badge signals the current line (verified: PHP 8.5, Nov 2025)
// without pinning a support matrix. Honest, Angular/Python/Laravel model.
const at2026 = [
  { icon: <IconType className="h-4 w-4" />, k: "Language", v: "PHP 8.4 / 8.5, typed" },
  { icon: <IconLayers className="h-4 w-4" />, k: "Tooling", v: "Composer, PSR, PHPStan, Pest" },
  { icon: <IconServer className="h-4 w-4" />, k: "Runtime", v: "PHP-FPM, or FrankenPHP" },
  { icon: <IconCheck className="h-4 w-4" />, k: "The real work", v: "Legacy PHP, done properly" },
];

/**
 * PHP spoke hero - our 16th tech spoke, 6th backend spoke, and the raw/legacy PHP lane
 * that the live Laravel page explicitly hands here ("plain PHP and legacy modernization
 * are covered there"). Laravel owns modern-framework PHP; this page owns raw/no-framework
 * PHP, tiny utilities and endpoints, and the whole legacy surface (maintain/rescue/upgrade/
 * modernize). No own-site claim (Angular/Python/Laravel model). "applications" is qualified
 * as non-framework everywhere to avoid re-competing with Laravel's printed "custom PHP web
 * applications". Number-free at brand level.
 */
export function PhpHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>PHP development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Custom PHP development and legacy modernization -{" "}
                <span className="gradient-text">the kind you can read, audit and own.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds custom PHP without a heavy framework - applications,
                APIs, small tools and endpoints - and modernizes the legacy PHP you already run, by a
                small senior team, in typed, tested, standard PHP at transparent published fixed
                prices. Most PHP a buyer is shown is the cheap kind; this page is about the other kind,
                and about how to tell the difference. You own the code outright, with no lock-in. For
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
                  PHP in 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-700 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    8.5
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
                  A supported line, under Composer, tested and type-checked - not the cPanel box its
                  reputation is stuck on.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
