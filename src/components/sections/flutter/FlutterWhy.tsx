import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconPalette, IconLayers, IconCpu, IconBolt, IconShield, IconServer } from "@/components/icons";

// Myth-buster + fit pillars + the "when NOT to use Flutter" cross-link engine.
//
// ZERO STATISTICS. Not one. Killed: the 2024 layoff headcount, every fps and frame-time figure,
// Impeller benchmarks, app-size numbers, cross-platform market-share splits, adoption percentages,
// GitHub stars, the Flock contributor ratio, and every Flutter and Dart version number. The React
// Native page shipped stat-free and was stronger for it.
//
// GOVERNANCE LANDMINE - THE FACTS ARE REVERSED FROM REACT NATIVE. RnWhy pillar 6 says "React and
// React Native are stewarded by the independent React Foundation." FLUTTER HAS NO SUCH FOUNDATION:
// it is Google-created, Google-stewarded, BSD-licensed, and Google owns the trademarks. Copying
// that reassurance here would be a FALSE CLAIM. The Flutter de-risking argument is open source +
// permissive licence + an active outside community + a fork standing by - never a foundation.
//
// NAMED COMPANIES: only Google-as-vendor, attributed to Flutter's own showcase. The competitor
// researcher wanted "BMW built its My BMW app with it" - the showcase says "BMW Group", not that
// app name, so that citation was over-specific and is dropped. Same discipline as Django/Instagram
// and Java/banking: framework evidence, never a claim about our clients.
//
// APPLE/GOOGLE POLICY TRAP: no review times, no rejection rates, no policy clause numbers.
const pillars = [
  { icon: <IconPalette className="h-5 w-5" />, t: "The interface is the whole product", d: "Flutter draws every pixel with its own engine instead of driving the platform's widgets. A custom, animation-rich design renders identically on both stores and behaves exactly as it was drawn, because nothing is left to a platform default you cannot control." },
  { icon: <IconLayers className="h-5 w-5" />, t: "One Dart codebase, two stores", d: "You fund and maintain one product, not two. Features land on iOS and Android together, fixes ship once, and there is a single place to reason about behaviour rather than two implementations quietly drifting apart." },
  { icon: <IconCpu className="h-5 w-5" />, t: "Compiled ahead of time to native code", d: "In a release build, Dart is compiled ahead of time into native machine code for each platform. There is no JavaScript engine interpreting your app at runtime, which is a real architectural difference from the JavaScript-based cross-platform route." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Design iteration that actually moves", d: "In development, Dart runs on a virtual machine with stateful hot reload, so a change to a screen appears in about the time it takes to look up. On an interface-led product, that loop is not a convenience - it is how the design gets good." },
  { icon: <IconShield className="h-5 w-5" />, t: "Open source, and not on one team's quarter", d: "Flutter is open source under a permissive licence, developed in the open by Google with an active outside community, and since 2024 there has been a community fork standing by. Your leverage is not a promise from a vendor - it is a licence, public source, and code you own outright." },
  { icon: <IconServer className="h-5 w-5" />, t: "The same team can build the backend", d: "Most apps are a thin client over a serious backend. Auth, APIs, data and integrations are work we do on the web every day, so the app and the server it talks to are designed together rather than handed between two vendors." },
];

export function FlutterWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Is Flutter dead? Did Google abandon it?{" "}
                <span className="gradient-text">No - and the worry was fair.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                This is the most-cited objection, and an honest answer starts by conceding the real
                part. In 2024 Google laid off staff across the Flutter and Dart teams, and later that
                year a respected former Flutter engineer launched Flock, a community fork, saying the
                remaining team was stretched thin and hard to reach. That frustration was genuine and
                it was reported openly, and anyone telling you it never happened is not worth trusting
                on the rest of the answer. Here is the part the &quot;it&apos;s dead&quot; posts leave
                out. Flutter kept shipping straight through it: its rendering engine reached stable
                and became the default, Dart kept advancing, stable releases have continued to land on
                a steady cadence, and Google still develops the project in the open - and ships
                Flutter inside some of its own products, per Flutter&apos;s own showcase. Because
                Flutter is open source under a permissive licence, its future does not hang on one
                team&apos;s headcount: the outside community is real, and the fork exists precisely as
                a backstop rather than a tombstone.{" "}
                <span className="font-semibold text-foreground">Will it feel native?</span> Yes, when
                it is built properly - Flutter draws real, platform-shaped interfaces, Cupertino
                patterns on iOS and Material on Android, and a well-built Flutter app is not something
                the person holding the phone picks out.{" "}
                <span className="font-semibold text-foreground">Are Flutter apps bigger?</span> They
                carry an engine, so there is a size floor a thin native app does not have. We engineer
                that down the documented ways and measure the real number on your build rather than
                quote you one. Flutter is not right for every product, and a few paragraphs below we
                tell you plainly when it isn&apos;t. But dead, it is not.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why Flutter"
            title="Why teams pick Flutter"
            sub="It earns the job when owning the interface outright is the point - and it is the wrong answer often enough that we would rather tell you than sell you."
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

        {/* The anti-recommendation. It CONCEDES the RnCompare lock rather than fighting it: React
            Native is our default when a team already lives in React, and Flutter is never called
            "our default" anywhere on this page. It also carries the Flutter-web-for-SEO steer,
            which is the one place a search-first company must argue against its own sale. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;d tell you not to use Flutter
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Flutter earns the job when the interface is the whole product. It is not our reflex, and
              we won&apos;t pretend it is. On our{" "}
              <Link href="/technologies/react-native" className="font-medium text-brand-500 hover:text-brand-600">
                React Native page we call React Native our default when a team already lives in React
              </Link>
              , and that still holds here: if your people write JavaScript and TypeScript, or you want
              an app that shares real logic with your web codebase and hires from a very large talent
              pool, we would rather send you there than push Dart on you. Dart is a language your team
              probably does not know yet, and that cost is real. When the product truly demands deep
              performance, hardware access or platform-specific behaviour from day one, fully native
              earns its higher price, and we would build it in{" "}
              <Link href="/technologies/swiftui" className="font-medium text-brand-500 hover:text-brand-600">
                going fully native on iOS with SwiftUI
              </Link>{" "}
              or{" "}
              <Link href="/technologies/kotlin" className="font-medium text-brand-500 hover:text-brand-600">
                native Android in Kotlin
              </Link>
              . And there is one place we will actively steer you off Flutter, on a site whose whole
              brand is search visibility: an SEO-critical web presence should not be a Flutter web
              build, because it draws to a canvas rather than emitting semantic HTML. That belongs in{" "}
              <Link href="/technologies/nextjs" className="font-medium text-brand-500 hover:text-brand-600">
                a search-indexable web app in Next.js
              </Link>
              , and we will say so before you spend. Whether it should be an app at all is the bigger
              call, and we make it with you in writing during discovery on{" "}
              <Link href="/services/mobile-app-development" className="font-medium text-brand-500 hover:text-brand-600">
                our mobile app development service
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
