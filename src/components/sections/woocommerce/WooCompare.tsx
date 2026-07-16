import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE COMPARE-TABLE PROBLEM, solved the WordPress way.
//
// ShopifyCompare already runs "Shopify vs WooCommerce vs a fully custom build". Re-running that
// axis here, reordered, would (a) near-duplicate our own published table, (b) drag Shopify onto
// WooCommerce's own page as a co-star, and (c) inevitably cast WooCommerce as the runner-up on the
// page that is supposed to sell it. WordpressCompare dodged exactly this by comparing against
// platforms we have NO pages for (Webflow, Squarespace) and keeping the real rivalry in prose.
//
// So: compare inside the SELF-HOSTED, OPEN-SOURCE family, where WooCommerce is the honest
// protagonist. Zero cannibalization (no Magento or PrestaShop pages), high AEO ("WooCommerce vs
// Magento" is a real query), and Shopify stays where it belongs - the caption, the FAQ and the
// anti-recommendation - with every Shopify mention byte-consistent with what ShopifyCompare and
// ShopifyFaq already publish.
//
// BigCommerce was considered for column 3 and rejected: it is a hosted SaaS platform, so its cells
// would near-duplicate ShopifyCompare's Shopify cells and drag the hosted-vs-self-hosted debate
// (which the Shopify page owns) back onto this one.
//
// CONSISTENCY LOCK: every WooCommerce cell on a dimension that also exists in ShopifyCompare is
// BYTE-IDENTICAL to the cell published there - so our two ecommerce spokes can never describe
// WooCommerce differently. "Foundation" and "Ecosystem & talent" are new dimensions, unconstrained.
const cols = ["", "WooCommerce", "Adobe Commerce (Magento)", "PrestaShop"];
const rows = [
  { dim: "What it is", woo: "WordPress plugin, self-hosted", magento: "Self-hosted enterprise commerce platform", presta: "Self-hosted open-source store platform" },
  { dim: "Foundation", woo: "Runs on WordPress - the CMS you may already have", magento: "A standalone, heavyweight platform", presta: "A standalone, lighter platform" },
  { dim: "Best for", woo: "Content-led stores with a shop attached", magento: "Large, complex catalogs with a dev team", presta: "Lean self-hosted stores, strongest in Europe" },
  { dim: "Hosting & ownership", woo: "You own and host it", magento: "You own and host it", presta: "You own and host it" },
  { dim: "Checkout & PCI", woo: "Yours, via plugins and a gateway", magento: "Yours to configure and secure", presta: "Yours, via modules and a gateway" },
  { dim: "Ecosystem & talent", woo: "The largest plugin and developer pool", magento: "Deep, but specialist and costlier to hire", presta: "Smaller, Europe-centred community" },
  { dim: "True cost driver", woo: "Plugins, hosting and upkeep", magento: "Servers, licences and specialist developers", presta: "Hosting, modules and upkeep" },
  { dim: "Time to launch", woo: "Weeks", magento: "Months", presta: "Weeks" },
  { dim: "Our take", woo: "When content leads and you want full control and ownership", magento: "When enterprise catalog complexity genuinely demands the weight", presta: "When you want lean open source outside the WordPress world" },
];

export function WooCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="WooCommerce vs Magento vs PrestaShop"
            title={<>The honest 2026 <span className="gradient-text">self-hosted store comparison</span></>}
            sub="We're stack-agnostic, so this is fair, not a pitch. All three are stores you own and host yourself. The real choice is how much platform weight you want to carry, and where the talent to maintain it is going to come from."
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
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">{r.woo}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.magento}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.presta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            All three hand you the store and the responsibility. If you&apos;d rather have neither,
            the hosted alternative most people mean is{" "}
            <Link href="/technologies/shopify" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              Shopify
            </Link>
            , which is usually the cleaner choice for a serious, product-first store because checkout,
            payments, inventory and PCI compliance are handled for you - it has its own comparison. And
            when no platform fits the commerce model at all, that&apos;s{" "}
            <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              a ground-up custom commerce platform
            </Link>
            . We recommend the fit, not the platform we sell.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
