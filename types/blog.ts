export interface BlogSection {
  heading?: string;
  text?: string;
  paragraphs?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  excerpt: string;
  content: string[];
  middleImageSrc?: string;
  middleImageAlt?: string;
  afterContent?: string[];
  sections?: BlogSection[];
  signoff?: string;
  signature?: string;
  footnote?: string;
  link?: {
    text: string;
    url: string;
  };
  youtubeId?: string;
  vimeoId?: string;
  audioUrl?: string;
  author?: string;
}

export interface BlogPageData {
  banner: {
    title: string;
    imageSrc: string;
    imageAlt: string;
  };
  posts: BlogPost[];
}
