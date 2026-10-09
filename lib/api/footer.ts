import { footerData } from "@/data/footer";
import type { FooterData } from "@/types/footer";

export async function getFooterData(): Promise<FooterData> {
  // TODO(API): replace with real fetch when backend is ready
  return footerData;
}
