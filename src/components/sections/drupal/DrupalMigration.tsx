import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The Drupal-7 migration beat - the highest-intent query on this page, given its own H2 section for AEO
// (the AngularJS-EOL analogue). VERSION-CONSERVATIVE: print the EOL only as "reached end of life in
// January 2025" (safe, past, first-party) - no "5 January", no Drupal 12 promise. HONEST-METHOD only:
// the Migrate API is the path, model fresh (fix, do not photocopy), URLs before cutover - and NEVER a
// named client, a "migrated in N weeks" timeline, or a post-migration metric (we have shipped none).
// Extended Security Support named as a BRIDGE, not a destination.
export function DrupalMigration() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Drupal 7 end of life"
            title="Still on Drupal 7? It reached end of life - moving to Drupal 11"
            sub="If your site is still on Drupal 7, this is the one thing on the page that is genuinely urgent. Here is the honest read, and the supported path off it."
          />
        </Reveal>

        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1] max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Drupal 7 reached end of life in January 2025. That means the community no longer ships
                security updates for it, so a new vulnerability can be disclosed with no fix coming. The
                Drupal Association runs an Extended Security Support program through vetted vendors for
                teams that genuinely cannot move yet - but that is a bridge to buy time, not a place to
                stay. The honest move is a planned migration to the current Drupal 11 line.
              </p>
              <p>
                We treat a Drupal 7 to Drupal 11 migration as a chance to fix the content model, not
                photocopy it. Using the core Migrate API, we map your old content types, fields, taxonomy
                and users into a freshly modelled Drupal 11 site, run the whole import into a
                non-production copy where we verify content and relationships before anything goes live,
                and map your URLs with redirects before cutover so your SEO equity and inbound links
                survive the move. We describe the method and the path, not a timeline or a percentage from
                a migration we have not run for you - the scope comes from an audit of what your site
                actually is, agreed before we start.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
