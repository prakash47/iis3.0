import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconCode, IconRocket, IconTrendingUp, IconCheck } from "@/components/icons";

// Audit-led, then honest about the platform learning phase (real timelines, not
// "instant results"). Process transparency is a primary trust substitute where
// there is no ROAS to show.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Audit", timeframe: "~1 week", deliverable: "A fixed-price audit of your accounts, tracking and wasted spend, with a prioritized plan you keep." },
  { icon: <IconCode className="h-6 w-6" />, title: "Set up & track", timeframe: "days", deliverable: "We build or restructure campaigns in your accounts, with proper conversion tracking and attribution." },
  { icon: <IconRocket className="h-6 w-6" />, title: "Launch", timeframe: "go live", deliverable: "Creative, targeting and campaigns live - built to your funnel and the budget that can prove it." },
  { icon: <IconTrendingUp className="h-6 w-6" />, title: "Optimize", timeframe: "ongoing", deliverable: "We read the platforms' real learning timelines - Meta about 1-2 weeks, PMax 4-6 - and optimize on data, not vanity." },
  { icon: <IconCheck className="h-6 w-6" />, title: "Report", timeframe: "monthly", deliverable: "A plain-language monthly report - revenue, leads and cost-per-result, never impressions and CTR." },
];

export function PerfProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            How we run <span className="gradient-text">paid media</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            It starts with a fixed-price audit, built in your own accounts. Paid is faster than
            SEO but not instant - campaigns need a learning phase before the data means anything,
            and we won&apos;t declare victory in week one or panic in week two.
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
