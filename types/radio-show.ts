export interface RadioShowItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  hoverTitle: string;
  hoverLinkText: string;
  hoverLinkUrl: string;
}

export interface RadioShowSectionData {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  shows: RadioShowItem[];
}
