import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Glossary", path: "/glossary" },
];

// noindex until real terms are added (thin page should not be indexed).
export const metadata: Metadata = pageMetadata("/glossary");

export default function GlossaryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Section>
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Web development and digital marketing glossary
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Plain-English definitions of the terms you will hear on a project, from headless CMS
            and Core Web Vitals to hydration and structured data. We are adding these now.
          </p>
          <div className="mt-10">
            <Button href="/contact">Ask about a term</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
