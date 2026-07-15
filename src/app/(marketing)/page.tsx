import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { PerformanceProof } from "@/components/sections/PerformanceProof";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { WhyUs } from "@/components/sections/WhyUs";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { ProcessBand } from "@/components/sections/ProcessBand";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { webPageSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata("/");

export default function Home() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: "Web, App & Software Development - Intention InfoService",
        })}
      />

      <Hero />

      {/* ── Performance proof (live Core Web Vitals) ─────────────────────── */}
      <PerformanceProof />

      {/* ── Services (bento) ─────────────────────────────────────────────── */}
      <ServicesBento />

      {/* ── Selected work / case studies (2 REAL, NDA-anonymized case studies) ───── */}
      <CaseStudies />

      {/* ── Why us ───────────────────────────────────────────────────────── */}
      <WhyUs />

      {/* ── Positioning comparison table ─────────────────────────────────── */}
      <ComparisonTable />

      {/* ── Process (statement band) ─────────────────────────────────────── */}
      <ProcessBand />

      {/* ── Industries ───────────────────────────────────────────────────── */}
      <IndustriesGrid />

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FAQ />

      <CtaBand />
    </>
  );
}
