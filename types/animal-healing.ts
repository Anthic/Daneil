export interface AnimalHealingData {
  banner: {
    title: string;
    imageSrc: string;
    imageAlt: string;
  };
  overview: {
    title: string;
    imageSrc: string;
    imageAlt: string;
    paragraphs: string[];
  };
  experience: {
    paragraphs: string[];
  };
  cta: {
    buttonText: string;
    buttonHref: string;
  };
}
