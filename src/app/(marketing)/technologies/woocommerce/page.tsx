import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { webDesignDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { WooHero } from "@/components/sections/woocommerce/WooHero";
import { WooScope } from "@/components/sections/woocommerce/WooScope";
import { WooWhy } from "@/components/sections/woocommerce/WooWhy";
import { WooCapabilities } from "@/components/sections/woocommerce/WooCapabilities";
import { WooProof } from "@/components/sections/woocommerce/WooProof";
import { WooProcess } from "@/components/sections/woocommerce/WooProcess";
import { WooCompare } from "@/components/sections/woocommerce/WooCompare";
import { WooPricing } from "@/components/sections/woocommerce/WooPricing";
import { WooFaq } from "@/components/sections/woocommerce/WooFaq";

const SLUG = "woocommerce";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "WooCommerce", path: PATH },
];

export default function WooCommercePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "WooCommerce Development",
          // No own-site WooCommerce claim. Unlike Shopify (hosted), the ownership claim here is
          // the strongest on the site: self-hosted GPL software means the merchant owns the store,
          // the checkout, the code and the database. Never "you own the host" - hosting is rented.
          description:
            "WooCommerce development services - custom stores on WordPress, lean block themes, the block Cart and Checkout, High-Performance Order Storage, bespoke extensions, integrations and migrations, for startups, SMBs and enterprises, at transparent published fixed prices. You own the store, the checkout, the code and the data, with no platform rent, no lock-in and no markup on extensions.",
          path: PATH,
          serviceType: "WooCommerce development",
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
          name: "WooCommerce Development Services",
          dateModified: new Date().toISOString(),
        })}
      />

      <WooHero crumbs={crumbs} />
      <WooScope />
      <WooWhy />
      <WooCapabilities />
      <WooProof />
      <WooProcess />
      <WooCompare />
      <WooPricing />
      <WooFaq />

      {/* Maintenance is deliberately ABSENT from this band. It is the heaviest in-body cross-link
          on the site (Scope, Why, Proof, Pricing), but promoting it into the primary conversion
          band would tip the ownership-cost honesty into a retainer sales funnel. */}
      <CtaBand
        title="Ready to build on WooCommerce?"
        subtitle="Get a fixed-price quote for a WooCommerce store, a custom block theme, bespoke extensions or a migration - plus a straight answer on whether WooCommerce, a hosted store or a fully custom build is the right call. No quote wall, no markup on extensions."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See web design & ecommerce development", href: "/services/web-design-development" }}
      />
    </>
  );
}
