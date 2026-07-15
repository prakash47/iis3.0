import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { webDesignDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { FurtherReading } from "@/components/sections/FurtherReading";
import { NextjsHero } from "@/components/sections/nextjs/NextjsHero";
import { NextjsWhy } from "@/components/sections/nextjs/NextjsWhy";
import { NextjsScope } from "@/components/sections/nextjs/NextjsScope";
import { NextjsCapabilities } from "@/components/sections/nextjs/NextjsCapabilities";
import { NextjsProof } from "@/components/sections/nextjs/NextjsProof";
import { NextjsProcess } from "@/components/sections/nextjs/NextjsProcess";
import { NextjsPricing } from "@/components/sections/nextjs/NextjsPricing";
import { NextjsCompare } from "@/components/sections/nextjs/NextjsCompare";
import { NextjsFaq } from "@/components/sections/nextjs/NextjsFaq";

const SLUG = "nextjs";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "Next.js", path: PATH },
];

export default function NextjsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "Next.js Development",
          description:
            "Next.js development services - custom Next.js websites, web apps, ecommerce and SaaS, built App-Router-first on Next.js 16 with React Server Components, hybrid rendering and strong Core Web Vitals - for startups, SMBs and enterprises, at transparent published fixed prices. You own the code.",
          path: PATH,
          serviceType: "Next.js development",
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
          name: "Next.js Development Services",
        })}
      />

      <NextjsHero crumbs={crumbs} />
      <NextjsWhy />
      <NextjsScope />
      <NextjsCapabilities />
      <NextjsProof />
      <NextjsProcess />
      <NextjsPricing />
      <NextjsCompare />
      <NextjsFaq />

      <FurtherReading
        links={[
          { href: "/guides/nextjs-vs-wordpress-for-seo", label: "Guide: Next.js vs WordPress for SEO" },
          { href: "/guides/core-web-vitals-playbook", label: "Guide: the Core Web Vitals playbook for business websites" },
        ]}
      />

      <CtaBand
        title="Ready to build with Next.js?"
        subtitle="Get a fixed-price quote for a Next.js site or app - or start by running PageSpeed on this very page. You own the code, and there's no quote wall."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See web development", href: "/services/web-design-development" }}
      />
    </>
  );
}
