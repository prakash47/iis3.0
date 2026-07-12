import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconSearch, IconGrid, IconLayers, IconServer, IconFileText, IconPin, IconArrow } from "@/components/icons";

// CAPABILITY TENSE ONLY. Zero real-estate clients, zero MLS integrations shipped, so every card
// describes what a job of this shape involves and how we would approach it - never "the portals we
// run" or "our real-estate clients". The word "app" stays out of the headings.
//
// EVERY CARD IS ON THE FAIR SIDE OF THE DECISIONING LINE. None of them is the automated
// tenant-screening-of-record or the valuation-of-record - those are fenced off (the SafeRent and
// Zillow businesses). That is the scope of the business this page describes.
//
// THE STORE HAND-OFF (a NEW goods-selling brief) routes to Shopify/Woo; the bridge (in Proof)
// claims OUR PAST store as the browse/filter/enquire skeleton. Two different subjects - keep them
// unambiguous so they don't read as a contradiction.
const uses = [
  { icon: <IconSearch className="h-5 w-5" />, t: "Listing portals and property search", d: "Faceted, map-bounded and radius search over listings at scale, with the ranking and default sort designed to be reviewed for proxy-steering risk rather than left to whatever a library returns - because on housing, the sort order is a fair-housing decision." },
  { icon: <IconLayers className="h-5 w-5" />, t: "MLS and RESO integration", d: "IDX and VOW display built to the RESO Web API and Data Dictionary, under your brokerage or agent MLS agreement, with the feed's display and redistribution rules honoured in the code. We build under your licence, not our own, and we do not scrape a feed we have no right to." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Agent and broker CRM and lead flows", d: "Lead capture, deduplication, routing and activity timelines, with consent capture and STOP handling wired in from the start because a CRM that texts or calls leads brings the outbound-contact rules with it. The consent is the client's to hold; we build the machinery." },
  { icon: <IconServer className="h-5 w-5" />, t: "Property-management front ends", d: "Tenant portals, maintenance and work-order flows, owner dashboards and the operations tooling a manager runs on - the surfaces around leasing and payments, built so the applicant data and the money path stay on licensed, protected rails, not on a system we operate." },
  { icon: <IconFileText className="h-5 w-5" />, t: "Documents, disclosures and e-sign", d: "Offer and disclosure packet assembly, template management, e-signature integration and versioned, auditable trails - and, at closing, wire-fraud-resistant communication: out-of-band verification and no wiring-instruction changes accepted over email, the pattern the FBI's advisories are about." },
  { icon: <IconPin className="h-5 w-5" />, t: "Maps, geo and saved-search alerts", d: "Map and geocoding integration, boundary overlays, clustering, and saved searches with digest or instant alerts - with neighbourhood and school-district overlays designed to be reviewable, because a well-meant good-schools layer can quietly stand in for a protected class." },
];

export function RealEstateScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build for real estate"
            title="The portal, the search and the CRM - not the decision engine"
            sub="Real estate software is mostly search, integration and constraint. The listings live in an MLS you access under licence, the money and the licence sit with a broker, and the interesting engineering is the portal, the search, the CRM and the lead flow - built so a neutral-looking feature can't quietly become a fair-housing problem. A typical engagement is one of these:"
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {uses.map((u) => (
            <div key={u.t} className="card flex items-start gap-4 p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {u.icon}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{u.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{u.d}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                What this page is, and where the build actually lives
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                This page is about the sector, what building for it demands, and which side of the
                fair-housing and licensing lines we stand on. The engagement itself is priced and
                scoped on the service pages:
              </p>

              <ul className="mt-6 grid gap-3">
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      A bespoke portal or platform, scoped before it is priced
                    </span>
                    {" - "}
                    a listing portal, a CRM or an integration layer is custom software, so it enters
                    through{" "}
                    <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
                      where a listings platform is scoped before it&apos;s priced
                    </Link>
                    . Which stack it lands on is a separate question, answered on{" "}
                    <Link href="/technologies" className="font-medium text-brand-500 hover:text-brand-600">
                      how we decide what to build it with
                    </Link>
                    .
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      Rent and closing money is a different, licensed job
                    </span>
                    {" - "}
                    if the product collects rent, holds earnest money or moves closing funds, that
                    rides a licensed processor or escrow provider, not us. It is the same
                    regulated-rails posture as{" "}
                    <Link href="/industries/fintech" className="font-medium text-brand-500 hover:text-brand-600">
                      where rent and closing money actually move
                    </Link>
                    , and the marketing site in front of the portal is{" "}
                    <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
                      our web design and development service
                    </Link>
                    .
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      A store, an app, and AI
                    </span>
                    {" - "}
                    a shop that sells goods with a cart and checkout is{" "}
                    <Link href="/technologies/shopify" className="font-medium text-brand-500 hover:text-brand-600">
                      a Shopify
                    </Link>{" "}
                    or{" "}
                    <Link href="/technologies/woocommerce" className="font-medium text-brand-500 hover:text-brand-600">
                      WooCommerce
                    </Link>{" "}
                    build, not a listing portal; a native property experience is{" "}
                    <Link href="/services/mobile-app-development" className="font-medium text-brand-500 hover:text-brand-600">
                      mobile app development, on honest terms
                    </Link>{" "}
                    - and we have shipped no mobile app for anyone yet. Assistive AI routes to{" "}
                    <Link href="/services/ai-development" className="font-medium text-brand-500 hover:text-brand-600">
                      adding AI to a property product, carefully
                    </Link>
                    , never an automated screening or valuation model of record.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
