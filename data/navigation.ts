import type { NavItem } from "@/types/navigation";

export const navigationItems: NavItem[] = [
  {
    id: "home",
    label: "HOME",
    href: "/",
    isActive: true,
    variant: "pill-pink",
  },
  {
    id: "about",
    label: "ABOUT",
    href: "/about",
    variant: "default",
    children: [
      {
        id: "daniel-the-healer",
        label: "Daniel the Healer",
        href: "/daniel",
      },
      {
        id: "daniels-story",
        label: "DANIEL’S STORY",
        href: "/daniels-story",
      },
      {
        id: "healing-gazing",
        label: "Healing/Gazing",
        href: "/healing-gazing",
      },
      {
        id: "daniel-interviews",
        label: "DANIEL INTERVIEWS",
        href: "/daniel-interviews",
      },
      {
        id: "testimonials",
        label: "Testimonials",
        href: "/testimonials",
      },
    ],
  },
  {
    id: "services",
    label: "SERVICES",
    href: "/services",
    variant: "default",
    children: [
      {
        id: "life-essence-reading",
        label: "Life Essence Reading",
        href: "/life-essence-reading",
      },
      {
        id: "quantum-touch",
        label: "Quantum Touch",
        href: "/quantum-touch",
      },
      {
        id: "medical-intuition",
        label: "Medical Intuition",
        href: "/medical-intuition",
      },
      {
        id: "align-the-body",
        label: "Align The Body",
        href: "/align-the-body",
      },
      {
        id: "psychic-surgery",
        label: "Psychic Surgery",
        href: "/psychic-surgery",
      },
      {
        id: "cellular-memory-release",
        label: "Cellular Memory Release",
        href: "/cellular-memory-release",
      },
      {
        id: "assisting-the-death-process",
        label: "Assisting the Death Process",
        href: "/assisting-the-death-process",
      },
      {
        id: "clearing-your-living-space",
        label: "Clearing Your Living Space and House Blessing",
        href: "/clearing-your-living-space",
      },
      {
        id: "animal-healing",
        label: "Animal Healing",
        href: "/animal-healing",
      },
    ],
  },
  {
    id: "shop",
    label: "SHOP",
    href: "/shop",
    variant: "default",
    children: [
      {
        id: "sessions",
        label: "Sessions",
        href: "/sessions",
      },
      {
        id: "videos",
        label: "Videos",
        href: "/videos",
      },
    ],
  },
  {
    id: "my-bliss-list",
    label: "MY BLISS LIST",
    href: "/my-bliss-list",
    variant: "default",
  },
  {
    id: "blog",
    label: "BLOG",
    href: "/blog",
    variant: "default",
  },
  {
    id: "contact",
    label: "CONTACT",
    href: "/contact",
    isCta: true,
    variant: "pill-purple",
  },
];
