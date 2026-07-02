import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export const metadata: Metadata = pageMetadata("/about");

const values = [
  {
    title: "Craft over corners",
    body: "We build the way we'd want our own product built - accessible, fast and maintainable.",
  },
  {
    title: "Honesty as a strategy",
    body: "Real prices, real timelines, real metrics. No inflated claims, no fabricated numbers.",
  },
  {
    title: "Founder in every project",
    body: "You work with the people building your product - not an account-manager relay.",
  },
  {
    title: "Measurable outcomes",
    body: "Every build is accountable to numbers: performance, conversions, and growth.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Section>
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            A founder-led studio, since 2016.
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Intention InfoService is a web and app development studio, incorporated in 2016.
              We exist for a specific kind of client: startups and SMBs who want the design and
              engineering quality of a top agency, without the agency price tag or the agency pace.
            </p>
            <p>
              We&apos;re deliberately lean and founder-led. That means you talk to the people
              actually building your product, decisions happen quickly, and quality never gets
              lost in layers of hand-offs. We pair that with a modern, AI-augmented workflow - so
              we ship in weeks, not months, without cutting corners.
            </p>
            <p>
              {/* TODO: add the real founder story + named team bios with photos and
                  LinkedIn/GitHub links (Person schema) - the biggest trust lever for a
                  lean studio. */}
              We build on today&apos;s stack - Next.js, React and headless CMS - and optimize for
              how people search now, across both classic search and AI answer engines.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted">
        <Container>
          <h2 className="font-display text-3xl font-bold text-foreground">What we value</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="card p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand title="Want to meet the team?" primary={{ label: "Book a call", href: "/contact" }} />
    </>
  );
}
