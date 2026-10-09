export interface SessionItem {
  id: string;
  itemNumber: string;
  title: string;
  price: string;
  priceValue: number;
}

export interface SessionsGroup {
  id: string;
  heading: string;
  description?: string;
  items: SessionItem[];
  showPaymentNoticeAfter?: boolean;
}

export interface PaymentInstructions {
  heading: string;
  subheading: string;
  methods: {
    name: string;
    detail: string;
    note?: string;
  }[];
}

export interface SessionsPageData {
  banner: {
    title: string;
    imageSrc: string;
    imageAlt: string;
  };
  groups: SessionsGroup[];
  paymentInstructions: PaymentInstructions;
  deathProcessNote: {
    heading: string;
    priceNote: string;
    prompt: string;
    buttonText: string;
    buttonHref: string;
  };
}
