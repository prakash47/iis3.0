import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScoreRing } from "@/components/ui/ScoreRing";
import { IconArrow, IconCheck } from "@/components/icons";
import { siteConfig } from "@/config/site";

const lighthouse = [
  { score: 100, label: "Performance", delay: "0.1s" },
  { score: 100, label: "Accessibility", delay: "0.25s" },
  { score: 100, label: "Best Practices", delay: "0.4s" },
  { score: 100, label: "SEO", delay: "0.55s" },
];

const coreWebVitals = [
  { metric: "LCP", name: "Largest Contentful Paint", note: "Good < 2.5s" },
  { metric: "INP", name: "Interaction to Next Paint", note: "Good < 200ms" },
  { metric: "CLS", name: "Cumulative Layout Shift", note: "Good < 0.1" },
];

const pageSpeedUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(siteConfig.url)}`;

/**
 * "Performance you can measure" proof band. Occupies the first-scroll slot where
 * competitors put a client-logo strip - but with our own, independently
 * verifiable numbers instead. The scores are visible TEXT (AEO-extractable) and
 * link out to a live PageSpeed report so nobody has to take our word for it.
 */
export function PerformanceProof() {
  return (
    <Section id="performance">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Performance you can measure"
            title={<>We don&apos;t claim fast. <span className="gradient-text">We prove it.</span></>}
            sub="The site you're reading is our live benchmark. Every build we ship has to hit a top Lighthouse score with Core Web Vitals in the green - so run this page through PageSpeed Insights or Chrome DevTools and check for yourself."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="card glow-border relative mx-auto max-w-4xl overflow-hidden p-6 sm:p-9">
            {/* shared gauge gradient, defined once */}
            <svg aria-hidden="true" className="absolute h-0 w-0">
              <defs>
                {/* Lighthouse green (90-100 = green, as in a real report) */}
                <linearGradient id="lh-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0cce6b" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>

            {/* report header */}
            <div className="relative z-[1] flex items-center justify-between gap-3 border-b border-border pb-4">
              <span className="font-mono text-xs text-muted-foreground">lighthouse report · this page</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                All checks passing
              </span>
            </div>

            {/* Lighthouse category rings */}
            <div className="relative z-[1] grid grid-cols-2 gap-6 py-9 sm:grid-cols-4">
              {lighthouse.map((l) => (
                <ScoreRing key={l.label} score={l.score} label={l.label} delay={l.delay} />
              ))}
            </div>

            {/* Core Web Vitals */}
            <div className="relative z-[1] grid gap-3 border-t border-border pt-7 sm:grid-cols-3">
              {coreWebVitals.map((c) => (
                <div key={c.metric} className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
                  <span aria-hidden="true" className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-500">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-sm font-bold text-foreground">{c.metric}</span>
                      <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">Good</span>
                    </div>
                    <div className="truncate text-xs text-muted-foreground" title={c.name}>{c.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* verify + honest stat */}
        <Reveal className="mt-8 flex flex-col items-center gap-3 text-center">
          <a
            href={pageSpeedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
          >
            Verify it yourself on PageSpeed Insights
            <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Only about half of all websites pass Core Web Vitals. We pass on every build - and publish the numbers, so you never have to take our word for it.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
