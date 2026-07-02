import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/sections/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export const metadata: Metadata = pageMetadata("/contact");

export default function ContactPage() {
  const { contact } = siteConfig;
  const whatsappHref = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`
    : null;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Section>
        <Container>
          <Breadcrumbs items={crumbs} />
          <div className="mt-6 grid gap-12 lg:grid-cols-2">
            <div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Start a project
              </h1>
              <p className="mt-4 max-w-md text-lg text-muted-foreground">
                Tell us what you&apos;re building. You&apos;ll talk to the founder - not a sales
                rep - and get a clear, fixed-price scope.
              </p>

              <dl className="mt-8 space-y-4 text-sm">
                {contact.email && (
                  <div>
                    <dt className="font-semibold text-foreground">Email</dt>
                    <dd>
                      <a href={`mailto:${contact.email}`} className="text-brand-600 hover:text-brand-700">
                        {contact.email}
                      </a>
                    </dd>
                  </div>
                )}
                {contact.phone && (
                  <div>
                    <dt className="font-semibold text-foreground">Phone</dt>
                    <dd>
                      <a href={`tel:${contact.phone}`} className="text-brand-600 hover:text-brand-700">
                        {contact.phone}
                      </a>
                    </dd>
                  </div>
                )}
                {whatsappHref && (
                  <div>
                    <dt className="font-semibold text-foreground">WhatsApp</dt>
                    <dd>
                      <a href={whatsappHref} className="text-brand-600 hover:text-brand-700">
                        Chat on WhatsApp
                      </a>
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="font-semibold text-foreground">Hours</dt>
                  <dd className="text-muted-foreground">
                    We overlap with US, UK, UAE, EU &amp; India working hours.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="glow-border relative rounded-3xl border border-border bg-surface p-6 sm:p-8">
              <div className="relative z-[1]">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
