import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconPlay, IconFileText, IconChat, IconTag, IconLock, IconEye, IconArrow } from "@/components/icons";

// CAPABILITY TENSE ONLY. Zero streaming/publishing/UGC/ticketing clients shipped, so every card
// describes what a job of this shape involves and how we would approach it - never "the platforms we
// run" or "our media clients". The word "app" stays out of the headings.
//
// EVERY CARD IS ON THE SOFTWARE SIDE OF THE AUTHORSHIP LINE. None of them makes us the licensing
// counterparty, the royalty payer, the rights system-of-record, or the host of record. Rights and
// entitlement data is the CLIENT's system-of-record we integrate with; DRM is the client's chosen
// license service we wire the player to; payments route to /industries/fintech.
//
// THE STORE HAND-OFF: a NEW goods-selling brief routes to Shopify/Woo; the bridge (in Proof) claims
// OUR PAST store as the searchable-catalog/entitlement-gate skeleton. Two different subjects, kept
// unambiguous.
const uses = [
  { icon: <IconPlay className="h-5 w-5" />, t: "Streaming and video-on-demand platforms", d: "Adaptive video and audio delivery, a searchable catalog and playback UX, and entitlement resolution that answers can this viewer play this title on this device right now - with licensing windows and territory enforced at request time, over CMAF-packaged HLS and DASH with the client's chosen multi-DRM." },
  { icon: <IconFileText className="h-5 w-5" />, t: "Digital publishing and news platforms", d: "A headless content model and editorial workflow - draft, review, scheduled publish, correction with an audit trail - behind a fast, crawlable front end, with metered, hard or hybrid paywalls enforced server-side rather than as an overlay a reader can bypass." },
  { icon: <IconChat className="h-5 w-5" />, t: "Creator and community platforms", d: "Upload and creator tooling with a moderation gate before public exposure, and the DMCA notice-and-takedown, counter-notice and repeat-infringer machinery, plus trust-and-safety tooling, that keeps the legal shelter for hosting other people's content alive - built for you to operate, never operated by us." },
  { icon: <IconTag className="h-5 w-5" />, t: "Event ticketing and venue front ends", d: "Event discovery, seat and venue-map selection, and inventory held with time-boxed locks so a seat is never double-booked under an on-sale rush, with all-in price shown up front and enforceable purchase limits - the ticketing correctness a demo never stress-tests. Payments ride a licensed processor." },
  { icon: <IconLock className="h-5 w-5" />, t: "Rights, entitlements and content metadata", d: "The data model that carries each item's rights facts - licence window, territory, holdback, platform rules - alongside the media, and the admin surface where your rights team sets and sees them, so an expired or out-of-territory item cannot be served by accident. Your rights system-of-record; we build the software that honours it." },
  { icon: <IconEye className="h-5 w-5" />, t: "Accessible players and caption pipelines", d: "A player and authoring pipeline built so captions, subtitles, audio description and described-audio tracks can be authored, ingested, synchronized and rendered in accessible player controls - built to the accessibility requirements as a method, never claimed as a finished accessible state." },
];

export function EntertainmentScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build for entertainment and media"
            title="The platform and the machinery - not the licence or the liability"
            sub="Media software is content delivery plus the machinery that keeps carrying other people's content lawful: entitlements, moderation, takedown, consent and honest ticketing. The rights sit with the licensor, the money and the licensed roles sit with the seller or the platform, and the interesting engineering is the delivery, the gating and the safe-harbor machinery. A typical engagement is one of these:"
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {uses.map((u) => (
            <div key={u.t} className="card flex items-start gap-4 p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {u.icon}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{u.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{u.d}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                What this page is, and where the build actually lives
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                This page is about the sector, what building for it demands, and which roles - the
                licensee, the rights-holder, the royalty payer, the host of record - stay yours. The
                engagement itself is priced and scoped on the service pages:
              </p>

              <ul className="mt-6 grid gap-3">
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      A bespoke platform or the machinery, scoped before it is priced
                    </span>
                    {" - "}
                    a streaming backend, a community platform or a rights-and-shelter machinery layer
                    is custom software, so it enters through{" "}
                    <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
                      where a media build is scoped before it&apos;s priced
                    </Link>
                    . A publishing or news site is often web-dev-shaped -{" "}
                    <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
                      our web design and development service
                    </Link>{" "}
                    - and which stack any of it lands on is answered on{" "}
                    <Link href="/technologies" className="font-medium text-brand-500 hover:text-brand-600">
                      how we choose the stack
                    </Link>
                    .
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      Subscriptions, ticket payments and money are a licensed, separate job
                    </span>
                    {" - "}
                    the money movement, the cardholder-data environment and the billing engine ride a
                    licensed processor, not us. It is the same regulated-rails posture as{" "}
                    <Link href="/industries/fintech" className="font-medium text-brand-500 hover:text-brand-600">
                      the way we build for fintech
                    </Link>
                    . We build the paywall gate, the ticket-inventory and the subscription flows; the
                    payment core is theirs.
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      A store, an app, and AI
                    </span>
                    {" - "}
                    a shop that sells physical goods with a cart and checkout is{" "}
                    <Link href="/technologies/shopify" className="font-medium text-brand-500 hover:text-brand-600">
                      a Shopify
                    </Link>{" "}
                    or{" "}
                    <Link href="/technologies/woocommerce" className="font-medium text-brand-500 hover:text-brand-600">
                      WooCommerce
                    </Link>{" "}
                    build, not a media platform; a native mobile experience is{" "}
                    <Link href="/services/mobile-app-development" className="font-medium text-brand-500 hover:text-brand-600">
                      a mobile build, on honest terms
                    </Link>{" "}
                    - and we have shipped no mobile app for anyone yet. Recommendations, tagging or
                    moderation assistance with AI routes to{" "}
                    <Link href="/services/ai-development" className="font-medium text-brand-500 hover:text-brand-600">
                      adding AI to a media product, carefully
                    </Link>
                    .
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
