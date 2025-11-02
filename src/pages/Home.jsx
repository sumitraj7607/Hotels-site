import { useState } from "react";
import AboutSection from "../components/AboutSection";
import AccommodationSection from "../components/AccommodationSection";
import GallerySection from "../components/GalleryImages";
import HeroSection from "../components/HeroSection";
import Loginpopup from "../components/Loginpop";
import OurServices from "../components/ServicesSection";
import SliderHomepage from "../components/SliderHomepage";
import TestimonialSection from "../components/TestimonialSection";

const Home = function () {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  return (
    <>
      <SliderHomepage />
      {isPopupOpen && <Loginpopup setIsPopupOpen={setIsPopupOpen} />}
      <AboutSection />
      <HeroSection />
      <AccommodationSection />
      <OurServices />
      <GallerySection />
      <TestimonialSection />
    </>
  );
};

export default Home;
