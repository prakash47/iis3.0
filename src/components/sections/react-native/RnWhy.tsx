import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconDevice, IconLayers, IconBolt, IconRefresh, IconServer, IconShield } from "@/components/icons";

// The myth-buster + fit pillars + the "when NOT to use React Native" cross-link engine.
//
// STATS DISCIPLINE: this page carries ZERO statistics. Not one. The Airbnb "63% / 74%" engineer
// survey, Shopify's "86% unification / 99.9% crash-free", Discord's "98% code sharing", the
// RN-vs-Flutter market-share splits, New-Architecture adoption rates and every fps or cold-start
// figure were all considered and killed - some are contested, some are real but belong to other
// companies and would be misread as ours. The myth-buster is stronger without them.
//
// NAMED COMPANIES ARE FRAMEWORK EVIDENCE ONLY, attributed to first-party sources, and are NEVER a
// claim about our clients or our work. This is the same discipline the Django page follows for
// Instagram and the Java page follows for banking. Only Shopify (its own engineering blog) and
// Microsoft (it maintains react-native-windows and react-native-macos) are named, because both
// have first-party evidence. No Discord, Coinbase, Walmart or Pinterest - those are secondary.
//
// APPLE/GOOGLE POLICY TRAP: no review times, no rejection rates, no policy clause numbers, no
// deadlines. MobileProcess deliberately says "we plan around the current requirements"; this page
// must not break that.
const pillars = [
  { icon: <IconDevice className="h-5 w-5" />, t: "Real native views, not a webview", d: "React Native drives the platform's own UI components from JavaScript. A user is touching real native controls with real native gestures and accessibility, which is why a well-built React Native app is not distinguishable from a fully native one by the person holding the phone." },
  { icon: <IconLayers className="h-5 w-5" />, t: "One codebase, two stores", d: "You fund and maintain one product, not two. Features land on iOS and Android together, fixes ship once, and there is one place to reason about your business logic instead of two implementations quietly drifting apart." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Rebuilt for speed at the boundary", d: "The New Architecture replaced the old asynchronous bridge: Fabric renders, TurboModules load native code on demand, and the JSI lets JavaScript talk to native directly. The specific bottleneck that earned React Native its early reputation is the thing that was rebuilt." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Ship fixes without waiting for review", d: "JavaScript-level bug fixes and content changes can go out over the air, inside the store rules, so a bad copy change or a broken flow does not have to sit in a review queue. What can't go that route is anything that changes what the app fundamentally is." },
  { icon: <IconServer className="h-5 w-5" />, t: "The same team can build the backend", d: "Most apps are a thin client over a serious backend. Auth, APIs, data and integrations are work we do on the web every day, so the app and the server it talks to are designed together rather than negotiated across two vendors." },
  { icon: <IconShield className="h-5 w-5" />, t: "A large, hireable talent pool", d: "Any competent React or JavaScript developer can read a React Native codebase, which means you are not hostage to one agency. React and React Native are stewarded by the independent React Foundation, not a single vendor's roadmap." },
];

export function RnWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Is React Native dead in 2026?{" "}
                <span className="gradient-text">No - and the criticism was real.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                React Native has been declared dead almost every year since 2018, and the reason
                everybody cites is that Airbnb dropped it. That part is true and worth taking
                seriously. Airbnb adopted React Native, sunset it, and published an unusually candid
                engineering post-mortem about why: bridging complex native animations, wrangling
                native dependencies across two platforms, and the overhead of the old asynchronous
                JavaScript-to-native bridge. Those were real problems, honestly reported. Here is the
                part the &quot;it&apos;s dead&quot; articles leave out. Airbnb left before React
                Native was re-architected. The New Architecture - the Fabric renderer, TurboModules
                and the JSI, with Hermes as the engine - replaced that asynchronous bridge with direct
                JavaScript-to-native communication, and it is now the default. The specific bottleneck
                that drove the loudest departure is the thing that got rebuilt. And in 2026 it is not
                a fringe bet: Shopify says on its own engineering blog that it migrated all of its
                apps to React Native, Microsoft maintains the Windows and macOS versions of it and
                builds parts of its own apps on it, and React and React Native are now stewarded by
                the independent React Foundation rather than a single company.{" "}
                <span className="font-semibold text-foreground">Will it feel native?</span> It renders
                real native views, not a webview, so a well-built React Native app behaves like a
                native one.{" "}
                <span className="font-semibold text-foreground">Can Apple reject it?</span> Apps are
                judged on experience and policy, not on which framework built them, which is exactly
                why we build to native components and handle submission for you. React Native is not
                right for every app, and a few paragraphs below we tell you plainly when it
                isn&apos;t. But dead, it is not.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why React Native"
            title="Why teams pick React Native"
            sub="It is the cross-platform default for teams already living in React - and it is the wrong answer often enough that we would rather tell you than sell you."
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

        {/* The anti-recommendation. Every position restates a lock already published in
            MobileDecision and MobileFaq, so the money page and this spoke can never disagree. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;d tell you not to use React Native
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">
              Cross-platform is the smart default for most teams, and React Native is the natural pick
              when you already live in the JavaScript and React world. It is not always the right
              call. When the product truly demands deep performance, hardware access or
              platform-specific experiences, fully native earns its higher cost, and we&apos;d point
              you to{" "}
              <Link href="/technologies/swiftui" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                native iOS with SwiftUI
              </Link>{" "}
              or{" "}
              <Link href="/technologies/kotlin" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                native Android with Kotlin
              </Link>{" "}
              and build it that way. When the interface is highly custom and animation-rich, the other
              cross-platform option can be the cleaner fit, because it draws every pixel itself -
              we&apos;d talk you through{" "}
              <Link href="/technologies/flutter" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                weighing the Flutter alternative
              </Link>{" "}
              honestly rather than force React Native onto it. And when install-free reach matters more
              than an app-store presence - content and light tools nobody should have to download - a
              progressive web app does the job for less, and we&apos;ll say so. React Native or
              Flutter, native or a web app, we make that call with you in writing during{" "}
              <Link href="/services/mobile-app-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                discovery
              </Link>
              , before you spend on a build you don&apos;t need.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
