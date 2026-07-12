import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { industryPageSeo } from "@/config/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import { TravelHero } from "@/components/sections/travel/TravelHero";
import { TravelScope } from "@/components/sections/travel/TravelScope";
import { TravelWhy } from "@/components/sections/travel/TravelWhy";
import { TravelCapabilities } from "@/components/sections/travel/TravelCapabilities";
import { TravelProof } from "@/components/sections/travel/TravelProof";
import { TravelProcess } from "@/components/sections/travel/TravelProcess";
import { TravelCompare } from "@/components/sections/travel/TravelCompare";
import { TravelPricing } from "@/components/sections/travel/TravelPricing";
import { TravelFaq } from "@/components/sections/travel/TravelFaq";

const SLUG = "travel";
const PATH = `/industries/${SLUG}`;

export const metadata: Metadata = metadataFrom(industryPageSeo(SLUG)!);

// LOCKSTEP LABEL: this literal must equal catalog.name ("Travel & Hospitality") exactly - it feeds
// both the visible <Breadcrumbs> and the BreadcrumbList JSON-LD, and must match the Hero Pill. The
// slug is "travel" but the display NAME keeps "& Hospitality" (the edtech slug/name split). The
// webPageSchema name below is a deliberately DIFFERENT free variant.
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "Travel & Hospitality", path: PATH },
];

/**
 * The FIFTH bespoke industry page, built on the pattern the four siblings established.
 *
 * SLUG MIGRATION: "travel-hospitality" -> "travel" (the edtech-lms -> edtech precedent) while the
 * display name stays "Travel & Hospitality". This touched: catalog.slug + deep:true + name/tagline,
 * the seo.ts industrySeoOverrides KEY, and BOTH IndustriesGrid Record keys - all keyed by the slug.
 *
 * SCHEMA: breadcrumb + WebPage + FAQPage. Deliberately NO Service schema and NO ItemList (an
 * industry page has no price of its own; Service+Offers would fabricate a productised "travel
 * software development" service line delivered zero times; the twelve capability cards are not a
 * navigable URL collection). The Service entity for the build belongs to
 * /services/custom-software-development, which this page funnels up to.
 *
 * THE TRAVEL-SPECIFIC MOVE, distinct from the four siblings: the risk is NEITHER custody (healthcare
 * data, fintech money), NOR reconciliation (fintech), NOR a discriminatory output (real-estate) - it
 * is that a booking is a PROMISE to deliver something you do not own, at a place and time far from
 * the click, and one bundling feature can quietly change what your client legally is. So the
 * signature is building the interface to never promise what the supplier chain can't deliver, and
 * flagging the regulated-status trigger rather than shipping it silently - anchored on the Thomas
 * Cook and Southwest exhibits (cited by shape, no figures).
 */
export default function TravelPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={webPageSchema({
          path: PATH,
          name: "Travel & Hospitality Software Development",
          dateModified: new Date().toISOString(),
        })}
      />

      <TravelHero crumbs={crumbs} />
      <TravelScope />
      <TravelWhy />
      <TravelCapabilities />
      <TravelProof />
      <TravelProcess />
      <TravelCompare />
      <TravelPricing />
      <TravelFaq />

      <CtaBand
        title="Building something for travel?"
        subtitle="Tell us what you're trying to do, and where the inventory, the traveller data and the money have to live. We'll map what the software can honestly promise, tell you which features would change your regulated status, and tell you plainly whether an off-the-shelf engine already does the job - before anyone quotes you a number."
        primary={{ label: "Start with a discovery", href: "/contact" }}
        secondary={{ label: "How we scope and price a travel build", href: "/services/custom-software-development" }}
      />
    </>
  );
}
