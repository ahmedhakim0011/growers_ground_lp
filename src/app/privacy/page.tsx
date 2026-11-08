import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { LegalPageShell } from "@/components/LegalPageShell";
import { legalLastUpdated, privacySections } from "@/lib/legal-content";
import { socialMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your personal information.`,
  alternates: { canonical: "/privacy" },
  ...socialMetadata({
    title: `Privacy Policy | ${siteConfig.name}`,
    description: `How ${siteConfig.name} collects, uses, and protects your personal information.`,
    path: "/privacy",
  }),
};

export default function PrivacyPage() {
  return (
    <LegalPageShell title="Privacy Policy" lastUpdated={legalLastUpdated}>
      <LegalDocument sections={privacySections} />
      <p>
        See also:{" "}
        <a href="/delete-account">Delete your account</a> ·{" "}
        <a href="/terms">Terms of Service</a>
      </p>
    </LegalPageShell>
  );
}
