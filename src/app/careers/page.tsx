import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";
import { IconCheck } from "@/components/icons";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Careers", path: "/careers" },
];

export const metadata: Metadata = pageMetadata("/careers");

const values = [
  "You own your work end to end, from first commit to production",
  "We ship modern stacks: Next.js, React, React Native, Node.js",
  "Small team, direct communication, no layers of process",
  "Remote-friendly, with overlap across India and Western hours",
];

export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Section>
        <Container className="max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Careers at {siteConfig.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We are a founder-led studio that builds websites and apps for startups and SMBs. We
            hire developers and designers who care about craft, speed and clear communication.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-foreground">How we work</h2>
          <ul className="mt-6 space-y-3">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-3 text-muted-foreground">
                <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                <span>{v}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-2xl font-bold text-foreground">Open roles</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We do not have a formal opening listed right now, but we always want to meet strong
            engineers and designers. Send your portfolio or GitHub and a short note about the work
            you want to do to{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-600 hover:text-brand-500 dark:text-brand-400">
              {siteConfig.contact.email}
            </a>
            .
          </p>
          <div className="mt-8">
            <Button href={`mailto:${siteConfig.contact.email}`}>Send your application</Button>
          </div>
        </Container>
      </Section>
      <CtaBand
        title="Prefer to build with us as a client?"
        subtitle="If you run a startup or SMB and need a site or app, that is what we do best."
        primary={{ label: "Start a project", href: "/contact" }}
      />
    </>
  );
}
