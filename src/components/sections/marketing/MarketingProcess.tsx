import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconPen, IconCode, IconCheck, IconTrendingUp } from "@/components/icons";

// Audit-led + monthly cadence. SEO timelines are set HONESTLY (weeks for
// technical fixes, 3-6 months for meaningful movement) - never "fast rankings".
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Audit", timeframe: "~1 week", deliverable: "A fixed-price audit of your site, content and AI-search readiness, with prioritized fixes and a recommended plan." },
  { icon: <IconPen className="h-6 w-6" />, title: "Strategy", timeframe: "with the plan", deliverable: "We map keywords, search intent, content and AI-search targets to your actual business goals." },
  { icon: <IconCode className="h-6 w-6" />, title: "Execute", timeframe: "monthly", deliverable: "Technical fixes, content, on-page, authority and AEO/GEO work on a steady monthly cadence." },
  { icon: <IconCheck className="h-6 w-6" />, title: "Report", timeframe: "monthly", deliverable: "A transparent monthly report - what we did, what moved, what's next. No vanity metrics, no black box." },
  { icon: <IconTrendingUp className="h-6 w-6" />, title: "Compound", timeframe: "ongoing", deliverable: "Organic and AI-search visibility compound month over month - an asset you own, not rented clicks." },
];

export function MarketingProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            How organic growth <span className="gradient-text">actually runs</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            It starts with a fixed-price audit, then a monthly plan scoped to your goals. Technical
            fixes can show in weeks, meaningful organic movement usually takes 3-6 months, and real
            authority compounds over 6-12 - we report monthly from day one, so you&apos;re never guessing.
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
