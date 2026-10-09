export interface SubNavItem {
  id: string;
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
  isCta?: boolean;
  variant?: "pill-pink" | "pill-purple" | "default";
  children?: SubNavItem[];
}

export interface SocialLink {
  id: string;
  platform: "substack" | "facebook" | "youtube";
  url: string;
  ariaLabel: string;
}

export interface CartData {
  itemCount: number;
}
