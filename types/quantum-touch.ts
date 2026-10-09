export interface QuantumTouchData {
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
  cta: {
    buttonText: string;
    buttonHref: string;
  };
}
