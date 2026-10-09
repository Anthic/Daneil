import type { RadioShowSectionData } from "@/types/radio-show";

export const radioShowData: RadioShowSectionData = {
  title: "Radio Show",
  description:
    'Energy Healing Practitioner, Body Whisperer, Psychic Energy “Chiropractor,” and Spiritual Counselor who heals with Love.',
  buttonText: "View More",
  buttonHref: "/daniel-interviews",
  shows: [
    {
      id: "marla-martenson-interview",
      imageSrc: "/home/live-1.jpg",
      imageAlt: "Video Interview with Marla Martenson - Daniel The Healer",
      hoverTitle: "Video Interview with Marla Martenson:",
      hoverLinkText: "Click here",
      hoverLinkUrl: "https://www.youtube.com/watch?v=HOmshjikdKk&t=55s",
    },
    {
      id: "self-discovery-interview",
      imageSrc: "/home/live-2.jpg",
      imageAlt: "Self Discovery Radio / Video - Daniel The Healer",
      hoverTitle: "Self Discovery Radio / Video:",
      hoverLinkText: "Click here",
      hoverLinkUrl: "https://www.youtube.com/watch?v=HOmshjikdKk&t=55s",
    },
    {
      id: "the-moore-show-interview",
      imageSrc: "/home/live-3.jpg",
      imageAlt: "The Moore Show Alternative Late Night Talk - Daniel The Healer",
      hoverTitle: "The Moore Show Interview:",
      hoverLinkText: "Click here",
      hoverLinkUrl: "https://www.youtube.com/watch?v=HOmshjikdKk&t=55s",
    },
  ],
};
