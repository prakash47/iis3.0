import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";

// Concrete, checkable operating claims - each one a structural choice, not a
// result we assert. Every claim here is true on day one and verifiable.
const reasons = [
  { t: "You own the ad accounts and data", d: "Every account is in your name from day one - you keep all of it, always, even if you leave." },
  { t: "Zero markup on your ad spend", d: "You pay the platforms directly, so there is nowhere for a hidden fee to live." },
  { t: "A flat fee, not a % of spend", d: "We have no incentive to inflate your budget - we're paid for the work, not the size of your spend.", link: { label: "See how we're different", href: "#how-we-work" } },
  { t: "Revenue reporting, no vanity metrics", d: "Leads, CPA and ROAS in plain English - not impressions, clicks and CTR that always look good." },
  { t: "Measurement built by engineers", d: "We set up proper conversion tracking and attribution, because we build software too - not just buy ads." },
  { t: "Month-to-month, senior, since 2016", d: "No lock-in, no junior handoff - a registered company since 2016, run by the people doing the work." },
];

export function PerfWhyUs() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why us"
            title="Why teams trust us with their spend"
            sub="Six things you can check on day one, not results you have to take on faith."
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
