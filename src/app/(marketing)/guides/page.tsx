import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { loadQuery } from "@/sanity/fetch";
import { GUIDE_INDEX } from "@/sanity/queries";
import type { ResourceListItem } from "@/sanity/types";
import { ResourceCard, ResourcesEmptyState } from "@/components/resources/ResourceCard";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "Guides", path: "/guides" },
];

export const metadata: Metadata = pageMetadata("/guides");
export const revalidate = 3600;

export default async function GuidesPage() {
  const guides = await loadQuery<ResourceListItem[]>({
    query: GUIDE_INDEX,
    tags: ["guide"],
    fallback: [],
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={webPageSchema({ path: "/guides", name: "Guides" })}
      />

      <div className="aurora">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <Section className="relative z-[1] pt-6 sm:pt-8">
          <Container>
            <Breadcrumbs items={crumbs} />
            <div className="mt-8 max-w-3xl">
              <Pill dot>Guides</Pill>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Decide with confidence
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Evergreen, maintained guides on choosing a stack, planning a build, and getting a
                site or app to rank and convert - each one an opinionated call, not a summary of
                everyone else&apos;s.
              </p>
            </div>
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          {guides.length > 0 ? (
            <Reveal group className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {guides.map((guide) => (
                <ResourceCard key={guide.slug} item={guide} base="/guides" />
              ))}
            </Reveal>
          ) : (
            <ResourcesEmptyState
              line="We publish an in-depth guide for the questions we are asked about most - which stack to choose, how to plan a build, and how to get a site to rank and convert. Working on a project now? Talk to us and we'll walk you through it directly."
              cta={{ label: "Talk to us", href: "/contact" }}
            />
          )}
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
