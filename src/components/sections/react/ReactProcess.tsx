import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconGrid, IconCode, IconCheck, IconShield } from "@/components/icons";

// A component-architecture-flavored process (distinct from the Next.js page's
// 3-engagement-modes band). Reads as a real methodology and carries the page
// without a portfolio.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Discovery & UX", timeframe: "2-3 days", deliverable: "We map the flows, states and data your interface needs, and agree scope and a fixed price up front." },
  { icon: <IconGrid className="h-6 w-6" />, title: "Component architecture", timeframe: "days", deliverable: "We design the component tree and state model first - reusable, typed and accessible from the start." },
  { icon: <IconCode className="h-6 w-6" />, title: "Build in sprints", timeframe: "weeks", deliverable: "Components built and wired to your data, demoed on a live URL every week - never a black box." },
  { icon: <IconCheck className="h-6 w-6" />, title: "Test & polish", timeframe: "ongoing", deliverable: "React Testing Library and Playwright, plus accessibility and performance passes, so it ships solid." },
  { icon: <IconShield className="h-6 w-6" />, title: "Launch & care", timeframe: "on delivery", deliverable: "Deployed, documented and handed over - with an optional care plan to keep it healthy." },
];

export function ReactProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            From flows to a <span className="gradient-text">shipped React app</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            We architect the components and state before we build, so the codebase stays clean as it
            grows - and most React builds go from kickoff to live in weeks, not months.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-8 right-8 top-7 hidden h-px bg-gradient-to-r from-brand-500/60 via-accent-400/50 to-transparent lg:block"
          />
          <Reveal group className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((p) => (
              <div
                key={p.title}
                className="group/step relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="relative z-[1] flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] text-brand-300 shadow-[0_0_0_7px_var(--band)] backdrop-blur transition-colors duration-300 group-hover/step:border-brand-400/50 group-hover/step:text-brand-200">
                  {p.icon}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 lg:justify-start">
                  <h3 className="font-display text-base font-semibold text-white">{p.title}</h3>
                  <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold text-brand-300">
                    {p.timeframe}
                  </span>
                </div>
                <p className="mt-2.5 max-w-[15rem] text-sm leading-relaxed text-slate-400 lg:max-w-none">
                  {p.deliverable}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
