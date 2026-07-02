import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { technologies, getTechnology } from "@/content/catalog";

export const dynamicParams = false;

export function generateStaticParams() {
  return technologies.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const seo = technologyPageSeo(slug);
  return seo ? metadataFrom(seo) : {};
}

export default async function TechnologyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tech = getTechnology(slug);
  if (!tech) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Technologies", path: "/technologies" },
    { name: tech.name, path: `/technologies/${slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: `${tech.name} Development`,
          description: tech.tagline,
          path: `/technologies/${slug}`,
        })}
      />

      <Section className="pb-8">
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {tech.name} Development
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {tech.tagline} Our team builds production-grade {tech.name} solutions for startups
            and SMBs - performance-tuned, accessible and built to scale.
          </p>
          {/* TODO: add why-us, comparison table (e.g. vs alternatives) and a real
              build example before public launch. */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">
              {tech.hire ? `Hire ${tech.name} developers` : "Start a project"}
            </Button>
            <Button href="/work" variant="outline">
              See our work
            </Button>
          </div>
        </Container>
      </Section>

      <CtaBand title={`Build with ${tech.name}?`} />
    </>
  );
}
