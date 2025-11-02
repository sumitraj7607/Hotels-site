import React from "react";
import HeroSection from "./HeroSection";

const AboutSection = () => {
  return (
    <>
      <section className="py-16 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-sm text-[#d4766c] tracking-widest uppercase mb-3">
              About Us
            </p>
            <h2 className="text-4xl font-serif font-semibold text-gray-900 mb-4">
              IT  BEGINS <br /> HERE
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Rediscover the effortless elegance and beauty along the south
              shores of Cebu. A private beach house nestled on the rocks of
              Dumanjug. Fringed with fun and comfort, Rishikesh can be
              <br />
              <span className=" font-medium">
                your next exclusive getaway.
              </span>
            </p>
          </div>

          {/* Right Images */}
          <div className="md:w-1/2 flex gap-6 justify-center md:justify-end">
            <img
              src="hero1.jpg"
              className="w-64 h-64 object-cover rounded-lg shadow"
            />
            <img
              src="hero2.jpg"
              alt="Resort"
              className="w-64 h-64 object-cover rounded-lg shadow"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
