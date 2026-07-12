import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconShield, IconLayers, IconSearch, IconRefresh, IconLock } from "@/components/icons";

// THE WORD "APP" IS DELIBERATELY ABSENT from every headline surface, exactly as on the four sibling
// pages. Zero mobile apps shipped; "travel app development" in an H1 or meta implies a mobile
// portfolio. "Booking engines" and "reservation systems" everywhere; app intent routes to
// /services/mobile-app-development.
//
// THE WORD "COMPLIANT" NEVER APPEARS as a property of us or of software. "OTA" is NEVER used bare -
// the open standard is spelled "OpenTravel"; "Online Travel Agency" is spelled out for the business.
//
// The chips are architecture and boundary facts. "We don't become your seller of travel" is the
// fenced regulated role, stated as a claim about US (always true).
const trustChips = [
  { icon: <IconShield className="h-4 w-4" />, label: "The interface never promises what the supplier can't deliver" },
  { icon: <IconCheck className="h-4 w-4" />, label: "We don't become your seller of travel or hold the money" },
  { icon: <IconLayers className="h-4 w-4" />, label: "Built to open standards: NDC and OpenTravel" },
];

// Not a "tech in 2026" card - an industry page has no version. Where healthcare's card stated who
// each obligation binds, fintech's where the money lives, and real-estate's where the risk sits,
// this one states WHO KEEPS THE PROMISE AND WHO IS ON THE HOOK, because that is the page's thesis:
// a booking is a real-world promise, and one feature can change who legally owes it.
const facts = [
  { icon: <IconSearch className="h-4 w-4" />, k: "Availability", v: "Reconfirmed before it's promised" },
  { icon: <IconRefresh className="h-4 w-4" />, k: "The worst day", v: "Irrops and rebooking, built in" },
  { icon: <IconShield className="h-4 w-4" />, k: "Who owes the trip", v: "The seller, and we flag it" },
  { icon: <IconLock className="h-4 w-4" />, k: "The money", v: "On a licensed processor, not us" },
];

/**
 * The FIFTH bespoke industry page, built on the pattern the four siblings established.
 *
 * SLUG NOTE: the slug is "travel" (changed from "travel-hospitality" - the edtech-lms -> edtech
 * move) while the display NAME stays "Travel & Hospitality". The money keywords ride the H1/body.
 *
 * The gradient span carries the thesis no other page has: a booking is a promise to deliver
 * something you do not own, at a place and time far from the click - so the software's job is to
 * not promise what the inventory, the supplier or the licence cannot deliver. The failure lives in
 * an UNDELIVERABLE PROMISE landing on a stranded traveller, not in data (healthcare), a number
 * (fintech), or a discriminatory output (real-estate).
 */
export function TravelHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Travel &amp; Hospitality</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Custom travel software and booking engines -{" "}
                <span className="gradient-text">built so a booking stays a promise you can keep, long after the screen says yes.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds booking and search engines, reservation and itinerary
                systems, hotel and hospitality platforms, agent and traveller portals, and the
                supplier integrations behind them - on the open standards travel runs on: NDC and the
                OpenTravel messaging standard, with GDS, channel-manager and property-system access
                under your own agreements. A booking is a promise to deliver a seat or a room you
                don&apos;t own, so we build the interface to never promise what the supplier can&apos;t
                honour. What we will not do is become your seller of travel, hold the traveller&apos;s
                money, or let one bundling feature quietly change what your business legally is.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Discuss your project
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="#when-not" variant="ghost" size="lg">
                  When we&apos;d say no
                </Button>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                A paid discovery first, a fixed price before any build, and the code is yours.
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {trustChips.map((c) => (
                  <li key={c.label}>
                    <TrustChip icon={c.icon}>{c.label}</TrustChip>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 lg:justify-self-end">
              <div className="card glow-border relative w-full max-w-sm overflow-hidden p-6">
                <p className="relative z-[1] flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Who keeps the promise
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Not us
                  </span>
                </p>
                <dl className="relative z-[1] mt-5 space-y-4">
                  {facts.map((f) => (
                    <div key={f.k} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-brand-500">
                        {f.icon}
                      </span>
                      <div className="min-w-0">
                        <dt className="text-xs text-muted-foreground">{f.k}</dt>
                        <dd className="font-display text-sm font-semibold text-foreground">{f.v}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
                <p className="relative z-[1] mt-5 border-t border-border pt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
                  The screen says confirmed; the airport is where it comes true.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
