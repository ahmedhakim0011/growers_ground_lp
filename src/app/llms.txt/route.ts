import { getAllGuides, isGuideIndexable } from "@/lib/guides";
import { getAllMetros, isMetroIndexable } from "@/lib/metros";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

/** Plain-text site summary for AI assistants and crawlers (llmstxt.org format). */
export function GET() {
  const guides = getAllGuides().filter(isGuideIndexable);
  const cities = getAllMetros().filter(isMetroIndexable);

  const lines = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.name} is a map-first garden-sharing app and website that connects gardeners with hosts who share yard space, across the US and Canada. It is a software product (not a ground-cover or landscaping supplier). The app is rolling out city by city; a waitlist is open.`,
    "",
    "## Key pages",
    `- [Home](${siteConfig.url}/): what the app does and the waitlist`,
    `- [About](${siteConfig.url}/about): who we are and official profiles`,
    `- [Community gardens by city](${siteConfig.url}/cities): mapped community gardens in US and Canadian metros`,
    `- [Growing guides](${siteConfig.url}/guides): free guides on finding, sharing and starting gardens`,
    `- [Support](${siteConfig.url}/support): contact and help (${siteConfig.supportEmail})`,
    "",
    "## Guides",
    ...guides.map(
      (g) => `- [${g.title}](${siteConfig.url}/guides/${g.slug}): ${g.summary}`,
    ),
    "",
    "## City pages",
    ...cities.map(
      (m) =>
        `- [Community gardens in ${m.cityLabel}](${siteConfig.url}/cities/${m.slug})`,
    ),
    "",
    "## Official profiles",
    ...siteConfig.sameAs.map((u) => `- ${u}`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
