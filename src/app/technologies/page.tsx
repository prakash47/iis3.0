import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { technologies } from "@/content/catalog";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
];

const CATEGORY_LABELS: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  cms: "CMS & Content",
  ecommerce: "E-commerce",
  mobile: "Mobile",
};

export const metadata: Metadata = pageMetadata("/technologies");

export default function TechnologiesPage() {
  const categories = Object.keys(CATEGORY_LABELS);

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Section>
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Technologies We Build With
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            We pick the right tool for the job - modern, proven, and maintainable.
          </p>

          <div className="mt-10 space-y-10">
            {categories.map((cat) => {
              const items = technologies.filter((t) => t.category === cat);
              if (!items.length) return null;
              return (
                <div key={cat}>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {CATEGORY_LABELS[cat]}
                  </h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((t) => (
                      <Link
                        key={t.slug}
                        href={`/technologies/${t.slug}`}
                        className="card group p-5"
                      >
                        <h3 className="font-display font-semibold text-foreground group-hover:text-brand-500">
                          {t.name}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">{t.tagline}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
