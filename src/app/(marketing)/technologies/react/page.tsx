import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { webDesignDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { ReactHero } from "@/components/sections/react/ReactHero";
import { ReactProof } from "@/components/sections/react/ReactProof";
import { ReactScope } from "@/components/sections/react/ReactScope";
import { ReactWhy } from "@/components/sections/react/ReactWhy";
import { ReactCapabilities } from "@/components/sections/react/ReactCapabilities";
import { ReactProcess } from "@/components/sections/react/ReactProcess";
import { ReactCompare } from "@/components/sections/react/ReactCompare";
import { ReactPricing } from "@/components/sections/react/ReactPricing";
import { ReactFaq } from "@/components/sections/react/ReactFaq";

const SLUG = "react";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "React", path: PATH },
];

export default function ReactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "React Development",
          description:
            "React development services - custom React 19 interfaces, single-page apps, dashboards, design systems and front-ends for your existing backend - for startups, SMBs and enterprises, at transparent published fixed prices. You own the code, no lock-in.",
          path: PATH,
          serviceType: "React development",
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
          name: "React Development Services",
          dateModified: new Date().toISOString(),
        })}
      />

      <ReactHero crumbs={crumbs} />
      <ReactProof />
      <ReactScope />
      <ReactWhy />
      <ReactCapabilities />
      <ReactProcess />
      <ReactCompare />
      <ReactPricing />
      <ReactFaq />

      <CtaBand
        title="Ready to build with React?"
        subtitle="Get a fixed-price quote for a React app or interface - or just open DevTools and inspect the one you're using. You own the code, and there's no quote wall."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See web development", href: "/services/web-design-development" }}
      />
    </>
  );
}
