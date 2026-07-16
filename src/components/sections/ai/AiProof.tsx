import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow, IconCheck } from "@/components/icons";

// The hardest honest-proof case on the site: our own site has no AI, and we have
// no AI case study or demo. The move is to convert the whole proof burden into a
// buyer-controlled pilot + explicit ownership/privacy guarantees + honest limits.
// No fabricated accuracy %, no fake demo, no client logos, no "trusted by".
const riskReversal = [
  { t: "You own everything", d: "The code, the prompts, the data and the IP transfer to you on final payment. Full stop." },
  { t: "Your data isn't used to train models", d: "We build on enterprise and API tiers that exclude your business data from model training. We can put it in writing." },
  { t: "No lock-in", d: "Mainstream models and open frameworks, so you're never trapped - the underlying model can be swapped as the market shifts." },
  { t: "NDA on request", d: "Before you share anything sensitive. Your idea and data stay confidential from the first conversation." },
  { t: "We'll tell you when AI isn't the answer", d: "Sometimes a simple rule-based automation or a better search box is smarter and cheaper. We'll say so, not upsell you a model." },
  { t: "AI lives inside real software", d: "AI features don't float in space - they live in production systems, which is what we build." },
];

export function AiProof() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>No demo to dazzle you. <span className="gradient-text">A better offer instead.</span></>}
            sub="We're a growing AI practice, and this category is full of slick demos and inflated accuracy claims. We'll do the opposite: prove it on your data, put the guarantees in writing, and be honest about what AI can and can't do."
          />
        </Reveal>

        {/* Pilot-as-proof: the centrepiece that replaces a case study */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1] flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h3 className="font-display text-xl font-bold text-foreground">
                  We prove it on your data first
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  AI results depend entirely on your content, so a past demo tells you little. Instead
                  we build a small, working proof-of-concept on your own data, for a scoped fixed
                  price, ending in a clear go/no-go and a fixed quote for the full build. You judge
                  the real output before you commit - the proof is made for you, not borrowed from
                  someone else.
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {["On your own content", "Scoped, fixed-price pilot", "A go/no-go you control", "A fixed quote for the build"].map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0">
                <Button href="/contact">
                  Start with a pilot
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Risk-reversal + honesty grid */}
        <Reveal group className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {riskReversal.map((r) => (
            <div key={r.t} className="card p-5">
              <h3 className="font-display text-sm font-semibold text-foreground">{r.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {r.d}
                {r.t === "AI lives inside real software" && (
                  <>
                    {" "}
                    <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      See our software work
                    </Link>
                    .
                  </>
                )}
              </p>
            </div>
          ))}
        </Reveal>

        {/* Number-free scoping / pricing note (AI is requirement-based, no fixed package) */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              How we scope and price it
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              AI work is scoped to your requirement, so we don&apos;t sell a one-size package or hide
              behind a quote wall. After a short discovery or pilot, you get a fixed quote before any
              build, billed against milestones - never open-ended hourly. You always see the number,
              and what you own, before you commit.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
