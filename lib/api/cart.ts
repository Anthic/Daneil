import { initialCartData } from "@/data/cart";
import type { CartData } from "@/types/navigation";

export async function getCartData(): Promise<CartData> {
  // TODO(API): replace with real fetch when backend is ready
  return initialCartData;
}
