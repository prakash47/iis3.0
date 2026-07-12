import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { industryPageSeo } from "@/config/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import { FintechHero } from "@/components/sections/fintech/FintechHero";
import { FintechScope } from "@/components/sections/fintech/FintechScope";
import { FintechWhy } from "@/components/sections/fintech/FintechWhy";
import { FintechCapabilities } from "@/components/sections/fintech/FintechCapabilities";
import { FintechProof } from "@/components/sections/fintech/FintechProof";
import { FintechProcess } from "@/components/sections/fintech/FintechProcess";
import { FintechCompare } from "@/components/sections/fintech/FintechCompare";
import { FintechPricing } from "@/components/sections/fintech/FintechPricing";
import { FintechFaq } from "@/components/sections/fintech/FintechFaq";

const SLUG = "fintech";
const PATH = `/industries/${SLUG}`;

export const metadata: Metadata = metadataFrom(industryPageSeo(SLUG)!);

// LOCKSTEP LABEL: this literal must equal catalog.name ("FinTech & Payments") exactly - it feeds
// both the visible <Breadcrumbs> and the BreadcrumbList JSON-LD, and must match the Hero Pill and
// the homepage grid anchor. The webPageSchema name below is a deliberately DIFFERENT free variant.
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "FinTech & Payments", path: PATH },
];

/**
 * The THIRD bespoke industry page, built on the pattern edtech and healthcare established.
 *
 * SCHEMA: breadcrumb + WebPage + FAQPage. Deliberately NO Service schema and NO ItemList (an
 * industry page has no price of its own; Service+Offers would fabricate a productised "fintech
 * software development" service line delivered zero times; the twelve capability cards are not a
 * navigable collection of URLs). The Service entity for the build belongs to
 * /services/custom-software-development, which this page funnels up to.
 *
 * THE FINTECH-SPECIFIC MOVE, distinct from edtech's "allocate the obligation" and healthcare's
 * "draw the business-associate boundary": the regulated entity is a bank/processor/transmitter,
 * almost never the fintech and never its vendor, so the money moves on rails you rent - and the
 * signature is that your ledger is only a CLAIM about someone else's money until it reconciles with
 * the party that holds it (the Synapse lesson). The virtue is correctness under motion, NOT the
 * absence move healthcare owns. The whole page is architected around building on regulated
 * providers, claimed as a METHOD, never as compliance, with crypto explicitly out of scope.
 */
export default function FintechPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={webPageSchema({
          path: PATH,
          name: "Fintech & Payment Software Development",
          dateModified: new Date().toISOString(),
        })}
      />

      <FintechHero crumbs={crumbs} />
      <FintechScope />
      <FintechWhy />
      <FintechCapabilities />
      <FintechProof />
      <FintechProcess />
      <FintechCompare />
      <FintechPricing />
      <FintechFaq />

      <CtaBand
        title="Building something for fintech?"
        subtitle="Tell us what you're trying to do, and where the money and the licence have to live. We'll map the flow, tell you honestly whether a processor and a sponsor bank already do the regulated part, and tell you plainly if it's a project we shouldn't take - before anyone quotes you a number."
        primary={{ label: "Start with a discovery", href: "/contact" }}
        secondary={{ label: "How we price and build custom software", href: "/services/custom-software-development" }}
      />
    </>
  );
}
