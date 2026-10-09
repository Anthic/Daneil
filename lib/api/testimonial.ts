import { testimonialSectionData } from "@/data/testimonial";
import type { TestimonialSectionData } from "@/types/testimonial";

export async function getTestimonialSectionData(): Promise<TestimonialSectionData> {
  // TODO(API): replace with real fetch when backend is ready
  return testimonialSectionData;
}
