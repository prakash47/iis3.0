import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { templateTechnologies, getTechnology } from "@/content/catalog";

export const dynamicParams = false;

/**
 * The SHARED, DELIBERATELY MINIMAL template for technologies that do NOT have a bespoke page
 * (`deep: false` in the catalog, the single source of truth). AS OF 2026-07-12 THIS RENDERS
 * NOTHING: all 21 technologies are bespoke, so `templateTechnologies` is empty and
 * `generateStaticParams` returns []. With `dynamicParams = false` that means the route generates
 * zero pages and 404s any unknown slug - the exact, proven pattern the services and industries
 * `[slug]` routes already run on (both are 0-param stubs). The file is kept so that ADDING a new
 * deep:false technology to the catalog brings this template straight back to life, thin-and-honest.
 *
 * If a future thin technology does render here: it is noindex (see `techSeoOverrides`), it stays
 * crawlable and linked from the /technologies hub so the directive is discovered, and the noindex
 * comes off the day its bespoke page ships. TWO fabrications were removed here long ago and must
 * never return: a "We build production-grade {Tech} solutions..." installed-base claim (we have two
 * real projects, both web), and a "See our work" button promising a portfolio in that technology.
 * The Service JSON-LD is also intentionally absent (Service markup on a noindexed one-line page is
 * substance-free). Breadcrumb only. The 21 bespoke pages emit their own Service + Offers.
 */
export function generateStaticParams() {
  return templateTechnologies.map((t) => ({ slug: t.slug }));
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

      <Section className="pb-8">
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {tech.name} Development Services
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {tech.tagline} {tech.name} is one of the technologies in our toolkit, and we&apos;ll
            tell you honestly in discovery whether it is the right choice for what you&apos;re
            building - or whether something else is.
          </p>
          {/* SELECTION-FRAMED, never backlog-framed. "Coming soon" / "write-up in progress" /
              "not written yet" all assert an unfinished state and hand a competitor a caption.
              Saying we publish guides for the stacks we're asked about most is equally true and
              reads as editorial choice. */}
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            We publish an in-depth guide for the stacks we&apos;re asked about most, and every one
            of them says plainly when we&apos;d tell you not to use it. This isn&apos;t one of
            those, so if {tech.name} is what you&apos;re weighing, ask us directly and
            you&apos;ll get the same straight answer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Talk to us about {tech.name}</Button>
            <Button href="/technologies" variant="outline">
              See our in-depth guides
            </Button>
          </div>
        </Container>
      </Section>

      <CtaBand title={`Build with ${tech.name}?`} />
    </>
  );
}
