import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";

// Honest proof. We have ZERO SaaS/internal-tool case study - only 2 real web
// projects. But our real web work genuinely shipped backend, APIs, auth and data
// (a stronger bridge to custom software than mobile had). No fabricated clients,
// user counts, uptime/SLA, or security certifications we do not hold.
const engineeringChips = [
  "Auth & role-based access", "REST & GraphQL APIs", "Third-party integrations",
  "Background jobs & queues", "Data pipelines & dashboards", "Audit logs",
  "Automated tests & CI/CD", "Encrypted secrets", "Documented handover",
];

const riskReversal = [
  { t: "You own the code, IP and data", d: "Full ownership transfers to you on final payment - repository, IP and your data, with no license back to us." },
  { t: "No lock-in", d: "We build on mainstream open stacks, no proprietary framework - so any competent team can take it over." },
  { t: "We sign an NDA on request", d: "Your idea, data and business details stay confidential from the first conversation." },
  { t: "Milestone-based payments", d: "Payments are tied to delivered, approved work - never 100% upfront." },
  { t: "Security-minded engineering", d: "Role-based access, least-privilege integrations and encrypted secrets, built to your compliance needs." },
  { t: "Senior people, direct", d: "A registered company since 2016 - the people who scope it build it, no offshore handoff." },
];

export function CustomProof() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            title={<>We won&apos;t show you SaaS logos <span className="gradient-text">we haven&apos;t earned.</span></>}
            eyebrow="Proof, honestly"
            sub="We're a growing software practice, so instead of a portfolio wall we'll show you the more honest signal - what we engineer, how we protect you, and the terms in writing."
          />
        </Reveal>

        <Reveal className="mt-10">
          <p className="text-sm font-semibold text-foreground">What we engineer into a system</p>
          <ul className="mt-3 flex flex-wrap gap-2.5">
            {engineeringChips.map((c) => (
              <li key={c} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-foreground">
                <IconCheck className="h-3.5 w-3.5 text-emerald-500" />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal group className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              The engine a system runs on, we&apos;ve already shipped
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The backend, APIs, authentication and data layer a real system needs are the same
              ones we build for the web - and we&apos;ve shipped those in production.{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                See our work
              </Link>{" "}
              (real web projects, honestly labelled - not a mockup of a system we haven&apos;t built).
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
