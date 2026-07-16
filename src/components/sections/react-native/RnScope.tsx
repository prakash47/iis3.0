import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconRocket, IconLayers, IconRefresh, IconDatabase, IconServer, IconGauge, IconArrow } from "@/components/icons";

// Every card is OFFER language ("we build", "we wire"), never a record ("the apps we've shipped").
// We have shipped ZERO mobile apps, which makes this the most verb-sensitive page on the site.
//
// The routing callout sends the STRATEGY question (should this even be cross-platform, native or a
// PWA?) UP to the mobile money page, which owns that decision in MobileDecision. This spoke owns
// the React-Native-specific layer only. Kotlin Multiplatform is deliberately absent: the money page
// already names it as a cross-platform option, so "the only cross-platform options are React Native
// and Flutter" would contradict service-details.ts. We say "our usual cross-platform choices".
const uses = [
  { icon: <IconRocket className="h-5 w-5" />, t: "New apps for iOS and Android", d: "A product built once and shipped to both stores: navigation, real native UI, auth, payments and the release pipeline, submitted to the App Store and Google Play for you." },
  { icon: <IconLayers className="h-5 w-5" />, t: "MVPs and validation builds", d: "A focused first version that proves the idea on real devices in real hands, scoped so the code you validate with is code you can keep building on rather than throw away." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Migrations to React Native", d: "Moving an existing native or hybrid app onto one codebase, or lifting a legacy React Native app onto the New Architecture - dependency tree audited first, because one un-migrated native library can hold the whole app back." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Offline-first and data-heavy apps", d: "Apps that keep working on a train: a local store, a sync strategy with real conflict rules, and an honest answer about which parts genuinely need to work offline and which do not." },
  { icon: <IconServer className="h-5 w-5" />, t: "Apps on top of your backend", d: "The mobile client for an API you already run, or a new backend built alongside it - auth, data, business logic and integrations, typed end to end." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Rescue, upgrade and care", d: "An app stranded on an old React Native version, sinking under native dependency conflicts, or slow in the places users feel. We audit it, upgrade it and keep it current instead of rewriting it by reflex." },
];

export function RnScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with React Native"
            title="One codebase, two real native apps"
            sub="React Native builds genuinely native iOS and Android apps from a single JavaScript and TypeScript codebase, rendering real platform components rather than a website in a shell. It is our usual cross-platform choice when a team or product already lives in React. A typical React Native engagement is one of these:"
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

        {/* Boundary routing. The strategy call belongs to the hub; the web-React lane belongs to
            the react spoke. Anchors are worded differently from the inbound anchors in
            MobileStack ("Explore React Native development"), MobileDecision (bare "React Native")
            and ReactScope ("the same React model powers mobile via React Native"). */}
        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Where React Native ends, and where we&apos;ll send you
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                This page is about the tool. If your question is really one of these, the answer lives
                somewhere else on this site:
              </p>

              <ul className="mt-6 grid gap-3">
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      You haven&apos;t decided whether you even want an app
                    </span>
                    {" - "}
                    cross-platform, fully native, or a progressive web app is a budget and strategy
                    call before it is a technical one. That decision belongs on{" "}
                    <Link href="/services/mobile-app-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      our mobile app development service, where we make the native-or-cross-platform call in writing
                    </Link>
                    .
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      You meant React, for the web
                    </span>
                    {" - "}
                    dashboards, single-page apps and design systems that render to the browser are a
                    different job with a different renderer. That is{" "}
                    <Link href="/technologies/react" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      React on the web, the DOM side of the same model
                    </Link>
                    , or{" "}
                    <Link href="/technologies/nextjs" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      a server-rendered web app in Next.js
                    </Link>{" "}
                    when search engines need to read it.
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      The app is the easy half and the system is the hard half
                    </span>
                    {" - "}
                    when the real work is the platform behind the app, that is{" "}
                    <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      custom software, scoped in a paid discovery
                    </Link>
                    , with{" "}
                    <Link href="/technologies/nodejs" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      the server your app talks to
                    </Link>{" "}
                    built alongside it.
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
