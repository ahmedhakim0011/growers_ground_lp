export function HeroTrustBadge() {
  return (
    <p className="hero-trust-pill">
      <span className="hero-trust-avatars" aria-hidden="true">
        <span className="hero-trust-avatar" style={{ background: "#5a8f6a" }} />
        <span className="hero-trust-avatar" style={{ background: "#8a6349" }} />
        <span className="hero-trust-avatar" style={{ background: "#6b5a8a" }} />
      </span>
      <span className="hero-trust-copy">
        Loved by early growers with <span className="hero-trust-star">★ 4.9</span>{" "}
        rating
      </span>
    </p>
  );
}
