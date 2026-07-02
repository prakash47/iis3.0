import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { industries } from "@/content/catalog";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
];

export const metadata: Metadata = pageMetadata("/industries");

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Section>
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Industries We Serve
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Deep, focused expertise in the verticals where modern engineering and design
            move the needle.
          </p>
          <Reveal group className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="card group p-6"
              >
                <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-brand-500">
                  {industry.name}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{industry.tagline}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-500">
                  Explore →
                </span>
              </Link>
            ))}
          </Reveal>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
