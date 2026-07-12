import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Query-phrased questions + self-contained, brand-as-subject answers (each with
// a concrete detail) so AI answer engines can lift them. Includes the two key
// objection-crushers (trust vs a bigger agency; India-based comms). The same
// array feeds FAQPage JSON-LD for AI comprehension.
const faqs = [
  {
    question: "What does Intention InfoService do?",
    answer:
      "Intention InfoService is a digital product and growth company, incorporated in 2016, that designs, builds and grows websites, web apps, e-commerce stores, mobile apps, custom software and AI solutions for businesses from startups to enterprises worldwide - plus the UI/UX and digital marketing behind them.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Intention InfoService publishes transparent, fixed 'starting-at' prices instead of hiding behind a quote form. Prices start from a few hundred dollars for a single-page site and in the low four figures for a full multi-page build, with larger web apps and e-commerce priced by scope - and you always see a fixed price before any work begins.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most marketing sites go from kickoff to live in 2-6 weeks and web-app MVPs in 6-10, using fixed sprints with weekly demos so you always know exactly where things stand.",
  },
  {
    question: "Do you only build with Next.js and React?",
    answer:
      "No - Intention InfoService is stack-agnostic and picks the right tool for each project: Next.js, React or Astro on the front end; WordPress, Laravel, Django, Node or Java on the back end; Shopify or custom for commerce. We recommend the stack that fits your goals, timeline and budget, not the one we happen to sell.",
  },
  {
    question: "Why choose Intention InfoService over a bigger agency?",
    answer:
      "Intention InfoService has been a registered company since 2016 and earns trust with proof you can verify, not borrowed logos - a live, perfect Lighthouse score on this very site, published fixed prices, and named people on every project. You work directly with the senior team building your product, never an account manager.",
  },
  {
    question: "Intention InfoService is based in India - how do timezones and communication work?",
    answer:
      "Intention InfoService works with startups, SMBs and enterprises across the US, UK, UAE, Europe and India with overlapping working hours, weekly demos and direct access to the people building your product - so distance never becomes a black box, and you get delivery in your timezone.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "Intention InfoService is stack-agnostic and builds with the right tool per project: Next.js, React and headless CMS or WordPress for the web; React Native and Flutter for mobile; and Node.js, Laravel, Django and Java on the backend - each chosen for performance, SEO and long-term maintainability.",
  },
];

export function FAQ() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
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
