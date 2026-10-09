import { servicesSectionData } from "@/data/services";
import type { ServicesSectionData } from "@/types/services";

export async function getServicesSectionData(): Promise<ServicesSectionData> {
  // TODO(API): replace with real fetch when backend is ready
  return servicesSectionData;
}
