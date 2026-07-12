import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { webDesignDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { StrapiHero } from "@/components/sections/strapi/StrapiHero";
import { StrapiScope } from "@/components/sections/strapi/StrapiScope";
import { StrapiWhy } from "@/components/sections/strapi/StrapiWhy";
import { StrapiCapabilities } from "@/components/sections/strapi/StrapiCapabilities";
import { StrapiProof } from "@/components/sections/strapi/StrapiProof";
import { StrapiProcess } from "@/components/sections/strapi/StrapiProcess";
import { StrapiCompare } from "@/components/sections/strapi/StrapiCompare";
import { StrapiPricing } from "@/components/sections/strapi/StrapiPricing";
import { StrapiFaq } from "@/components/sections/strapi/StrapiFaq";

const SLUG = "strapi";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "Strapi", path: PATH },
];

export default function StrapiPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {/* Service name "Strapi Development" is DISTINCT from the sibling Service nodes and from the
          WebPage name. The description is offer-framed and lane-precise (open-source/self-hosted,
          content model, REST + GraphQL, custom Node, a Next.js/Astro front end) - no own-site Strapi
          claim. Ownership close is the self-hosted OWN-THE-SOFTWARE flip (code + data + database), NOT
          a flat "no lock-in". Offers are the same five web tiers, byte-identical (300/1500/4000/7000/12000). */}
      <JsonLd
        data={serviceSchema({
          name: "Strapi Development",
          description:
            "Strapi development services - the open-source, self-hosted headless CMS: content modelling, a REST and GraphQL API, custom Node, and a Next.js or Astro front end that reads it, for startups, SMBs and enterprises, at transparent published fixed prices. You own the code, the data and the database.",
          path: PATH,
          serviceType: "Strapi development",
          offers: webDesignDevTiers.map((t) => ({
            name: t.name,
            priceValue: t.fromValue,
            priceCurrency,
            description: t.for,
          })),
        })}
      />
      <JsonLd
        data={webPageSchema({
          path: PATH,
          name: "Strapi Development Services",
          dateModified: new Date().toISOString(),
        })}
      />

      <StrapiHero crumbs={crumbs} />
      <StrapiScope />
      <StrapiWhy />
      <StrapiCapabilities />
      <StrapiProof />
      <StrapiProcess />
      <StrapiCompare />
      <StrapiPricing />
      <StrapiFaq />

      <CtaBand
        title="Ready to own your headless CMS?"
        subtitle="Get a fixed-price quote for a Strapi build - open-source, self-hosted, with the content model, the API and a fast Next.js or Astro front end, and code and data you own outright. And if renting a managed CMS fits your team better, we will tell you that first."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See web design & development", href: "/services/web-design-development" }}
      />
    </>
  );
}
