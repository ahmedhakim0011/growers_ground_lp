"use client";

import { useRef } from "react";

const slides = [
  {
    title: "Map-ranked hosts in one view",
    description:
      "Teardrop pins for people, AI-ranked with lavender “why this match” chips — never a swipe deck.",
    tag: "Discover",
  },
  {
    title: "Message before you commit",
    description:
      "In-app chat, profile photos, and agreed terms — rent or barter — before anyone steps on your lawn.",
    tag: "Trust",
  },
  {
    title: "Community spots on a second layer",
    description:
      "Seed swaps, compost, water access, and public plots — square pins, confirmed by locals.",
    tag: "Community",
  },
  {
    title: "Growing journals & seasonal timelines",
    description:
      "Photo timelines per plot, follow neighbors, and learn what actually works in your zone.",
    tag: "Journals",
  },
  {
    title: "Groups, events & local Q&A",
    description:
      "Neighborhood clubs, planting days, and soil questions — tied to your map, not a generic forum.",
    tag: "Groups",
  },
  {
    title: "Hosts list multiple plots",
    description:
      "Passive income from unused yard space — you choose who gardens, with simple agreements.",
    tag: "Hosts",
  },
] as const;

export function FeatureShowcaseSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: -1 | 1) {
    const node = scrollerRef.current;
    if (!node) return;
    const card = node.querySelector<HTMLElement>(".showcase-card");
    const gap = 20;
    const delta = (card?.offsetWidth ?? 320) + gap;
    node.scrollBy({ left: direction * delta, behavior: "smooth" });
  }

  return (
    <section className="showcase-section" aria-labelledby="showcase-heading">
      <div className="container showcase-header">
        <div>
          <p className="section-kicker">Unified growing platform</p>
          <h2 id="showcase-heading">Everything social about gardening — not just listings</h2>
          <p className="section-lead showcase-lead">
            Go from download to your first message, journal entry, or community spot in minutes.
          </p>
        </div>
        <div className="showcase-nav">
          <button
            type="button"
            className="icon-btn"
            aria-label="Scroll features left"
            onClick={() => scrollByCard(-1)}
          >
            ←
          </button>
          <button
            type="button"
            className="icon-btn"
            aria-label="Scroll features right"
            onClick={() => scrollByCard(1)}
          >
            →
          </button>
        </div>
      </div>

      <div className="showcase-scroller" ref={scrollerRef}>
        {slides.map((slide) => (
          <article key={slide.title} className="showcase-card">
            <span className="showcase-tag">{slide.tag}</span>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
            <div className="showcase-card-visual" aria-hidden="true">
              <div className="showcase-card-mock" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
