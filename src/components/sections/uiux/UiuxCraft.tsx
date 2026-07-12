import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconSearch, IconPen, IconLayout, IconGrid, IconCode, IconCheck } from "@/components/icons";

// Craft evidence that stands in for a portfolio - all of it real. The tokens and
// type scale below are the ones that render this very page; the pipeline is our
// actual method; the deliverables are what a client genuinely receives. Nothing
// here is a mockup of work we haven't done.
const swatches = [
  { hex: "#00a0e3", name: "Brand / cyan" },
  { hex: "#393185", name: "Accent / indigo" },
  { hex: "linear-gradient(135deg, #00a0e3, #6d5efc)", name: "Gradient", isGradient: true },
  { hex: "#10b981", name: "Success" },
];

const typeScale = [
  { label: "Display", cls: "font-display text-3xl font-extrabold tracking-tight text-foreground", sample: "Aa" },
  { label: "Heading", cls: "font-display text-xl font-bold text-foreground", sample: "Aa" },
  { label: "Body", cls: "text-base text-foreground", sample: "Aa" },
  { label: "Caption", cls: "text-xs text-muted-foreground", sample: "Aa" },
];

const states = ["Default", "Hover", "Focus", "Disabled", "Error", "Empty"];

const pipeline = [
  { icon: <IconSearch className="h-5 w-5" />, t: "Discovery" },
  { icon: <IconPen className="h-5 w-5" />, t: "Wireframe" },
  { icon: <IconLayout className="h-5 w-5" />, t: "Hi-fi in Figma" },
  { icon: <IconGrid className="h-5 w-5" />, t: "Tokens" },
  { icon: <IconCode className="h-5 w-5" />, t: "Live in the browser" },
];

const deliverables = [
  "Editable Figma files, organized and yours to keep",
  "A UI kit / component library with real states",
  "Design tokens as CSS variables or JSON",
  "A clickable, high-fidelity prototype",
  "An accessibility pass on every screen",
  "Dev-ready handoff, specs and redlines",
  "Full ownership of the files and IP",
];

export function UiuxCraft() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Craft & deliverables"
            title="The system, the method, and what you take home"
            sub="Instead of a portfolio wall, here's the machinery - the same tokens and type scale that render this page, the exact pipeline we'd run for you, and the files you walk away owning."
          />
        </Reveal>

        {/* A real slice of this site's design system */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <p className="relative z-[1] text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              A slice of the system rendering this page
            </p>

            <div className="relative z-[1] mt-6 grid gap-8 lg:grid-cols-3">
              {/* Color tokens */}
              <div>
                <p className="text-sm font-semibold text-foreground">Color tokens</p>
                <ul className="mt-3 space-y-2.5">
                  {swatches.map((s) => (
                    <li key={s.name} className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="h-8 w-8 shrink-0 rounded-lg border border-border"
                        style={{ background: s.hex }}
                      />
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-foreground">{s.name}</span>
                        <span className="block font-mono text-xs text-muted-foreground">
                          {s.isGradient ? "cyan -> violet" : s.hex}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Type scale */}
              <div>
                <p className="text-sm font-semibold text-foreground">Type scale</p>
                <ul className="mt-3 space-y-3">
                  {typeScale.map((t) => (
                    <li key={t.label} className="flex items-baseline gap-3">
                      <span className={t.cls}>{t.sample}</span>
                      <span className="text-xs text-muted-foreground">{t.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Component states */}
              <div>
                <p className="text-sm font-semibold text-foreground">Every component, every state</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We design the whole component, not just the happy path.
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {states.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* The pipeline, one component's journey */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <p className="text-sm font-semibold text-foreground">
              How one component travels from idea to live
            </p>
            <div className="relative mt-8">
              <div
                aria-hidden="true"
                className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-brand-500/50 via-accent-400/40 to-transparent sm:block"
              />
              <ol className="grid gap-6 sm:grid-cols-5">
                {pipeline.map((p, i) => (
                  <li key={p.t} className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
                    <span className="relative z-[1] inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface-2 text-brand-500 shadow-[0_0_0_5px_var(--surface)]">
                      {p.icon}
                    </span>
                    <span className="mt-3 text-sm font-medium text-foreground">
                      <span className="text-muted-foreground">{i + 1}. </span>
                      {p.t}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>

        {/* What you get + honest exclusions */}
        <Reveal className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="card p-6 lg:col-span-2">
            <h3 className="font-display text-base font-semibold text-foreground">
              What you walk away with
            </h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              What we don&apos;t do
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We&apos;re a digital product design practice - so we don&apos;t take on print,
              packaging or trademark registration. If that&apos;s what you need, we&apos;ll say so
              and point you to someone better.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
