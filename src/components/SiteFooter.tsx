import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer site-footer-zernio">
      <div
        className="container footer-grid-zernio"
        data-reveal-stagger
        data-motion-stagger="0.08"
        data-motion-y="32"
      >
        <div className="footer-brand">
          <span className="logo-text">{siteConfig.name}</span>
          <p>
            Where growers meet ground. Map-first discovery for gardeners and
            hosts — plus community spots, journals, and local groups. US &amp;
            Canada.
          </p>
          <div className="footer-cta-row">
            <a className="btn btn-accent btn-sm" href="#waitlist">
              Join waitlist
            </a>
            <Link className="text-link" href="/support">
              Contact support
            </Link>
          </div>
        </div>
        <div className="footer-col">
          <h3>Product</h3>
          <a href="#app-screenshots">Features</a>
          <Link href="/cities">Cities</Link>
          <Link href="/guides">Growing guides</Link>
          <a href="#discover">Directory</a>
          <a href="#app-screenshots">Community layer</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="footer-col">
          <h3>Company</h3>
          <a href="#waitlist">Early access</a>
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
      <div className="container footer-bottom footer-bottom-zernio">
        <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
        <p className="footer-note">
          Privacy-first. Your location is only shared when you choose to connect.
        </p>
      </div>
    </footer>
  );
}
