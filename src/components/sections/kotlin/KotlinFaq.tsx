import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. PLAIN STRINGS, no anchors - the same array feeds
// the schema and the <details>, so a <Link> here would leak into the JSON-LD and corrupt it. Any page
// reference (the Java page, the mobile service page) is named in prose, never linked.
//
// GUARDRAILS: no fabricated app portfolio / Play Store presence / ratings / downloads. No "accessible"
// as an outcome (method only). Partner/cert entity-kinds correct - the retired Associate Android
// Developer programme is NOT named (dead-programme-burn risk). Version-conservative - no Android/Kotlin
// point-versions, no device counts / OS-share figures. $500 / $15,000 byte-consistent. Kotlin-on-the-
// backend routes to the Java page in prose. KMP framed as share-logic, honoring the RN/Flutter default lock.
const faqs = [
  {
    question: "Have you shipped a native Android app before?",
    answer:
      "No native Android app, and we will not dress that up. We are a growing mobile practice with no Play Store presence, no app screenshots, no store ratings and no download counts, and you should weigh that. What we have shipped is real, on the web: a custom, full-stack online store on its own back end - a searchable, filterable catalog, a checkout that hands payment to a processor, accounts and an admin a non-technical team runs - and a corporate site. A native Android app is a client over exactly that kind of backend, so the server-and-product engineering transfers even though the native client, the language and the platform do not. If a native Android portfolio is your deciding criterion, there are firms who have one, and we would rather you knew that now.",
  },
  {
    question: "Is Jetpack Compose production-ready in 2026?",
    answer:
      "Yes, and we default to it for new Android UI. In its early years Compose was thin in places and teams kept a foot in the XML View system, and anyone who pretends it arrived finished is not worth trusting on the rest. Where it stands now is a maturity signal in itself: it is the toolkit Google builds Android's own UI around, with Material 3 and dynamic colour, and new platform APIs land Compose-first. The honest build is Compose-first, with the View system kept where a legacy codebase or a specific control still needs it - and because Compose and Views interoperate in the same app, that is a pragmatic choice, not a fork in the road.",
  },
  {
    question: "Kotlin or Java for Android?",
    answer:
      "Kotlin is Android's default language, and it is what we write new Android work in - null safety, coroutines and Flow, concise data and sealed classes. Java still runs, and Kotlin calls into it cleanly, so an existing Java codebase is something to build on, not something to rip out. And to be clear about lanes: Kotlin on the server, on a Spring Boot backend, is a different job that lives on our Java and Spring Boot page. Here, Kotlin means native Android.",
  },
  {
    question: "Will it work across Samsung, Xiaomi and older Android versions?",
    answer:
      "That is exactly the Android reality we build for, rather than around. Native Android is not one phone - it is many device models from many makers, each with its own skin over Android, across a wide range of Android versions your users are actually on. We design adaptive layouts with window size classes so one app holds up from a compact phone to a tablet or a foldable, we plan around each maker's take on background and battery limits, and we test across a representative range of real devices rather than a single emulator. The device landscape is where Android products break, so we treat handling it as the work, not an afterthought.",
  },
  {
    question: "Can you share code with our iOS app?",
    answer:
      "Yes, through Kotlin Multiplatform, and it is worth being precise about what that shares. Kotlin Multiplatform lets one Kotlin codebase hold the business logic - networking, data models, validation - across Android and iOS, while each platform keeps its own native UI, and with Compose Multiplatform now stable on iOS, the UI can be shared too when it fits. That is a different cross-platform model from React Native and Flutter, which share the UI across a single runtime. It earns its keep when you run parallel Android and iOS roadmaps and want one source of truth for the logic - it is a deliberate architecture choice with real trade-offs, not a build-once shortcut.",
  },
  {
    question: "Do we need a backend, or is a native Android app enough on its own?",
    answer:
      "Most apps need one, and it is our strongest area. Kotlin and Jetpack Compose build the native client; a real product also needs authentication, an API, a data model, search, and state that syncs - the backend the app talks to. That backend work is what we build on the web every day, so the Android app and the server behind it are designed together rather than negotiated across two vendors. If your product is a thin client over a serious backend, that underneath layer is where a lot of the real engineering lives, and it is genuine, shipped competence for us rather than a claim.",
  },
  {
    question: "Native Android, cross-platform or Kotlin Multiplatform for my case?",
    answer:
      "That is the native-versus-cross-platform decision, and it is bigger than a framework choice, so we make it with you in writing on our mobile app development service rather than settle it on this page. The short version: fully native Android with Kotlin earns its higher cost when the product genuinely demands deep performance, hardware access or platform-specific behaviour. If you need iOS and Android from one codebase, cross-platform - React Native or Flutter - is usually the smart default. Kotlin Multiplatform is a middle model: share the logic across platforms while each stays native. We recommend the fit, not the tool we feel like selling.",
  },
  {
    question: "Who owns the code and the Play Store account?",
    answer:
      "You do, both. The Google Play Developer account is registered in your name, and 100% of the code and IP transfers to you on final payment. We write standard, idiomatic Kotlin and Jetpack against Android's own libraries - no in-house wrapper only we understand - and we handle the technical submission and the store listing under your account, then hand over the repository and the account, so you can publish, update and hire freely with no licence back to us. A vendor who keeps your store account or your code in their name is a vendor you cannot leave, and that is not us.",
  },
  {
    question: "Are you Google certified, or a Google partner?",
    answer:
      "No, and it is worth being precise about what those words mean. The Google Play Developer account is a paid publishing membership, not a credential or a partner badge - we register it in your name and use it to submit your app. There is no company-level Google Android or Kotlin certification to hold: any Google Android developer credential is an individual exam a person sits, the Google Developer Experts programme recognises named individuals by referral so an agency cannot be one, and JetBrains certifies Kotlin training providers and offers individual learners a certificate - none of which is an 'app agency' badge. So 'Google-certified Android developers' as a company claim is a category invention, and Google runs no general 'certified Android app-development agency' partnership to hold.",
  },
  {
    question: "Will you submit the app to the Play Store for us?",
    answer:
      "Yes, as part of the build, under your account. We prepare the app bundle, handle Play App Signing, and submit through review inside your own Google Play Developer account, so the store listing and the app are yours from day one. We build to Play's current requirements, which we confirm at kickoff, and we won't promise you a date the review process can't keep or quote you rules that change - we plan the launch around the requirements as they actually are.",
  },
  {
    question: "How do you handle accessibility?",
    answer:
      "As build work, claimed as a method rather than a finished state. Jetpack Compose carries semantics and content descriptions, and Android provides TalkBack, scalable fonts and touch-target sizing - and we build to those accessibility APIs and verify behaviour on device. What we will not do is call an app 'accessible' as a property and hope; accessibility is work, we treat it as work from the first screen, and we tell you plainly what we build toward and where the responsibility for the finished result sits.",
  },
  {
    question: "Can you adopt Jetpack Compose in our existing XML app?",
    answer:
      "Yes, incrementally, which is the safe way to do it. Android's own interop lets Compose and the XML View system live in the same app - a Compose screen hosts inside a View hierarchy through ComposeView, and Views come into Compose through AndroidView - so you modernise screen by screen rather than betting the product on a rewrite. We would look at your codebase first, tell you honestly where Compose adds value and where the View system should stay, and stage the migration so the app keeps shipping the whole time.",
  },
  {
    question: "What does a native Android app cost?",
    answer:
      "We publish our two mobile prices and refuse to invent a third. A genuinely simple, single-purpose app starts at a Starter App from $500, and a real, product-grade build - screens, data, the Android SDKs it integrates, a backend, real-device QA and Play Store submission - is the Mobile App Build from $15,000. Native Android in Kotlin is the pricier path, not the cheaper one, and it sits at or above that build tier because a fully native app is more work than a shared cross-platform codebase. The honest way to a real number is a short, paid discovery that ends in a written scope and a fixed price before any build, credited toward it.",
  },
  {
    question: "How do you keep the app current after launch?",
    answer:
      "As planned, ongoing work, because a native app is kept current, not finished. Android and its libraries move, new devices and OS versions arrive, and an app that isn't maintained falls behind them. Optional care plans start from $100 a month and cover monitoring, crash triage, OS-version updates and store compliance, with no lock-in. We plan the upkeep as real work from the start rather than treat 'done' as a warranty, and because you own the code and the account, you are free to have your own team or another firm carry it forward instead.",
  },
];

export function KotlinFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Kotlin Android app development, answered" />
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
