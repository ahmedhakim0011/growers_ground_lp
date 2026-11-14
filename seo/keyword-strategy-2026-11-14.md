# Keyword strategy and Search Console diagnosis (2026-11-14)

Builds on `audit-2026-11-05.md` and `seo-aeo-geo-audit-2026-11-05.md`. Keyword source: owner's research (garden sharing, find garden space, gardening community). Search volumes are **not verified**; validate in Google Keyword Planner before judging any page.

## Live Search Console data (read in Chrome, 2026-11-14)

Property: **`sc-domain:growersground.com` (domain property, verified)**, under the owner's second Google account. The URL-prefix property is not accessible from the first account. Window: last 3 months (2026-09-09 to 2026-11-10).

- **13 clicks · 518 impressions · CTR 2.5% · avg position 9.8**
- **Indexing:** 33 indexed · 20 "Discovered – currently not indexed" · 1 "Crawled – currently not indexed" · 4 "Page with redirect" (apex to www, expected). Discovered-not-indexed peaked at about 50 in mid-October and is falling, so Google is working through the site.
- Not-indexed examples are all mid-size city pages: Austin, Baltimore, Calgary, Cincinnati, Cleveland, Denver, Edmonton, Hamilton, Kansas City, Kitchener-Cambridge-Waterloo.
- **Sitemaps:** both `https://growersground.com/sitemap.xml` (apex) and `https://www.growersground.com/sitemap.xml` are submitted (51 URLs each). The apex one redirects; remove it and keep only www.

**Top pages:** `/` 4 clicks / 117 impressions (pos 3.3) · `/cities/toronto` 1/49 · `/privacy` 1/41 · `/guides` 1/36 · `/support` 1/31 · `/cities/seattle` 1/17 · `/cities/minneapolis-st-paul` 1/17 · `/guides/seed-swaps` 1/7 · `/cities/atlanta` 1/7.

**Queries that matter (47 total, all 0 clicks):**

| Query | Impr. | Position | Meaning |
|---|---|---|---|
| garden sharing app | 2 | **1.0** | Already #1; tiny volume today |
| shared yard | 1 | **1.0** | Already #1 |
| community garden near me | 4 | 6.0 | Big head term, page 1 |
| garden plots near me | 2 | 5.0 | Page 1 |
| garden plots / gardening plots | 4 | 9.7-11 | Edge of page 1 |
| allotment gardens / garden allotments (near me) / toronto allotment gardens | 9 | 6-9.5 | Canadian wording, page 1 |
| yard share / share yard / garden host | 3 | 7-9 | Product intent showing up |
| garden sharing | 2 | 47.5 | Needs a stronger page (now `/how-it-works` + home) |
| chicago community gardens | 10 | 61.4 | Many impressions, buried; Chicago page needs work |
| gardeners quebec city / quebec city gardens | 13 | 13-25 | Quebec City page, page 2 |

## Why results are weak

1. **The domain is about 2 months old.** New domains get few impressions until Google trusts them. This is the biggest factor.
2. **Authority, not technical errors.** No crawl errors; "Discovered – not indexed" means Google is rationing crawls on a new site with no backlinks. Links from other sites fix that.
3. **The site was ranking for the wrong family of keywords.** Most impressions were "community gardens in <city>", a crowded directory market. Yard-sharing intent had no dedicated pages.
4. **Good sign:** where the site does show for product terms ("garden sharing app", "shared yard"), it is already #1. Volume is the problem, not relevance.
5. **Seasonality:** gardening search falls in Nov-Jan and peaks Feb-May. The goal is to be indexed before February.

## Actions taken from the Search Console data

- Canadian city titles now say "Community & Allotment Gardens" (e.g. "64 Community & Allotment Gardens in Toronto"); all city titles and descriptions now include "garden plots".
- `/garden-space-for-rent` gained an allotment section and FAQ (allotment gardens, garden allotments near you).
- All 146 keywords from the owner's research now appear as exact phrases somewhere on the site (checked against the built HTML), each placed on the page matching its intent, mostly in headings, opening paragraphs and FAQ questions.

## Keyword to URL map (one primary keyword per page)

| URL | Primary keyword | Audience |
|---|---|---|
| `/` | garden sharing app | both |
| `/find-garden-space` | find garden space near me | gardeners |
| `/share-your-yard` | share my backyard | hosts |
| `/how-it-works` | how garden sharing works (+ yard sharing app) | both |
| `/garden-space-for-rent` | garden space for rent / rent a garden plot | gardeners |
| `/gardening-without-a-backyard` | gardening without a backyard / urban gardening | gardeners |
| `/local-gardeners` | find local gardeners | both |
| `/community-garden-app` | community garden app | gardeners |
| `/cities/*` | community gardens in <city> (unchanged) | gardeners |
| `/guides/*` | informational how-to questions (unchanged) | both |

Secondary keywords per page are listed in `src/lib/landing-pages.ts`. Guides stay informational ("how yard sharing works") and landing pages stay product-intent ("yard sharing app"), so they do not compete.

Deliberately **not** targeted (they attract people looking for other products): garden planner, plant identifier, gardening tips, vegetable growing app.

## What changed in code (branch `seo/garden-sharing-keyword-pages`)

- 7 new landing pages from one template (`src/app/[landing]/page.tsx`, content in `src/lib/landing-pages.ts`). Each has a "Short answer" block in the first lines (for AI Overviews, ChatGPT, Perplexity), comparison tables or checklists, 3-4 conversational FAQs, related links, and WebPage + BreadcrumbList + FAQPage schema.
- Homepage: title is now "Growers Ground: Garden Sharing App to Find or Share Garden Space"; H1 is "The garden sharing app to find garden space or share your yard"; new "No yard? Find one. Unused yard? Share it." section links all 7 pages; FAQ adds "Can I rent someone's backyard…" and "Is there an app to find garden space?"; FAQ links now point at the new pages.
- Footer: new "Garden sharing" column (sitewide internal links to every new page).
- Sitemap and `llms.txt` include the new pages; `llms.txt` describes the product as garden sharing / yard sharing.
- Organization schema `alternateName` adds "Grow Ground" (the truncated brand query seen in GSC).
- Honesty rules kept: app not in stores yet, no payments for plots, metro count stated as "more than 30" (35 indexable).

## Owner to-do after deploy (in this order)

1. **Deploy**, then in Search Console: Sitemaps → resubmit `sitemap.xml`; URL Inspection → "Request indexing" for `/`, then the 7 new URLs (limit is about 10 a day).
2. Run `npm run indexnow` for Bing/Copilot/ChatGPT search.
3. **Sitemaps:** remove the apex `https://growersground.com/sitemap.xml` entry; keep the www one. Request indexing for the 10 unindexed city pages listed above after the new pages.
4. **Get links. This is the single biggest lever.** Targets, roughly easiest first:
   - Product Hunt, BetaList, AlternativeTo (list as alternative to YardSharing / Shared Earth / Sowmate), Indie Hackers.
   - Link from ahmedbuildapps.com to growersground.com.
   - Local garden clubs, master gardener programs, seed libraries and community garden orgs in the 35 city pages: offer them their listing page.
   - Reddit (r/gardening, r/vegetablegardening, r/UrbanGardening, city subreddits): answer "no yard, where can I grow?" threads honestly; link only when it helps.
   - Local press "neighbor shares backyard with gardener" stories once the first real host/gardener pair exists.
5. **Validate volumes** for the 20 shortlist keywords in Keyword Planner (US + CA) and record them in `keywords.csv`.
6. **Re-check GSC every 2 weeks**: Pages report (indexed count), queries containing "yard", "share", "space", "plot". Expect impressions on the new pages 3-8 weeks after indexing.

## App Store / Google Play (for when listings go live)

Store search uses the title, subtitle and keyword field, not the website.

- **iOS name (30):** `Growers Ground: Garden Sharing`
- **iOS subtitle (30):** `Find garden space, share yards`
- **iOS keywords (100, no spaces after commas, no words already in name/subtitle):** `yard,backyard,plot,community,gardener,grow,vegetables,urban,land,rent,neighbor,host,local,allotment`
- **Play title (30):** `Growers Ground: Garden Sharing`
- **Play short description (80):** `Find garden space near you or share your yard with a local gardener.`
- Play full description: repeat "garden sharing app", "yard sharing", "find garden space near me", "share your backyard", "community garden" naturally 2-3 times each (Play indexes the description; iOS does not).
- Then add both store URLs to `siteConfig.sameAs` and add `SoftwareApplication` schema to the homepage.

## Next content (after the pages above are indexed)

- City + intent pages only where there is real local information, e.g. "garden space in Toronto": combine the city's community garden data with yard-share guidance. Do not mass-generate city-name swaps.
- Guides answering the remaining conversational searches: "Is it legal to garden in someone else's yard?", "Garden sharing agreement template" (downloadable), "How much to charge to rent garden space".

## Done on 2026-11-14 (after deploy)

- Merged to `main` (3da2511) and triggered a production deploy (3b0c738); all 7 pages return 200 on www.growersground.com, sitemap lists 58 URLs.
- Search Console: removed the apex sitemap `https://growersground.com/sitemap.xml`; resubmitted `https://www.growersground.com/sitemap.xml`.
- Indexing requested (all accepted): `/`, `/find-garden-space`, `/share-your-yard`, `/how-it-works`, `/garden-space-for-rent`, `/gardening-without-a-backyard`, `/local-gardeners`, `/community-garden-app`, and cities Austin, Denver, Calgary, Baltimore, Cincinnati, Cleveland, Edmonton, Hamilton, Kansas City, Kitchener-Cambridge-Waterloo.
- Backlink plan and ready-to-paste copy: `backlink-kit-2026-11-14.md`.
- Next check: 2026-11-28. Pages report (indexed count) and queries containing "garden sharing", "yard", "garden space", "allotment".
