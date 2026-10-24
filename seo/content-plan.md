# Growers Ground — 90-day content plan (drafted 2026-10-24)

**Status of evidence:** No keyword-volume or difficulty tool was used. Priorities are judgments from product fit and a few search-result lists (see `keywords.csv`). Validate the top 10 with Google Search Console / Keyword Planner before writing.
**Markets:** US and Canada only (the app's launch regions). UK/AU/EU deferred until the app supports them.
**Rules:** no rental/booking claims; no invented gardens or communities; groups/journals/spots only described once verified live in the app; cities pages only where >=10 mapped gardens AND original local content exists.

## Pillars → articles (priority order)
Each article: 800–1,500 words, original, sources cited, one CTA (waitlist now; store links once live), internal links to `/cities/[slug]` and sibling guides, BreadcrumbList + Article JSON-LD.

| # | Pillar | Title / H1 | URL | Keyword cluster | Country | Intent | Outline (H2s) | Support questions | Feature link | Conversion goal | Priority |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Garden hosts | How yard sharing works: a guide for hosts and gardeners | /guides/how-yard-sharing-works | yard sharing, garden sharing, land share | US/CA | Informational | What it is; common arrangements (harvest share, labor, barter); what to agree up front; insurance & liability notes (cite local sources); safety tips; where to find a match | Is it legal on my lot? Who pays for water? What if it doesn't work out? | Map discovery, in-app terms, approximate locations | Waitlist | P1 |
| 2 | Discovery | How to find a place to grow vegetables (without a waitlist) | /guides/how-to-find-a-place-to-grow-vegetables | find a place to grow vegetables | US/CA | Informational | Options compared: community garden, yard share, school/church land, containers; how long waitlists run (cite city data); how to ask a neighbor | How much space for a family? Soil testing? | Map-first discovery | Waitlist | P1 |
| 3 | Discovery | How to find a community garden near you | /guides/how-to-find-a-community-garden | find a community garden, community garden map | US/CA | Informational | Directories (ACGA, city sites); calling coordinators; what to ask; how to read a garden's rules | Fees? Tools provided? Accessibility? | /cities pages + map preview | City page visit → waitlist | P1 |
| 4 | Garden hosts | Sharing your yard as a garden host: a first-timer's checklist | /guides/share-your-yard-as-a-garden-host | share my yard, garden host | US/CA | Commercial | Is my yard suitable; setting expectations; privacy (approximate location in app); screening; seasonal terms | Do I need permission from HOA/landlord? | Host profile, messaging | Host waitlist | P1 |
| 5 | Neighbors | Gardening with neighbors: 7 ways to start | /guides/gardening-with-neighbors | gardening with neighbors | US/CA | Informational | Shared beds; tool sharing; produce swaps; etiquette; conflict handling | How to approach a neighbor? | Community layer (verify) | Waitlist | P2 |
| 6 | Community | Community plot etiquette (expand existing stub) | /guides/community-plot-etiquette | community garden etiquette | US/CA | Informational | Paths & borders; water; pests/weeds; shared tools; communication | What if my neighbor's plot is neglected? | Messaging | Waitlist | P2 |
| 7 | Organizers | How to start a community garden | /guides/how-to-start-a-community-garden | start a community garden | US/CA | Informational | Gather people; find land; permissions; budget; governance; first season | Insurance? Soil contamination testing? | Groups (verify shipped) | Waitlist / organizer interest | P2 |
| 8 | Community | How to find local gardeners and gardening groups | /guides/how-to-find-local-gardeners | connect with local gardeners | US/CA | Informational | Clubs, extension master gardeners, libraries, seed swaps, apps | Online vs in person? | Discover map | Waitlist | P2 |
| 9 | Community | Seed swaps: how they work and how to find one | /guides/seed-swaps | seed swap near me | US/CA | Informational | What to bring; labeling; legal notes on seed sharing; finding events | Is it safe to swap saved seed? | Garden Spots seed-swap pins (verify) | Waitlist | P3 |
| 10 | Urban | Benefits of community gardening (with cited research) | /guides/benefits-of-community-gardening | benefits of community gardening | US/CA | Informational | Evidence summary with citations only | — | — | Newsletter/waitlist | P3 |
| 11 | Beginners | Gardening for beginners: finding local help | /guides/gardening-for-beginners-find-local-help | beginner gardening groups | US/CA | Informational | Extension offices, mentors, shared plots | — | Messaging | Waitlist | P3 |

## Local pages
- Keep `/cities/[slug]` indexable only for the 33 metros with >=10 mapped gardens, and add per-city original content before expecting traction: how that city's community garden waitlists/application work, official city/parks links, growing zone and frost dates (cited). Do this first for Detroit, Seattle, Philadelphia, Chicago, Ottawa-Gatineau, Toronto, Montreal, Vancouver.
- Never claim host/gardener activity in a city until it exists in the app.

## Schedule
- **Days 1–30:** deploy current fixes; Search Console baseline; validate top-10 keywords with a real tool; publish #1, #2, #3; add original content to 3 city pages.
- **Days 31–60:** publish #4, #5, #6 (rewrite stub), #7; 5 more city pages; add Article + Breadcrumb JSON-LD to guides; start outreach (below).
- **Days 61–90:** publish #8–#11; review GSC queries and rewrite weakest pages; extend city pages with measured results; re-add app schema if store listings are live.

## Outreach (genuine value only)
- Offer city garden coordinators/horticultural societies the mapped-garden data corrections (OSM contributions) and a link to the city page as a resource.
- Pitch local news/urban-ag blogs on "yard sharing vs. waitlists" with cited local data.
- Partner with real garden groups only after they agree; no paid links, no fake partnerships.

## Measurement
GSC: impressions/clicks for non-brand queries, indexed page count (expect ~40 submitted URLs). Site events to add: waitlist submit, store-badge click. No targets until a 4-week baseline exists.
