import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { industryPageSeo } from "@/config/seo";
import { industries, getIndustry, services } from "@/content/catalog";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const seo = industryPageSeo(slug);
  return seo ? metadataFrom(seo) : {};
}

// Services most relevant to industry pages.
const RELEVANT_SERVICES = ["web-design-development", "mobile-app-development", "ai-solutions"];

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: industry.name, path: `/industries/${slug}` },
  ];
  const relevant = services.filter((s) => RELEVANT_SERVICES.includes(s.slug));

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: `${industry.name} Development`,
          description: industry.tagline,
          path: `/industries/${slug}`,
        })}
      />

      <Section className="pb-8">
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {industry.name} Development
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {industry.tagline} We build fast, secure and scalable {industry.name.toLowerCase()}{" "}
            solutions on a modern stack - designed around your users and your compliance needs.
          </p>
          {/* TODO: expand with industry-specific problems, compliance notes and a
              real project example before public launch (avoids thin content). */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Discuss your project</Button>
            <Button href="/work" variant="outline">
              See our work
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted pt-10">
        <Container>
          <h2 className="font-display text-2xl font-bold text-foreground">How we help</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {relevant.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card group p-6"
              >
                <h3 className="font-display text-base font-semibold text-foreground group-hover:text-brand-500">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand title={`Building for ${industry.name}?`} />
    </>
  );
}
