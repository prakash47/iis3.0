import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";

// THE MAKE-OR-BREAK SECTION. We have zero mobile portfolio, no store ratings,
// and a website's Lighthouse score does NOT prove anything about a native app.
// So this section refuses the fake-portfolio play and builds trust from HONEST,
// checkable substitutes only. No case-study cards (the 2 real ones are web,
// not mobile), no rating badge (no Clutch profile yet), no device mockups.
const engineeringChips = [
  "Offline sync", "Push notifications", "Deep links", "Biometric auth",
  "App-store submission", "Over-the-air updates", "Real-device QA",
];

const riskReversal = [
  { t: "You own 100% of the code and IP", d: "Full ownership transfers to you on final payment - no lock-in, no license back to us." },
  { t: "We sign an NDA on request", d: "Your idea and data stay confidential from the first conversation." },
  { t: "Milestone-based payments", d: "Payments are tied to delivered, approved work - never 100% upfront." },
  { t: "We submit to the stores for you", d: "App Store and Google Play submission and release is part of the build, not your problem." },
  { t: "A registered company since 2016", d: "A real, incorporated business - not an anonymous freelancer or a marketplace listing." },
  { t: "Senior people, direct", d: "You work with the people building your app - no account managers, no offshore handoff." },
];

export function MobileProof() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            title={<>We won&apos;t show you a wall of <span className="gradient-text">app screenshots.</span></>}
            eyebrow="Proof, honestly"
            sub="We're a growing mobile practice, so we won't pretend to a portfolio we haven't shipped yet. Here's the more honest signal instead - what we engineer, how we protect you, and the terms in writing."
          />
        </Reveal>

        {/* engineering-depth signals */}
        <Reveal className="mt-10">
          <p className="text-sm font-semibold text-foreground">What we engineer into apps</p>
          <ul className="mt-3 flex flex-wrap gap-2.5">
            {engineeringChips.map((c) => (
              <li key={c} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-foreground">
                <IconCheck className="h-3.5 w-3.5 text-emerald-500" />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* risk-reversal - the heavy lifter where portfolio is thin */}
        <Reveal group className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {riskReversal.map((r) => (
            <div key={r.t} className="card p-5">
              <h3 className="font-display text-sm font-semibold text-foreground">{r.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </Reveal>

        {/* honest shared-backbone note (real web work, clearly labelled) */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The engine behind an app, we&apos;ve already shipped
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">
              The backend, APIs, authentication and real-time features a serious app needs are the
              same ones we build for the web - and we&apos;ve shipped those in production.{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                See our web and app work
              </Link>{" "}
              (web projects, honestly labelled - not dressed up as app screenshots).
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
