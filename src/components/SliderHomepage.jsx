import { useEffect, useState } from "react";
import CloudSlider from "./CloudSlider";
import AboutSection from "./AboutSection";

const sliderImages = [
  "hero1.jpg",
  "hero2.jpg",
  "hero3.jpg",
  "hero4.jpg",
];

export default function SliderHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative h-[90vh] overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0 w-full h-full transition-all duration-1000">
          {sliderImages.map((img, index) => (
            <div
              key={index}
              className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 bg-opacity-40" />
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex items-center px-4 md:px-16 lg:px-28">
          <div className="max-w-xl text-white">
            <h1 className=" md:text-6xl font-serif leading-tight text-[#f9dfb3]">
              Experience enchanting beauty of Rishikesh
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#f9dfb3]">
              Our Resort offers a perfect blend of luxury and tranquility,
              surrounded by the breathtaking beauty of nature.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block bg-[#9F8772] hover:bg-[#A7727D] border border-[#f9f5e7] text-white font-medium px-6 py-3 rounded transition"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-white opacity-100"
                  : "w-2 bg-white opacity-50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
