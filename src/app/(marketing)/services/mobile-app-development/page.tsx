import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { servicePageSeo } from "@/config/seo";
import { getService } from "@/content/catalog";
import { mobileAppDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { MobileHero } from "@/components/sections/mobile/MobileHero";
import { MobileScope } from "@/components/sections/mobile/MobileScope";
import { MobileDecision } from "@/components/sections/mobile/MobileDecision";
import { MobileProcess } from "@/components/sections/mobile/MobileProcess";
import { MobileStack } from "@/components/sections/mobile/MobileStack";
import { MobileProof } from "@/components/sections/mobile/MobileProof";
import { MobilePricing } from "@/components/sections/mobile/MobilePricing";
import { MobileWhyUs } from "@/components/sections/mobile/MobileWhyUs";
import { MobileCompare } from "@/components/sections/mobile/MobileCompare";
import { MobileFaq } from "@/components/sections/mobile/MobileFaq";

const SLUG = "mobile-app-development";
const PATH = `/services/${SLUG}`;

export const metadata: Metadata = metadataFrom(servicePageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Mobile App Development", path: PATH },
];

export default function MobileAppDevelopmentPage() {
  const service = getService(SLUG)!;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description:
            "Native and cross-platform iOS and Android app development - React Native, Flutter, SwiftUI and Kotlin - for startups, SMBs and enterprises, at transparent, published fixed prices, shipped in weeks. You own the code.",
          path: PATH,
          serviceType: "Mobile app development",
          offers: mobileAppDevTiers.map((t) => ({
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
          name: "Mobile App Development",
          dateModified: new Date().toISOString(),
        })}
      />

      <MobileHero crumbs={crumbs} />
      <MobileScope />
      <MobileDecision />
      <MobileProcess />
      <MobileStack />
      <MobileProof />
      <MobilePricing />
      <MobileWhyUs />
      <MobileCompare />
      <MobileFaq />

      <CtaBand
        title="Ready to see a fixed price for your app?"
        subtitle="Tell us what you're building. You'll get a fixed price, a timeline and a straight native-or-cross-platform recommendation - no quote wall, no obligation."
        primary={{ label: "Get a fixed-price estimate", href: "/contact" }}
        secondary={{ label: "See transparent pricing", href: "/pricing" }}
      />
    </>
  );
}
