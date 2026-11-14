import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideRichText } from "@/components/GuideRichText";
import { GuideVisual } from "@/components/GuideVisual";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getLandingPage, landingPages, type LandingPage } from "@/lib/landing-pages";
import { absoluteUrl, socialMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type PageProps = { params: Promise<{ landing: string }> };

// Only the slugs in landing-pages.ts exist; anything else at the root is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((p) => ({ landing: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { landing } = await params;
  const page = getLandingPage(landing);
  if (!page) return {};
  const path = `/${page.slug}`;
  return {
    title: { absolute: page.seoTitle },
    description: page.metaDescription,
    alternates: { canonical: path },
    ...socialMetadata({ title: page.seoTitle, description: page.metaDescription, path }),
  };
}

function stripLinks(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

function LandingJsonLd({ page }: { page: LandingPage }) {
  const url = absoluteUrl(`/${page.slug}`);
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.seoTitle,
        headline: page.title,
        description: page.metaDescription,
        inLanguage: "en-US",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        dateModified: page.updatedAt,
        keywords: [page.primaryKeyword, ...page.secondaryKeywords].join(", "),
        abstract: stripLinks(page.answer),
        speakable: { "@type": "SpeakableSpecification", cssSelector: [".landing-answer"] },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: page.navLabel, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        url: `${url}#faq`,
        mainEntity: page.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default async function LandingRoute({ params }: PageProps) {
  const { landing } = await params;
  const page = getLandingPage(landing);
  if (!page) notFound();

  const related = page.related
    .map((slug) => getLandingPage(slug))
    .filter((p): p is LandingPage => Boolean(p));

  return (
    <>
      <LandingJsonLd page={page} />
      <SiteHeader />
      <main id="main" className="guide-article-page landing-page">
        <article className="container guide-article" data-reveal data-motion-y="40">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: page.navLabel }]} />
          <p className="landing-eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>

          <div className="landing-answer" role="note" aria-label="Short answer">
            <p className="landing-answer-label">Short answer</p>
            <GuideRichText body={page.answer} />
          </div>

          <p className="guide-article-summary">{page.lead}</p>

          <div className="landing-cta-row">
            <Link className="btn btn-accent btn-rect" href="/#waitlist">
              Join the waitlist
            </Link>
            <Link className="text-link" href="/cities">
              Browse community garden maps →
            </Link>
          </div>

          {page.sections.map((section) => (
            <section key={section.title} className="guide-article-section">
              <h2>{section.title}</h2>
              <GuideRichText body={section.body} />
              {section.visual
                ? (Array.isArray(section.visual) ? section.visual : [section.visual]).map((v, i) => (
                    <GuideVisual key={i} visual={v} />
                  ))
                : null}
            </section>
          ))}

          <section className="guide-article-section landing-faq" id="faq">
            <h2>Common questions</h2>
            {page.faqs.map((f) => (
              <div key={f.q} className="landing-faq-item">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </section>

          {related.length ? (
            <nav className="guide-article-section landing-related" aria-label="Related pages">
              <h2>Keep exploring</h2>
              <ul>
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/${r.slug}`}>
                      <strong>{r.navLabel}</strong>
                      <span>{r.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          <div className="guide-article-cta">
            <p>
              Growers Ground is launching city by city across the US and Canada.
              Join the waitlist to hear when your area opens.
            </p>
            <Link className="btn btn-accent btn-rect" href="/#waitlist">
              Join the waitlist
            </Link>
            <Link className="guide-article-app-link" href="/guides">
              Read the growing guides →
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
