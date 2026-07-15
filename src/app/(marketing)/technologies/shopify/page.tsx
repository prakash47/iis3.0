import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { webDesignDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { ShopifyHero } from "@/components/sections/shopify/ShopifyHero";
import { ShopifyScope } from "@/components/sections/shopify/ShopifyScope";
import { ShopifyWhy } from "@/components/sections/shopify/ShopifyWhy";
import { ShopifyCapabilities } from "@/components/sections/shopify/ShopifyCapabilities";
import { ShopifyProof } from "@/components/sections/shopify/ShopifyProof";
import { ShopifyProcess } from "@/components/sections/shopify/ShopifyProcess";
import { ShopifyCompare } from "@/components/sections/shopify/ShopifyCompare";
import { ShopifyPricing } from "@/components/sections/shopify/ShopifyPricing";
import { ShopifyFaq } from "@/components/sections/shopify/ShopifyFaq";

const SLUG = "shopify";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "Shopify", path: PATH },
];

export default function ShopifyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "Shopify Development",
          // No own-site Shopify claim, and never "you own your store" - Shopify hosts the
          // store, the admin and the checkout. Data, domain and code are what a merchant owns.
          description:
            "Shopify development services - custom Online Store 2.0 themes, cart and discount logic as Shopify Functions, checkout extensions, headless storefronts on the Storefront API, custom apps, integrations and migrations, for startups, SMBs and enterprises, at transparent published fixed prices. You own your data, your domain and your code, with no agency lock-in and no markup on apps.",
          path: PATH,
          serviceType: "Shopify development",
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
          name: "Shopify Development Services",
        })}
      />

      <ShopifyHero crumbs={crumbs} />
      <ShopifyScope />
      <ShopifyWhy />
      <ShopifyCapabilities />
      <ShopifyProof />
      <ShopifyProcess />
      <ShopifyCompare />
      <ShopifyPricing />
      <ShopifyFaq />

      <CtaBand
        title="Ready to build on Shopify?"
        subtitle="Get a fixed-price quote for a Shopify store, a custom theme, a headless storefront or a migration - plus a straight answer on whether Shopify, WooCommerce or a custom build is the right call, and whether you actually need Shopify Plus. No quote wall, no markup on apps."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See web design & ecommerce development", href: "/services/web-design-development" }}
      />
    </>
  );
}
