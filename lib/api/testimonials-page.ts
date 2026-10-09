import { testimonialsPageData } from "@/data/testimonials-page";
import type { TestimonialsPageData } from "@/types/testimonials-page";

export async function getTestimonialsPageData(): Promise<TestimonialsPageData> {
  return testimonialsPageData;
}
