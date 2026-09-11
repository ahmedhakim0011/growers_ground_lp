import Image from "next/image";

type SpotlightSectionProps = {
  id: string;
  variant: "gardener" | "host";
  badge: string;
  badgeClass?: string;
  heading: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  benefits: string[];
  image: { src: string; alt: string; position?: string };
};

export function SpotlightSection({
  id,
  variant,
  badge,
  badgeClass,
  heading,
  description,
  primaryCta,
  secondaryCta,
  benefits,
  image,
}: SpotlightSectionProps) {
  return (
    <section
      className={`spotlight spotlight-split spotlight-${variant}`}
      id={id}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container spotlight-split-inner">
        <div className="spotlight-copy">
          <div className={`spotlight-badge${badgeClass ? ` ${badgeClass}` : ""}`}>
            {badge}
          </div>
          <h2 id={`${id}-heading`}>{heading}</h2>
          <p>{description}</p>
          <div className="spotlight-actions">
            <a className="btn btn-primary" href={primaryCta.href}>
              {primaryCta.label}
            </a>
            <a className="btn btn-outline" href={secondaryCta.href}>
              {secondaryCta.label}
            </a>
          </div>
          <ul className="badge-row badge-row-cap" aria-label={`${badge} benefits`}>
            {benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <figure className="spotlight-media">
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={600}
            loading="lazy"
            style={image.position ? { objectPosition: image.position } : undefined}
          />
        </figure>
      </div>
    </section>
  );
}
