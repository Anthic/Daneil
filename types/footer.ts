export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterData {
  aboutTitle: string;
  aboutText: string;
  scheduleText: string;
  locationText: string;
  email: string;
  contactButtonText: string;
  contactButtonHref: string;
  subFooterLinks: FooterLink[];
  copyrightText: string;
}
