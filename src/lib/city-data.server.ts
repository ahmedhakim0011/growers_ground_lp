import fs from "node:fs";
import path from "node:path";
import type { CityPinBundle } from "@/lib/metros";

export function loadCityPins(slug: string): CityPinBundle | null {
  try {
    const file = path.join(
      process.cwd(),
      "public/data/cities",
      `${slug}.json`,
    );
    return JSON.parse(fs.readFileSync(file, "utf8")) as CityPinBundle;
  } catch {
    return null;
  }
}
