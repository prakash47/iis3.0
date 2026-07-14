import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconPen, IconLock, IconShield, IconLayers, IconEye, IconServer } from "@/components/icons";

// THE MYTH-BUSTER dismantles the category default: that a vendor can hand you a "copyright-safe,
// DMCA-compliant" platform. No one can - safe harbor is a behaviour your software performs
// continuously, not a state software ships in, and whether your catalog is licensed depends on
// licences we do not hold and cannot verify. This is where the reusable "we don't take the
// liability-bearing roles" boundary lives - NOT the signature (that is the non-authorship move, in
// Proof). Mirrors healthcare's "Can you build a HIPAA-compliant app? No one can...".
//
// ZERO STATISTICS. No user/GMV/upload counts, no penalty figures, no "hundreds of class actions" (a
// count - the VPPA wave is "a live wave"). Salazar is the single budgeted attributed clause and it
// lives in Proof/FAQ, not here.
//
// NEVER A LEGAL CONCLUSION about the buyer. Whether a use is licensed, whether a takedown flow is
// enough, whether a pixel configuration satisfies the VPPA - all the buyer's counsel's call.
// Version-conservative: name the durable regimes (DMCA 512, Section 230 carve-outs, VPPA, the
// durable ROSCA/state auto-renewal shape), print no rule deadlines and not the vacated
// click-to-cancel rule as if it were the anchor.
const pillars = [
  { icon: <IconPen className="h-5 w-5" />, t: "You did not make what you carry", d: "The thing your product serves was authored by someone else - a rightsholder who licensed it to you on terms, or a user who uploaded it on none. That single fact, not custody or uptime, is what makes media software its own discipline: every design decision is really about content you do not own, and the liability for getting it wrong reaches whoever built the distribution." },
  { icon: <IconLock className="h-5 w-5" />, t: "Every item needs a provable licence", d: "A stream, a play, a download or a republish is lawful only if a live permission sits behind it - and licences expire, differ by territory, and open and close by release window. Copyright statutory damages attach per work, so a catalog of thousands of titles is thousands of possible counts. That is why the rights have to be data the software can check before it serves, not an assumption in a spreadsheet." },
  { icon: <IconShield className="h-5 w-5" />, t: "Safe harbor is a behaviour, not a status", d: "If your platform hosts what users upload, the legal shelter that lets you do it is not a form you file once. It is kept alive by what your code does over time - a DMCA agent registered and renewed on a three-year clock, takedowns actually actioned, counter-notices actually reviewed, a repeat-infringer policy actually enforced - and it can fall away, retroactively, for everything ever uploaded, if one condition lapses." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Two shelters, two condition-sets", d: "A user-content platform relies on two different shelters at once. Section 230 covers third-party content torts like defamation but expressly does not cover intellectual property, which is why copyright lives under the separate DMCA 512 safe harbor with its own conditions. Building them as one pipeline is the amateur tell; we architect copyright takedowns and content-tort moderation as distinct systems with distinct triggers and proofs." },
  { icon: <IconEye className="h-5 w-5" />, t: "A tag near video can name you a defendant", d: "The Video Privacy Protection Act bars disclosing what a person watched without consent, and a live wave of class actions alleges an analytics or ad pixel dropped next to video does exactly that. The exposure is a software decision - a tag added to a video page can turn your site into a defendant - so third-party tags near video have to load behind consent, and viewing identifiers have to stay out of anything that leaves your domain." },
  { icon: <IconServer className="h-5 w-5" />, t: "We would rather scope than guess", d: "A media platform is custom software. It enters through a paid discovery that ends in a written scope, a map of where the rights, the uploads and the viewing data flow and which pieces you should buy rather than build, and a fixed price - because the alternative is a whole-platform quote invented before anyone knew whether you needed DRM, a moderation stack, a paywall, a ticket engine, or just the machinery around a product you already have." },
];

export function EntertainmentWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                &quot;Can you build me a copyright-safe, DMCA-compliant platform?&quot;{" "}
                <span className="gradient-text">No one can, and be wary of any vendor who says they can.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                &quot;DMCA-compliant&quot; is not a state software ships in. Safe harbor is something
                your platform keeps qualifying for by how it behaves - a DMCA agent kept registered and
                renewed every three years, takedowns actually actioned, counter-notices actually
                reviewed, a repeat-infringer policy actually enforced - and it can fall away
                retroactively if one of those lapses. Whether your catalog itself is licensed depends
                on licences we do not hold and cannot verify for you.{" "}
                <span className="font-semibold text-foreground">What we can do is build the machinery</span>{" "}
                - the entitlement checks, the takedown and counter-notice pipeline, the renewal
                reminder, the audit trail - so that meeting those obligations is something your team
                can actually do and prove. The compliance is yours and your counsel&apos;s. The
                software that makes it reachable is ours.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why entertainment and media is different"
            title="What building for media actually demands"
            sub="Every sector claims to be special. In this one you are almost never the author of what your platform carries, every item you serve needs a permission that may already have expired, and the legal shelter for hosting what users upload is only as current as your last renewal and your last actioned takedown."
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

        {/* The anti-recommendation. id="when-not" matches the sibling pages. BOTH HALVES: the refusals,
            then where custom genuinely wins. No legal conclusion about the buyer. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;d tell you not to build, and when we&apos;d turn the work down
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">
              If a turnkey streaming, publishing or ticketing platform you configure gets you to a
              generic player, paywall or ticket page faster and cheaper than a build, use it and keep
              your money - that is a column in the table below, and it is the honest answer more often
              than a bespoke platform. If what you need is large-scale automated content matching or
              fingerprinting - the Content ID-class problem - that is a specialist product to
              integrate, not to rebuild from scratch, and we will point you to the integration rather
              than bill you to reinvent it. If the project is really a native, game-engine or
              Web3/NFT build - Unity, Unreal, crypto, token-gating - that is scoped out; we have zero
              exposure and will not pretend otherwise. And if you want a vendor to take the liability -
              to be your licensing counterparty, your rights system-of-record and royalty payer, or
              your host of record so the copyright risk sits with someone else - that vendor is not us;
              the legal role does not transfer, and anyone who says it does is selling you something
              that is not real.{" "}
              <span className="font-semibold text-foreground">Where a custom build genuinely wins:</span>{" "}
              when the rights, entitlement, moderation, safe-harbor and consent machinery is the part
              no package gives you, and that machinery is the product. That is{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
                where a media build is scoped before it&apos;s priced
              </Link>
              , and we will make that case with you in writing. Talking you out of a platform you
              don&apos;t need to build is the only credential we can offer before the first media build
              ships.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
