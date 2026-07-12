import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconSearch, IconDatabase, IconLayers, IconServer, IconRefresh, IconCreditCard, IconEye, IconPin, IconCheck, IconChat, IconClock, IconGauge } from "@/components/icons";

// The E-E-A-T CENTREPIECE. Zero travel clients, zero supplier integrations shipped, so the depth of
// what this page knows about travel's actual failure modes - the oversold room, the itinerary that
// can't recover, the promise that lands on a stranded traveller - is the entire substitute for a
// portfolio.
//
// SIX HARD RULES:
// 1. CAPABILITY TENSE ONLY - "we build", never "our travel clients".
// 2. METHOD, NEVER OUTCOME - nothing is "compliant", "accessible", "secure" as a finished property.
//    Card 7 is accessible-reservation support "as a method", never a compliance verdict.
// 3. NO STATISTICS - no booking/GMV counts, no penalty/flight/traveller figures.
// 4. VERSION-CONSERVATIVE - name the standards (NDC, the OpenTravel messaging standard, GDS, PMS);
//    print no version numbers, no rule deadlines. WCAG named version-less.
// 5. NO LEGAL CONCLUSION about the buyer; regimes named only as what we build toward.
// 6. THE WORD "RECONCILE" IS DELIBERATELY ABSENT - it is fintech's signature discipline word.
//    Availability correctness is "reconfirmed against the system of record" + "divergence detection",
//    held as a CAPABILITY, never the signature (idempotency/reconciliation is spent).
const caps = [
  { icon: <IconSearch className="h-5 w-5" />, t: "Booking and search engine", d: "Fast fare, room and rate search over supplier and cached inventory, multi-service itineraries, and a stateful checkout that holds inventory with a short lock and reconfirms availability against the system of record before it commits." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Oversell prevention across channels", d: "Availability treated as a claim reconfirmed at the moment of commit, not a number cached on the page, with divergence detection when the PMS, the channel manager, an Online Travel Agency and the GDS or NDC caches disagree - and a graceful on-request fallback rather than a confirmation that can't be honoured." },
  { icon: <IconLayers className="h-5 w-5" />, t: "GDS and NDC integration front ends", d: "Built to the NDC standard for airline offers and orders and to GDS connectivity under your commercial agreements, mapping fares, ancillaries and the order lifecycle - honouring each channel's display and redistribution terms rather than treating a feed as free to reuse." },
  { icon: <IconServer className="h-5 w-5" />, t: "OpenTravel, PMS and channel-manager integration", d: "Built to the OpenTravel messaging standard and to property-management and channel-manager APIs, keeping content-use and rate-parity constraints intact so rates and restrictions stay consistent across the systems a property already runs." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Itinerary and irrops handling", d: "Disruption modelled as a first-class state: re-accommodation, rebooking, re-broadcast of new times, honest status, and automatic refund and credit paths - the engineering the public record of a major airline's holiday meltdown showed was missing when scheduling software could not recover." },
  { icon: <IconCreditCard className="h-5 w-5" />, t: "Payments on a licensed processor", d: "Card handling that rides a licensed payment processor so the software never holds the traveller's money as principal and the cardholder-data environment stays with the processor, cross-linked to our fintech work - and refunds built to move promptly, which is exactly where the airline meltdown drew a regulator's penalty." },
  { icon: <IconEye className="h-5 w-5" />, t: "Accessible-reservation support, as a method", d: "A data model and UI that can identify and describe a property's accessible features in real detail, let a traveller reserve an accessible room the same way as any other, hold it for those who need it, and remove a held accessible room from other inventory on request - built to the reservation-accessibility requirement as a method, and airline front ends built to the WCAG success criteria, never claimed as a finished accessible state." },
  { icon: <IconPin className="h-5 w-5" />, t: "Maps, geo and proximity", d: "Location and proximity search, geofencing, and routing for properties and points of interest - the map layer a traveller actually navigates by, built with accessible, non-visual alternatives rather than a map that only works if you can see it." },
  { icon: <IconCheck className="h-5 w-5" />, t: "Ratings, reviews and content", d: "Structured review capture, moderation, and media and content pipelines - honest by construction, with no fabricated review counts or planted ratings, because a review system that can be gamed is a liability dressed as social proof." },
  { icon: <IconChat className="h-5 w-5" />, t: "Multi-channel traveller notifications", d: "Email, SMS and push for confirmations, changes, disruptions and refunds - the comms path that has to reach a traveller who is already on the way to the airport, timed and reliable rather than a batch job that arrives after the gate has closed." },
  { icon: <IconClock className="h-5 w-5" />, t: "Multi-currency, i18n and timezones", d: "Currency display and settlement, locale and language, and correct timezone handling across a multi-leg itinerary - a travel-native correctness hazard where an off-by-one date or a naive local time turns a valid booking into a missed flight." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Resilience and rate-limits under load", d: "Caching within each provider's permitted window, back-pressure and rate-limiting against GDS and supplier APIs, and staying standing during a booking rush or a cancellation storm - because the day the system is busiest is exactly the day it must not fall over." },
];

export function TravelCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we build for travel"
            title="Twelve things a travel build turns on"
            sub="Almost none of it is the search box a traveller sees. This is the layer a travel product is actually judged on when the promise has to be kept - and it is where a team that treats availability as a claim and disruption as a first-class state is worth more than a team that treats them as edge cases."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caps.map((c) => (
            <div key={c.t} className="card flex flex-col p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {c.icon}
              </span>
              <h3 className="mt-4 font-display text-sm font-semibold text-foreground">{c.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </Reveal>

        {/* Stated as an APPROACH ("here is how we would build yours"), never a record. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Our default for a travel product:</span>{" "}
              build the search, the booking engine, the supplier integrations and the traveller
              portal, and make the interface honest about the promise it is making. Start by asking
              whether an off-the-shelf engine already does most of it, and integrate rather than
              rebuild when it does. Treat availability as a claim to reconfirm at the moment of commit,
              not a number to cache and hope. Model disruption as a first-class state before the happy
              path is even polished, because the worst day is the real test. Build to the open
              standards - NDC and the OpenTravel messaging standard - and reach the GDS and the
              property systems under your own agreements, honouring their display and redistribution
              rules. Keep the traveller&apos;s money on a licensed processor, not on a system we run. And
              when a feature would bundle a trip into one sale, surface what that does to your regulated
              status before it ships, rather than discover it after the first thing goes wrong.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
