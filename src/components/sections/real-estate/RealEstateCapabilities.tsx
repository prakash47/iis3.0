import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconSearch, IconLayers, IconPin, IconGrid, IconServer, IconShield, IconGauge, IconEye, IconRefresh, IconFileText, IconCreditCard, IconLock } from "@/components/icons";

// The E-E-A-T CENTREPIECE. Zero real-estate clients, zero MLS integrations shipped, so the depth of
// what this page knows about real estate's actual failure modes - the neutral filter that steers,
// the ranking that produces disparate impact, the model that is confidently wrong - is the entire
// substitute for a portfolio.
//
// SIX HARD RULES:
// 1. CAPABILITY TENSE ONLY - "we build", "we design", never "our real-estate clients".
// 2. METHOD, NEVER OUTCOME - nothing is "fair-housing compliant", "accessible", "secure" as a
//    finished property. Card 6/7 are "designed against disparate impact" and "disparate-impact
//    TESTING as a method", never a compliance verdict. Card 8 is WCAG "as a method".
// 3. NO STATISTICS - no listing/GMV counts, no penalty/write-down figures.
// 4. VERSION-CONSERVATIVE - name the standards (RESO Web API, Data Dictionary, IDX, VOW, RETS as the
//    deprecated predecessor); print no version deadline or adoption percentage.
// 5. NO LEGAL CONCLUSION about the buyer; regimes named only as what we build toward.
// 6. THE TWO FENCED PRODUCTS ARE ABSENT BY DESIGN - no automated approve/decline-of-record, no
//    AVM/valuation-of-record. The grid is the surfaces AROUND the decisioning, with a human and a
//    validated provider on the consequential call.
const caps = [
  { icon: <IconSearch className="h-5 w-5" />, t: "Listing search, filtering and geo", d: "Typed facets, range and enum filters, map-bounded and radius search, relevance ranking and pagination at MLS scale - with the default sort and the filters treated as design decisions to review, not defaults to inherit, because the sort order is a fair-housing decision." },
  { icon: <IconLayers className="h-5 w-5" />, t: "MLS and RESO integration under your licence", d: "RESO Web API ingestion and replication, Data Dictionary field mapping, and per-field display and redistribution-rule enforcement, built under your brokerage or agent MLS agreement. RETS is the deprecated predecessor we migrate off where a legacy feed remains." },
  { icon: <IconPin className="h-5 w-5" />, t: "Maps, geocoding and boundary overlays", d: "Map, geocoding, clustering and district-boundary integration - engineered so a neighbourhood or good-schools overlay is reviewable for the proxy-steering risk it can carry, rather than shipped as an innocent-looking default that quietly channels people by protected class." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Listing media pipeline", d: "Image and tour ingestion, transcoding, responsive-image and CDN delivery, watermarking and alt-text scaffolding - respecting the photo copyright and licensing terms that come with listing media rather than treating every image as free to use." },
  { icon: <IconServer className="h-5 w-5" />, t: "Agent and broker CRM, and lead routing", d: "Lead forms, deduplication, assignment and round-robin routing, and activity timelines - with consent capture and STOP or do-not-call handling wired in, because a CRM that texts or calls leads brings the outbound-contact consent rules with it, and that consent is yours to hold." },
  { icon: <IconShield className="h-5 w-5" />, t: "Fair-housing-conscious search and ranking", d: "Default-sort and filter design that avoids protected-class proxies, steering-resistant recommendation logic, and the design decisions documented - so the choices a court or a fair-housing expert would ask about were made deliberately and can be shown, not reconstructed after the fact." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Disparate-impact testing", d: "Pre-ship and ongoing testing of what filters, rankings and any scoring surface actually output across groups, with the results logged - because the lesson of the settled cases is that neutral inputs do not guarantee neutral outputs. Claimed as an engineering method, never as a compliance verdict." },
  { icon: <IconEye className="h-5 w-5" />, t: "Accessibility engineering to WCAG as a method", d: "Semantic structure, keyboard operability, focus management, contrast, accessible forms and non-visual alternatives to a map-driven search - built in and verified on real assistive technology, claimed as a method and as build work, never as an accessible or ADA-compliant finished state." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Saved search and alerts", d: "Persisted queries with digest or instant notifications, and VOW registration and consent gating where the feed requires a registered relationship before it will show certain data - honoured in the software rather than worked around." },
  { icon: <IconFileText className="h-5 w-5" />, t: "Documents, disclosures and e-sign", d: "Offer and disclosure packet assembly, template management, e-signature integration and versioned, tamper-evident audit trails - so an offer, a disclosure and a signature are a record that can be shown, not a PDF that lived in someone's inbox." },
  { icon: <IconCreditCard className="h-5 w-5" />, t: "Rent and payment flows on a licensed processor", d: "Collection, scheduling and a reconciliation UI that ride a licensed processor or a property-management payment provider - the software instructs and tracks the movement and never holds the funds, the same regulated-rails posture as our fintech work." },
  { icon: <IconLock className="h-5 w-5" />, t: "Wire-fraud-resistant closing comms", d: "Out-of-band verification of wiring instructions, a hard rule against accepting instruction changes over email, warning banners, and email hardening - the practices the FBI's advisories on real-estate wire fraud are about, built into the flow rather than left to a hopeful footnote." },
];

export function RealEstateCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we build for real estate"
            title="Twelve things a real-estate build turns on"
            sub="Almost none of it is the listing card a buyer sees. This is the layer a property product is actually judged on - and it is where a team that treats the sort order as a fair-housing decision and the MLS feed as a licence is worth more than a team that treats them as an afterthought."
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
              <span className="font-semibold text-foreground">Our default for a real-estate product:</span>{" "}
              build the portal, the search, the CRM and the lead flow, and design the fairness into
              the logic instead of promising it around the edges. Start by asking whether an
              off-the-shelf IDX portal already does most of it, and integrate rather than rebuild when
              it does. Treat the default sort, the filters and any recommendation as fair-housing
              decisions - review them for proxy variables that stand in for protected classes, and
              test what they actually output across groups before shipping. Access MLS listings under
              your agreement and honour its display and redistribution rules in code. Keep earnest
              money, rent and closing funds on a licensed processor or a broker trust account, not on
              a system we run. And leave the two products that carry the liability - the automated
              approve/decline that screens a tenant, and the valuation the market acts on - to a
              validated provider with a human on the consequential call, because that is where a court
              or a regulator looks first.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
