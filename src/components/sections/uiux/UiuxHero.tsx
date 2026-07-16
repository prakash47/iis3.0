import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconClock, IconPen, IconLayout, IconPin } from "@/components/icons";

const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own the Figma files & IP" },
  { icon: <IconTag className="h-4 w-4" />, label: "Transparent, published fixed pricing" },
  { icon: <IconClock className="h-4 w-4" />, label: "Design that ships in weeks" },
];

const glance = [
  { icon: <IconPen className="h-4 w-4" />, k: "Design", v: "UI/UX, design systems & brand identity" },
  { icon: <IconLayout className="h-4 w-4" />, k: "Deliverables", v: "Figma files, tokens & dev-ready handoff" },
  { icon: <IconTag className="h-4 w-4" />, k: "Pricing", v: "Fixed - start with a low-cost audit" },
  { icon: <IconPin className="h-4 w-4" />, k: "Serves", v: "US, UK, UAE, EU & India" },
];

/**
 * UI/UX & branding money-page hero. This is the hardest trust case on the site -
 * a design buyer wants a portfolio and we have none - so the hero leads with the
 * one honest, unique wedge: the design system on this very page IS the sample.
 * Number-free at brand level (the audit price lives in the pricing section).
 */
export function UiuxHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>UI/UX design &amp; branding</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                UI/UX design and branding, and the proof is{" "}
                <span className="gradient-text">the page you&apos;re reading.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService designs product-grade UI and UX, design systems and brand
                identity - in Figma, built to ship and yours to own. We don&apos;t lead with a wall
                of client logos; the design system, typography and motion on this page are ours, and
                you can inspect every pixel before you hire us. For startups, SMBs and enterprises
                across the US, UK, UAE, Europe and India.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Start with a UX/UI Audit
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="#how-we-work" variant="ghost" size="lg">
                  See how we work
                </Button>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                A fixed-price audit, credited toward your project. No sales call required.
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
                <ul className="relative z-[1] mt-5 space-y-4">
                  {glance.map((g) => (
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
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
