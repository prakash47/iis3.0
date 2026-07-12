import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconBolt, IconCode, IconServer, IconLayout } from "@/components/icons";

const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own 100% of the code" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconBolt className="h-4 w-4" />, label: "Laravel 13 + modern PHP" },
];

// IMPORTANT: Laravel/PHP power NOTHING in our stack - not runtime (Next.js/React SSG),
// not build (Node), not even the package manager (npm, not Composer). So this card
// describes LARAVEL IN 2026 - it does NOT claim "this site's stack, inspect it" like
// the React/Next.js heroes, and does not borrow Node's "runs our build" wedge. Honest,
// current-to-2026 framing (Angular/Python model).
const at2026 = [
  { icon: <IconServer className="h-4 w-4" />, k: "Framework", v: "Laravel 13, annual releases" },
  { icon: <IconCode className="h-4 w-4" />, k: "Language", v: "PHP 8.4 / 8.5, typed and fast" },
  { icon: <IconLayout className="h-4 w-4" />, k: "View layer", v: "Blade, Livewire 4, Inertia" },
  { icon: <IconCheck className="h-4 w-4" />, k: "Its strength", v: "Ships web apps fast" },
];

/**
 * Laravel spoke hero - our 6th tech spoke, 3rd backend spoke. Laravel is the
 * batteries-included PHP web framework that ships real web products fast. The angle
 * reframes Laravel from "cheap offshore PHP" to "modern, elegant PHP you own". No
 * own-site claim (Angular/Python model), and the no-Laravel-Partner honesty is banked
 * upfront. Number-free at brand level.
 */
export function LaravelHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Laravel development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Laravel development services - custom web apps, SaaS and admin panels,{" "}
                <span className="gradient-text">priced up front and yours to own.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds custom Laravel web applications - SaaS products, admin
                panels, portals and APIs - by a small senior team, in clean, modern PHP, at
                transparent published fixed prices. Laravel is the batteries-included framework that
                ships real web products fast, and you own 100% of the standard-Laravel code, with no
                lock-in. We&apos;re not an official Laravel Partner and won&apos;t pretend to be - the
                proof is the depth here and the code you keep. For startups, SMBs and enterprises
                worldwide.
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
                  Laravel in 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    v13
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
                  The most-used PHP framework - and PHP still runs most of the web.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
