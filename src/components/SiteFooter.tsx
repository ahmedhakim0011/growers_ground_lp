import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="logo-text">{siteConfig.name}</span>
          <p>
            Where growers meet ground. Map-first discovery for gardeners and
            hosts — plus community spots, journals, and local groups. US &amp;
            Canada.
          </p>
        </div>
        <div className="footer-col">
          <h3>Product</h3>
          <a href="#how-it-works">How It Works</a>
          <a href="#gardener">For Gardeners</a>
          <a href="#host">For Hosts</a>
          <a href="#community">Garden Spots</a>
          <a href="#groups">Groups &amp; Events</a>
        </div>
        <div className="footer-col">
          <h3>Company</h3>
          <a href="#about">About</a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <Link href="/support">Contact</Link>
        </div>
        <div className="footer-col">
          <h3>Legal</h3>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/delete-account">Delete account</Link>
          <Link href="/support">Support</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
        <p className="footer-note">
          Privacy-first. Your location is only shared when you choose to connect.
        </p>
      </div>
    </footer>
  );
}
