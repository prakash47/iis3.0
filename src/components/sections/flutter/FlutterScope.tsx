import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconPalette, IconRocket, IconLayers, IconGrid, IconServer, IconGauge, IconArrow } from "@/components/icons";

// Every card is OFFER language ("we build", "we engineer"), never a record. We have shipped ZERO
// mobile apps and written ZERO Dart, so this and the react-native page are the most verb-sensitive
// pages on the site.
//
// Flutter owns exactly the lane RnCompare gave it: "A strong pick when the interface is the whole
// product". It may NEVER be called "our default" - RnCompare byte-locked that cell to React Native
// ("Our default when your team or product already lives in React").
//
// "our usual cross-platform choices" mirrors RnScope: service-details.ts also names Kotlin
// Multiplatform, so no page may imply React Native and Flutter are the only two options.
//
// The boundary callout carries the page's most important honest routing: Flutter on the web draws
// to a canvas rather than emitting semantic HTML, so an SEO-critical web build goes to Next.js. We
// say that on a site whose entire brand is search visibility. But we concede the real other half -
// Flutter web is a legitimate choice behind a login - because "Flutter web is bad" full stop is
// false and a Flutter-literate buyer would use it against us.
const uses = [
  { icon: <IconPalette className="h-5 w-5" />, t: "Brand-led, animation-rich apps", d: "The products where the interface is the whole point: a bespoke design language, custom motion, and screens that look and behave identically on both stores because nothing is left to a platform default." },
  { icon: <IconRocket className="h-5 w-5" />, t: "New apps for iOS and Android", d: "A product built once and shipped to both stores: navigation, state, auth, payments and the release pipeline, submitted to the App Store and Google Play for you." },
  { icon: <IconLayers className="h-5 w-5" />, t: "MVPs and validation builds", d: "A focused first version proven on real devices in real hands. Dart's hot reload makes design iteration genuinely fast, so the version you validate with is code you can keep building on." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Design systems and multi-brand apps", d: "One widget library, themed per brand or per tenant. Because Flutter draws its own components rather than inheriting the platform's, a design system is enforced by the code instead of negotiated with the OS." },
  { icon: <IconServer className="h-5 w-5" />, t: "Apps on top of your backend", d: "The Flutter client for an API you already run, or a new backend built alongside it - auth, data, business logic and integrations, designed together rather than negotiated across two vendors." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Rescue, audit and care", d: "A Flutter app that feels a half-beat wrong, drags on mid-range devices, inherited a state architecture nobody understands, or is stuck on an old toolchain. We audit it and fix what actually hurts rather than rewriting by reflex." },
];

export function FlutterScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with Flutter"
            title="When the interface is the whole product"
            sub="Flutter builds iOS and Android apps from a single Dart codebase, and unlike every other cross-platform toolkit it does not drive the platform's own widgets - its engine draws the screen. That is the reason to pick it: total control of the interface. It is one of our usual cross-platform choices, and a typical Flutter engagement is one of these:"
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

        {/* Boundary routing. Anchors are worded differently from the five inbound anchors already
            pointing here: "weighing the Flutter alternative" (used TWICE, in RnWhy and RnCompare),
            "Explore Flutter development", "Fast, expressive cross-platform apps from a single
            codebase", and the bare label "Flutter". */}
        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Where Flutter ends, and where we&apos;ll send you
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Flutter is a toolkit, not an answer to everything. When your question is really one of
                these, the answer lives somewhere else on this site:
              </p>

              <ul className="mt-6 grid gap-3">
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      Your web build has to be found on Google
                    </span>
                    {" - "}
                    Flutter on the web paints its interface onto a canvas instead of emitting semantic
                    HTML, so it works against crawling, first paint and the accessibility tree. It is a
                    fine choice behind a login, for an internal tool or a companion to a Flutter app.
                    For anything that must rank, we route you to{" "}
                    <Link href="/technologies/nextjs" className="font-medium text-brand-500 hover:text-brand-600">
                      Next.js, when the web build has to be found on Google
                    </Link>
                    , and we say so before you spend.
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      Your team already writes JavaScript and TypeScript
                    </span>
                    {" - "}
                    Dart is a language most teams do not know yet, and that cost is real. If sharing
                    logic with a React web codebase matters more than owning every pixel, consider{" "}
                    <Link href="/technologies/react-native" className="font-medium text-brand-500 hover:text-brand-600">
                      React Native, the JavaScript route to the same two stores
                    </Link>
                    .
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      You haven&apos;t decided whether you even want an app
                    </span>
                    {" - "}
                    cross-platform, fully native or an install-free web app is a budget and strategy
                    call before it is a technical one. That decision belongs on{" "}
                    <Link href="/services/mobile-app-development" className="font-medium text-brand-500 hover:text-brand-600">
                      our mobile app development service, where we make that call with you in writing
                    </Link>
                    . And when the real work is the platform behind the app, that is{" "}
                    <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
                      the platform behind the app, scoped as custom software
                    </Link>
                    , with{" "}
                    <Link href="/technologies/nodejs" className="font-medium text-brand-500 hover:text-brand-600">
                      the backend and APIs your Flutter app calls
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
