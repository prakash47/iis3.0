import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE SIGNATURE (#16) - a RELATIONSHIP claim, genuinely unspent vs the two mobile siblings:
// react-native = effort-distribution ("the React part is the easy part"), flutter = craft-
// accountability ("every pixel is ours to get right, and ours to get wrong"). SwiftUI = "native is
// not a language you learn once, it is a platform you do not own and must keep pace with." It claims
// the reverse side of a coin FlutterProof already published (a cross-platform engine "keeps drawing
// the old ones" while the platform restyles its own controls) - a deliberate complement, not a
// collision.
//
// CLEANEST-ZERO end (like flutter): no Swift anywhere in this site. So no laundering seam to police
// EXCEPT the single weak declarative echo (React influenced SwiftUI) - which appears exactly ONCE,
// inside the signature p2, and is neutralised in the same breath. It must never resurface in Hero,
// Why, Capabilities or the FAQ.
//
// VERSION-CONSERVATIVE: no iOS/Xcode point-versions; Liquid Glass = Apple's current design material,
// never "this year's"; the treadmill is "new SDKs, revised guidelines, retired APIs" - NOT "a new
// design language every year" (2026's WWDC shipped none, so that would be refutable).
//
// APPLE POLICY TRAP: no review times, rates, policy numbers or fees. No Lighthouse/CWV number (web
// proof does not transfer to a native app). Apple Developer account is SINGULAR (native iOS, not Play).
const riskReversal = [
  { t: "Your Apple account, your code, 100%", d: "The Apple Developer Program membership is registered in your name, and 100% of the code and IP transfers to you on final payment. We submit your app to the App Store under your account, then hand you the repository and the keys, so you can publish and hire freely with no licence back to us." },
  { t: "Standard SwiftUI and Swift, no layer only we understand", d: "We write idiomatic SwiftUI and Swift against Apple's own frameworks - the Observation framework for state, SwiftData for persistence, UIKit through official interop where it is still the right tool - with no in-house wrapper only we can maintain. Any competent Swift team can read it and pick it up, so you are never locked to us." },
  { t: "A fixed price, paid by milestone", d: "We scope the native work - screens, data, the frameworks each feature needs, the backend it talks to - in a short discovery, under an NDA on request, and agree a fixed price before any build. Payments track delivered, approved milestones, never all upfront, and the native surprises are found in discovery rather than in your invoice." },
  { t: "Senior people on the native layer, directly", d: "Intention InfoService has been a registered company since 2016, and you work directly with the senior engineers writing the Swift, wiring the frameworks and preparing the submission. No account-manager layer, no offshore hand-off. The native layer is where app projects actually fail, so it is not the layer we hand to someone junior." },
  { t: "We plan for a platform that keeps moving", d: "Apple ships new SDKs, revised guidelines and periodic design shifts on its own calendar, and a native app has to keep up. We build to Apple's current requirements, which we confirm at kickoff, and we won't promise you a date the review process can't keep or quote you rules that change. Optional care plans from $100 a month cover monitoring, crash triage, OS-version updates and store compliance, with no lock-in." },
  { t: "We'll tell you when native is the wrong call", d: "Fully native on iOS earns its higher cost only when the product genuinely demands deep performance, hardware access or platform-specific features. When it doesn't, cross-platform is the smart default, and we will say so in discovery and point you to our mobile service page rather than sell you two native codebases you don't need." },
];

export function SwiftuiProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>We won&apos;t pretend this page is <span className="gradient-text">SwiftUI.</span></>}
            sub="It isn't, and there is no half-truth to dress up. This site is TypeScript and React rendering to the browser's DOM; SwiftUI is Swift, rendering native views through Apple's own UI toolkits. There is no Swift in this site's runtime, none in its build, none in its tooling, and not one native Apple view anywhere on it. The speed and accessibility scores a web page can show you do not carry to a native app, so you won't find a borrowed web number standing in as app proof here. We are a growing mobile practice and we have not shipped a native iOS app. So instead of a badge, here is the honest thing this page has that a mobile brochure never does."
          />
        </Reveal>

        {/* THE SIGNATURE. Placed immediately after the 12-card grid so paragraph two reframes the tax
            as accountability rather than a warning. The declarative echo is used and neutralised in one
            breath, its only airing on the page. */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                On Apple&apos;s platform, you are a guest - not the host
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Every cross-platform toolkit is, in the end, a translation layer between your app and
                Apple&apos;s platform. SwiftUI is not a translation of anything. It is Apple&apos;s own
                way of building the interface, so a SwiftUI app speaks the platform first-hand: it
                adopts the current design material, Liquid Glass, first-party, reaches for the newest
                frameworks as the SDK lands, and is profiled with Apple&apos;s own SwiftUI Instrument
                rather than a third-party approximation. That immediacy is the whole reason to go
                native, and it is the one thing a cross-platform engine reaches a step behind, because
                it has to redraw by hand what the platform just changed.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Here is the honest other half, and it is the standard we hold this page to. Speaking the
                platform first-hand means living by the host&apos;s rules and the host&apos;s calendar.
                Apple revises its Human Interface Guidelines, ships new SDKs, retires APIs and reviews
                every submission on a schedule you do not set. A native app is never simply finished; it
                is kept current, and keeping it current is recurring work rather than a warranty. SwiftUI
                is how we speak that platform fluently, and its declarative, state-driven model will even
                look familiar to anyone who has read this React site, because SwiftUI was influenced by
                that same declarative approach. That is exactly where the resemblance stops. Recognising
                a mental model is not knowing a language, a runtime or a rendering system, and it is
                certainly not having shipped a native iOS app. We will not let a paradigm we recognise
                stand in for native work we have not done, and naming the platform relationship this
                precisely - then engineering for it, which is what the cards above are - is how you tell
                a team that has reckoned with Apple&apos;s moving platform from one that assumes native
                is just a bigger website.
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

        {/* THE BADGE DISCLAIM - the richest on the site. Each Apple entity gets its correct kind.
            Apple Developer Program = paid publishing MEMBERSHIP (client's name, we submit), not a
            credential. "App Development with Swift" cert EXISTS (Certiport) but is an INDIVIDUAL /
            student credential -> narrow to "no company-level cert"; never "we are not App-Dev-with-
            Swift certified" (category error - it certifies a person). Apple enterprise app-dev
            partners + the Partner Discovery Tool EXIST -> name-and-disclaim (branch a), not "none
            exists". Apple Consultants Network / "Apple Technical Partners" is OMITTED: it is IT-
            deployment-focused (tangential to app dev) AND mid-rename (dead-programme-burn risk).
            SOC 2 = report, ISO 27001 = org cert, PCI = validated compliance not a certificate. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              We&apos;re honest about badges too - here are the exact ones we don&apos;t have
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The Apple Developer Program is not a credential or a partner badge - it is the paid
              membership that lets an app reach the App Store, which we register in your name and use to
              submit your app for you. There is no company-level Apple or SwiftUI certification to hold:
              the &quot;App Development with Swift&quot; credential does exist, delivered through
              Certiport, but it is an individual, entry-level one aimed at learners, not a certification
              a firm can earn - so nobody selling you a SwiftUI build holds it as a company, and
              &quot;certified Apple developers&quot; as a company claim is a category invention. Apple
              does run enterprise app-development partnerships - the large system-integrator tier - and a
              partner directory; we are not an Apple enterprise app-development partner and we are not
              listed in that directory, and you should treat an &quot;official Apple app partner&quot;
              badge from a small agency with some suspicion. On security, to keep the categories
              straight: a SOC 2 is an attestation report, ISO 27001 is an organisational certification,
              and PCI DSS is validated compliance rather than a certificate we hold - we hold none of
              these, the same as everywhere else on this site. What we offer instead of a badge is the
              depth on this page, published fixed prices, and code you own outright.
            </p>
          </div>
        </Reveal>

        {/* THE BRIDGE. Claims the STATE-DRIVEN-PRODUCT-OVER-A-BACKEND shape (distinct from RnProof's
            backend-engine and FlutterProof's interface-craft), then fences the store, the SDKs, the
            Swift toolchain and the treadmill by name. The anchor is deliberately MODEST - not "the two
            web builds we can point to" (that over-promises for a native page; /work carries 2 real
            but web case studies) - and labelled as web, never an app. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              We haven&apos;t shipped a native iOS app. Here&apos;s the shape of what we have shipped.
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A SwiftUI app is a state-driven native interface over a real backend, so the fair question
              is whether we have built products of that shape. Honestly: on the web, yes. Our production
              work is real, custom web builds - a professional-training platform rebuild and a
              financial-services site, both on our work page. The training platform is a
              WordPress-to-Next.js rebuild whose large course catalog became a fast, filterable
              experience, with per-city course landing pages, demo-class and enquiry funnels,
              certificate validation, and a headless-CMS editorial layer the marketing team runs itself.
              The financial-services site is a Next.js loan-comparison build with structured pages for
              ten loan categories, a real-time EMI and affordability calculator, and apply-and-enquiry
              funnels - lead generation, not moving money. Each is a real interface re-rendering from
              real state over a real server, and that shape is what travels. What does not travel is the
              code, and we won&apos;t blur it: every screen of that work is React drawing to the
              browser&apos;s DOM, not Swift drawing native views, and this page is a DOM interface too.
              So we will not hand you our own website as SwiftUI proof, and you will find no App Store
              screenshots here, because none of it is a native app.{" "}
              <Link href="/work" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                See our work
              </Link>
              , labelled as web and never dressed up as an app. What does not bridge at all is the App
              Store relationship, the native Apple SDKs, the Swift build and signing toolchain, and the
              platform treadmill - none of that is in the web work, and we say so plainly. The
              SwiftUI-specific proof on this page is the depth of what it knows about building on
              Apple&apos;s moving platform, and code you will own outright.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
