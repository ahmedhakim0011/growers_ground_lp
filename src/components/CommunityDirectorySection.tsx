"use client";

import Image from "next/image";
import { useState } from "react";
import { discoveryProfiles } from "@/lib/discovery-profiles";

export function CommunityDirectorySection() {
  const [activeId, setActiveId] = useState(discoveryProfiles[0]?.id ?? "");

  const activeProfile =
    discoveryProfiles.find((p) => p.id === activeId) ?? discoveryProfiles[0];

  return (
    <section
      className="discovery-section"
      id="discover"
      aria-labelledby="discovery-heading"
    >
      <div
        className="container discovery-header discovery-header--center"
        data-reveal
        data-motion-y="36"
      >
        <p className="section-kicker">Community directory</p>
        <h2 id="discovery-heading">Browse hosts &amp; gardeners near you</h2>
        <p className="section-lead discovery-lead">
          Real profile previews from early members. Select a member to view
          their live in-app profile.
        </p>
      </div>

      <div
        className="container discovery-showcase"
        data-reveal-stagger
        data-motion-stagger="0.12"
      >
        <div
          className="discovery-phone-stage"
          aria-live="polite"
          aria-label="Selected profile screen"
        >
          {activeProfile ? (
            <Image
              key={activeProfile.id}
              src={activeProfile.screenshot.src}
              alt={activeProfile.screenshot.alt}
              width={activeProfile.screenshot.width}
              height={activeProfile.screenshot.height}
              className="discovery-phone-shot"
              sizes="(max-width: 1023px) min(88vw, 320px), 320px"
              priority
            />
          ) : null}
        </div>

        <div className="discovery-feature-stack" role="list">
          {discoveryProfiles.map((profile) => {
            const isActive = activeProfile?.id === profile.id;
            return (
              <article key={profile.id} role="listitem">
                <button
                  type="button"
                  className={`discovery-feature-card${isActive ? " is-active" : ""}`}
                  onClick={() => setActiveId(profile.id)}
                  onMouseEnter={() => setActiveId(profile.id)}
                  aria-pressed={isActive}
                >
                  <span
                    className={`discovery-feature-pill${profile.role === "host" ? " discovery-feature-pill-host" : ""}`}
                  >
                    {profile.cardLabel}
                  </span>
                  <h3 className="discovery-feature-title">{profile.cardTitle}</h3>
                  <p className="discovery-feature-summary">
                    {profile.cardSummary}
                  </p>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
