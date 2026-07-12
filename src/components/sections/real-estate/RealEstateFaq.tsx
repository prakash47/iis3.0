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
// are genuinely MLS/fair-housing/funds-shaped, not paraphrases of the sibling nodes.
//
// GUARDRAILS ENFORCED:
// - Never "fair-housing compliant"/"ADA compliant"/"accessible"/"secure" as a property of us/software.
// - Never a legal conclusion about the buyer (a feature "violates" the FHA, "you are a broker").
// - Named-company conduct stated as ALLEGED; the DOJ point attributed to the SafeRent matter.
// - Durable anchor: statute (FHA) + Supreme Court (Inclusive Communities) + private settlements +
//   state law - NOT the withdrawn HUD guidance.
// - ZERO statistics; no dollar/penalty/write-down figures.
// - RESO certification EXISTS (branch a); MLS access is a licence; REALTOR is a membership; SOC 2 = report.
// - Funds/escrow route to the fintech "regulated rails" framing; "app" never a delivered capability.
const faqs = [
  {
    question: "Can an algorithm violate the Fair Housing Act?",
    answer:
      "Yes - and this is the part most of this sector builds past. The Fair Housing Act reaches facially neutral policies that produce a disparate impact on a protected class, which the Supreme Court affirmed in the Inclusive Communities decision. A search filter, a ranking, a screening score or an ad-targeting choice is exactly that kind of neutral-looking policy, so it can produce a discriminatory outcome with no one intending one. And the responsibility reaches the software: in the SafeRent tenant-screening matter the Department of Justice argued that companies whose algorithms screen tenants are not absolved from liability when their practices disproportionately deny people of color housing, and the Meta housing-ad settlement made the same point about ad delivery. So we design search, ranking and lead logic against disparate impact and test what it outputs - as a method, not a promise.",
  },
  {
    question: "Is my listing site fair-housing compliant?",
    answer:
      "That question has no honest yes from us or anyone else, because compliance is not a property a developer bakes into a site - it is a matter of how the housing business operates and is advised, and whether a specific feature creates disparate impact is a question for your counsel and a fair-housing expert. What we will not do is hand you a filter or a ranking that quietly creates a problem and call it neutral. What we build is search, ranking and ad logic designed against disparate impact, with the proxy variables reviewed, the outputs tested across groups, a human in the loop on adverse decisions, and an auditable trail - the engineering that makes fairness reachable, without the word compliant, which we do not use about ourselves or software.",
  },
  {
    question: "Can you build automated tenant screening or an automated valuation model?",
    answer:
      "Not the automated approve-or-decline of record, and not the valuation the market acts on - those are the two products we refuse to build, because they are where the fair-housing and model-risk liability is concentrated. The SafeRent matter is what the first looks like when a screening score is alleged to produce disparate impact, and the Zillow iBuying wind-down is what the second looks like when a valuation model is confidently wrong at scale. What we build is the machinery around them: application intake, review queues, a third-party estimate or background result shown with its uncertainty to a human who decides. The consequential call stays with a person and a validated provider, not a black box we shipped.",
  },
  {
    question: "Do I need MLS or IDX access, and can you integrate it?",
    answer:
      "If your portal shows live listings, yes - and the access is a licence, not something we hold. MLS listing data reaches your site through IDX or VOW under an agreement a broker or agent holds, with display and redistribution rules attached. We build the integration to the open RESO Web API and Data Dictionary, under your MLS agreement, and we honour its rules in the code rather than scrape a feed nobody has the right to redistribute. We have not shipped an MLS integration in production, and we say so - what we bring is literacy in the published standards and the discipline to build within your licence, not a claimed portfolio.",
  },
  {
    question: "Can you build a site like Zillow?",
    answer:
      "The portal, the search, the map and the saved-search alerts - yes, that is the shape we build, and it is close to the searchable catalog and lead flow we have shipped in production. What made Zillow's own story a cautionary one we would not repeat is the automated valuation and iBuying model, which we do not build as a price of record. So a Zillow-like listing experience is squarely in scope; a Zillow-like automated valuation that a company prices and acts on is not, and we would point you to a validated provider and a model-risk specialist for that part rather than take it on.",
  },
  {
    question: "Are you a RESO-certified vendor?",
    answer:
      "No, and we will be precise because this sector gets it backwards. RESO certification does exist - the Real Estate Standards Organization certifies MLSs that pass its tests, and it runs a Data Dictionary certification a technology vendor's platform can hold, which some large data providers have earned. We are not a RESO-certified vendor. What we do is build to the RESO Web API and Data Dictionary, which are open, published standards anyone can build to for free, and on a build for you any vendor certification would be yours to earn as the platform's owner. Separately, we hold no SOC 2 report and no ISO 27001, and REALTOR is a membership designation for agents and brokers, not a credential a software firm can hold.",
  },
  {
    question: "Can your software collect rent, or hold earnest money and escrow?",
    answer:
      "We build the flows and the dashboards, but we do not hold the money. Rent, earnest money and closing funds ride a licensed processor, an escrow provider or a broker trust account, in their name - not a system we operate - and we are neither the broker nor the escrow agent. It is the same posture as our fintech work: the software instructs and tracks the movement on regulated rails, and the funds and the licensed role stay where the licence is. If your product needs to hold funds as a principal, that is a licensing question for your counsel before it is a build for us.",
  },
  {
    question: "How do you handle wire fraud at closing?",
    answer:
      "As a build requirement, not a warning label. Real-estate wire fraud - where a closing's wiring instructions are changed at the last minute by an attacker - is a documented pattern the FBI's advisories are about, and the defenses are things software can enforce: out-of-band verification of wiring instructions, a hard rule against accepting instruction changes over email, prominent warning banners at the moment of transfer, immutable logs of any change, and email hardening. We build those into the closing flow rather than trust that everyone will be careful, because carefulness is exactly what the fraud is designed to exploit.",
  },
  {
    question: "Is a real-estate website covered by the ADA?",
    answer:
      "A commercial real-estate site is a place of public accommodation, and while there is no formal web-conformance rule for commercial sites the way there is for state and local government, courts reference the WCAG guidelines in accessibility cases and this sector has seen real litigation. We build to WCAG as a method - semantic structure, keyboard operability, screen-reader labelling, contrast, and a non-visual path through a map-driven search, which is easy to forget on a listings site - and verify on real assistive technology. We will not tell you a site is accessible or ADA compliant as a finished state; whether it meets a given obligation is a determination for your counsel, and we build to the method that makes it reachable.",
  },
  {
    question: "Our CRM texts and calls leads - does that bring rules with it?",
    answer:
      "Yes, and it is worth designing for from the start. Outbound calls and texts to leads carry consent rules, and the software is where consent is captured, recorded and honoured. We build the consent capture, the STOP and do-not-call handling, and the records that show a given contact was permitted - and the consent itself is yours to hold and to be able to prove, not ours. Whether a specific campaign meets the current standard is a question for your counsel; what we build is the machinery that lets you operate within it rather than discover the gap after the fact.",
  },
  {
    question: "Who owns the code, and who owns the MLS integration?",
    answer:
      "You own the code outright - the repository, the data model, and the MLS, map, CRM and payment integrations, on infrastructure in your name, handed over on final payment with no licence back to us. The listing data itself was never ours or yours to own; it stays licensed from the MLS under your agreement. We build to the published RESO standards deliberately, so that another team, or your MLS's own vendor, can carry the integration forward without paying us rent, and so the thing most critical to a portal - the search, the ranking and the fair-housing design behind them - is fully yours and fully inspectable rather than a black box only we understand.",
  },
  {
    question: "Have you built real estate software before?",
    answer:
      "No real-estate or proptech work, and we will not dress that up. We have no real-estate clients, no MLS integration in production and no proptech system live, and you should weigh that. Our production work is a custom, full-stack online store on its own backend - a searchable catalog with filtering and a lead-and-transaction flow, which is the honest skeleton a listing portal is built on - and a corporate site. What we offer instead of a portfolio is literacy in the RESO standards, the disparate-impact discipline on this page, and a willingness to tell you which decisioning to route to a validated provider rather than build. If a proptech portfolio is your deciding criterion, there are firms who have one, and we would rather you knew that now.",
  },
  {
    question: "What does a real-estate build cost?",
    answer:
      "We publish one number here and refuse to invent the other. Every agency page in this sector prints a custom-real-estate price band, and none of them can know whether your product needs MLS access, a rent path, a screening surface or fair-housing testing across a search and ranking - which is the biggest driver of the cost. So a real-estate build enters through a paid Discovery Sprint from $1,000, which is one to two weeks and ends in a written scope, a map of where the data and money flow and which features touch fair-housing risk, and a fixed price for the build, credited toward it. If discovery concludes an off-the-shelf portal already does the job, you keep the scope and the recommendation, and the expensive engagement never happens.",
  },
  {
    question: "What are IDX, VOW and the RESO Web API?",
    answer:
      "They are the plumbing of listing data. An MLS is the shared database of listings a group of brokers maintains; IDX (Internet Data Exchange) and VOW (Virtual Office Website) are the two ways an MLS lets a broker's site display those listings, each with its own display and, for VOW, registration rules. The RESO Web API and the RESO Data Dictionary are the open, published standards that define how the data is exchanged and what each field means, so a portal built to them is portable rather than locked to one MLS's quirks; RETS is the older predecessor we migrate off. Naming these is not a claim we have shipped an integration - it is the domain literacy that lets us build one correctly under your licence.",
  },
  {
    question: "The federal disparate-impact rules seem to be changing - does that let me off?",
    answer:
      "Not in a way you would want to rely on, which is why our method does not depend on the current guidance. Federal agency posture on disparate impact has shifted, and some guidance has been withdrawn - but the Fair Housing Act is a statute, the Supreme Court held disparate-impact claims cognizable under it in Inclusive Communities, private plaintiffs bring these cases regardless of who runs an agency (SafeRent settled with one), disparate-treatment claims are untouched, and many states have their own fair-housing laws with disparate-impact provisions. So designing against disparate impact is prudent risk engineering whatever the regulatory weather, and we treat it that way rather than as something that switches off with an administration. Whether any specific obligation applies to you is your counsel's call.",
  },
];

export function RealEstateFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Building for real estate, answered" />
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
