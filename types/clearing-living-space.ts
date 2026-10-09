export interface ClearingLivingSpaceData {
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
  experienceStory: {
    paragraphs: string[];
  };
  stuckEnergies: {
    intro: string;
    bullets: string[];
    geopathicNote: string;
  };
  clearingMethod: {
    paragraphs: string[];
  };
  cta: {
    buttonText: string;
    buttonHref: string;
  };
}
