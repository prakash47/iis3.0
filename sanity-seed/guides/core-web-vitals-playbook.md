<!-- category: Web Development; seeAlso: /services/website-maintenance-services, /services/web-design-development, /technologies/nextjs -->

# The Core Web Vitals playbook for business websites

**The short version:** [Core Web Vitals](/glossary#core-web-vitals) are three real Google metrics - LCP, INP, and CLS - measured from the visits of actual people on your site and used as a ranking signal. You improve them by controlling what loads, when it loads, and whether the layout stays put while it does. LCP should be 2.5 seconds or less, INP 200 milliseconds or less, and CLS 0.1 or less. Most business sites fail on one specific thing - an oversized hero image, a wall of third-party JavaScript, or ads that shove the page around - and fixing that one thing usually moves the score. Trust the numbers from real visits, not a single Lighthouse run on your laptop.

## What Core Web Vitals actually measure

Three metrics, each answering a different question a real visitor is silently asking.

- **[Largest Contentful Paint (LCP)](/glossary#largest-contentful-paint-lcp)** - "Has the main thing loaded yet?" It marks when the biggest visible element (usually the hero image, a headline, or a video poster) finishes rendering. **Good: 2.5s or less.**
- **[Interaction to Next Paint (INP)](/glossary#interaction-to-next-paint-inp)** - "When I tap or click, does it respond?" It measures the delay between an interaction and the screen actually updating, across the whole visit. INP replaced First Input Delay in March 2024, and it is stricter: it watches every interaction, not just the first. **Good: 200ms or less.**
- **[Cumulative Layout Shift (CLS)](/glossary#cumulative-layout-shift-cls)** - "Why did the page jump while I was reading?" It scores how much content moves around unexpectedly as things load. It is a unitless number, not a time. **Good: 0.1 or less.**

To pass, the 75th percentile of your real traffic needs to hit the good threshold on all three. That percentile is the point: you are not judged on your fastest visit, you are judged on the experience three-quarters of your visitors get or better. A site that feels fine on your office fibre connection can still fail on the mid-range Android phones and patchy mobile data most of your audience actually uses.

## The thresholds and the fixes, in one table

Each metric has a small set of fixes that account for most real-world gains. Start at the top of each list.

| Metric | Good threshold | What usually breaks it | The fixes that actually move it |
|---|---|---|---|
| LCP | 2.5s or less | Huge hero image, slow server, render-blocking CSS/JS | Correctly size and compress the hero image; serve assets from a CDN; cut server response time ([TTFB](/glossary#time-to-first-byte-ttfb)); remove render-blocking resources; `preload` the LCP element |
| INP | 200ms or less | Too much JavaScript, long tasks blocking the main thread, heavy third-party scripts | Ship less JavaScript; break up long tasks; defer non-critical work; audit and cut heavy third-party tags |
| CLS | 0.1 or less | Images/embeds with no dimensions, ads and banners loading late, injected content, font swap | Set `width`/`height` or `aspect-ratio` on all media; reserve space for ads and late content; never insert content above what is already visible; use `font-display` sensibly |

## How do I fix a slow LCP?

LCP is almost always the hero image or a slow server, and on content sites it is usually the image. Work in this order:

1. **Size and compress the hero image properly.** A 4000px-wide photo displayed in a 1200px slot is the single most common LCP killer. Export at the size it is actually shown, serve modern formats (WebP or AVIF), and use responsive `srcset` so phones get a smaller file.
2. **Serve from a CDN.** Static assets delivered from an edge location near the visitor beat a single origin server in a distant data centre every time.
3. **Cut [TTFB](/glossary#time-to-first-byte-ttfb).** If the server takes 800ms just to start sending HTML, no front-end trick saves you. Cache pages, cache database queries, and pick hosting that is not oversold. This is where oversold shared hosting quietly costs you.
4. **Remove render-blocking resources.** Large CSS files and synchronous scripts in the `<head>` delay the first paint. Inline the critical CSS, defer the rest.
5. **`preload` the LCP element.** Once you know which image is your LCP, add `<link rel="preload">` so the browser fetches it early instead of discovering it late.

## Why does my page feel laggy when I tap? (fixing INP)

INP is a JavaScript problem. If tapping a menu, opening an accordion, or adding to cart feels sticky, the main thread is busy running code when it should be responding to the user.

- **Ship less JavaScript.** The cheapest long task is the one you never sent. Audit your bundle and remove libraries you no longer use. A carousel plugin, three analytics tags, and a chat widget add up fast.
- **Break up long tasks.** Any task over 50ms blocks interaction. Split heavy work into smaller chunks and yield back to the browser between them so a user tap can get through.
- **Defer non-critical work.** Analytics, personalisation, and tracking do not need to run before the page is interactive. Load them after, or on idle.
- **Audit third-party scripts.** Tag managers, A/B testing tools, chat widgets, and ad scripts are the usual INP offenders because you do not control their code. Measure each one's cost and drop the ones that do not earn their keep. One heavy marketing tag can wreck INP across an entire site.

## Why does my page keep jumping? (fixing CLS)

CLS is the most fixable of the three because the causes are mechanical. The page jumps because the browser did not know how tall something would be until it arrived.

- **Give every image and embed explicit dimensions.** Set `width` and `height` attributes, or a CSS `aspect-ratio`, so the browser reserves the right amount of space before the file loads.
- **Reserve space for ads and late content.** If a banner, an ad slot, or a cookie notice appears after load, box out its space in advance so surrounding content does not get pushed down.
- **Never inject content above existing content.** A promo bar or "you have items in your cart" strip that pops in at the top and shoves everything down is a classic CLS spike. Reserve its space or render it inside the initial layout.
- **Handle web fonts with `font-display`.** A late-swapping custom font can reflow text. Use `font-display: swap` with a well-matched fallback, or preload the font, so the reflow is small or invisible.

## Lab data vs field data: which numbers should I trust?

This is where most people go wrong, so be clear about it: **field data is your score, lab data is your diagnostic tool.** They answer different questions and they will not match.

- **Field data (CrUX)** is measured from real Chrome users on your site over the trailing 28 days. This is what Google actually uses as a ranking signal, and it is what passing means. You see it in the Chrome User Experience Report, in the top panel of PageSpeed Insights, and in Search Console's Core Web Vitals report. INP and field data need real traffic, so a brand-new or low-traffic page may not have enough data to report yet.
- **Lab data (Lighthouse)** is a single simulated load in a controlled environment: one device, one network setting, one moment. It is repeatable and great for debugging a specific fix, but it cannot measure INP properly (there is no real user interacting) and it will not reflect the range of devices your visitors actually use.

The practical mistake is running one Lighthouse test, seeing a green 95, and declaring victory while your Search Console field report still says "needs improvement." Trust the field report for the verdict; use Lighthouse to find and confirm what to fix.

**How to actually measure, in order:**

1. Open **Search Console** and read the Core Web Vitals report - it groups your real URLs by status and shows which metric is failing on which template.
2. Run the failing URL through **PageSpeed Insights** - read the field data at the top for the real score, then the lab diagnostics below for the specific culprits.
3. Use **Lighthouse** in Chrome DevTools locally to reproduce a problem and verify a fix before you ship it.
4. Re-check the field report weeks later. Because CrUX is a 28-day trailing window, real scores move slowly after a fix. Do not expect the graph to jump the next morning.

## When should I bring in help?

You can do a lot of this yourself, and you should try - measuring and shipping the obvious image and script fixes is within reach for most teams. Bring in help when:

- The fixes need to touch the theme, the build pipeline, or the server, and no one on the team is comfortable there.
- You have chased the score for weeks and the field report will not turn green - usually a sign the problem is architectural (render-blocking third parties, a slow backend, or a stack fighting you) rather than a single asset.
- The vitals keep regressing every time marketing adds a tag or the team ships a feature, because nothing is guarding them.

For ongoing monitoring, regression-catching, and the unglamorous work of keeping scores green as the site changes, that is [website maintenance and performance work](/services/website-maintenance-services). When the honest answer is that the current build cannot hit these numbers without a rebuild, that is a [web design and development](/services/web-design-development) conversation. Worth knowing: a modern framework like [Next.js](/technologies/nextjs) gives you image optimisation, code-splitting, and edge delivery by default, so it tends to hit these thresholds without heroics - though a well-built site on any stack can pass, and a badly built site on any stack will not.

The bottom line: Core Web Vitals are not a mystery score to game. They measure whether your pages load fast, respond quickly, and hold still - the same things a visitor would tell you if you watched them use the site on their phone. Measure with real field data, fix the one metric that is actually failing, and re-check patiently.
