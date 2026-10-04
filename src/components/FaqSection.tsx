"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How is Growers Ground different from a community garden waitlist?",
    a: "Waitlists are municipal and slow. We connect you with private hosts listing backyard plots now — with messaging, terms, and map discovery built in.",
  },
  {
    q: "Is my exact address shown on the map?",
    a: "No. Locations are approximate until you choose to connect with someone. Privacy-first by design.",
  },
  {
    q: "Can hosts rent or barter?",
    a: "Yes — you set seasonal rent, harvest share, or barter terms and agree in-app before anyone gardens.",
  },
  {
    q: "What are the two map layers?",
    a: "Discover uses teardrop pins with avatars for people (hosts and gardeners). Community uses square pins with icons for public-good places like seed swaps.",
  },
  {
    q: "Is there a swipe deck?",
    a: "Never. Browse a map, read match reasons, and message like a neighbor — not a dating app.",
  },
  {
    q: "When will the app launch in my city?",
    a: "We are rolling out city by city across the US and Canada. Join the waitlist to get notified when your area opens.",
  },
] as const;

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="container faq-inner" data-reveal-stagger data-motion-stagger="0.1">
        <div className="faq-intro">
          <p className="section-kicker">FAQ</p>
          <h2 id="faq-heading">Frequently asked questions</h2>
          <p className="section-lead faq-intro-lead">
            The questions our support team hears most.
          </p>
        </div>
        <div className="faq-list" data-reveal-stagger data-motion-stagger="0.07" data-motion-y="28">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.q} className={`faq-item${isOpen ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {item.q}
                  <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen ? <p className="faq-answer">{item.a}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
