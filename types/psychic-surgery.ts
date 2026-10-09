export interface PsychicSurgeryData {
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
  uses: {
    heading: string;
    bullets: string[];
    imageSrc: string;
    imageAlt: string;
  };
  cta: {
    buttonText: string;
    buttonHref: string;
  };
}
