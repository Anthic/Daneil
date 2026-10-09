import type { SessionsPageData } from "@/types/sessions";

export const sessionsPageData: SessionsPageData = {
  banner: {
    title: "Sessions",
    imageSrc: "/about/first page/a-banner.png",
    imageAlt: "Sessions Banner",
  },
  paymentInstructions: {
    heading: "We have added additional payment methods.",
    subheading: "We prefer receiving funds in this order:",
    methods: [
      {
        name: "Zelle",
        detail: "(our account name is daniel@giniol.com)",
      },
      {
        name: "Venmo",
        detail: "(our account name is @Daniel-Metraux-1 The verification digits are 9202",
        note: "(if you are using Zelle or Venmo, please mention the item number you purchased in the comment section.)",
      },
      {
        name: "PayPal",
        detail: "(follow the link at check out)",
      },
      {
        name: "Credit card",
        detail: "(Use PayPal. You do not need to have a PayPal account to pay with credit card.)",
      },
    ],
  },
  groups: [
    {
      id: "healing-modalities",
      heading:
        "Life Essence Reading (LER), Medical Intuition, Psychic Surgery, Cellular Memory Release, Quantum Touch, Hypnosis, Animal Healing, Clearing Your Living Space",
      showPaymentNoticeAfter: true,
      items: [
        {
          id: "item-51",
          itemNumber: "Item #51",
          title: "Full hour – US$257",
          price: "$257.00",
          priceValue: 257.0,
        },
        {
          id: "item-52",
          itemNumber: "Item #52",
          title: "Extended session: 2 Hours – (22% discount) – US$397 –",
          price: "$397.00",
          priceValue: 397.0,
        },
        {
          id: "item-53",
          itemNumber: "Item #53",
          title: "5 Hour session package – (22% discount) –",
          price: "$997.00",
          priceValue: 997.0,
        },
      ],
    },
    {
      id: "align-the-body",
      heading: "AlignTheBody Session",
      description:
        "If this is your first time for the AlignTheBody With me, for better results I suggest that you get the package.",
      showPaymentNoticeAfter: true,
      items: [
        {
          id: "item-54",
          itemNumber: "Item#54",
          title: "Half and quarter hour package (on separate days) – US$147",
          price: "$147.00",
          priceValue: 147.0,
        },
        {
          id: "item-55",
          itemNumber: "Item #55",
          title: "Half Hour – US$117",
          price: "$117.00",
          priceValue: 117.0,
        },
        {
          id: "item-56",
          itemNumber: "Item #56",
          title: "Quarter Hour – US$67",
          price: "$67.00",
          priceValue: 67.0,
        },
        {
          id: "item-57",
          itemNumber: "Item #57",
          title: "5 Quarter Hour session for the price of 4 – US$267",
          price: "$267.00",
          priceValue: 267.0,
        },
      ],
    },
  ],
  deathProcessNote: {
    heading: "Assisting the Death Process",
    priceNote:
      "Due to the trickiness and complex involvement, prices vary from case to case.",
    prompt: "If you are interested in this service, please",
    buttonText: "Contact Us",
    buttonHref: "/contact",
  },
};
