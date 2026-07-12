<!-- category: Web Development; seeAlso: /technologies, /services/web-design-development, /guides/nextjs-vs-wordpress-for-seo, /guides/how-to-choose-a-headless-cms -->

# What we tell clients before they choose a stack

**The short version:** The right stack is the one that fits your team, your content, and what the product actually has to do - not the one that is trending, and not the one a vendor happens to sell. Anyone who names the technology before they understand your situation is selling, not advising. We build on many stacks on purpose, because that is what lets us answer the question honestly instead of steering every project toward the one thing we make money on.

## Why we won't name a stack in the first meeting

Most people arrive with a stack already picked. They read that a framework was fast, or a competitor mentioned a CMS, or someone on the team has a favorite. That is a fine starting point. It is a terrible ending point.

When a vendor answers "what should we build this on?" in the first ten minutes, they are not reading your situation. They are reading their own price list. The honest version of that conversation is slower and less flattering: we ask a set of unglamorous questions first, and the stack falls out of the answers. Change the answers and the recommendation changes. That is what stack-agnostic actually means - not that we love every tool equally, but that we are not financially committed to one before we understand what you need.

So here are the questions we ask, and why each one moves the decision.

## Who edits the site, and how often?

This is the first question, and it decides more than people expect.

If a non-technical marketing team publishes a few times a week, they need an editing experience that does not route every routine change through a developer. That pushes toward a content layer with a real editorial interface - and it splits further depending on whether the team wants an all-in-one system or content managed as structured data. If the site is edited once a quarter by the same person who runs the deploy, you can spend that budget somewhere it matters more.

Two failure modes we see over and over:

- A beautiful custom build the marketing team cannot touch, so every copy change becomes a ticket and the site quietly goes stale.
- A heavy, plugin-loaded CMS chosen for "flexibility" that nobody in-house knows how to keep secure and fast.

Both are stack decisions made without asking who sits at the keyboard. If your content is genuinely structured and reused across surfaces, a [headless CMS](/glossary#headless-cms) earns its extra moving parts. If it is a handful of pages a founder edits directly, it is overkill. We walked through that trade-off in more depth in our guide on [how to choose a headless CMS](/guides/how-to-choose-a-headless-cms).

## What does the product actually have to do?

A brochure site, a content site that lives or dies on search, a transactional app, and a real-time product are four different problems. Naming one stack for all of them is how projects go sideways.

We separate the "site" from the "application" early, because they pull in opposite directions. A marketing site wants to be mostly static, cheap to serve, and trivial to crawl. An application wants state, auth, and interactivity. Plenty of projects are both, and the right answer is usually a clean boundary between the two rather than one tool bent to do everything.

The concrete version: if the whole product is a custom, animation-heavy interface, that changes the calculus toward the tools built for it. If the product is content that has to be found, rendering and crawlability matter more than any framework logo. The feature list sets the constraints, not the trend cycle.

## Where does it need to rank or be found?

If search and AI answer engines are a real channel for you, the stack has to serve fast, crawlable HTML - reliably, not as a plugin bolted on after launch. That does not crown a single winner. It rules out choices that ship a blank page and hope a crawler waits around for JavaScript.

This is the "which is better for SEO" fight people want us to settle, and the honest answer is that the framework matters less than how it renders and how disciplined the build is. We laid out the real comparison in [Next.js vs WordPress for SEO](/guides/nextjs-vs-wordpress-for-seo) instead of relitigating it here. The short form: both can rank well, both can rank badly, and the deciding factor is the team and the setup, not the name on the box.

For the record, our own site runs on Next.js with static generation and typed structured data, because content and discovery are the job it has to do. That is a reason from our situation. It is not a claim that it is the right answer for yours.

## What can your team run after we leave?

This is the question vendors skip, and it is the one that ages best.

A trendy stack your team cannot staff or maintain is a liability no matter how good the benchmarks look. A familiar stack they already run well will beat a fashionable one they cannot. We have watched organizations inherit an elegant build in a framework nobody in-house understood, and inside a year it was frozen - too risky to touch, too expensive to hire for, quietly rotting.

So we ask it plainly: who maintains this in eighteen months? Do you have the skill in-house, are you hiring for it, or are you counting on us to stay forever? If the honest answer is "we run WordPress and we are good at it," that is a strong argument for WordPress, and we will say so even though a greenfield framework build would be the bigger project for us.

## The questions to ask yourself before anyone quotes you

You can run most of this diagnostic before you talk to any agency:

- Who edits the content, how often, and how technical are they?
- Is this a site, an application, or both - and where is the line?
- Does it need to be found through search and AI answers, or is traffic coming from elsewhere?
- What can your team maintain, hire for, and afford to keep running for years?
- What has to be true on day one, and what can wait?

If a vendor recommends a stack before you have answered these, you have learned something useful about the vendor.

## What "stack-agnostic" actually buys you

Being genuinely multi-stack is not a slogan for us - it is what removes the conflict of interest. When you only sell one thing, every diagnosis ends at that thing. When you build across many, the recommendation can follow the questions instead of the invoice. That is the whole reason we can tell a prospect "stay on the CMS your team already knows" without it costing us the honest answer.

If you want to see how we make the call across frameworks and content layers, our [technology choices](/technologies) page lays out the reasoning tool by tool, and our [web design and development services](/services/web-design-development) page covers how a build runs once the stack is decided. Start with your own answers to the five questions above. The stack is the easy part once those are honest.