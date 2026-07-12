import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";

// Concrete, checkable operating claims - never adjectives, never a claim we
// cannot back. Ownership + no-lock-in do the heavy lifting for systems buyers.
const reasons = [
  { t: "Scoped, not guessed", d: "A fixed-price Discovery Sprint gives you a real scope and a fixed quote before you commit to a build.", link: { label: "See how we price", href: "#how-we-work" } },
  { t: "You own the code, IP and data", d: "Full ownership on final payment - repository, IP and your data. No license back to us." },
  { t: "No proprietary lock-in", d: "We build on mainstream open stacks - Node, Laravel, Django, Java, Next.js - so any team can take over." },
  { t: "Integrations are core, not an afterthought", d: "We connect your CRM, ERP, payments, auth provider and legacy systems as part of the build." },
  { t: "Security-minded engineering", d: "Role-based access, least-privilege integrations and encrypted secrets, built to your compliance needs." },
  { t: "Senior people, direct", d: "A registered company since 2016 - no account managers, no offshore handoff." },
];

export function CustomWhyUs() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why us"
            title="Why teams choose us to build their system"
            sub="Six things you can check, not adjectives you have to trust."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.t} className="card flex flex-col p-6">
              <span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                <IconCheck className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{r.t}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
              {r.link && (
                <Link
                  href={r.link.href}
                  className="mt-4 inline-flex text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
                >
                  {r.link.label}
                </Link>
              )}
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
