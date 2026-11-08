import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page does not exist. Browse community gardens by city or read our free guides.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="city-page">
        <div className="container city-page-header">
          <h1>We could not find that page</h1>
          <p className="city-page-lead">
            The link may be old or mistyped. These are good places to pick up
            from:
          </p>
          <ul className="city-guide-links">
            <li>
              <Link href="/cities">Community gardens by city</Link>
            </li>
            <li>
              <Link href="/guides">Free community garden and yard sharing guides</Link>
            </li>
            <li>
              <Link href="/">Growers Ground home page</Link>
            </li>
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
