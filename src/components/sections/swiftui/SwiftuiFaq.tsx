import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. PLAIN STRINGS, no anchors - the same array feeds
// the schema and the <details>, so a <Link> here would leak into the JSON-LD and corrupt it. Any page
// reference (e.g. the mobile service page) is named in prose, never linked.
//
// GUARDRAILS: no fabricated app portfolio / App Store presence / ratings / downloads. No "accessible"
// as an outcome (method only). Partner/cert entity-kinds correct (membership, individual cert, no
// company-level cert). Version-conservative - no iOS/Xcode point-versions. $500 / $15,000 byte-
// consistent with mobileAppDevTiers. The declarative-React echo does NOT appear here (it lives once,
// in the Proof signature). SwiftUI-vs-React-Native is answered briefly and funnelled, not staged.
const faqs = [
  {
    question: "Have you shipped a native iOS app before?",
    answer:
      "No native iOS app, and we will not dress that up. We are a growing mobile practice with no App Store presence, no app screenshots, no store ratings and no download counts, and you should weigh that. What we have shipped is real, on the web: a custom, full-stack online store on its own back end - a searchable, filterable catalog, checkout through a payment processor, accounts and an admin a non-technical team runs - and a corporate site. A native app is a state-driven interface over a backend, and that shape is exactly what that work is, so the engineering transfers even though the code and the platform do not. If a native iOS portfolio is your deciding criterion, there are firms who have one, and we would rather you knew that now.",
  },
  {
    question: "Is SwiftUI production-ready in 2026?",
    answer:
      "Yes, and the honest answer is SwiftUI-first, not SwiftUI-only. In its early years SwiftUI was thin in places and teams reached back into UIKit, and anyone who pretends it arrived finished is not worth trusting on the rest. Where it stands now is a maturity signal in itself: the Observation framework and @Observable have replaced the old view-model boilerplate with granular per-view updates, SwiftData is the native persistence layer, Swift 6 turns on compiler-enforced data-race safety, and the current design material, Liquid Glass, is adopted first-party. SwiftUI is how Apple itself frames building for its platforms. The honest build is SwiftUI-first, with UIKit brought in through Apple's own interop where a specific control still calls for it.",
  },
  {
    question: "SwiftUI or UIKit - which should we use?",
    answer:
      "SwiftUI for new work, UIKit where the product still needs it, and the two mixed without apology. SwiftUI is declarative and state-driven, covers the mainstream, and is where new iOS hiring is heading. UIKit is the deeper back-catalog - pixel-precise custom transitions, heavily bespoke layouts, and some SDK surfaces that still live only there. They interoperate first-class in both directions through Apple's own bridges, so a real 2026 build is usually SwiftUI-first with UIKit brought in exactly where it earns its place. A team that tells you UIKit is dead is overselling.",
  },
  {
    question: "Do we need a backend, or is a SwiftUI app enough on its own?",
    answer:
      "Most apps need one, and it is our strongest area. SwiftUI is the native UI layer; a real product also needs authentication, an API, a data model, search, and state that syncs - the backend the app talks to. That backend work is what we build on the web every day, so the SwiftUI app and the server behind it are designed together rather than negotiated across two vendors. If your product is a thin client over a serious backend, that underneath layer is where a lot of the real engineering lives, and it is genuine, shipped competence for us rather than a claim.",
  },
  {
    question: "Which Apple devices and OS versions will you support?",
    answer:
      "That is a deliberate decision we make with you in discovery, not a default. Supporting the current OS plus a couple of previous versions is normal, and it has a real cost: features that exist only on newer systems have to be gated so the app still runs on older ones, which is engineering work we scope up front rather than discover later. As for devices, SwiftUI can reach iPhone, iPad, Mac, Apple Watch, Apple TV and Vision from one Swift codebase, but a Watch is not a small iPhone - shared code still needs per-platform adaptation. We agree the target devices and the minimum OS with you before the build, and we won't pretend one layout serves all of them for free.",
  },
  {
    question: "iPhone only, or iPad, Mac and Apple Watch too?",
    answer:
      "As many Apple platforms as your product needs, from largely one Swift codebase - which is SwiftUI's real advantage over cross-platform tools that only reach iOS and Android. The honest caveat is that reaching each platform well means adapting the interface and often the interaction to it, not shipping the iPhone screen everywhere, so multi-platform is a scope decision with real cost, not a free checkbox. We scope exactly which Apple platforms you are targeting, and what each one genuinely needs, in discovery.",
  },
  {
    question: "SwiftUI or React Native - which is right for my app?",
    answer:
      "That is the native-versus-cross-platform decision, and it is bigger than a framework choice, so we make it with you in writing on our mobile app development service rather than settle it on this page. The short version: SwiftUI builds native for Apple's platforms only, so if you need iOS and Android from one codebase, cross-platform - React Native or Flutter - is usually the smart default. Fully native with SwiftUI earns its higher cost when the product genuinely demands deep performance, hardware access or platform-specific behaviour. We recommend the fit, not the tool we feel like selling.",
  },
  {
    question: "Who owns the code and the App Store account?",
    answer:
      "You do, both. The Apple Developer Program membership is registered in your name, and 100% of the code and IP transfers to you on final payment. We write standard, idiomatic SwiftUI and Swift against Apple's own frameworks - no in-house wrapper only we understand - and we hand over the repository and the account, so you can publish, update and hire freely with no licence back to us. A vendor who keeps your store account or your code in their name is a vendor you cannot leave, and that is not us.",
  },
  {
    question: "Are you Apple certified, or an Apple partner?",
    answer:
      "No, and it is worth being precise about what those words mean. The Apple Developer Program is a paid publishing membership, not a credential or a partner badge - we register it in your name and use it to submit your app. There is no company-level Apple or SwiftUI certification to hold; the App Development with Swift credential does exist through Certiport, but it is an individual, entry-level one aimed at learners, so 'Apple-certified developers' as a company claim is a category invention. Apple does run enterprise app-development partnerships in the large system-integrator tier and a partner directory; we are not in either, and you should treat an 'official Apple app partner' badge from a small agency with some suspicion.",
  },
  {
    question: "Will you submit the app to the App Store for us?",
    answer:
      "Yes, as part of the build, under your account. App Store submission and release is our job, not your problem - we prepare the build to Apple's current review and testing requirements, which we confirm at kickoff, and submit it inside your own Apple Developer account so the store listing and the app are yours from day one. We won't promise you a date the review process can't keep or quote you rules that change; we plan the launch around the requirements as they actually are.",
  },
  {
    question: "How do you handle accessibility?",
    answer:
      "As build work, claimed as a method rather than a finished state. SwiftUI has real accessibility built in - VoiceOver support, Dynamic Type text scaling, and semantic controls that carry accessibility information by default - and we build to Apple's accessibility APIs and verify behaviour on VoiceOver and at large text sizes on real devices. What we will not do is call an app 'accessible' as a property and hope; accessibility is work, we treat it as work from the first screen, and we tell you plainly what we build toward and where the responsibility for the finished result sits.",
  },
  {
    question: "Can you adopt SwiftUI in our existing UIKit app?",
    answer:
      "Yes, incrementally, which is the safe way to do it. Apple's own interop lets SwiftUI and UIKit live in the same app - a SwiftUI view embeds inside a UIKit navigation stack through UIHostingController, and UIKit views come into SwiftUI through representables - so you modernise screen by screen rather than betting the product on a rewrite. We would look at your codebase first, tell you honestly where SwiftUI adds value and where UIKit should stay, and stage the migration so the app keeps shipping the whole time.",
  },
  {
    question: "What does a native SwiftUI app cost?",
    answer:
      "We publish our two mobile prices and refuse to invent a third. A genuinely simple, single-purpose app starts at a Starter App from $500, and a real, product-grade build - screens, data, the Apple SDKs it integrates, a backend, real-device QA and store submission - is the Mobile App Build from $15,000. Native SwiftUI is the pricier path, not the cheaper one, and it sits at or above that build tier because a fully native app is more work than a shared cross-platform codebase. The honest way to a real number is a short, paid discovery that ends in a written scope and a fixed price before any build, credited toward it.",
  },
  {
    question: "How do you keep the app current after launch?",
    answer:
      "As planned, ongoing work, because a native app is kept current, not finished. Apple ships new SDKs, revised guidelines and periodic design shifts on its own calendar, and an app that isn't maintained falls behind them. Optional care plans start from $100 a month and cover monitoring, crash triage, OS-version updates and store compliance, with no lock-in. We plan the upkeep as real work from the start rather than treat 'done' as a warranty, and because you own the code and the account, you are free to have your own team or another firm carry it forward instead.",
  },
];

export function SwiftuiFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="SwiftUI app development, answered" />
        </Reveal>
        <Reveal className="mt-9">
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-foreground">
                  {f.question}
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-brand-500 transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
