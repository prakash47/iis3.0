import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE SIGNATURE (#15) - media-native, and NOT a re-run of any spent move.
//
// Healthcare = holding DATA (custody; virtue = absence). Fintech = holding MONEY + a ledger that must
// reconcile (correctness under motion). Real-estate = a discriminatory OUTPUT from neutral code.
// Travel = a PROMISE someone else has to keep. Media is none of these: you did not AUTHOR what your
// platform carries. That one fact splits into two liabilities the software settles - RIGHTS (every
// item needs a live licence to be there, statutory damages per work) and SHELTER (every item a user
// uploads needs a lawful way out, the safe-harbor takedown machinery that keeps DMCA 512 / 230 / DSA
// alive). The reusable "we don't take the licensing/royalty/host-of-record roles" boundary is the
// sibling family (health BA-boundary, travel status-trigger) - DEMOTED to one supporting risk-reversal
// tile, NEVER the signature. The rights edge is PERMISSION-TO-DISTRIBUTE, kept clear of
// royalty-reconciliation (fintech-spent + founder-scoped-off).
//
// HARD RULES:
// - Never "compliant"/"accessible"/"secure"/"VPPA-safe" as a property of us or software.
// - Never a legal conclusion about the buyer (whether a use is licensed / a config satisfies the VPPA
//   is the client's counsel's call).
// - Salazar v. Paramount Global is the ONE budgeted attributed clause, carried as UNSETTLED scope
//   (cert granted, argued now, outcome expected 2027) with NO outcome and NO dollar figure.
// - Badge disclaim, current + correct entity-kind: TPN is the MPA-owned content-security programme
//   for SERVICE/APPLICATION PROVIDERS - name it, disclaim membership, print NO Shield tier. CDSA/CPS
//   is DEAD (absorbed into TPN 2018) - do NOT name or disclaim it (dead-programme burn). "MPA", never
//   "MPAA". SOC 2 = report; ISO 27001 = org cert; no PCI certificate; we hold none.
const riskReversal = [
  { t: "You own all of it, including the parts that name you to a regulator", d: "The content, the source code, the data, the user accounts, the rights and licensing metadata - and the DMCA-agent registration, filed in your name at the Copyright Office, not ours. Nothing that identifies your platform to a rightsholder, a court or a regulator sits under our name, because those are your roles to hold and ours only to build the software around." },
  { t: "No lock-in, and no runtime rent", d: "Built on your own stack and infrastructure, with no proprietary runtime of ours and no plugin licence to keep paying, documented and handed over on final payment so your own team, or another vendor, can run and change it without inheriting a platform only we understand." },
  { t: "NDA before you share", d: "Your catalog, your licence terms, your unreleased windows, your moderation policies and your roadmap stay confidential; we sign first, before you tell us what the platform will carry." },
  { t: "Milestone billing, working software each step", d: "Fixed scope, paid by milestone, so you see working software at each step and the spend tracks the build rather than a retainer - and if discovery says buy the packaged piece instead of building it, the build gets smaller." },
  { t: "Senior-direct since 2016", d: "You work directly with the senior people writing the code, from the same small team - a real Pvt Ltd incorporated in 2016, based in Maharashtra, serving clients worldwide. No account layer, and no handoff to juniors once the contract is signed." },
  { t: "We say the 'no' out loud, at scoping, in writing", d: "When a piece of this belongs to a lawyer - whether a licence covers a use, whether a takedown flow is enough, whether a pixel setup satisfies the VPPA - or to a specialist product like large-scale content matching, or to a role we deliberately do not take, we tell you before you spend, not after. The roles we refuse are exactly the ones that keep the platform, and its liability, yours." },
];

export function EntertainmentProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>You are almost never the author of <span className="gradient-text">what flows through your platform.</span></>}
            sub="We have no streaming, publishing, community or ticketing clients, no media logos, no viewer or subscriber numbers to quote, and no such platform in production, and you should weigh that. What we have instead is the fact this sector's slickest pitches are built to skip: the thing your product serves was made by someone else - a rightsholder who licensed it to you on terms, or a user who uploaded it on none - and that single fact, not features or scale, is where the liability lives. Below is what we build so every item has a licence you can prove and a lawful way out, who each obligation actually binds, and what standing on the honest side of it costs us."
          />
        </Reveal>

        {/* THE SIGNATURE. The non-authorship reframe, fused into one couplet with two edges. */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Every item needs a reason to be there, and a way to leave.
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                In media the thing your product serves was made by someone else, and that single fact
                splits into two liabilities no contract can carry for you, because both are settled by
                what your software actually does, not by what your terms of service say. Every item you
                distribute needs a live permission behind it, or serving it is infringement, and
                copyright statutory damages attach per work - a catalog of thousands of titles is
                thousands of possible counts, which is why the software has to be able to prove the
                licence, not just assume it. That is the reason to be there.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                And every item a user hands you needs a lawful way out - a registered agent, a working
                takedown, a counter-notice path, a repeat-infringer policy your code can actually
                enforce - because the legal shelter that lets you host other people&apos;s content is
                conditional on that machinery and can fall away, retroactively, for everything ever
                uploaded, if one condition lapses. That is the way to leave. Build both into the system
                and they hold; bolt them on after launch and they do not.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">The roles we refuse on purpose.</span>{" "}
                The stickiest, most billable positions in this sector are the ones that take on the
                liability - becoming your licensing counterparty, your rights system-of-record and
                royalty payer, or your host of record so the copyright risk sits with a name that
                is not yours. We decline all of them, not because we cannot build the software around
                them, but because the legal role does not actually transfer: it stays yours whatever a
                contract says, so a vendor who offers to take it is selling you a comfort that is not
                real. We build the machinery. You stay the rightsholder and the host of record - the
                roles no vendor should offer to take.
              </p>
            </div>
          </div>
        </Reveal>

        {/* THE ALLOCATION WALKTHROUGH. Every "binds you" welded to "and here is what we build". No
            legal conclusion. WCAG named version-less. Click-to-cancel not anchored on (durable ROSCA
            instead). Salazar carried as unsettled, no outcome, no figure. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              Who each obligation binds - and what we build for it
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">You are the licensee, so every item you distribute has to have a licence behind it.</span>{" "}
              Licences expire, differ by territory, and open and close by release window, and if the
              product serves something outside its licence, that is infringement. What we build is an
              entitlement layer that treats the licence as data the player checks before it plays -
              window start and end, territory eligibility evaluated at request time, availability as a
              first-class field on every asset - plus the ingest and admin surface where your rights
              team sets and sees those facts. Recorded music even carries two separate copyrights, the
              composition and the sound recording, cleared through different bodies, and we model your
              rights metadata so those facts have a place to live. We are not the licensing counterparty
              and not the rights system-of-record; you hold the licences and the source of truth, and
              we build the software that honours them at the instant of playback.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">If your platform hosts what users upload, you rely on shelters you have to keep qualifying for.</span>{" "}
              DMCA Section 512 covers copyright; Section 230 covers other third-party content and does
              not cover copyright, which is exactly why the two are separate systems; and for EU or UK
              users the DSA and the UK Online Safety Act add their own notice-and-action regimes. Section
              512 in particular needs a DMCA agent registered with the Copyright Office, a registration
              that expires and must be renewed every three years, a working notice-and-takedown and
              counter-notice flow, and a repeat-infringer termination policy you actually enforce. What
              we build is the takedown pipeline with a review step rather than a blind auto-delete
              (because Section 512(f) creates liability for a knowing misrepresentation, counter-notices
              have to be handled in good faith), the repeat-infringer tracking that lets you apply and
              prove a policy, the renewal wired into your calendar as a tracked three-year event, and the
              CyberTipline reporting workflow for apparent CSAM. You are the service provider and the
              host of record; the shelter is yours to hold, and we build so your software behaves the way
              it requires.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">The privacy and accessibility obligations bind you and whoever holds the data.</span>{" "}
              The Video Privacy Protection Act bars disclosing what a person watched without consent, and
              a live wave of class actions alleges an analytics or ad pixel next to video does exactly
              that; whether a newsletter-only subscriber even counts as a covered consumer is in front of
              the Supreme Court right now in Salazar v. Paramount Global, argued this term with an outcome
              expected in 2027, so the scope is genuinely unsettled - but the exposure is a software
              decision, so we build the tag and consent layer that keeps third-party pixels behind
              consent and viewing identifiers out of anything that leaves your domain. On accessibility,
              video that previously aired on US TV with captions carries the caption obligation online,
              audio-description duties phase in by market, and courts read general accessibility law to
              reach media sites, so we build the player and pipeline so captions and audio description can
              be delivered, and to the WCAG success criteria as a method.{" "}
              <span className="font-semibold text-foreground">What you will never get from us is the word compliant</span>{" "}
              - not about copyright, not about safe harbor, not about the VPPA, not about accessibility.
              Compliance is a property of how an organisation operates and is attested by people qualified
              to attest it. We do the engineering that makes it reachable, tell you where the cost of each
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

        {/* THE BADGE DISCLAIM. TPN = the MPA-owned content-security programme (name + disclaim, no
            tier). CDSA/CPS = dead, OMITTED entirely (not even disclaimed). MPA never MPAA. SOC 2 =
            report; ISO 27001 = org cert; no PCI certificate. No fees. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The media badges, named correctly - and the ones we won&apos;t imply we hold
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The content-security programme film and television actually use is the{" "}
              <span className="font-semibold text-foreground">Trusted Partner Network (TPN)</span>,
              owned by the Motion Picture Association, which assesses service and application providers
              against the MPA Content Security Best Practices on a tiered model.{" "}
              <span className="font-semibold text-foreground">We are not a TPN member and have not completed a TPN assessment.</span>{" "}
              We build to the security practices this kind of work calls for, and if a licensor or a
              distribution partner requires TPN status on the vendors that touch their content, that
              assessment is a defined process you or an accredited assessor run, and we build so your
              systems can meet the controls it checks. Beyond that, we hold{" "}
              <span className="font-semibold text-foreground">no SOC 2 report, no ISO 27001 certificate and no content-security certification, and we claim none</span>{" "}
              - a SOC 2 is an attestation report a firm writes about an organisation&apos;s controls, not
              a certificate you pass; ISO 27001 is an organisational certification; there is no PCI
              certificate for anyone to hold, and card data rides your processor, not us. This sector is
              full of firms that hold one badge, or none, and let it imply a security or media credential
              they do not have. We name these precisely because we hold none of them, and what we offer
              instead of a badge is the rights-and-shelter engineering on this page, code and metadata you
              own outright, and a paid discovery before any price.
            </p>
          </div>
        </Reveal>

        {/* THE BRIDGE. Claim the PROBLEM SHAPE (entitlement is the same problem as checkout), never the
            sector, in fresh prose. Fresh /work anchor (all five siblings' anchors are spent). No
            borrowed vendor/publisher marquee names. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              What our real work proves here, and where the shape breaks
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Our production work is a custom, full-stack online store on its own backend, and a
              corporate site. Strip the store to its logic and the checkout is a gate: it decides, in
              code, who is allowed to receive the thing before the thing is served - payment clears, an
              order exists, fulfilment follows. A media front door asks the identical question with
              different words: is this viewer entitled to this item right now? A paywall unlock, a
              subscription gate, a valid ticket, an in-window and in-territory licence - these are all
              one question, answered by the software before it serves, and we have built one honest
              version of that gate against a product catalog with real filtering and a real checkout.{" "}
              <span className="font-semibold text-foreground">Here is the exact seam where that shape stops being a store.</span>{" "}
              A store sells goods you own and can serve to anyone who pays; a media platform serves
              content someone else owns, so the gate is not just did they pay but do you have the right to
              show them this, here, today - and the store never had to prove a licence, keep a safe-harbor
              shelter alive, or keep a viewing pixel honest, because it carried none of those risks. So we
              claim the entitlement-gate skeleton and fence off the rest, plainly:{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                see the storefront gate we actually built
              </Link>
              . We have no media clients and no streaming, publishing, community or ticketing platform in
              production. The media-specific part of what we offer is the rights-and-shelter engineering
              on this page, the boundary above it, and a willingness to tell you which roles to keep and
              which to route to your counsel rather than build.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
