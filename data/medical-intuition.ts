import type { MedicalIntuitionData } from "@/types/medical-intuition";

export const medicalIntuitionData: MedicalIntuitionData = {
  banner: {
    title: "Medical Intuition",
    imageSrc: "/about/first page/a-banner.png",
    imageAlt: "Medical Intuition Banner",
  },
  overview: {
    title: "Medical Intuition",
    imageSrc: "/home/services/Cosmic Medical Intuition.png",
    imageAlt: "Cosmic Medical Intuition Artwork",
    paragraphs: [
      "Medical Intuition is the use of extra sensory perception to scan your body's organs and systems for how well they function. This is best in situations where no one can figure out what is really wrong with you such as when you go from one specialist to another and also have many tests done, and no one can figure out a diagnosis for you.",
    ],
  },
  video: {
    imageSrc: "/home/daniel.avif",
    imageAlt: "Reverend Daniel Metraux - Medical Intuition Video",
    duration: "01:17",
  },
  cta: {
    buttonText: "Access Healing and See Rates",
    buttonHref: "/shop/sessions",
  },
};
