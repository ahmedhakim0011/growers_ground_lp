import type { ReactNode } from "react";

type HeroFloatingChipProps = {
  children: ReactNode;
  className?: string;
  pointer?: "left" | "right" | "bottom";
};

export function HeroFloatingChip({
  children,
  className = "",
  pointer = "left",
}: HeroFloatingChipProps) {
  return (
    <div
      className={`hero-float-chip hero-float-chip-pointer-${pointer} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
