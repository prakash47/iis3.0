import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { webDesignDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { SanityHero } from "@/components/sections/sanity/SanityHero";
import { SanityScope } from "@/components/sections/sanity/SanityScope";
import { SanityWhy } from "@/components/sections/sanity/SanityWhy";
import { SanityCapabilities } from "@/components/sections/sanity/SanityCapabilities";
import { SanityProof } from "@/components/sections/sanity/SanityProof";
import { SanityProcess } from "@/components/sections/sanity/SanityProcess";
import { SanityCompare } from "@/components/sections/sanity/SanityCompare";
import { SanityPricing } from "@/components/sections/sanity/SanityPricing";
import { SanityFaq } from "@/components/sections/sanity/SanityFaq";

const SLUG = "sanity";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "Sanity", path: PATH },
];

export default function SanityPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {/* Service name "Sanity Development" is DISTINCT from the sibling Service nodes and from the
          WebPage name. The description is offer-framed and lane-precise (structured content, custom
          Studio, GROQ, a Next.js/Astro front end) - no own-site Sanity claim, no "own the platform"
          overclaim. Offers are the same five web tiers, byte-identical (300/1500/4000/7000/12000). */}
      <JsonLd
        data={serviceSchema({
          name: "Sanity Development",
          description:
            "Sanity development services - structured content modelled as typed schemas, a custom Sanity Studio, GROQ, and a Next.js or Astro front end that reads it, for startups, SMBs and enterprises, at transparent published fixed prices. You own your content, schema and Studio.",
          path: PATH,
          serviceType: "Sanity development",
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
          name: "Sanity Development Services",
        })}
      />

      <SanityHero crumbs={crumbs} />
      <SanityScope />
      <SanityWhy />
      <SanityCapabilities />
      <SanityProof />
      <SanityProcess />
      <SanityCompare />
      <SanityPricing />
      <SanityFaq />

      <CtaBand
        title="Ready to model your content on Sanity?"
        subtitle="Get a fixed-price quote for a Sanity build - structured content, a custom Studio, and a fast Next.js or Astro front end that reads it, with content and schema you own outright. And if a traditional CMS fits you better, we will tell you that first."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See web design & development", href: "/services/web-design-development" }}
      />
    </>
  );
}
