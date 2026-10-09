export interface InterviewLinkItem {
  label?: string;
  url: string;
}

export interface InterviewItem {
  id: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  links: InterviewLinkItem[];
}

export interface DanielInterviewsData {
  banner: {
    title: string;
    imageSrc: string;
    imageAlt: string;
  };
  interviews: InterviewItem[];
}
