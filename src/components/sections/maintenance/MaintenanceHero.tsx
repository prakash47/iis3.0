import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconShield, IconCheck, IconClock, IconRefresh, IconLayers, IconTag, IconPin } from "@/components/icons";

const trustChips = [
  { icon: <IconShield className="h-4 w-4" />, label: "Updates, security & backups" },
  { icon: <IconCheck className="h-4 w-4" />, label: "You own your site & accounts" },
  { icon: <IconClock className="h-4 w-4" />, label: "Month-to-month, no lock-in" },
];

const glance = [
  { icon: <IconRefresh className="h-4 w-4" />, k: "Care", v: "Updates, security, backups & monitoring" },
  { icon: <IconLayers className="h-4 w-4" />, k: "Any stack", v: "WordPress, Shopify, Next.js or custom" },
  { icon: <IconTag className="h-4 w-4" />, k: "Pricing", v: "Published care plans, month-to-month" },
  { icon: <IconPin className="h-4 w-4" />, k: "Serves", v: "US, UK, UAE, EU & India" },
];

/**
 * Website-maintenance money-page hero. The honest wedge for this service is
 * "own-site-as-proof": we run our own live site on the exact care we sell, so the
 * buyer can verify the standard. Number-free at brand level (plan prices live in
 * the pricing section). Response commitment is stated honestly (one business day).
 */
export function MaintenanceHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Website maintenance &amp; support</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Website maintenance services that keep your live site{" "}
                <span className="gradient-text">fast, secure and current.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService keeps your website healthy after launch - updates, security,
                backups, performance and support - on any stack, with transparent published care
                plans and no lock-in. And we run our own live site on the exact same discipline, so
                you can verify the standard right now. For startups, SMBs and enterprises across the
                US, UK, UAE, Europe and India.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Start a care plan
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="#pricing" variant="ghost" size="lg">
                  See plans &amp; pricing
                </Button>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                Month-to-month, no lock-in. Or start with a one-time site health audit.
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
                <p className="relative z-[1] text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  At a glance
                </p>
                <dl className="relative z-[1] mt-5 space-y-4">
                  {glance.map((g) => (
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
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
