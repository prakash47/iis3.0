import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconGrid, IconCode, IconGauge, IconPen } from "@/components/icons";

// A WordPress-shaped process with the distinctive beats: a fit-check up front (we'll tell
// you if WordPress is wrong for you), a plugin/security audit, a performance pass, and
// editor training + care-plan handoff. Emphasizes "you own the site, content and hosting".
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Discovery & fit-check", timeframe: "2-3 days", deliverable: "We map your content, who edits it and how, and agree scope and a fixed price - and if WordPress is the wrong tool for you, this is where we tell you." },
  { icon: <IconGrid className="h-6 w-6" />, title: "Content model & design", timeframe: "days", deliverable: "We plan the information architecture and content model, and design a lean custom block theme - the structure your editors work in every day." },
  { icon: <IconCode className="h-6 w-6" />, title: "Build & plugin audit", timeframe: "weeks", deliverable: "We build the block theme and custom blocks, and choose a short, audited plugin list - every plugin justifies its place - demoed on a staging URL each week." },
  { icon: <IconGauge className="h-6 w-6" />, title: "Performance & security pass", timeframe: "before launch", deliverable: "Caching, image and Core Web Vitals work, plus a security hardening pass - so it launches fast and safe, not slow plugin-soup." },
  { icon: <IconPen className="h-6 w-6" />, title: "Train, hand over & care", timeframe: "on delivery", deliverable: "We train your team on the admin, hand over full access to the site, content and hosting you own - and keep it healthy on a care plan." },
];

export function WordpressProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            From content model to <span className="gradient-text">a WordPress site your team runs</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            We plan the content and the editing experience before we build, and we&apos;ll tell you at
            the start if WordPress is the wrong fit - so what launches is a fast, secure site your team
            can actually run, not a slow one to rescue later.
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
