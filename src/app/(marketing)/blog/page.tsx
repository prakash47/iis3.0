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
import { POST_INDEX } from "@/sanity/queries";
import type { ResourceListItem } from "@/sanity/types";
import { ResourceCard, ResourcesEmptyState } from "@/components/resources/ResourceCard";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "Blog", path: "/blog" },
];

export const metadata: Metadata = pageMetadata("/blog");
export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await loadQuery<ResourceListItem[]>({
    query: POST_INDEX,
    tags: ["post"],
    fallback: [],
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={webPageSchema({ path: "/blog", name: "Blog", dateModified: new Date().toISOString() })}
      />

      <div className="aurora">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <Section className="relative z-[1] pt-6 sm:pt-8">
          <Container>
            <Breadcrumbs items={crumbs} />
            <div className="mt-8 max-w-3xl">
              <Pill dot>Blog</Pill>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Notes from the team that does the work
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                First-hand takes on web performance, modern stacks, technical SEO and AI search -
                written by the senior team, not spun from a content farm.
              </p>
            </div>
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          {posts.length > 0 ? (
            <Reveal group className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <ResourceCard key={post.slug} item={post} base="/blog" />
              ))}
            </Reveal>
          ) : (
            <ResourcesEmptyState
              line="We publish on the topics we work in every day - web performance, modern stacks, technical SEO and AI search. Have a specific question about your own project? Ask us directly and we'll point you to the right approach."
              cta={{ label: "Ask us a question", href: "/contact" }}
            />
          )}
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
