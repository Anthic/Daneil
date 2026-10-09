export interface AboutPageData {
  banner: {
    title: string;
    imageSrc: string;
    imageAlt: string;
  };
  intro: {
    title: string;
    shaplaIconSrc: string;
    paragraphs: string[];
    buttonText: string;
    buttonHref: string;
    imageSrc: string;
    imageAlt: string;
  };
  healingByGaze: {
    title: string;
    paragraphs: string[];
    imageSrc: string;
    imageAlt: string;
  };
  lifeEssence: {
    title: string;
    paragraphs: string[];
    closingHighlight: string;
    imageSrc: string;
    imageAlt: string;
  };
}
