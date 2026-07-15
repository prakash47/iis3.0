import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { servicePageSeo } from "@/config/seo";
import { services, getService, leadIndustries } from "@/content/catalog";
import { serviceDetails } from "@/content/service-details";

export const dynamicParams = false;

// Services that have their own bespoke money page under src/app/services/<slug>/
// are excluded here so two routes never resolve to the same path. The remaining
// services use this shared template until each gets its own dedicated build.
const DEDICATED_SERVICE_PAGES = [
  "web-design-development",
  "mobile-app-development",
  "custom-software-development",
  "digital-marketing",
  "performance-marketing",
  "ui-ux-design-services",
  "website-maintenance-services",
  "ai-development",
];

export function generateStaticParams() {
  return services
    .filter((s) => !DEDICATED_SERVICE_PAGES.includes(s.slug))
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const seo = servicePageSeo(slug);
  return seo ? metadataFrom(seo) : {};
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const detail = serviceDetails[slug];
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.tagline,
          path: `/services/${slug}`,
        })}
      />
      {detail?.faqs.length ? <JsonLd data={faqSchema(detail.faqs)} /> : null}

      <Section className="pb-8">
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {detail?.intro ?? service.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Get a fixed-price quote</Button>
          </div>
        </Container>
      </Section>

      {detail?.highlights.length ? (
        <Section className="bg-muted pt-10">
          <Container>
            <h2 className="font-display text-2xl font-bold text-foreground">
              What&apos;s included
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {detail.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4 text-sm text-foreground"
                >
                  <span aria-hidden="true" className="font-bold text-accent-600">
                    ✓
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <Section>
        <Container>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Popular for these industries
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {leadIndustries.map((i) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}`}
                className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-brand-300 hover:bg-muted"
              >
                {i.name}
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {detail?.faqs.length ? (
        <Section className="bg-muted">
          <Container>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Frequently asked questions
            </h2>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {detail.faqs.map((f) => (
                <details key={f.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                    {f.question}
                    <span
                      aria-hidden="true"
                      className="text-brand-600 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {f.answer}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <CtaBand title={`Ready to start your ${service.name.toLowerCase()} project?`} />
    </>
  );
}
