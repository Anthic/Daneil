import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { IntroVideoSection } from "@/components/sections/IntroVideoSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { LifeEssenceSection } from "@/components/sections/LifeEssenceSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { AboutDanielSection } from "@/components/sections/AboutDanielSection";
import { RadioShowSection } from "@/components/sections/RadioShowSection";
import { getHeroSlides } from "@/lib/api/hero";
import { getIntroVideoData } from "@/lib/api/intro-video";
import { getServicesSectionData } from "@/lib/api/services";
import { getLifeEssenceData } from "@/lib/api/life-essence";
import { getTestimonialSectionData } from "@/lib/api/testimonial";
import { getAboutDanielData } from "@/lib/api/about-daniel";
import { getRadioShowData } from "@/lib/api/radio-show";

export default async function Home() {
  const [
    slides,
    introData,
    servicesData,
    lifeEssenceData,
    testimonialData,
    aboutDanielData,
    radioShowData,
  ] = await Promise.all([
    getHeroSlides(),
    getIntroVideoData(),
    getServicesSectionData(),
    getLifeEssenceData(),
    getTestimonialSectionData(),
    getAboutDanielData(),
    getRadioShowData(),
  ]);

  return (
    <div className="relative w-full">
      {/* Hero Carousel Banner Section */}
      <HeroCarousel slides={slides} />

      {/* Reverend Daniel Metraux Intro Video Section */}
      <IntroVideoSection data={introData} />

      {/* My Services 3x3 Grid Section */}
      <ServicesGridSection data={servicesData} />

      {/* Life Essence Reading Featured Section */}
      <LifeEssenceSection data={lifeEssenceData} />

      {/* Client Testimonials Section */}
      <TestimonialSection data={testimonialData} />

      {/* About Daniel the Healer Section */}
      <AboutDanielSection data={aboutDanielData} />

      {/* Radio Show & Video Interviews Section */}
      <RadioShowSection data={radioShowData} />
    </div>
  );
}


