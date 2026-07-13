import HeroSection from "@/components/home/HeroSection";
import NewsTicker from "@/components/home/NewsTicker";
import Capabilities from "@/components/home/Capabilities";
import Services from "@/components/home/Services";
import AboutSection from "@/components/home/AboutSection";
import DepartmentsGrid from "@/components/home/DepartmentsGrid";
import CtaBanner from "@/components/home/CtaBanner";
import GallerySection from "@/components/home/GallerySection";
import ContactForm from "@/components/home/ContactForm";
import WhyChooseDhamma from "@/components/home/WhyChooseDhamma";
import Announcements from "@/components/home/Announcements";
import TpaSection from "@/components/home/TpaSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsTicker />
      <AboutSection />
      <DepartmentsGrid />
      <Capabilities />
      <Services />
      <WhyChooseDhamma />
      <Announcements />
      <TestimonialSection />
      <CtaBanner />
      <TpaSection />
      <GallerySection />
      <ContactForm />
    </>
  );
}
