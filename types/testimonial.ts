export interface TestimonialItem {
  id: string;
  heading: string;
  quote: string;
  clientHighlight?: string;
  buttonText: string;
  buttonHref: string;
}

export interface TestimonialSectionData {
  backgroundImage: string;
  testimonials: TestimonialItem[];
}
