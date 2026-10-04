"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { Logo } from "./Logo";
import { StoreBadges } from "./StoreBadges";

const links = [
  { href: "/cities", label: "Cities", isRoute: true },
  { href: "/guides", label: "Guides", isRoute: true },
  { href: "#discover", label: "Directory", isRoute: false },
  { href: "#faq", label: "FAQ", isRoute: false },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header site-header-cal" id="top">
      <div
        className="shell-full header-inner header-inner-cal"
        data-hero-reveal
        data-motion-y="14"
        data-motion-duration="0.75"
      >
        <Logo />

        <nav className="nav-desktop nav-cal" aria-label="Primary">
          {links.map((link) =>
            link.isRoute ? (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ),
          )}
          <Link href="/support">Contact</Link>
        </nav>

        <div className="header-ctas header-ctas-cal">
          <StoreBadges prominence="header" />
        </div>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        className="nav-mobile"
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!mobileOpen}
      >
        {links.map((link) =>
          link.isRoute ? (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ),
        )}
        <Link href="/support" onClick={() => setMobileOpen(false)}>
          Contact
        </Link>
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
        >
          Instagram
        </a>
        <a href="#waitlist" onClick={() => setMobileOpen(false)}>
          Join waitlist
        </a>
      </nav>
    </header>
  );
}
