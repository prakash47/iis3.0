import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow, IconCheck } from "@/components/icons";
import { performanceMarketingTiers } from "@/content/pricing";

// Flat monthly fee (never % of spend); the client pays platforms directly (no
// markup). Entry is a fixed-price Paid Media Audit (byte-identical to the shared
// pricing source), then a flat monthly fee scoped in the audit.
const audit = performanceMarketingTiers[0];

const model = [
  { t: "A flat monthly fee - never % of spend", d: "So we're paid to spend well, not to spend more. Cutting a wasteful campaign never costs us anything." },
  { t: "You pay the platforms directly", d: "Ad spend goes straight to Google, Meta and the rest, on your own billing - we can't mark it up." },
  { t: "Month-to-month, you own it all", d: "No lock-in and no termination fees. You keep every account, campaign and dataset if you leave." },
];

export function PerfPricing() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we price"
            title="Flat fee, zero markup, month-to-month"
            sub="You pay the ad platforms directly - your spend never passes through us. Our flat monthly fee covers strategy, build, management, optimization and reporting. That's the whole bill."
          />
        </Reveal>

        {/* Entry anchor: a fixed-price Paid Media Audit */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1] flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Start with a {audit.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A fixed-price look at your ad accounts, tracking and wasted spend - so you see our
                  judgment on your account for a small, capped cost before committing to anything.
                  Yours to keep even if you never continue, and credited toward your first month if
                  you do.
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {audit.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 lg:text-right">
                <div>
                  <span className="text-sm text-muted-foreground">from </span>
                  <span className="font-display text-4xl font-bold text-foreground">{audit.from}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{audit.timeline}</p>
                <Button href="/contact" className="mt-4">
                  Book your audit
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal group className="mt-6 grid gap-4 sm:grid-cols-3">
          {model.map((d) => (
            <div key={d.t} className="card p-5">
              <h3 className="font-display text-sm font-semibold text-foreground">{d.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d.d}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Starting lean? Good - we&apos;d rather begin with a modest budget, prove the mechanics on
            your account, and scale what&apos;s working than talk you into spend you&apos;re not ready
            for. See our{" "}
            <Link href="/pricing" className="font-medium text-brand-500 hover:text-brand-600">
              transparent pricing
            </Link>{" "}
            for the rest.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
