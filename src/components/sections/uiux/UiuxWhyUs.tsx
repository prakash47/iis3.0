import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The trust engine that stands in for testimonials/awards a young practice can't
// show. Every claim is an honest, checkable policy or mechanism - ownership, no
// lock-in, direct senior access, since-2016 - never a fabricated client outcome.
const pillars = [
  { t: "You own everything", d: "Editable Figma files, the token file, exported assets and the IP transfer to you on final payment. No design held hostage." },
  { t: "No lock-in", d: "Standards-based handoff - tokens as CSS variables or JSON, clean structured Figma - so any developer or agency can pick it up. You're never trapped with us." },
  { t: "Senior people, direct", d: "The people who design it talk to you - no account-manager telephone game, no junior hand-off. A registered company since 2016." },
  { t: "Design only, or design and build", d: "We hand off clean files to your team, or design and ship it ourselves - so nothing gets lost in translation between design and code." },
  { t: "Defined scope and revisions", d: "A defined number of revision rounds, agreed up front, so the work stays focused and the engagement can't quietly sprawl." },
  { t: "Accessibility by default", d: "WCAG-aware contrast, semantics and structure from the first screen - considered as we design, not bolted on at the end." },
];

export function UiuxWhyUs() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why us"
            title={<>A young practice, held to <span className="gradient-text">senior standards</span></>}
            sub="You can't check our references the usual way yet, so we remove the risk instead - with ownership, transparency and terms you can hold us to."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.t} className="card p-5">
              <h3 className="font-display text-sm font-semibold text-foreground">{p.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
