import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { webDesignDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { FurtherReading } from "@/components/sections/FurtherReading";
import { WordpressHero } from "@/components/sections/wordpress/WordpressHero";
import { WordpressScope } from "@/components/sections/wordpress/WordpressScope";
import { WordpressWhy } from "@/components/sections/wordpress/WordpressWhy";
import { WordpressCapabilities } from "@/components/sections/wordpress/WordpressCapabilities";
import { WordpressProof } from "@/components/sections/wordpress/WordpressProof";
import { WordpressProcess } from "@/components/sections/wordpress/WordpressProcess";
import { WordpressCompare } from "@/components/sections/wordpress/WordpressCompare";
import { WordpressPricing } from "@/components/sections/wordpress/WordpressPricing";
import { WordpressFaq } from "@/components/sections/wordpress/WordpressFaq";

const SLUG = "wordpress";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "WordPress", path: PATH },
];

export default function WordpressPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "WordPress Development",
          description:
            "WordPress development services - fast, secure content sites, custom block themes, Full Site Editing and headless WordPress with a Next.js front end, for startups, SMBs and enterprises, at transparent published fixed prices. You own the site, content and hosting, no lock-in.",
          path: PATH,
          serviceType: "WordPress development",
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
          name: "WordPress Development Services",
        })}
      />

      <WordpressHero crumbs={crumbs} />
      <WordpressScope />
      <WordpressWhy />
      <WordpressCapabilities />
      <WordpressProof />
      <WordpressProcess />
      <WordpressCompare />
      <WordpressPricing />
      <WordpressFaq />

      <FurtherReading
        links={[
          { href: "/guides/nextjs-vs-wordpress-for-seo", label: "Guide: Next.js vs WordPress for SEO" },
          { href: "/guides/how-to-choose-a-headless-cms", label: "Guide: how to choose a headless CMS" },
        ]}
      />

      <CtaBand
        title="Ready to build with WordPress?"
        subtitle="Get a fixed-price quote for a WordPress site, custom block theme or headless build - you own the site, content and hosting - plus a straight answer on whether WordPress, a custom Next.js build or WooCommerce is the right call. No quote wall."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See web design & development", href: "/services/web-design-development" }}
      />
    </>
  );
}
