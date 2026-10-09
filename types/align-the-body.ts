export interface AlignTheBodyData {
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
  reliefIntro: {
    heading: string;
    paragraph: string;
  };
  video: {
    imageSrc: string;
    imageAlt: string;
    duration: string;
  };
  wellbeing: {
    heading: string;
    paragraphs: string[];
    imageSrc: string;
    imageAlt: string;
  };
  sessionDetails: {
    heading: string;
    paragraphs: string[];
    closingHighlight: string;
  };
  cta: {
    buttonText: string;
    buttonHref: string;
  };
}
