import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";
import { Logo } from "./Logo";

type LegalPageShellProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalPageShell({
  title,
  lastUpdated,
  children,
}: LegalPageShellProps) {
  return (
    <>
      <header className="legal-header">
        <div className="container legal-header-inner">
          <Logo />
          <Link className="btn btn-outline btn-sm" href="/">
            Back to home
          </Link>
        </div>
      </header>

      <main className="legal-main">
        <div className="container legal-content">
          <p className="section-eyebrow">Legal</p>
          <h1>{title}</h1>
          <p className="legal-updated">Last updated: {lastUpdated}</p>
          <div className="legal-body">{children}</div>
        </div>
      </main>

      <footer className="legal-footer">
        <div className="container legal-footer-inner">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}.{" "}
            <Link href="/">Home</Link>
            {" · "}
            <Link href="/delete-account">Delete account</Link>
            {" · "}
            <a href={`mailto:${siteConfig.supportEmail}`}>Support</a>
          </p>
        </div>
      </footer>
    </>
  );
}
