"use client";

import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { AppFeatureScreenshot } from "./AppFeatureScreenshot";
import { AppDiscoverMapFlow } from "./AppDiscoverMapFlow";
import { AppHostProfileFlow } from "./AppHostProfileFlow";

const features = [
  {
    id: "discover-map",
    tab: "Discover map",
    title: "Browse hosts and gardeners on one map",
    description:
      "Teardrop pins with avatars for people — AI-ranked with clear “why this match” chips. Tap a pin, preview a profile, message before you commit.",
    slot: "discover-map",
    label: "Discover map",
    screenshot: {
      src: "/images/app_ss_dicover_first.png",
      width: 376,
      height: 663,
      alt: "Discover map near San Francisco with gardener pins and ranked list",
    },
  },
  {
    id: "host-profile",
    tab: "Host profiles",
    title: "See land specs before you visit",
    description:
      "Verified hosts share plot size, sun, water access, and a bio excerpt. Request space or view plot details without exposing exact addresses upfront.",
    slot: "host-profile",
    label: "Host profile",
    screenshot: {
      src: "/images/app_ss_host_profile1.png",
      width: 392,
      height: 636,
      alt: "Host profile flow — map preview to full profile",
    },
  },
  {
    id: "community-layer",
    tab: "Community layer",
    title: "Square pins for garden spots & swaps",
    description:
      "A second map layer for seed swaps, compost, water access, and public plots — confirmed by locals, never confused with private listings.",
    slot: "community-layer",
    label: "Community map",
    screenshot: {
      src: "/images/app_ss_groweing_community.png",
      width: 394,
      height: 633,
      alt: "Community hub with garden spots, groups, journals, and local events",
    },
  },
  {
    id: "journals-chat",
    tab: "Journals & chat",
    title: "Message, journal, and grow together",
    description:
      "In-app chat, growing journals with photo timelines, and neighborhood groups tied to where you actually garden.",
    slot: "journals-chat",
    label: "Journal & messaging",
    screenshot: {
      src: "/images/app_ss_coverstaion_between_host_and_gardener.png",
      width: 379,
      height: 658,
      alt: "In-app chat between a host and gardener with photos and message thread",
    },
  },
] as const;

const dualPhoneTabs = new Set<(typeof features)[number]["id"]>([
  "discover-map",
  "host-profile",
]);

const tiltedDeviceTabs = new Set<(typeof features)[number]["id"]>([
  "community-layer",
  "journals-chat",
]);

type TabIndicator = {
  left: number;
  top: number;
  width: number;
  height: number;
};

export function AppScreenshotsSection() {
  const [active, setActive] = useState<(typeof features)[number]["id"]>(
    features[0].id,
  );
  const panel = features.find((f) => f.id === active) ?? features[0];

  const tablistRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef(new Map<string, HTMLButtonElement>());
  const [indicator, setIndicator] = useState<TabIndicator | null>(null);
  const [indicatorReady, setIndicatorReady] = useState(false);

  const syncIndicator = useCallback(() => {
    const list = tablistRef.current;
    const btn = tabRefs.current.get(active);
    if (!list || !btn) return;

    setIndicator({
      left: btn.offsetLeft,
      top: btn.offsetTop,
      width: btn.offsetWidth,
      height: btn.offsetHeight,
    });
    setIndicatorReady(true);
  }, [active]);

  useLayoutEffect(() => {
    syncIndicator();

    const list = tablistRef.current;
    if (!list || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(() => syncIndicator());
    observer.observe(list);
    for (const btn of tabRefs.current.values()) {
      observer.observe(btn);
    }

    return () => observer.disconnect();
  }, [syncIndicator]);

  useLayoutEffect(() => {
    const onResize = () => syncIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [syncIndicator]);

  return (
    <section
      className="app-screens-section"
      id="app-screenshots"
      aria-labelledby="app-screens-heading"
    >
      <div className="container app-screens-header" data-reveal data-motion-y="36">
        <h2 id="app-screens-heading">What&apos;s inside Growers Ground?</h2>
        <p className="section-lead app-screens-lead">
          The full app experience — real screens from Discover, profiles, layers,
          and messaging.
        </p>
      </div>

      <div
        className="app-screens-tabs-wrap container"
        data-reveal
        data-motion-y="28"
        data-motion-delay="0.06"
      >
        <div
          ref={tablistRef}
          className="app-screens-tabs"
          role="tablist"
          aria-label="App features"
        >
          {indicator ? (
            <span
              className={`app-screens-tab-indicator${indicatorReady ? " is-visible" : ""}`}
              aria-hidden="true"
              style={{
                width: indicator.width,
                height: indicator.height,
                transform: `translate(${indicator.left}px, ${indicator.top}px)`,
              }}
            />
          ) : null}
          {features.map((feature) => (
            <button
              key={feature.id}
              ref={(node) => {
                if (node) tabRefs.current.set(feature.id, node);
                else tabRefs.current.delete(feature.id);
              }}
              type="button"
              role="tab"
              aria-selected={active === feature.id}
              className={`app-screens-tab${active === feature.id ? " is-active" : ""}`}
              onClick={() => setActive(feature.id)}
            >
              {feature.tab}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`container app-screens-panel${dualPhoneTabs.has(active) ? " app-screens-panel--host-dual" : ""}${tiltedDeviceTabs.has(active) ? " app-screens-panel--device-tilt" : ""}`}
        role="tabpanel"
        data-reveal-stagger
        data-motion-stagger="0.12"
      >
        <div key={`copy-${active}`} className="app-screens-copy app-screens-enter-copy">
          <h3>{panel.title}</h3>
          <p>{panel.description}</p>
          <a className="btn btn-accent btn-rect" href="#waitlist">
            Join the waitlist
          </a>
        </div>
        <div key={`device-${active}`} className="app-screens-device app-screens-enter-device">
          {active === "discover-map" ? (
            <AppDiscoverMapFlow />
          ) : active === "host-profile" ? (
            <AppHostProfileFlow />
          ) : (
            <AppFeatureScreenshot
              screenshot={panel.screenshot}
              slot={panel.slot}
              priority={false}
              className={`app-screens-device-shot${tiltedDeviceTabs.has(active) ? " app-screens-device-shot--tilt" : ""}`}
            />
          )}
        </div>
      </div>
    </section>
  );
}
