import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { industryPageSeo } from "@/config/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import { EntertainmentHero } from "@/components/sections/entertainment/EntertainmentHero";
import { EntertainmentScope } from "@/components/sections/entertainment/EntertainmentScope";
import { EntertainmentWhy } from "@/components/sections/entertainment/EntertainmentWhy";
import { EntertainmentCapabilities } from "@/components/sections/entertainment/EntertainmentCapabilities";
import { EntertainmentProof } from "@/components/sections/entertainment/EntertainmentProof";
import { EntertainmentProcess } from "@/components/sections/entertainment/EntertainmentProcess";
import { EntertainmentCompare } from "@/components/sections/entertainment/EntertainmentCompare";
import { EntertainmentPricing } from "@/components/sections/entertainment/EntertainmentPricing";
import { EntertainmentFaq } from "@/components/sections/entertainment/EntertainmentFaq";

const SLUG = "entertainment-media";
const PATH = `/industries/${SLUG}`;

export const metadata: Metadata = metadataFrom(industryPageSeo(SLUG)!);

// LOCKSTEP LABEL: this literal must equal catalog.name ("Entertainment & Media") exactly - it feeds
// both the visible <Breadcrumbs> and the BreadcrumbList JSON-LD, and must match the Hero Pill. The
// slug is "entertainment-media" and the display NAME is entertainment-first; the title tag and the
// webPageSchema name below run the majority "Media & Entertainment" order for keyword coverage,
// which is a deliberate order-split kept OUT of every visible surface (schema name is not rendered).
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "Entertainment & Media", path: PATH },
];

/**
 * The SIXTH and LAST bespoke industry page, built on the pattern the five siblings established.
 * When this shipped, catalog.deep flipped to true and templateIndustries became empty, so the
 * /industries/[slug] template now statically generates nothing.
 *
 * SCHEMA: breadcrumb + WebPage + FAQPage. Deliberately NO Service schema and NO ItemList (an
 * industry page has no price of its own; Service+Offers would fabricate a productised "media
 * software" service line delivered zero times; the twelve capability cards are not a navigable URL
 * collection). The Service entity for the build belongs to /services/custom-software-development,
 * which this page funnels up to.
 *
 * THE ENTERTAINMENT-SPECIFIC MOVE (signature #15), distinct from the five siblings: the risk is not
 * custody (health), reconciliation (fintech), a discriminatory output (real-estate), or a deferred
 * promise (travel) - it is AUTHORSHIP. In media you did not make what your platform carries, so one
 * fact splits into two liabilities the software settles: every item needs a provable licence to be
 * there (rights), and every item a user hands you needs a lawful way out (the safe-harbor takedown
 * machinery). Both stay the client's roles; we build the machinery, never take the liability-bearing
 * licensee, royalty-payer or host-of-record roles.
 */
export default function EntertainmentMediaPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={webPageSchema({
          path: PATH,
          name: "Media & Entertainment Software Development",
        })}
      />

      <EntertainmentHero crumbs={crumbs} />
      <EntertainmentScope />
      <EntertainmentWhy />
      <EntertainmentCapabilities />
      <EntertainmentProof />
      <EntertainmentProcess />
      <EntertainmentCompare />
      <EntertainmentPricing />
      <EntertainmentFaq />

      <CtaBand
        title="Building something for entertainment or media?"
        subtitle="Tell us what your platform will carry, and who made it - a rightsholder who licensed it to you, or a user who uploaded it. We'll map the rights, safe-harbor and consent machinery the software has to do, tell you which roles stay yours and which packaged pieces to buy rather than build, and price the part worth building - before anyone quotes you a whole platform."
        primary={{ label: "Start with a discovery", href: "/contact" }}
        secondary={{ label: "How we price the machinery, not the whole platform", href: "/services/custom-software-development" }}
      />
    </>
  );
}
