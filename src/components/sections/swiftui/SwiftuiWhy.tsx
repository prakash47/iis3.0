import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconDevice, IconLayers, IconRefresh, IconBolt, IconServer, IconShield } from "@/components/icons";

// The myth-buster + fit pillars + the "when NOT to go native" cross-link engine.
//
// STATS DISCIPLINE: ZERO statistics. The "~78% of new iOS projects use SwiftUI" survey figure and
// the "UIHostingController under ~1% overhead" benchmark were both offered by research and KILLED -
// contested or borrowed, and the myth-buster is stronger without them.
//
// VERSION-CONSERVATIVE: no iOS/Xcode point-version numbers (WWDC ships a new generation yearly, so a
// printed version dates in a month). Currency is signalled by FEATURES only. Liquid Glass is "Apple's
// current design material", never "this year's" - 2026's WWDC shipped no new system-wide design
// language, so an "annual redesign" claim would be one-click-refutable.
//
// APPLE POLICY TRAP: no review times, rejection rates, policy clause numbers or fees. Accessibility is
// claimed as METHOD, never as a finished "accessible" state.
const pillars = [
  { icon: <IconDevice className="h-5 w-5" />, t: "Real Apple views, not a webview", d: "SwiftUI renders the platform's own native views through Apple's UI toolkit. A user is touching real native controls, real native gestures and the system's own accessibility, so a well-built SwiftUI app is not distinguishable from any other native app by the person holding the device." },
  { icon: <IconLayers className="h-5 w-5" />, t: "One Swift codebase, every Apple screen", d: "The same declarative Swift can reach iPhone, iPad, Mac, Watch, TV and Vision - shared where it fits, adapted where each platform genuinely differs. You maintain one product and one language across Apple's whole surface instead of a separate app per device." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "State-driven, less to get wrong", d: "UI is a function of state: you declare what a screen looks like for a given state and the framework diffs and re-renders. The Observation framework and the @Observable macro replaced the old view-model boilerplate with granular, per-view updates, so fewer moving parts means fewer places for a bug to hide." },
  { icon: <IconBolt className="h-5 w-5" />, t: "First to Apple's newest, first-party", d: "Because SwiftUI is Apple's own toolkit, a native app adopts the current design material, Liquid Glass, first-party, reaches new frameworks as the SDK lands, and is profiled with Apple's own SwiftUI Instrument. That immediacy is the whole reason to go native, and it is the one thing a cross-platform engine reaches a step behind." },
  { icon: <IconServer className="h-5 w-5" />, t: "The same team builds the backend", d: "Most apps are a native client over a serious backend. Auth, APIs, data models and integrations are work we do on the web every day, so the SwiftUI app and the server it depends on are designed together rather than negotiated across two vendors." },
  { icon: <IconShield className="h-5 w-5" />, t: "SwiftUI-first, UIKit where it's still needed", d: "You are not locked out of anything. Where a specific control or behaviour still lives in UIKit, Apple's own interop brings it in without a rewrite, and where you have an existing UIKit app, SwiftUI adopts into it screen by screen. Mixing the two is normal engineering, not a failure." },
];

export function SwiftuiWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Is SwiftUI production-ready in 2026?{" "}
                <span className="gradient-text">Yes - and the honest answer is SwiftUI-first, not SwiftUI-only.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                This is the most-cited worry, and an honest answer starts by conceding the real part.
                In its early years SwiftUI was thin in places, and teams reached back into UIKit for
                controls it did not yet cover - that history is real, and anyone who pretends SwiftUI
                arrived finished is not worth trusting on the rest. Here is where it actually stands.
                SwiftUI is now how Apple itself frames building for its platforms, and the current
                toolset is a maturity signal in its own right: the Observation framework and
                @Observable have replaced the old view-model boilerplate with granular, per-view
                updates; SwiftData is the native persistence layer for storing and syncing app data;
                Swift 6 turns on strict, compiler-enforced data-race safety; the current design
                material, Liquid Glass, is adopted first-party; and the tooling now traces a state
                change straight through to the view update that caused it.{" "}
                <span className="font-semibold text-foreground">Did SwiftUI kill UIKit?</span> No, and a
                team that says it did is overselling. The honest build is SwiftUI-first for the app,
                with UIKit brought in through Apple&apos;s own interop where a specific control still
                calls for it - production apps run that mix every day.{" "}
                <span className="font-semibold text-foreground">Is it accessible out of the box?</span>{" "}
                It has real accessibility built in - VoiceOver, Dynamic Type, semantic controls - but
                we treat accessibility as work: we build to Apple&apos;s accessibility APIs and verify
                on VoiceOver rather than call an app accessible and hope. Whether native is right for
                your product is a different question, and a few paragraphs down we answer it plainly.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why SwiftUI"
            title="Why teams pick SwiftUI for native Apple apps"
            sub="It is the native default for new Apple-platform work - and going native is the wrong answer often enough that we would rather tell you than sell you."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.t} className="card flex flex-col p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {p.icon}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{p.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </Reveal>

        {/* The anti-recommendation. Every position restates a lock already published in MobileDecision,
            MobileFaq and RnCompare, so the money page and this spoke can never disagree. KMP is kept
            visible so nothing implies the only native route is "SwiftUI iOS + a separate Kotlin app".
            Reciprocal anchors are worded differently from the inbound links that point here. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;d tell you not to go native with SwiftUI
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Fully native on iOS is a real cost, and it earns its keep only when the product genuinely
              demands it - deep performance, direct hardware access, or platform-specific behaviour from
              the first screen. Most products do not, and for them going native is the expensive answer.
              The plainest reason is arithmetic: SwiftUI builds native for Apple&apos;s platforms only,
              so if you need iOS and Android - and most products do - native means a second, wholly
              separate codebase and a second specialist pool to hire and keep. If that is you,
              cross-platform is usually the smart default, and we would rather{" "}
              <Link href="/technologies/react-native" className="font-medium text-brand-500 hover:text-brand-600">
                cover both stores from one React Native codebase
              </Link>{" "}
              or{" "}
              <Link href="/technologies/flutter" className="font-medium text-brand-500 hover:text-brand-600">
                one Flutter codebase for both
              </Link>{" "}
              than sell you two native builds. If you want native on both platforms but want to share
              the business logic underneath, Kotlin Multiplatform is a different native model again -
              native{" "}
              <Link href="/technologies/kotlin" className="font-medium text-brand-500 hover:text-brand-600">
                Kotlin on the Android side
              </Link>
              , shared logic across both - and we won&apos;t pretend SwiftUI plus a separate Kotlin app
              is the only native route. And if what you really need is an install-free, search-indexable
              presence, that should not be an app at all. Which of these is right for you - and whether
              it should be cross-platform, fully native or a web app - is the bigger call, and we make it
              with you in writing during{" "}
              <Link href="/services/mobile-app-development" className="font-medium text-brand-500 hover:text-brand-600">
                discovery on our mobile app development service
              </Link>
              , before you spend on a build you don&apos;t need.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
