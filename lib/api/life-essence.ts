import { lifeEssenceData } from "@/data/life-essence";
import type { LifeEssenceData } from "@/types/life-essence";

export async function getLifeEssenceData(): Promise<LifeEssenceData> {
  // TODO(API): replace with real fetch when backend is ready
  return lifeEssenceData;
}
