import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { webDesignDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { PhpHero } from "@/components/sections/php/PhpHero";
import { PhpScope } from "@/components/sections/php/PhpScope";
import { PhpWhy } from "@/components/sections/php/PhpWhy";
import { PhpCapabilities } from "@/components/sections/php/PhpCapabilities";
import { PhpProof } from "@/components/sections/php/PhpProof";
import { PhpProcess } from "@/components/sections/php/PhpProcess";
import { PhpCompare } from "@/components/sections/php/PhpCompare";
import { PhpPricing } from "@/components/sections/php/PhpPricing";
import { PhpFaq } from "@/components/sections/php/PhpFaq";

const SLUG = "php";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "PHP", path: PATH },
];

export default function PhpPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {/* Service name "PHP Development" is DISTINCT from Laravel's "Laravel Development" so the
          two Service nodes do not collide. The description is offer-framed and lane-precise
          (raw/no-framework PHP, APIs, legacy modernization, maintenance) - it deliberately does
          NOT reuse Laravel's "custom PHP web applications" phrasing. Offers are the same five web
          tiers, byte-identical (300/1500/4000/7000/12000). */}
      <JsonLd
        data={serviceSchema({
          name: "PHP Development",
          description:
            "PHP development services - custom PHP without a heavy framework, APIs and small tools, plus legacy PHP upgrades, modernization and maintenance, in typed, tested, standard PHP, for startups, SMBs and enterprises, at transparent published fixed prices. You own the code, no lock-in.",
          path: PATH,
          serviceType: "PHP development",
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
          name: "PHP Development Services",
        })}
      />

      <PhpHero crumbs={crumbs} />
      <PhpScope />
      <PhpWhy />
      <PhpCapabilities />
      <PhpProof />
      <PhpProcess />
      <PhpCompare />
      <PhpPricing />
      <PhpFaq />

      <CtaBand
        title="Ready to build or modernize PHP?"
        subtitle="Get a fixed-price quote for a custom PHP build, a legacy upgrade or ongoing maintenance - clean, standard PHP you own outright, with no lock-in and no quote wall."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "Scope a bespoke or legacy build", href: "/services/custom-software-development" }}
      />
    </>
  );
}
