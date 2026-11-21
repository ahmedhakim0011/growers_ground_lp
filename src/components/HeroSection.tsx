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
              <HeroDeviceScreens variant="intent" />
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
              <HeroDeviceScreens variant="community" />
              <HeroFloatingChip
                className="hero-float-chip-glass hero-float-chip-acres"
                pointer="left"
              >
                <svg className="hero-float-chip-icon" viewBox="0 0 24 24" aria-hidden>
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
                Tuned to your zone
              </HeroFloatingChip>
              <HeroFloatingChip
                className="hero-float-chip-glass hero-float-chip-water"
                pointer="left"
              >
                <span className="hero-float-status-dot" aria-hidden />
                Hosts &amp; gardeners nearby
              </HeroFloatingChip>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
