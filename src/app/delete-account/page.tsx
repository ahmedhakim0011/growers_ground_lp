import type { Metadata } from "next";
import { LegalPageShell } from "@/components/LegalPageShell";
import { legalLastUpdated } from "@/lib/legal-content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete Account",
  description:
    "How to permanently delete your Growers Ground account and associated personal data.",
  alternates: { canonical: "/delete-account" },
};

export default function DeleteAccountPage() {
  return (
    <LegalPageShell title="Delete your account" lastUpdated={legalLastUpdated}>
      <p>
        You can permanently delete your {siteConfig.name} account at any time.
        Deletion removes your profile from Discover and Community, signs you out
        on all devices, and starts removal of personal data we hold.
      </p>

      <h2>Delete in the app</h2>
      <ol>
        <li>Open the {siteConfig.name} app and sign in.</li>
        <li>
          Go to <strong>Settings</strong> → <strong>Account settings</strong>.
        </li>
        <li>
          Scroll to <strong>Danger zone</strong> and tap{" "}
          <strong>Delete account</strong>.
        </li>
        <li>Confirm when prompted. This action cannot be undone.</li>
      </ol>

      <h2>What is deleted</h2>
      <ul>
        <li>Profile information (name, bio, photos, garden answers)</li>
        <li>Location and matching preferences</li>
        <li>Messages and conversation history</li>
        <li>Likes, connections, and in-app activity tied to your account</li>
        <li>Community posts and journal entries you created</li>
      </ul>

      <h2>What may be retained</h2>
      <p>
        We may keep limited records where required by law (for example fraud
        prevention, safety reports, or billing disputes). Backup copies are
        purged on our normal retention schedule, typically within 30 days.
      </p>

      <h2>Can&apos;t access the app?</h2>
      <p>
        Email{" "}
        <a href={`mailto:${siteConfig.supportEmail}?subject=Account%20deletion%20request`}>
          {siteConfig.supportEmail}
        </a>{" "}
        from the address linked to your account with the subject{" "}
        <strong>Account deletion request</strong>. We will verify ownership and
        complete deletion within 30 days.
      </p>

      <div className="legal-callout">
        <p>
          <strong>Before you delete:</strong> Export anything you want to keep.
          Deleted accounts cannot be restored.
        </p>
      </div>
    </LegalPageShell>
  );
}
