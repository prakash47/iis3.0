import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconGauge, IconSearch, IconLayers, IconRocket, IconTrendingUp, IconSpark } from "@/components/icons";

// The honest "why Next.js" benefit pillars, tied to business outcomes. Framework-
// level facts (React ecosystem, active development) stated as fact, not as a
// partner claim. Nothing fabricated.
const pillars = [
  { icon: <IconGauge className="h-5 w-5" />, t: "Fast by construction", d: "Server rendering, streaming and image and font optimization mean a fast LCP and clean CLS are the default path, not a rescue project bolted on later." },
  { icon: <IconSearch className="h-5 w-5" />, t: "SEO-friendly by design", d: "Real server-rendered HTML, a first-class Metadata API and structured data, so search engines and AI answer engines see content - not a blank JavaScript shell." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Hybrid rendering, per route", d: "Static, incrementally regenerated, server-rendered or streamed - chosen page by page under one model, so the site never needs re-platforming as it grows." },
  { icon: <IconRocket className="h-5 w-5" />, t: "Shipped in weeks", d: "A mature, batteries-included framework means we build in weeks, not months - you don't pay us to reinvent routing, bundling and image tooling." },
  { icon: <IconTrendingUp className="h-5 w-5" />, t: "Scales with you", d: "One codebase from a landing page to a full SaaS - React on the client, server actions and API routes on the server, no rewrite in between." },
  { icon: <IconSpark className="h-5 w-5" />, t: "A stack with staying power", d: "React's ecosystem plus Next.js's active development mean talent, libraries and longevity - you're not betting the product on an orphan framework." },
];

export function NextjsWhy() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Next.js"
            title="Why teams build on Next.js"
            sub="Next.js is the React framework we reach for when performance, SEO and room to grow all matter. Here's what it actually buys you - and further down, honestly, when it isn't the right call."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.t} className="card flex flex-col p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {p.icon}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{p.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
