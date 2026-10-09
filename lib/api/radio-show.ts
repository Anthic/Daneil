import { radioShowData } from "@/data/radio-show";
import type { RadioShowSectionData } from "@/types/radio-show";

export async function getRadioShowData(): Promise<RadioShowSectionData> {
  // TODO(API): replace with real fetch when backend is ready
  return radioShowData;
}
