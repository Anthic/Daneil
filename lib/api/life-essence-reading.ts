import { lifeEssenceReadingData } from "@/data/life-essence-reading";
import type { LifeEssenceReadingData } from "@/types/life-essence-reading";

export async function getLifeEssenceReadingData(): Promise<LifeEssenceReadingData> {
  return lifeEssenceReadingData;
}
