<!-- category: Web Development; seeAlso: /technologies/sanity, /guides/how-to-choose-a-headless-cms, /glossary#headless-cms, /technologies/nextjs -->

# Why we put our own blog on Sanity

**The short version:** We recommend headless CMSes to clients, so running our own content on anything else would be a tell. This blog, the guides, and the glossary on this site all live in [Sanity](/technologies/sanity): content modelled as typed schemas, queried with GROQ, stored in Sanity's hosted Content Lake, and rendered by our [Next.js](/technologies/nextjs) front end. We did it because our content is structured data, not a stack of pages. That same logic is why we would tell some clients to stay on WordPress.

## Why treat content as data instead of pages?

A blog post here is not a blob of HTML with a headline glued on top. It is a typed record: a title, a slug, a category, a publish date, an author reference, a body, and a small pile of metadata that feeds structured data and internal links. A glossary term is a different record with a different shape. A guide is another. They share fields, cross-reference each other, and get rendered by the same front end in different layouts.

Once you think about content that way - records with fields and relationships - you are describing a database, not a website. A [headless CMS](/glossary#headless-cms) is a content database with an editing interface bolted on and an API in front. That is what we wanted, so that is what we used.

We tell clients the same thing when their content has structure worth keeping: model it as data once, render it as many things later. Putting our own site on Sanity is us taking our own advice.

## What the setup actually is

The pieces, no mystery:

- **Schemas.** Every content type is a typed schema defined in code - `post`, `guide`, `glossaryTerm`, `author`, and so on. Fields have types, validation rules, and references to other documents. The schema is the contract, and it lives in our repository.
- **Sanity Studio.** The editing interface is Sanity's Studio, configured by us from those schemas. It is where we write and publish. We host it and version it alongside the site.
- **The Content Lake.** The content itself is stored in Sanity's hosted Content Lake. We do not run a database server for it. We query it over the network.
- **GROQ.** We fetch content with [GROQ](/glossary#groq), Sanity's query language. A page asks for exactly the fields it needs - this post, its author, three related guides - and gets back JSON shaped the way the query asked.
- **Portable Text.** The body of a post is stored as [Portable Text](/glossary#portable-text), a structured JSON representation of rich text rather than a string of HTML. Our Next.js front end walks that structure and decides how each block renders: a paragraph, a heading, a code sample, an internal link.

So the flow is: we write in Studio, it saves to the Content Lake, the Next.js site queries it with GROQ at build time, and Portable Text becomes the HTML you are reading. The front end is ours, top to bottom. The CMS is where content comes from, not the thing that renders the page.

## Why was this the right call for us specifically?

Three reasons, and they are ours - not universal laws.

**We are the technical team, so "you own the front end" is a feature, not a cost.** The usual objection to headless is that someone has to build the presentation layer. For a lot of teams that is a real burden. For us it is the part we would want to control anyway. We were always going to hand-build this site on Next.js 16 with static generation and server components. Headless just means the content layer does not fight us for the markup.

**Structured content pays off across formats.** Because a glossary term is its own typed record, we link to it from a post, list it on the glossary page, and surface its definition wherever it belongs - all from one source. Same for guides and posts referencing each other. That web of relationships is trivial when content is data and painful when it is pages.

**It keeps our structured data honest.** Typed JSON-LD, canonical internal links, consistent metadata - these are far easier to get right when the metadata is a real field on a real schema instead of something an editor might remember to fill in. Query the field, emit the markup. On performance we will only say this: static generation plus a front end we control gives us the levers to keep pages fast, and we measure with the standard tools rather than trust a vibe. We are not going to quote you a score for this site. Method over marketing.

## The trade-offs we actually accepted

Headless is not free. We took these on with eyes open, and you should know them before you copy us.

- **You own the front end.** Every template, every layout, every empty state is yours to build and maintain. No theme marketplace bails you out. We wanted that; many teams do not.
- **Previews need building.** Out of the box, a headless setup does not hand an editor a "view this draft as it will look" button. That is real work to wire up - draft mode, a preview route, the plumbing to pull unpublished content. Worth it for us, but it is not included.
- **The Content Lake is rented, not owned.** Here is the ownership line, kept exact: you own the content, the schema, the Studio, and the GROQ queries - all of it in your repository, portable. The Content Lake itself is Sanity's hosted service that you rent. Not running that infrastructure is convenient, and it is also a dependency you are choosing to take on. Know which parts you own and which part you are renting.

## When would we tell a client NOT to do this?

Plenty of times. The clearest case: a small brochure site that a non-technical team edits every day. Five to fifteen pages, occasional copy changes, someone in marketing who wants to fix a typo without filing a ticket. For that, headless is the wrong tool and we will say so.

Put that site on WordPress. The editing experience is familiar, the preview is built in, the person changing the hours on the contact page does not need a developer, and you are not paying for a bespoke front end you do not need. Headless earns its keep when content has real structure, gets reused across formats, or feeds an app as well as a website. A restaurant's five pages do not clear that bar, and pretending otherwise would cost the client money for our convenience.

The decision is not "headless is modern, WordPress is old." It is "what shape is your content, and who edits it." We wrote up the full comparison in our [guide to choosing a headless CMS](/guides/how-to-choose-a-headless-cms) if you want to run your own case through it.

## What this does and does not prove

Straight with you: running our own blog on Sanity proves we can design content schemas, wire up a Content Lake, query it with GROQ, and render Portable Text through a production Next.js front end. This site is the working proof. You are reading the output right now.

It does not mean we have shipped Sanity for a paying client. That is a different claim and we are not making it. What we can point to is adjacency: the same skills, the same stack, running our own content in production - not a portfolio of headless builds we have delivered. We would rather tell you exactly what we have done than dress up our own website as a case study.

If your content is structured data and you have or want a technical team to own the front end, Sanity plus Next.js is a strong pairing, and we are happy to talk it through. If you are a small team that just wants to edit a handful of pages, we will probably steer you somewhere simpler - and mean it. Start with the [headless CMS guide](/guides/how-to-choose-a-headless-cms), or read how we think about [Sanity](/technologies/sanity) and [Next.js](/technologies/nextjs).