import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLayout, IconGauge, IconGrid, IconBolt, IconCode, IconRefresh } from "@/components/icons";

// Interactivity-first use-cases - deliberately distinct from the Next.js page's
// "sites / ecommerce / SaaS delivery" framing. This page owns the React LIBRARY
// layer: apps behind a login, in-product UI, design systems, migrations.
const uses = [
  { icon: <IconCode className="h-5 w-5" />, t: "Single-page apps (SPAs)", d: "The classic React build - React 19 + Vite + routing for app-like products that update instantly, no full reloads." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Dashboards & admin panels", d: "Data-heavy interactive UIs - analytics, BI, CRM screens, booking engines, real-time interfaces behind a login." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Design systems & component libraries", d: "Reusable, accessible, themeable component kits - shadcn/ui and Radix on Tailwind, documented in Storybook." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Embedded React widgets", d: "Drop-in interactive components mounted into an existing, often non-React page - calculators, configurators, portals." },
  { icon: <IconLayout className="h-5 w-5" />, t: "Front-ends for your backend", d: "You have a Django, Laravel, Node or Java API - we build the React UI on top, cleanly and typed." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Legacy front-end migration", d: "Move jQuery or AngularJS to modern React - incrementally, component by component, with nothing breaking." },
];

export function ReactScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with React"
            title="Interfaces, not just websites"
            sub="React is the UI layer - so this is where interactivity lives. A typical React engagement is one of these:"
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {uses.map((u) => (
            <div key={u.t} className="card flex items-start gap-4 p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {u.icon}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{u.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{u.d}</p>
              </div>
            </div>
          ))}
        </Reveal>

        {/* The boundary callout - React vs Next.js, placed high. Routes SEO/framework
            intent to the Next.js spoke with a framework-qualified anchor (never bare React). */}
        <Reveal className="mt-6">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-base font-semibold text-foreground">
                React or Next.js? The honest answer.
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                If it lives behind a login or inside an app - a dashboard, an internal tool, a
                widget - plain React is the right, lighter tool, and that&apos;s this page. But the
                moment a page must rank in Google, React needs server rendering - and the standard
                way to get that is Next.js, a React framework. So for public, SEO-critical sites,
                ecommerce and full-stack apps, see our{" "}
                <Link href="/technologies/nextjs" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                  Next.js development
                </Link>
                . We&apos;ll pick the right one for the job.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            React is one of the stacks behind our{" "}
            <Link href="/services/web-design-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              web design and development services
            </Link>
            . Building a React web app or SaaS?{" "}
            <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              Custom software development
            </Link>{" "}
            covers the systems side. And the same React model powers mobile via{" "}
            <Link href="/technologies/react-native" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              React Native
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
