import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  IconLayout,
  IconEye,
  IconGrid,
  IconPen,
  IconPalette,
  IconSpark,
  IconShield,
  IconCode,
} from "@/components/icons";

// The capability grid IS the keyword lane and the self-qualifier. The unifying
// principle that draws the boundary against the "web-design-development" sibling:
// design as the deliverable, or design decoupled from the build. Branding rides
// along as a secondary capability, not a co-equal headline.
const scope = [
  { icon: <IconLayout className="h-5 w-5" />, t: "Product & app UI design", d: "Screens, flows and interactions for web and mobile products, designed in Figma to feel effortless." },
  { icon: <IconEye className="h-5 w-5" />, t: "UX research & audits", d: "Usability reviews, heuristic audits and user flows that find what's quietly costing you conversions." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Design systems", d: "Component libraries, tokens and Figma libraries any team - ours or yours - can build from consistently." },
  { icon: <IconPen className="h-5 w-5" />, t: "Wireframes & prototypes", d: "From low-fidelity structure to a clickable high-fidelity prototype you can test before a line of code." },
  { icon: <IconPalette className="h-5 w-5" />, t: "Brand & visual identity", d: "Logo systems, a color and type system, and brand guidelines that hold together everywhere they're used." },
  { icon: <IconSpark className="h-5 w-5" />, t: "Website & app redesigns", d: "Rework an existing product's look and UX iteratively - real gains without a risky big-bang rebuild." },
  { icon: <IconShield className="h-5 w-5" />, t: "Accessibility-minded design", d: "WCAG-aware contrast, focus and structure on every screen, so more people can actually use what we design." },
  { icon: <IconCode className="h-5 w-5" />, t: "Design-to-development handoff", d: "Dev-ready Figma, tokens and specs - whether we build it or your own developers do." },
];

export function UiuxScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we design"
            title="From one screen to a whole design system"
            sub="Design as the outcome - as a standalone deliverable, or handed off clean to any build team. A typical engagement covers:"
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2">
          {scope.map((s) => (
            <div key={s.t} className="card flex items-start gap-4 p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {s.icon}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{s.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Design-only / design-then-handoff = the ownable niche the build page does not sell */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              Design only? That&apos;s a real option here.
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              We&apos;re happy to design and hand off clean, dev-ready files to your team or any
              developer you choose - you&apos;re never locked to us for the build. And if you&apos;d
              rather one team do both, we can design and ship it, so nothing gets lost in handoff.
            </p>
          </div>
        </Reveal>

        {/* Clean boundary + cross-links to the sibling money pages and the tech hub */}
        <Reveal className="mt-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Want us to design <em>and</em> build it?{" "}
            <Link href="/services/web-design-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              See web design &amp; development
            </Link>
            . Designing an app or a SaaS product?{" "}
            <Link href="/services/mobile-app-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              See mobile app development
            </Link>{" "}
            and{" "}
            <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              custom software
            </Link>
            . Working in Figma?{" "}
            <Link href="/technologies" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              See the tools we build with
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
