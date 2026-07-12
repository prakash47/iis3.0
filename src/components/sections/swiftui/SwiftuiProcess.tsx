import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconDatabase, IconCode, IconEye, IconRocket } from "@/components/icons";

// METHOD tense throughout - we have never run this process for a native iOS client, so every step is
// "we will", never "we have". No compliance outcome promised, no App Store review times or fees. The
// first step draws the honest line: whether it should be native at all, and what the native work
// actually is. Version-conservative: no OS/Xcode versions; the treadmill is framed as ongoing upkeep.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Discovery & the native scope", timeframe: "1-2 weeks", deliverable: "A short, paid discovery that ends in a written scope, a fixed price and, first, an honest answer to whether this should be native at all or cross-platform. Then the native work itself: the screens, the frameworks each feature needs, the backend it talks to, and the Apple accounts and constraints - so the native surprises are found here, not in your invoice." },
  { icon: <IconDatabase className="h-6 w-6" />, title: "State, data & the backend first", timeframe: "before the screens", deliverable: "The parts a native app lives or dies on, designed before the UI is polished: the Observation-based state model, the SwiftData or Core Data layer, and the API, auth and data model the app depends on - the backend work we do on the web every day, so the app and the server behind it are designed together." },
  { icon: <IconCode className="h-6 w-6" />, title: "Build the SwiftUI app & wire the SDKs", timeframe: "weeks", deliverable: "Declarative SwiftUI screens, navigation and adaptive layout, with the Apple SDKs each feature needs - StoreKit, MapKit, push, widgets - and UIKit brought in through Apple's own interop only where a control genuinely still calls for it. Built current, on the Observation framework and Swift 6 concurrency, not a legacy pattern." },
  { icon: <IconEye className="h-6 w-6" />, title: "Accessibility, device QA & submission prep", timeframe: "throughout", deliverable: "Accessibility built to Apple's APIs and verified on VoiceOver and at large Dynamic Type sizes, real-device testing across the Apple hardware you target, and the App Store submission prepared inside your own Apple Developer account - not left as a launch-week scramble." },
  { icon: <IconRocket className="h-6 w-6" />, title: "Submit, hand over & keep current", timeframe: "on delivery", deliverable: "We submit to the App Store under your account, then hand over: the repository, the code and the Apple Developer account are yours. After that, keeping a native app current as Apple ships new SDKs and revised guidelines is optional, ongoing care - from $100 a month, with no lock-in - because a native app is kept current, not finished." },
];

export function SwiftuiProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            The native scope comes <span className="gradient-text">before the screens</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            We decide whether it should be native at all, then scope the state, the data and the backend
            before a screen is polished - because on a native app those are the parts that decide whether
            it survives, and the platform treadmill is planned as work, not discovered after launch.
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
