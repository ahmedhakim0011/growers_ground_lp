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
          <a href={`mailto:${siteConfig.supportEmail}`}>Contact</a>
        </div>
        <div className="footer-col">
          <h3>Legal</h3>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="/delete-account">Delete account</a>
          <a href={`mailto:${siteConfig.supportEmail}`}>Support</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
        <p id="privacy" className="footer-note">
          Privacy-first. Your location is only shared when you choose to connect.
        </p>
        <p id="terms" className="footer-note">
          Terms of Service — full policy at launch.
        </p>
      </div>
    </footer>
  );
}
