import { heroSlides } from "@/data/hero";
import type { HeroSlide } from "@/types/hero";

export async function getHeroSlides(): Promise<HeroSlide[]> {
  // TODO(API): replace with real fetch when backend is ready
  return heroSlides;
}
