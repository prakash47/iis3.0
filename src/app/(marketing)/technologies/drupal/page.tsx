import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { webDesignDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { DrupalHero } from "@/components/sections/drupal/DrupalHero";
import { DrupalScope } from "@/components/sections/drupal/DrupalScope";
import { DrupalWhy } from "@/components/sections/drupal/DrupalWhy";
import { DrupalCapabilities } from "@/components/sections/drupal/DrupalCapabilities";
import { DrupalProof } from "@/components/sections/drupal/DrupalProof";
import { DrupalProcess } from "@/components/sections/drupal/DrupalProcess";
import { DrupalCompare } from "@/components/sections/drupal/DrupalCompare";
import { DrupalMigration } from "@/components/sections/drupal/DrupalMigration";
import { DrupalPricing } from "@/components/sections/drupal/DrupalPricing";
import { DrupalFaq } from "@/components/sections/drupal/DrupalFaq";

const SLUG = "drupal";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "Drupal", path: PATH },
];

export default function DrupalPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {/* Service name "Drupal Development" is DISTINCT from every sibling Service node and from the
          WebPage name. Description is offer-framed and lane-precise (structured content native to core,
          a traditional or decoupled Drupal 11 build) - no own-site Drupal claim, self-hosted ownership
          stated the honest way (code/site/data, never the host). Offers = the same five web tiers,
          byte-identical (300/1500/4000/7000/12000). */}
      <JsonLd
        data={serviceSchema({
          name: "Drupal Development",
          description:
            "Drupal development services - complex, structured content with taxonomy, editorial workflow, roles and multilingual native to Drupal 11 core, as a traditional or decoupled build, for startups, SMBs and enterprises, at transparent published fixed prices. Open-source and self-hosted: you own the code, the site and the data.",
          path: PATH,
          serviceType: "Drupal development",
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
          name: "Drupal Development Services",
          dateModified: new Date().toISOString(),
        })}
      />

      <DrupalHero crumbs={crumbs} />
      <DrupalScope />
      <DrupalWhy />
      <DrupalCapabilities />
      <DrupalProof />
      <DrupalProcess />
      <DrupalCompare />
      <DrupalMigration />
      <DrupalPricing />
      <DrupalFaq />

      <CtaBand
        title="Ready to build on Drupal - or find out it's more than you need?"
        subtitle="Get a fixed-price quote for a Drupal build - structured content, editorial governance, and a traditional or decoupled front end, on a platform no single vendor owns. And if your content is really a handful of simple pages, we'll tell you a lighter CMS fits you better first."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See web design & development", href: "/services/web-design-development" }}
      />
    </>
  );
}
