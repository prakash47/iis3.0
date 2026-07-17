import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconBolt, IconServer, IconGrid, IconShield } from "@/components/icons";

const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own 100% of the code" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconBolt className="h-4 w-4" />, label: "Django 6.0 + Python 3.13" },
];

// IMPORTANT: Django/Python power NOTHING in our stack (site is Next.js/React SSG; even
// the build runs on Node, not Python). So this card describes DJANGO IN 2026 - it does
// NOT claim "this site's stack, inspect it" like the React/Next.js heroes. Signature =
// security + admin, built in (consistent with the hub taglines already published).
const at2026 = [
  { icon: <IconServer className="h-4 w-4" />, k: "Framework", v: "Django 6.0, 5.2 LTS to 2028" },
  { icon: <IconGrid className="h-4 w-4" />, k: "Its signature", v: "The admin, built in" },
  { icon: <IconShield className="h-4 w-4" />, k: "Security", v: "CSRF, XSS, SQLi - by default" },
  { icon: <IconCheck className="h-4 w-4" />, k: "Language", v: "Python 3.13, typed" },
];

/**
 * Django spoke hero - our 7th tech spoke, 4th backend spoke. Django is the
 * batteries-included Python web framework whose signature is the built-in admin +
 * security-by-default (matching both hub taglines). The angle: Django ships the boring,
 * security-critical 80% in the box so the budget goes on the product. No own-site claim
 * (Angular/Python/Laravel model); no borrowed famous-user logos. Number-free at brand level.
 */
export function DjangoHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Django development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Django development services - custom web apps, admin dashboards and APIs,{" "}
                <span className="gradient-text">secure and batteries-included.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds custom Django web applications - content and admin-heavy
                platforms, SaaS, portals and DRF APIs - by a small senior team, in clean, modern
                Python. Django ships the boring, security-critical parts in the box: a production
                admin, the ORM, auth and the common attack defenses - so your budget goes on the
                product, not the plumbing. You own 100% of the standard-Django code, with no lock-in,
                at transparent published fixed prices. It&apos;s the natural web app to put in front of
                your Python data or ML. For startups, SMBs and enterprises worldwide.
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
                  Django in 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-700 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    v6.0
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
                  The batteries-included Python web framework - security and admin in the box.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
