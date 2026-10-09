import { danielsStoryData } from "@/data/daniels-story";
import type { DanielsStoryData } from "@/types/daniels-story";

export async function getDanielsStoryData(): Promise<DanielsStoryData> {
  // TODO(API): replace with real fetch when backend is ready
  return danielsStoryData;
}
