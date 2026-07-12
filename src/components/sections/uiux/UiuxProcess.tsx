import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconEye, IconPen, IconLayout, IconCode } from "@/components/icons";

// Named, time-ranged process = reads expert AND builds trust for a portfolio-less
// practice. Step zero is the low, fixed-price audit/sprint - the "prove-it-cheaply"
// entry door - so the buyer never makes a big commitment before seeing the work.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Audit or discovery", timeframe: "step zero", deliverable: "A fixed-price audit or discovery that maps your users, goals and the highest-impact fixes - and scopes the rest." },
  { icon: <IconEye className="h-6 w-6" />, title: "Research & flows", timeframe: "a few days", deliverable: "User flows, information architecture and the problems worth solving, agreed before any pixels." },
  { icon: <IconPen className="h-6 w-6" />, title: "Wireframes", timeframe: "days", deliverable: "Low-fidelity structure and layout, reviewed with you, so we get the bones right before the paint." },
  { icon: <IconLayout className="h-6 w-6" />, title: "UI & design system", timeframe: "1-2 weeks", deliverable: "High-fidelity screens in Figma, built on a reusable token and component system - not one-off mockups." },
  { icon: <IconCode className="h-6 w-6" />, title: "Prototype & handoff", timeframe: "on delivery", deliverable: "A clickable prototype, then dev-ready files, tokens and specs handed over - and they're yours to keep." },
];

export function UiuxProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            How a design engagement <span className="gradient-text">actually runs</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            It starts with a small, fixed-price audit or sprint - so you see our thinking on your
            own product before committing to anything bigger. Then we work in the open: flows,
            wireframes, high-fidelity UI, and a clean handoff you own at the end.
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
