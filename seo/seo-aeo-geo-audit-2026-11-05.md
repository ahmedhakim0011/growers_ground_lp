# SEO, AEO and GEO audit and fixes (2026-11-05)

Follows `audit-2026-11-05.md`; garden data is covered in `garden-data-sources-2026-11-05.md`. Nothing here is committed or deployed.

**How it was run:** the claude-seo skill is not installed, so no `/seo` command ran. Its GEO, audit and schema docs (v2.5.0) were read on GitHub and applied by hand, along with a crawl of the 49 live sitemap URLs and the code. The paste with the brief cut off in section 5.

**Not measured:** Core Web Vitals (PageSpeed returned 429, quota exceeded), backlinks, current indexed pages, real AI citations. No 0-100 score is given because those inputs are missing. `/seo local` does not apply: there is no physical location.

## Already healthy

Googlebot, Bingbot, GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot and Google-Extended user agents all get 200. robots.txt allows all and lists the sitemap. Apex redirects to www in one hop. Every page has one H1 and a matching canonical, with no duplicate titles or descriptions, no broken internal page links and no missing alt attributes. Content is server-rendered.

## Fixed

| Issue | Impact | Fix |
|---|---|---|
| 15 dead anchor links per city page, including 7 to the waitlist | Search visitors could not reach the waitlist from badges or nav | Links point to the home page sections |
| FAQ said hosts are "listing backyard plots now" | Untrue while the app is not in stores | FAQ rewritten |
| Closed FAQ answers were not in the HTML | Answers missing from the page for crawlers and screen readers | All answers stay in the HTML, hidden until opened |
| City pages promised "local host listings" | Broke the content plan's rule on host activity | Lead now states the app is not out yet |
| No `og:image` on city pages, /cities, /guides and three guides | Weak link previews | Default share image added |
| Sitemap dates moved on every build | Google tends to ignore unreliable dates | Dates follow real content changes |
| Six guide descriptions over 180 characters; long titles | Cut off in results | Shorter descriptions; long titles drop the brand suffix |
| Guides showed no author or date; Article schema had no image or URL | Weak trust signals | Visible byline and date; schema completed |
| No visible breadcrumbs; city pages linked only to city guides | Weaker architecture and topic links | Breadcrumbs, plus three general guides on each city page |
| Positioning line absent | Entity clarity | "One Map. Everyone Knows Where to Grow." in schema, About and llms.txt |

## AEO

Six brief questions now have direct answers in the home FAQ, each linked to its guide. Two guide summaries were rewritten to lead with the answer. About now covers product status, data sources and how to report mistakes. llms.txt now states the app's status.

## Deliberately not done

- **llms-full.txt:** the skill's sources say Google ignores these files and no major AI provider has confirmed using them. llms.txt stays as a low-cost map.
- **SoftwareApplication schema:** wait until store listings are live.
- **New FAQ schema on guides:** the skill reports Google retired FAQ rich results in May 2026 (not independently checked). The home page schema stays because it is harmless and may help other systems.
- **Explicit AI crawler rules:** all are already allowed.

## Trust fixes made after the audit

- **Removed:** the hero "Loved by early growers ★ 4.9 rating" badge, the "Thousands of growers" section, both quote sections (12 quotes) and "Real profile previews from early members". No evidence for them was found in the repo.
- **"Verified" removed:** the project docs describe only email verification, so hero and profile copy no longer says verified hosts or profiles.
- **Store badges** now read "Coming soon". The header has one "Join the waitlist" button, which also removes the overlap at about 800 px. "Download" and "Get the app" wording became waitlist wording.
- **Atlanta:** 29 records held off the site, taking it from 91 to 62 gardens.
- **Rent:** the social brief settles it. Hosts and gardeners agree rent, harvest share or barter themselves, and the app is not a marketplace or escrow. Copy stays, with "does not handle payments for plots" added, and the content plan rule now says this.

## Owner answers, 2026-11-05

- **Founder:** Ahmed Hakim Ali, now on About, in Organization schema and in llms.txt. Credentials come from ahmedbuildapps.com. LinkedIn and GitHub links come from that site. That site does not mention Growers Ground yet, so a link back would strengthen the connection.
- **Preview profiles:** the owner says they are real, read here as real people who agreed. They stay. Karen's card no longer says "inside 410", but her app screenshot still shows it, next to San Francisco.
- **Trustpilot:** the widget and its script were removed from every page. No one can use the app yet, so there is little to review, and the script loaded on every page for one footer item. Add it back after launch.

## Next

- Deploy, then request indexing and resubmit the sitemap.
- Publish the planned guide on finding local gardeners, with cited sources.
- Earn mentions and links through garden groups and local press. The skill's sources rate brand mentions as the strongest AI visibility signal.
- Add the Nashville section; re-run PageSpeed when quota allows.
- Header store badges stack and overlap the page at about 800 px wide. Seen in testing, not fixed.
