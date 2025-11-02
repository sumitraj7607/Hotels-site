// src/components/OurServices.jsx
import React from "react";
import {
  BedDouble,
  Martini,
  Utensils,
  Shirt,
  AlarmClock,
  MonitorPlay,
} from "lucide-react";
import GallerySection from "./GalleryImages";

const services = [
  {
    title: "Quality Rooms",
    description:
      "Enjoy our comfortable and luxurious rooms, fully equipped with all amenities you need for a relaxing stay.",
    icon: <BedDouble className="w-10 h-10 text-[#ab7983]" />,
  },
  {
    title: "Bar & Drinks",
    description:
      "Our bar offers a wide selection of drinks and cocktails, perfect for unwinding after a long day or socializing with friends.",
    icon: <Martini className="w-10 h-10 text-[#ab7983]" />,
  },
  {
    title: "Catering Service",
    description:
      "Our catering service provides delicious and satisfying meals for all occasions, whether it's a birthday or a reception.",
    icon: <Utensils className="w-10 h-10 text-[#ab7983]" />,
  },
  {
    title: "Laundry",
    description:
      "We offer laundry services to ensure you have fresh and clean clothes throughout your stay.",
    icon: <Shirt className="w-10 h-10 text-[#ab7983]" />,
  },
  {
    title: "24 Hour Room Service",
    description:
      "Our room service is available 24/7, providing you with everything you need, from late-night snacks to extra pillows.",
    icon: <AlarmClock className="w-10 h-10 text-[#ab7983]" />,
  },
  {
    title: "In-room Entertainment Options",
    description:
      "Enjoy cable TV and streaming services in your room for your entertainment needs.",
    icon: <MonitorPlay className="w-10 h-10 text-[#ab7983]" />,
  },
];

const OurServices = () => {
  return (
    <>
      <section className="py-16 bg-white text-center px-4">
        <h4 className="text-sm text-[#d4766c] tracking-wide font-semibold uppercase">
          Our Services
        </h4>
        <h2 className="text-4xl font-semibold mt-2 mb-10 text-gray-900">
          Discover What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto ">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 "
            >
              {service.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurServices;

//npm install lucide-react
