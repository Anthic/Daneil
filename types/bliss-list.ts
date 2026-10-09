export interface BlissCategory {
  id: string;
  badge: string;
  headingPrefix?: string;
  headingText: string;
  points: string[];
}

export interface BlissListData {
  banner: {
    title: string;
    imageSrc: string;
    imageAlt: string;
  };
  heroImage: {
    src: string;
    alt: string;
  };
  introParagraphs: string[];
  categories: BlissCategory[];
}
