import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { webDesignDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { DjangoHero } from "@/components/sections/django/DjangoHero";
import { DjangoScope } from "@/components/sections/django/DjangoScope";
import { DjangoWhy } from "@/components/sections/django/DjangoWhy";
import { DjangoCapabilities } from "@/components/sections/django/DjangoCapabilities";
import { DjangoProof } from "@/components/sections/django/DjangoProof";
import { DjangoProcess } from "@/components/sections/django/DjangoProcess";
import { DjangoCompare } from "@/components/sections/django/DjangoCompare";
import { DjangoPricing } from "@/components/sections/django/DjangoPricing";
import { DjangoFaq } from "@/components/sections/django/DjangoFaq";

const SLUG = "django";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "Django", path: PATH },
];

export default function DjangoPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "Django Development",
          description:
            "Django development services - custom Python web applications, admin-heavy platforms, SaaS, portals, DRF APIs and Wagtail content platforms, built on Django 5.2 LTS and 6.0, for startups, SMBs and enterprises, at transparent published fixed prices. You own the code, no lock-in.",
          path: PATH,
          serviceType: "Django development",
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
          name: "Django Development Services",
        })}
      />

      <DjangoHero crumbs={crumbs} />
      <DjangoScope />
      <DjangoWhy />
      <DjangoCapabilities />
      <DjangoProof />
      <DjangoProcess />
      <DjangoCompare />
      <DjangoPricing />
      <DjangoFaq />

      <CtaBand
        title="Ready to build with Django?"
        subtitle="Get a fixed-price quote for a Django web app, admin platform or API - standard Python you own outright, no lock-in, and a straight answer on whether Django, FastAPI or WordPress is the right call. No quote wall."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See custom software", href: "/services/custom-software-development" }}
      />
    </>
  );
}
