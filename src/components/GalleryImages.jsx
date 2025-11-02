import React from "react";
import TestimonialSection from "./TestimonialSection";

const galleryImages = [
  {
    src: "src/assets/Image/",
    title: "Night View",
  },
  {
    src: "src/assets/Image/",
    title: "Hotel Room",
  },
  {
    src: "src/assets/Image/",
    title: "Swimming Pool",
  },
  {
    src: "src/assets/Image/",
    title: "River",
  },
  {
    src: "src/assets/Image/",
    title: "Swimming Pool",
  },
  {
    src: "src/assets/Image/",
    title: "Stay Room",
  },
];

const GallerySection = () => {
  return (
    <>
      <section className="py-20 bg-gray-100" id="gallery">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-lg text-[#d4766c] uppercase tracking-widest">
              Gallery
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Our Latest Photos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <h4 className="text-white text-xl font-semibold">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GallerySection;
