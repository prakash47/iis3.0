import type {
  Organization,
  WebSite,
  WebPage,
  ContactPage,
  Service,
  FAQPage,
  BreadcrumbList,
  ItemList,
  Article,
  DefinedTermSet,
  CollectionPage,
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
    description: siteConfig.entityDescription,
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

/**
 * A published "starting-at" price for a service tier. Rendered as an Offer with
 * a minPrice PriceSpecification (honest "from" semantics). Every value passed
 * here MUST also be visible on the page, or the markup is ignored/penalized.
 */
export interface ServiceOffer {
  name: string;
  /** Numeric price floor, e.g. 1500. */
  priceValue: number;
  priceCurrency: string;
  description?: string;
}

/** Per-service page schema. Provider is referenced by @id into the site graph. */
export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  offers?: ServiceOffer[];
}): WithContext<Service> {
  const schema: WithContext<Service> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    serviceType: input.serviceType ?? input.name,
    provider: { "@id": ORG_ID },
    areaServed: [...siteConfig.areaServed],
  };

  if (input.offers?.length) {
    schema.offers = input.offers.map((o) => ({
      "@type": "Offer",
      name: o.name,
      ...(o.description ? { description: o.description } : {}),
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: o.priceCurrency,
        minPrice: o.priceValue,
      },
    }));
  }

  return schema;
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

/** An ordered list of items (e.g. the services on the /services hub) for AEO/collection pages. */
export function itemListSchema(
  items: { name: string; path: string }[],
): WithContext<ItemList> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: absoluteUrl(it.path),
    })),
  };
}

/**
 * Per-page WebPage node. `dateModified` is OPTIONAL and emitted only when a REAL
 * content date exists (e.g. a Sanity doc's _updatedAt) - never a build-time
 * `new Date()`, which stamps every deploy as "modified today" and trains engines
 * to discount the honest dates.
 */
export function webPageSchema(input: {
  path: string;
  name: string;
  dateModified?: string;
}): WithContext<WebPage> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(input.path)}#webpage`,
    url: absoluteUrl(input.path),
    name: input.name,
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
  };
}

/**
 * Contact page node - a ContactPage (a WebPage subtype whose sole purpose is "a page
 * providing contact information"), referenced into the sitewide Organization by @id via
 * `about`. Same shape as webPageSchema, only the @type differs, so /contact is an
 * entity-consistent contact node. Do NOT emit a contactPoint/PostalAddress here - the
 * sitewide organizationSchema already carries them; this node only references the Org.
 */
export function contactPageSchema(input: {
  path: string;
  name: string;
  dateModified?: string;
}): WithContext<ContactPage> {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${absoluteUrl(input.path)}#webpage`,
    url: absoluteUrl(input.path),
    name: input.name,
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
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

/**
 * Resource doc schema (blog post -> BlogPosting; guide -> Article). Author +
 * publisher are the Organization (@id) - there are no Person bios yet, so we never
 * emit a fabricated named author. dates come from the real Sanity publishedAt /
 * _updatedAt. Do NOT also emit a WebPage node for the same URL - this Article IS
 * the page's primary node (it carries the dates).
 */
export function articleSchema(input: {
  type?: "BlogPosting" | "Article";
  path: string;
  headline: string;
  description?: string;
  datePublished?: string;
  dateModified?: string;
  imageUrl?: string;
}): WithContext<Article> {
  return {
    "@context": "https://schema.org",
    "@type": (input.type ?? "BlogPosting") as "Article",
    headline: input.headline,
    ...(input.description ? { description: input.description } : {}),
    url: absoluteUrl(input.path),
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(input.path) },
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    ...(input.imageUrl ? { image: input.imageUrl } : {}),
  };
}

/**
 * The glossary A-Z page as a single DefinedTermSet with a DefinedTerm per entry.
 * The @id is stable (`#definedtermset`) so it never breaks if the glossary later
 * moves to per-term pages. Each term's description = its visible lead definition.
 */
export function definedTermSetSchema(input: {
  path: string;
  name: string;
  description?: string;
  terms: { name: string; description: string; slug: string }[];
}): WithContext<DefinedTermSet> {
  const setId = `${absoluteUrl(input.path)}#definedtermset`;
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": setId,
    url: absoluteUrl(input.path),
    name: input.name,
    ...(input.description ? { description: input.description } : {}),
    hasDefinedTerm: input.terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.name,
      description: t.description,
      url: `${absoluteUrl(input.path)}#${t.slug}`,
      inDefinedTermSet: { "@id": setId },
    })),
  };
}

/** The /resources hub as a CollectionPage + ItemList of its child surfaces. */
export function collectionPageSchema(input: {
  path: string;
  name: string;
  description?: string;
  dateModified?: string;
  items: { name: string; path: string }[];
}): WithContext<CollectionPage> {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl(input.path)}#webpage`,
    url: absoluteUrl(input.path),
    name: input.name,
    ...(input.description ? { description: input.description } : {}),
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: input.items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        url: absoluteUrl(it.path),
      })),
    },
  };
}
