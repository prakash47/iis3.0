import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. Angular's reassurance cluster
// ("is Angular dead / still worth it") is the biggest AEO opportunity here.
// Answers are 2026-correct (Angular 22, signals, zoneless, SSR), the SEO answer is
// accurate (Angular has its OWN SSR), and cost is byte-identical to the web tiers.
const faqs = [
  {
    question: "Is Angular dead in 2026?",
    answer:
      "No. Angular is actively developed by Google, currently at v22 (June 2026), with roughly 3.8 million weekly npm downloads and heavy enterprise use. The confusion is with AngularJS (1.x), a separate older framework that reached end of life in 2021 - that part is true. Modern Angular is very much alive.",
  },
  {
    question: "Is Angular still worth it in 2026?",
    answer:
      "Yes, especially for enterprise. Angular reinvented itself with signals, standalone components and zoneless change detection, and it's strongest for large teams, complex form-heavy apps, and regulated industries that need structure and long-term consistency. For a small, flexible project, React may fit better.",
  },
  {
    question: "Angular vs React - which should I choose?",
    answer:
      "Neither is universally better. Choose Angular for large teams, complex forms and regulated enterprise apps that need enforced structure; choose React for smaller, flexible, fast-iterating, UI-driven projects with the largest ecosystem. We build both and recommend the honest fit, not the one we happen to sell.",
  },
  {
    question: "Is Angular good for enterprise?",
    answer:
      "Yes - it's arguably the strongest fit. Its opinionated structure, dependency injection, typed forms and batteries-included tooling keep large, long-lived, multi-team codebases consistent, testable and maintainable, which is exactly what banking, fintech, healthcare and government buyers need.",
  },
  {
    question: "Is Angular good for SEO?",
    answer:
      "Yes. Angular has its own server-side rendering with hydration, and incremental hydration is stable as of Angular 22, so pages render on the server for search engines and social crawlers - Angular is self-contained and doesn't need another framework for SEO.",
  },
  {
    question: "What are Angular signals?",
    answer:
      "Signals are Angular's fine-grained reactivity system - signal(), computed() and effect(). They let the framework update exactly what changed instead of re-checking everything, and they're stable and the default reactivity model in modern Angular.",
  },
  {
    question: "What is zoneless Angular, and what are standalone components?",
    answer:
      "Zoneless change detection removes the old Zone.js dependency and drives updates through signals - the default for new projects in v22, and faster and more predictable. Standalone components declare their own dependencies without NgModules, and are the default in modern Angular, cutting a lot of boilerplate.",
  },
  {
    question: "What is Angular used for?",
    answer:
      "Large web applications: enterprise dashboards, internal line-of-business tools, banking, fintech and healthcare portals, and complex form-heavy SaaS products - anywhere structure, consistency and long-term maintainability matter.",
  },
  {
    question: "What is the difference between Angular and AngularJS?",
    answer:
      "They are different frameworks, not versions. AngularJS (1.x, from 2010) is JavaScript-based and reached end of life in 2021. Angular (2 and up) is a TypeScript rewrite that is current, supported and actively developed. Moving from AngularJS to Angular is a migration, not an upgrade.",
  },
  {
    question: "Should I migrate from AngularJS to Angular?",
    answer:
      "Yes. AngularJS has been unsupported since the end of 2021, so it's a growing security and hiring liability, especially in regulated industries. Migration is a move to a different framework - often done incrementally with a hybrid approach - and we can scope it as a fixed piece of work.",
  },
  {
    question: "Is Angular hard to learn?",
    answer:
      "It has a steeper initial curve than React because it's a full framework with more built in. But modern Angular - standalone components, signals, the new control flow - is significantly simpler than older versions, and its consistency pays back on large, long-lived projects.",
  },
  {
    question: "How much does an Angular app cost?",
    answer:
      "An Angular build is priced on our published web tiers: Starter from $300, Launch Sprint from $1,500, Growth Site from $4,000, Commerce Sprint from $7,000, and a web-app MVP Sprint from $12,000. Enterprise apps and migrations usually land in the upper tiers, with anything larger scoped to a fixed quote. No hidden hourly rate.",
  },
  {
    question: "How long does it take to build an Angular app?",
    answer:
      "For the standard tiers, weeks - not months. Larger enterprise builds and AngularJS migrations run longer and are scoped honestly after a short discovery, with a fixed price agreed before any build starts.",
  },
  {
    question: "Do I own the Angular code you build?",
    answer:
      "Yes, 100%. It's a standard Angular CLI project in your own repository, with no proprietary lock-in, so any competent Angular team can maintain it after us. Code ownership and transparent fixed pricing are the whole point.",
  },
];

export function AngularFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Angular development, answered" />
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
