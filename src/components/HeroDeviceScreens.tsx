import Image from "next/image";

type HeroDeviceScreensProps = {
  variant: "community" | "intent";
};

/* Raw app captures (1206×2622 → 506×1100). The phone bezel is drawn in CSS
   (.device-frame) so every screen shares one crisp, consistent frame. */
const screens = {
  community: {
    src: "/images/app/community-hub.jpg",
    alt: "Growers Ground home: what's growing near you, a seasonal planting guide for your zone, and quick actions to pin a spot, ask, log growth, or host an event",
    slot: "hero-community",
  },
  intent: {
    src: "/images/app/intent.jpg",
    alt: "Onboarding: choose whether you want space to grow, have space to share, or are here for the community",
    slot: "hero-intent",
  },
} as const;

export function HeroDeviceScreens({ variant }: HeroDeviceScreensProps) {
  const screen = screens[variant];

  return (
    <div
      className="hero-screen hero-screen-shot device-frame"
      data-screenshot-slot={screen.slot}
    >
      <Image
        src={screen.src}
        alt={screen.alt}
        width={506}
        height={1100}
        className="hero-screen-image"
        priority
        sizes="(max-width: 1023px) 180px, 290px"
      />
    </div>
  );
}
