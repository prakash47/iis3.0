import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/catalog";
import {
  IconArrow,
  IconCode,
  IconDevice,
  IconLayers,
  IconMegaphone,
  IconPen,
  IconShield,
  IconSpark,
  IconTrendingUp,
} from "@/components/icons";

const serviceIcons: Record<string, React.ReactNode> = {
  "web-design-development": <IconCode className="h-6 w-6" />,
  "mobile-app-development": <IconDevice className="h-6 w-6" />,
  "custom-software-development": <IconLayers className="h-6 w-6" />,
  "digital-marketing": <IconMegaphone className="h-6 w-6" />,
  "performance-marketing": <IconTrendingUp className="h-6 w-6" />,
  "ui-ux-design-services": <IconPen className="h-6 w-6" />,
  "website-maintenance-services": <IconShield className="h-6 w-6" />,
  "ai-development": <IconSpark className="h-6 w-6" />,
};

// Descriptive CTAs (SEO): each card links to its /services/[slug] money page with
// keyword-rich anchor text instead of a generic "Explore".
const serviceCtas: Record<string, string> = {
  "web-design-development": "Explore web development",
  "mobile-app-development": "Explore app development",
  "custom-software-development": "Explore custom software",
  "digital-marketing": "Explore digital marketing",
  "performance-marketing": "Explore performance marketing",
  "ui-ux-design-services": "Explore UI/UX design",
  "website-maintenance-services": "Explore care plans",
  "ai-development": "Explore AI development",
};

/**
 * Services bento - the homepage's internal-linking core. Each card is a single
 * link to its /services/[slug] money page, with a descriptive (not generic)
 * anchor so Google reads unambiguous internal-link votes. Server-rendered.
 */
export function ServicesBento() {
  return (
    <Section className="bg-muted/60">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title={<>Everything you need to <span className="gradient-text">launch &amp; grow</span></>}
              sub="End-to-end digital delivery - from a fast marketing site to a full product and the marketing engine behind it."
            />
          </Reveal>
          <Link
            href="/services"
            className="text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 dark:text-brand-400"
          >
            All services →
          </Link>
        </div>
        <Reveal group className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              aria-label={service.name}
              className="card group relative flex flex-col p-7 glow-border"
            >
              <div className="relative z-[1] flex flex-1 flex-col">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface-2 text-brand-500 transition-colors duration-300 group-hover:border-brand-400/50 group-hover:text-brand-600">
                  {serviceIcons[service.slug]}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.tagline}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 dark:text-brand-400">
                  {serviceCtas[service.slug]}
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
