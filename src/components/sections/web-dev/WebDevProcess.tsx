import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconPen, IconCode, IconRocket, IconShield } from "@/components/icons";

// A fixed-scope process where each phase names a concrete deliverable, so it
// reads as engineering discipline - not a vague "shipped in weeks" claim.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Discovery", timeframe: "2-3 days", deliverable: "A written scope, the recommended stack, and a fixed quote you approve before any build starts." },
  { icon: <IconPen className="h-6 w-6" />, title: "Design", timeframe: "1-2 weeks", deliverable: "Key pages designed and signed off, so nothing is a surprise at build." },
  { icon: <IconCode className="h-6 w-6" />, title: "Build", timeframe: "2-4 weeks", deliverable: "A working site on a staging URL you can click through, demoed weekly." },
  { icon: <IconRocket className="h-6 w-6" />, title: "Launch", timeframe: "2-3 days", deliverable: "A live site with real Core Web Vitals measured, plus code you own." },
  { icon: <IconShield className="h-6 w-6" />, title: "Care", timeframe: "Ongoing", deliverable: "An optional care plan from $100/month - only if you want it." },
];

export function WebDevProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            How a fixed-scope web project <span className="gradient-text">actually runs</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Weekly demos, clear milestones and a fixed price agreed up front - most sites go from
            kickoff to live in 2-6 weeks, web-app MVPs in 6-10.
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
