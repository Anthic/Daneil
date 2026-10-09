export interface VideoProductItem {
  id: string;
  itemNumber: string;
  title: string;
  description: string;
  priceDisplay: string;
  price: string;
  priceValue: number;
  imageSrc: string;
  imageAlt: string;
}

export interface VideosPageData {
  banner: {
    title: string;
    imageSrc: string;
    imageAlt: string;
  };
  paymentInstructions: {
    heading: string;
    subheading: string;
    methods: {
      name: string;
      detail: string;
      note?: string;
    }[];
  };
  videos: VideoProductItem[];
}
