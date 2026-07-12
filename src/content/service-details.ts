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
  "custom-software-development": {
    intro:
      "Custom software built around your business, not a template. We design and engineer internal tools, dashboards, SaaS platforms, customer portals, APIs and automations - on the stack that best fits your reliability, security and budget. From a first working version to a system that scales, every build ships measured, documented and maintainable.",
    highlights: [
      "SaaS platforms and multi-tenant products",
      "Internal tools, admin panels and business dashboards",
      "APIs, integrations and third-party system connections",
      "Workflow automation and process digitization",
      "Database design, authentication and role-based access",
      "Built on the right stack - Node.js, Laravel, Django, Java, Next.js and more",
    ],
    faqs: [
      {
        question: "What kinds of custom software do you build?",
        answer:
          "We build SaaS products, internal tools, admin dashboards, customer portals, APIs, integrations and workflow automations. We start from your process and data, then engineer a system on the stack that best fits your reliability, security and budget needs.",
      },
      {
        question: "Which technology stack do you use for custom software?",
        answer:
          "We choose per project - Node.js, Laravel, Django, Java and Spring Boot on the backend, React or Next.js on the front end, and a database picked for your data. The stack serves your requirements, not the other way around.",
      },
    ],
  },
  "digital-marketing": {
    intro:
      "Traffic that turns into leads. We run SEO, social media, performance marketing and email as one connected engine - built on measurement, not vanity metrics - so every dollar is accountable to pipeline.",
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
  "performance-marketing": {
    intro:
      "Paid campaigns that answer to revenue, not vanity metrics. We plan, run and optimize paid search and paid social - and we keep it honest: you own the ad accounts and data, we never mark up your ad spend, and we charge a flat fee, not a cut of your budget.",
    highlights: [
      "Paid search - Google Ads, Shopping and Performance Max",
      "Paid social - Meta, LinkedIn and more",
      "Retargeting, display and video ads",
      "Conversion tracking and revenue-focused attribution",
      "Transparent reporting - cost per result and ROAS, never impressions",
      "You own the ad accounts and data - no lock-in, no spend markup",
    ],
    faqs: [
      {
        question: "Do you charge a percentage of ad spend?",
        answer:
          "No. We charge a flat, transparent management fee, so our incentive is your results, not a bigger budget. You pay the ad platforms directly and own the accounts and data.",
      },
    ],
  },
  // Superseded by the dedicated /services/ui-ux-design-services route (this entry
  // is dead once the slug is in DEDICATED_SERVICE_PAGES); kept slug-consistent.
  "ui-ux-design-services": {
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
  // Superseded by the dedicated /services/website-maintenance-services route.
  "website-maintenance-services": {
    intro:
      "Keep your site fast, secure and current. Our care plans cover hosting, monitoring, security patching, performance and content updates - so your site stays a growth asset, not a liability.",
    highlights: [
      "Managed hosting, backups and uptime monitoring",
      "Security patching and dependency updates",
      "Core Web Vitals and performance monitoring",
      "Content updates and small feature work",
      "Prioritized support and reporting",
    ],
    faqs: [
      {
        question: "Do you maintain sites you didn't build?",
        answer:
          "Yes. We start with a health and security audit, stabilize the site, then move it onto a predictable care plan.",
      },
    ],
  },
  // Superseded by the dedicated /services/ai-development route.
  "ai-development": {
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
