import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { servicePageSeo } from "@/config/seo";
import { getService } from "@/content/catalog";
import { digitalMarketingTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { FurtherReading } from "@/components/sections/FurtherReading";
import { MarketingHero } from "@/components/sections/marketing/MarketingHero";
import { MarketingScope } from "@/components/sections/marketing/MarketingScope";
import { MarketingProcess } from "@/components/sections/marketing/MarketingProcess";
import { MarketingProof } from "@/components/sections/marketing/MarketingProof";
import { MarketingPricing } from "@/components/sections/marketing/MarketingPricing";
import { MarketingWhyUs } from "@/components/sections/marketing/MarketingWhyUs";
import { MarketingCompare } from "@/components/sections/marketing/MarketingCompare";
import { MarketingFaq } from "@/components/sections/marketing/MarketingFaq";

const SLUG = "digital-marketing";
const PATH = `/services/${SLUG}`;

export const metadata: Metadata = metadataFrom(servicePageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Digital Marketing", path: PATH },
];

export default function DigitalMarketingPage() {
  const service = getService(SLUG)!;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description:
            "SEO-led organic digital marketing - technical SEO, AI-search optimization (AEO/GEO), content, organic social, email and conversion optimization - for startups, SMBs and enterprises. We build the site and run the SEO, so foundations are right from day one. No paid ads, no vanity metrics.",
          path: PATH,
          serviceType: "Organic digital marketing",
          offers: digitalMarketingTiers.map((t) => ({
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
          name: "Digital Marketing",
        })}
      />

      <MarketingHero crumbs={crumbs} />
      <MarketingScope />
      <MarketingProcess />
      <MarketingProof />
      <MarketingPricing />
      <MarketingWhyUs />
      <MarketingCompare />
      <MarketingFaq />

      <FurtherReading
        links={[
          { href: "/blog/answer-engines-are-the-new-homepage", label: "Blog: answer engines are the new homepage" },
          { href: "/guides/core-web-vitals-playbook", label: "Guide: the Core Web Vitals playbook for business websites" },
        ]}
      />

      <CtaBand
        title="Ready to grow your organic visibility?"
        subtitle="Start with a fixed-price audit of your SEO, content and AI-search readiness. You'll get prioritized fixes and a plan - no quote wall, no guaranteed-ranking promises, no obligation."
        primary={{ label: "Book your Marketing Audit", href: "/contact" }}
        secondary={{ label: "See transparent pricing", href: "/pricing" }}
      />
    </>
  );
}
