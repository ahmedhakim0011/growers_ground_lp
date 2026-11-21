"use client";

import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { AppFeatureScreenshot } from "./AppFeatureScreenshot";
import { AppDiscoverMapFlow } from "./AppDiscoverMapFlow";

const features = [
  {
    id: "discover-map",
    tab: "Discover map",
    title: "Browse hosts and gardeners on one map",
    description:
      "Photo pins for the people near you, ranked for you by distance, interests and garden fit. Tap a pin, preview a profile, and message before you commit.",
    slot: "discover-map",
    label: "Discover map",
    screenshot: {
      src: "/images/app/discover-map.jpg",
      width: 506,
      height: 1100,
      alt: "Discover map of San Francisco with gardener photo pins and a ranked list",
    },
  },
  {
    id: "first-season",
    tab: "Your first season",
    title: "Tell it what you want, get a plan",
    description:
      "Pick grow, share, or community. Growers Ground builds a first-season plan for your zone: what to plant this month, hosts nearby, and events coming up.",
    slot: "first-season",
    label: "First-season plan",
    screenshot: {
      src: "/images/app/first-season.jpg",
      width: 506,
      height: 1100,
      alt: "Your first-season plan: what's worth planting this month in your zone, 14 hosts nearby, and 2 events coming up",
    },
  },
  {
    id: "community-hub",
    tab: "Community hub",
    title: "What's growing near you, every time you open it",
    description:
      "A seasonal planting guide tuned to your zone, then one tap to pin a garden spot, ask a question, log growth, or host an event. Community is free for everyone.",
    slot: "community-hub",
    label: "Community hub",
    screenshot: {
      src: "/images/app/community-hub.jpg",
      width: 506,
      height: 1100,
      alt: "Community hub with a November planting guide, quick actions, and Explore tiles for garden spots, groups, and journals",
    },
  },
  {
    id: "journals-groups",
    tab: "Journals & groups",
    title: "Log your season, follow your neighbors'",
    description:
      "Season logs with progress and photo timelines, plus neighborhood groups, events, and Q&A tied to where you actually garden.",
    slot: "journals-groups",
    label: "Journals",
    screenshot: {
      src: "/images/app/journals.jpg",
      width: 506,
      height: 1100,
      alt: "Journals screen with season logs, progress bars, and an add journal button",
    },
  },
] as const;

const dualPhoneTabs = new Set<(typeof features)[number]["id"]>([
  "discover-map",
]);

const tiltedDeviceTabs = new Set<(typeof features)[number]["id"]>([
  "first-season",
  "community-hub",
  "journals-groups",
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
          Real screens from the app: the map, your first-season plan, the
          community hub, and season journals.
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
          <a className="btn btn-accent btn-rect" href="/#waitlist">
            Join the waitlist
          </a>
        </div>
        <div key={`device-${active}`} className="app-screens-device app-screens-enter-device">
          {active === "discover-map" ? (
            <AppDiscoverMapFlow />
          ) : (
            <AppFeatureScreenshot
              screenshot={panel.screenshot}
              slot={panel.slot}
              priority={false}
              framed
              className={`app-screens-device-shot${tiltedDeviceTabs.has(active) ? " app-screens-device-shot--tilt" : ""}`}
            />
          )}
        </div>
      </div>
    </section>
  );
}
