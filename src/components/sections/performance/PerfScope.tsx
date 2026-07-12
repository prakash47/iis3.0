import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";

// The paid-media stack, grouped into 4 clusters (reads as strategy, not a flat
// list). PAID only - organic (SEO/content/social/email) lives on the sibling
// digital-marketing page and must not appear here.
const clusters = [
  { title: "Paid search", items: ["Google Ads - Search", "Google Shopping", "Performance Max (PMax)", "Microsoft Ads (Bing)"] },
  { title: "Paid social", items: ["Meta - Facebook & Instagram", "LinkedIn Ads", "TikTok Ads", "And where your buyers are"] },
  { title: "Display, video & retargeting", items: ["Display & programmatic", "YouTube & video ads", "Retargeting / remarketing"] },
  { title: "Making the spend work", items: ["Conversion tracking & attribution", "Ad creative & testing", "Landing-page CRO for paid", "Strategy & account management"] },
];

export function PerfScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we run"
            title="One paid-media practice, across every channel that fits"
            sub="We recommend channels by where your buyers already are and what your budget can prove - not by what we prefer to run. We won't sell you TikTok if your buyers are on LinkedIn."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2">
          {clusters.map((c) => (
            <div key={c.title} className="card p-6">
              <h3 className="font-display text-base font-semibold text-foreground">{c.title}</h3>
              <ul className="mt-3 grid gap-2">
                {c.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        {/* Boundary vs the organic sibling */}
        <Reveal className="mt-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Paid buys attention now; organic earns it over time - and we&apos;ll tell you honestly
            when your money is better spent on organic first. Want the organic half - SEO,
            content, social and email?{" "}
            <Link href="/services/digital-marketing" className="font-medium text-brand-500 hover:text-brand-600">
              See digital marketing
            </Link>
            . Most clients run both.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
