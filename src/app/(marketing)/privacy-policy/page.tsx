import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";

/* NOTE: This is a plain-language baseline policy. Have it reviewed by a lawyer
   for your jurisdiction before relying on it. */

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

export const metadata: Metadata = pageMetadata("/privacy-policy");

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-display text-xl font-semibold text-foreground">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-muted-foreground">{children}</p>;
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Section>
        <Container className="max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: July 2026</p>

          <P>
            This policy explains what information {siteConfig.name} collects when you use this
            website or contact us, how we use it, and the choices you have. {siteConfig.name} is a
            web and app development studio based in {siteConfig.contact.address.addressRegion},
            India.
          </P>

          <H2>Information we collect</H2>
          <P>
            When you submit our contact form we collect the details you provide, such as your
            name, email address, company, budget range and project details. When you browse the
            site we collect standard analytics data, including pages viewed, device and browser
            type, and approximate location, through Google Analytics.
          </P>

          <H2>How we use your information</H2>
          <P>
            We use your details to reply to your enquiry, prepare a quote or proposal, and keep a
            record of our conversation. We use analytics data to understand how the site is used
            and to improve it. We do not use your details for automated decision-making.
          </P>

          <H2>Cookies and analytics</H2>
          <P>
            We use essential cookies needed for the site to work, and Google Analytics cookies to
            measure traffic. You can block or delete cookies in your browser settings; the site
            will still work without them.
          </P>

          <H2>Sharing your information</H2>
          <P>
            We do not sell your data. We share it only with service providers that help us run
            the business, such as our hosting, email and analytics providers, and only as needed
            to deliver those services.
          </P>

          <H2>Data retention</H2>
          <P>
            We keep enquiry details for as long as we need them to respond to you and for our
            records. You can ask us to delete your data at any time.
          </P>

          <H2>Your rights</H2>
          <P>
            You can ask us to access, correct or delete the personal information we hold about
            you. To make a request, email us at{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-700 hover:text-brand-500 dark:text-brand-400">
              {siteConfig.contact.email}
            </a>
            .
          </P>

          <H2>Contact</H2>
          <P>
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-700 hover:text-brand-500 dark:text-brand-400">
              {siteConfig.contact.email}
            </a>
            .
          </P>
        </Container>
      </Section>
    </>
  );
}
