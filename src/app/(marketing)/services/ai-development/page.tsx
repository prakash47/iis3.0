import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { servicePageSeo } from "@/config/seo";
import { getService } from "@/content/catalog";
import { CtaBand } from "@/components/sections/CtaBand";
import { AiHero } from "@/components/sections/ai/AiHero";
import { AiScope } from "@/components/sections/ai/AiScope";
import { AiProcess } from "@/components/sections/ai/AiProcess";
import { AiGrounded } from "@/components/sections/ai/AiGrounded";
import { AiProof } from "@/components/sections/ai/AiProof";
import { AiCompare } from "@/components/sections/ai/AiCompare";
import { AiFaq } from "@/components/sections/ai/AiFaq";

const SLUG = "ai-development";
const PATH = `/services/${SLUG}`;

export const metadata: Metadata = metadataFrom(servicePageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "AI Development", path: PATH },
];

export default function AiDevelopmentPage() {
  const service = getService(SLUG)!;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {/* No Offer schema: AI is scoped to requirement, so there is no published fixed price to mark up. */}
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description:
            "Applied AI development - AI chatbots and assistants trained on your content (RAG), AI workflow automation, and AI features embedded in your existing site or app - for startups, SMBs and enterprises. Grounded in your data, model-agnostic, with guardrails and human oversight, and you own the code, prompts and data. Scoped to your requirement.",
          path: PATH,
          serviceType: "AI development",
        })}
      />
      <JsonLd
        data={webPageSchema({
          path: PATH,
          name: "AI Development & Automation Services",
          dateModified: new Date().toISOString(),
        })}
      />

      <AiHero crumbs={crumbs} />
      <AiScope />
      <AiProcess />
      <AiGrounded />
      <AiProof />
      <AiCompare />
      <AiFaq />

      <CtaBand
        title="Have an AI idea worth testing?"
        subtitle="Book a discovery call, or start with a small pilot on your own data - see it work before you commit to the build. You own everything, and we'll tell you honestly if AI isn't the answer."
        primary={{ label: "Book a discovery call", href: "/contact" }}
        secondary={{ label: "See how we work", href: "#how-we-work" }}
      />
    </>
  );
}
