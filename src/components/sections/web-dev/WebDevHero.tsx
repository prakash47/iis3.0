import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconBolt, IconClock, IconTag, IconCode, IconPin } from "@/components/icons";

const trustChips = [
  { icon: <IconBolt className="h-4 w-4" />, label: "Perfect Lighthouse" },
  { icon: <IconTag className="h-4 w-4" />, label: "Transparent fixed pricing" },
  { icon: <IconClock className="h-4 w-4" />, label: "Shipped in 2-6 weeks" },
];

const glance = [
  { icon: <IconCode className="h-4 w-4" />, k: "Stack", v: "Stack-agnostic - WordPress to Next.js" },
  { icon: <IconTag className="h-4 w-4" />, k: "Pricing", v: "Fixed, $300 to $12,000+" },
  { icon: <IconClock className="h-4 w-4" />, k: "Timeline", v: "2-6 weeks, typical" },
  { icon: <IconPin className="h-4 w-4" />, k: "Serves", v: "US, UK, UAE, EU & India" },
];

/**
 * Money-page hero. H1 + a 40-80 word answer-first capsule (the primary
 * AI-extraction passage) render immediately to protect LCP. One dominant CTA.
 * The "at a glance" card carries extractable offer facts without duplicating the
 * live-performance proof band that follows.
 */
export function WebDevHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Web design &amp; development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Custom web design and development, built on the right stack - at a{" "}
                <span className="gradient-text">fixed price you can see.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService is a full-service web design and development company. We
                design and build custom websites, web apps and e-commerce on the right stack for
                the job - from WordPress, Shopify and Laravel to Node, Next.js and headless CMS -
                for startups, growing SMBs and enterprise teams across the US, UK, UAE, Europe and
                India. At transparent, published fixed prices, most projects ship in weeks, with
                real Core Web Vitals to prove the result.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Get a fixed-price quote
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="#how-we-work" variant="ghost" size="lg">
                  See how it works
                </Button>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                A fixed price agreed up front. No quote wall.
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {trustChips.map((c) => (
                  <li key={c.label}>
                    <TrustChip icon={c.icon}>{c.label}</TrustChip>
                  </li>
                ))}
              </ul>
            </div>

            {/* At a glance - extractable offer facts */}
            <div className="lg:col-span-5 lg:justify-self-end">
              <div className="card glow-border relative w-full max-w-sm overflow-hidden p-6">
                <p className="relative z-[1] text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  At a glance
                </p>
                {/* Plain list, not a <dl>: a dl whose rows carry an icon span + a
                    nested div fails axe's definition-list structure rules (and the
                    malformed tree also fails agentic/a11y-tree checks). A ul with
                    label/value spans renders identically and is always valid. */}
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
