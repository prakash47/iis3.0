import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconDevice, IconLayers, IconRefresh, IconServer, IconBolt, IconEye, IconArrow } from "@/components/icons";

// CAPABILITY TENSE ONLY - we have shipped zero native iOS apps, so every card describes what a
// SwiftUI engagement involves and how we approach it, never "the apps we've shipped". No own-site
// claim. The boundary block DELIBERATELY does not re-stage the native-vs-cross-platform-vs-PWA
// STRATEGY decision - MobileDecision on the mobile money page owns it. This spoke assumes you have
// already decided native Apple; it routes the strategy question up to the hub.
const uses = [
  { icon: <IconDevice className="h-5 w-5" />, t: "Native iOS and iPadOS apps", d: "Declarative SwiftUI interfaces built as a function of state, on top of a real backend - the mainstream native build, from a single-screen utility to a full product with accounts, data and payments." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Multi-platform Apple apps", d: "One Swift codebase reaching Mac, Apple Watch, Apple TV and Vision alongside iPhone and iPad - shared where it can be, adapted per platform where it must be, because a Watch is not a small iPhone and we won't pretend one layout fits all six." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "SwiftUI in an existing UIKit app", d: "Adopting SwiftUI screen by screen inside a large existing app through Apple's own interop - UIViewRepresentable and UIHostingController - so you modernise incrementally rather than betting the product on a rewrite." },
  { icon: <IconServer className="h-5 w-5" />, t: "The backend the app talks to", d: "Most apps are a native client over a serious server - auth, APIs, a data model, search, sync. That backend work is what we do on the web every day, so the app and the server behind it are designed together rather than negotiated across two vendors." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Apple SDK and platform integration", d: "The frameworks that turn a screen into an app: StoreKit for purchases and subscriptions, MapKit and Core Location, HealthKit, AVFoundation, push through APNs, WidgetKit and Live Activities, App Intents and Sign in with Apple, wired to real capabilities." },
  { icon: <IconEye className="h-5 w-5" />, t: "Accessibility and staying current", d: "Accessibility built to Apple's APIs - VoiceOver, Dynamic Type, semantic controls - and verified on device, plus the ongoing work of keeping a native app current as Apple ships new SDKs and revised guidelines. Built in, not a pre-launch scramble." },
];

export function SwiftuiScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with SwiftUI"
            title="Native Apple apps, and the backend behind them"
            sub="SwiftUI is the native UI layer for Apple's platforms; a shipping app is that layer plus the SDKs it integrates and the backend it talks to. A typical engagement is one of these, and we assume the native-versus-cross-platform call is already made - if it isn't, that decision lives on our mobile service page, not here."
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
                This page is the SwiftUI build. The bigger call is one page up.
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                SwiftUI is what you build a native Apple app with. Whether you should build native at
                all - versus one cross-platform codebase across iOS and Android, or an install-free web
                app - is a budget and strategy decision, and it belongs on the service that owns it:
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
                    <Link href="/services/mobile-app-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      our mobile app development service, before any build begins
                    </Link>
                    .
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      Need Android too, from one codebase?
                    </span>
                    {" - "}
                    SwiftUI is Apple-only, so if you need both stores from a single codebase that is{" "}
                    <Link href="/technologies/react-native" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      React Native
                    </Link>{" "}
                    or{" "}
                    <Link href="/technologies/flutter" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      Flutter
                    </Link>
                    ; for native on both while sharing the business logic, that is{" "}
                    <Link href="/technologies/kotlin" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      Kotlin on the Android side
                    </Link>
                    .
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
