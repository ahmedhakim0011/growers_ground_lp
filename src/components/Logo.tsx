import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Logo() {
  return (
    <Link className="logo logo-cal" href="/" aria-label="Growers Ground home">
      <span className="logo-mark" aria-hidden="true">
        <Image
          src={siteConfig.logoPath}
          alt=""
          width={28}
          height={28}
          priority
          className="logo-img"
        />
      </span>
      <span className="logo-text">{siteConfig.name}</span>
    </Link>
  );
}
