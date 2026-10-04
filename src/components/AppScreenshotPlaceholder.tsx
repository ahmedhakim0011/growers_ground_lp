type AppScreenshotPlaceholderProps = {
  /** Stable id for swapping in real assets later, e.g. `discover-map` */
  slot: string;
  label: string;
  className?: string;
  /** Hero / marketing: quiet skeleton UI instead of dashed dev labels */
  variant?: "default" | "minimal";
};

export function AppScreenshotPlaceholder({
  slot,
  label,
  className = "",
  variant = "default",
}: AppScreenshotPlaceholderProps) {
  if (variant === "minimal") {
    return (
      <div
        className={`screenshot-slot screenshot-slot-minimal ${className}`.trim()}
        data-screenshot-slot={slot}
        role="img"
        aria-label={`${label} — screenshot placeholder`}
      >
        <div className="screenshot-skeleton">
          <div className="screenshot-skeleton-bar" />
          <div className="screenshot-skeleton-map" />
          <div className="screenshot-skeleton-sheet">
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`screenshot-slot ${className}`.trim()}
      data-screenshot-slot={slot}
      role="img"
      aria-label={`${label} — screenshot placeholder`}
    >
      <div className="screenshot-slot-inner">
        <span className="screenshot-slot-badge">Preview</span>
        <span className="screenshot-slot-title">{label}</span>
        <span className="screenshot-slot-hint">Slot: {slot}</span>
      </div>
    </div>
  );
}
