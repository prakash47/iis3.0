import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. Plain strings, no anchors - the same array feeds
// the schema, and links would leak into it.
//
// MobileFaq already ships a FAQPage answering the generic mobile questions (cost, timeline,
// ownership, store submission, React Native or Flutter). Two FAQPage schemas on one site answering
// the same generic questions is self-competition, so every question here is either React-Native
// specific, or its ANSWER leads with React-Native specifics so the two schemas are distinct
// entities. Q4 restates the MobileFaq Flutter position in substance so they can never disagree.
//
// GUARDRAILS ENFORCED:
// - ZERO statistics. No Airbnb survey percentages, no Shopify metrics, no market share, no fps,
//   no crash-free rates, no adoption numbers.
// - ZERO Apple/Google policy numbers: no review times, no rejection rates, no clause numbers.
// - ZERO version numbers. New Architecture, Fabric, TurboModules, Hermes are named as features.
// - NO ahead-of-time native compilation claim (Static Hermes is a research compiler).
// - Named companies are FRAMEWORK evidence, attributed to first-party sources, never our clients.
// - Capability tense only. The single permitted "we've shipped" is the backend, web-scoped.
// - Q16 leads with a plain "No".
const faqs = [
  {
    question: "What is React Native, and what is it used for?",
    answer:
      "React Native is a framework for building real iOS and Android apps from a single JavaScript and TypeScript codebase. It is not a webview wrapper: it drives the platform's own native components, so users touch real native controls with real native gestures and accessibility. It is used when you want one product, one team and one codebase shipping to both app stores, rather than funding and maintaining two separate native builds. It is our usual cross-platform choice when a team or a product already lives in React.",
  },
  {
    question: "Is React Native dead in 2026?",
    answer:
      "No, though the criticism behind the question was real. Airbnb adopted React Native, sunset it, and published a candid engineering post-mortem about bridging complex native animations and the overhead of the old asynchronous JavaScript-to-native bridge. What the 'it's dead' articles omit is that Airbnb left before React Native was re-architected. The New Architecture - the Fabric renderer, TurboModules and the JSI, with Hermes as the engine - replaced that bridge with direct JavaScript-to-native communication and is now the default. Today Shopify says on its own engineering blog that it migrated all of its apps to React Native, Microsoft maintains the Windows and macOS versions of the framework, and React and React Native are stewarded by the independent React Foundation.",
  },
  {
    question: "Can I reuse my React web code in a React Native app?",
    answer:
      "Much of it, and not the part you are probably picturing. The React model is the same - components, hooks, state - so your business logic, data fetching, validation and much of your architecture carry over, and any React developer can read the codebase. What does not carry over is the interface. React Native has no DOM and no CSS: it renders native views, so screens are rebuilt against platform components and platform patterns. Treat it as sharing the brain, not the body. Anyone promising you 'write once, run everywhere' is selling you the part that does not exist.",
  },
  {
    question: "React Native or Flutter - which should I choose?",
    answer:
      "Both are excellent, and we build both, chosen per project. React Native fits teams already in the JavaScript and React ecosystem, shares logic with your web app, and hires from a very large talent pool. Flutter is excellent for highly custom, animation-rich interfaces, because it draws every pixel with its own engine rather than driving the platform's components. Neither is universally faster or better. In discovery we recommend the one that best fits your product, your team and your budget, and we put that recommendation in writing before any build.",
  },
  {
    question: "Will a React Native app feel native?",
    answer:
      "Yes, when it is built properly, because it renders real native views rather than a web page in a shell. The person holding the phone is touching genuine platform controls. Apps feel wrong for reasons that are engineering failures rather than framework limits: lists that mount everything instead of recycling, animations driven from JavaScript rather than the UI thread, iOS patterns pasted onto Android, and testing done only on the newest handset in the room. We build to platform patterns, keep animations and gestures off the JavaScript thread, and profile on real mid-range devices.",
  },
  {
    question: "Can Apple reject a React Native app?",
    answer:
      "Apple can reject any app, and being built with React Native is not a reason it would. Apps are judged on experience and policy, not on which framework built them - React Native apps ship in both stores every day. Rejections happen for the same reasons they happen to fully native apps: broken flows, missing privacy disclosures, unclear permission use, thin functionality, or a mismatch between what the listing promises and what the app does. We build to each store's current review and testing requirements, which we confirm at kickoff, and we submit your app for you.",
  },
  {
    question: "Do I need Expo, and does it lock me in?",
    answer:
      "React Native's own documentation now recommends starting with a framework rather than assembling one yourself, and Expo is that framework. It gives you routing, native APIs, a build pipeline and over-the-air updates without writing the plumbing. It is not a cage: Expo is open source, your code stays portable, and its paid cloud services are a convenience you can use or skip. There are still projects with unusual native constraints where a framework gets in the way, and in those cases we go without one - and we tell you that before the build rather than during it.",
  },
  {
    question: "What is the New Architecture, and why does it matter?",
    answer:
      "It is the rebuild of how React Native talks to the native side, and it is now the default. The Fabric renderer handles native views, TurboModules load native code only when it is actually used, and the JSI lets JavaScript call native code directly instead of passing serialised messages across an asynchronous bridge. That old bridge is what earned React Native its early reputation for jank at the boundary, and it is being retired from the framework itself. It matters commercially because a new app should be built on it, and an older app that has not migrated will eventually be unable to upgrade.",
  },
  {
    question: "Can you push updates without waiting for an app-store release?",
    answer:
      "Yes, within the rules the stores publish. JavaScript-level bug fixes and content changes can be delivered over the air, through EAS Update or a self-hosted open-source server - note that the old hosted CodePush service was retired, so anyone still describing that as the standard path is out of date. What cannot go that route is anything that changes what the app fundamentally is or adds capability the reviewer never saw. We stay inside those limits, and we do not promise to route around store review.",
  },
  {
    question: "Does a React Native app work offline?",
    answer:
      "It can, and offline is a design decision rather than a switch. We store data locally, decide what syncs and when, and write explicit rules for what happens when the same record changes in two places. The honest conversation is about which screens genuinely need to work without a connection. Most apps need far less offline than they ask for, and the few that truly need it - field tools, logistics, anything used underground or on a plane - need it designed from the first sprint rather than bolted on before launch.",
  },
  {
    question: "How much does a React Native app cost?",
    answer:
      "We publish the numbers. A React Native app is priced on our two mobile tiers: the Starter App from $500 for a genuinely simple, single-purpose app of a few screens with static or light content and no complex backend, and the Mobile App Build from $15,000 for a full product with a backend and APIs, real-device QA, and submission to both stores. The $500 tier is not a full app and we will not sell it as one. If your project sits between the two, we scope one fixed price in a short paid discovery, in writing, before any build.",
  },
  {
    question: "How long does it take to build a React Native app?",
    answer:
      "A Starter App is typically 2 to 4 weeks and a full Mobile App Build is typically 8 to 14 weeks, and the variable is almost never the React. It is the native surface: how many permissions, hardware features, third-party SDKs and offline behaviours the app touches, plus store review, which we plan around rather than promise a date for. We scope that native surface in discovery and agree a fixed price before the build, so the schedule reflects the app you actually asked for.",
  },
  {
    question: "Can you migrate my existing app to React Native?",
    answer:
      "Often, and sometimes we will tell you not to. Moving a native or hybrid app onto one codebase is real work, and the honest first step is an audit: what the app actually does, which native surfaces it touches, and whether the savings from one codebase outweigh a rewrite. Migrating an existing React Native app onto the New Architecture is a different job with the same first step, because the usual blocker is a native dependency that has not migrated and is holding everything else back. We audit the dependency tree before quoting either.",
  },
  {
    question: "Will my app get stranded on an old React Native version?",
    answer:
      "That is the most common way apps rot, and it is preventable. It happens when a team adopts a native library that never moves to the New Architecture, so the whole app cannot upgrade past it, and eventually cannot support the current OS. We check that every native dependency is current before we adopt it, keep the dependency list deliberately short, and treat upgrades as planned work rather than a crisis. You own the code and the store accounts, so any competent team can pick it up. Optional care plans from $100 a month cover OS-version updates and store compliance, with no lock-in.",
  },
  {
    question: "Are you a React Native Partner, or certified?",
    answer:
      "No, and we will not imply otherwise. React Native runs an official Partners programme listed in the framework's own repository - Meta, Microsoft, Expo, Shopify, Callstack, Software Mansion and a few others - and you join it by being referred by an existing partner and committing real engineering to React Native itself. It is a stewardship group for the people who maintain the framework, not a badge an app firm buys. We are not in it, and we are not core contributors either. Expo separately keeps a directory of trusted consultants, and we are not listed there. There is no agency-level React Native certification in existence, so nobody selling you React Native holds one. The Apple Developer and Google Play accounts are paid memberships needed to publish, not credentials - we register them in your name and submit your app for you.",
  },
  {
    question: "Is this website built with React Native?",
    answer:
      "No. React Native renders real native iOS and Android views, and a website cannot be one. This site is a static Next.js and React build that renders to the browser's DOM, so there is no React Native in its runtime or its build. We will not pretend otherwise. Two separate things are true: the interface you are reading is a live React 19 build you can inspect on our React page, which proves we ship real React on the web and nothing more, and a React Native app is written in that same component, hook and state model, which is a property of the technology rather than a claim about us. We are a growing mobile practice, and we won't dress a website up as app proof.",
  },
];

export function RnFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="React Native app development, answered" />
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
