import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Growers Ground home">
      <span className="logo-mark" aria-hidden="true">
        <Image
          src={siteConfig.logoPath}
          alt=""
          width={36}
          height={36}
          priority
          className="logo-img"
        />
      </span>
      <span className="logo-text">{siteConfig.name}</span>
    </Link>
  );
}
