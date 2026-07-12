import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. Plain strings, no anchors - the same array feeds
// the schema and the <details>, so FAQPage count == visible count automatically.
//
// SELF-COMPETITION GUARD. DELIBERATELY OMITTED: any stack-agnostic "what do you build with" (spent
// 5x+); "do you do staff augmentation"; generic "how long does it take"; generic "do you build a
// mobile app" (folded into Scope); generic AI. Ownership and cost are kept ONLY because the answers
// are genuinely GDS/booking/funds-shaped, not paraphrases of the sibling nodes. The ADA answer is
// the SPECIFIC lodging-reservation rule + airline-site rule, deliberately distinct from real-estate's.
//
// GUARDRAILS ENFORCED:
// - Never "compliant"/"ADA compliant"/"PCI compliant"/"IATA certified"/"accessible"/"secure" as a
//   property of us or software.
// - Never a legal conclusion about the buyer (bundling "can/may" make you an organiser, never
//   "makes you"; whether you need a registration is your counsel's call).
// - Thomas Cook / Southwest cited by SHAPE, no count/penalty figures. No datable regulatory numbers.
// - "OTA" never bare - "OpenTravel" is the standard, "Online Travel Agency" the business.
// - The word "reconcile" is absent (fintech's word); availability is "reconfirmed against the system
//   of record". Seller of Travel = CA/FL/HI/WA (Iowa repealed). NDC = build to the standard.
// - Funds route to the fintech "regulated rails" framing; "app" never a delivered capability.
const faqs = [
  {
    question: "Does bundling a flight and a hotel make me a package organiser?",
    answer:
      "It can, and that is exactly why we flag it rather than ship it silently. Under the package-travel rules, combining a flight and a hotel into one purchase can turn a business from a reseller of other people's travel into the organiser of a package, answerable for the whole trip and required to hold insolvency protection so travellers are refunded and repatriated if it fails. Even a click-through where you pass a traveller's details to a second supplier within a short window can count. Whether a specific feature crosses that line is a question for your counsel, not a verdict we issue - so what we do is build the bundling feature and surface the trigger before it ships, so the choice is yours to make with your eyes open, not a status you discover after something goes wrong.",
  },
  {
    question: "Do I need a Seller of Travel registration?",
    answer:
      "That is a determination for your counsel, not for us. What we can tell you is the shape: a handful of US states - California, Florida, Hawaii and Washington - run seller-of-travel registrations for businesses that sell travel to their residents, held by the seller, usually with a bond and, where required, a trust account, and some are prerequisites for other travel credentials. The registration and the bond are the seller's, never the software vendor's. We build the booking engine, the payment flow on a licensed processor and the records the seller needs, and we flag when a product looks like it is stepping into seller-of-record territory - but whether you must register is your counsel's call.",
  },
  {
    question: "Do I need IATA accreditation to build a booking site?",
    answer:
      "Not to build one, and IATA accreditation is not a software firm's credential in any case. It is a ticketing and settlement authority granted to a travel agency or seller - the entity that issues airline tickets and settles through the airline settlement plan - so an IATA-accredited developer is a category error. Many booking products avoid the question entirely by working through a platform or consolidator that holds its own accreditation and settlement relationship. On a build for you, any accreditation is yours or your platform's to hold for ticketing authority, never ours; we build the software that talks to those systems under your agreements.",
  },
  {
    question: "Can you integrate GDS, NDC or a channel manager?",
    answer:
      "That is most of the work, and we are precise about what it means. NDC and the OpenTravel messaging standard are open, published standards we build to - the same way we build to the published standards in every sector. A GDS like Amadeus, Sabre or Travelport is a commercial product reached under your own agreement, and a channel manager or a property system is integrated under its terms - so we build the front ends and adapters that talk to them, honouring each channel's display and redistribution rules, under your agreements rather than ours. We have not shipped a GDS or NDC integration in production, and we say so - what we bring is literacy in the standards and the discipline to build within your agreements, not a claimed portfolio.",
  },
  {
    question: "What happens when a supplier or tour operator goes insolvent?",
    answer:
      "That is the risk the insolvency-protection rules exist for, and the reason bundling changes your status. When a large tour operator collapsed a few years ago, travellers were stranded abroad and had to be repatriated under the scheme that protects air-inclusive packages - which is only available because the organiser was covered. The protection is the seller's or organiser's to hold, not something software provides. What we build is the software that keeps the booking record, the traveller communications and the refund and rebooking paths honest and available, so that when a supplier fails, your team can act on accurate state rather than reconstruct it - and we flag, early, when a feature would make you the organiser who has to carry that protection.",
  },
  {
    question: "Do you hold the traveller's money?",
    answer:
      "No. Payments, deposits and refunds ride a licensed payment processor, in the processor's and the seller's names - not a system we operate - and any bonding or trust-account duty stays with the accredited seller. We are neither the seller of travel nor the funds custodian. It is the same posture as our fintech work: the software instructs and records the movement on regulated rails, the cardholder-data environment stays with the processor, and the money and the licensed role stay where the licence is. If your product needs to hold traveller funds as a principal, that is a licensing question for your counsel before it is a build for us.",
  },
  {
    question: "How do you prevent overselling a room or a seat?",
    answer:
      "By treating availability as a claim, not a number. A seat or a room is a live, shared claim on a supplier's system that other sellers are drawing down at the same instant, so a number cached on the page can already be wrong. We hold inventory with a short lock during checkout, reconfirm availability against the system of record at the moment of commit, detect when the property system, the channel manager, an Online Travel Agency and the airline caches disagree, and degrade to on-request rather than confirm what cannot be guaranteed. The always-green Book now that oversells is the failure we design against first, because the traveller finds the gap at the counter, not the checkout.",
  },
  {
    question: "Is my hotel booking site covered by the ADA?",
    answer:
      "A hotel's reservation service carries a specific accessibility duty, and it is more concrete than a general web-accessibility question. The reservation system must be able to identify and describe a property's accessible features in enough detail for a traveller to judge whether a room meets their needs, let them reserve an accessible room the same way as any other, and hold or block that room on request - and hotel booking systems are a heavy target of accessibility litigation for exactly this. Airline sites carry their own accessibility rule with its own standard. We build the reservation system so it can do all of that, and build to the WCAG success criteria as a method, but we will not tell you a site is accessible or ADA compliant as a finished state - whether it meets a given obligation is your counsel's determination.",
  },
  {
    question: "Can you build a site like Booking.com or Expedia?",
    answer:
      "The search, the booking engine, the supplier integrations, the traveller portal and the itinerary handling - yes, that is the shape we build, and it is close to the searchable catalog and checkout we have shipped. What those platforms also are, and what we would not make you by default, is the Online Travel Agency of record: the merchant of record for the trip, holding the money and, when they bundle, the package-organiser liability. That is a regulated business - an accreditation, a bond, a trust account - not a feature, so a Booking.com-like experience is squarely in scope while becoming the seller of record is a separate decision we would map with you and route to your counsel, not switch on quietly.",
  },
  {
    question: "What about flight delays, cancellations and refunds?",
    answer:
      "The obligations there - refund duties, flight-delay compensation, disruption care - fall on the airline and the party of record, and the specific rules shift with the regulatory weather, so we build to the durable duty rather than a deadline. What we build is the disruption engineering that only matters on the worst day: re-accommodation and rebooking, honest status, and refund and credit mechanics that move promptly, which is precisely where a major airline's holiday meltdown drew a regulator's penalty. The determination of what compensation is owed is the carrier's and your counsel's; the software that makes acting on it fast and accurate is ours to build.",
  },
  {
    question: "Do you hold SOC 2, or a PCI certificate?",
    answer:
      "No, and it is worth being precise about what each is. A SOC 2 is an attestation report a CPA firm writes about an organisation's controls, not a certificate you pass, and we have not undergone one. There is no PCI certificate at all for anyone to hold - card data rides your processor, whose environment carries the PCI scope, not ours. And IATA accreditation, which this sector sometimes waves as if it were a tech credential, belongs to the agency or seller for ticketing authority, not to a software firm. We complete your security questionnaire honestly, including the parts where the answer is no, and evidence the parts that are genuinely ours - the access model, the data-flow map, the availability and disruption design. If procurement gates on attestations or an accreditation we cannot offer, that is not us, and you should choose a firm that can.",
  },
  {
    question: "Who owns the code, and who owns the GDS and NDC integrations?",
    answer:
      "You own the code outright - the repository, the data model, and the GDS, NDC, OpenTravel and property-system integrations, on infrastructure in your name, handed over on final payment with no licence back to us. The supplier connections themselves ride your commercial agreements with those systems, not ours, so nothing about the integration is locked to us. We build to the open standards deliberately, so that your own team, or a platform's vendor, can carry the work forward without paying us rent, and so the thing most critical to a travel product - the booking engine, the availability logic and the disruption handling - is fully yours and fully inspectable rather than a black box only we understand.",
  },
  {
    question: "Have you built travel software before?",
    answer:
      "No travel or hospitality work, and we will not dress that up. We have no travel clients, no airline or hotel logos and no booking system in production, and you should weigh that. Our production work is a custom, full-stack online store on its own backend - a searchable catalog with filtering and a select-and-pay checkout, which is the honest skeleton a booking engine is built on - and a corporate site. What we offer instead of a portfolio is literacy in the standards, the promise-honest engineering on this page, and a willingness to tell you which regulated roles to route to an accredited seller and your counsel rather than build. If a travel portfolio is your deciding criterion, there are firms who have one, and we would rather you knew that now.",
  },
  {
    question: "What does a travel build cost?",
    answer:
      "We publish one number here and refuse to invent the other. Every agency page in this sector prints a custom-travel price band, and none of them can know whether your product needs GDS or NDC integration, a funds path, disruption handling, or a bundling feature that would change your regulated status - which is the biggest driver of the cost and the risk. So a travel build enters through a paid Discovery Sprint from $1,000, which is one to two weeks and ends in a written scope, a map of what the software can honestly promise and which features touch your status, and a fixed price for the build, credited toward it. If discovery concludes an off-the-shelf engine already does the job, you keep the scope and the recommendation, and the expensive engagement never happens.",
  },
  {
    question: "The airline and travel rules keep changing - do I still need to build for them?",
    answer:
      "Yes, and it is why our method does not lean on whichever rule is current this year. Some airline-consumer rules have shifted and been reconsidered recently, but the durable duties do not switch off with an administration: a package organiser still owes insolvency protection, a hotel's reservation service still owes accessible-room information, a carrier still owes care and refunds on its own terms, and travellers still sue and states still enforce. So we build to the durable duty and the honest mechanics - accurate availability, disruption handling, refund paths, accessible reservations - rather than to a deadline that can move. Whether any specific rule applies to you is your counsel's call, and we build the software so you can act on their answer either way.",
  },
];

export function TravelFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Building for travel, answered" />
        </Reveal>
        <Reveal className="mt-9">
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-foreground">
                  {f.question}
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-brand-500 transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
