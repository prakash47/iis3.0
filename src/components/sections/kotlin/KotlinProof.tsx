import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE SIGNATURE - a SPATIAL claim about an uncontrolled device landscape, genuinely unspent vs the
// three mobile siblings: react-native = effort-distribution ("the React part is the easy part"),
// flutter = craft-accountability ("every pixel is ours to get right, and ours to get wrong"),
// swiftui = a TEMPORAL single-owner claim ("On Apple's platform, you are a guest - not the host": one
// authority moves the platform under you). Kotlin/Android is the MIRROR IMAGE: NO ONE owns the device
// landscape, so the danger is spatial - thousands of uncontrolled surfaces you must build FOR at once.
//
// SIGNATURE GUARD: keep it SPATIAL (many devices at once). Do NOT drift into "the platform keeps
// changing under you over time" - that temporal-treadmill beat is SwiftUI's lane and would echo it.
//
// CLEANEST-ZERO (like flutter/swiftui): no Kotlin anywhere in this site. UNLIKE SwiftUI there is NO
// declarative-paradigm echo to fence - Jetpack Compose is simply not our stack - so no laundering seam.
//
// STATS DISCIPLINE: the fragmentation thesis carries NO number - no device count, no OS-version share,
// no test-matrix size, no crash-free %. VERSION-CONSERVATIVE: no Android/Kotlin point-versions. No
// Lighthouse/CWV (web proof does not transfer to a native app). Google Play account is SINGULAR here.
const riskReversal = [
  { t: "Your Play account, your code, 100%", d: "The Google Play Developer account is registered in your name, and 100% of the code and IP transfers to you on final payment. We handle the technical submission and the store listing under your account, then hand you the repository and the keys, so nothing about publishing your app depends on us." },
  { t: "Standard Kotlin and Jetpack, no layer only we understand", d: "We write idiomatic Kotlin and Jetpack Compose against Android's own libraries - ViewModel, Room, Navigation, Hilt, the View system through official interop where it is still the right tool - with no in-house wrapper only we can maintain. Any competent Android team can read it and pick it up, so you are never locked to us." },
  { t: "A fixed price, paid by milestone", d: "We scope the native work - screens, data, the SDKs each feature needs, the backend it talks to - in a short discovery, under an NDA on request, and agree a fixed price before any build. Payments track delivered, approved milestones, never all upfront, and the native surprises are found in discovery rather than in your invoice." },
  { t: "Senior people on the native layer, directly", d: "Intention InfoService has been a registered company since 2016, and you work directly with the senior engineers writing the Kotlin, wiring the SDKs and preparing the submission. No account-manager layer, no offshore hand-off. The native layer is where app projects actually fail, so it is not the layer we hand to someone junior." },
  { t: "We build for the devices you'll never hold", d: "We design adaptive layouts with window size classes and plan for the OEM skins and Android versions your users are actually on, not just the newest handset in the room - because the device landscape is where Android products break, and testing across it is the work, not an afterthought." },
  { t: "We'll tell you when native is the wrong call", d: "Fully native on Android earns its higher cost only when the product genuinely demands deep performance, hardware access or platform-specific features. When it doesn't, cross-platform is the smart default, and we will say so in discovery and point you to our mobile service page rather than sell you two native codebases you don't need." },
];

export function KotlinProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>We won&apos;t pretend this page is <span className="gradient-text">Kotlin.</span></>}
            sub="It isn't, and there is no half-truth to dress up. This site is TypeScript and React rendering to the browser's DOM; Kotlin is a JVM and Android language, drawing native views through the Android toolkit. There is no Kotlin in this site's runtime, none in its build, none in its tooling, and not one native Android view anywhere on it. The speed and accessibility scores a web page can show you do not carry to a native app, so you won't find a borrowed web number standing in as app proof here. We are a growing mobile practice and we have not shipped a native Android app. So instead of a badge, here is the honest thing this page has that a mobile brochure never does."
          />
        </Reveal>

        {/* THE SIGNATURE. Placed immediately after the 12-card grid so paragraph two reframes the
            fragmentation cost as exactly why native-Android expertise matters. SPATIAL, no number. */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                You don&apos;t ship to a phone. You ship to a landscape nobody controls.
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Native iOS has one owner: Apple decides which devices exist. Android has no such owner
                of the device landscape. Your app has to run well across many device models from many
                makers, each with its own skin over Android - Samsung&apos;s, and others - and across a
                far wider range of Android versions than any iPhone lineup, on screens from a compact
                phone to a tablet to a foldable, and out to Wear, TV and Auto. So you do not ship to a
                phone. You ship to a landscape, and the landscape is not yours to control - it is the
                thing that actually breaks Android products, and it is why an emulator on one machine
                tells you almost nothing about how the app behaves in your users&apos; hands.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Here is why that matters for a firm honest enough to tell you it has shipped no Android
                app yet. The question a native-Android buyer really needs answered is not &quot;have you
                shipped apps&quot; - it is &quot;have you reckoned with the landscape&quot;, and that is
                a question of judgement and method, not of a portfolio. Designing adaptive layouts that
                hold across form factors, building offline-tolerant data because the network is hostile,
                planning around each OEM&apos;s take on background limits, testing across the device
                spread rather than the newest handset on the desk - none of that needs a shipped app to
                demonstrate, and all of it is the actual discipline of native Android. We build it on the
                current toolkit - Jetpack Compose with Material 3, coroutines and Flow, the K2 compiler,
                and Kotlin Multiplatform when sharing logic across platforms earns its place - and naming
                the landscape this precisely, then engineering for it, is how you tell a team that
                respects the device spread from one that tested on a single phone and hoped.
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

        {/* THE BADGE DISCLAIM. Google Play account = paid publishing MEMBERSHIP (client's name, we
            submit), not a credential. NO company-level Google Android or Kotlin certification exists;
            any Google Android developer credential is an INDIVIDUAL exam; the GDE is an individual
            referral recognition a company cannot hold; JetBrains certifies training providers and
            individual learners, not app agencies. The retired Associate Android Developer programme is
            deliberately NOT NAMED (dead-programme-burn risk). No invented Google-agency-partner disclaim
            (none exists in this lane). SOC 2 = report, ISO 27001 = org cert, no PCI certificate. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              We&apos;re honest about badges too - here are the exact ones we don&apos;t have
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The Google Play Developer account is not a credential or a partner badge - it is the paid
              membership that lets an app reach the Play Store, which we register in your name and use to
              submit your app for you. There is no company-level Google Android or Kotlin certification
              for a firm like ours to hold or to claim it lacks: any Google Android developer credential
              is an individual exam a person sits, the Google Developer Experts programme recognises
              named individuals by referral so an agency cannot be one, and JetBrains certifies Kotlin
              training providers and offers individual learners a certificate - none of which is an
              &quot;app agency&quot; badge. So we make no certification claim in either direction, and
              &quot;certified Android developers&quot; as a company claim is a category invention. On
              security, to keep the categories straight: a SOC 2 is an attestation report, ISO 27001 is
              an organisational certification, and PCI DSS is validated compliance rather than a
              certificate we hold - we hold none of these, the same as everywhere else on this site. What
              we offer instead of a badge is the depth on this page, published fixed prices, and code you
              own outright.
            </p>
          </div>
        </Reveal>

        {/* THE BRIDGE. Claims the CLIENT-OVER-A-BACKEND-WE'VE-BUILT shape (distinct from swiftui's
            "state-driven product over a backend" framing): the real store is the API-shaped side a
            native app also needs. Fences the native Android SDKs, the device landscape and the Play
            pipeline by name. Anchor is the modest "See our work" - /work still carries placeholder
            sample cards, so do not over-promise a mobile portfolio. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              We haven&apos;t shipped a native Android app. Here&apos;s the shape of what we have shipped.
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A native Android app is a client over a real backend, so the fair question is whether we
              have built the server side of that shape. Honestly: on the web, yes. Our production work is
              real - a custom, full-stack online store on its own back end, with a searchable, filterable
              catalog, a checkout that hands payment to an established processor, accounts and an admin a
              non-technical team runs, plus a corporate site. Strip the web front end away and what
              remains is exactly what a native app also needs and what is genuinely our strength: a data
              model, a real backend you own, search and filtering over a catalog, and a transaction wired
              to a third-party payment processor rather than reinvented. That server-and-product-thinking
              is what travels. What does not travel is the native client itself - not one line of Kotlin,
              Jetpack Compose or the Android SDKs, none of the device-landscape engineering, and nothing
              of the Play Store submission and review pipeline - and we won&apos;t blur that line, or hand
              you our own website as Android proof, because none of it is a native app.{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                See our work
              </Link>
              , labelled as web and never dressed up as an app. The Kotlin-specific proof on this page is
              the depth of what it knows about the Android device landscape, and code you will own outright.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
