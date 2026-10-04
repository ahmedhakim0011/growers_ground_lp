import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getAllGuides, getGuideBySlug } from "@/lib/guides";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide not found" };
  return {
    title: `${guide.title} — ${guide.cityLabel} growing guide`,
    description: guide.summary,
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <>
      <SiteHeader />
      <main id="main" className="guide-article-page">
        <article className="container guide-article" data-reveal data-motion-y="40">
          <p className="guide-article-meta">
            <Link href={`/cities/${guide.citySlug}`}>{guide.cityLabel}</Link>
            {" · "}
            {guide.season} · {guide.readMinutes} min read
          </p>
          <h1>{guide.title}</h1>
          <p className="guide-article-summary">{guide.summary}</p>

          {guide.sections.map((section) => (
            <section key={section.title} className="guide-article-section">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}

          <div className="guide-article-cta">
            <p>
              See mapped community gardens in {guide.cityLabel}, then discover
              hosts and plots in the app.
            </p>
            <Link
              className="btn btn-accent btn-rect"
              href={`/cities/${guide.citySlug}`}
            >
              Gardens in {guide.cityLabel}
            </Link>
            <Link className="guide-article-app-link" href="/#download">
              Get the app →
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
