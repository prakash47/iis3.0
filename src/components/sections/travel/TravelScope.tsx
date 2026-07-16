import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconSearch, IconLayers, IconServer, IconRefresh, IconPin, IconCreditCard, IconArrow } from "@/components/icons";

// CAPABILITY TENSE ONLY. Zero travel/hospitality clients, zero supplier integrations shipped, so
// every card describes what a job of this shape involves and how we would approach it - never "the
// booking engines we run" or "our travel clients". The word "app" stays out of the headings.
//
// EVERY CARD IS ON THE SOFTWARE SIDE OF THE REGULATED LINE. None of them makes us the seller of
// travel, the accredited agency, the package organiser, or the funds custodian. GDS/PMS/channel
// access is "under your agreement"; NDC and OpenTravel are the OPEN standards we build to.
//
// THE STORE HAND-OFF: a NEW goods-selling brief routes to Shopify/Woo; the bridge (in Proof) claims
// OUR PAST store as the browse/filter/select/pay skeleton. Two different subjects, kept unambiguous.
const uses = [
  { icon: <IconSearch className="h-5 w-5" />, t: "Booking and search engines", d: "Fast fare, room and rate search over supplier and cached inventory, multi-service itineraries, and a stateful checkout that holds inventory with a short lock and reconfirms availability against the system of record before it commits - rather than an always-green Book now that oversells." },
  { icon: <IconLayers className="h-5 w-5" />, t: "GDS, NDC and OpenTravel integrations", d: "Front ends and adapters built to the NDC standard for airline offers and orders and to the OpenTravel messaging standard, with GDS connectivity under your commercial agreements - mapping fares, ancillaries and the order lifecycle while honouring each channel's display and redistribution terms." },
  { icon: <IconServer className="h-5 w-5" />, t: "Hotel PMS and channel-manager front ends", d: "Property-management and channel-manager interfaces and integrations that keep rate-parity and content-use constraints intact, so availability, rates and restrictions stay consistent across the systems a property already runs rather than drifting apart." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Itinerary and disruption (irrops) tooling", d: "Disruption modelled as a first-class state, not an afterthought: re-accommodation, rebooking, honest status, and the refund and credit mechanics that only matter on the worst day - a cancellation storm, a strike, a supplier going dark. This is the engineering a demo never shows." },
  { icon: <IconPin className="h-5 w-5" />, t: "Traveller and agent portals, maps and content", d: "Traveller and agent portals, location and proximity search, structured reviews and content pipelines, and the multi-channel notifications - confirmations, changes, disruptions, refunds - that reach a traveller who is already on the way to the airport." },
  { icon: <IconCreditCard className="h-5 w-5" />, t: "Payments on a licensed processor", d: "Card handling that rides a licensed payment processor so the software never holds the traveller's money as principal and the card-data environment stays with the processor - the same regulated-rails posture as our fintech work, and any bonding or trust-account duty stays with the accredited seller." },
];

export function TravelScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build for travel"
            title="The engine and the integrations - not the seller of record"
            sub="Travel software is mostly search, integration and the honest handling of a promise. The inventory belongs to suppliers, the money and the licence sit with an accredited seller, and the interesting engineering is the booking engine, the integrations and the disruption handling - built so the interface never promises what the chain can't deliver. A typical engagement is one of these:"
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
                seller-of-record and money lines we stand on. The engagement itself is priced and
                scoped on the service pages:
              </p>

              <ul className="mt-6 grid gap-3">
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      A bespoke engine or platform, scoped before it is priced
                    </span>
                    {" - "}
                    a booking engine, a reservation system or an integration layer is custom software,
                    so it enters through{" "}
                    <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      where a travel build is scoped before it&apos;s priced
                    </Link>
                    . Which stack it lands on is a separate question, answered on{" "}
                    <Link href="/technologies" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      how we decide what to build it with
                    </Link>
                    .
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      The traveller&apos;s money is a licensed, separate job
                    </span>
                    {" - "}
                    payments, deposits and refunds ride a licensed processor, and any bonding or
                    trust-account duty stays with the accredited seller - not us. It is the same
                    regulated-rails posture as{" "}
                    <Link href="/industries/fintech" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      the way we build for fintech
                    </Link>
                    , and the marketing site in front of the engine is{" "}
                    <Link href="/services/web-design-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
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
                    <Link href="/technologies/shopify" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      a Shopify
                    </Link>{" "}
                    or{" "}
                    <Link href="/technologies/woocommerce" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      WooCommerce
                    </Link>{" "}
                    build, not a booking engine; a native travel experience is{" "}
                    <Link href="/services/mobile-app-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      a mobile build, on honest terms
                    </Link>{" "}
                    - and we have shipped no mobile app for anyone yet. Assistive AI routes to{" "}
                    <Link href="/services/ai-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      adding AI to a travel product, carefully
                    </Link>
                    .
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
