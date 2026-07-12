import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { servicePageSeo } from "@/config/seo";
import { getService } from "@/content/catalog";
import { performanceMarketingTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { PerfHero } from "@/components/sections/performance/PerfHero";
import { PerfScope } from "@/components/sections/performance/PerfScope";
import { PerfDifference } from "@/components/sections/performance/PerfDifference";
import { PerfProcess } from "@/components/sections/performance/PerfProcess";
import { PerfProof } from "@/components/sections/performance/PerfProof";
import { PerfPricing } from "@/components/sections/performance/PerfPricing";
import { PerfWhyUs } from "@/components/sections/performance/PerfWhyUs";
import { PerfFaq } from "@/components/sections/performance/PerfFaq";

const SLUG = "performance-marketing";
const PATH = `/services/${SLUG}`;

export const metadata: Metadata = metadataFrom(servicePageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Performance Marketing", path: PATH },
];

export default function PerformanceMarketingPage() {
  const service = getService(SLUG)!;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description:
            "Paid media and performance marketing management - Google Ads, paid social (Meta, LinkedIn, TikTok), display and retargeting - for startups, SMBs and enterprises. A flat monthly fee, never a percentage of spend; you own the ad accounts and pay the platforms directly, with no markup. Month-to-month, no results claims.",
          path: PATH,
          serviceType: "Performance marketing and PPC management",
          offers: performanceMarketingTiers.map((t) => ({
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
          name: "Performance Marketing",
          dateModified: new Date().toISOString(),
        })}
      />

      <PerfHero crumbs={crumbs} />
      <PerfScope />
      <PerfDifference />
      <PerfProcess />
      <PerfProof />
      <PerfPricing />
      <PerfWhyUs />
      <PerfFaq />

      <CtaBand
        title="Ready to run paid media without the games?"
        subtitle="Start with a fixed-price Paid Media Audit - you'll see our judgment on your own account, keep the plan, and owe nothing more. Flat fee, no markup, month-to-month."
        primary={{ label: "Book your Paid Media Audit", href: "/contact" }}
        secondary={{ label: "See transparent pricing", href: "/pricing" }}
      />
    </>
  );
}
