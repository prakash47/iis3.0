import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD - the AEO goldmine for this page
// (is-React-a-library, React vs Angular/Vue, is-React-good-for-SEO). Correctness =
// E-E-A-T + AI citation. The SEO answer honestly routes to Next.js. Cost is
// byte-identical to the published web tiers; React 19 details are 2026-current.
const faqs = [
  {
    question: "Is React a framework or a library?",
    answer:
      "React is a JavaScript library for building user interfaces - specifically the view and component layer. It is not a full framework: routing, data fetching and server rendering come from your own choices or from a React framework like Next.js.",
  },
  {
    question: "What is React used for?",
    answer:
      "Building interactive user interfaces and single-page applications - dashboards, web app front ends, SaaS UIs, complex forms, design systems and any interface that updates instantly as users interact, without full page reloads.",
  },
  {
    question: "Is React good for SEO?",
    answer:
      "Honestly, not on its own. A plain client-rendered React app serves an almost-empty HTML shell, which search engines struggle with. To make React SEO-friendly you use server rendering - which is exactly what the Next.js framework provides. If SEO matters, we build on Next.js, not React alone.",
  },
  {
    question: "React vs Angular - which is better?",
    answer:
      "React is a flexible UI library with the largest ecosystem and talent pool; Angular is a full, opinionated framework favored by large enterprises that want everything built in. React wins on flexibility, hiring and ecosystem; Angular wins when you want one prescribed way to do everything.",
  },
  {
    question: "React vs Vue - which should I choose?",
    answer:
      "Both are excellent component-based options. Vue is often simpler to start with; React has a far larger ecosystem, talent pool and third-party support, plus a clear path to mobile via React Native. For most teams hiring and scaling in 2026, React is the lower-regret default.",
  },
  {
    question: "Do I need Next.js, or is React enough?",
    answer:
      "If you need SEO, server rendering, routing and a production structure out of the box, use Next.js (a React framework). If you're building a logged-in app or dashboard where SEO doesn't matter, React on Vite is often enough. We help you pick the right one.",
  },
  {
    question: "What are React hooks?",
    answer:
      "Functions that let components use state and other React features without classes - useState, useEffect, useContext, useRef and more, plus React 19 additions like use(), useActionState and useOptimistic. You also write custom hooks to reuse stateful logic across components.",
  },
  {
    question: "What is new in React 19?",
    answer:
      "Actions and useActionState for async and form flows, useOptimistic for instant UI feedback, the use() hook to read promises and context in render, ref as a regular prop (no more forwardRef), and the React Compiler, which auto-optimizes rendering so manual useMemo and useCallback are largely unnecessary.",
  },
  {
    question: "What state management should a React app use?",
    answer:
      "In 2026, a clean default: TanStack Query for server data, Zustand for client and UI state, React Context for slow-changing config like theme and auth, and the URL for shareable state. Redux Toolkit only for large, multi-team apps. Avoid putting API responses into a global store.",
  },
  {
    question: "Is React fast, or does it hurt performance?",
    answer:
      "React is fast when built well - our own site is a React 19 app with strong Core Web Vitals you can measure right now. The React 19 compiler auto-optimizes re-renders, and techniques like code-splitting and list virtualization keep large apps responsive.",
  },
  {
    question: "React vs React Native - what's the difference?",
    answer:
      "React builds interfaces for the web (it renders to the DOM); React Native uses the same React model to build native mobile apps (rendering to iOS and Android). Same mental model - components, hooks, state - a different rendering target, so skills and much logic carry over.",
  },
  {
    question: "How much does a React app or website cost?",
    answer:
      "A React build is priced on our published web tiers: Starter from $300, Launch Sprint from $1,500, Growth Site from $4,000, Commerce Sprint from $7,000, and a web-app MVP Sprint from $12,000. Fixed and published, no hidden quote - you see the price before you commit.",
  },
  {
    question: "Is React still worth using in 2026?",
    answer:
      "Yes. React remains the most-used UI library, is Meta-backed, and just shipped React 19 with a compiler that removed much of the old complexity. It's the low-risk, well-supported default for new interactive products, with the biggest hiring pool to maintain them.",
  },
  {
    question: "Do I own the React code you build?",
    answer:
      "Yes, completely - it's standard React in your repository, under your accounts, with no proprietary lock-in. Because React is the most widely known UI library, any competent developer can maintain it after us. Ownership and transparent fixed pricing are the whole point.",
  },
];

export function ReactFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="React development, answered" />
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
