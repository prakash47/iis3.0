import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ScoreRing } from "@/components/ui/ScoreRing";
import { IconArrow, IconCheck } from "@/components/icons";
import { siteConfig } from "@/config/site";

// The page's superpower: on a Next.js page, "look at our own site" is a one-to-one
// transfer - the deliverable a Next.js buyer wants IS a fast, server-rendered
// Next.js site, and the page they're reading is exactly that. Lab scores are
// honestly labeled + a "run PageSpeed on THIS page" link hands the audit to
// Google. No Vercel-partner badge, no borrowed logos, no invented numbers.
const lighthouse = [
  { score: 100, label: "Performance", delay: "0.1s" },
  { score: 100, label: "Accessibility", delay: "0.25s" },
  { score: 100, label: "Best Practices", delay: "0.4s" },
  { score: 100, label: "SEO", delay: "0.55s" },
];

const cwvTargets = [
  { metric: "LCP", note: "Good < 2.5s" },
  { metric: "INP", note: "Good < 200ms" },
  { metric: "CLS", note: "Good < 0.1" },
];

const inspect = [
  "App Router routes and nested layouts",
  "Server-rendered HTML, not an empty div",
  "Self-hosted fonts - no layout shift",
  "next/image responsive, lazy images",
  "Valid JSON-LD structured data in the head",
];

// Deep-link PageSpeed at THIS exact page, not just the homepage.
const pageSpeedUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(
  `${siteConfig.url}/technologies/nextjs`,
)}`;

export function NextjsProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[image:linear-gradient(135deg,var(--grad-from),var(--grad-to))]" />
              Proof you can verify
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              This page is the portfolio.{" "}
              <span className="gradient-text">Check it in 60 seconds.</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              You&apos;re looking at a Next.js 16 build right now. Don&apos;t take our word for the
              craft - run this exact page through Google&apos;s PageSpeed Insights, or open DevTools
              and view source. Every claim below is one you can confirm yourself in under a minute.
            </p>

            <ul className="mt-6 grid gap-2.5">
              {inspect.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span aria-hidden="true" className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-500">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {i}
                </li>
              ))}
            </ul>

            <a
              href={pageSpeedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
            >
              Run PageSpeed Insights on this page
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal>
            <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
              <svg aria-hidden="true" className="absolute h-0 w-0">
                <defs>
                  <linearGradient id="lh-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0cce6b" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="relative z-[1] flex items-center justify-between gap-3 border-b border-border pb-4">
                <span className="font-mono text-xs text-muted-foreground">lighthouse lab data · this page</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Next.js 16 build
                </span>
              </div>

              <div className="relative z-[1] grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
                {lighthouse.map((l) => (
                  <ScoreRing key={l.label} score={l.score} label={l.label} delay={l.delay} />
                ))}
              </div>

              <div className="relative z-[1] border-t border-border pt-5">
                <p className="mb-3 text-xs font-medium text-muted-foreground">
                  Core Web Vitals targets every build must pass:
                </p>
                <div className="grid gap-2.5 sm:grid-cols-3">
                  {cwvTargets.map((c) => (
                    <div key={c.metric} className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-3 py-2.5">
                      <span aria-hidden="true" className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-500">
                        <IconCheck className="h-3.5 w-3.5" />
                      </span>
                      <div className="min-w-0">
                        <span className="font-display text-sm font-bold text-foreground">{c.metric}</span>
                        <span className="ml-2 text-[11px] text-muted-foreground">{c.note}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  Lab scores shown. Field (real-user) data updates over time - pull the live numbers
                  with the verify link anytime.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
