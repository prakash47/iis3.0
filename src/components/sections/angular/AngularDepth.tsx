import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBolt, IconRefresh, IconCode, IconLayout, IconLayers, IconSearch, IconCheck, IconGrid, IconDatabase, IconEye, IconServer, IconShield } from "@/components/icons";

// The E-E-A-T CENTREPIECE and the main proof substitute (since there is no
// own-site Angular wedge). Correct, current Angular 22 (June 2026) vocabulary,
// framed as honest capability. Dated framing (NgModules, Zone.js, *ngIf) would
// instantly mark us as amateur; this is written to read like a senior Angular
// engineer wrote it.
const caps = [
  { icon: <IconBolt className="h-5 w-5" />, t: "Signals", d: "signal(), computed() and effect(), plus signal-based inputs and queries - fine-grained reactivity, so Angular updates exactly what changed. The default mental model now, not an add-on." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Zoneless change detection", d: "Zone.js is dropped by default in v22; updates are driven explicitly by signals. Smaller bundles, better runtime performance, and no more whole-tree dirty-checking." },
  { icon: <IconCode className="h-5 w-5" />, t: "Standalone components", d: "The default since v17 - components declare their own dependencies, so NgModule boilerplate is gone. This is the change that made Angular feel modern again." },
  { icon: <IconLayout className="h-5 w-5" />, t: "Built-in control flow", d: "@if, @for and @switch as first-class template syntax, replacing *ngIf and *ngFor - faster, cleaner and better type-narrowing." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Deferrable views (@defer)", d: "Declarative lazy loading with triggers - on viewport, on idle, on interaction - a real lever for bundle size and Largest Contentful Paint." },
  { icon: <IconSearch className="h-5 w-5" />, t: "SSR + incremental hydration", d: "Angular's own server-side rendering with hydration, incremental as of v22 - so an Angular app renders for search engines and crawlers without borrowing another framework." },
  { icon: <IconCheck className="h-5 w-5" />, t: "Typed & Signal Forms", d: "Strictly typed reactive forms plus the new signal-based forms - Angular's batteries-included strength for the form-heavy enterprise apps it's built for." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Dependency injection", d: "Angular's hierarchical DI with inject() and provide functions - the backbone of testable, swappable, large-team architecture, and a genuine edge over a library." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Reactive data & RxJS", d: "resource() and httpResource() for signal-based async loading, error and refresh - with RxJS kept for what it's best at: streams and complex async orchestration." },
  { icon: <IconEye className="h-5 w-5" />, t: "Tested & accessible", d: "Vitest as the v22 default for unit tests, Playwright end-to-end, and accessible patterns from @angular/aria plus WCAG-minded component work." },
  { icon: <IconServer className="h-5 w-5" />, t: "Built to scale (Nx)", d: "Nx monorepos with enforced module boundaries and affected-only builds, and micro-frontends where a large organization composes independently deployed apps." },
  { icon: <IconShield className="h-5 w-5" />, t: "Angular Material + CDK", d: "A mature, accessible, Google-maintained design system and Component Dev Kit - the batteries-included UI that regulated enterprises trust." },
];

export function AngularDepth() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Angular in 2026"
            title="Modern Angular, done right"
            sub="The fastest way to tell a real Angular team from a generalist is the vocabulary. Here's the depth we bring - current to Angular 22, not the Angular of 2018."
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
      </Container>
    </Section>
  );
}
