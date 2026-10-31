# Search Console snapshot (from screenshots, 2026-10-30)
Property: https://www.growersground.com/ · Search type: Web · Source: three Performance > Queries screenshots (24 hours, 7 days, 28 days). Click/impression totals and the Pages tab were not in the screenshots.

Every query has **0 clicks**; every row is 1-3 impressions. Treat this as a list of what Google is testing the site for, not as demand data (same caveat as `gsc-baseline-2026-10-24.md`).

## Queries by window
**24 hours (4):** shared yard · garden sharing normativa · share yard · gardeners quebec city (1 impression each)

**7 days (11):** charlotte community gardens (3) · community gardens (2) · quebec city gardens (2) · chicago community gardens (2) · garden sharing app · grow ground · garden allotments · yard share · gardeners quebec city · grow seattle (1 each) · 1 more row not shown

**28 days (adds):** four winds allotment gardens (2) · is there a map · community garden program · community garden (1 each)

## What changed since the 2026-10-24 baseline
- **City-page queries now show up.** "charlotte community gardens" is the top query. Quebec City, Chicago and Seattle also appear. In the baseline only Seattle and Boston did.
- **Yard-sharing queries appeared** ("yard share", "shared yard", "share yard", "garden sharing app"). The baseline had none.
- **Brand-ish query:** "grow ground" is still the closest to a brand query, and nothing says "growers ground". The name is being searched in a truncated form.
- **Quebec City is a French-Canadian market.** "garden sharing normativa" (a non-English query) and two Quebec City queries suggest a few impressions come from outside the English-speaking US.

## Candidate actions (nothing changed in code yet)
1. **Charlotte, Quebec City, Chicago, Seattle city pages:** these are the pages Google is already testing. Add the original local content the content plan calls for (application/waitlist process, official city links, frost dates). Check each is in the indexable set (>= 10 mapped gardens).
2. **Yard-sharing wording:** the guide `how-yard-sharing-works` exists. Use the exact phrases "yard share", "shared yard" and "share your yard" in its title or H1, intro and meta description. Today the copy says "yard sharing" and "garden sharing".
3. **"Community gardens" head term:** it only gets 2 impressions. A better lever is the `/cities` index title and H1, which already say "community gardens and allotment sites".
4. **Brand:** make sure "Growers Ground" (two words, plural "Growers") appears in the homepage `<title>`, the Organization schema `alternateName` ("Grow Ground", "Growers Ground app") and the About page.
5. **Quebec City:** the French-language question is open. Quebec City queries are in English here, so an English page is fine for now. A `fr` version is out of scope until the app supports it.
6. **Re-check in 2-4 weeks** and compare the Pages tab. No target numbers until a four-week baseline exists.
