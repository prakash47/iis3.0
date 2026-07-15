import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { industryPageSeo } from "@/config/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import { HealthHero } from "@/components/sections/health/HealthHero";
import { HealthScope } from "@/components/sections/health/HealthScope";
import { HealthWhy } from "@/components/sections/health/HealthWhy";
import { HealthCapabilities } from "@/components/sections/health/HealthCapabilities";
import { HealthProof } from "@/components/sections/health/HealthProof";
import { HealthProcess } from "@/components/sections/health/HealthProcess";
import { HealthCompare } from "@/components/sections/health/HealthCompare";
import { HealthPricing } from "@/components/sections/health/HealthPricing";
import { HealthFaq } from "@/components/sections/health/HealthFaq";

const SLUG = "healthcare";
const PATH = `/industries/${SLUG}`;

export const metadata: Metadata = metadataFrom(industryPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "Healthcare & Patient Portals", path: PATH },
];

/**
 * The SECOND bespoke industry page, built on the pattern edtech established.
 *
 * SCHEMA: breadcrumb + WebPage + FAQPage. Deliberately NO Service schema and NO ItemList - the
 * same reasoning as edtech (an industry page has no price of its own; Service+Offers would
 * fabricate a productised "healthcare software development" service line we have delivered exactly
 * zero times; the twelve capability cards are not a navigable collection of URLs). The Service
 * entity for the build belongs to /services/custom-software-development, which this page funnels up
 * to. The webPageSchema name is authored fresh and kept out of the "compliant" register.
 *
 * THE HEALTHCARE-SPECIFIC MOVE, distinct from edtech's "allocate the obligation": in education the
 * law never touched us (FERPA binds the school). In healthcare HIPAA reaches the vendor directly
 * the moment it handles PHI - we become a business associate, liable under HITECH. So the signature
 * is "draw the business-associate boundary and build ourselves onto the outside of it", and the
 * whole page is architected around a PHI-free posture claimed as a METHOD, never as compliance.
 */
export default function HealthcarePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={webPageSchema({
          path: PATH,
          name: "Healthcare Software & Patient Portal Development",
        })}
      />

      <HealthHero crumbs={crumbs} />
      <HealthScope />
      <HealthWhy />
      <HealthCapabilities />
      <HealthProof />
      <HealthProcess />
      <HealthCompare />
      <HealthPricing />
      <HealthFaq />

      <CtaBand
        title="Building something for healthcare?"
        subtitle="Tell us what you're trying to do, and where the patient data has to live. We'll map it, tell you honestly whether your record system already does the job, and tell you plainly if it's a project we shouldn't take - before anyone quotes you a number."
        primary={{ label: "Start with a discovery", href: "/contact" }}
        secondary={{ label: "How we price and build custom software", href: "/services/custom-software-development" }}
      />
    </>
  );
}
