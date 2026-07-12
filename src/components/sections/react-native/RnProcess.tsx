import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconPen, IconCode, IconRocket, IconShield } from "@/components/icons";

// A React-Native-shaped process. The distinctive beats: a tool fit-check up front (we will say if
// Flutter or fully native suits you better), an explicit NATIVE-SURFACE scope before any design,
// real-device QA rather than simulators, and a store submission step that names no review time.
//
// MobileProcess deliberately says "we plan around the current App Store and Google Play review and
// testing requirements" - no hard policy numbers, no review-time SLA, no clause numbers. This
// process must not break that lock.
//
// Every step is METHOD ("we scope", "we build", "we submit"), never a record ("we've launched").
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Discovery & tool fit-check", timeframe: "2-3 days", deliverable: "We scope the app, the native surfaces it touches and the backend behind it, then agree a fixed price in writing - and if Flutter or going fully native suits your product better, this is where we say so rather than after you've paid." },
  { icon: <IconPen className="h-6 w-6" />, title: "Native surface & design", timeframe: "1-2 weeks", deliverable: "We map every place the app leaves JavaScript - permissions, push, deep links, offline, hardware, third-party SDKs - and design the screens around real platform patterns, so iOS feels like iOS and Android feels like Android." },
  { icon: <IconCode className="h-6 w-6" />, title: "Build on the New Architecture", timeframe: "weeks", deliverable: "One codebase, real native views, a short dependency list checked for New-Architecture support, and hand-written native modules where the ecosystem stops. You see it running on a device each week, not in a slide." },
  { icon: <IconRocket className="h-6 w-6" />, title: "Real-device QA & store submission", timeframe: "before launch", deliverable: "Tested on real, mid-range hardware across the OS versions your audience actually runs, then signed, sent through TestFlight and Play internal testing, and submitted to both stores for you. We build to their current requirements, which we confirm at kickoff." },
  { icon: <IconShield className="h-6 w-6" />, title: "Hand over & care", timeframe: "Ongoing", deliverable: "The repository, the code, the IP and the store accounts are yours. Optional care from $100/month covers monitoring, crash triage, OS-version updates and store compliance - because iOS and Android keep moving whether or not your app does." },
];

export function RnProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            From native surfaces to <span className="gradient-text">both stores</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            We map the native layer before anyone designs a screen, and we&apos;ll tell you at the
            start if React Native is the wrong tool for your product - so what launches is an app that
            passes review, feels native in the hand, and can still be upgraded in two years.
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
