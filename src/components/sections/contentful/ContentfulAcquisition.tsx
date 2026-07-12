import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The Salesforce-acquisition beat - a distinctive, unspent honest-broker section no sibling has, and the
// ONE place on the page the deal is treated (billing everywhere else is "Contentful directly", never
// "soon Salesforce"). VERSION-CONSERVATIVE, the Astro-Cloudflare governance discipline: the deal is
// SIGNED, NOT CLOSED. Print rule (red-team-locked): "agreed to be acquired", "announced mid-2026",
// "signed a definitive agreement", "not yet closed", "awaiting regulatory approval". NEVER "Salesforce
// owns Contentful" / "a Salesforce product". NO close date (sources disagree: 2026 vs 2027 - any date is
// a refutation risk), NO price figure. Exactly ONE attributed continuity clause (Contentful's stated
// position, not settled fact). Neither hype nor fear - a buyer-diligence fact tied to the ownership honesty.
export function ContentfulAcquisition() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The Salesforce acquisition"
            title="Is Contentful still a good choice after the Salesforce acquisition?"
            sub="A material platform fact, stated the way we would want it stated to us - not as news, and not as a reason to panic or to celebrate."
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1] max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                In mid-2026 Contentful announced it had signed a definitive agreement to be acquired by
                Salesforce. As we write this, that deal has not closed and is awaiting regulatory approval.
                We are not printing a close date or a price, because neither is settled and both would age
                badly. We raise it for one reason: when you rent a platform rather than own it, who owns
                the platform is part of your diligence.
              </p>
              <p>
                Contentful has said its API-first architecture and enterprise support will continue through
                the transition, with its direction being to enhance Salesforce&apos;s headless offering
                rather than replace what you build. Read that as a signal of enterprise gravity, not as a
                guarantee and not as a reason for alarm - it is Contentful&apos;s stated position on a deal
                that is not yet final, and a team choosing a long-term content backend should weigh it with
                open eyes. Salesforce does not own Contentful today, and no one should plan as if it does
                until the deal closes.
              </p>
              <p>
                Whatever the ownership badge above the platform, the honesty below it does not change: your
                content and content model stay portable and yours, exportable through the API and the CLI,
                and the running service stays rented. That is exactly why we make the platform call on
                genuine fit at genuine scale - the axis this whole page is about - rather than on who signed
                what this quarter.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
