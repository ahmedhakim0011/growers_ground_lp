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
