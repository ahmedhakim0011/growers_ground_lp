"use client";

import Image from "next/image";
import { HeroDeviceScreens } from "./HeroDeviceScreens";
import { HeroFloatingChip } from "./HeroFloatingChip";
import { StoreBadges } from "./StoreBadges";

export function HeroSection() {
  return (
    <section className="hero-cal" aria-labelledby="hero-heading">
      <div className="shell-full hero-cal-inner">
        <div
          className="hero-cal-copy"
          data-hero-reveal
          data-motion-y="36"
          data-motion-duration="1"
        >
          <h1 id="hero-heading">
            The garden sharing app{" "}
            <span className="hero-cal-headline-accent">
              to find garden space or share your yard
            </span>
          </h1>
          <p className="hero-cal-lead">
            Want to grow vegetables but don&apos;t have a yard? Growers Ground
            is a yard sharing app that maps hosts with unused backyard space and gardeners looking for a
            place to grow, plus community gardens and seed swaps near you.
            Browse profiles and message before you commit.
          </p>

          <div className="hero-cal-download" id="download">
            <StoreBadges prominence="hero" />
            <a className="hero-cal-waitlist-link" href="/#waitlist">
              Join the waitlist for early access →
            </a>
          </div>
        </div>

        <div className="hero-cal-visual">
          <div className="hero-cal-phones">
            <div
              className="hero-phone hero-phone-left"
              data-hero-reveal
              data-motion-y="40"
              data-motion-delay="0.22"
              data-motion-duration="0.95"
            >
              <HeroDeviceScreens variant="discover" />
            </div>

            <Image
              className="hero-cal-flow-arrow"
              data-hero-reveal
              data-motion-y="24"
              data-motion-delay="0.34"
              data-motion-duration="0.85"
              src="/images/arrow.png"
              alt=""
              width={500}
              height={500}
              aria-hidden
              priority
            />

            <div
              className="hero-phone hero-phone-right"
              data-hero-reveal
              data-motion-y="40"
              data-motion-delay="0.28"
              data-motion-duration="0.95"
            >
              <HeroDeviceScreens variant="profile" />
              <HeroFloatingChip
                className="hero-float-chip-glass hero-float-chip-acres"
                pointer="left"
              >
                2.5 Acres Land
              </HeroFloatingChip>
              <HeroFloatingChip
                className="hero-float-chip-glass hero-float-chip-water"
                pointer="right"
              >
                <span className="hero-float-status-dot" aria-hidden />
                Water Access Confirmed
              </HeroFloatingChip>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
