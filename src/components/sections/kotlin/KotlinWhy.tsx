import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconDevice, IconShield, IconGrid, IconLayout, IconServer, IconLayers } from "@/components/icons";

// The myth-buster + fit pillars + the "when NOT to go native Android" cross-link engine.
//
// STATS DISCIPLINE: ZERO statistics. The tempting fragmentation figures ("24,000+ device models",
// "Android 16 ~23% share", "20-40 device test matrix", ">99% crash-free") were all KILLED - they are
// bare numbers and version pins, and OS-share shifts monthly (one-click-refutable). The thesis carries
// no number. Also killed: K2 build-speed %, the Compose-Multiplatform binary-overhead figure.
//
// VERSION-CONSERVATIVE: no Android/Kotlin point-version numbers (Android ships a new generation yearly).
// Currency by FEATURES only. Compose Multiplatform "now stable on iOS", never "1.8.0" / "since May 2025".
//
// SIGNATURE GUARD: keep the fragmentation wedge SPATIAL (many uncontrolled devices at once). Do NOT let
// "a wide Android-version spread" tip into "the platform keeps changing under you" - that temporal
// treadmill beat is the SwiftUI page's lane.
//
// APPLE/GOOGLE POLICY TRAP: no Play review times, rejection rates, policy numbers or fees. Accessibility
// is a METHOD, never "accessible" as an outcome. Kotlin-on-the-backend routes to the Java page.
const pillars = [
  { icon: <IconDevice className="h-5 w-5" />, t: "Real Android views, not a webview", d: "A Kotlin app draws the platform's own native views through Jetpack Compose and the Android toolkit. A user is touching real native controls with real native gestures and the system's own accessibility, so a well-built native Android app is not distinguishable from any other by the person holding the device." },
  { icon: <IconShield className="h-5 w-5" />, t: "A language built for correctness", d: "Kotlin's type system separates nullable from non-null references, which removes a whole class of null-pointer crashes at compile time, and coroutines with Flow give structured concurrency instead of callback pyramids and hand-managed threads. Fewer sharp edges in the language means fewer places for a defect to hide." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Jetpack Compose, state-driven UI", d: "UI as a function of state: you declare what a screen looks like for a given state and Compose recomposes when it changes, with Material 3 and dynamic colour. It is the modern default Google now builds Android's own UI around, and the new platform UI APIs arrive Compose-first." },
  { icon: <IconLayout className="h-5 w-5" />, t: "Built for the device landscape", d: "Native Android is not one phone, it is a landscape - many device models, OEM skins, and a wide range of Android versions your users are actually on. We design adaptive layouts with window size classes for phones, tablets and foldables, and treat the device diversity as the thing to engineer around, not discover after launch." },
  { icon: <IconServer className="h-5 w-5" />, t: "The same team builds the backend", d: "Most apps are a native client over a serious backend. Auth, APIs, data models and integrations are work we do on the web every day, so the Android app and the server it depends on are designed together rather than negotiated across two vendors." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Share the logic when it fits", d: "Where you run Android and iOS in parallel, Kotlin Multiplatform lets one Kotlin codebase hold the business logic while each platform keeps its native UI, and Compose Multiplatform can now share the UI too. It is a deliberate architecture choice with real trade-offs, not a build-once shortcut, and we treat it as one." },
];

export function KotlinWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Is Jetpack Compose production-ready in 2026?{" "}
                <span className="gradient-text">Yes - and the honest answer is Compose-first, not Compose-only.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                This is the most-cited worry, and an honest answer starts by conceding the real part.
                In its early years Compose was thin in places, and teams kept a foot in the XML View
                system for controls it did not yet cover - that history is real, and anyone who pretends
                Compose arrived finished is not worth trusting on the rest. Where it stands now is a
                maturity signal in itself: Compose is the toolkit Google builds Android&apos;s own UI
                around, with Material 3 and dynamic colour; coroutines and Flow give structured
                concurrency; the K2 compiler is the modern Kotlin frontend; and Kotlin Multiplatform is
                production-ready for shared logic, with Compose Multiplatform now stable on iOS.{" "}
                <span className="font-semibold text-foreground">Kotlin or Java for Android?</span> Kotlin
                is Android&apos;s default, and it is what we write new work in - but Kotlin calls into
                Java cleanly, so an existing Java codebase is something to build on, not rip out. (Kotlin
                on a Spring Boot backend is a different job, and it lives on our Java and Spring Boot
                page - here Kotlin means native Android.){" "}
                <span className="font-semibold text-foreground">Did Compose kill the XML View system?</span>{" "}
                No. Views are in maintenance mode, but they still run a huge installed base, and Compose
                and Views interoperate in the same app, so a real build is Compose-first with Views kept
                where they earn their place. Whether native is right for your product is a different
                question, and a few paragraphs down we answer it plainly.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why Kotlin"
            title="Why teams pick Kotlin for native Android"
            sub="It is the native default for new Android work - and going native is the wrong answer often enough that we would rather tell you than sell you."
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
            MobileFaq, RnCompare and the SwiftUI page, so the money page and this spoke can never
            disagree. Reciprocal anchors worded differently from the 8 inbound links that point here.
            "Kotlin on a Spring Boot backend" is a real Link reciprocating java's own fence. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;d tell you not to build native Android with Kotlin
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Fully native on Android is a real cost, and it earns its keep only when the product
              genuinely demands it - deep performance, direct hardware access, or platform-specific
              behaviour. Most products do not, and for them going native is the expensive answer. The
              plainest reason is arithmetic: native Android is Android only, so if you need iOS and
              Android from one codebase, cross-platform is usually the smart default, and we would rather{" "}
              <Link href="/technologies/react-native" className="font-medium text-brand-500 hover:text-brand-600">
                cover both stores with React Native
              </Link>{" "}
              or{" "}
              <Link href="/technologies/flutter" className="font-medium text-brand-500 hover:text-brand-600">
                one Flutter codebase for both
              </Link>{" "}
              than sell you two native builds. If you want each platform native but shared business
              logic underneath, Kotlin Multiplatform is a different model again - and the iOS half of a
              native pair is{" "}
              <Link href="/technologies/swiftui" className="font-medium text-brand-500 hover:text-brand-600">
                SwiftUI on the iOS side
              </Link>
              , a separate codebase and a separate specialist pool. If what you really need is an
              install-free, search-indexable presence, that should not be an app at all. And if you are
              actually asking about{" "}
              <Link href="/technologies/java-spring-boot" className="font-medium text-brand-500 hover:text-brand-600">
                Kotlin on a Spring Boot backend
              </Link>
              , that is the server, not the app, and it lives on the Java page. Which of these is right
              is the bigger call, and we make it with you in writing during{" "}
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
