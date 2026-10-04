"use client";

import { useState } from "react";

const tabs = [
  {
    id: "gardener",
    label: "Gardener flow",
    headline: "Find ground near you in three taps",
    steps: [
      "Create a gardener profile with photos and what you want to grow.",
      "Browse AI-ranked hosts on the Discover map — read why each match fits.",
      "Message, agree on terms, and start your journal on day one.",
    ],
  },
  {
    id: "host",
    label: "Host flow",
    headline: "List yard space without daily supervision",
    steps: [
      "Add one or more plots with photos, access notes, and seasonal availability.",
      "Interview gardeners in-app — rent, barter, or harvest share.",
      "Stay optional: agreements and messaging live in Growers Ground.",
    ],
  },
  {
    id: "community",
    label: "Community layer",
    headline: "Pin public-good spots your block actually uses",
    steps: [
      "Switch to the community map layer — square pins, never confused with hosts.",
      "Confirm seed swaps, compost piles, and water access with local upvotes.",
      "Join groups, RSVP to events, and follow journals from growers nearby.",
    ],
  },
] as const;

export function ExperienceTabsSection() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("gardener");
  const panel = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <section
      className="experience-section"
      id="how-it-works"
      aria-labelledby="experience-heading"
    >
      <div className="container experience-inner">
        <div className="experience-copy">
          <p className="section-kicker">How it works</p>
          <h2 id="experience-heading">Built for gardeners, hosts, and neighbors</h2>
          <p className="section-lead">
            Same calm app — different flows depending on whether you need ground,
            have ground, or want community spots.
          </p>

          <div className="tab-list" role="tablist" aria-label="Product flows">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active === tab.id}
                className={`tab-pill${active === tab.id ? " is-active" : ""}`}
                onClick={() => setActive(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div role="tabpanel" className="experience-panel">
            <h3>{panel.headline}</h3>
            <ol className="experience-steps">
              {panel.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <a className="btn btn-accent" href="#waitlist">
              Join the waitlist
            </a>
          </div>
        </div>

        <div className="experience-visual" aria-hidden="true">
          <div className="phone-mock phone-mock-float experience-phone">
            <div className="phone-screen">
              <div className="mock-status">
                <span className="mock-time">9:41</span>
                <span className="mock-title">
                  {active === "community" ? "Community" : "Discover"}
                </span>
              </div>
              <div className="mock-map">
                <span className="pin pin-person" />
                <span className="pin pin-person ai" />
                <span className="pin pin-spot" />
                <span className="pin pin-spot water" />
              </div>
              <div className="mock-sheet">
                <span className="mock-chip">
                  {active === "host" ? "Your listings" : "Close to you"}
                </span>
                <span className="mock-chip clay">
                  {active === "gardener"
                    ? "Message host"
                    : active === "host"
                      ? "Review gardeners"
                      : "Seed swap · Sat"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
