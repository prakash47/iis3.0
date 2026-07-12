import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The ecommerce decision a buyer actually faces, Shopify highlighted (col index 1).
// Deliberately NOT "Shopify vs Next.js" - that would invent a rivalry and drag the fenced
// headless nuance to centre stage. Headless is a Shopify variant, not a peer platform, so it
// lives in the caption, Capabilities and the FAQ rather than as a fourth column.
//
// CONSISTENCY LOCK with WordpressFaq.tsx ("For a serious, product-first store, Shopify is
// usually the cleaner choice - checkout, payments, inventory and PCI compliance are handled for
// you. WordPress sells online through WooCommerce, which is the right call when the store is
// content-led ... and you want full control and ownership."). These cells restate that, and they
// become the lock the future bespoke /technologies/woocommerce page must honor, so WooCommerce
// is drawn fairly here rather than as a straw man.
const cols = ["", "Shopify", "WooCommerce", "A fully custom build"];
const rows = [
  { dim: "What it is", shopify: "Hosted commerce platform", woo: "WordPress plugin, self-hosted", custom: "Bespoke store on your own back end" },
  { dim: "Best for", shopify: "Serious, product-first stores", woo: "Content-led stores with a shop attached", custom: "Commerce models no platform fits" },
  { dim: "Hosting & ownership", shopify: "Shopify hosts and runs it", woo: "You own and host it", custom: "You own and host it" },
  { dim: "Checkout & PCI", shopify: "Shopify's, handled for you", woo: "Yours, via plugins and a gateway", custom: "Yours to build and secure" },
  { dim: "Customization ceiling", shopify: "Capped by the platform - deep checkout control needs Plus", woo: "Near-unlimited, and you maintain all of it", custom: "None, and you pay for that" },
  { dim: "True cost driver", shopify: "Apps and gateway fees", woo: "Plugins, hosting and upkeep", custom: "Build cost and engineering time" },
  { dim: "Time to launch", shopify: "Weeks", woo: "Weeks", custom: "Months" },
  { dim: "Our take", shopify: "When you want a serious store live fast, without running commerce infrastructure", woo: "When content leads and you want full control and ownership", custom: "When the commerce model is the product" },
];

export function ShopifyCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Shopify vs WooCommerce vs custom"
            title={<>The honest 2026 <span className="gradient-text">ecommerce platform comparison</span></>}
            sub="We're stack-agnostic, so this is fair, not a pitch. All three sell products online. The real choice is who runs the checkout, who owns the stack, and how much you're prepared to maintain yourself."
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
                            ? "bg-brand-500/10 p-4 font-bold text-brand-600 dark:text-brand-400"
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
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">{r.shopify}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.woo}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.custom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            There&apos;s a fourth path we build too: headless Shopify, where Shopify keeps the catalog,
            cart and checkout and a{" "}
            <Link href="/technologies/nextjs" className="font-medium text-brand-500 hover:text-brand-600">
              Next.js front end
            </Link>{" "}
            renders the storefront. It removes the front-end ceiling without giving up the checkout,
            and it earns its keep only when the storefront experience is genuinely the differentiator.
            Worth knowing: the column on the right is where our own production store sits, and we still
            point most brands at the column on the left. Deciding between the middle two?{" "}
            <Link href="/technologies/woocommerce" className="font-medium text-brand-500 hover:text-brand-600">
              WooCommerce has its own page
            </Link>
            , and a genuinely bespoke store is{" "}
            <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
              custom software
            </Link>
            . We recommend the fit, not the platform we sell.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
