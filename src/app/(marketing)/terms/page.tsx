import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";

/* NOTE: Baseline terms in plain language. Have a lawyer review before relying on it. */

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Terms of Service", path: "/terms" },
];

export const metadata: Metadata = pageMetadata("/terms");

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-display text-xl font-semibold text-foreground">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-muted-foreground">{children}</p>;
}

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Section>
        <Container className="max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: July 2026</p>

          <P>
            These terms apply when you use the {siteConfig.name} website. By using the site you
            agree to them. If you do not agree, please do not use the site.
          </P>

          <H2>Using this website</H2>
          <P>
            You may use this site to learn about our services and to contact us. You agree not to
            misuse it, attempt to disrupt it, or access it in a way that breaks the law.
          </P>

          <H2>Intellectual property</H2>
          <P>
            The content on this site, including text, design, logos and code, belongs to{" "}
            {siteConfig.legalName} unless stated otherwise. You may not copy or reuse it without
            our permission.
          </P>

          <H2>Services, quotes and proposals</H2>
          <P>
            Information on this site, including pricing, is for general guidance and may change.
            It is not a binding offer. Any project we take on is governed by a separate written
            agreement that sets out the scope, timeline and price.
          </P>

          <H2>No warranty</H2>
          <P>
            This website is provided as is. We work to keep it accurate and available, but we do
            not guarantee it will be error-free or uninterrupted.
          </P>

          <H2>Limitation of liability</H2>
          <P>
            To the extent allowed by law, {siteConfig.name} is not liable for any indirect or
            consequential loss arising from your use of this website.
          </P>

          <H2>External links</H2>
          <P>
            This site may link to third-party websites. We are not responsible for their content
            or their privacy practices.
          </P>

          <H2>Governing law</H2>
          <P>
            These terms are governed by the laws of India, and any dispute will be subject to the
            courts of {siteConfig.contact.address.addressRegion}.
          </P>

          <H2>Changes and contact</H2>
          <P>
            We may update these terms from time to time. For any questions, email{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-700 underline underline-offset-2 hover:text-brand-500 dark:text-brand-400">
              {siteConfig.contact.email}
            </a>
            .
          </P>
        </Container>
      </Section>
    </>
  );
}
