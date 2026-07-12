import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { webDesignDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { NodejsHero } from "@/components/sections/nodejs/NodejsHero";
import { NodejsScope } from "@/components/sections/nodejs/NodejsScope";
import { NodejsWhy } from "@/components/sections/nodejs/NodejsWhy";
import { NodejsCapabilities } from "@/components/sections/nodejs/NodejsCapabilities";
import { NodejsProof } from "@/components/sections/nodejs/NodejsProof";
import { NodejsProcess } from "@/components/sections/nodejs/NodejsProcess";
import { NodejsCompare } from "@/components/sections/nodejs/NodejsCompare";
import { NodejsPricing } from "@/components/sections/nodejs/NodejsPricing";
import { NodejsFaq } from "@/components/sections/nodejs/NodejsFaq";

const SLUG = "nodejs";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "Node.js", path: PATH },
];

export default function NodejsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "Node.js Development",
          description:
            "Node.js development services - custom backends, REST and GraphQL APIs, real-time apps and microservices, built on Express, NestJS or Fastify with TypeScript, for startups, SMBs and enterprises, at transparent published fixed prices. You own the code.",
          path: PATH,
          serviceType: "Node.js development",
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
          name: "Node.js Development Services",
          dateModified: new Date().toISOString(),
        })}
      />

      <NodejsHero crumbs={crumbs} />
      <NodejsScope />
      <NodejsWhy />
      <NodejsCapabilities />
      <NodejsProof />
      <NodejsProcess />
      <NodejsCompare />
      <NodejsPricing />
      <NodejsFaq />

      <CtaBand
        title="Ready to build your Node.js backend?"
        subtitle="Get a fixed-price quote for a Node.js API or backend - code and data you own, in your own cloud, and a straight answer on whether Node is even the right call. No quote wall, no hourly rate."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See custom software", href: "/services/custom-software-development" }}
      />
    </>
  );
}
