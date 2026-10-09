import { navigationItems } from "@/data/navigation";
import { socialLinks } from "@/data/socials";
import type { NavItem, SocialLink } from "@/types/navigation";

export async function getNavigationItems(): Promise<NavItem[]> {
  // TODO(API): replace with real fetch when backend is ready
  return navigationItems;
}

export async function getSocialLinks(): Promise<SocialLink[]> {
  // TODO(API): replace with real fetch when backend is ready
  return socialLinks;
}
