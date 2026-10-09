import { aboutPageData } from "@/data/about";
import type { AboutPageData } from "@/types/about";

export async function getAboutPageData(): Promise<AboutPageData> {
  // TODO(API): replace with real fetch when backend is ready
  return aboutPageData;
}
