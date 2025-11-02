import React, { useState, useEffect } from "react";
import AccommodationSection from "./AccommodationSection";

const HeroSection = () => {
  const words = ["Serenity", "Peace", "Escape", "Luxury", "Calm"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white "
        style={{ backgroundImage: "url('sunset.jpg')" }}
      >
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-semibold">
            A Place of
          </h1>
          <p className="text-5xl md:text-7xl font-serif font-light mt-2 transition-opacity duration-700 ease-in-out">
            {words[index]}
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
