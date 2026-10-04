import Image from "next/image";
import { AppFeatureScreenshot } from "./AppFeatureScreenshot";

const discoverMap = {
  src: "/images/app_ss_dicover_first.png",
  width: 376,
  height: 663,
  alt: "Discover map near San Francisco with gardener pins on the map",
} as const;

const discoverList = {
  src: "/images/app_ss_dicover_second.png",
  width: 383,
  height: 652,
  alt: "Ranked gardeners list with distance, bios, and match chips",
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
        sizes="(max-width: 1023px) 320px, 320px"
        className="app-screens-host-phone app-screens-host-phone-right"
      />
    </div>
  );
}
