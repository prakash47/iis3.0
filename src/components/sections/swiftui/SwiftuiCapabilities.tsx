import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconDevice, IconRefresh, IconLayers, IconDatabase, IconCpu, IconCode, IconBolt, IconRocket, IconLock, IconSpark, IconEye, IconClock } from "@/components/icons";

// The E-E-A-T CENTREPIECE. We have shipped zero native iOS apps, so the depth of what this page knows
// about the SwiftUI and Apple-platform work - named precisely - is the entire substitute for a
// portfolio. Specificity is free and truthful; a screenshot wall is neither.
//
// SIX HARD RULES:
// 1. CAPABILITY TENSE ONLY - "we build / we wire", never "the apps we've shipped".
// 2. METHOD, NEVER OUTCOME - accessibility is "built to Apple's APIs and verified on VoiceOver", never
//    "accessible" as a finished state.
// 3. NO STATISTICS - no fps, crash-free, download, "less code %" or adoption figures.
// 4. VERSION-CONSERVATIVE - name FRAMEWORKS (SwiftData, Observation, Swift 6, the SwiftUI Instrument),
//    print no iOS/Xcode point-versions. Liquid Glass = Apple's current design material, not "this year's".
// 5. NO false own-site claim; NO App Store review times / fees.
// 6. Keep Kotlin Multiplatform intact (card 12 note), so nothing implies SwiftUI is the only native path.
const caps = [
  { icon: <IconDevice className="h-5 w-5" />, t: "Declarative SwiftUI interfaces", d: "Native Apple UI built as state-driven views the framework diffs and re-renders, rather than hand-managed view controllers - the model SwiftUI is built on." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "State with the Observation framework", d: "@Observable models, @State, @Binding and @Environment wired for predictable, granular per-view updates, so only the views that read a changed value re-render." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Navigation and adaptive layout", d: "NavigationStack and NavigationSplitView with a stack, grid and Layout-protocol system that adapts a single design from iPhone to iPad to Mac instead of freezing one screen size." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Persistence with SwiftData", d: "Model the data layer in SwiftData with @Model and @Query, and bridge an existing Core Data store rather than force a rewrite, with history observation for syncing to an external server." },
  { icon: <IconCpu className="h-5 w-5" />, t: "Concurrency and networking", d: "async/await, structured concurrency and actors for the async and network layer, under Swift 6's compiler-enforced data-race safety - a whole class of threading crashes caught at build time, not in production." },
  { icon: <IconCode className="h-5 w-5" />, t: "SwiftUI and UIKit interop", d: "Adopt SwiftUI incrementally inside a UIKit codebase through Apple's own bridges - UIViewRepresentable, UIViewControllerRepresentable and UIHostingController - so a large app modernises screen by screen." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Apple SDK integration", d: "StoreKit for purchases and subscriptions, MapKit and Core Location, AVFoundation, HealthKit, and push through APNs - the frameworks that separate a screen from an app, wired to real capabilities." },
  { icon: <IconRocket className="h-5 w-5" />, t: "Widgets, App Intents and system surfaces", d: "WidgetKit widgets and Live Activities, and App Intents that put your app into Siri, Shortcuts and Spotlight - the surfaces that extend an app beyond its own window." },
  { icon: <IconLock className="h-5 w-5" />, t: "Identity and secure storage", d: "Sign in with Apple for identity and Keychain-backed credential handling, built to Apple's own APIs rather than a home-rolled scheme you would have to defend later." },
  { icon: <IconSpark className="h-5 w-5" />, t: "On-device intelligence", d: "Core ML integration for features that run locally on the device, without a server round trip - image, text or signal work that stays on the phone where it belongs." },
  { icon: <IconEye className="h-5 w-5" />, t: "Accessibility, built to Apple's APIs", d: "VoiceOver, Dynamic Type and accessibility modifiers, verified on device. We claim the method and the testing, never a finished accessible state, because accessibility is work and we treat it as work." },
  { icon: <IconClock className="h-5 w-5" />, t: "Submission and staying current", d: "We prepare and submit your app to the App Store under your account, and keep it current as Apple ships new SDKs, revised guidelines and periodic design shifts - Liquid Glass the current one. On both platforms natively, Kotlin Multiplatform can share the logic under the Android side." },
];

export function SwiftuiCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we build with SwiftUI"
            title="Twelve things a native SwiftUI app turns on"
            sub="Almost none of it is the first screen a user sees. This is the layer a native app is actually judged on - the state model, the data, the SDKs, the accessibility, and the ongoing work of a platform that keeps moving - and it is where a team that names each piece is worth more than one that assumes the framework will handle it."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caps.map((c) => (
            <div key={c.t} className="card flex flex-col p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {c.icon}
              </span>
              <h3 className="mt-4 font-display text-sm font-semibold text-foreground">{c.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </Reveal>

        {/* Stated as an APPROACH ("here is how we'd build yours"), never a record. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Our default for a native SwiftUI build:</span>{" "}
              SwiftUI-first, with UIKit brought in through Apple&apos;s own interop only where a control
              genuinely still needs it. State on the Observation framework and @Observable, not the old
              view-model boilerplate. SwiftData for persistence, bridging an existing Core Data store
              rather than rewriting it. Swift 6 strict concurrency on, so a data race is a compile error
              instead of a crash you chase in production. Accessibility built to Apple&apos;s APIs from
              the first screen and verified on VoiceOver, not bolted on before launch. The Apple
              Developer account and the submission in your name, and the OS-version upkeep planned as
              real work - because a native app is kept current, not finished. And before any of it, the
              honest question of whether it should be native at all, or cross-platform, which we answer
              with you rather than assume.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
