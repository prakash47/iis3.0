import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE SIGNATURE - travel-native, and NOT a re-run of any spent move.
//
// Healthcare = holding DATA (custody; virtue = absence). Fintech = holding MONEY + a ledger that
// must reconcile (correctness under motion; failure = a number quietly wrong). Real-estate = a
// discriminatory OUTPUT from neutral code. Travel is none of these: a booking is a PROMISE to
// deliver a seat or a room you don't own, at a place and time far from the click, kept by an
// airline, a hotel or a supplier who is not you. The failure is an UNDELIVERABLE PROMISE landing on
// a traveller already at the airport. TWO faces: (a) the interface promises what the live, shared,
// oversell-prone supplier chain can't deliver, or an honestly-sellable trip becomes undeliverable
// when the operation collapses and the software can't recover (the Southwest meltdown); (b) a single
// bundling feature can quietly turn your client into a regulated package organiser or seller of
// travel carrying insolvency-protection duties (the Thomas Cook collapse) - which we FLAG, not
// trigger. The custody move ("not the seller, no funds") is the reusable family, demoted to the
// Why/Compare/risk-grid and cross-linked to fintech; NEVER the signature.
//
// HARD RULES:
// - Never "compliant"/"accessible"/"secure" as a property of us or software.
// - Never a legal conclusion about the buyer (bundling "may make you", never "makes you"; whether a
//   feature crosses the line is the client's counsel's call).
// - Thomas Cook and Southwest are attributed industry events, cited by SHAPE with NO dollar/penalty/
//   flight/traveller COUNT figures.
// - The word "reconcile" is ABSENT (fintech's discipline word); availability is "reconfirmed against
//   the system of record".
// - "OTA" is never bare - "OpenTravel" is the standard, "Online Travel Agency" the business.
// - Badge disclaim, current + correct entity-kinds: IATA accreditation is the AGENCY's ticketing
//   credential (category error to frame as ours); the NDC IT-provider capability programme is now
//   IATA's Airline Retailing Maturity (ARM) Index, NOT "NDC certification" (retired 2022 - a
//   dead-programme-name trap); Seller of Travel = CA/FL/HI/WA state registration (Iowa REPEALED
//   2020 - do not list it); ATOL = the organiser's; GDS = commercial products under agreement; SOC 2
//   = report; PCI = no certificate. No fees.

const riskReversal = [
  { t: "The interface never promises what the inventory can't deliver", d: "We build availability that reflects what a live, shared supplier system can actually honour at the moment of sale, with holds and confirm-before-commit, not an always-green Book now that oversells a seat two other sellers are draining at the same instant. The pretty always-bookable UI is the failure we design against first, because the traveller finds the gap at the counter, not the checkout." },
  { t: "We build the bundle, and we flag what the bundle can make you", d: "A flight-plus-hotel, one-price feature lifts conversion, and it can also turn your business into a package organiser answerable for insolvency protection across the whole trip. We build the feature and surface that trigger as a question for your counsel before it ships - never a verdict we issue, and never a trigger we ship silently to win a conversion metric." },
  { t: "We don't become your seller of travel, and we don't hold the money", d: "The accreditation, the bond, the trust account and custody of the traveller's money sit with the accredited seller and a licensed processor, in their name, not a system we run. We build the engine that instructs and records the booking and the payment; we are not the seller of travel, the tour operator or the funds custodian. It is the same regulated-rails posture as our fintech work." },
  { t: "The itinerary is built to survive the worst day, not the demo", d: "Cancellations, misconnects, a supplier going dark, a storm that strands a whole schedule: we build the re-accommodation, rebooking, honest-status and refund mechanics that only matter when everything is failing. It is the engineering a demo-driven buyer undervalues right up until the night the operation collapses and the software has to recover." },
  { t: "You own the code and the integrations, and we build to open standards", d: "The repository, the data model and the GDS, NDC, OpenTravel and property-system integrations are yours, on infrastructure in your name, handed over on final payment with no licence back to us. We build to the published standards - NDC and the OpenTravel messaging standard - and reach the commercial surfaces under your agreements, so your own team, or the platform's vendor, can carry it forward without inheriting a booking engine only we understand." },
  { t: "If an existing platform already keeps the promise, we'll say so", d: "If an off-the-shelf booking engine, an Online Travel Agency connection or a channel manager already does what you need, configure it and keep your money; that is a column in the table below, and it is the honest answer more often than a bespoke build. Talking you out of a booking engine you don't need is the only credential we can offer before the first travel build ships, and we'd rather offer it than a borrowed logo." },
];

export function TravelProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>A booking is a promise someone else has to keep, <span className="gradient-text">long after your screen said yes.</span></>}
            sub="We have no travel or hospitality clients, no airline or hotel logos, no booking volumes to quote and no Online Travel Agency or GDS connection in production, and you should weigh that. What we have instead is a fact this sector's prettiest interfaces are built to hide: a booking is not a purchase that completes on your screen, it is a promise to deliver a seat or a room you don't own, at a place and time far from the click, kept by an airline, a hotel or a supplier who isn't you. Below is what we build so the interface never promises what that chain can't deliver, so your client doesn't quietly become the party who owes the whole trip when it breaks, and what building it that way costs us."
          />
        </Reveal>

        {/* THE SIGNATURE. The promise + the two faces (undeliverable, and who-now-owes-it). */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                A booking can fail two ways: the trip can&apos;t be delivered, or bundling it may have quietly made your client the party who owes the whole trip.
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                The first failure is the one a traveller feels. A screen shows &quot;available, book
                now&quot; for a seat or a room that a live, shared, oversold supplier system cannot
                actually deliver, or a booking that was honestly sellable becomes undeliverable when
                the operation collapses and the software cannot recover - the shape of the airline
                whose scheduling system could not re-pair its crews and kept cancelling for days after
                its peers had recovered, until the regulator penalised the consumer-protection failures
                that followed. The gap between what the interface promised and what the world delivered
                lands on a specific person, at a specific counter, far from home. So we treat
                availability as a claim to reconfirm against the system of record at the moment of
                commit, and we build the disruption handling that only matters on the worst day - the
                two things the prettiest booking UIs skip.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">The lucrative thing we refuse.</span>{" "}
                The stickiest position in this sector is becoming the seller or Online Travel Agency of
                record - the merchant of record whose name is on the trip, taking margin on every
                booking forever - and holding the traveller&apos;s money between the click and the
                journey, where the float and the lock-in live. The easy, billable yes is to ship a
                &quot;build your trip, one price&quot; bundle as a pure conversion win and say nothing
                about what it does to your client&apos;s legal status. We decline all three on purpose.
                It is not a contract we were offered and turned down; it is a business model we could
                build and choose not to.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">The second failure is the one nobody sees coming.</span>{" "}
                Bundle a flight and a hotel into a single purchase and one software feature can move
                your client from a shop reselling other people&apos;s travel to the organiser of a
                package, on the hook for the whole trip if any part fails, carrying insolvency-protection
                and bonding duties - the shape of the 178-year-old operator that went into liquidation
                and stranded travellers abroad en masse, repatriated under the scheme that protects
                air-inclusive packages. Whether a given feature crosses that line is a question for your
                counsel and never a verdict we issue - but we build the bundle feature and surface the
                trigger before it ships, rather than ship the conversion win silently and let your
                client discover the status the first time something goes wrong.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Standing on the honest side of both is more work, not less: oversell prevention across
                systems that disagree, disruption handling that only pays off on the day the operation
                collapses, and accessible-reservation engineering the pretty demos skip. None of it
                demos, none of it screenshots, and a buyer undervalues it right up until a traveller is
                stranded or a regulator is on the phone.
              </p>
            </div>
          </div>
        </Reveal>

        {/* THE ALLOCATION WALKTHROUGH. Every "binds X" paired with "and here is what we build". No
            legal conclusion. No rule deadlines (recent airline-consumer rules may be under
            reconsideration). WCAG named version-less. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              Who each rule binds - and what we build for it
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">The package-travel rules and the seller-of-travel and ATOL registrations bind the seller and the organiser, not the software vendor.</span>{" "}
              An organiser of a package is answerable for the whole trip and must hold insolvency
              protection so travellers are refunded and repatriated if it fails; a seller-of-travel
              registration, held by the seller, adds a bond and, where required, a trust account. What
              turns a business into an organiser can be a single bundling feature, which is a question
              for your counsel and not our verdict. What we build is the bundle engine and the surfacing
              of that trigger, never the bond or the accreditation.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">The airline consumer-protection rules bind the carrier and the seller.</span>{" "}
              Refund and disclosure duties, and flight-delay obligations, fall on the airline and the
              party of record, and those rules shift with the regulatory weather, so we anchor on the
              durable duty rather than a deadline. What we build is the refund, rebooking and
              disruption state machine, and the fare and fee disclosure surfaces your own terms drive -
              never the determination of what compensation is owed.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">The accessibility and data rules bind the place of lodging, the carrier and whoever holds the data.</span>{" "}
              A hotel&apos;s reservation service has a specific duty: identify and describe its accessible
              features, let a traveller reserve an accessible room the same way as any other, and hold
              or block that room on request - a requirement the reservation system must be built to
              support, which we build as a method and never call a finished accessible state. Airline
              sites carry their own accessibility rule, and we build to the WCAG success criteria as a
              method there too. Traveller personal and passport data, and any cross-border transfer,
              sit with you and your suppliers; what we build is minimisation, in-region hosting where
              residency is required, and subject-rights mechanics.{" "}
              <span className="font-semibold text-foreground">What you will never get from us is the word compliant</span>{" "}
              - not about accessibility, not about the package rules, not about anything. Compliance is
              a property of how an organisation operates and contracts, attested by people qualified to
              attest it. We do the engineering that makes it reachable, tell you where the cost of each
              gate lands, and leave the attestation where it belongs.
            </p>
          </div>
        </Reveal>

        <Reveal group className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {riskReversal.map((r) => (
            <div key={r.t} className="card p-5">
              <h3 className="font-display text-sm font-semibold text-foreground">{r.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </Reveal>

        {/* THE BADGE DISCLAIM. IATA accreditation = the agency's (category error to frame as ours);
            NDC IT-provider programme is now the ARM Index (NOT "NDC certification" - retired 2022);
            Seller of Travel = CA/FL/HI/WA (Iowa repealed 2020); ATOL = the organiser's; GDS =
            commercial agreements; SOC 2 = report; PCI = no certificate. No fees. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The travel badges, named correctly - and the category errors we won&apos;t commit
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Start with the one this sector gets backwards.{" "}
              <span className="font-semibold text-foreground">IATA accreditation is not a software firm&apos;s credential.</span>{" "}
              It is a ticketing and settlement authority granted to a travel agency or seller - the
              entity that issues tickets and settles through the airline settlement plan - so an
              &quot;IATA-accredited developer&quot; is a category error, the same shape as a
              &quot;REALTOR-certified developer&quot;: the accreditation belongs to the agency or the
              booking platform, and on a build for you it is yours or your platform&apos;s to hold,
              never ours.{" "}
              <span className="font-semibold text-foreground">NDC</span> is next: New Distribution
              Capability is IATA&apos;s open standard for airline retailing, free to build to; the
              industry capability programme for aggregators and IT providers is now IATA&apos;s Airline
              Retailing Maturity Index, held by platforms, and we are not on it - we build to the NDC
              standard.{" "}
              <span className="font-semibold text-foreground">Seller of Travel is not a badge at all</span>{" "}
              - it is a state registration, run by California, Florida, Hawaii and Washington, held by
              the seller, who posts a bond and, where required, maintains a trust account; some of these
              are prerequisites for IATA accreditation.{" "}
              <span className="font-semibold text-foreground">ATOL</span> is the UK counterpart, held
              by the tour operator or organiser, not a developer. The{" "}
              <span className="font-semibold text-foreground">GDS</span> names - Amadeus, Sabre,
              Travelport - are commercial distribution products reached under a commercial agreement,
              not open standards and not trust badges, and access on a build for you rides your
              agreement, not ours. And the general security attestations are what they are everywhere on
              this site: a <span className="font-semibold text-foreground">SOC 2</span> is an attestation
              report a CPA firm writes about an organisation&apos;s controls, not a certificate, and we
              have not undergone one; there is <span className="font-semibold text-foreground">no PCI certificate</span>{" "}
              for anyone to hold, and card data rides your processor, not us. We name these precisely
              because this sector is full of firms that hold an agency accreditation, a GDS agreement or
              nothing at all and let it imply a software credential. We hold none, and what we offer
              instead of a badge is the promise-honest engineering on this page, code and integrations
              you own outright, and a paid discovery before any price.
            </p>
          </div>
        </Reveal>

        {/* THE BRIDGE. Claim the PROBLEM SHAPE, never the sector, in fresh prose. The store is a
            searchable catalog with filtering and a checkout - a booking engine's skeleton. The
            signpost is FRESH (not real-estate's "Here is exactly where the shape breaks, and we
            won't paper over it"). Fresh /work anchor. Fence off supplier integration, oversell,
            disruption, package-organiser status, funds custody. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              What our real work proves here, and where the shape breaks
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Our production work is real, custom web builds - a professional training platform
              rebuild and a financial-services site, both on our work page. The training rebuild is a
              real instance of part of the shape a booking engine is built on: a searchable,
              filterable catalog, structured per-location landing pages for many cities, and an
              enquiry flow a non-technical team ran every day - browse, filter, narrow by place,
              enquire. Strip the vocabulary off that half of a booking flow and the skeleton is under
              it: a course in a city is a catalog item found by place, just as a fare or a room is.
              That much we have built and run.{" "}
              <span className="font-semibold text-foreground">Here is the exact seam where that shape stops being travel.</span>{" "}
              A course catalog is yours and it sits still - when a page says a place exists, nothing
              else is drawing it down. Travel inventory is the opposite: a seat or a room is a live,
              shared, oversell-prone claim on a supplier&apos;s system that other sellers are drawing
              down at the same instant, so &quot;available&quot; is a moment-in-time answer from a
              system that may already disagree with itself. And a catalog enquiry asks for a callback;
              a booking is a promise a third party has to honour at a fixed place and time, when
              weather, a strike or an insolvency may be breaking it. Neither build shipped the parts
              that make travel travel: no GDS, NDC or OpenTravel integration, no
              availability-across-channels or oversell engine, no disruption handling, no
              package-organiser status, and no traveller funds custody. So we claim the
              catalog-and-enquiry skeleton and fence off the rest, plainly:{" "}
              <Link href="/work" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                the filterable, per-location catalog we actually built
              </Link>
              . We have no travel or hospitality clients and no booking system in production. The
              travel-specific part of what we offer is the promise-honest engineering on this page, the
              boundary above it, and a willingness to tell you the thing that costs us the sale.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
