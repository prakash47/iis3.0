import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconShield, IconSearch, IconLayers, IconEye, IconLock, IconServer } from "@/components/icons";

// THE MYTH-BUSTER dismantles the category's default assumption - that a serious proptech means
// building the screening score and the valuation model. Almost never: those are the two products
// where the fair-housing and model-risk liability is concentrated (SafeRent, Zillow), and building
// them is rarely the move. This is where the reusable "we won't build the decisioning" fence and
// the "not the broker / no funds" allocation live - NOT the signature (that is the emergent-
// discrimination move, in Proof).
//
// ZERO STATISTICS. No listing counts, no market sizes, no penalty/write-down figures. The SafeRent,
// Meta and Zillow events are attributed industry facts with NO dollar figures, and named-company
// conduct is stated as ALLEGED (both matters settled with no admission of liability).
//
// DURABLE ANCHOR: the fair-housing risk rests on the STATUTE and the Supreme Court (Inclusive
// Communities, 2015), not on agency guidance - HUD's 2024 AI guidance was withdrawn in 2025 and the
// federal disparate-impact posture rolled back, but the statutory theory, the private settlements
// and many state laws stand. The method is risk engineering that does not depend on one
// administration's guidance.
//
// NEVER A LEGAL CONCLUSION about the buyer (a feature "violates" the FHA, "you are a broker", "you
// need a licence"). That is the buyer's counsel's and a fair-housing expert's call.
const pillars = [
  { icon: <IconSearch className="h-5 w-5" />, t: "Fair housing lives in the algorithm", d: "The discrimination people picture is a person choosing to exclude. The failure this page is built around is quieter: a filter that hides voucher-accepting listings, a ranking that buries homes in some neighbourhoods, a screening score trained on data that stands in for a protected class. Each can produce a disparate impact with nobody deciding to, because it is an emergent property of the logic. So we design against it as a first requirement, not a paragraph at the end." },
  { icon: <IconShield className="h-5 w-5" />, t: "The risk reaches the software", d: "Housing discrimination law binds the provider, the landlord and the broker - but the public record now shows the responsibility reaches the tool. A tenant-screening company and an ad-delivery platform each settled matters alleging their algorithms produced protected-class disparities. The lesson is not to fear the work; it is to build the fairness in, because a court will look at what the code did, not at what the spec said." },
  { icon: <IconLayers className="h-5 w-5" />, t: "The listings are licensed, not owned", d: "The data your portal shows comes from an MLS, accessed through IDX or VOW under an agreement a broker or agent holds, with display and redistribution rules attached. Integration is most of the work, and it is built to the open RESO Web API and Data Dictionary - but under your licence, honouring its rules in the code, not scraped from a feed nobody has the right to redistribute." },
  { icon: <IconLock className="h-5 w-5" />, t: "You are not the broker or the escrow agent", d: "The licence, the trust account and the custody of earnest money, rent and closing funds sit with a broker, an escrow provider or a licensed processor. A software firm is none of those, and neither are you unless you hold the licence. We build the flows that instruct those parties and the dashboards that track them; the money and the licensed role stay where the licence is." },
  { icon: <IconEye className="h-5 w-5" />, t: "Accessibility is a public-accommodation gate", d: "A commercial real-estate site is a place of public accommodation, and while there is no formal web-conformance rule for it the way there is for government sites, courts reference WCAG and this sector has seen real accessibility litigation. We build to WCAG as a method - including non-visual alternatives to a map-driven search - and we do not tell you a site is accessible as a finished state." },
  { icon: <IconServer className="h-5 w-5" />, t: "We would rather scope than guess", d: "A real-estate build is custom software. It enters through a paid discovery that ends in a written scope, a map of where applicant data and money flow and which features touch fair-housing risk, and a fixed price - because the alternative is a number invented before anyone knew whether the product needed MLS access, a rent path or a screening surface at all." },
];

export function RealEstateWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Should you build the screening score and the valuation model yourself?{" "}
                <span className="gradient-text">Almost never - and that&apos;s where the fair-housing risk is.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Most briefs that arrive as &quot;a proptech platform&quot; are really a portal, a
                search, a CRM and a lead flow - and those we build. The two things people reach for
                that we will not build are the automated tenant screening that decides an applicant
                and the valuation model a company prices and acts on. They are two of the stickiest,
                most lucrative products in this sector, and they are also where the liability is made:
                a tenant-screening tool settled a matter alleging its score produced disparate impact,
                and a large iBuyer wound its home-buying business down when its valuation model was
                confidently wrong at scale.{" "}
                <span className="font-semibold text-foreground">When is building the decisioning yourself right?</span>{" "}
                Rarely - and when it is, it needs a validated model, a fair-housing expert and the
                model-risk work that is a project of its own, not a feature. The fair-housing theory
                behind all of this rests on the statute and a Supreme Court decision, not on whichever
                agency guidance is current this year, so designing against disparate impact is prudent
                whatever the regulatory weather.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why real estate is different"
            title="What building for real estate actually demands"
            sub="Every sector claims to be special. In this one the discrimination risk is an emergent property of neutral-looking code, the listings you show are licensed rather than owned, and the money and the licence sit with a broker who is not you and never your software vendor."
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

        {/* The anti-recommendation. id="when-not" matches the sibling pages, so the site-wide "we
            tell you when not to" promise is one click from the hero button. BOTH HALVES: the
            refusals, then where custom genuinely wins. No legal conclusion about the buyer. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;d tell you not to build, and when we&apos;d turn the work down
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">
              If an off-the-shelf IDX portal or listing platform already does what you need,
              configure it and keep your money - that is a column in the table below, and it is the
              answer more often than a bespoke build. We will not build the automated tenant
              approve/decline of record or the valuation-of-record - the two products that carry the
              fair-housing and model-risk liability - and if that decisioning is the core of your
              product, you want a firm and a validated provider set up for it, not us. If the product
              needs to hold earnest money, rent or escrow, that rides a licensed processor or a broker
              trust account, and whether a brief turns on a broker licence or an escrow arrangement is
              a question for your counsel, not a verdict we issue. And if procurement gates on a RESO
              vendor certification, a SOC 2 report or a signed attestation we cannot offer, we do not
              clear that gate.{" "}
              <span className="font-semibold text-foreground">Where a custom build genuinely wins:</span>{" "}
              when the portal, the search, the CRM and the lead flow are the product and an
              off-the-shelf IDX portal fights it. That is{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
                where a listings platform is scoped before it&apos;s priced
              </Link>
              , and we will make that case with you in writing. Talking you out of building the
              decisioning that carries the liability is the only credential we can offer before the
              first real-estate build ships.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
