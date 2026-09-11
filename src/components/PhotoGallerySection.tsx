import Image from "next/image";

const photos = [
  {
    src: "/images/neighborhood.jpg",
    alt: "Aerial view of a leafy suburban neighborhood with green backyards",
    badge: "Portland, OR · Backyard Harvest",
    className: "gallery-card gallery-card-wide",
  },
  {
    src: "/images/hero-gardener.jpg",
    alt: "Gardener sitting in a sunny yard with baskets of freshly picked vegetables",
    badge: "Austin, TX · Raised Bed Plot",
    className: "gallery-card gallery-card-medium",
  },
  {
    src: "/images/pexels-natalia-sevruk-636238602-30371404.jpg",
    alt: "Hands carefully transplanting tomato seedlings into garden soil",
    badge: "Toronto, ON · Community Seedling Swap",
    className: "gallery-card gallery-card-detail",
  },
] as const;

export function PhotoGallerySection() {
  return (
    <section className="photo-gallery" aria-label="Growers in action">
      <div className="container">
        <p className="section-eyebrow">Where growers meet ground</p>
        <h2 className="photo-gallery-title">Growing together, block by block</h2>
        <div className="photo-gallery-grid">
          {photos.map((photo) => (
            <figure key={photo.src} className={photo.className}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                loading="lazy"
              />
              <figcaption className="gallery-caption">
                <span className="gallery-badge">{photo.badge}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
