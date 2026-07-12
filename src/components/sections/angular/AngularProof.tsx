import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The honest-proof section - the key difference from the React/Next.js pages,
// which used "this page is built with the tech, inspect it". Our site is Next.js/
// React, NOT Angular, so that wedge is OFF THE TABLE and we say so plainly. The
// proof is depth (the panel above) + ownership + published pricing + honesty.
// Mirrors the AI and mobile pages. NO fabricated logos/case studies/certs.
const riskReversal = [
  { t: "You own 100% of the code", d: "A standard Angular CLI project, not a proprietary wrapper - the repository, and the IP, transfer to you." },
  { t: "No lock-in", d: "Standard Angular and TypeScript, conventional structure - any competent Angular team can pick it up. Nothing about the build traps you with us." },
  { t: "Senior people, direct", d: "You talk to the engineers who write your Angular code - no account-manager layer, no offshore hand-off, no juniors learning on your budget." },
  { t: "Transparent fixed pricing", d: "Published tiers, no metered surprises and no quote wall - the number is agreed before any build begins." },
  { t: "Enterprise-ready, honestly", d: "TypeScript safety, automated testing and accessibility are built in. We hold no SOC 2 report and no ISO 27001 certification, and there is no HIPAA certification for anyone to hold - if you need a vendor who carries a formal attestation, we'll say so." },
  { t: "A registered company since 2016", d: "Small and senior on purpose - the same people scope, build and hand over, so an Angular codebase stays architecturally consistent." },
];

export function AngularProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>We won&apos;t show you logos <span className="gradient-text">we haven&apos;t earned.</span></>}
            sub="Unlike our React and Next.js pages, we can't say 'this page is Angular, inspect it' - our own site runs on Next.js and React, and we won't pretend otherwise. Angular is the framework big regulated organizations reach for, and plenty of agencies decorate these pages with client names and badges they can't actually claim. Here's the more honest signal instead."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The depth above is the demo
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The capability panel above is written by people who actually ship modern Angular -
              signals, zoneless change detection, standalone components, @defer, SSR with hydration.
              Wrong or dated vocabulary is how you spot an amateur; ours is current to Angular 22.
              For a framework that lives or dies on architectural consistency, that competence is the
              proof that matters.
            </p>
          </div>
        </Reveal>

        <Reveal group className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {riskReversal.map((r) => (
            <div key={r.t} className="card p-5">
              <h3 className="font-display text-sm font-semibold text-foreground">{r.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              Real production web work
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              We&apos;ve shipped real production web apps for real clients -{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                see our work
              </Link>
              , honestly labelled and not dressed up as Angular case studies with invented metrics.
              That proves one honest thing: this team ships working software. The Angular-specific
              proof is the depth on this page and the standard-Angular code you&apos;ll own.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
