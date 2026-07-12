import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrow, IconCheck } from "@/components/icons";
import { siteConfig } from "@/config/site";

// Unlike the mobile/custom-software pages, the SITE'S OWN metrics ARE honest,
// relevant proof for a marketing/SEO page - so we lean in and invite the visitor
// to verify. No fabricated client traffic, rankings, ROI, reviews, or guarantees.
const pageSpeedUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(siteConfig.url)}`;
const richResultsUrl = `https://search.google.com/test/rich-results?url=${encodeURIComponent(siteConfig.url)}`;

const weReport = [
  "Organic + AI-referral sessions and conversions",
  "Which pages get indexed and cited",
  "Core Web Vitals and technical health",
  "Topic-cluster and keyword-group progress",
];
const weWont = [
  "Raw impression or follower counts",
  "Domain Authority / Domain Rating (not Google metrics)",
  "Total backlinks or 'posts published'",
  "Any 'we ranked you #1' screenshot",
];

export function MarketingProof() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            title={<>We can&apos;t show you a client&apos;s traffic chart yet. <span className="gradient-text">So check ours.</span></>}
            eyebrow="Proof, honestly"
            sub="We're a registered company since 2016 but a young dedicated marketing practice, so we won't wave a client result we haven't earned. Instead, here's the more honest proof: this very site, measured and in front of you."
          />
        </Reveal>

        {/* Site-as-proof, verifiable */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-lg font-bold text-foreground">This site is the work</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                It passes Core Web Vitals, scores 100 on Lighthouse, and ships complete, valid
                structured data - built answer-first for AI search. That&apos;s the exact discipline
                we&apos;d apply to your site. Don&apos;t take our word for it - run it yourself:
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={pageSpeedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-brand-500 transition-colors hover:border-brand-400/60 hover:text-brand-600"
                >
                  Check our Lighthouse &amp; Core Web Vitals
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href={richResultsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-brand-500 transition-colors hover:border-brand-400/60 hover:text-brand-600"
                >
                  Validate our schema in Rich Results
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* No vanity metrics - what we report vs what we won't */}
        <Reveal group className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="card p-6">
            <h3 className="font-display text-sm font-semibold text-foreground">What we report</h3>
            <ul className="mt-3 space-y-2">
              {weReport.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-sm font-semibold text-foreground">What we won&apos;t wave at you</h3>
            <ul className="mt-3 space-y-2">
              {weWont.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-muted-foreground/60">-</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">And we&apos;ll never guarantee a ranking.</span>{" "}
            No one controls Google&apos;s algorithm, and anyone who promises a #1 spot is either
            misinformed or about to risk your domain with tactics that get sites penalized. We
            guarantee the quality of the work, a live dashboard, and honest monthly reporting -
            including when something underperforms and how we&apos;ll fix it.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
