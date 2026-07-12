import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconSpark, IconBolt, IconCode, IconGrid, IconGauge, IconCheck, IconEye, IconLayers } from "@/components/icons";

// The E-E-A-T core, LIBRARY-layer (distinct from the Next.js page's rendering-layer
// depth). Correct, current React 19 + 2026 vocabulary framed as honest capability.
// Naming Actions/use()/the Compiler/TanStack Query+Zustand dates the page as 2026.
const caps = [
  { icon: <IconSpark className="h-5 w-5" />, t: "React 19 in practice", d: "Actions and useActionState for forms and async, useOptimistic for instant feedback, the use() hook to read data in render, and ref-as-prop (no more forwardRef ceremony)." },
  { icon: <IconBolt className="h-5 w-5" />, t: "The React Compiler", d: "We write straightforward components and let the compiler auto-memoize, instead of littering the code with manual useMemo and useCallback." },
  { icon: <IconCode className="h-5 w-5" />, t: "Custom hooks", d: "Reusable stateful logic extracted into hooks - useDebounce, useMediaQuery, data hooks - the real unit of reuse in a React codebase." },
  { icon: <IconGrid className="h-5 w-5" />, t: "State, by type", d: "Server data in TanStack Query, client state in Zustand, config in Context, the URL for shareable state - not one global store for everything." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Performance", d: "Code-splitting and lazy loading, Suspense boundaries, and list virtualization for large tables and feeds, so big apps stay responsive." },
  { icon: <IconCheck className="h-5 w-5" />, t: "TypeScript-first", d: "Typed props, hooks and store selectors by default - fewer runtime surprises and safer refactors as the app grows." },
  { icon: <IconEye className="h-5 w-5" />, t: "Tested & accessible", d: "React Testing Library on Vitest, Playwright end-to-end, and Storybook for components - with semantic HTML, ARIA and keyboard support built in." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Design systems", d: "Reusable, themeable, accessible component libraries on shadcn/ui and Radix with Tailwind - React's home turf, and yours to own." },
];

export function ReactCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we engineer React"
            title="React the 2026 way, not the 2020 way"
            sub="The difference between a senior React build and a scaffolded one is judgment - the right state tool, the right hook, the right component boundary. Here's the depth we bring."
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

        {/* The state-architecture line - a distinct senior-judgment signal */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Our default state architecture:</span>{" "}
              server data lives in TanStack Query, client and UI state in Zustand, slow-moving config
              like theme and auth in Context, and shareable state in the URL. Redux Toolkit only when
              a large, multi-team app genuinely calls for it. Most apps need less global state than
              they think - and that restraint is most of what keeps a React codebase maintainable.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
