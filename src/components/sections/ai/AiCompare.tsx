import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";
import { siteConfig } from "@/config/site";

// The two failure modes AI buyers are already burned by: hype vendors with slick
// demos and inflated accuracy claims, and cheap shops that skip the engineering
// and ship something that breaks in production. Archetypes are generic and honest.
const rows = [
  { dim: "Proof before you commit", hype: "A slick demo on someone else's data", cheap: "Screenshots, maybe", iis: "A pilot on YOUR data first" },
  { dim: "Grounding", hype: "'Trust the model'", cheap: "No RAG - it guesses", iis: "RAG, grounded in your content" },
  { dim: "Evaluation", hype: "'99% accurate' (unverified)", cheap: "None - prompt and pray", iis: "Tested on your questions before launch" },
  { dim: "Your data & training", hype: "Unclear", cheap: "Often used to train", iis: "Never used to train models" },
  { dim: "Ownership", hype: "Their platform", cheap: "Murky", iis: "You own code, prompts & data" },
  { dim: "Lock-in", hype: "Their stack", cheap: "One person, key risk", iis: "Mainstream models, swappable" },
  { dim: "Honesty", hype: "AI for everything", cheap: "Whatever you ask for", iis: "We'll tell you when AI isn't the answer" },
];

export function AiCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How we compare"
            title={<>Grounded AI, not <span className="gradient-text">AI theatre</span></>}
            sub="Hype vendors sell you a demo and a promise. Cheap shops skip the engineering and it breaks in production. Here's where a grounded, accountable, you-own-it approach sits."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[780px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th scope="col" className="p-4" />
                    <th scope="col" className="p-4 font-semibold text-foreground">Hype-driven AI agency</th>
                    <th scope="col" className="p-4 font-semibold text-foreground">Prompt-and-pray shop</th>
                    <th scope="col" className="bg-brand-500/10 p-4 font-bold text-brand-700 dark:text-brand-400">
                      {siteConfig.name}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.dim} className={i < rows.length - 1 ? "border-b border-border" : ""}>
                      <th scope="row" className="p-4 font-semibold text-foreground">{r.dim}</th>
                      <td className="p-4 align-top text-muted-foreground">{r.hype}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.cheap}</td>
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">
                        <span className="flex items-start gap-2">
                          <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          {r.iis}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            The short version: AI you can test on your own data before you pay for the build,
            grounded so it doesn&apos;t make things up, private, and fully yours to own.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
