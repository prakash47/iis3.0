/**
 * Per-service page content. Honest, distinct copy per service (avoids the
 * thin/duplicate-content penalty). Expand these into full 1,500-2,500 word
 * pages (or move to the CMS) before public launch - deep, unique content is
 * what ranks and gets cited.
 */
export interface ServiceDetail {
  intro: string;
  highlights: string[];
  faqs: { question: string; answer: string }[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "web-design-development": {
    intro:
      "We design and build fast, accessible, SEO-ready websites and web apps on a modern Next.js/React stack. From a conversion-focused marketing site to a full SaaS product, every build ships with real Core Web Vitals scores and complete structured data.",
    highlights: [
      "Custom websites, business/corporate sites and portfolios",
      "Web apps & SaaS platforms with authentication and dashboards",
      "Headless & traditional CMS (Sanity, Strapi, Contentful, WordPress)",
      "E-commerce on Shopify or custom Next.js commerce",
      "Perfect-Lighthouse performance and Core Web Vitals by default",
      "Schema, metadata and AI-search (AEO/GEO) readiness built in",
    ],
    faqs: [
      {
        question: "Which framework do you build on?",
        answer:
          "We default to Next.js with React for the best balance of performance, SEO and maintainability, and use headless CMS where content velocity matters. We also build on WordPress, Laravel, Django and Astro when they fit the project better.",
      },
      {
        question: "Will my site pass Core Web Vitals?",
        answer:
          "Yes - passing all three Core Web Vitals is a baseline for every build, not an upsell. We share the real Lighthouse and field metrics before launch.",
      },
    ],
  },
  "mobile-app-development": {
    intro:
      "We build mobile apps that feel native and ship fast - cross-platform with React Native or Flutter when speed and budget matter, or fully native (SwiftUI, Kotlin) when the product demands it. PWAs too, when an install-free experience is the right call.",
    highlights: [
      "Cross-platform apps with React Native, Flutter and Kotlin Multiplatform",
      "Native iOS (SwiftUI/UIKit) and Android (Kotlin) builds",
      "Progressive Web Apps (PWA) for install-free reach",
      "App Store & Play Store submission and release management",
      "Backend, APIs and real-time features",
    ],
    faqs: [
      {
        question: "Native or cross-platform - which should I choose?",
        answer:
          "For most startups and SMBs, cross-platform (React Native or Flutter) delivers one codebase for iOS and Android at a lower cost and faster timeline. We recommend native only when you need deep platform-specific performance or hardware features.",
      },
    ],
  },
  "digital-marketing": {
    intro:
      "Traffic that turns into leads. We run SEO, social media, performance marketing and email as one connected engine - built on measurement, not vanity metrics - so every rupee and dollar is accountable to pipeline.",
    highlights: [
      "SEO: technical, content, topical authority and AI-search (AEO/GEO)",
      "Social media marketing and optimization (SMM/SMO)",
      "Performance marketing on Google, Meta and LinkedIn",
      "Email marketing and lifecycle nurture",
      "Analytics, attribution and conversion-rate optimization",
    ],
    faqs: [
      {
        question: "Do you offer SEO and development together?",
        answer:
          "Yes - that's our advantage. Because we build the site and run the SEO, technical foundations, schema and content architecture are correct from day one instead of being retrofitted.",
      },
    ],
  },
  "ui-ux-branding": {
    intro:
      "Design that converts and a brand that sticks. We craft product UI/UX, design systems and brand identities that are beautiful, accessible and grounded in how your users actually behave.",
    highlights: [
      "Product UI/UX design and prototyping",
      "Design systems and component libraries",
      "Brand identity, logo and visual guidelines",
      "Accessibility (WCAG) baked into every screen",
      "Design-to-development handoff done right",
    ],
    faqs: [
      {
        question: "Can you redesign our existing product?",
        answer:
          "Absolutely. We run a UX audit, identify the highest-impact fixes, and redesign iteratively so you see conversion and usability gains without a risky big-bang rebuild.",
      },
    ],
  },
  "website-maintenance": {
    intro:
      "Keep your site fast, secure and current. Our care plans cover hosting, monitoring, security patching, performance and content updates - so your site stays a growth asset, not a liability.",
    highlights: [
      "Managed hosting, backups and uptime monitoring",
      "Security patching and dependency updates",
      "Core Web Vitals and performance monitoring",
      "Content updates and small feature work",
      "Priority support with clear SLAs",
    ],
    faqs: [
      {
        question: "Do you maintain sites you didn't build?",
        answer:
          "Yes. We start with a health and security audit, stabilize the site, then move it onto a predictable care plan.",
      },
    ],
  },
  "ai-solutions": {
    intro:
      "Practical AI that saves time and wins customers. We build AI chatbots trained on your content and workflow automations that remove repetitive work - integrated cleanly into your site and tools.",
    highlights: [
      "AI chatbots trained on your business content (RAG)",
      "Workflow automation across your existing tools",
      "AI features embedded into your website or app",
      "Sensible guardrails, privacy and human-in-the-loop",
    ],
    faqs: [
      {
        question: "Can the chatbot use our own documents and data?",
        answer:
          "Yes - we build retrieval-augmented chatbots grounded in your content so answers are accurate and on-brand, with sources and safe fallbacks.",
      },
    ],
  },
};
