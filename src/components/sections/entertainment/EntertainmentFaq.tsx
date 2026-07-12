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
// 5x+); "do you do staff augmentation"; generic "how long does it take". Ownership and cost are kept
// ONLY because the answers are genuinely rights/shelter/media-shaped, not paraphrases of the sibling
// nodes.
//
// GUARDRAILS ENFORCED:
// - Never "compliant"/"DMCA-compliant"/"copyright-safe"/"accessible"/"secure"/"VPPA-safe" as a
//   property of us or software.
// - Never a legal conclusion about the buyer (whether a use is licensed / a config satisfies the VPPA
//   / whether you need a registration is your counsel's call).
// - Salazar v. Paramount Global is named ONCE, in Proof; here the VPPA answer references the pending
//   Supreme Court case without re-naming it, to keep the single named-court-fact budget.
// - No dollar/penalty/count figures; "a live wave of class actions", never "hundreds". No TPN tier,
//   MPA never MPAA, CDSA never named. "app" is not used as a delivered capability.
// - Discovery Sprint from $1,000 byte-identical with the pricing section and the custom-software page.
const faqs = [
  {
    question: "Can you build me a copyright-safe or DMCA-compliant platform?",
    answer:
      "No one can hand you a copyright-safe platform, and you should be wary of any vendor who says they can. DMCA-compliant is not a state software ships in. Safe harbor is something your platform keeps qualifying for by how it behaves over time - a DMCA agent kept registered and renewed every three years, takedowns actually actioned, counter-notices actually reviewed, a repeat-infringer policy actually enforced - and it can fall away retroactively if one of those lapses. Whether your catalog itself is licensed depends on licences we do not hold and cannot verify. What we build is the machinery - the entitlement checks, the takedown and counter-notice pipeline, the renewal reminder, the audit trail - so meeting those obligations is something your team can actually do and prove. The compliance is yours and your counsel's; the software that makes it reachable is ours.",
  },
  {
    question: "Do you become our DMCA agent or our host of record?",
    answer:
      "No. The DMCA agent is registered with the U.S. Copyright Office in your name, because the safe harbor is your platform's to hold, and the host of record - the service provider whose name is on the platform - is you. We build the software so those roles work: the intake that routes takedown notices to your agent, the renewal wired into your calendar as a tracked three-year event, the takedown and counter-notice pipeline your team operates. Taking those roles ourselves would not transfer the liability to us in any way that helps you; it would just add a party to your risk surface. So the roles stay yours, and we build the machinery around them.",
  },
  {
    question: "Who owns royalty reporting and the payments to rightsholders?",
    answer:
      "You do. We are not your royalty system-of-record and never the payer or the collector. What we build is the rights metadata model and the reporting exports shaped to the bodies that actually collect - the Mechanical Licensing Collective for the blanket digital-audio mechanical, the performing-rights organisations for public performance of the composition, SoundExchange for the statutory sound-recording digital-performance royalty - and we model the two separate copyrights in recorded music, the composition and the sound recording, correctly so the reporting maps to reality. The obligation to license, report and pay is yours; the software that produces accurate, well-shaped reports so you can meet it is ours.",
  },
  {
    question: "Do you do NFT ticketing, Web3 or crypto drops?",
    answer:
      "No. Web3, NFT and crypto or token-gated builds are scoped out - we have zero exposure and will not pretend otherwise, and naming that exclusion plainly is more honest than bolting a blockchain feature onto every page to look current. If your product genuinely depends on one of those at its core, you want a team that builds them, not us. Everything else on this page - streaming, publishing, community and ticketing platforms with the rights, shelter and consent machinery - is squarely what we build.",
  },
  {
    question: "Have you built a streaming, publishing, community or ticketing platform before?",
    answer:
      "No media work, and we will not dress that up. We have no media clients, no streaming or publisher logos and no such platform in production, and you should weigh that. Our production work is a custom, full-stack online store on its own backend - a searchable catalog with filtering and a checkout that gates who receives the goods, which is the honest skeleton an entitlement gate is built on - and a corporate site. What we offer instead of a portfolio is the rights-and-shelter engineering on this page, the discipline to name which roles stay yours, and a willingness to tell you which pieces to buy rather than build. If a media portfolio is your deciding criterion, there are firms who have one, and we would rather you knew that now.",
  },
  {
    question: "Can you build the native mobile experience too?",
    answer:
      "The web platform, the player, the paywall, the community and the ticketing front end are the shape we build. A native mobile experience on phones is a separate build with its own honest terms, and we have shipped no mobile apps for anyone yet, so we would tell you that plainly and route the mobile side to our mobile development service rather than imply a portfolio we do not have. Much of the platform - the entitlement, rights, moderation and consent machinery - lives on the backend and serves both web and mobile, so building the web platform well is not wasted if a native client comes later.",
  },
  {
    question: "How do you handle DMCA takedowns and counter-notices?",
    answer:
      "As a real pipeline, not a blind delete button. We build structured takedown-notice intake, an expeditious-removal workflow, and counter-notice handling with a good-faith review step and a restoration window - because Section 512(f) creates liability for a knowing misrepresentation in a notice or a counter-notice, the machinery has to review and process counter-notices, not just remove content on any complaint. Underneath it sits the strike-tracking data model that lets you apply and prove a repeat-infringer termination policy, and the audit trail that evidences you acted expeditiously. Your team operates it and makes the calls; we build so those calls are fast, recorded and defensible.",
  },
  {
    question: "What is this about a tracking pixel and the VPPA?",
    answer:
      "The Video Privacy Protection Act bars a video service provider from disclosing what a person watched without consent, and there is a live wave of class actions alleging that an analytics or advertising pixel dropped next to video does exactly that - a software decision that can turn a streaming, publisher or media site into a defendant. Whether a subscriber to your non-video services even counts as a covered consumer is unsettled and in front of the Supreme Court right now, so we do not claim a settled answer. What we build is a tag and consent layer so third-party pixels near video load behind consent, viewing identifiers stay out of URLs and out of anything that leaves your domain by default, and a consent state the video layer checks before any viewing data is shared. Whether a given configuration satisfies the law is your counsel's call; we build so that call is yours to make and enforce, not one your analytics snippet made for you.",
  },
  {
    question: "Do you handle content moderation and CSAM reporting?",
    answer:
      "We build the tooling; your team operates it and holds the duty. That means layered moderation - automated pre-screens, human review queues, user reporting - and hash-matching against known-illegal-content databases, plus the detection, escalation, preservation and CyberTipline reporting workflow for apparent child sexual abuse material, which providers are required by statute to report to the National Center for Missing and Exploited Children. The obligation to report and to run trust and safety sits with you as the provider; what we build is the machinery that makes doing it reliable, fast and evidenced. We do not become your moderation operator or your reporting entity.",
  },
  {
    question: "Can you integrate DRM like Widevine, FairPlay and PlayReady?",
    answer:
      "Yes, as an integration, not a partnership we would claim. We package content once in CMAF and encrypt it so a single stream is consumable by Google Widevine, Apple FairPlay and Microsoft PlayReady, and we wire the player's license-request and key-exchange flow to the DRM license services you choose, with tokenized, geo-gated delivery so entitlements and licensing windows are enforced at request time. We integrate the DRM you select; we do not resell a DRM product or imply we are a Widevine, FairPlay or PlayReady partner, because we are not.",
  },
  {
    question: "What about our EU and UK users - the DSA and the Online Safety Act?",
    answer:
      "For EU users the Digital Services Act adds notice-and-action, trusted-flagger channels, a statement-of-reasons to affected users, internal complaint and appeal handling, and transparency reporting, with heavier duties once a service disseminates content publicly to an open-ended audience. For UK users the Online Safety Act adds illegal-content risk assessments and removal systems. Both bind you as the service, not us, and whether and how they apply to your product is your counsel's call. What we build is the notice-and-action intake, the statement-of-reasons and appeal flows, and the transparency-report data plumbing, so meeting those duties is something your team can operate and evidence.",
  },
  {
    question: "Do you handle music licensing and royalties?",
    answer:
      "We build the software that lets you meet those obligations; we do not become the licensor, the collector or the payer. The important thing we get right is that recorded music carries two separate copyrights - the musical work, or composition, and the sound recording, or master - cleared through different bodies, with mechanical, public-performance and sync rights handled by different collectives and, for sync, by direct deals. We model your rights metadata so those distinctions have a place to live and your reporting maps to the right bodies. Which licences you hold and what you owe is between you, the rightsholders and the collectives; the software that tracks and reports it accurately is ours to build.",
  },
  {
    question: "Do you hold SOC 2, or are you TPN-assessed?",
    answer:
      "No to both, and we will be precise about what each is. A SOC 2 is an attestation report a firm writes about an organisation's controls, not a certificate you pass, and we have not undergone one. The Trusted Partner Network is the Motion Picture Association's content-security programme that assesses service and application providers against the MPA Content Security Best Practices; we are not a member and have not completed an assessment. If a licensor or distribution partner requires TPN status or a specific attestation on the vendors who touch their content, that is a defined process you or an accredited assessor run, and we build so your systems can meet the controls it checks - we will not display a badge we have not earned or imply we have already passed one.",
  },
  {
    question: "Who owns the code, the content and the rights metadata?",
    answer:
      "You own all of it, outright: the repository, the source code, the content, the user accounts, the rights and licensing metadata, and the data model behind it, on infrastructure in your name, handed over on final payment with no licence back to us. The DMCA-agent registration is filed in your name too. We build on your own stack with no proprietary runtime of ours and no plugin licence to keep paying, and we document and hand over so your own team, or another vendor, can run and change the platform without inheriting a black box only we understand. Nothing that identifies your platform to a rightsholder, a court or a regulator sits under our name.",
  },
  {
    question: "What does a media build cost?",
    answer:
      "We publish one number here and refuse to invent the other. Every agency page in this sector prints a custom-platform price band, and none of them can know whether your product needs multi-DRM streaming, a moderation and safe-harbor stack, a paywall, a ticket engine, or just the machinery around a platform you already run - which is the biggest driver of the cost and the risk. So a media build enters through a paid Discovery Sprint from $1,000, which is one to two weeks and ends in a written scope, a map of where the rights, the uploads and the viewing data flow and which pieces to buy rather than build, and a fixed price for the build, credited toward it. If discovery concludes a packaged platform already does most of the job, you keep the scope and the recommendation, and the expensive engagement never happens.",
  },
  {
    question: "The subscription and cancellation rules keep changing - do I still build for them?",
    answer:
      "Yes, and it is why our method does not lean on whichever rule is current this year. A federal click-to-cancel rule was vacated in 2025 and is not currently in effect, but the durable obligations do not switch off with it: the Restore Online Shoppers' Confidence Act, the state automatic-renewal laws like California's, and the general prohibition on unfair or deceptive practices still require clear disclosure of terms, express consent, and a straightforward way to cancel. So we build the subscribe, renewal and cancel flows to that durable shape - clear pre-purchase disclosure, affirmative consent capture, a retained record of it, and an online cancellation path at least as easy as sign-up - so a future rule change is a configuration change, not a rebuild. Whether any specific rule applies to you is your counsel's call.",
  },
];

export function EntertainmentFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Building for entertainment and media, answered" />
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
