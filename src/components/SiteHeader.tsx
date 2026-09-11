"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <Logo />

        <nav className="nav-desktop" aria-label="Primary">
          {navLinks.desktop.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <div
            ref={dropdownRef}
            className={`nav-dropdown${dropdownOpen ? " open" : ""}`}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen((open) => !open);
              }}
            >
              Use Cases <span aria-hidden="true">▾</span>
            </button>
            <div className="nav-dropdown-menu" role="menu">
              {navLinks.dropdown.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  onClick={() => setDropdownOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </nav>

        <div className="header-ctas">
          <a className="btn btn-outline btn-sm" href="#waitlist">
            Join Waitlist
          </a>
          <a className="btn btn-primary btn-sm" href="#download">
            Get the App
          </a>
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
        {navLinks.mobile.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMobile}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
