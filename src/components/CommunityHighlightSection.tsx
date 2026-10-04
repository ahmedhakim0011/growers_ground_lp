import { AppScreenshotPlaceholder } from "./AppScreenshotPlaceholder";

export function CommunityHighlightSection() {
  return (
    <section
      className="community-highlight-section"
      id="community"
      aria-labelledby="community-highlight-heading"
    >
      <div
        className="container community-highlight-inner"
        data-reveal-stagger
        data-motion-stagger="0.12"
      >
        <div className="community-highlight-copy">
          <p className="section-kicker light">Two maps, one app</p>
          <h2 id="community-highlight-heading">
            Community layer for spots your block actually uses 🗺️
          </h2>
          <p>
            Switch from Discover (people) to Community (places) — square pins for
            seed swaps, compost, and water access. New features rolling out with
            early access cities.
          </p>
          <a className="btn btn-accent btn-rect" href="#app-screenshots">
            See app previews
          </a>
        </div>
        <div className="community-highlight-visual">
          <div className="device-frame device-frame-sm">
            <AppScreenshotPlaceholder
              slot="community-highlight"
              label="Community layer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
