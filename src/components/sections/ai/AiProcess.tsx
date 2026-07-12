import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconCpu, IconCode, IconShield } from "@/components/icons";

// Diagnose -> Pilot -> Build -> Support is the near-universal spine of applied-AI
// pages, and it reads as competence with no portfolio. The Pilot step is the
// centrepiece: it is how we substitute buyer-controlled proof for a case study.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Diagnose", timeframe: "week one", deliverable: "We map the task, your data and whether AI is even the right tool - and we'll tell you honestly if it isn't." },
  { icon: <IconCpu className="h-6 w-6" />, title: "Pilot", timeframe: "a short sprint", deliverable: "A working proof-of-concept on your own data, so you see it work before committing - ending in a go/no-go and a scoped quote." },
  { icon: <IconCode className="h-6 w-6" />, title: "Build", timeframe: "weeks", deliverable: "We build the full feature with grounding, guardrails and evaluation, integrated into your site, app or tools." },
  { icon: <IconShield className="h-6 w-6" />, title: "Support", timeframe: "ongoing", deliverable: "We monitor, evaluate and improve it as your content and the models evolve - optional and month-to-month." },
];

export function AiProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            You don&apos;t have to trust it. <span className="gradient-text">You get to test it.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Because AI results depend entirely on your data, we don&apos;t ask you to take our word
            for it. We prove it on a small pilot first, then build the full thing only once
            you&apos;ve seen it work.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-8 right-8 top-7 hidden h-px bg-gradient-to-r from-brand-500/60 via-accent-400/50 to-transparent lg:block"
          />
          <Reveal group className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
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
