import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconGrid, IconCode, IconCheck, IconShield } from "@/components/icons";

// An architecture-led enterprise process - distinct in emphasis from the React
// page (component architecture) and Next.js page (engagement modes). Reads as a
// real methodology and carries the page without a portfolio.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Discovery & scope", timeframe: "2-3 days", deliverable: "We map the domain, the data model and any compliance needs, and agree scope and a fixed price up front." },
  { icon: <IconGrid className="h-6 w-6" />, title: "Architecture", timeframe: "days", deliverable: "We design the standalone, signal-based, typed component architecture first, so it scales cleanly as the app grows." },
  { icon: <IconCode className="h-6 w-6" />, title: "Build in sprints", timeframe: "weeks", deliverable: "Engineered in milestones with weekly demos on a live URL - never a black box handed over at the end." },
  { icon: <IconCheck className="h-6 w-6" />, title: "QA & testing", timeframe: "ongoing", deliverable: "Vitest and Playwright, plus accessibility and performance passes, so it ships enterprise-solid." },
  { icon: <IconShield className="h-6 w-6" />, title: "Deploy & support", timeframe: "on delivery", deliverable: "Deployed, documented and handed over with the repository - plus an optional care plan to keep it healthy." },
];

export function AngularProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            Architecture first, <span className="gradient-text">then build</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Angular projects live or die on architecture, so we design the structure before we
            write features - and most builds go from kickoff to live in weeks, with enterprise
            migrations scoped honestly for longer.
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
