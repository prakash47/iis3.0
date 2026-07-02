import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export const metadata: Metadata = pageMetadata("/blog");

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Section>
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Web development and digital growth blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Guides and practical advice on building fast websites, shipping apps and growing
            organic traffic. Written for founders and marketing teams at startups and SMBs.
          </p>

          <div className="mt-12 rounded-3xl border border-dashed border-border bg-surface p-8 sm:p-10">
            <h2 className="font-display text-xl font-semibold text-foreground">
              First articles are publishing soon
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              We are writing our first set of articles on Next.js, Core Web Vitals and technical
              SEO. Have a specific question about your project? Send it to us and we will point
              you to the right approach.
            </p>
            <div className="mt-6">
              <Button href="/contact">Ask us a question</Button>
            </div>
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
