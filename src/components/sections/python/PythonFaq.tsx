import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD - the AEO goldmine (what-is-Python-
// for, is-Python-frontend-or-backend, Python vs Node/Java, Django vs FastAPI vs Flask,
// is-Python-good-for-AI, cost). Every answer is 2026-correct (Python 3.14, free-threading
// opt-in/supported not default, experimental JIT, FastAPI/Pydantic v2), honest, and routes
// intent (AI products -> AI development; full web app -> Django; real-time -> Node.js). No
// invented ML metrics. Cost is byte-identical to the published tiers + Discovery Sprint.
const faqs = [
  {
    question: "What is Python used for?",
    answer:
      "Python is a general-purpose language used for backends and APIs, data engineering and analytics, machine-learning and AI systems, automation and scripting, and scientific computing. In 2026 its signature strength is data and AI: it is the primary language of machine learning, and most new AI frameworks ship on Python first. For web work it powers APIs and web apps through FastAPI, Flask and Django.",
  },
  {
    question: "Is Python a frontend or backend language?",
    answer:
      "Python is a backend language - it runs on the server, not in the browser. It builds APIs, business logic, data pipelines and ML services; the browser front end is HTML, CSS and JavaScript. A common 2026 stack pairs a Python (FastAPI) backend with a React or Next.js front end.",
  },
  {
    question: "Is Python good for backend development?",
    answer:
      "Yes - it is one of the strongest backend choices in 2026, especially when the backend touches data, machine learning or heavy automation, where its library ecosystem leads. FastAPI gives it modern async performance and automatic API docs, and Python's readability keeps systems maintainable. It is a weaker fit for ultra-high-concurrency real-time work, where Node.js usually wins - and because we are stack-agnostic we will tell you which your project needs.",
  },
  {
    question: "Is Python good for web development?",
    answer:
      "Yes, for the application and API layer. FastAPI and Flask are excellent for API-first web apps, and Django is the batteries-included choice for content and admin-heavy sites. If your project is a full content and admin web app, that is Django's home ground and we cover it on our Django page; this page owns Python the language, FastAPI, Flask and the non-web Python work. The browser front end is still React, Next.js or Angular.",
  },
  {
    question: "Python vs Node.js - which is better for a backend?",
    answer:
      "Neither is better in the abstract; it is about the workload. Choose Python when the backend serves machine-learning models or does heavy data processing, where its ecosystem leads. Choose Node.js for real-time features, high-concurrency I/O and one TypeScript language across front and back end. Many 2026 teams run both - Node.js for the public API and real-time layer, Python behind it for AI and data - and we build in both, so see our Node.js page for the other side.",
  },
  {
    question: "Python vs Java - which should I choose?",
    answer:
      "Java with Spring Boot is the safer pick for large, transaction-heavy enterprise systems with strict static typing and long-lived teams. Python is faster to build with, far stronger for data and machine learning, and more readable for evolving products. Neither wins in the abstract - it depends on your workload and team, and we build in both.",
  },
  {
    question: "Django vs FastAPI vs Flask - which should I use?",
    answer:
      "Use FastAPI for new API-first services, especially anything AI or high-concurrency - it is the strongest 2026 default, with async performance and automatic docs. Use Django when you need a complete web platform with a built-in admin, ORM and auth out of the box, which is our Django page. Flask still suits small, simple services, but for most new API work FastAPI now does what Flask does and does it better. We pick per project and tell you why.",
  },
  {
    question: "Is Python good for AI and machine learning?",
    answer:
      "Yes - Python is the default language of AI and ML in 2026, and the production agent, RAG and inference frameworks ship on Python first. On this page that means the engineering: integrating and serving models, building data pipelines, and wiring ML into your backend. If what you actually want is an AI product - a chatbot trained on your content, an AI feature or workflow automation - that is a defined service, our AI development service, and we will not quote a made-up model-accuracy number or a fixed AI price.",
  },
  {
    question: "Can you build an AI chatbot or RAG system in Python?",
    answer:
      "Python is the usual stack for that work, but a chatbot or RAG assistant is a product, not just a language choice, so it is scoped as our AI development service rather than priced from the fixed web tiers. AI work is requirement-based - the right model, data grounding and guardrails depend on your content and risk tolerance - so we scope it directly rather than publish a price we would have to invent. Start on our AI development page.",
  },
  {
    question: "Is Python fast or slow?",
    answer:
      "Python is slower than Node.js or Java at raw per-core throughput, but that rarely decides real projects. For data and ML, the heavy lifting runs in C-backed libraries like NumPy and PyTorch, so Python is effectively as fast as the compiled code underneath. Python 3.14 also adds an experimental JIT and an officially supported, opt-in free-threaded build that unlocks true multi-core parallelism, closing much of the historical gap - and for I/O-bound APIs, FastAPI's async model keeps it comfortably fast.",
  },
  {
    question: "Is Python still worth using in 2026?",
    answer:
      "Yes - Python is the No. 1 language on the TIOBE index in 2026 and the dominant language for AI, ML and data engineering. Python 3.14 (October 2025) eased two long-standing criticisms with an officially supported, opt-in free-threaded build that drops the GIL and an experimental JIT compiler. For backends that touch data or AI, and for automation, it is a safe, well-supported default with an enormous talent pool.",
  },
  {
    question: "What is FastAPI and when should I use it?",
    answer:
      "FastAPI is a modern, async Python web framework for building APIs, with type-hint validation through Pydantic and automatic interactive documentation. Use it for new API-first backends, high-concurrency services and AI inference endpoints - it is the strongest 2026 default and materially outperforms Flask on throughput. We reach for Flask on small, simple services and Django when you need a full batteries-included web platform.",
  },
  {
    question: "Does this website run on Python?",
    answer:
      "No - and we won't pretend otherwise. Our site is a static Next.js and React build, and even the build toolchain runs on Node, not Python, so Python powers none of what you are reading. We could have added a Python-powered badge in minutes; we didn't, because that is the moment you could not trust anything else here. The proof is the engineering depth on this page and the standard-Python code you own.",
  },
  {
    question: "How much does Python development cost?",
    answer:
      "We publish fixed tiers instead of a quote wall: Starter from $300, Launch Sprint from $1,500, Growth Site from $4,000, Commerce Sprint from $7,000, and an MVP Sprint from $12,000 for web apps with a real backend. A Python web app usually lands at the upper tiers; a standalone or bespoke API, data pipeline or ML-integration system is scoped through a custom-software Discovery Sprint from $1,000 that ends in a fixed build quote. AI-product work is requirement-based and priced separately - we never invent a price for it.",
  },
  {
    question: "Do I own the Python code you build?",
    answer:
      "Yes - 100% ownership. It is standard Python on mainstream open-source libraries in your own repository, deployed to your own cloud accounts, so the code, schema, data and any trained models are yours from day one and any competent Python team can take it over. No proprietary lock-in, no framework only we understand. Transparent fixed pricing and code you own outright are the whole point.",
  },
];

export function PythonFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Python development, answered" />
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
