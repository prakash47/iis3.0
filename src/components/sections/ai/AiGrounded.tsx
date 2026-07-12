import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconSearch, IconShield, IconCheck, IconCpu, IconEye, IconLock } from "@/components/icons";

// Engineering-depth proof: competence shown through specificity, not adjectives.
// Every item here is a real determinant of whether AI works in production - which
// is exactly what separates a serious builder from a prompt-and-pray shop. This is
// how we earn the right to be believed without a portfolio.
const method = [
  { icon: <IconSearch className="h-5 w-5" />, t: "Grounded in your data (RAG)", d: "The assistant answers from your approved documents using retrieval-augmented generation, so it doesn't invent things it doesn't know." },
  { icon: <IconShield className="h-5 w-5" />, t: "Guardrails against hallucination", d: "Retrieval quality, grounding and refusal behaviour, so it says 'I don't know' instead of confidently making something up." },
  { icon: <IconCheck className="h-5 w-5" />, t: "Evaluated before it ships", d: "We test answer quality against a real set of your questions before launch - not prompt-and-pray, then hope." },
  { icon: <IconEye className="h-5 w-5" />, t: "Human-in-the-loop", d: "For anything consequential, the AI drafts or suggests and a human approves, with clear override and escalation paths." },
  { icon: <IconCpu className="h-5 w-5" />, t: "The right model for the job", d: "Model-agnostic by design - Claude, GPT or capable open models, chosen for your task, budget and data sensitivity. Swappable as the market moves." },
  { icon: <IconLock className="h-5 w-5" />, t: "Private by default", d: "Your data isn't used to train anyone's model - we build on enterprise and API tiers that exclude business data from training. Self-hosting where sensitivity demands it." },
];

export function AiGrounded() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we build AI that actually works"
            title="Grounded, guarded, and evaluated"
            sub="Most AI projects that fail, fail on the engineering, not the model - hallucination, weak retrieval, no evaluation, no oversight. Here's what we do so yours holds up in production."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {method.map((m) => (
            <div key={m.t} className="card flex flex-col p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {m.icon}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{m.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
