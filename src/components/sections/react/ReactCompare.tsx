import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Deliberately DIFFERENT from the Next.js page's comparison (which is vs WordPress
// / Astro). This is the React-library comparison - React vs Angular vs Vue - the
// AEO goldmine for this page. Kept fair and qualitative (no unverifiable stats).
const cols = ["", "React", "Angular", "Vue"];
const rows = [
  { dim: "Type", react: "UI library", angular: "Full framework", vue: "Progressive framework" },
  { dim: "Ecosystem & talent", react: "Largest of the three", angular: "Large, enterprise-leaning", vue: "Growing" },
  { dim: "Structure", react: "Flexible - assemble your own", angular: "Opinionated - batteries included", vue: "Flexible but guided" },
  { dim: "Learning curve", react: "Moderate", angular: "Steeper", vue: "Gentle" },
  { dim: "Best for", react: "Interactive UIs, big talent pool, mobile reach", angular: "Large enterprise apps wanting one prescribed way", vue: "Fast, simpler builds and incremental adoption" },
  { dim: "Path to mobile", react: "React Native", angular: "Ionic / NativeScript", vue: "Ionic / NativeScript" },
  { dim: "Our take", react: "Our default for interactive web", angular: "When you want everything prescribed", vue: "Great - just a smaller ecosystem" },
];

export function ReactCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="React vs Angular vs Vue"
            title={<>The honest 2026 <span className="gradient-text">framework comparison</span></>}
            sub="We're stack-agnostic, so this is fair, not a pitch. All three are excellent - the real choice in 2026 is about hiring, team size and how much structure you want."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    {cols.map((c, i) => (
                      <th
                        key={c || "dim"}
                        scope="col"
                        className={
                          i === 1
                            ? "bg-brand-500/10 p-4 font-bold text-brand-700 dark:text-brand-400"
                            : "p-4 font-semibold text-foreground"
                        }
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.dim} className={i < rows.length - 1 ? "border-b border-border" : ""}>
                      <th scope="row" className="p-4 font-semibold text-foreground">{r.dim}</th>
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">{r.react}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.angular}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.vue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            The 2026 convergence: all three are moving to fine-grained reactivity - Angular added
            signals and zoneless change detection, React shipped its Compiler, Vue advanced Vapor
            mode - so the pick is less about raw performance and more about your team.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
