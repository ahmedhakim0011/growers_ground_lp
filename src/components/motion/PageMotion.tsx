"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import { getPrefersReducedMotion } from "@/lib/motion/prefs";

type MotionOptions = {
  y?: number;
  x?: number;
  scale?: number;
  delay?: number;
  duration?: number;
  stagger?: number;
};

function readNumber(el: HTMLElement, key: string, fallback: number): number {
  const raw = el.dataset[key];
  if (raw === undefined || raw === "") return fallback;
  const n = Number.parseFloat(raw);
  return Number.isFinite(n) ? n : fallback;
}

function readOptions(el: HTMLElement): MotionOptions {
  return {
    y: readNumber(el, "motionY", 44),
    x: readNumber(el, "motionX", 0),
    scale: readNumber(el, "motionScale", 0.98),
    delay: readNumber(el, "motionDelay", 0),
    duration: readNumber(el, "motionDuration", 0.9),
    stagger: readNumber(el, "motionStagger", 0.1),
  };
}

export function PageMotion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (getPrefersReducedMotion()) {
      document.documentElement.classList.add("motion-reduced");
      return;
    }

    document.documentElement.classList.remove("motion-reduced");
    document.documentElement.classList.add("motion-enabled");

    let cancelled = false;
    let ctx: { revert: () => void } | null = null;

    async function boot() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-hero-reveal]").forEach((el) => {
          const opts = readOptions(el);
          gsap.from(el, {
            y: opts.y,
            x: opts.x,
            opacity: 0,
            scale: opts.scale,
            duration: opts.duration,
            delay: opts.delay,
            ease: "power3.out",
            clearProps: "transform",
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          const opts = readOptions(el);
          gsap.from(el, {
            y: opts.y,
            x: opts.x,
            opacity: 0,
            scale: opts.scale,
            duration: opts.duration,
            delay: opts.delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              once: true,
            },
            clearProps: "transform",
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((el) => {
          const opts = readOptions(el);
          const targets = Array.from(el.children).filter(
            (node): node is HTMLElement => node instanceof HTMLElement,
          );
          if (targets.length === 0) return;

          gsap.from(targets, {
            y: opts.y,
            x: opts.x,
            opacity: 0,
            scale: opts.scale,
            duration: (opts.duration ?? 0.9) * 0.92,
            stagger: opts.stagger,
            delay: opts.delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 84%",
              once: true,
            },
            clearProps: "transform",
          });
        });
      });

      ctx = context;
      ScrollTrigger.refresh();
    }

    boot().catch(() => {
      document.documentElement.classList.remove("motion-enabled");
    });

    return () => {
      cancelled = true;
      ctx?.revert();
      document.documentElement.classList.remove("motion-enabled");
    };
  }, [pathname]);

  return null;
}
