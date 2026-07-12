import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconShield, IconSearch, IconRefresh, IconLock, IconServer } from "@/components/icons";

// THE MYTH-BUSTER dismantles the category default: that a "travel platform" means becoming the
// Online Travel Agency of record - holding the inventory, the money and the seller status. Almost
// never: most briefs are a search, a booking engine, supplier integrations and a traveller portal
// on the client's brand. This is where the reusable "not the seller / no funds" custody family and
// the bundling-status-trigger anti-recommendation live - NOT the signature (that is the
// booking-as-a-promise move, in Proof).
//
// ZERO STATISTICS. No booking/GMV counts, no penalty figures, no flight/traveller counts. The
// Thomas Cook and Southwest events are attributed industry facts with NO numbers - cite the SHAPE.
//
// NEVER A LEGAL CONCLUSION about the buyer. Bundling "CAN" make you a package organiser, never
// "makes you"; whether a feature crosses the line is the client's counsel's call, not our verdict.
// Version-conservative: name the durable regimes (package-travel liability, seller-of-travel
// registration, insolvency protection), print no rule deadlines (recent airline-consumer rules may
// be under reconsideration, the fair-housing-rollback caution).
const pillars = [
  { icon: <IconShield className="h-5 w-5" />, t: "A booking is a promise, not a purchase", d: "A store order is fulfilled from your own warehouse; a booking is a commitment to deliver a seat or a room you don't own, at a place and time far from the click, kept by an airline, a hotel or a supplier who isn't you. The software's honest job is to never let the interface promise what that chain can't deliver - because the person who pays for a false promise is a traveller already at the counter." },
  { icon: <IconSearch className="h-5 w-5" />, t: "Availability is a claim, not a number", d: "A seat or a room is a live, shared, oversell-prone claim on a supplier's system that other sellers are drawing down at the same instant, so cached availability can already disagree with itself. We treat availability as something to reconfirm against the system of record at the moment of commit, hold inventory with a short lock, and degrade to on-request rather than confirm what can't be guaranteed." },
  { icon: <IconShield className="h-5 w-5" />, t: "One feature can change what you are", d: "Bundle a flight and a hotel into one purchase and a single feature can move your business from reselling other people's travel to being the organiser of a package, answerable for the whole trip and carrying insolvency-protection duties if any part fails. We build the bundle and surface that trigger as a question for your counsel - never a verdict we issue, and never a trigger we ship silently to win a conversion." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "The worst day is the real test", d: "Cancellations, misconnects, a storm that strands a whole schedule, a supplier going dark: the engineering that matters is re-accommodation, rebooking, honest status and refund mechanics that keep working when everything else is failing. It is the part a demo-driven buyer undervalues until the operation collapses and the software has to recover." },
  { icon: <IconLock className="h-5 w-5" />, t: "You are not the seller, and we hold no money", d: "The accreditation, the bond, the trust account and custody of the traveller's money sit with a licensed processor and the accredited seller, in their name. A software firm is none of those, and neither are you unless you hold the accreditation. We build the engine that instructs and records the booking and the payment; the licensed roles and the money stay where the licence is." },
  { icon: <IconServer className="h-5 w-5" />, t: "We would rather scope than guess", d: "A travel build is custom software. It enters through a paid discovery that ends in a written scope, a map of where traveller data and money flow and which features would change your regulated status, and a fixed price - because the alternative is a number invented before anyone knew whether the product needed supplier integration, a funds path, or a bundling feature at all." },
];

export function TravelWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Do you need to become an Online Travel Agency - hold the inventory, the money, and sell the trip as the party of record?{" "}
                <span className="gradient-text">Almost never, and one &quot;book it all together&quot; feature is where that line can get crossed by accident.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Most briefs that arrive as &quot;a travel platform&quot; are really a search, a
                booking engine, supplier integrations and a traveller portal on your own brand - and
                those we build. The thing people reach for that changes everything is bundling a flight
                and a hotel into one sale, because it can turn you into a package organiser answerable
                for the whole trip, with insolvency-protection and bonding duties you did not have when
                you simply linked out.{" "}
                <span className="font-semibold text-foreground">When is becoming the seller or organiser of record right?</span>{" "}
                Rarely - and when it is, it is an accreditation, a bond and a trust account, a licensing
                project of its own, not a feature. Whether a specific feature crosses that line is a
                question for your counsel, not a verdict we issue; what we do is build the feature and
                surface the trigger before it ships, so the choice is yours to make with your eyes open.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why travel is different"
            title="What building for travel actually demands"
            sub="Every sector claims to be special. In this one the thing you sell is a promise a third party has to keep in the physical world, the availability you show is a claim on a shared system that may already disagree, and one bundling feature can quietly change what your business legally is."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.t} className="card flex flex-col p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {p.icon}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{p.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </Reveal>

        {/* The anti-recommendation. id="when-not" matches the sibling pages. BOTH HALVES: the
            refusals, then where custom genuinely wins. No legal conclusion about the buyer. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;d tell you not to build, and when we&apos;d turn the work down
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              If an off-the-shelf booking engine, an Online Travel Agency connection or a channel
              manager already does what you need, configure it and keep your money - that is a column
              in the table below, and it is the answer more often than a bespoke build. We will not
              become your seller of travel or your package organiser of record, we will not hold the
              traveller&apos;s money as principal, and if that regulated role is what your product
              needs at its core, you want an accredited seller and counsel set up for it, not us. If a
              brief may turn on an accreditation, a bond or a trust account, we flag it as a question
              for your counsel rather than pretend software answers it. And if procurement gates on an
              accreditation, a SOC 2 report or a signed attestation we cannot offer, we do not clear
              that gate.{" "}
              <span className="font-semibold text-foreground">Where a custom build genuinely wins:</span>{" "}
              when the search, the booking flow, the supplier integrations and the traveller portal are
              the product and an off-the-shelf engine fights it. That is{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
                where a travel build is scoped before it&apos;s priced
              </Link>
              , and we will make that case with you in writing. Talking you out of a booking engine you
              don&apos;t need is the only credential we can offer before the first travel build ships.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
