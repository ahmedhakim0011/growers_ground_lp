import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { LegalPageShell } from "@/components/LegalPageShell";
import { legalLastUpdated, termsSections } from "@/lib/legal-content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms and conditions for using the ${siteConfig.name} app and website.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPageShell title="Terms of Service" lastUpdated={legalLastUpdated}>
      <LegalDocument sections={termsSections} />
      <p>
        See also:{" "}
        <a href="/privacy">Privacy Policy</a> ·{" "}
        <a href="/delete-account">Delete your account</a>
      </p>
    </LegalPageShell>
  );
}
