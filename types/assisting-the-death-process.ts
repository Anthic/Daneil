export interface AssistingDeathProcessData {
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
  details: {
    paragraphs: string[];
  };
  contactSection: {
    priceNote: string;
    interestPrompt: string;
    buttonText: string;
    buttonHref: string;
  };
}
