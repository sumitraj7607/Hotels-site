import React from "react";


const DineWithUs = () => {
  return (
    <>
      <div className="bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-serif font-semibold text-black mb-4">
              Dine With Us
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Discover fine, casual and creative dining at Amanviro, Dumanjug,
              Cebu.
              <br />
              Sip sunset beers or craft cocktails and indulge with hearty
              international buffets and local specialties.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img
              src="dining-main.jpg"
              alt="Dine With Us"
              className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DineWithUs;
