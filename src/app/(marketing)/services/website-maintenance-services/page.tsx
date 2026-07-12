import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { servicePageSeo } from "@/config/seo";
import { getService } from "@/content/catalog";
import { websiteMaintenanceTiers, websiteAuditTier, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { MaintenanceHero } from "@/components/sections/maintenance/MaintenanceHero";
import { MaintenanceWhy } from "@/components/sections/maintenance/MaintenanceWhy";
import { MaintenanceScope } from "@/components/sections/maintenance/MaintenanceScope";
import { MaintenanceProcess } from "@/components/sections/maintenance/MaintenanceProcess";
import { MaintenanceProof } from "@/components/sections/maintenance/MaintenanceProof";
import { MaintenancePricing } from "@/components/sections/maintenance/MaintenancePricing";
import { MaintenanceCompare } from "@/components/sections/maintenance/MaintenanceCompare";
import { MaintenanceFaq } from "@/components/sections/maintenance/MaintenanceFaq";

const SLUG = "website-maintenance-services";
const PATH = `/services/${SLUG}`;

export const metadata: Metadata = metadataFrom(servicePageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Website Maintenance", path: PATH },
];

export default function WebsiteMaintenanceServicesPage() {
  const service = getService(SLUG)!;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description:
            "Ongoing website maintenance and support - software updates, security, backups, performance monitoring and small changes - on any stack, on transparent published monthly care plans with no lock-in. We also audit and adopt sites we didn't build.",
          path: PATH,
          serviceType: "Website maintenance",
          offers: [
            ...websiteMaintenanceTiers.map((t) => ({
              name: t.name,
              priceValue: t.fromValue,
              priceCurrency,
              description: `${t.for} - per month`,
            })),
            {
              name: websiteAuditTier.name,
              priceValue: websiteAuditTier.fromValue,
              priceCurrency,
              description: `${websiteAuditTier.for} - one-time`,
            },
          ],
        })}
      />
      <JsonLd
        data={webPageSchema({
          path: PATH,
          name: "Website Maintenance Services",
          dateModified: new Date().toISOString(),
        })}
      />

      <MaintenanceHero crumbs={crumbs} />
      <MaintenanceWhy />
      <MaintenanceScope />
      <MaintenanceProcess />
      <MaintenanceProof />
      <MaintenancePricing />
      <MaintenanceCompare />
      <MaintenanceFaq />

      <CtaBand
        title="Ready to hand off the upkeep?"
        subtitle="Start a month-to-month care plan, or a one-time health audit if we didn't build it. No lock-in, no sales call - and you keep full ownership of your site and accounts."
        primary={{ label: "Start a care plan", href: "/contact" }}
        secondary={{ label: "See plans & pricing", href: "#pricing" }}
      />
    </>
  );
}
