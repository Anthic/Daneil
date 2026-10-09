export interface LifeEssenceReadingData {
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
  video: {
    imageSrc: string;
    imageAlt: string;
    duration: string;
  };
  criteria: {
    heading: string;
    intro: string;
    imageSrc: string;
    imageAlt: string;
    bullets: string[];
  };
  clientReviews: {
    heading: string;
    quotes: string[];
    freeBonusText: string;
    ctaText: string;
    ctaHref: string;
  };
}
