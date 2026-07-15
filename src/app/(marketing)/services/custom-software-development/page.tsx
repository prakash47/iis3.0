import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { servicePageSeo } from "@/config/seo";
import { getService } from "@/content/catalog";
import { customSoftwareTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { CustomHero } from "@/components/sections/custom-software/CustomHero";
import { CustomScope } from "@/components/sections/custom-software/CustomScope";
import { CustomProcess } from "@/components/sections/custom-software/CustomProcess";
import { CustomStack } from "@/components/sections/custom-software/CustomStack";
import { CustomProof } from "@/components/sections/custom-software/CustomProof";
import { CustomPricing } from "@/components/sections/custom-software/CustomPricing";
import { CustomWhyUs } from "@/components/sections/custom-software/CustomWhyUs";
import { CustomCompare } from "@/components/sections/custom-software/CustomCompare";
import { CustomFaq } from "@/components/sections/custom-software/CustomFaq";

const SLUG = "custom-software-development";
const PATH = `/services/${SLUG}`;

export const metadata: Metadata = metadataFrom(servicePageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Custom Software Development", path: PATH },
];

export default function CustomSoftwareDevelopmentPage() {
  const service = getService(SLUG)!;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description:
            "Bespoke custom software development - SaaS platforms, internal tools, dashboards, portals, APIs, integrations and workflow automation - for startups, SMBs and enterprises, scoped and priced up front. You own the code, IP and data.",
          path: PATH,
          serviceType: "Custom software development",
          offers: customSoftwareTiers.map((t) => ({
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
          name: "Custom Software Development",
        })}
      />

      <CustomHero crumbs={crumbs} />
      <CustomScope />
      <CustomProcess />
      <CustomStack />
      <CustomProof />
      <CustomPricing />
      <CustomWhyUs />
      <CustomCompare />
      <CustomFaq />

      <CtaBand
        title="Ready to scope your system?"
        subtitle="Tell us what you're trying to build or fix. Start with a fixed-price Discovery Sprint and you'll walk away with a written scope and a fixed quote - no quote wall, no obligation."
        primary={{ label: "Start with a Discovery Sprint", href: "/contact" }}
        secondary={{ label: "See transparent pricing", href: "/pricing" }}
      />
    </>
  );
}
