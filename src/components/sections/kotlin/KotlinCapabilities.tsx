import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCode, IconGrid, IconRefresh, IconLayers, IconDatabase, IconLayout, IconServer, IconBolt, IconClock, IconEye, IconDevice, IconRocket } from "@/components/icons";

// The E-E-A-T CENTREPIECE. We have shipped zero native Android apps, so the depth of what this page
// knows about the Kotlin/Android work - named precisely - is the entire substitute for a portfolio.
//
// SIX HARD RULES:
// 1. CAPABILITY TENSE ONLY - "we build / we wire", never "the apps we've shipped".
// 2. METHOD, NEVER OUTCOME - accessibility is "built to Android's APIs and verified with TalkBack".
// 3. NO STATISTICS - no fps, crash-free, download, "less code %", device counts or OS-share figures.
// 4. VERSION-CONSERVATIVE - name FRAMEWORKS (Jetpack Compose, Material 3, the K2 compiler, Kotlin
//    Multiplatform, Compose Multiplatform); print no Android/Kotlin point-versions. Compose Multiplatform
//    "now stable on iOS", never a version/date.
// 5. NO false own-site claim; NO Play review times/fees.
// 6. Card 7 routes any Kotlin/Spring server to the Java page - no Kotlin-on-the-backend claim here.
const caps = [
  { icon: <IconCode className="h-5 w-5" />, t: "Kotlin language core", d: "Null safety in the type system, coroutines and Flow for structured concurrency, and concise data and sealed classes with exhaustive when - Android's default language, used the modern way." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Jetpack Compose UI", d: "Declarative, state-driven screens with Material 3 and dynamic colour, the modern default for new Android UI, with new platform APIs arriving Compose-first." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Compose and View interop", d: "Blending Compose and the legacy XML View system both directions via ComposeView and AndroidView, so adopting Compose in an existing app is incremental rather than a rewrite." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Jetpack architecture libraries", d: "ViewModel, Navigation, Room, WorkManager, Hilt and DataStore assembled into an MVVM or MVI structure with unidirectional data flow - a real architecture, not a buzzword list." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Async and offline-tolerant data", d: "Coroutines, Flow, Room and DataStore for apps that stay responsive, keep working when the network drops, and sync back to a backend - because Android networks are hostile by default." },
  { icon: <IconLayout className="h-5 w-5" />, t: "Kotlin Multiplatform", d: "Sharing business logic - and optionally the UI via Compose Multiplatform, now stable on iOS - across Android and iOS from one Kotlin codebase, while each platform stays native. A deliberate architecture choice, not a shortcut." },
  { icon: <IconServer className="h-5 w-5" />, t: "The backend the app talks to", d: "Designing and building the APIs and services the Android client consumes - the backend work we genuinely ship on the web. For a Kotlin or Spring Boot server itself, we point you to our Java and Spring Boot page." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Device SDK integration", d: "CameraX, Maps and Fused Location, Firebase Cloud Messaging for push, Play Billing for purchases and subscriptions, and ML Kit for on-device inference - wired the platform-idiomatic way." },
  { icon: <IconClock className="h-5 w-5" />, t: "Background and lifecycle work", d: "WorkManager for constraint-aware background tasks, foreground services and lifecycle-aware components that keep working under modern Android's aggressive power and background limits - and each OEM's take on them." },
  { icon: <IconEye className="h-5 w-5" />, t: "Accessibility, built to Android's APIs", d: "Compose semantics and content descriptions, TalkBack support, and scalable fonts, built to Android's accessibility APIs and verified on device. We claim the method and the testing, never a finished accessible state." },
  { icon: <IconDevice className="h-5 w-5" />, t: "Adaptive layouts across the landscape", d: "Window size classes and adaptive UI so one app holds up across phones, tablets, foldables, Wear OS, Android TV and Android Auto, and across the many OEM skins and Android versions your users actually run." },
  { icon: <IconRocket className="h-5 w-5" />, t: "Play Store release engineering", d: "App bundles, Play App Signing, R8 shrinking and staged rollout, submitted through review under your own Google Play Developer account - the release plumbing done properly, not left to launch week." },
];

export function KotlinCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we build with Kotlin"
            title="Twelve things a native Android app turns on"
            sub="Almost none of it is the first screen a user sees. This is the layer a native Android app is actually judged on - the language, the UI toolkit, the architecture, the data, the accessibility, and the device landscape it has to survive - and it is where a team that names each piece is worth more than one that assumes the framework will handle it."
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
              <span className="font-semibold text-foreground">Our default for a native Android build:</span>{" "}
              Kotlin and Jetpack Compose first, with the XML View system kept only where an app already
              lives there or a specific control needs it. State on a unidirectional MVVM or MVI flow.
              Room and DataStore for persistence, coroutines and Flow for async and offline. Adaptive
              layouts with window size classes so the app holds from a compact phone to a foldable,
              tested across the device landscape rather than the newest handset in the room. Accessibility
              built to Android&apos;s APIs from the first screen and verified with TalkBack. Kotlin
              Multiplatform only when parallel iOS and Android roadmaps make shared logic genuinely worth
              it, not by reflex. The Google Play account and the submission in your name. And before any
              of it, the honest question of whether it should be native at all, or cross-platform, which
              we answer with you rather than assume.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
