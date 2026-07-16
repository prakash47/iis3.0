import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";

// Concrete operating claims a competitor can't parrot - never adjectives like
// "passionate" or "award-winning". Each is a fact, some linking to its proof.
const reasons = [
  { t: "Stack-agnostic, not stack-locked", d: "We recommend the technology that fits your project and budget, not the one we happen to sell." },
  { t: "Perfect Core Web Vitals as standard", d: "A top Lighthouse score is the baseline on every build, not a paid upgrade.", link: { label: "See the proof", href: "#performance" } },
  { t: "Published fixed prices, no quote wall", d: "You see starting prices before you talk to us, and a fixed price before we start.", link: { label: "See pricing", href: "/pricing" } },
  { t: "SEO and AI-search structure from day one", d: "Schema, clean information architecture and AEO/GEO readiness are built in, not retrofitted later." },
  { t: "A CMS your team can actually edit", d: "Update content and pages yourself, without a developer and without breaking the layout." },
  { t: "Senior people, direct", d: "You work directly with the senior people building your product - a registered company since 2016, not an account manager or a queue." },
];

export function WebDevWhyUs() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why us"
            title="Why teams choose us for their build"
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
                  className="mt-4 inline-flex text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 dark:text-brand-400"
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
