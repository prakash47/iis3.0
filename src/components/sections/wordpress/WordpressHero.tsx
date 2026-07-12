import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconBolt, IconLayout, IconPen, IconCode, IconServer } from "@/components/icons";

const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own the site & content" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconBolt className="h-4 w-4" />, label: "Built fast - we also build Next.js" },
];

// IMPORTANT: WordPress/PHP power NOTHING in our stack - our site is Next.js/React SSG,
// and we chose Next.js ON PURPOSE (a strength, not a gap). So this card describes MODERN
// WORDPRESS - it does NOT claim "this site's stack, inspect it". Currency is signalled by
// FEATURES (block themes, FSE, Interactivity API, headless), not a contested version number.
const at2026 = [
  { icon: <IconLayout className="h-4 w-4" />, k: "Build model", v: "Custom block themes + Full Site Editing" },
  { icon: <IconPen className="h-4 w-4" />, k: "Editor", v: "Gutenberg + the Interactivity API" },
  { icon: <IconCode className="h-4 w-4" />, k: "Headless-ready", v: "REST API / WPGraphQL + Next.js" },
  { icon: <IconServer className="h-4 w-4" />, k: "Runtime", v: "PHP 8.3+, self-hosted, yours" },
];

/**
 * WordPress spoke hero - our 9th tech spoke, FIRST CMS/website-platform spoke. The
 * reconciliation with our fast-custom brand: we build FAST, secure WordPress because we
 * also build Next.js, we're honest about when a custom build serves you better, and we
 * offer headless WordPress (WP editing + Next.js speed). No own-site claim; NO fabricated
 * CWV numbers on WP. Number-free at brand level.
 */
export function WordpressHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>WordPress development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                WordPress development services - fast, secure CMS sites your team owns and runs,{" "}
                <span className="gradient-text">built by a team that also builds Next.js.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds custom WordPress sites - marketing and brochure sites,
                blogs, corporate and content sites your team edits itself through a familiar admin -
                fast, secure and maintainable. Because we also build Next.js, we know exactly what
                fast looks like and how to get it out of WordPress: a lean custom block theme, a short
                audited plugin list, real caching and Core Web Vitals work. You own the site, content
                and hosting outright, with no lock-in, at published fixed prices. And if WordPress is
                the wrong tool for you, we&apos;ll tell you and point you to a custom or headless
                build. For startups, SMBs and enterprises worldwide.
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
                Fixed price, site and content you own, no lock-in.
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
                  WordPress in 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    FSE
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
                  Modern WordPress - not the theme-and-plugin shop of 2015.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
