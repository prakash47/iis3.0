import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. Plain strings, no anchors - the same array feeds
// the schema, and links would leak into it.
//
// SELF-COMPETITION GUARD: MobileFaq and RnFaq already ship FAQPage schemas answering ownership,
// NDA, store submission and native-vs-cross-platform. Those are deliberately NOT restated here as
// standalone questions - they live in FlutterProof's risk cards and FlutterProcess instead. Cost
// and timeline are kept but lead with Flutter specifics before restating the shared numbers, which
// must stay character-identical across all three arrays or the schemas visibly disagree.
//
// GUARDRAILS ENFORCED:
// - ZERO statistics. No layoff headcount, no fps, no frame times, no app-size figures, no market
//   share, no adoption percentages, no Impeller benchmarks.
// - ZERO version numbers for Flutter or Dart. Currency is signalled by feature: Impeller, Dart AOT.
// - ZERO Apple/Google policy numbers: no review times, no rejection rates, no clause numbers.
// - Flutter is NEVER "our default" - RnCompare byte-locked that cell to React Native.
// - NO independent-foundation claim. React Native has the React Foundation; Flutter does not.
//   Flutter's de-risking is open source, a permissive licence, an outside community and a fork.
// - Accessibility: claim the METHOD, never the outcome. No "accessible", no WCAG conformance.
// - Certification: narrowed exactly. Google publishes free Flutter courses that grant completion
//   certificates, so "no certification of any kind" would be refutable. What does not exist is a
//   Google exam or professional credential.
// - Q15 and Q16 both lead with a plain "No".
const faqs = [
  {
    question: "What is Flutter, and what is it used for?",
    answer:
      "Flutter is Google's open-source toolkit for building iOS and Android apps from a single codebase written in Dart. What makes it different from every other cross-platform option is that it does not drive the platform's own widgets - its own rendering engine draws every pixel on the screen. That is why it is chosen for products where the interface is the whole point: a custom, animation-rich design lands identically on both stores and behaves exactly as it was drawn. It is one of our usual cross-platform choices, alongside React Native.",
  },
  {
    question: "Is Flutter dead? Did Google abandon it?",
    answer:
      "No, though the worry was fair. In 2024 Google laid off staff across the Flutter and Dart teams, and later that year a former Flutter engineer launched Flock, a community fork, saying the remaining team was stretched thin. That frustration was real and openly reported. What the 'it's dead' posts leave out is that Flutter kept shipping through it: its rendering engine reached stable and became the default, Dart kept advancing, stable releases continue to land on a steady cadence, and Google develops the project in the open and ships Flutter inside some of its own products. Because Flutter is open source under a permissive licence, with an active outside community and a fork standing by, its future does not hang on one team's headcount.",
  },
  {
    question: "Flutter or React Native - which should I choose?",
    answer:
      "Both are excellent, and we build both, chosen per project. Flutter is the pick when the interface is the whole product - a custom, animation-rich design where owning every pixel is the point, because its own engine draws the screen rather than driving the platform's components. React Native fits teams already in the JavaScript and React ecosystem, shares logic with your web codebase, and hires from a very large talent pool. Neither is universally faster or better. On our React Native page we call React Native our default when a team or product already lives in React, and that still holds. In discovery we recommend the one that fits your product, your team and your budget, in writing, before any build.",
  },
  {
    question: "Why Dart, and not JavaScript?",
    answer:
      "Because Flutter needed a language it could compile two different ways. In a release build, Dart is compiled ahead of time into native machine code for each platform, so there is no JavaScript engine interpreting your app at runtime. In development, the same code runs on a virtual machine, which is what makes stateful hot reload possible - you change a screen and see it in about the time it takes to look up. Dart is also small and conventional: if your team writes TypeScript, Java, Swift or Kotlin, the syntax will feel familiar within days.",
  },
  {
    question: "Nobody on my team knows Dart - does that lock me into your agency?",
    answer:
      "No, and it is a fair thing to worry about. Dart is a small, conventional language a competent team picks up quickly, and we write standard, idiomatic Flutter that any Flutter developer can read - no in-house framework only we understand, and one state-management choice used consistently rather than three patterns fighting in the same repository. You own the code and the IP outright, and the Apple Developer and Google Play accounts are registered in your name, so you can hire or hand the project to another team without asking our permission. If Dart is a cost you would rather not pay at all, that is a real argument for React Native, and we will say so.",
  },
  {
    question: "Will a Flutter app feel native?",
    answer:
      "Yes, when it is built properly - but it is earned rather than inherited. Flutter draws real, platform-shaped interfaces: Cupertino patterns on iOS, Material on Android, with the motion and gestures each platform expects. Because nothing comes from the operating system for free, the things a native control would give you automatically - scroll physics, text selection behaviour, focus order, the newest platform styling - are engineering decisions somebody has to make on purpose. Apps feel wrong when nobody made them. We build to platform patterns and test on real, mid-range devices rather than only the newest handset.",
  },
  {
    question: "Are Flutter apps bigger to download?",
    answer:
      "Yes, and we would rather say so than dodge it. A Flutter app ships its own rendering engine, so it carries a size floor a thin native app does not have. We bring it down the documented ways - tree shaking, split builds per architecture, deferred components, trimmed assets - and we measure the real number on your build rather than quote you one for an app that does not exist yet. For most products the size is a non-issue; if your audience is on constrained devices or expensive data, that is a genuine input into whether Flutter is the right call.",
  },
  {
    question: "What is Impeller?",
    answer:
      "Impeller is Flutter's current rendering engine, and it is the clearest signal that a Flutter codebase is modern rather than dated. Its main contribution is predictability: it precompiles a small, fixed set of shaders when the engine is built, so a screen no longer stutters the first time a particular effect appears. It is not a cure for every stutter - layout work, heavy computation on the main isolate and badly built lists still cause jank - so we still profile motion on real, mid-range hardware rather than assume the engine has handled it.",
  },
  {
    question: "Is a Flutter app accessible to screen-reader users?",
    answer:
      "It can be, and it is build work rather than a default. Flutter exposes a semantics tree that VoiceOver and TalkBack read. Standard widgets emit that automatically, but anything custom-drawn - and on an interface-led Flutter app, a lot is custom-drawn - has to be given labels, roles and actions explicitly. So screen-reader semantics, dynamic text scaling, contrast, focus order and touch-target size are things we implement from the first screen and verify with the assistive technology switched on. This is the accountability side of a toolkit that draws its own pixels, and any agency telling you accessibility comes free on Flutter has not shipped one.",
  },
  {
    question: "Can you push a fix without an app-store release?",
    answer:
      "Not the way you can with JavaScript-based frameworks, and we will not pretend otherwise. Flutter compiles ahead of time to native machine code, so there is no sanctioned JavaScript-style over-the-air code push. Where it helps, Dart-level patches can be delivered inside the store rules - never native code, plugins or bundled assets, and never as a way around review. So we design for it: whatever can safely change stays behind remote config and feature flags, and we plan a realistic release cadence with you rather than promise a hotfix path that does not exist.",
  },
  {
    question: "Can a Flutter app be rejected by the App Store?",
    answer:
      "Apple can reject any app, and being built with Flutter is not a reason it would. Apps are judged on experience and policy, not on which toolkit drew them, and Flutter apps ship in both stores every day. Rejections happen for the same reasons they happen to fully native apps: broken flows, missing privacy disclosures, unclear permission use, thin functionality, or a mismatch between what the listing promises and what the app does. We build to each store's current review and testing requirements, which we confirm at kickoff, and we submit your app for you.",
  },
  {
    question: "Is Flutter good for the web, and for SEO?",
    answer:
      "For SEO, no - and we say that on a site whose whole brand is search visibility. Flutter on the web paints its interface onto a canvas rather than emitting semantic HTML, so it works against crawling, first paint and the accessibility tree. It is a separate target from your mobile app, not a free extra. Where Flutter web genuinely earns its place is behind a login: an internal tool, an authenticated dashboard, or a companion to a Flutter mobile app where the code sharing is worth it. If the thing has to rank on Google, we will route you to a Next.js build and tell you so before you spend.",
  },
  {
    question: "How much does a Flutter app cost?",
    answer:
      "We publish the numbers, and the honest driver of the price is the interface ambition rather than the language. A Flutter app is priced on our two mobile tiers: the Starter App from $500 for a genuinely simple, single-purpose app of a few screens with static or light content and no complex backend, and the Mobile App Build from $15,000 for a full product with a design system, a backend and APIs, real-device QA, and submission to both stores. The $500 tier is not a full app and we will not sell it as one. If your project sits between the two, we scope one fixed price in a short paid discovery, in writing, before any build.",
  },
  {
    question: "How long does it take to build a Flutter app?",
    answer:
      "A Starter App is typically 2 to 4 weeks and a full Mobile App Build is typically 8 to 14 weeks. On Flutter the variable is rarely the code - it is the interface. Because nothing is inherited from the platform, the design system, the motion, the accessibility semantics and the platform-fidelity work are real line items rather than things the operating system hands you, and store review is something we plan around rather than promise a date for. We settle the design language before anyone builds screens on top of it, and we agree a fixed price before the build.",
  },
  {
    question: "Are you a Flutter Partner, or certified?",
    answer:
      "No, and we will not imply otherwise. Flutter runs an official consultants directory on its own site, where firms apply through a Google form and the Flutter team reviews submissions. We are not listed in it. Worth knowing: Flutter's own page states that being listed does not make a firm a Flutter or Google partner and does not warrant the quality of their work, so an 'official Google Flutter partner' badge is describing something that does not exist. Google Developer Expert is a separate programme with a Dart and Flutter category, but it recognises named individuals by referral - a company cannot be one, and nobody here holds it. 'Flutter Favorite' is awarded by the Flutter Ecosystem Committee to packages and plugins, usable only by the package author, so it is not a company credential. And there is no Google Flutter or Dart developer certification: no exam, no professional credential. The free Flutter courses Google publishes grant a certificate of completion, which certifies no company at all, and the paid 'certified Flutter developer' exams sold online are third-party products.",
  },
  {
    question: "Is this website built with Flutter?",
    answer:
      "No. Flutter draws its own pixels with its own engine and targets iOS and Android. This site is a TypeScript and React build that renders to the browser's DOM - there is no Dart in its runtime, none in its build, none in its tooling, and not one Flutter-drawn pixel on it. Unlike our React Native page, there is not even a shared model to point at. We are a growing mobile practice and we have not shipped a Flutter app, and we will not hand you our own website as Flutter proof. What we can point to is real interface craft shipped in production on the web, and the depth on this page about what owning every pixel actually obligates a team to do.",
  },
];

export function FlutterFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Flutter app development, answered" />
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
