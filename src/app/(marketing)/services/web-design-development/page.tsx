import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { servicePageSeo } from "@/config/seo";
import { getService } from "@/content/catalog";
import { webDesignDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { WebDevHero } from "@/components/sections/web-dev/WebDevHero";
import { WebDevProof } from "@/components/sections/web-dev/WebDevProof";
import { WebDevScope } from "@/components/sections/web-dev/WebDevScope";
import { WebDevPricing } from "@/components/sections/web-dev/WebDevPricing";
import { WebDevProcess } from "@/components/sections/web-dev/WebDevProcess";
import { WebDevStack } from "@/components/sections/web-dev/WebDevStack";
import { WebDevWhyUs } from "@/components/sections/web-dev/WebDevWhyUs";
import { WebDevCompare } from "@/components/sections/web-dev/WebDevCompare";
import { WebDevFaq } from "@/components/sections/web-dev/WebDevFaq";

const SLUG = "web-design-development";
const PATH = `/services/${SLUG}`;

export const metadata: Metadata = metadataFrom(servicePageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Web Design & Development", path: PATH },
];

export default function WebDesignDevelopmentPage() {
  const service = getService(SLUG)!;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description:
            "Full-service, stack-agnostic web design and development - custom websites, web apps and ecommerce for startups, SMBs and enterprises, at transparent, published fixed prices, shipped in weeks.",
          path: PATH,
          serviceType: "Web design and development",
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
          name: "Web Design & Development",
        })}
      />

      <WebDevHero crumbs={crumbs} />
      <WebDevProof />
      <WebDevScope />
      <WebDevPricing />
      <WebDevProcess />
      <WebDevStack />
      <WebDevWhyUs />
      <WebDevCompare />
      <WebDevFaq />

      <CtaBand
        title="Ready to see a fixed price for your build?"
        subtitle="Tell us what you're building. You'll get a fixed price and a timeline, not a quote wall - and no obligation."
        primary={{ label: "Get a fixed-price quote", href: "/contact" }}
        secondary={{ label: "See transparent pricing", href: "/pricing" }}
      />
    </>
  );
}
