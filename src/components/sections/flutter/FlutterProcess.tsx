import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconPalette, IconCode, IconRocket, IconShield } from "@/components/icons";

// Deliberately differentiated from RnProcess and MobileProcess, which share this template.
// RnProcess's H2 is "From native surfaces to both stores" and its build step is "Build on the New
// Architecture" - both React-Native-specific. Flutter's beats are its own: a design-system step
// before any build (because on Flutter the interface IS the product), and a build step about Dart,
// the rendering engine and platform fidelity.
//
// The fit-check step INVERTS RnProcess's: there we said "if Flutter or going fully native suits
// you better"; here we say "if React Native or going fully native suits you better". Both are true
// and neither page claims to be our default - RnCompare gives that cell to React Native.
//
// MobileProcess deliberately says "we plan around the current requirements" - no review-time SLA,
// no rejection rate, no policy clause number. This process holds that lock. The care line is
// byte-consistent with MobileFaq and MobileProcess.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Discovery & tool fit-check", timeframe: "2-3 days", deliverable: "We scope the app, the interface ambition behind it and the backend it needs, then agree a fixed price in writing - and if React Native or going fully native suits your product better, this is where we say so rather than after you've paid." },
  { icon: <IconPalette className="h-6 w-6" />, title: "Design system & motion", timeframe: "1-2 weeks", deliverable: "On Flutter the interface is the product, so we settle the design language first: a themed widget library, the Material and Cupertino patterns each platform expects, motion rules, accessibility semantics and touch targets, decided before anyone builds a screen on top of them." },
  { icon: <IconCode className="h-6 w-6" />, title: "Build in Dart", timeframe: "weeks", deliverable: "One codebase, one deliberate state architecture, and platform fidelity treated as work rather than luck. Native code written by hand through platform channels or Dart FFI where the ecosystem stops. You see it running on a device each week, not in a slide." },
  { icon: <IconRocket className="h-6 w-6" />, title: "Real-device QA & store submission", timeframe: "before launch", deliverable: "Widget, golden and integration tests, then real, mid-range hardware across the OS versions your audience actually runs, with screen readers switched on. Signed, sent through TestFlight and Play internal testing, and submitted to both stores for you. We build to their current requirements, which we confirm at kickoff." },
  { icon: <IconShield className="h-6 w-6" />, title: "Hand over & care", timeframe: "Ongoing", deliverable: "The repository, the code, the IP and the store accounts are yours. Optional care from $100/month covers monitoring, crash triage, OS-version updates and store compliance - and because a real code change ships through review rather than around it, we plan the release cadence with you." },
];

export function FlutterProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            From one Dart codebase to <span className="gradient-text">both stores</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            We settle the design language before anyone builds a screen, and we&apos;ll tell you at
            the start if Flutter is the wrong tool for your product - so what launches is an app that
            passes review, feels right in the hand, and is still readable by the next team.
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
