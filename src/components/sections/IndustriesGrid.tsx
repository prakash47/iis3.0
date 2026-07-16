import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/content/catalog";
import {
  IconArrow,
  IconGradCap,
  IconHeartPulse,
  IconCreditCard,
  IconBuilding,
  IconPlane,
  IconPlay,
} from "@/components/icons";

const industryIcons: Record<string, React.ReactNode> = {
  "edtech": <IconGradCap className="h-6 w-6" />,
  healthcare: <IconHeartPulse className="h-6 w-6" />,
  fintech: <IconCreditCard className="h-6 w-6" />,
  "real-estate": <IconBuilding className="h-6 w-6" />,
  "travel": <IconPlane className="h-6 w-6" />,
  "entertainment-media": <IconPlay className="h-6 w-6" />,
};

// Descriptive, keyword-rich internal-link anchors (SEO): each card links to its
// /industries/[slug] page with a vertical-specific anchor, not a bare name.
const industryCtas: Record<string, string> = {
  "edtech": "Explore EdTech & LMS development",
  healthcare: "Explore healthcare software development",
  fintech: "Explore fintech & payments development",
  "real-estate": "Explore real estate & listing portal development",
  "travel": "Explore travel & hospitality software development",
  "entertainment-media": "Explore entertainment & media platform development",
};

/**
 * Industries grid - surfaces all six /industries/[slug] pages from the homepage
 * (highest-authority page) at click-depth 1, with descriptive anchors + neutral,
 * capability-only descriptors (no unsubstantiated "compliant/secure" promises on
 * the regulated verticals). All six render equal - no fabricated proof badge.
 */
export function IndustriesGrid() {
  return (
    <Section>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <SectionHeading
              eyebrow="Industries"
              title="Industries we build for"
              sub="Focused engineering and design for the verticals where a fast, modern product moves the needle - built on the same honest, stack-agnostic method as everything else we do."
            />
          </Reveal>
          <Link
            href="/industries"
            className="text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 dark:text-brand-400"
          >
            All industries →
          </Link>
        </div>

        <Reveal group className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              aria-label={industryCtas[ind.slug]}
              className="card group relative flex flex-col p-7 glow-border"
            >
              <div className="relative z-[1] flex flex-1 flex-col">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface-2 text-brand-500 transition-colors duration-300 group-hover:border-brand-400/50 group-hover:text-brand-600">
                  {industryIcons[ind.slug]}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{ind.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{ind.tagline}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 dark:text-brand-400">
                  {industryCtas[ind.slug]}
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
