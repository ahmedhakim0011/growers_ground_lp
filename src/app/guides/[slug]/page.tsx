import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideJsonLd } from "@/components/GuideJsonLd";
import { GuideRichText } from "@/components/GuideRichText";
import { GuideVisual } from "@/components/GuideVisual";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getAllGuides, getGuideBySlug, isGuideIndexable } from "@/lib/guides";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide not found" };
  const path = `/guides/${slug}`;
  return {
    title: guide.cityLabel
      ? `${guide.title} — ${guide.cityLabel} growing guide`
      : guide.title,
    description: guide.summary,
    alternates: { canonical: path },
    robots: isGuideIndexable(guide) ? undefined : { index: false, follow: true },
    openGraph: {
      title: guide.title,
      description: guide.summary,
      url: path,
      type: "article",
      ...(guide.publishedAt ? { publishedTime: guide.publishedAt } : {}),
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <>
      <GuideJsonLd guide={guide} />
      <SiteHeader />
      <main id="main" className="guide-article-page">
        <article className="container guide-article" data-reveal data-motion-y="40">
          <p className="guide-article-meta">
            {guide.citySlug ? (
              <>
                <Link href={`/cities/${guide.citySlug}`}>{guide.cityLabel}</Link>
                {" · "}
              </>
            ) : null}
            {guide.season ? `${guide.season} · ` : ""}
            {guide.readMinutes} min read
          </p>
          <h1>{guide.title}</h1>
          <p className="guide-article-summary">{guide.summary}</p>

          {guide.sections.map((section) => (
            <section key={section.title} className="guide-article-section">
              <h2>{section.title}</h2>
              <GuideRichText body={section.body} />
              {section.visual ? <GuideVisual visual={section.visual} /> : null}
            </section>
          ))}

          {guide.sources?.length ? (
            <section className="guide-article-section guide-article-sources">
              <h2>Sources</h2>
              <ul>
                {guide.sources.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} rel="noopener noreferrer" target="_blank">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="guide-article-cta">
            {guide.citySlug ? (
              <>
                <p>
                  See mapped community gardens in {guide.cityLabel}, then
                  discover hosts and plots in the app.
                </p>
                <Link
                  className="btn btn-accent btn-rect"
                  href={`/cities/${guide.citySlug}`}
                >
                  Gardens in {guide.cityLabel}
                </Link>
              </>
            ) : (
              <>
                <p>
                  Growers Ground is rolling out city by city across the US and
                  Canada. Join the waitlist to hear when your area opens.
                </p>
                <Link className="btn btn-accent btn-rect" href="/#waitlist">
                  Join the waitlist
                </Link>
              </>
            )}
            <Link className="guide-article-app-link" href="/#download">
              About the app →
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
