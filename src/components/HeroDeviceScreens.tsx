import Image from "next/image";

type HeroDeviceScreensProps = {
  variant: "discover" | "profile";
};

const screens = {
  discover: {
    src: "/images/app_ss_three_gardners_profiles_pin_showing_on_host_side_map.png",
    alt: "Active map with garden markers, search filters, and nearby gardener pins",
    slot: "hero-discover",
    width: 352,
    height: 708,
    priority: true,
  },
  profile: {
    src: "/images/app_ss_host_landlord_profile_screen.png",
    alt: "Verified host profile with garden stats, badges, and property imagery",
    slot: "hero-profile",
    width: 377,
    height: 661,
    priority: true,
  },
} as const;

export function HeroDeviceScreens({ variant }: HeroDeviceScreensProps) {
  const screen = screens[variant];

  return (
    <div
      className="hero-screen hero-screen-shot"
      data-screenshot-slot={screen.slot}
    >
      <Image
        src={screen.src}
        alt={screen.alt}
        width={screen.width}
        height={screen.height}
        className="hero-screen-image"
        priority={screen.priority}
        sizes="(max-width: 1023px) 240px, 400px"
      />
    </div>
  );
}
