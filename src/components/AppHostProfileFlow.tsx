import Image from "next/image";
import { AppFeatureScreenshot } from "./AppFeatureScreenshot";

const hostMapPreview = {
  src: "/images/app_ss_host_profile1.png",
  width: 392,
  height: 636,
  alt: "Discover map with host pin preview and view profile action",
} as const;

const hostFullProfile = {
  src: "/images/app_ss_host_profile2.png",
  width: 384,
  height: 650,
  alt: "Karen Blue host profile with plot specs, about section, and connect actions",
} as const;

export function AppHostProfileFlow() {
  return (
    <div
      className="app-screens-host-phones"
      aria-label="From map preview to full host profile"
    >
      <AppFeatureScreenshot
        screenshot={hostMapPreview}
        slot="host-profile-map-preview"
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
        screenshot={hostFullProfile}
        slot="host-profile-detail"
        sizes="(max-width: 1023px) 320px, 320px"
        className="app-screens-host-phone app-screens-host-phone-right"
      />
    </div>
  );
}
