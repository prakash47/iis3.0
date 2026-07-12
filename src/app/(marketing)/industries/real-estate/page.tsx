import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { industryPageSeo } from "@/config/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import { RealEstateHero } from "@/components/sections/real-estate/RealEstateHero";
import { RealEstateScope } from "@/components/sections/real-estate/RealEstateScope";
import { RealEstateWhy } from "@/components/sections/real-estate/RealEstateWhy";
import { RealEstateCapabilities } from "@/components/sections/real-estate/RealEstateCapabilities";
import { RealEstateProof } from "@/components/sections/real-estate/RealEstateProof";
import { RealEstateProcess } from "@/components/sections/real-estate/RealEstateProcess";
import { RealEstateCompare } from "@/components/sections/real-estate/RealEstateCompare";
import { RealEstatePricing } from "@/components/sections/real-estate/RealEstatePricing";
import { RealEstateFaq } from "@/components/sections/real-estate/RealEstateFaq";

const SLUG = "real-estate";
const PATH = `/industries/${SLUG}`;

export const metadata: Metadata = metadataFrom(industryPageSeo(SLUG)!);

// LOCKSTEP LABEL: this literal must equal catalog.name ("Real Estate & Listing Portals") exactly -
// it feeds both the visible <Breadcrumbs> and the BreadcrumbList JSON-LD, and must match the Hero
// Pill and the homepage grid anchor. The webPageSchema name below is a deliberately DIFFERENT free
// variant, kept out of the fair-housing/compliant register.
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "Real Estate & Listing Portals", path: PATH },
];

/**
 * The FOURTH bespoke industry page, built on the pattern edtech, healthcare and fintech established.
 *
 * SCHEMA: breadcrumb + WebPage + FAQPage. Deliberately NO Service schema and NO ItemList (an
 * industry page has no price of its own; Service+Offers would fabricate a productised "real estate
 * software development" service line delivered zero times; the twelve capability cards are not a
 * navigable URL collection). The Service entity for the build belongs to
 * /services/custom-software-development, which this page funnels up to.
 *
 * THE REAL-ESTATE-SPECIFIC MOVE, distinct from edtech's "allocate the obligation", healthcare's
 * "draw the business-associate boundary" and fintech's "you are not the bank / the ledger is a
 * claim until it reconciles": the risk is NEITHER custody NOR reconciliation - it is that a FAIR
 * HOUSING violation can be an emergent property of the software itself (a filter, a ranking, a
 * screening score), and the liability reaches the tool. So the signature is designing against
 * disparate impact as a method while fencing off the automated approve/decline and the
 * valuation-of-record, anchored on the STATUTE + the Supreme Court (Inclusive Communities) + the
 * private settlements (SafeRent, Meta), never on the withdrawn 2024 HUD guidance.
 */
export default function RealEstatePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={webPageSchema({
          path: PATH,
          name: "Real Estate Software & Listing-Portal Development",
          dateModified: new Date().toISOString(),
        })}
      />

      <RealEstateHero crumbs={crumbs} />
      <RealEstateScope />
      <RealEstateWhy />
      <RealEstateCapabilities />
      <RealEstateProof />
      <RealEstateProcess />
      <RealEstateCompare />
      <RealEstatePricing />
      <RealEstateFaq />

      <CtaBand
        title="Building something for real estate?"
        subtitle="Tell us what you're trying to do, and where the listing data, the applicant information and the money have to live. We'll map which features touch fair-housing risk, tell you honestly whether an off-the-shelf portal already does the job, and tell you plainly which decisioning we won't build - before anyone quotes you a number."
        primary={{ label: "Start with a discovery", href: "/contact" }}
        secondary={{ label: "How we scope and price a property build", href: "/services/custom-software-development" }}
      />
    </>
  );
}
