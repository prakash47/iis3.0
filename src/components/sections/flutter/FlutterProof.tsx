import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE CLEANEST ZERO ON THE SITE - and that is a strategic advantage, not a weakness.
//
// React Native had ONE rung of real adjacency: our site runs React 19, and our React page already
// publishes that the React model carries over to a React Native app. So RnProof is a DEFENSIVE
// document - most of its energy goes into policing a seam so that adjacency can never be laundered
// into an app track record ("React Native is basically React, and we've done React for years").
//
// Flutter has no such rung. It is Dart, and its own engine draws every pixel. Our stack is
// TypeScript and React rendering to the DOM. There is no Dart in our runtime, our build or our
// tooling, and no shared model. It is a cleaner zero than WooCommerce (which at least sits on PHP)
// and than Angular (which is at least TypeScript rendering to the DOM). Flutter is the furthest
// thing from our stack we have ever built a spoke for.
//
// WHAT THAT FREES US TO DO: a clean zero has no laundering temptation to police. There is no
// "Flutter is basically our stack" sentence to refuse, because it is basically nothing in our
// stack. So this section goes on OFFENCE instead of defence.
//
// THE SIGNATURE - "Every pixel is ours to get right, and ours to get wrong" - converts the
// byte-locked RnCompare fact ("its own engine draws every pixel" / "the interface is the whole
// product") into the thesis. It is kept OUT of the H1: read alone, "ours to get wrong" is a
// confession. Down here, with the 12-card depth grid immediately above it as the answer, it
// reframes risk as accountability. The zero-apps admission stays in the SectionHeading sub so it
// never sits adjacent to the "get it wrong" clause, where the two would compound.
//
// Rejected signatures: "we didn't build this site in Flutter" (structurally the spent WordPress
// move); "recommending Flutter is never our reflex" (lukewarm on the page meant to sell Flutter -
// it belongs in the anti-recommendation, where it now lives); "Dart is a language your team
// doesn't speak" (amplifies the lock-in fear this page must defuse - it is now risk card 4).
const riskReversal = [
  { t: "It will feel like the platform, because we draw it that way", d: "Flutter doesn't wrap a web page in a shell - its own engine draws real, platform-shaped interfaces: Cupertino patterns on iOS, Material on Android, with the motion and gestures each platform expects. Because nothing is inherited from the OS, fidelity is our job rather than an accident. You work directly with the senior people making those calls, with no account-manager layer and no offshore hand-off, and we test on real, mid-range devices rather than the newest handset in the room." },
  { t: "Flutter's future doesn't ride on one team's quarter", d: "Flutter is open source under a permissive licence, developed in the open, with an active outside community and, since 2024, a community fork standing by. But the thing that actually protects you is ownership rather than a promise: 100% of the code and IP transfers to you on final payment, written as standard, idiomatic Flutter, so you could hand it to any other Flutter team tomorrow with no licence back to us." },
  { t: "We engineer the download size, and measure it on your build", d: "Flutter ships its own engine, so a Flutter app carries a size floor a thin native app doesn't, and we won't pretend otherwise. We bring it down the documented ways - tree shaking, split builds per architecture, deferred components, trimmed assets - and measure the real number on your build instead of quoting you one. That work is scoped in a short discovery, under an NDA on request, at a fixed price billed against approved milestones." },
  { t: "Dart is learnable, and you own everything, so you aren't locked to us", d: "Dart is a small, conventional language a competent team picks up quickly, and we write standard, idiomatic Flutter that any Flutter developer can read - no in-house framework only we understand. You own the code and the IP outright, and the Apple Developer and Google Play accounts are registered in your name, so you can hire or move freely. Intention InfoService has been a registered company since 2016, and any care after launch is optional, with no lock-in." },
  { t: "Accessibility is build work, not a pre-launch scramble", d: "Because Flutter draws its own pixels, screen-reader semantics, dynamic text scaling, contrast, focus order and touch-target size are things we implement and verify on real assistive technology, not behaviours the platform grants for free. So we treat them as work from the first screen. That is the accountability side of owning every pixel, and we would rather name it than quietly hope you never test it." },
  { t: "A code fix means a store release - and we plan for that", d: "Flutter compiles ahead of time to native code, so there is no sanctioned JavaScript-style over-the-air code push, and we won't promise you a way to skip review. Where it helps, Dart-level patches can ship inside the store rules - never native code, plugins or assets. We plan the release cadence around that, keep what can safely change behind remote config and feature flags, and submit to both stores for you as part of the build." },
];

export function FlutterProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>We won&apos;t pretend this page is a <span className="gradient-text">Flutter app.</span></>}
            sub="It can't be one, and there isn't even a half-truth to dress up. This site is TypeScript and React rendering to the browser's DOM; Flutter is Dart, and its own engine draws every pixel. There is no Dart in this site's runtime, none in its build, none in its tooling, and not one Flutter-drawn pixel anywhere on it - and unlike our React Native page, there is not even a shared model to point at. We are a growing mobile practice and we have not shipped a Flutter app. So instead of a badge, here is the honest thing this page has that a mobile brochure never does."
          />
        </Reveal>

        {/* THE SIGNATURE. It lands immediately after the 12-card grid, which is what turns "ours to
            get wrong" from a confession into accountability. */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Every pixel is ours to get right - and ours to get wrong
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Most cross-platform pitches lean on the platform to do the hard part: drive the
                operating system&apos;s own buttons, lists and switches, and let iOS make it feel like
                iOS. Flutter does the opposite, and that is the entire reason to choose it. It borrows
                nothing from the platform&apos;s widget set - its own engine draws every pixel on the
                screen, the Cupertino switch and the Material ripple alike. Which is exactly why it
                earns the job when the interface is the whole product: nothing is left to a default you
                cannot control, so a custom, animation-rich design renders the same on both stores and
                behaves precisely the way it was drawn.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Here is the honest other half, and it is the standard we hold this page to. When you
                own every pixel, you own every mistake in one. There is no native control to inherit
                correct behaviour from, and no platform to blame when a screen feels a half-beat
                wrong. The accessibility semantics. Text fields, selection handles and text-editing
                behaviour. Scroll physics and overscroll. The contrast, the touch target, the gesture
                that has to feel right. The way each new version of iOS and Android restyles its own
                controls while your app keeps drawing the old ones. On Flutter every one of those is
                an engineering decision somebody makes on purpose, not a freebie the operating system
                hands you. Choosing Flutter is choosing to make craft a line item instead of a hope.
                Naming that precisely, and engineering each piece - which is what the twelve cards
                above are - is how you tell a team that takes the drawing seriously from one that
                assumes the framework will do it.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal group className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {riskReversal.map((r) => (
            <div key={r.t} className="card p-5">
              <h3 className="font-display text-sm font-semibold text-foreground">{r.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </Reveal>

        {/* THE DISCLAIM - the richest on the site, because Flutter has FOUR distinct badge
            categories and three of them are routinely miscategorised by agencies.
            1. Flutter runs a real, live, applied-to consultants directory on flutter.dev. Google's
               own page NEVER says "partner" - it says "consultants", and it explicitly disclaims
               that listing makes a firm "a Flutter or Google partner". So we use Google's word and
               never write "Flutter Partner". (This is the Expo lesson: verify the owner's wording.)
            2. Google Developer Expert has a Dart and Flutter category, but it recognises named
               INDIVIDUALS by referral. A firm cannot be one. Disclaiming it as an agency badge
               would be a category error, so we categorise it correctly instead.
            3. "Flutter Favorite" is awarded by the Flutter Ecosystem Committee to PACKAGES on
               pub.dev, usable only by the package's author. Not a company credential.
            4. CERTIFICATION - the precise line. Three researchers wrote "Google issues no Flutter
               certification of any kind", which is refutable: Google publishes free Flutter courses
               that grant completion certificates and badges. What does not exist is a Google exam or
               professional credential. Narrow the claim exactly, the way the React Native page said
               "no AGENCY-LEVEL React Native certification" because Meta does publish a course cert. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              We&apos;re honest about badges too - here are the exact ones we don&apos;t have
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Flutter does run an official consultants directory on its own site, where firms apply
              through a Google form and the Flutter team reviews the submissions. We are not listed in
              it. Worth knowing, since agencies advertise this one: Flutter&apos;s own page is careful
              to say that being listed does not make a firm a Flutter or Google partner, and does not
              warrant the quality of their work - which is why we won&apos;t call it a partner
              programme either, and why you should treat an &quot;official Google Flutter
              partner&quot; badge with some suspicion. Google separately runs the Google Developer
              Experts programme, which has a Dart and Flutter category, but it recognises named
              individuals by referral rather than companies - a firm cannot be one, and nobody here
              holds it. &quot;Flutter Favorite&quot; is a different thing again: it is a designation
              the Flutter Ecosystem Committee gives to packages and plugins, usable only by that
              package&apos;s author, so it is not a company credential and we hold none. There is no
              Google Flutter or Dart developer certification - no Google exam, no professional
              credential - and the paid &quot;certified Flutter developer&quot; exams sold online are
              third-party products. The free Flutter courses Google itself publishes grant a
              certificate of completion, which is not the same thing and certifies no company at all.
              And the Apple Developer and Google Play accounts are not credentials: they are the paid
              memberships required to publish, which we register in your name and use to submit your
              app for you. What we offer instead of a badge is the depth on this page, published fixed
              prices, and code you own outright.
            </p>
          </div>
        </Reveal>

        {/* THE THIRD BRIDGE. MobileProof claims the BACKEND ENGINE. RnProof claims backend plus the
            React-model adjacency. This one claims INTERFACE CRAFT as a transferable skill - and
            explicitly disowns this DOM page as Flutter proof, because Flutter's whole premise is
            that it does not use the DOM. The headline scopes its one permitted "we've shipped" to
            the web in the headline itself, so it survives being read alone. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The craft Flutter lives on, we&apos;ve shipped - on the web, in a different renderer,
              and we&apos;ll say so
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Flutter earns its keep when the interface is the whole product, so the fair question is
              whether we can build interfaces. Here is the honest version of that proof. Our production
              work is real, custom web builds - a professional-training platform rebuild and a
              financial-services site, both on our work page - where the visual polish, the responsive
              layout, the motion and the accessibility all had to hold up in front of real users rather
              than in a mockup. That is the same discipline an
              interface-led Flutter build lives or dies on, and it is a skill that travels across
              renderers. What does not travel is the code, and we won&apos;t blur that line: every
              pixel of that work was drawn by the browser&apos;s DOM, not by Flutter&apos;s engine, and
              the page you are reading right now is a React and DOM interface too. So we will not hand
              you our own website as Flutter proof - a toolkit that draws its own pixels shares none of
              ours.{" "}
              <Link href="/work" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                See our work
              </Link>
              , honestly labelled, and never relabelled as a Flutter app, because none of it is one.
              The Flutter-specific proof on this page is the depth of what it knows about owning every
              pixel, and code you will own outright.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
