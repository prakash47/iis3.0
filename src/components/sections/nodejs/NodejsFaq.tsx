import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD - the AEO goldmine (is-Node-front-
// or-backend, Node vs Python/Java/PHP, Node vs Deno/Bun, do-I-need-a-backend, cost).
// Every answer is 2026-correct (Node 24 LTS / 26 current, type-stripping, node:test,
// Express 5 / Fastify / NestJS / Hono), honest, and routes intent. Cost is byte-
// identical to the published web tiers + the custom-software Discovery Sprint.
const faqs = [
  {
    question: "Is Node.js frontend or backend?",
    answer:
      "Node.js is a backend runtime - it runs JavaScript on the server, outside the browser. The confusion comes from the language: JavaScript also runs in the browser, but Node.js itself powers servers, APIs and background jobs. A typical stack pairs a Node.js backend with a React or Next.js front end.",
  },
  {
    question: "What is Node.js used for?",
    answer:
      "Node.js is used to build APIs (REST and GraphQL), real-time features like chat and live updates, microservices, and the server side of web and mobile apps. It is strongest on I/O-heavy work - services that talk to databases, other APIs and many users at once. It also runs build tooling: this very site is compiled on the Node.js runtime even though it ships as static files.",
  },
  {
    question: "Is Node.js good for backend development?",
    answer:
      "Yes, for most I/O-bound backends it is one of the strongest choices in 2026. Its event-driven model handles many concurrent connections efficiently, npm has a maintained library for almost any service, and sharing TypeScript across your API and front end removes a whole class of bugs. It is a weaker fit for heavy CPU-bound or machine-learning work, where Python usually wins.",
  },
  {
    question: "Node.js vs Python for backend - which should I choose?",
    answer:
      "Choose Node.js for real-time features, API-first architectures and when you want one TypeScript language across front and back end. Choose Python when the backend serves machine-learning models or does heavy data processing, where its ecosystem leads. Many teams run both - Node for the public API and real-time layer, Python behind it for AI and data - and because we are stack-agnostic we will tell you honestly which your project needs.",
  },
  {
    question: "Node.js vs Java and Spring Boot - which is better?",
    answer:
      "Java with Spring Boot is the safer pick for large, transaction-heavy enterprise systems with strict typing and long-lived teams. Node.js is faster to build with, lighter to run, and better for real-time and API-gateway work. Neither is better in the abstract - it depends on your workload and your team, and we build in both.",
  },
  {
    question: "Node.js vs PHP and Laravel - which is better?",
    answer:
      "Laravel is excellent for conventional server-rendered web apps and CRUD-heavy products with a fast, batteries-included workflow. Node.js is the better fit for real-time features, JavaScript-everywhere teams, and API-first or microservice architectures. It depends on your product and team, and we build in both.",
  },
  {
    question: "Node.js vs Deno vs Bun in 2026 - which runtime should I use?",
    answer:
      "Node.js remains the default for production in 2026: the largest ecosystem, the widest hosting support, and the safest choice when you need npm compatibility or native modules. Bun is compelling for raw throughput and all-in-one tooling, and Deno leads on built-in TypeScript and a strict security model. We build on Node.js by default and use Bun or Deno when a specific project clearly benefits, not for novelty.",
  },
  {
    question: "Is Node.js still relevant in 2026?",
    answer:
      "Yes. Node.js is still the most widely used backend runtime for web work, with an active LTS line (Node 24), a current release (Node 26) and, from October 2026, a simpler once-a-year cadence where every release line becomes LTS. Recent versions added native TypeScript support, a built-in test runner and a stable permission model. For I/O-bound APIs and real-time services it remains the practical default.",
  },
  {
    question: "Which Node.js framework should I use - Express, NestJS or Fastify?",
    answer:
      "Express is the simplest and most widely known, good for thin backends and small APIs. Fastify is a near drop-in alternative with markedly higher throughput and schema-based validation, for performance-tight services. NestJS is the structured, TypeScript-first framework for larger team codebases. We choose per project and tell you why - and reach for Hono when the work belongs at the edge.",
  },
  {
    question: "REST or GraphQL - which API do I need?",
    answer:
      "A REST API exposes fixed endpoints and is simplest for straightforward CRUD and public APIs. GraphQL lets clients request exactly the data they need in one round trip, which suits complex front ends and mobile apps that would otherwise make many calls. We build both on Node.js and pick based on your clients and data, not fashion - plus tRPC when both ends are TypeScript.",
  },
  {
    question: "Do I even need a Node.js backend, or can my site be static?",
    answer:
      "Many marketing, brochure and content sites need no live backend at all - static rendering is faster, cheaper and safer, and it is how this very site is built. You need a Node.js backend when you have real server logic: user accounts, payments, live data, dashboards or integrations. If a static or hybrid build covers you, we will say so instead of selling you a server you do not need.",
  },
  {
    question: "Does this website run on Node.js?",
    answer:
      "At build time, yes - Node.js compiles it, and npm and our bundler all run on Node. At request time, no, and on purpose: a marketing site is best served as static files, so it needs no live server. Recommending a Node backend only when your product actually needs one is exactly the judgment you are hiring us for.",
  },
  {
    question: "Can Node.js be the backend for my React or Next.js app?",
    answer:
      "Yes - that is one of its most common jobs. A Node.js API on Express, NestJS or Fastify serves data to a React front end, and Next.js itself runs on the Node.js runtime and can host API routes for full-stack builds. If your product is mainly a website with some server logic, a single Next.js app is often simpler; a separate Node.js service makes sense when the backend is substantial or shared across apps.",
  },
  {
    question: "How much does Node.js development cost?",
    answer:
      "We publish fixed tiers instead of hiding behind a quote wall: Starter from $300, Launch Sprint from $1,500, Growth Site from $4,000, Commerce Sprint from $7,000, and an MVP Sprint from $12,000 for web apps with a real backend. A Node.js backend usually lands at the upper tiers, and a standalone or bespoke API is scoped through a custom-software Discovery Sprint from $1,000 that ends in a fixed build quote. You see the number before you commit.",
  },
  {
    question: "Do I own the Node.js code you build?",
    answer:
      "Yes - 100% ownership. It is standard Node.js with no proprietary lock-in, in your repository and deployed to your own cloud accounts, so the code, schema and data are yours from day one. Any competent Node team can maintain it after us. Transparent fixed pricing and code you own outright are the whole point.",
  },
];

export function NodejsFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Node.js development, answered" />
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
