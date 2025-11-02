import React from "react";
import DineWithUs from "./DineWithUs";
import FoodGallery from "./FoodItems";
import Menu from "./MenuItems";

const Dining = () => {
  return (
    <>
      <div className="w-full px-4 py-10 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-serif font-semibold text-black mb-4">
            Dining
          </h1>

          {/* Breadcrumb */}
          <nav className="text-sm md:text-base text-gray-600 flex justify-center gap-2">
            <span className="text-[#d4766c] font-medium">Home</span>
            <span className="text-gray-400">›</span>
            <span className="text-gray-400">Dining</span>
          </nav>
        </div>
      </div>
      <DineWithUs />
      <FoodGallery />
      <Menu />
    </>
  );
};

export default Dining;
