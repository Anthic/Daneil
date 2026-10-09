export interface TestimonialsPageItem {
  id: string;
  title: string;
  quote: string;
}

export interface TestimonialsPageData {
  banner: {
    title: string;
    imageSrc: string;
    imageAlt: string;
  };
  testimonials: TestimonialsPageItem[];
}
