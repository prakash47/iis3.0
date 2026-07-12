import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { industryPageSeo } from "@/config/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import { EdtechHero } from "@/components/sections/edtech/EdtechHero";
import { EdtechScope } from "@/components/sections/edtech/EdtechScope";
import { EdtechWhy } from "@/components/sections/edtech/EdtechWhy";
import { EdtechCapabilities } from "@/components/sections/edtech/EdtechCapabilities";
import { EdtechProof } from "@/components/sections/edtech/EdtechProof";
import { EdtechProcess } from "@/components/sections/edtech/EdtechProcess";
import { EdtechCompare } from "@/components/sections/edtech/EdtechCompare";
import { EdtechPricing } from "@/components/sections/edtech/EdtechPricing";
import { EdtechFaq } from "@/components/sections/edtech/EdtechFaq";

const SLUG = "edtech";
const PATH = `/industries/${SLUG}`;

export const metadata: Metadata = metadataFrom(industryPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "EdTech & LMS", path: PATH },
];

/**
 * The FIRST bespoke industry page. It establishes the pattern for the other five verticals.
 *
 * SCHEMA: breadcrumb + WebPage + FAQPage. Deliberately NO Service schema.
 *  - An industry page has no price of its own, so a Service with no Offers is a thin commercial
 *    entity, and a Service WITH Offers would fabricate a productised "custom LMS development"
 *    service line we have delivered exactly zero times. That is the doorway-dressed-in-commercial-
 *    markup risk, and it is the same reason we are NOT creating /services/lms-development: a money
 *    page's whole purpose is to carry Service + Offers and assert "we sell and have shipped this".
 *  - No ItemList either: the twelve capability cards are not a navigable collection of URLs.
 *
 * The Service entity for the actual build belongs to /services/custom-software-development, which
 * this page funnels up to. The LMS money keyword is captured here, honestly, in title/H1/body.
 */
export default function EdtechPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={webPageSchema({
          path: PATH,
          name: "Custom LMS & eLearning Development",
          dateModified: new Date().toISOString(),
        })}
      />

      <EdtechHero crumbs={crumbs} />
      <EdtechScope />
      <EdtechWhy />
      <EdtechCapabilities />
      <EdtechProof />
      <EdtechProcess />
      <EdtechCompare />
      <EdtechPricing />
      <EdtechFaq />

      <CtaBand
        title="Building something for education?"
        subtitle="Tell us what you're trying to teach, and who has to run it after launch. We'll tell you honestly whether it's a custom platform, an extension of one you already have, or a problem software shouldn't be solving - before anyone quotes you a number."
        primary={{ label: "Start with a discovery", href: "/contact" }}
        secondary={{ label: "See custom software development", href: "/services/custom-software-development" }}
      />
    </>
  );
}
