import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";

// The signature section, and the honest substitute for the portfolio wall we
// cannot fill. Every "inspect it" item below is TRUE of this live site (one
// class-based light/dark design system with no flash, responsive layout, visible
// keyboard focus, reduced-motion-safe animation, semantic HTML + real JSON-LD),
// so the buyer can verify our design craft first-hand, right now. No fabrication,
// no borrowed logos, no invented metrics - the page itself is the argument.
const inspect = [
  {
    t: "Toggle light and dark",
    d: "One design system, both themes, switched with no flash of the wrong colors - the mark of tokens done right.",
  },
  {
    t: "Resize the window",
    d: "The layout is genuinely responsive, from a wide desktop down to a phone, not a fixed template squeezed to fit.",
  },
  {
    t: "Tab through with your keyboard",
    d: "Navigation, links and controls are semantic and keyboard-operable - real buttons and links, not click-only divs.",
  },
  {
    t: "Turn on reduced motion",
    d: "The animation you see is tasteful and it respects your system setting - accessibility is not an afterthought.",
  },
  {
    t: "Open DevTools",
    d: "Semantic HTML, design tokens as CSS variables, and real structured data - the craft under the surface, not just the paint.",
  },
];

export function UiuxProof() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>You&apos;re already looking at <span className="gradient-text">our portfolio.</span></>}
            sub="Most design agencies open with a wall of client logos. We'll do something more honest and point at the page you're on. The design system, typography, motion and accessibility here are ours - and unlike a portfolio shot, you can check every one of them right now."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {inspect.map((s) => (
            <div key={s.t} className="card flex flex-col p-5">
              <span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                <IconCheck className="h-4 w-4" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{s.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              This is a move only a team that has actually built something good can make. We&apos;d
              rather you judge our craft by inspecting it than take our word for it - and the same
              senior people who designed and built this site are the ones you&apos;d work with.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
