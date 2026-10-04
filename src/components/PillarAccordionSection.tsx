"use client";

import { useState } from "react";

const pillars = [
  {
    id: "discover",
    title: "Discover",
    summary:
      "Map-ranked hosts and gardeners near you — with transparent “why this match” chips and safe profiles.",
    body:
      "Browse teardrop pins for people and square pins for community spots. Filter by distance, save favourites, and message before you agree on rent or barter terms.",
    cta: { href: "#gardener", label: "Explore for gardeners" },
  },
  {
    id: "community",
    title: "Community",
    summary:
      "Garden spots, seed swaps, compost sites, and water access — pinned and confirmed by local growers.",
    body:
      "Public-good places live on a separate map layer so they never look like private listings. Upvote, confirm, and add spots your neighborhood actually uses.",
    cta: { href: "#community", label: "See garden spots" },
  },
  {
    id: "connect",
    title: "Connect",
    summary:
      "Messaging, journals, groups, events, and local Q&A — tied to where you actually garden.",
    body:
      "Follow seasonal photo journals, join neighborhood clubs, RSVP to seed swaps, and ask pest or soil questions without leaving the app.",
    cta: { href: "#groups", label: "Community features" },
  },
] as const;

export function PillarAccordionSection() {
  const [openId, setOpenId] = useState<string>(pillars[0].id);

  return (
    <section className="pillar-section" aria-labelledby="pillar-heading">
      <div className="container">
        <p className="section-kicker">Three pillars</p>
        <h2 id="pillar-heading">Everything you need to find ground and grow together</h2>

        <div className="pillar-stack">
          {pillars.map((pillar) => {
            const isOpen = openId === pillar.id;
            return (
              <article
                key={pillar.id}
                className={`pillar-card${isOpen ? " is-open" : ""}`}
              >
                <button
                  type="button"
                  className="pillar-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(pillar.id)}
                >
                  <span className="pillar-title">{pillar.title}</span>
                  <span className="pillar-summary">{pillar.summary}</span>
                  <span className="pillar-chevron" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <div className="pillar-panel">
                    <p>{pillar.body}</p>
                    <a className="text-link" href={pillar.cta.href}>
                      {pillar.cta.label} →
                    </a>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
