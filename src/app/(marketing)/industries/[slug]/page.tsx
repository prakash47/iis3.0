import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { industryPageSeo } from "@/config/seo";
import { templateIndustries, getIndustry, services } from "@/content/catalog";

export const dynamicParams = false;

/**
 * The SHARED, DELIBERATELY MINIMAL industry template. It renders only the verticals that do
 * NOT have a bespoke page - `deep: false` in the catalog, the single source of truth. Without
 * deriving params from `templateIndustries`, the bespoke /industries/edtech folder and this
 * dynamic route would both resolve /industries/edtech and the build would collide.
 *
 * THESE PAGES ARE noindex (see `industrySeoOverrides` in src/config/seo.ts). They are a
 * paragraph long. They stay crawlable and linked from the homepage grid so the directive is
 * discovered, and the noindex comes off, one vertical at a time, as each is written properly.
 *
 * THREE FABRICATIONS WERE REMOVED HERE - the same three the technologies template shed:
 *  1. "We build fast, secure and scalable {Industry} solutions on a modern stack - designed
 *     around your users and your compliance needs." This asserted (a) an installed base per
 *     vertical, which we do not have in any of the six, and (b) a COMPLIANCE CAPABILITY on
 *     healthcare, fintech and edtech while we hold zero certifications and zero audits. The
 *     custom-software page's "built to your compliance needs" only survives because it sits
 *     beside an anti-recommendation and an honest-proof section; auto-stamped on a stub it is
 *     indefensible. Noindex does NOT fix this - a human reaching the page from the homepage
 *     still reads it - so the copy fix is independent of, and prior to, the noindex.
 *  2. The "See our work" button promised a portfolio IN THAT VERTICAL. There is none for any
 *     of the six. Removed, not repointed.
 *  3. The Service JSON-LD, built from a one-line tagline, on a page we tell Google not to
 *     index: markup without matching substance. Breadcrumb only.
 */
export function generateStaticParams() {
  return templateIndustries.map((i) => ({ slug: i.slug }));
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
const RELEVANT_SERVICES = ["web-design-development", "mobile-app-development", "ai-development"];

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

      <Section className="pb-8">
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {industry.name} Development
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {industry.tagline} It&apos;s one of the sectors we build for, and in discovery
            we&apos;ll tell you honestly whether a custom build is the right call - or whether an
            established platform gets you there faster and cheaper.
          </p>
          {/* SELECTION-FRAMED, never backlog-framed. "Coming soon" / "write-up in progress"
              assert an unfinished site and hand a competitor a caption. */}
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            We publish an in-depth page for the sectors we&apos;re asked about most. This
            isn&apos;t one of those yet, so ask us directly and you&apos;ll get the same straight
            answer - including when we think you shouldn&apos;t build at all.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Discuss your project</Button>
            <Button href="/industries" variant="outline">
              See all industries
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
