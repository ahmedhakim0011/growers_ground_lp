import Image from "next/image";
import { GuideRichText } from "@/components/GuideRichText";
import type { GuideVisual as GuideVisualData } from "@/lib/guides";

function Caption({ text }: { text?: string }) {
  return text ? <figcaption className="guide-visual-caption">{text}</figcaption> : null;
}

/** Inline, text-first visuals for guides: accessible HTML + CSS, no external images required. */
export function GuideVisual({ visual }: { visual: GuideVisualData }) {
  switch (visual.type) {
    case "compare":
      return (
        <figure className="guide-visual guide-visual-compare">
          <div className="guide-visual-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">{visual.cornerLabel ?? ""}</th>
                  {visual.columns.map((c) => (
                    <th key={c} scope="col">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visual.rows.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    {r.cells.map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Caption text={visual.caption} />
        </figure>
      );
    case "steps":
      return (
        <figure className="guide-visual">
          <ol className="guide-visual-steps">
            {visual.items.map((s, i) => (
              <li key={s.title}>
                <span className="guide-visual-step-num" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <Caption text={visual.caption} />
        </figure>
      );
    case "checklist":
      return (
        <figure className="guide-visual guide-visual-checklist">
          {visual.title ? <p className="guide-visual-title">{visual.title}</p> : null}
          <ul>
            {visual.items.map((t) => (
              <li key={t}>
                <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                  <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.15" />
                  <path
                    d="M5.5 10.5l3 3 6-6.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <Caption text={visual.caption} />
        </figure>
      );
    case "cards":
      return (
        <figure className="guide-visual">
          <ul className="guide-visual-cards">
            {visual.items.map((c) => (
              <li key={c.title}>
                {c.tag ? <span className="guide-visual-tag">{c.tag}</span> : null}
                <strong>{c.title}</strong>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
          <Caption text={visual.caption} />
        </figure>
      );
    case "timeline":
      return (
        <figure className="guide-visual">
          <ol className="guide-visual-timeline">
            {visual.items.map((t) => (
              <li key={t.label}>
                <span className="guide-visual-timeline-label">{t.label}</span>
                <p>{t.text}</p>
              </li>
            ))}
          </ol>
          <Caption text={visual.caption} />
        </figure>
      );
    case "callout":
      return (
        <aside className={`guide-visual guide-visual-callout guide-visual-callout-${visual.tone ?? "tip"}`}>
          {visual.title ? <p className="guide-visual-title">{visual.title}</p> : null}
          <GuideRichText body={visual.text} />
        </aside>
      );
    case "image":
      return (
        <figure className="guide-visual guide-visual-image">
          <Image src={visual.src} alt={visual.alt} width={visual.width} height={visual.height} sizes="(max-width: 700px) 100vw, 640px" />
          <Caption text={visual.caption} />
        </figure>
      );
  }
}
