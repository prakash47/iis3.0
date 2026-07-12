import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { webDesignDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { LaravelHero } from "@/components/sections/laravel/LaravelHero";
import { LaravelScope } from "@/components/sections/laravel/LaravelScope";
import { LaravelWhy } from "@/components/sections/laravel/LaravelWhy";
import { LaravelCapabilities } from "@/components/sections/laravel/LaravelCapabilities";
import { LaravelProof } from "@/components/sections/laravel/LaravelProof";
import { LaravelProcess } from "@/components/sections/laravel/LaravelProcess";
import { LaravelCompare } from "@/components/sections/laravel/LaravelCompare";
import { LaravelPricing } from "@/components/sections/laravel/LaravelPricing";
import { LaravelFaq } from "@/components/sections/laravel/LaravelFaq";

const SLUG = "laravel";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "Laravel", path: PATH },
];

export default function LaravelPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "Laravel Development",
          description:
            "Laravel development services - custom PHP web applications, SaaS products, admin panels, portals and APIs, built on Laravel 13 with Livewire, Inertia and Filament, for startups, SMBs and enterprises, at transparent published fixed prices. You own the code, no lock-in.",
          path: PATH,
          serviceType: "Laravel development",
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
          name: "Laravel Development Services",
          dateModified: new Date().toISOString(),
        })}
      />

      <LaravelHero crumbs={crumbs} />
      <LaravelScope />
      <LaravelWhy />
      <LaravelCapabilities />
      <LaravelProof />
      <LaravelProcess />
      <LaravelCompare />
      <LaravelPricing />
      <LaravelFaq />

      <CtaBand
        title="Ready to build with Laravel?"
        subtitle="Get a fixed-price quote for a Laravel web app, SaaS or API - clean, modern PHP you own outright, with no lock-in and no quote wall. We're not an official Laravel Partner, and we won't pretend to be."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See custom software", href: "/services/custom-software-development" }}
      />
    </>
  );
}
