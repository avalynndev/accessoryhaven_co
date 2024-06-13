import { FAQSection } from "@/components/sections/faq";
import {ProductSection} from "@/components/sections/products";
import { TestimonialSection } from "@/components/sections/testimonial";
import { HeroSection } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductSection/>
      <TestimonialSection />
      <FAQSection />
    </>
  );
}
