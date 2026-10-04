import Image from "next/image";

export type AppFeatureScreenshotMeta = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type AppFeatureScreenshotProps = {
  screenshot: AppFeatureScreenshotMeta;
  slot: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function AppFeatureScreenshot({
  screenshot,
  slot,
  priority = false,
  sizes = "(max-width: 1023px) 320px, 320px",
  className = "",
}: AppFeatureScreenshotProps) {
  return (
    <div
      className={`app-screens-shot ${className}`.trim()}
      data-screenshot-slot={slot}
    >
      <Image
        src={screenshot.src}
        alt={screenshot.alt}
        width={screenshot.width}
        height={screenshot.height}
        className="app-screens-image"
        priority={priority}
        sizes={sizes}
      />
    </div>
  );
}
