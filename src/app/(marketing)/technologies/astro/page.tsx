import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { webDesignDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { AstroHero } from "@/components/sections/astro/AstroHero";
import { AstroScope } from "@/components/sections/astro/AstroScope";
import { AstroWhy } from "@/components/sections/astro/AstroWhy";
import { AstroCapabilities } from "@/components/sections/astro/AstroCapabilities";
import { AstroProof } from "@/components/sections/astro/AstroProof";
import { AstroProcess } from "@/components/sections/astro/AstroProcess";
import { AstroCompare } from "@/components/sections/astro/AstroCompare";
import { AstroPricing } from "@/components/sections/astro/AstroPricing";
import { AstroFaq } from "@/components/sections/astro/AstroFaq";

const SLUG = "astro";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "Astro", path: PATH },
];

export default function AstroPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {/* Service name "Astro Development" is DISTINCT from the sibling Service nodes. The description
          is offer-framed and content-site-precise (marketing/blog/docs/landing, static-first with
          islands) - no own-site Astro claim, no KB/CWV number. Offers are the same five web tiers,
          byte-identical (300/1500/4000/7000/12000). */}
      <JsonLd
        data={serviceSchema({
          name: "Astro Development",
          description:
            "Astro development services - fast, content-driven sites on Astro: marketing sites, blogs, documentation and landing pages, built static-first with islands of interactivity, for startups, SMBs and enterprises, at transparent published fixed prices. You own the code, no lock-in.",
          path: PATH,
          serviceType: "Astro development",
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
          name: "Astro Development Services",
          dateModified: new Date().toISOString(),
        })}
      />

      <AstroHero crumbs={crumbs} />
      <AstroScope />
      <AstroWhy />
      <AstroCapabilities />
      <AstroProof />
      <AstroProcess />
      <AstroCompare />
      <AstroPricing />
      <AstroFaq />

      <CtaBand
        title="Ready to build a fast content site?"
        subtitle="Get a fixed-price quote for a content, marketing or docs site on Astro - static-first, almost no JavaScript, and yours to own outright. And if it turns out your site needs to behave like an app, we will tell you that too."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See web design & development", href: "/services/web-design-development" }}
      />
    </>
  );
}
