import { danielInterviewsData } from "@/data/daniel-interviews";
import type { DanielInterviewsData } from "@/types/daniel-interviews";

export async function getDanielInterviewsData(): Promise<DanielInterviewsData> {
  // TODO(API): replace with real fetch when backend is ready
  return danielInterviewsData;
}
