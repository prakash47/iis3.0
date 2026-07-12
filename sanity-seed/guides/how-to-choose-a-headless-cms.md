<!-- category: Web Development; seeAlso: /technologies/sanity, /technologies/strapi, /technologies/contentful, /technologies/drupal -->

# How to choose a headless CMS: Sanity vs Strapi vs Contentful vs Drupal

**The short version:** There is no single best [headless CMS](/glossary#headless-cms). The right one comes down to four questions: who owns and edits the content, whether you want a hosted service or to run the backend yourself, how much governance you need across teams and locales, and how developer-heavy your team is. Sanity treats content as structured data you query with GROQ (developer-first, hosted). Strapi lets you own the software outright (open-source, self-hosted Node). Contentful is built for enterprise governance and coordination at scale (hosted SaaS). Drupal gives you structured content native to its core (batteries-included, self-hostable PHP). If a small non-technical team just needs to publish a brochure site daily, none of these is your answer - plain WordPress usually is.

## First, what "headless" actually changes

A headless CMS separates where content is stored and edited from where it is displayed. The CMS becomes an API and an editing interface; your front end - typically a [Next.js](/technologies/nextjs) or [Astro](/technologies/astro) app - fetches the content and renders it. That decoupling buys you three things: one content source can feed a website, an app, and a kiosk; developers get full control over the front end's speed and markup; and you are not fighting a theme system to build custom layouts.

It also costs you something. You now own the front end. There is no "install a theme and go live" path, and a non-technical editor cannot preview a page the way they can in a traditional CMS unless you build that preview. That trade is the whole reason the choice below matters - pick a tool whose strengths match the price you are actually willing to pay.

## The four, honestly positioned

Each of these is a real tool with a real center of gravity. The mistake is picking on popularity instead of on which of these sentences describes your situation.

**Sanity - content as structured data.** Sanity models your content as typed, structured data, and you query exactly what you need with GROQ, its query language. The content lives in a hosted Content Lake you rent, and the editing environment (Sanity Studio) is a React app you configure and can extend. This is the developer-first pick when your content is genuinely structured - reused fields, references between documents, real-time collaboration - and your team is comfortable in JavaScript. Read the detail on [Sanity](/technologies/sanity).

**Strapi - own the software.** Strapi is open-source and you self-host it. You run the Node.js backend, you hold the database, you control upgrades and deployment. Nothing about your content lives on someone else's SaaS unless you choose to put it there. This is the pick when data residency, avoiding a per-seat vendor bill, or keeping the whole stack inside your own infrastructure matters more than having someone else run it for you. See [Strapi](/technologies/strapi).

**Contentful - governance at scale.** Contentful is hosted SaaS built for coordination: multiple teams, many locales, staged workflows, roles and permissions, and content that ships to a dozen surfaces. You run no servers. You pay for the platform, and in exchange you get the workflow controls, role separation, and locale management a large content operation needs to stay coordinated. This is the enterprise pick when the hard problem is people and process, not code. See [Contentful](/technologies/contentful).

**Drupal - structure native to the core.** Drupal is open-source PHP you can self-host, and structured content, fields, taxonomies, and access control are built into the core rather than bolted on. Used headless (often called "decoupled"), it serves content over an API to a separate front end while keeping Drupal's mature editorial and permission model. This is the pick when you need deep content modelling and governance but want to own the platform rather than rent it. See [Drupal](/technologies/drupal).

And the one that is not headless by default: **[WordPress](/technologies/wordpress) - editor-first and page-based.** The admin your team already knows, where editors work directly on pages. It can run headless, but its real strength is letting non-technical people publish without a developer in the loop. Keep it in the running - for a large share of sites it is the correct answer, not the consolation prize.

## Side by side

| | Sanity | Strapi | Contentful | Drupal | WordPress |
|---|---|---|---|---|---|
| **Content model** | Structured data, queried with GROQ | Structured content, REST/GraphQL API | Structured content, hosted API | Structured, native to core | Editor-first, page-based |
| **Hosted vs self-hosted** | Hosted Content Lake (rented) | Self-hosted (you run it) | Hosted SaaS | Self-hostable | Hosted or self-hosted |
| **Who owns the software** | Vendor runs it; you configure the Studio | You - open-source, your servers | Vendor (SaaS) | You - open-source | You - open-source |
| **Best for** | Developer-first structured content in a JS stack | Owning the whole backend and your data | Multi-team, multi-locale governance at scale | Deep modelling you self-host | Non-technical teams publishing daily |
| **Editor experience** | Customizable Studio; needs setup to feel friendly | Functional admin; you host and maintain it | Polished; workflow and roles built for scale | Mature, powerful, heavier to learn | Familiar, low friction, page-based |
| **Language / runtime** | JavaScript / React | Node.js | SaaS (no runtime to run) | PHP | PHP |

## How do I decide? Four ordered questions

Answer these in order. The first one that gives a hard constraint usually settles it.

1. **Who edits, and how often?** If non-technical people publish daily and need to see the page as they build it, weigh WordPress (or Drupal's mature editorial UI) heavily before any developer-first option. If content is edited by people comfortable with structured fields and occasional developer support, Sanity, Strapi, and Contentful are all in play.

2. **Do you want to run the backend or rent it?** If you must own the software and the data - residency rules, no per-seat SaaS bill, everything inside your infrastructure - that points to Strapi or self-hosted Drupal. If you would rather someone else run and scale it, that points to Sanity or Contentful.

3. **What scale of coordination are you managing?** One small team on one site is a different problem from a dozen teams across fifteen locales with approval workflows. The former is fine on Sanity or Strapi. The latter is exactly what Contentful (or Drupal's permission model) is built for - do not under-buy governance you will genuinely need.

4. **How developer-heavy is the team, and in which language?** A JavaScript-native team gets the most out of Sanity's GROQ and Studio or Strapi's Node backend. A team with PHP depth and a preference for batteries included leans Drupal. A team that wants to write as little backend code as possible leans Contentful's managed platform.

If two options survive all four questions, choose the one your team can operate on its worst week, not the one that demos best.

## When is a headless CMS the wrong choice?

Headless is a capability, not a status symbol. Skip it when:

- **It is a brochure or small marketing site a non-technical team edits daily.** You will pay the headless tax - building the front end, wiring previews, maintaining two systems - for benefits you never use. Plain [WordPress](/technologies/wordpress) gets that team publishing faster and cheaper, and it still ranks perfectly well.
- **You have no front-end developer and no budget for one.** Headless means you own the presentation layer. With no one to build and maintain it, you have bought a backend with nothing attached to it.
- **You need one team live next week with standard pages.** A traditional CMS with a solid theme beats a from-scratch headless build on that timeline every time.
- **Your content is genuinely just pages, and always will be.** The core headless win is one content source feeding many surfaces. If there is only ever one surface - a website - much of that benefit evaporates.

Reach for headless when you are feeding more than one front end, when you need full control over speed and the [Core Web Vitals](/glossary#core-web-vitals) a custom Next.js or Astro front end can deliver, when your content is structured and reused rather than one-off pages, or when the editorial operation is large enough that governance is the real problem.

## A note on lock-in and portability

Ownership and portability are not the same across these four. Strapi and Drupal are open-source and self-hosted, so your content and the software both sit in infrastructure you control - the strongest position on portability, at the cost of running it. Sanity and Contentful are hosted: you rent the platform, which removes operational burden but means your content lives in their system and migrating away is a real project. Neither model is better in the abstract. The question is which trade you would rather live with - the operational weight of self-hosting, or the dependency of a managed service - and it is cheaper to decide that up front than to discover it during a migration two years later.

## The bottom line

Match the tool to your actual constraint. Structured content in a JavaScript stack with developers who want precise queries - Sanity. Owning the whole backend and your data - Strapi. Coordinating many teams and locales with real governance - Contentful. Deep modelling you self-host on PHP - Drupal. A non-technical team that just needs to publish - WordPress, unapologetically.

Whichever way it lands, the headless front end is where speed and technical SEO are actually won or lost, and that is a real build, not a plugin install. For a second opinion on the pairing, or help standing up the front end, that is what [web design and development](/services/web-design-development) covers. For how the numbers work on a real project, see [pricing](/pricing) rather than any figure quoted in a guide.
