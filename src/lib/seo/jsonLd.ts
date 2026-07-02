import type {
  Organization,
  WebSite,
  Service,
  FAQPage,
  BreadcrumbList,
  WithContext,
} from "schema-dts";
import { siteConfig, absoluteUrl, sameAs } from "@/config/site";
import { technologies } from "@/content/catalog";

const ORG_ID = `${siteConfig.url}/#organization`;
const SITE_ID = `${siteConfig.url}/#website`;

/** Site-wide Organization - the entity anchor for AEO/GEO + rich results. */
export function organizationSchema(): WithContext<Organization> {
  const { contact } = siteConfig;
  const hasAddress = Boolean(contact.address.addressLocality);

  const org: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl("/intention-infoservice-logo.png"),
    foundingDate: String(siteConfig.foundingYear),
    description: siteConfig.description,
    knowsAbout: technologies.map((t) => t.name),
    areaServed: [...siteConfig.areaServed],
  };

  const links = sameAs();
  if (links.length) org.sameAs = links;

  if (hasAddress) {
    org.address = {
      "@type": "PostalAddress",
      streetAddress: contact.address.streetAddress || undefined,
      addressLocality: contact.address.addressLocality,
      addressRegion: contact.address.addressRegion || undefined,
      postalCode: contact.address.postalCode || undefined,
      addressCountry: contact.address.addressCountry,
    };
  }

  if (contact.phone || contact.email) {
    org.contactPoint = {
      "@type": "ContactPoint",
      contactType: "sales",
      email: contact.email || undefined,
      telephone: contact.phone || undefined,
      areaServed: [...siteConfig.areaServed],
      availableLanguage: ["English", "Hindi"],
    };
  }

  return org;
}

/** Site-wide WebSite entity. */
export function websiteSchema(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { "@id": ORG_ID },
  };
}

/** Per-service page schema. */
export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    serviceType: input.name,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    areaServed: [...siteConfig.areaServed],
  };
}

/** Breadcrumbs - pass ordered [{name, path}] from home downward. */
export function breadcrumbSchema(
  items: { name: string; path: string }[],
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** FAQ schema - only ship this when the same Q&A is visible on the page. */
export function faqSchema(
  faqs: { question: string; answer: string }[],
): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
