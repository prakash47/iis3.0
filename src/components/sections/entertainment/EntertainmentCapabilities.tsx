import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconPlay, IconLock, IconEye, IconFileText, IconRefresh, IconServer, IconShield, IconChat, IconLayers, IconTag, IconDatabase, IconSearch } from "@/components/icons";

// The E-E-A-T CENTREPIECE. Zero media clients, zero platforms shipped, so the depth of what this page
// knows about media's actual failure modes - the item served without a licence, the shelter lost to a
// lapsed renewal, the pixel that turned a viewing session into a disclosure - is the entire substitute
// for a portfolio.
//
// SIX HARD RULES:
// 1. CAPABILITY TENSE ONLY - "we build", never "our media clients".
// 2. METHOD, NEVER OUTCOME - nothing is "compliant", "accessible", "secure", "VPPA-safe" as a finished
//    property. Card labels are method-framed (card 12 is "consent-gated tag governance", not "VPPA-safe").
// 3. NO STATISTICS - no user/upload/GMV/viewer counts, no penalty figures, no market share.
// 4. VERSION-CONSERVATIVE - name the standards (CMAF, HLS, DASH, DMCA 512, DSA, OSA, ROSCA, WCAG);
//    print no version numbers, no rule deadlines, no TPN Shield tiers.
// 5. NO LEGAL CONCLUSION about the buyer; regimes named only as what we build toward.
// 6. THE WORDS "IDEMPOTENT" / "RECONCILE" / "EXACTLY-ONCE" ARE ABSENT - they are fintech's signature
//    discipline. Ticketing correctness is "time-boxed holds", "atomic seat-locking", "oversell
//    prevention"; money movement routes to /industries/fintech.
const caps = [
  { icon: <IconPlay className="h-5 w-5" />, t: "Adaptive streaming and multi-DRM delivery", d: "CMAF packaging so one encode feeds an HLS playlist for Apple devices and a DASH manifest for everything else, an adaptive bitrate ladder that tracks bandwidth, and one encrypted stream wired to the client's Widevine, FairPlay and PlayReady license flows behind tokenized, geo-gated CDN delivery. We integrate the DRM; we do not resell it or imply a partnership." },
  { icon: <IconLock className="h-5 w-5" />, t: "Catalog, entitlements and windows", d: "Title, season and episode models with subscription, rental and ad-supported entitlement resolution, and licence-window and territory eligibility evaluated at request time - so an expired or out-of-territory item cannot be served by accident, and the gate is enforced in the software, not just hidden in the UI." },
  { icon: <IconEye className="h-5 w-5" />, t: "Accessible player and caption pipeline", d: "A player and authoring pipeline built so closed captions, subtitles, audio description and described-audio tracks can be authored, ingested, synchronized and rendered in accessible controls - built to the reservation-of accessibility method, versionless, and never called a finished accessible state." },
  { icon: <IconFileText className="h-5 w-5" />, t: "Headless CMS and editorial workflow", d: "A structured content model with a real editorial workflow - draft, editorial review, legal or standards hold where needed, scheduled publish, correction and versioning with an audit trail - behind a decoupled, crawlable front end rendered for speed and search." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Paywalls and subscription machinery", d: "Metered, hard and hybrid paywalls enforced server-side rather than as a CSS overlay, with clear pre-purchase disclosure, express-consent capture, a retained record of that consent, and an online cancellation path at least as easy as sign-up - built to support the client's ROSCA and state auto-renewal obligations, whose compliance conclusion stays with the client and its counsel." },
  { icon: <IconServer className="h-5 w-5" />, t: "Upload and media-asset pipeline", d: "Resumable, chunked uploads, malware scanning, transcode and normalize on ingest, thumbnailing, and a moderation gate before public exposure - with rights and provenance metadata attached to every asset in a media-asset layer that holds masters, renditions and derivatives." },
  { icon: <IconShield className="h-5 w-5" />, t: "DMCA 512 safe-harbor machinery", d: "Designated-agent intake, the three-year Copyright Office renewal wired into your operational calendar as a tracked event, notice-and-takedown with a review step rather than a blind auto-delete, counter-notice handling built with 512(f) misrepresentation liability in mind, and the strike-tracking data model that lets you apply and prove a repeat-infringer termination policy." },
  { icon: <IconChat className="h-5 w-5" />, t: "Trust and safety and moderation", d: "Layered moderation - automated pre-screens, human review queues, user reporting - and hash-matching against known-illegal-content databases, with the detection, escalation, preservation and CyberTipline reporting workflow for apparent CSAM under 18 USC 2258A built for the provider to operate." },
  { icon: <IconLayers className="h-5 w-5" />, t: "DSA and OSA notice-and-action", d: "For EU and UK users, notice-and-action intake, trusted-flagger channels, statement-of-reasons to affected users, internal complaint and appeal handling, and the transparency-report data plumbing the Digital Services Act and the UK Online Safety Act call for - built as the machinery, cited by shape, never as a compliance claim." },
  { icon: <IconTag className="h-5 w-5" />, t: "Ticketing integrity, all-in pricing and anti-bot", d: "Seat and general-admission inventory held with time-boxed locks and atomic seat-locking so a seat is never double-booked under a thundering herd, oversell prevention, a fair virtual waiting room, all-in total price shown up front for the FTC fees rule, and enforceable purchase limits and velocity controls for the BOTS Act. Payments route to fintech." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Rights and royalty-reporting integration", d: "A client-owned rights metadata system-of-record and reporting exports shaped to the bodies that collect - the MLC for the blanket digital-audio mechanical, the PROs for public performance of the composition, SoundExchange for the statutory sound-recording digital-performance royalty - with the two-copyright split modelled correctly. We integrate and report; we never become the licensor, the collector or the payer." },
  { icon: <IconSearch className="h-5 w-5" />, t: "Consent-gated tag governance", d: "A tag and consent layer so third-party pixels near video load behind consent, viewing identifiers stay out of URLs and out of anything that leaves your domain by default, and a consent state the video layer checks before any viewing data is shared - so an analytics snippet does not make a disclosure decision the Video Privacy Protection Act reaches on your behalf." },
];

export function EntertainmentCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we build for entertainment and media"
            title="Twelve things a media build turns on"
            sub="Almost none of it is the player or the article page a visitor sees. This is the layer a media product is actually judged on when the rights have to be provable and the shelter has to hold - and it is where a team that treats a licence as data the software checks, and safe harbor as a behaviour the code performs, is worth more than a team that treats them as an afterthought."
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

        {/* Stated as an APPROACH ("here is how we would build yours"), never a record. Our answer to
            the category's "1000+ features": sane defaults, and why. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Our default for a media build:</span>{" "}
              CMAF packaging so a single encode serves both HLS and DASH instead of encoding twice.
              Entitlements and paywalls enforced server-side, never as an overlay a reader or viewer
              can bypass. The moderation gate before public exposure, not after. The DMCA-agent renewal
              wired into your calendar as a tracked three-year event, because a lapse silently forfeits
              the shelter. Copyright takedowns and content-tort moderation built as two systems, because
              they answer to two different shelters. Third-party tags near video loaded behind consent
              by default. And before any of it, the honest question - which of these pieces a packaged
              platform already does well enough that you should buy it, and which is the machinery worth
              building - because the parts worth building are the rights, the shelter and the consent
              logic no package ships, and the rest is often better bought than reinvented.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
