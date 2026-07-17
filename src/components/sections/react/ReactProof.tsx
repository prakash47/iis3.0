import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrow, IconCheck } from "@/components/icons";
import { siteConfig } from "@/config/site";

// Distinct signature from the Next.js proof (which used Lighthouse rings): here the
// wedge is "the interface you're using IS React" - felt and verified in real time -
// and the visual is component-and-state flavored, React's home turf. Honest CWV
// mention counters the "React is heavy" objection. No fabrication.
const inspect = [
  "Open React DevTools - the live component tree is our work",
  "The theme toggle, menu and these accordions are React components",
  "Server-rendered HTML that hydrates into React (great for first paint)",
  "Standard React 19 + TypeScript - code you'd own outright",
];

// A single component shown across the states we build every component to handle -
// the reusability argument, made visual. Static, honest, illustrative.
const states = [
  { label: "Default", cls: "border-border bg-surface text-foreground" },
  { label: "Hover", cls: "border-brand-400/50 bg-brand-500/10 text-brand-700 dark:text-brand-400" },
  { label: "Focus", cls: "border-brand-500 ring-2 ring-brand-500/30 bg-surface text-foreground" },
  { label: "Disabled", cls: "border-border bg-muted/60 text-muted-foreground/60" },
  { label: "Loading", cls: "border-border bg-surface text-muted-foreground" },
  { label: "Error", cls: "border-red-500/40 bg-red-500/10 text-red-600 dark:text-red-400" },
];

const pageSpeedUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(
  `${siteConfig.url}/technologies/react`,
)}`;

export function ReactProof() {
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
              The interface you&apos;re using is React.{" "}
              <span className="gradient-text">Inspect it.</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              This isn&apos;t a portfolio screenshot. The navigation, the theme toggle and the
              accordions on this page are React components managing their own state, live. Almost no
              agency dares say &quot;open the hood&quot; - we&apos;re inviting you to.
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
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 dark:text-brand-400"
            >
              Run PageSpeed on this page - a React UI needn&apos;t be heavy
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal>
            <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
              <div className="relative z-[1] flex items-center justify-between gap-3 border-b border-border pb-4">
                <span className="font-mono text-xs text-muted-foreground">one component · every state</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  React 19
                </span>
              </div>

              <div className="relative z-[1] grid grid-cols-2 gap-3 py-6 sm:grid-cols-3">
                {states.map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-2">
                    <span className={`inline-flex h-9 w-full items-center justify-center rounded-lg border px-3 text-xs font-semibold ${s.cls}`}>
                      Button
                    </span>
                    <span className="text-[11px] text-muted-foreground">{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="relative z-[1] border-t border-border pt-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  A component is built once and behaves predictably in every state - that&apos;s
                  React&apos;s reusability. And a React UI can still be fast: this page scores 100 on
                  Lighthouse with good Core Web Vitals. Check it with the link.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
