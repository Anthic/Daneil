export interface HeroSlide {
  id: string;
  tagline?: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "right" | "left" | "center";
}
