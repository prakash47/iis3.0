import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo/jsonLd";

/**
 * Marketing chrome. Lifted verbatim from the old root layout body so every public
 * page keeps the founder-final Header/Footer/MobileCtaBar + the sitewide
 * Organization/WebSite JSON-LD. The `/studio` route sits OUTSIDE this group so it
 * renders in the bare shell with no marketing chrome. Route groups do not change
 * any URL - every path is byte-identical to before the move.
 */
export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-full flex-col pb-[4.75rem] lg:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
