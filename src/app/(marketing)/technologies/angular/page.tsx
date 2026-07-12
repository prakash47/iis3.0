import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { webDesignDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { AngularHero } from "@/components/sections/angular/AngularHero";
import { AngularWhat } from "@/components/sections/angular/AngularWhat";
import { AngularWhy } from "@/components/sections/angular/AngularWhy";
import { AngularDepth } from "@/components/sections/angular/AngularDepth";
import { AngularProof } from "@/components/sections/angular/AngularProof";
import { AngularProcess } from "@/components/sections/angular/AngularProcess";
import { AngularCompare } from "@/components/sections/angular/AngularCompare";
import { AngularPricing } from "@/components/sections/angular/AngularPricing";
import { AngularFaq } from "@/components/sections/angular/AngularFaq";

const SLUG = "angular";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "Angular", path: PATH },
];

export default function AngularPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "Angular Development",
          description:
            "Angular development services - enterprise-grade Angular web apps, dashboards, SaaS front-ends and AngularJS-to-modern-Angular migrations, built on modern Angular (signals, standalone components, zoneless change detection, SSR with hydration) - for startups, SMBs and enterprises. You own the standard-Angular code, no lock-in, at transparent published fixed prices.",
          path: PATH,
          serviceType: "Angular development",
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
          name: "Angular Development Services",
          dateModified: new Date().toISOString(),
        })}
      />

      <AngularHero crumbs={crumbs} />
      <AngularWhat />
      <AngularWhy />
      <AngularDepth />
      <AngularProof />
      <AngularProcess />
      <AngularCompare />
      <AngularPricing />
      <AngularFaq />

      <CtaBand
        title="Ready to build with Angular?"
        subtitle="Get a fixed-price quote for an Angular app, dashboard or AngularJS migration - built on modern Angular, with code you own and no lock-in. No quote wall, no hourly rate."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See web development", href: "/services/web-design-development" }}
      />
    </>
  );
}
