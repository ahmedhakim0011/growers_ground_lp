import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell } from "@/components/LegalPageShell";
import { supportTopics } from "@/lib/legal-content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: `Get help with ${siteConfig.name} — contact, account, billing, and safety.`,
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <LegalPageShell
      title="Support"
      lastUpdated="September 11, 2026"
      eyebrow="Help"
    >
      <p>
        We&apos;re here to help with account questions, safety concerns, and
        launch updates. For the fastest response, email us from the address
        linked to your account.
      </p>

      <div className="support-cards">
        <article className="support-card support-card-primary">
          <h2>Email support</h2>
          <p>
            <a href={`mailto:${siteConfig.supportEmail}`}>
              {siteConfig.supportEmail}
            </a>
          </p>
          <p className="support-meta">We typically respond within 2 business days.</p>
        </article>

        <article className="support-card">
          <h2>Instagram</h2>
          <p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              @growers_ground_lp
            </a>
          </p>
          <p className="support-meta">Updates, tips, and community news.</p>
        </article>
      </div>

      <h2>Common topics</h2>
      <div className="support-topics">
        {supportTopics.map((topic) => (
          <article key={topic.title} className="support-topic">
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
            {"href" in topic && topic.href ? (
              <Link href={topic.href}>Learn more →</Link>
            ) : null}
          </article>
        ))}
      </div>

      <h2>Service area</h2>
      <p>
        {siteConfig.name} is rolling out across the United States and Canada.
        Join the <Link href="/#waitlist">waitlist</Link> to get notified when we
        launch in your city.
      </p>

      <div className="legal-callout">
        <p>
          <strong>Safety first:</strong> If you are in immediate danger, contact
          local emergency services. Then report the user in the app or email
          support.
        </p>
      </div>
    </LegalPageShell>
  );
}
