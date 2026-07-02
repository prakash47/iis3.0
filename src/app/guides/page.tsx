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
  { name: "Guides", path: "/guides" },
];

// noindex until real guides are published (thin page should not be indexed).
export const metadata: Metadata = pageMetadata("/guides");

export default function GuidesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Section>
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Guides
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Step-by-step guides on choosing a tech stack, planning a build, and getting a site
            or app to rank and convert. We are publishing these now.
          </p>
          <div className="mt-10">
            <Button href="/contact">Talk to us in the meantime</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
