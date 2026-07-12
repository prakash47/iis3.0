import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. Cost is answered HONESTLY and
// number-free (AI is scoped to requirement, no fixed package). Privacy, ownership
// and hallucination are answered head-on. No fabricated accuracy %, no guarantees.
const faqs = [
  {
    question: "What is an AI chatbot for business, and what can it do?",
    answer:
      "An AI chatbot for business is an assistant that answers questions and takes simple actions using your own content and tools. Done well, it can handle customer support from your knowledge base, help staff find answers in internal docs, qualify leads, or pull information out of documents - grounded in your data so it stays accurate and on-brand.",
  },
  {
    question: "What is RAG (retrieval-augmented generation), and why does it matter?",
    answer:
      "RAG means the AI retrieves relevant passages from your own approved content and answers from those, instead of relying only on what a general model happens to know. It matters because it keeps answers grounded in your facts, cuts down hallucination, and lets the assistant cite where an answer came from. It's how we make a chatbot trustworthy on your data.",
  },
  {
    question: "What is the difference between an AI chatbot and an AI agent?",
    answer:
      "A chatbot mostly answers questions. An AI agent goes further and takes actions across your tools - drafting, filing, updating records, triggering workflows. Agents are more powerful but also more complex and more expensive per task, so the honest answer is that many businesses need a good grounded chatbot or a focused automation, not a full autonomous agent.",
  },
  {
    question: "Do I need an AI agent, or just a chatbot?",
    answer:
      "Often, just a well-built chatbot or a focused automation. Agents that act autonomously across systems earn their cost only when the workflow genuinely needs multi-step actions. We'll scope it to what your task actually requires rather than sell you the most expensive option - sometimes the simpler build is the smarter one.",
  },
  {
    question: "How do you stop an AI chatbot from hallucinating or making things up?",
    answer:
      "We ground it in your data with RAG so it answers from your content, tune retrieval quality, add guardrails and refusal behaviour so it says 'I don't know' rather than guessing, and evaluate answers against a real set of your questions before launch. For anything consequential, a human reviews. Hallucination is an engineering problem, and that's how we manage it.",
  },
  {
    question: "Is my data safe, and how do you keep it secure?",
    answer:
      "Your data stays yours and is handled with least-privilege access and sensible retention. Where data is sensitive, we can self-host or keep it inside your own environment. We sign an NDA on request, before you share anything. Security and privacy are designed in, not bolted on.",
  },
  {
    question: "Will my data be used to train the AI model?",
    answer:
      "No. We build on enterprise and API tiers of the major model providers, which exclude your business data from training by default - unlike consumer AI plans, which often do train on what you type. It's a distinction most buyers don't know exists, and we keep you on the safe side of it. We can put it in writing.",
  },
  {
    question: "Do I own the AI you build - the code, prompts and data?",
    answer:
      "Yes, fully - the code, the prompts, and your data transfer to you on final payment, with no lock-in. We build on mainstream models and open frameworks, so you can take it to any team and swap the underlying model as the market changes. You are never trapped with us.",
  },
  {
    question: "Which AI model do you use - Claude, GPT or open models?",
    answer:
      "We're model-agnostic and pick the right one for the job, your budget and your data sensitivity - Claude, GPT, or capable open-weight models you can self-host. Because it's swappable, you're not betting your product on one vendor, and we can move to a better or cheaper model as they arrive.",
  },
  {
    question: "What can AI automation do for my business?",
    answer:
      "Practical, grounded automation: triaging and routing incoming messages, extracting structured data from documents, drafting and summarizing content, and connecting the tools you already use so work moves without manual copying. We aim it at a specific, repetitive task where it clearly saves time - not vague 'transformation'.",
  },
  {
    question: "How much does it cost to build an AI chatbot or add AI to my app?",
    answer:
      "AI work is scoped to your requirement, so we don't sell a one-size package or hide behind a quote wall. We start with a short discovery or a small pilot on your data, then give you a fixed quote before any build, billed against milestones. You always see the number, and what you own, before you commit.",
  },
  {
    question: "How long does it take to build an AI chatbot or AI feature?",
    answer:
      "Weeks, not months, for most focused builds. We usually start with a short pilot so you see it working on your data quickly, then build the full feature once you've approved it. The exact timeline depends on scope, integrations and how clean your content is, and you get a real one after discovery.",
  },
  {
    question: "Can you add AI features to my existing website or app?",
    answer:
      "Yes - embedding AI into something you already run is one of the main things we do: semantic search, summarization, recommendations, or an in-product assistant, wired into your existing site, app or tools. If you also need the product built, we can build it and add the AI in one go.",
  },
  {
    question: "When is AI not the right solution for my problem?",
    answer:
      "When a simple rule-based automation, a better search box, or fixing a process would solve it more reliably and cheaply. AI is powerful but it isn't the answer to everything, and it adds cost and complexity. If that's your situation, we'll tell you honestly and point you to the better fix - even if it's a smaller job for us.",
  },
];

export function AiFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="AI development, answered honestly" />
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
