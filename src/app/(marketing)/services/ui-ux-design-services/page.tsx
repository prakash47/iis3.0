import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { servicePageSeo } from "@/config/seo";
import { getService } from "@/content/catalog";
import { uiUxDesignTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { UiuxHero } from "@/components/sections/uiux/UiuxHero";
import { UiuxProof } from "@/components/sections/uiux/UiuxProof";
import { UiuxScope } from "@/components/sections/uiux/UiuxScope";
import { UiuxProcess } from "@/components/sections/uiux/UiuxProcess";
import { UiuxCraft } from "@/components/sections/uiux/UiuxCraft";
import { UiuxPricing } from "@/components/sections/uiux/UiuxPricing";
import { UiuxWhyUs } from "@/components/sections/uiux/UiuxWhyUs";
import { UiuxCompare } from "@/components/sections/uiux/UiuxCompare";
import { UiuxFaq } from "@/components/sections/uiux/UiuxFaq";

const SLUG = "ui-ux-design-services";
const PATH = `/services/${SLUG}`;

export const metadata: Metadata = metadataFrom(servicePageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "UI/UX Design & Branding", path: PATH },
];

export default function UiUxDesignServicesPage() {
  const service = getService(SLUG)!;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description:
            "UI/UX design and branding - product UI/UX design, design systems, UX research and audits, prototyping and brand identity - for startups, SMBs and enterprises. Designed in Figma, dev-ready and yours to own, at transparent published fixed prices, priced from a low-cost audit.",
          path: PATH,
          serviceType: "UI/UX design",
          offers: uiUxDesignTiers.map((t) => ({
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
          name: "UI/UX Design & Branding",
        })}
      />

      <UiuxHero crumbs={crumbs} />
      <UiuxProof />
      <UiuxScope />
      <UiuxProcess />
      <UiuxCraft />
      <UiuxPricing />
      <UiuxWhyUs />
      <UiuxCompare />
      <UiuxFaq />

      <CtaBand
        title="Want to see our design on your product?"
        subtitle="Start with a fixed-price UX/UI Audit - you'll get a prioritized findings report and a clear plan, credited toward your project. No sales call required."
        primary={{ label: "Start with a UX/UI Audit", href: "/contact" }}
        secondary={{ label: "See how we price", href: "#pricing" }}
      />
    </>
  );
}
