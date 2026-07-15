import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { webDesignDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { ContentfulHero } from "@/components/sections/contentful/ContentfulHero";
import { ContentfulScope } from "@/components/sections/contentful/ContentfulScope";
import { ContentfulWhy } from "@/components/sections/contentful/ContentfulWhy";
import { ContentfulCapabilities } from "@/components/sections/contentful/ContentfulCapabilities";
import { ContentfulProof } from "@/components/sections/contentful/ContentfulProof";
import { ContentfulProcess } from "@/components/sections/contentful/ContentfulProcess";
import { ContentfulCompare } from "@/components/sections/contentful/ContentfulCompare";
import { ContentfulAcquisition } from "@/components/sections/contentful/ContentfulAcquisition";
import { ContentfulPricing } from "@/components/sections/contentful/ContentfulPricing";
import { ContentfulFaq } from "@/components/sections/contentful/ContentfulFaq";

const SLUG = "contentful";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "Contentful", path: PATH },
];

export default function ContentfulPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {/* Service name "Contentful Development" is DISTINCT from every sibling Service node and from
          the WebPage name, so three Service nodes carrying the same five web-tier Offers don't
          collide. Description is offer-framed and lane-precise (enterprise headless CMS, content
          model, governance, a Next.js/Astro front end) - no own-site Contentful claim, no "own the
          platform" overclaim. Offers = the same five web tiers, byte-identical (300/1500/4000/7000/12000). */}
      <JsonLd
        data={serviceSchema({
          name: "Contentful Development",
          description:
            "Contentful development services - enterprise headless CMS implementation, integration and migration, with a Next.js or Astro front end that reads it, for startups, SMBs and enterprises, at transparent published fixed prices. You own your content and content model; the platform is Contentful's hosted service.",
          path: PATH,
          serviceType: "Contentful development",
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
          name: "Contentful Development Services",
        })}
      />

      <ContentfulHero crumbs={crumbs} />
      <ContentfulScope />
      <ContentfulWhy />
      <ContentfulCapabilities />
      <ContentfulProof />
      <ContentfulProcess />
      <ContentfulCompare />
      <ContentfulAcquisition />
      <ContentfulPricing />
      <ContentfulFaq />

      <CtaBand
        title="Ready to build on Contentful - or find out it's more than you need?"
        subtitle="Get a fixed-price quote for a Contentful build - the content model, the governance, and a fast Next.js or Astro front end that reads it, with content you own and can export. And if your content is really a single team's job, we'll tell you a leaner CMS fits you better first."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See web design & development", href: "/services/web-design-development" }}
      />
    </>
  );
}
