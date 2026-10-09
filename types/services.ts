export interface ServiceCardItem {
  id: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ServicesSectionData {
  title: string;
  services: ServiceCardItem[];
}
