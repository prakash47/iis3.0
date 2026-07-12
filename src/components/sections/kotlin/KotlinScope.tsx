import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconDevice, IconGrid, IconRefresh, IconLayers, IconServer, IconEye, IconArrow } from "@/components/icons";

// CAPABILITY TENSE ONLY - we have shipped zero native Android apps, so every card describes what a
// Kotlin/Android engagement involves and how we approach it, never "the apps we've shipped". No own-
// site claim. The boundary block does NOT re-stage the native-vs-cross-platform-vs-PWA STRATEGY
// decision (MobileDecision on the mobile money page owns it), and it holds the HARD Kotlin lane
// boundary: Kotlin on the SERVER / Spring Boot is the java-spring-boot page, reciprocating java's fence.
const uses = [
  { icon: <IconDevice className="h-5 w-5" />, t: "Native Android apps in Kotlin", d: "The mainstream native build: declarative UI in Kotlin, running natively on Android over a real backend, from a single-purpose utility to a full product with accounts, data and payments. Kotlin is Android's default language, and we write new Android work in it." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Jetpack Compose UI and Material 3", d: "Modern declarative screens built as a function of state, with Material 3 and dynamic colour, and adaptive layouts that hold from a compact phone to a tablet or a foldable - the toolkit Google now builds Android's own UI around." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Compose in an existing XML app", d: "Adopting Jetpack Compose screen by screen inside an existing View-based app through Android's own interop - ComposeView and AndroidView both directions - so you modernise incrementally rather than betting the product on a rewrite." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Kotlin Multiplatform, shared logic", d: "Where you have parallel Android and iOS roadmaps, Kotlin Multiplatform shares the business logic - networking, data, validation - from one Kotlin codebase while each platform keeps its own native UI, and with Compose Multiplatform now stable on iOS, the UI can be shared too when it fits." },
  { icon: <IconServer className="h-5 w-5" />, t: "The backend the app talks to", d: "Most apps are a native client over a serious backend - auth, APIs, a data model, search, sync. That backend work is what we do on the web every day, so the app and the server behind it are designed together. A Kotlin or Spring Boot server is a different job - that is our Java and Spring Boot lane." },
  { icon: <IconEye className="h-5 w-5" />, t: "Accessibility and the device landscape", d: "Accessibility built to Android's APIs - Compose semantics, TalkBack, scalable fonts - and verified on device, plus the discipline of building for the many devices, OEM skins and Android versions your users are actually on, not just the newest handset in the room." },
];

export function KotlinScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with Kotlin"
            title="Native Android apps, and the backend behind them"
            sub="Kotlin is Android's language; a shipping app is native UI in Jetpack Compose plus the SDKs it integrates and the backend it talks to. A typical engagement is one of these, and we assume the native-versus-cross-platform call is already made - if it isn't, that decision lives on our mobile service page, not here."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {uses.map((u) => (
            <div key={u.t} className="card flex items-start gap-4 p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {u.icon}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{u.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{u.d}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                This page is the Android build. The bigger calls are elsewhere.
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Kotlin is what you build a native Android app with. Two questions this page deliberately
                does not settle, because they belong to the services that own them:
              </p>

              <ul className="mt-6 grid gap-3">
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      Native, cross-platform or a web app - decided in writing
                    </span>
                    {" - "}
                    fully native earns its higher cost only when the product genuinely demands deep
                    performance, hardware access or platform-specific features. We make that call with
                    you on{" "}
                    <Link href="/services/mobile-app-development" className="font-medium text-brand-500 hover:text-brand-600">
                      our mobile app development service, before any build begins
                    </Link>
                    ; if you need both stores from one codebase, that is{" "}
                    <Link href="/technologies/react-native" className="font-medium text-brand-500 hover:text-brand-600">
                      React Native
                    </Link>{" "}
                    or{" "}
                    <Link href="/technologies/flutter" className="font-medium text-brand-500 hover:text-brand-600">
                      Flutter
                    </Link>
                    , and the iOS side of a native pair is{" "}
                    <Link href="/technologies/swiftui" className="font-medium text-brand-500 hover:text-brand-600">
                      SwiftUI on iOS
                    </Link>
                    .
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      Kotlin on the server is a different job
                    </span>
                    {" - "}
                    this page is the Android app. Kotlin is also a first-class JVM language for a{" "}
                    <Link href="/technologies/java-spring-boot" className="font-medium text-brand-500 hover:text-brand-600">
                      Kotlin or Spring Boot backend
                    </Link>
                    , and that lives on our Java and Spring Boot page. Here, Kotlin means native
                    Android; there, it means the server behind it.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
