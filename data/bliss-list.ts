import type { BlissListData } from "@/types/bliss-list";

export const blissListData: BlissListData = {
  banner: {
    title: "My Bliss List",
    imageSrc: "/about/first page/a-banner.png",
    imageAlt: "My Bliss List Banner",
  },
  heroImage: {
    src: "/laf.jpg",
    alt: "Happy family jumping on the beach celebrating bliss",
  },
  introParagraphs: [
    "I am in a pretty high state of bliss 24/7. Here are the components of that state. This is from my own experience and may vary for you, but it is the template of a starting point that allows you to create your own bliss.",
    "It is broken down in categories.",
  ],
  categories: [
    {
      id: "spiritual-realm",
      headingPrefix: "First in the",
      badge: "Spiritual Realm",
      headingText: " :",
      points: [
        "Being in bliss means that you understand and know who you are.",
        "It is discovering more of yourself and the wonder and beauty of who you are.",
        "It means you know that you are Divine and of the light.",
        "You know that the Divine loves and supports you, and that you have a relationship with your Higher Self and Soul, that they are with you and you feel them. In my case it feels like I have golden hands enter me from my back and cradle my heart continuously.",
      ],
    },
    {
      id: "emotionally",
      badge: "Emotionally",
      headingText:
        " it means being happy (the fulfillment of your needs) and having joy which is the fulfillment of your preferences.",
      points: [
        "It means being self-validating and not giving your personal power away to others.",
        "It is feeling safe and secure, feeling free, empowered and free of shame.",
        "It is having relationships where you can love, touch and heal.",
        "It is having motivation, excitement and passion.",
        "It is being able to create, being creative in some way, giving birth to ideas and concepts.",
        "It is loving someone more than yourself.",
        "It is finding peace and forgiveness with your past and in the present.",
        "It is having a great future to look forward to and having hope.",
        "It is broadcasting the energy of love into your world.",
        "It is seeing the beauty, goodness and truth in your world.",
        "It is having gratitude.",
        "I know that I am loved and that I love good enough.",
      ],
    },
    {
      id: "mentally",
      badge: "Mentally",
      headingText:
        " it is having positive self-talk, and knowing that you don't have any self-sabotage lurking in your conscious, sub-conscious and unconscious minds.",
      points: [
        "It is being present and alert.",
        "It is knowing that you matter, that you make a difference and that you have impact.",
      ],
    },
    {
      id: "physically",
      badge: "Physically",
      headingText:
        " it is taking responsibility for you and learning from your mistakes and successes.",
      points: [
        "It is being healthy and energetic.",
        "It is being comfortable and having pleasures.",
        "It is having sensuality, which is pleasures of your five senses.",
        "It is upholding your highest principles in your interactions with anyone and anything in your world.",
        "It is contributing in some way to the greater good of the whole.",
        "It is the freedom to do anything you desire, unless it interferes with the well-being of someone else.",
        "I am able to see, perceive and appreciate beauty and nature.",
      ],
    },
  ],
};
