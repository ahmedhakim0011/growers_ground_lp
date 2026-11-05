"use client";

import { useState } from "react";
import { siteFaqs as faqs } from "@/lib/faqs";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="container faq-inner" data-reveal-stagger data-motion-stagger="0.1">
        <div className="faq-intro">
          <p className="section-kicker">FAQ</p>
          <h2 id="faq-heading">Frequently asked questions</h2>
          <p className="section-lead faq-intro-lead">
            Finding space to grow, sharing a yard, and how the app works.
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
                {/* Stay in the HTML when closed, so crawlers and screen readers get every answer. */}
                <p className="faq-answer" hidden={!isOpen}>
                  {item.a}
                  {item.link ? (
                    <>
                      {" "}
                      <a href={item.link.href}>{item.link.label}</a>
                    </>
                  ) : null}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
