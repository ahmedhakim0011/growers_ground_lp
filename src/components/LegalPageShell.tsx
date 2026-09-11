import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";
import { Logo } from "./Logo";

type LegalPageShellProps = {
  title: string;
  lastUpdated: string;
  eyebrow?: string;
  children: ReactNode;
};

export function LegalPageShell({
  title,
  lastUpdated,
  eyebrow = "Legal",
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
          <p className="section-eyebrow">{eyebrow}</p>
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
            <Link href="/privacy">Privacy</Link>
            {" · "}
            <Link href="/terms">Terms</Link>
            {" · "}
            <Link href="/support">Support</Link>
            {" · "}
            <Link href="/delete-account">Delete account</Link>
          </p>
        </div>
      </footer>
    </>
  );
}
