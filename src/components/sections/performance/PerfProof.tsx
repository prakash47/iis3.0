import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";

// The tightest-trust page. We have NO paid-campaign results, and unlike the
// digital-marketing page our own site's SEO does NOT prove paid skill - so
// "this site is the proof" is NOT reused here. Proof = 100% structure, process,
// measurement, tenure and honesty. NO ROAS/CPA/spend numbers, no case studies.
const proofs = [
  { t: "You own the accounts & data", d: "Created in your name on day one. If you ever leave, every account, campaign and dataset stays with you." },
  { t: "No markup, ever", d: "Your ad spend goes to the platforms directly - there's literally nowhere for us to hide a fee." },
  { t: "A flat fee, not a cut of spend", d: "Telling you to cut a wasteful campaign never costs us a paycheck, so the advice stays honest." },
  { t: "Measurement done right", d: "We're engineers too - we build proper conversion tracking and attribution, not guesswork you can't trust." },
  { t: "Revenue reporting, no vanity metrics", d: "Leads, CPA and ROAS in plain English - never impressions and CTR dressed up as results." },
  { t: "Senior, and a company since 2016", d: "A registered business run by senior people - young in paid media, and honest about it." },
];

export function PerfProof() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            title={<>We won&apos;t wave a ROAS chart at you. <span className="gradient-text">Here&apos;s the honest proof.</span></>}
            eyebrow="Proof, honestly"
            sub="We're a registered company since 2016 but a young, dedicated paid-media practice - so we won't show you campaign results we haven't earned, and we'd be skeptical of any agency waving unverifiable ROAS screenshots. Our proof is the structure: how we operate, in writing, verifiable from day one."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {proofs.map((p) => (
            <div key={p.t} className="card p-6">
              <span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                <IconCheck className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
