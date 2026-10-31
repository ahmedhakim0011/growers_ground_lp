import Link from "next/link";
import type { ReactNode } from "react";

const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;

function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK_RE)) {
    const idx = m.index ?? 0;
    if (idx > last) out.push(text.slice(last, idx));
    const [, label, href] = m;
    out.push(
      href.startsWith("/") ? (
        <Link key={idx} href={href}>
          {label}
        </Link>
      ) : (
        <a key={idx} href={href} rel="noopener noreferrer" target="_blank">
          {label}
        </a>
      ),
    );
    last = idx + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/** Renders a guide body: blank-line separated paragraphs, "- " bullet blocks, [label](href) links. */
export function GuideRichText({ body }: { body: string }) {
  return (
    <>
      {body.split("\n\n").map((block) => {
        const lines = block.split("\n");
        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={block}>
              {lines.map((l) => (
                <li key={l}>{renderInline(l.slice(2))}</li>
              ))}
            </ul>
          );
        }
        return <p key={block}>{renderInline(block)}</p>;
      })}
    </>
  );
}
