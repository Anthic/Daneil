import { aboutDanielData } from "@/data/about-daniel";
import type { AboutDanielData } from "@/types/about-daniel";

export async function getAboutDanielData(): Promise<AboutDanielData> {
  // TODO(API): replace with real fetch when backend is ready
  return aboutDanielData;
}
