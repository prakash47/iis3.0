import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconPen, IconCode, IconRocket, IconShield } from "@/components/icons";

// Discovery-led process = the anti-quote-wall move + the primary trust substitute
// for a thin portfolio. The paid, fixed-scope Discovery ends in a written scope
// and a FIXED build quote, so a bespoke engagement never feels like a blank cheque.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Discovery", timeframe: "1-2 weeks", deliverable: "A fixed-price discovery that ends in a written scope, an architecture, and a fixed build quote you approve first." },
  { icon: <IconPen className="h-6 w-6" />, title: "Design", timeframe: "1-2 weeks", deliverable: "Data model, flows and the interface for the system, reviewed with you before build." },
  { icon: <IconCode className="h-6 w-6" />, title: "Build", timeframe: "milestones", deliverable: "Engineering in milestones with weekly demos on working software - not a black box." },
  { icon: <IconRocket className="h-6 w-6" />, title: "Launch & handover", timeframe: "on delivery", deliverable: "Deployed, tested and documented - with the code, repository and accounts handed over to you." },
  { icon: <IconShield className="h-6 w-6" />, title: "Care", timeframe: "Ongoing", deliverable: "Optional care from $100/month for monitoring, updates, security and new features." },
];

export function CustomProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            How a custom build <span className="gradient-text">actually runs</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            It starts with a paid discovery that turns a vague idea into a written scope and a
            fixed price - so a bespoke build is never a blank cheque. Then we build in milestones
            with weekly demos, and you own it at the end.
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
