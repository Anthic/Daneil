export interface CellularMemoryReleaseData {
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
  mariEl: {
    paragraphs: string[];
    imageSrc: string;
    imageAlt: string;
  };
  cta: {
    buttonText: string;
    buttonHref: string;
  };
}
