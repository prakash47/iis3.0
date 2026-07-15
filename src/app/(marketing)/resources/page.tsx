import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { loadQuery } from "@/sanity/fetch";
import { RESOURCES_LATEST } from "@/sanity/queries";
import type { ResourceListItem } from "@/sanity/types";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { IconArrow, IconFileText, IconSearch, IconPen } from "@/components/icons";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
];

export const metadata: Metadata = pageMetadata("/resources");
export const revalidate = 3600;

const surfaces = [
  {
    icon: <IconFileText className="h-6 w-6" />,
    title: "Guides",
    href: "/guides",
    cta: "Read the guides",
    desc: "Evergreen, maintained walk-throughs on choosing a stack, planning a build, and getting a site or app to rank and convert.",
  },
  {
    icon: <IconSearch className="h-6 w-6" />,
    title: "Glossary",
    href: "/glossary",
    cta: "Browse the glossary",
    desc: "Plain-English definitions of the terms you hear on a project - headless CMS, Core Web Vitals, hydration, structured data and more.",
  },
  {
    icon: <IconPen className="h-6 w-6" />,
    title: "Blog",
    href: "/blog",
    cta: "Read the blog",
    desc: "First-person notes, teardowns and analysis on modern web work, technical SEO and AI search, from the senior team that does the work.",
  },
];

export default async function ResourcesPage() {
  const latest = await loadQuery<ResourceListItem[]>({
    query: RESOURCES_LATEST,
    tags: ["post", "guide"],
    fallback: [],
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={collectionPageSchema({
          path: "/resources",
          name: "Resources",
          description:
            "Guides, definitions and articles on web development, performance and AI search from Intention InfoService.",
          items: [
            { name: "Guides", path: "/guides" },
            { name: "Glossary", path: "/glossary" },
            { name: "Blog", path: "/blog" },
          ],
        })}
      />

      <div className="aurora">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <Section className="relative z-[1] pt-6 sm:pt-8">
          <Container>
            <Breadcrumbs items={crumbs} />
            <div className="mt-8 max-w-3xl">
              <Pill dot>Resources</Pill>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Guides, definitions and <span className="gradient-text">first-hand notes.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Practical, no-filler writing on web development, performance and AI search - written
                by the senior team that does the work, not spun from a content farm. Three places to
                learn: define a term, decide with a guide, or read what we think.
              </p>
            </div>
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <Reveal group className="grid gap-5 lg:grid-cols-3">
            {surfaces.map((s) => (
              <Link key={s.href} href={s.href} className="card group flex flex-col p-7 glow-border">
                <div className="relative z-[1] flex flex-1 flex-col">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface-2 text-brand-500 transition-colors duration-300 group-hover:border-brand-400/50 group-hover:text-brand-600">
                    {s.icon}
                  </span>
                  <h2 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {s.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500">
                    {s.cta}
                    <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </Reveal>
        </Container>
      </Section>

      {latest.length > 0 && (
        <Section className="bg-muted/50">
          <Container>
            <Reveal>
              <SectionHeading eyebrow="Latest" title="Fresh from the team" />
            </Reveal>
            <Reveal group className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latest.map((item) => (
                <ResourceCard
                  key={`${item._type}-${item.slug}`}
                  item={item}
                  base={item._type === "guide" ? "/guides" : "/blog"}
                />
              ))}
            </Reveal>
          </Container>
        </Section>
      )}

      <CtaBand
        title="Have a question this doesn't answer?"
        subtitle="Tell us about your project and we'll point you to the right approach - and an honest fixed price."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "See our services", href: "/services" }}
      />
    </>
  );
}
