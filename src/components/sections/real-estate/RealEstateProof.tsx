import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE SIGNATURE - and the one most at risk of reading as "healthcare/fintech with houses".
//
// The reusable industry family is "position relative to the regulated binding". Healthcare drew the
// custody boundary (its virtue is ABSENCE - "the data we never store"). Fintech is not the bank and
// its ledger must reconcile (its virtue is CORRECTNESS UNDER MOTION - "the number quietly wrong").
// Real estate's risk is NEITHER custody NOR reconciliation: it is that a FAIR HOUSING violation can
// be an emergent property of the SOFTWARE ITSELF - a search filter, a ranking, a screening score,
// an ad-targeting choice can produce a discriminatory OUTCOME with no intent, and the liability
// reaches the tool (SafeRent, Meta). Fintech's bad code yields a wrong NUMBER; real-estate's yields
// a discriminatory OUTPUT. That is the signature. The custody move ("no funds, not the broker") is
// deliberately demoted to the Why/Compare/risk-grid family and cross-linked to fintech, NEVER the
// signature.
//
// DURABLE ANCHOR (the honesty crux): the fair-housing risk rests on the STATUTE (the Fair Housing
// Act) and the SUPREME COURT (Texas Dept. of Housing v. Inclusive Communities, 2015, which held
// disparate-impact claims cognizable under the FHA), plus the private SETTLEMENTS (SafeRent 2024,
// Meta 2022) - all court facts. HUD's 2024 AI guidance was WITHDRAWN in 2025 and the federal
// disparate-impact posture rolled back, so the page must NOT cite that guidance as current; it
// anchors on statute + Court + settlements, which no administration can withdraw, and frames the
// method as risk engineering that does not depend on one administration's guidance.
//
// HARD RULES:
// - Never "compliant"/"fair-housing compliant"/"accessible"/"secure" as a property of us or software.
// - Never a legal conclusion about the buyer (a feature "violates" the FHA, "you are a broker").
// - Named-company conduct stated as ALLEGED (SafeRent and Meta both settled with NO admission).
// - The DOJ quote is attributed to the SafeRent MATTER in PAST TENSE, not "current DOJ policy".
// - No dollar/penalty/write-down figures. RESO certification EXISTS (branch a), MLS is a licence not
//   a badge, REALTOR is a membership, SOC 2 = report, ISO 27001 = org cert. No fees.

const riskReversal = [
  { t: "Fairness is tested in the output, not promised in the pitch", d: "We test what search, ranking and lead routing actually produce across groups, and we review the variables that can stand in for a protected class even when the protected field is nowhere in the data - ZIP code, a good-schools score, signals that reveal familial status. Neutral inputs do not guarantee neutral outputs; that is the failure these cases are made of, so we design against disparate impact and check for it rather than write the word fair in a spec." },
  { t: "We won't build the approve/decline, or the price of record", d: "The two products that carry the fair-housing and model-risk liability - the automated score that decides an applicant, and the valuation the market acts on - are the two we refuse to build. We build the intake, the review queues and the surfaces around a validated third-party screening or estimate, with a human on the consequential call, so the decision a court or a regulator asks about stays with a person and a validated provider, not a black box we shipped." },
  { t: "You own the code, the data and the integrations", d: "The repository, the data model, and the MLS, map and CRM integrations are yours, on infrastructure in your name, handed over on final payment with no licence back to us. We build to the published standards - the RESO Web API and Data Dictionary, IDX and VOW - so another team, or your MLS's own vendor, can carry it forward without paying us rent." },
  { t: "The listing data rides your MLS agreement, honoured in code", d: "MLS listing data is licensed, not owned: IDX and VOW access come through an agreement a broker or agent holds, and it carries display and redistribution rules. We build under your MLS agreement, not our own, and we honour its rules in the software rather than scrape a feed we have no right to - because a redistribution breach puts your licence at risk, not ours." },
  { t: "No funds on our rails, and we're not the broker", d: "Earnest money, rent and closing funds ride a licensed processor, an escrow provider or a broker trust account, in their name - not a system we operate. We build the UIs that instruct those movements and the dashboards that track them; we do not hold the money and we are not the broker or the escrow agent. It is the same regulated-rails posture as our fintech page." },
  { t: "Procurement, answered truthfully", d: "No RESO vendor certification, no SOC 2 report and no ISO 27001 of our own - and REALTOR is a membership designation we cannot hold, not a software credential. We complete your security questionnaire honestly, including the parts where the answer is no, and evidence the parts that are ours: the access model, the disparate-impact testing method, the data-flow map. If procurement needs a supplier who carries those attestations, that is not us, and we will say so plainly." },
];

export function RealEstateProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>In real estate, a feature can discriminate <span className="gradient-text">without anyone deciding to.</span></>}
            sub="We have no real-estate clients, no proptech logos, no MLS integration in production and no fair-housing audit to wave, and you should weigh that. What we have instead is a fact most of this sector builds straight past: in housing, a search filter, a ranking, a screening score or an ad-targeting choice can produce a discriminatory outcome with nobody intending one - and when it does, the responsibility reaches the tool that produced it, not only the landlord who used it. Below is what we build so fairness is designed into the logic, the two products we refuse to build because that is where the liability is made, and what refusing them costs us."
          />
        </Reveal>

        {/* THE SIGNATURE. Leads with the emergent-discrimination mechanism (the unspent core),
            anchored on statute + Supreme Court + settled cases, not withdrawn guidance. */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                A neutral-looking filter is still a fair-housing decision - which is why the fairness has to live in the logic, not in a paragraph beside it.
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                The discrimination people picture in housing is a person choosing to exclude. The
                failure this page is built around is quieter and harder to see: a filter that hides
                voucher-accepting listings, a ranking that buries homes in some neighbourhoods, a
                screening score trained on data that stands in for race, an ad-delivery model that
                shows a listing to one group and not another. Each can produce a disparate impact
                under fair-housing law with no one deciding to discriminate, because the
                discrimination is an emergent property of the logic. This is not a passing regulatory
                mood: the Fair Housing Act is a statute, and the Supreme Court held in Inclusive
                Communities that a facially neutral policy can be unlawful if it produces a disparity,
                which a change of federal guidance cannot repeal. And the public record is now explicit
                that the responsibility reaches the software. In the SafeRent tenant-screening matter
                the Department of Justice argued, in a 2023 statement of interest, that companies whose
                algorithms and data screen tenants &quot;are not absolved from liability when their
                practices disproportionately deny people of color access to fair housing
                opportunities&quot; - and the Meta housing-ad settlement made the same point about ad
                delivery and targeting. So we treat design-against-disparate-impact as the first
                requirement in search, ranking, listings, leads and ads, not a fairness paragraph
                bolted on at the end.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">The lucrative thing we refuse.</span>{" "}
                The two products where that liability is most concentrated are also two of the
                stickiest, most recurring businesses in this sector: the automated
                tenant-screening-of-record - the approve-or-decline score a landlord runs on every
                applicant and pays for per application, forever - and the automated
                valuation-of-record, the model that sets a price a company then acts on. We decline
                both on purpose. It is not a contract we were offered and turned down; it is a
                business model we could build and choose not to. The SafeRent matter is what the first
                one looks like when a screening score is alleged to produce disparate impact against
                Black and Hispanic applicants and voucher-holders; it settled with no admission of
                liability, and its own relief stopped the tool from issuing approve or decline
                recommendations unless a model is validated for fairness by independent experts, and
                had it return background information rather than a score. The Zillow iBuying wind-down
                is what the second looks like when a confident valuation model is wrong at scale and it
                costs real money. We build the surfaces around both - application intake, review
                queues, a third-party estimate shown with its uncertainty - and we do not build the
                model that issues the decision or the price of record.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">The harder engineering we take on.</span>{" "}
                Standing on the fair side of that line is more work, not less. We identify and review
                the proxy variables that stand in for protected classes even when the protected field
                appears nowhere in the data - ZIP code, good-schools scoring, signals that reveal
                familial status, name-derived inferences. We test what the search and the ranking
                actually output across groups instead of trusting that neutral inputs produce neutral
                results, because the whole lesson of these cases is that they do not. We keep a human
                in the loop on consequential decisions, build the adverse-action and explainability
                surfaces a denied applicant is owed, and build the system so a fair-housing expert or
                your counsel can audit what the filter and the ranking did. None of it demos or
                screenshots, and a demo-driven buyer undervalues it right up until a statement of
                interest lands on a competitor.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                And none of this is us deciding whether your product is legal - whether a specific
                feature creates disparate impact is a question for your counsel and a fair-housing
                expert, never a verdict we issue. What we decline is to manufacture a new source of
                discrimination inside the tool and hand it to you looking neutral. Designing against
                disparate impact does not move the housing provider&apos;s own obligation an inch; it
                keeps the software from quietly creating a violation nobody chose and nobody can see.
              </p>
            </div>
          </div>
        </Reveal>

        {/* THE ALLOCATION WALKTHROUGH. Real estate's answer to the edtech/healthcare/fintech blocks -
            a genuinely different structure: these regimes bind the housing provider, the creditor,
            the broker and the settlement-service provider, and the FHA's reach extends to the tools.
            Every "binds X" paired with "and here is what we build". No legal conclusion. No dates. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              Who each rule binds - and what we build for it
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">The Fair Housing Act binds the housing provider, the landlord and the broker - and its reach extends to the tools when an algorithm produces disparate impact.</span>{" "}
              The seven federal protected classes are race, color, religion, sex, disability, familial
              status and national origin. Whether a specific feature creates disparate impact is your
              counsel&apos;s and a fair-housing expert&apos;s call, not ours. What we build is
              disparate-impact-conscious search, ranking and ad-audience logic, proxy-variable review,
              output testing, a human in the loop on adverse actions, and an auditable trail. And when
              a denial is based on a screening or credit report, the tenant-screening rules and the
              equal-credit rules put a specific, accurate adverse-action notice on the landlord or the
              creditor - so what we build is the adverse-action workflow, the reason it carries and the
              dispute channel, never the automated decision itself.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Brokerage licensing, escrow and the settlement-services rules bind the licensed parties - the broker, the escrow agent, the settlement provider.</span>{" "}
              Earnest money, rent and closing funds ride a licensed processor, an escrow provider or a
              broker trust account, and whether a referral or fee arrangement is a prohibited kickback
              is your counsel&apos;s call. What we build is the lead flow, the transaction dashboard,
              e-sign, and rent or earnest-money UIs that instruct a licensed party - never a system
              that holds funds as principal - and we flag when a routing or fee feature looks like it
              turns on those rules before it becomes a UI decision. The money and the licensed role
              stay where the licence is.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Accessibility and data rules bind whoever runs the site and holds the data.</span>{" "}
              A commercial real-estate site is a place of public accommodation; there is no formal
              web-conformance rule for it the way there is for government sites, but courts reference
              WCAG and this sector has seen real accessibility litigation, so we build to WCAG as a
              method - including a non-visual path through a map-driven search - and never call a site
              accessible as a finished state. Tenant and applicant information, any outbound-contact
              consent for a CRM, and MLS listing data under a redistribution-limited licence each sit
              with you or your broker; what we build is least-privilege access, encryption, consent
              capture and display handling that honours those obligations.{" "}
              <span className="font-semibold text-foreground">What you will never get from us is the word compliant</span>{" "}
              - not about fair housing, not about accessibility, not about anything. Compliance is a
              property of how an organisation operates and contracts, attested by people qualified to
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

        {/* THE BADGE DISCLAIM. RESO certification EXISTS (branch a - MLS-level and vendor-level; do
            NOT commit the branch-b "there is no RESO certification" error); MLS access is a licence
            not a badge; REALTOR is a membership/trademark; SOC 2 = report; ISO 27001 = org cert. No
            specific data-provider programme is named (verify-before-naming; default none). No fees. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The real-estate badges, named correctly - and the category errors we won&apos;t commit
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Start with the one this sector gets backwards.{" "}
              <span className="font-semibold text-foreground">RESO certification exists, so we will not pretend it doesn&apos;t.</span>{" "}
              The Real Estate Standards Organization certifies MLSs that pass its tests, and it runs a
              Data Dictionary certification a technology vendor&apos;s platform can hold; some large
              data providers have earned it. We are not a RESO-certified vendor. What we do is build to
              the RESO Web API and the RESO Data Dictionary, which are open, published standards anyone
              can build to for free, and on a build for you any vendor certification would be yours to
              earn as the platform&apos;s owner. The rest of this vertical&apos;s &quot;credentials&quot;
              are not company trust badges at all.{" "}
              <span className="font-semibold text-foreground">Access to MLS listings through IDX or VOW is not a badge - it is a licence</span>,
              granted by the MLS through a broker&apos;s or an agent&apos;s membership, and a developer
              builds under your MLS agreement, never its own.{" "}
              <span className="font-semibold text-foreground">REALTOR</span> is a registered trademark
              and membership designation of the National Association of Realtors, held by member agents
              and brokers - a person&apos;s membership, not a software firm&apos;s certification, so a
              &quot;REALTOR-certified developer&quot; is a category error. And the general security
              attestations are what they are everywhere else on this site: a{" "}
              <span className="font-semibold text-foreground">SOC 2</span> is an attestation report a
              CPA firm writes about an organisation&apos;s controls, not a certificate, and we have not
              undergone one; <span className="font-semibold text-foreground">ISO 27001</span> is a
              genuine organisation certification, and we are not certified to it. We name these
              precisely because this sector is full of firms that hold a product listing, an MLS feed
              under someone else&apos;s licence, or nothing at all, and let it imply a credential they
              do not have. We hold none, and what we offer instead of a badge is the disparate-impact
              discipline on this page, code and integrations you own outright, and a paid discovery
              before any price.
            </p>
          </div>
        </Reveal>

        {/* THE BRIDGE. Claim the PROBLEM SHAPE, never the sector, in fresh prose. The store is a
            searchable catalog with filtering and a lead flow - a listing portal's skeleton. Name
            where it BREAKS: a catalog is not regulated by fair housing, a housing search is; the same
            filter harmless on a shoe can "raise a steering or disparate-impact risk" on a home
            (NEVER "becomes steering" - that is a legal conclusion). Fresh /work anchor. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              What our real work proves here, and where the shape breaks
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Our production work is a custom, full-stack online store on its own backend, and a
              corporate site. The store is a genuine instance of the shape a listing portal is built
              on: a searchable catalog with real filtering, a shortlist, and a lead-and-transaction
              flow a non-technical team ran every day - browse, filter, narrow, enquire, transact.
              Strip the vocabulary off a property portal and that is its skeleton: a listing is a
              catalog item, a saved search is a shortlist, an enquiry is a lead. That machine we have
              built and run in production.{" "}
              <span className="font-semibold text-foreground">Here is exactly where the shape breaks, and we won&apos;t paper over it.</span>{" "}
              A product catalog is not regulated by fair housing; a housing search is. The same filter
              that is harmless on a shoe - price, size, colour - can, on a home, raise a steering or
              disparate-impact risk the moment it keys on neighbourhood, family-friendliness, or
              anything that stands in for a protected class - whether it crosses the line is your
              counsel&apos;s call, but designing against that risk is ours. And the store shipped none
              of the parts that make real estate real estate: no MLS or RESO integration, no
              fair-housing-tested ranking, no tenant screening, no escrow or funds custody. So we
              claim the skeleton and fence off the rest, plainly:{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                the catalog, filtering and lead flow we actually built
              </Link>
              , described honestly. We have no real-estate clients and no proptech system in
              production. The real-estate-specific part of what we offer is the disparate-impact
              discipline on this page, the boundary above it, and a willingness to tell you the thing
              that costs us the sale.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
