import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconPen, IconCode, IconRocket, IconShield } from "@/components/icons";

// Each step carries a meaningful icon + a concrete timeframe, so the process
// reads as a real methodology (and the timeframes add up to "weeks, not months").
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Discovery", timeframe: "2-3 days", body: "A short paid discovery locks scope, goals and a fixed price - before any build starts." },
  { icon: <IconPen className="h-6 w-6" />, title: "Design", timeframe: "1-2 weeks", body: "Conversion-focused UI/UX in your brand, reviewed together at every milestone." },
  { icon: <IconCode className="h-6 w-6" />, title: "Build", timeframe: "2-4 weeks", body: "Fast, accessible, SEO-ready engineering on a modern stack, with weekly demos." },
  { icon: <IconRocket className="h-6 w-6" />, title: "Launch", timeframe: "2-3 days", body: "Performance-tuned and schema-complete, measured against real Core Web Vitals." },
  { icon: <IconShield className="h-6 w-6" />, title: "Care", timeframe: "Ongoing", body: "Optional care plans for hosting, security, monitoring and steady growth." },
];

export function ProcessBand() {
  return (
    <section className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            A fixed-scope process with <span className="gradient-text">zero surprises</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Weekly demos, clear milestones, and a fixed price agreed up front - most sites go from kickoff to live in 2-6 weeks.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* connecting timeline line (desktop) */}
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
                {/* icon node */}
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
                  {p.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
