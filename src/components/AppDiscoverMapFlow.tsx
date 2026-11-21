import Image from "next/image";
import { AppFeatureScreenshot } from "./AppFeatureScreenshot";

const discoverMap = {
  src: "/images/app/discover-map.jpg",
  width: 506,
  height: 1100,
  alt: "Discover map of San Francisco with gardener photo pins and a 25-mile distance filter",
} as const;

const discoverList = {
  src: "/images/app/discover-list.jpg",
  width: 506,
  height: 1100,
  alt: "Four gardeners ranked for you, each with distance, a short bio, and how they like to garden",
} as const;

export function AppDiscoverMapFlow() {
  return (
    <div
      className="app-screens-host-phones"
      aria-label="Discover map and ranked gardener list"
    >
      <AppFeatureScreenshot
        screenshot={discoverMap}
        slot="discover-map-primary"
        priority
        framed
        sizes="(max-width: 1023px) 320px, 320px"
        className="app-screens-host-phone app-screens-host-phone-left app-screens-device-shot--tilt"
      />
      <Image
        className="app-screens-host-arrow"
        src="/images/arrow.png"
        alt=""
        width={500}
        height={500}
        aria-hidden
        sizes="72px"
      />
      <AppFeatureScreenshot
        screenshot={discoverList}
        slot="discover-map-list"
        framed
        sizes="(max-width: 1023px) 320px, 320px"
        className="app-screens-host-phone app-screens-host-phone-right"
      />
    </div>
  );
}
