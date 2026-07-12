import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconChat, IconRefresh, IconLayers, IconCheck } from "@/components/icons";

// The three honest pillars, each with concrete use cases. Capabilities only -
// never framed as things we have already shipped for named clients. This grid is
// the keyword lane (RAG chatbots, AI automation, embedded AI) and the boundary.
const pillars = [
  {
    icon: <IconChat className="h-5 w-5" />,
    t: "AI chatbots & assistants",
    d: "Trained on your own content (RAG), so answers come from your docs - not guesses.",
    items: [
      "Customer-support chatbot on your knowledge base",
      "Internal staff assistant over your docs and wikis",
      "Chat with your documents - RAG search",
      "Conversational lead qualification and intake",
    ],
  },
  {
    icon: <IconRefresh className="h-5 w-5" />,
    t: "AI workflow automation",
    d: "AI that doesn't just answer - it reads, classifies, drafts, routes and summarizes across your tools.",
    items: [
      "Triage and route incoming messages or tickets",
      "Extract structured data from documents",
      "Draft, summarize and repurpose content",
      "Connect the tools you already use",
    ],
  },
  {
    icon: <IconLayers className="h-5 w-5" />,
    t: "Embedded AI features",
    d: "AI dropped into a product you already run, or one we build for you.",
    items: [
      "Semantic search across your content",
      "In-product summarization and drafting",
      "Recommendations and smart suggestions",
      "In-app copilots and assistants",
    ],
  },
];

export function AiScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build"
            title="Applied AI, scoped to a real job"
            sub="Not a magic brain - AI aimed at a specific task, grounded in your data, and built into your workflow. Three things we build:"
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-5 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.t} className="card flex flex-col p-6">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {p.icon}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{p.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              <ul className="mt-4 space-y-2.5 border-t border-border pt-4">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        {/* Boundary + cross-links. The digital-marketing link is the critical guardrail:
            "AI SEO / rank in ChatGPT" intent belongs to marketing, not here. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              Where AI development fits
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              We add the intelligence layer. Need the underlying system, SaaS or API first?{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
                Custom software
              </Link>{" "}
              builds it; we add the AI. Adding AI to a new{" "}
              <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
                website or web app
              </Link>{" "}
              or a{" "}
              <Link href="/services/mobile-app-development" className="font-medium text-brand-500 hover:text-brand-600">
                mobile app
              </Link>
              ? We build the product there and add the AI here. Want AI to lift your search
              visibility and get you cited in AI answers? That&apos;s{" "}
              <Link href="/services/digital-marketing" className="font-medium text-brand-500 hover:text-brand-600">
                digital marketing
              </Link>
              , not this page. And we don&apos;t train foundation models or do ML research - we
              build practical AI on proven, mainstream models.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
