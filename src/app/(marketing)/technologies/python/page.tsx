import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { webDesignDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { PythonHero } from "@/components/sections/python/PythonHero";
import { PythonScope } from "@/components/sections/python/PythonScope";
import { PythonWhy } from "@/components/sections/python/PythonWhy";
import { PythonCapabilities } from "@/components/sections/python/PythonCapabilities";
import { PythonProof } from "@/components/sections/python/PythonProof";
import { PythonProcess } from "@/components/sections/python/PythonProcess";
import { PythonCompare } from "@/components/sections/python/PythonCompare";
import { PythonPricing } from "@/components/sections/python/PythonPricing";
import { PythonFaq } from "@/components/sections/python/PythonFaq";

const SLUG = "python";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "Python", path: PATH },
];

export default function PythonPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "Python Development",
          description:
            "Python development services - custom backends and APIs with FastAPI and Flask, data pipelines, automation and machine-learning integration, for startups, SMBs and enterprises, at transparent published fixed prices. You own the code, data and models.",
          path: PATH,
          serviceType: "Python development",
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
          name: "Python Development Services",
          dateModified: new Date().toISOString(),
        })}
      />

      <PythonHero crumbs={crumbs} />
      <PythonScope />
      <PythonWhy />
      <PythonCapabilities />
      <PythonProof />
      <PythonProcess />
      <PythonCompare />
      <PythonPricing />
      <PythonFaq />

      <CtaBand
        title="Ready to build with Python?"
        subtitle="Get a fixed-price quote for a Python backend, API or data pipeline - code, data and models you own, in your own cloud, and a straight answer on whether Python is the right call. No quote wall, no hourly rate."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See custom software", href: "/services/custom-software-development" }}
      />
    </>
  );
}
