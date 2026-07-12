import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, phrased the way people ask AI engines, mirrored 1:1 into FAQPage
// JSON-LD. The two hardest objections - "no portfolio" and "young practice" - are
// named and answered head-on. Prices are byte-identical to the pricing section.
const faqs = [
  {
    question: "What is the difference between UI and UX design?",
    answer:
      "UX design is how a product works - the flows, structure and decisions that make it easy to use. UI design is how it looks and feels - the layout, color, type, spacing and states on screen. You need both: great UX with poor UI feels clumsy, and beautiful UI on a broken flow still frustrates people. We do both, together.",
  },
  {
    question: "What is the difference between UI/UX design and branding?",
    answer:
      "UI/UX design shapes the product experience - the screens and flows people use. Branding shapes how your company looks and sounds everywhere - the logo, color, type and voice. They overlap, because your product should feel on-brand. This page leads with UI/UX design and offers branding as a focused, foundational capability alongside it.",
  },
  {
    question: "Do I need branding, or just a logo?",
    answer:
      "A logo is one piece of a brand. A brand is the system around it - color, type, spacing and usage rules - that keeps you looking consistent across a website, an app and every touchpoint. If you only need a mark, say so and we'll keep it simple; if you need a foundation to grow on, our Brand Sprint gives you a usable starting system.",
  },
  {
    question: "What is a design system, and do I need one?",
    answer:
      "A design system is a reusable kit of components, tokens (color, type, spacing) and rules, so every screen looks consistent and new work ships faster. You need one once you have more than a few screens or more than one person building - it stops your product drifting into a patchwork. For a single landing page, it can wait.",
  },
  {
    question: "How much does UI/UX design cost?",
    answer:
      "It depends on scope, so we don't guess a single number or hide behind a quote wall. You start with a low, fixed-price door: a UX/UI Audit from $100, a Design Sprint from $200, or a Brand Sprint from $500. Larger work - full product design, a complete design system, a full identity - is then scoped into a fixed quote, and the door fee is credited toward it.",
  },
  {
    question: "What is a UX audit, and what's included?",
    answer:
      "A UX audit is a fixed-scope expert review of an existing site, app or key flow. Ours (from $100) delivers a prioritized findings report with annotated screens, quick wins and a recommended plan - so you see exactly where users struggle and what to fix first. It's the fastest, lowest-risk way to see our thinking on your own product.",
  },
  {
    question: "What is a design sprint, and how long does it take?",
    answer:
      "A design sprint is a focused, time-boxed engagement that takes one problem from a quick discovery to a high-fidelity design. Ours (from $200) is about a week and produces one key screen or a short flow in Figma, plus the core style direction - so you can judge our design on your product before committing to more.",
  },
  {
    question: "Can you do design only, without building the website or app?",
    answer:
      "Yes - design-only is a core option here. We hand off clean, dev-ready Figma files, tokens and specs to your team or any developer you choose, and you're never locked to us for the build. If you'd prefer one team to design and ship it, we can do that too.",
  },
  {
    question: "Do I own the design files and IP after the project?",
    answer:
      "Yes - 100%. Editable Figma files, the token file, exported assets and the IP transfer to you on final payment, with no lock-in and no license back to us. You can take the work to any developer or agency; we earn the next phase, we don't trap you into it.",
  },
  {
    question: "How do you prove design quality if you don't have a big portfolio?",
    answer:
      "By showing you real work you can inspect instead of a gallery you can't verify: this very site is our design system, live, with light/dark theming, keyboard-operable navigation and real structured data. On top of that, a low-cost UX/UI Audit lets you buy a small, real sample of our thinking on your own product before you commit to more.",
  },
  {
    question: "Why should I trust a young design practice?",
    answer:
      "It's a fair question, so we answer it with terms rather than promises: you own every file and the IP, there's no lock-in, senior people work with you directly, and you can start with a small fixed-price audit instead of a big leap of faith. We've been a registered company since 2016, and we'd rather earn the next step than oversell the first.",
  },
  {
    question: "Do I need a UX designer or a developer?",
    answer:
      "A designer decides what to build and how it should work and look; a developer builds it. If your product feels confusing, converts poorly or looks dated, that's a design problem first - fixing the code won't fix the flow. We start with the design, and can hand it to your developers or build it ourselves.",
  },
  {
    question: "What deliverables do I get from a UI/UX design project?",
    answer:
      "Typically: organized, editable Figma files; a UI kit or component library with real states; design tokens as CSS variables or JSON; a clickable high-fidelity prototype; an accessibility pass; and a dev-ready handoff with specs. Everything is yours to keep, so any team can build and extend it.",
  },
  {
    question: "Do you design mobile apps and SaaS products too?",
    answer:
      "Yes. We design product UI and UX for web, mobile and SaaS. If you also want it built, pair this with our mobile app development or custom software development pages - and if it's a website or web app, with web design and development. This page is about the design itself, standalone or handed off.",
  },
];

export function UiuxFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="UI/UX design and branding, answered" />
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
