import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBolt, IconLayout, IconServer, IconCode, IconDatabase, IconPen, IconLayers, IconSearch, IconGauge, IconCpu, IconEye, IconType } from "@/components/icons";

// The E-E-A-T CENTREPIECE and proof SUBSTITUTE (there is NO own-site Astro to inspect). Each card
// names a decision a buyer can check on a build we deliver, never "here is ours" (we have no Astro
// repos). Current 2026 vocabulary (islands, Server Islands, Content Layer, MDX, View Transitions,
// Starlight, adapters) - feature-framed, no version numbers, no KB-of-JS figure, no Lighthouse/CWV
// score. Performance is method/goal only. The headless-CMS card names sources Astro reads, and
// routes editor-run content to WordPress, so it does not pre-pitch the other CMS spokes.
const caps = [
  { icon: <IconBolt className="h-5 w-5" />, t: "Zero JavaScript by default", d: "The default output of an Astro page is HTML and CSS with no client framework attached; JS ships only for components you hydrate. What you check: view source on a delivered content page and the interactive-heavy bundle a typical React framework sends for the same page is simply not there." },
  { icon: <IconLayout className="h-5 w-5" />, t: "Islands and selective hydration", d: "A page is mostly static HTML with isolated interactive islands, each hydrated on an explicit directive - on load, when idle, when scrolled into view, or at a breakpoint. What you check: every island's directive is a line in the code, so why a component ships JavaScript always has a named answer." },
  { icon: <IconServer className="h-5 w-5" />, t: "Server Islands", d: "Server Islands combine cached static HTML with a slot rendered on the server per request, on one page - the fast shell stays instant while a genuinely dynamic piece (a personalised block, live inventory) renders server-side without turning the whole route dynamic. An established part of the framework, not a preview feature." },
  { icon: <IconCode className="h-5 w-5" />, t: "Framework-agnostic islands", d: "An island can be React, Vue, Svelte or Solid, and more than one can coexist on a page. What this unlocks: an existing React component mounts as an island inside a static Astro site instead of being rebuilt. This is also our honest adjacency - our own site is React, so the React-island path is the one closest to what we run." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Content Layer, typed", d: "The Content Layer gives content a typed, validated interface wherever it lives - local Markdown and MDX, a headless CMS, a database - loaded through a schema. What you check: content shape is verified at build time, so a missing field or wrong type is a build error, not a runtime surprise in production." },
  { icon: <IconPen className="h-5 w-5" />, t: "Content collections and MDX", d: "Collections organise content into schema-validated groups (posts, docs, case studies) with type-safe frontmatter, and MDX lets a Markdown document embed a live component inline - a chart or an interactive island dropped into the middle of prose without leaving the content file." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Astro over a headless CMS", d: "Astro reads a headless source - Sanity, Strapi, Contentful, or WordPress used headless - as a data source through the Content Layer, and renders fast static or hybrid output. The CMS is where non-developers edit; Astro is the presentation layer. If day-to-day editing is the whole point, we would route you to WordPress directly rather than pitch a headless build." },
  { icon: <IconSearch className="h-5 w-5" />, t: "SEO by construction", d: "Because the build is pre-rendered static HTML, the markup a crawler sees is the final content with no client render step, and semantic elements are the baseline. What you check: real headings, articles and landmarks in the shipped source. The same semantic baseline is a good start for accessibility, which we claim as method, never as a finished property." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Performance levers, measured on you", d: "Built-in image optimization, View Transitions for animated navigations, and link prefetch are the levers we build toward passing Core Web Vitals. We treat CWV as a goal and a method, measured on your pages after launch - we put no score on this page, and we never reuse our Next.js site's numbers as if they were an Astro result." },
  { icon: <IconCpu className="h-5 w-5" />, t: "SSR, hybrid and edge deploy", d: "Astro is not static-only: routes can be pre-rendered, server-rendered, or mixed per page. It deploys to any target through adapters - a static host, a Node server, or an edge platform - and stays platform-agnostic. We pick the rendering mode per route and the deploy target to fit your infrastructure, not a single vendor." },
  { icon: <IconEye className="h-5 w-5" />, t: "Where islands end and an app begins", d: "Islands cover a lot - forms, menus, sliders, modals, embedded React widgets, filtered lists. The honest boundary is behaviour: when a project needs authenticated dashboards, heavy client state or constantly-changing data-driven views, that is a Next.js build, and we say so rather than bend Astro into an app it was not designed to be." },
  { icon: <IconType className="h-5 w-5" />, t: "Vite tooling, TypeScript, migrations", d: "Astro is Vite-based with first-class TypeScript, a broad integrations ecosystem, and Starlight, Astro's documentation-site toolkit. Moving a site off Gatsby, Jekyll, Hugo or a heavy WordPress theme onto Astro is a defined, scoped lane - typed code, a modern build, and adapters chosen to match where you deploy." },
];

export function AstroCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we engineer Astro"
            title="Modern Astro, decision by decision"
            sub="There is no live Astro running this static Next.js site to point at, so the proof is the discipline. Everything here is a decision you can inspect on a build we deliver - a client directive, a typed content schema, a rendering mode - which is the point: you should never have to take our word for what a fast content site looks like."
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

        {/* The senior-opinion default line. Offer-framed (how we WOULD build), never a record. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">How we take on an Astro build:</span>{" "}
              decide first whether it is really a content site at all, then model the content as typed
              collections before layout, build static-first and add islands one directive at a time,
              bake in image optimization and semantic HTML rather than auditing performance at the end,
              and choose the rendering mode and adapter to match where you deploy. When the project is
              really an app, that is{" "}
              <Link href="/technologies/nextjs" className="font-medium text-brand-500 hover:text-brand-600">
                Next.js
              </Link>
              ; when it is content a team edits daily, that is{" "}
              <Link href="/technologies/wordpress" className="font-medium text-brand-500 hover:text-brand-600">
                WordPress
              </Link>
              . We say which before we quote.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
