import { introVideoData } from "@/data/intro-video";
import type { IntroVideoData } from "@/types/intro-video";

export async function getIntroVideoData(): Promise<IntroVideoData> {
  // TODO(API): replace with real fetch when backend is ready
  return introVideoData;
}
