import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCode, IconLayers, IconGauge, IconSearch, IconBolt, IconServer, IconGrid, IconRefresh, IconCheck } from "@/components/icons";

// The E-E-A-T core: correct, current 2026 Next.js vocabulary framed as honest
// capability ("we build X this way"), never a boast. Naming INP (not FID), the
// App Router, RSC, on-demand ISR and the Metadata API is what dates this page as
// genuinely expert rather than copied from 2022.
const caps = [
  { icon: <IconCode className="h-5 w-5" />, t: "App Router + Server Components", d: "App-Router-first, with React Server Components as the default so less JavaScript ships. Interactivity stays in client islands; everything else renders on the server." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Rendering, chosen per route", d: "SSG for static content, ISR with on-demand revalidation for content that changes, SSR for personalized views, and streaming with Suspense so the shell paints instantly." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Core Web Vitals engineering", d: "Built to the real thresholds - LCP under ~2.5s, INP under 200ms, CLS under 0.1 at the 75th percentile - with server rendering, minimal client JS and reserved media sizing." },
  { icon: <IconSearch className="h-5 w-5" />, t: "SEO, metadata & structured data", d: "The Metadata API and generateMetadata, canonicals, Open Graph, sitemap.ts and robots.ts, and JSON-LD - all server-rendered so crawlers and AI engines get real content." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Image & font optimization", d: "next/image for responsive, lazy, modern-format images with reserved dimensions, and next/font for self-hosted fonts with zero layout shift and no third-party request." },
  { icon: <IconServer className="h-5 w-5" />, t: "Caching & the edge", d: "Intentional caching across the framework, CDN and revalidation layers - time-based and tag-based - plus edge middleware for redirects, auth and geo where it earns its place." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Headless CMS integration", d: "Next.js as the fast front end over Sanity, Contentful, Strapi or Payload - or WordPress kept headless, so your editors keep the tool they know." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Migrations, done safely", d: "Move from WordPress, Create React App, Gatsby or a legacy Pages-Router app to a modern App Router build - incrementally, with URLs and redirects mapped so rankings survive." },
];

// The per-layer rendering decision - the single strongest "we know what we're
// doing" signal, and it costs nothing to state honestly.
const renderingCalls = [
  { layer: "Marketing & landing pages", call: "Static (SSG)" },
  { layer: "Blogs & product catalogs", call: "ISR + on-demand revalidation" },
  { layer: "Dashboards, accounts, checkout", call: "Server-rendered (SSR)" },
  { layer: "Slow or third-party data", call: "Streamed with Suspense" },
];

export function NextjsCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we build"
            title="Next.js done the 2026 way"
            sub="The difference between a senior Next.js build and a scaffolded one is judgment - knowing which rendering strategy, cache layer and boundary to use, and why. Here's the depth we bring."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caps.map((c) => (
            <div key={c.t} className="card flex flex-col p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {c.icon}
              </span>
              <h3 className="mt-4 font-display text-sm font-semibold text-foreground">{c.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </Reveal>

        {/* The rendering decision table - the expertise signal */}
        <Reveal className="mt-6">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-base font-semibold text-foreground">
                How we decide what renders where
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Rendering is a per-route decision in Next.js, not a global switch. That judgment is
                most of the performance win:
              </p>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {renderingCalls.map((r) => (
                  <li key={r.layer} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                    <span aria-hidden="true" className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-500">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-foreground">{r.layer}</span>
                      <span className="block font-mono text-xs text-brand-500">{r.call}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
