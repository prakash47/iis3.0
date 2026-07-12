import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Commercial-investigation + definitional questions specific to buying a mobile
// app. Answer-first, mirrored 1:1 into FAQPage JSON-LD. App-store timings are
// deliberately NOT hard-coded (they change) - we say we plan around the current
// requirements.
const faqs = [
  {
    question: "Should I build a native or cross-platform app?",
    answer:
      "For most apps, cross-platform (React Native or Flutter) is the smart default - one codebase ships to both iOS and Android faster and for less. Fully native (SwiftUI or Kotlin) is worth it when the product needs deep performance, hardware or platform-specific features. We make that call with you in discovery, in writing, before any build.",
  },
  {
    question: "How much does it cost to build a mobile app?",
    answer:
      "Intention InfoService publishes fixed starting prices: a simple, static single-purpose app from $500, and a full cross-platform iOS and Android build from $15,000. The final number depends on features and complexity, but you always agree a fixed price after a short discovery, before any build begins.",
  },
  {
    question: "How long does it take to build a mobile app?",
    answer:
      "A simple app can ship in 2-4 weeks; a full cross-platform build typically takes 8-14 weeks, depending on scope. We work in fixed sprints with weekly demos on real builds, so you always know exactly where things stand.",
  },
  {
    question: "Do you submit my app to the App Store and Google Play?",
    answer:
      "Yes. App Store and Google Play submission and release is part of the build, not left on your plate. We plan around the current review and testing requirements of both stores - which we confirm at kickoff - so your launch date is a realistic one.",
  },
  {
    question: "Who owns the code when you build my app?",
    answer:
      "You do - 100% of the code and IP transfers to you on final payment, with no lock-in and no license back to us. We hand over the repository and store accounts so you can host, publish and hire freely later.",
  },
  {
    question: "Do you sign an NDA?",
    answer:
      "Yes, on request. Your idea, data and business details stay confidential from the first conversation. We're a registered company since 2016, and we're happy to sign your NDA or provide ours.",
  },
  {
    question: "React Native or Flutter - which do you use?",
    answer:
      "Both, chosen per project. React Native fits teams already in the JavaScript and React ecosystem; Flutter is excellent for highly custom, animation-rich interfaces. In discovery we recommend the one that best fits your product, team and budget.",
  },
  {
    question: "Do you build fully native apps too?",
    answer:
      "Yes. When a product genuinely needs it, we build fully native with SwiftUI for iOS and Kotlin for Android - for deep performance, hardware access or platform-specific experiences. We'll tell you honestly when native is worth the extra cost and when it isn't.",
  },
  {
    question: "Do you maintain the app after launch?",
    answer:
      "Yes. Optional care plans start from $100 a month and cover monitoring, crash triage, OS-version updates and app-store compliance, so your app keeps working as iOS and Android evolve. There's no lock-in - the care plan is there if you want it.",
  },
  {
    question: "Can you build a smaller app or an MVP on a tight budget?",
    answer:
      "Yes. Our Starter App begins at $500 for a simple, single-purpose app, and we're happy to scope an MVP to validate an idea. Tell us what you have in mind and your budget, and we'll shape an honest fixed price for the app you actually need.",
  },
  {
    question: "Do you build the backend and APIs too?",
    answer:
      "Yes. Most real apps need a backend, APIs, authentication and sometimes real-time features - we build those as part of the app, and we've shipped that same engine in production on our web work.",
  },
  {
    question: "Should I build a PWA instead of a native app?",
    answer:
      "Sometimes. A progressive web app is an install-free alternative that costs less and skips the app stores - a good fit for content and light tools. If it suits your goals better than a native app, we'll say so, and we build those too.",
  },
];

export function MobileFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Mobile apps, answered" />
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
