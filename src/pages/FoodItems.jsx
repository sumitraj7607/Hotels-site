import React from "react";
import Menu from "./MenuItems";

const foodItems = [
  {
    name: "fruit",
    image: "dining-1.jpg",
  },
  {
    name: "chole+bhature",
    image: "dining-p2.jpg",
  },
  {
    name: "Fry Paneer",
    image: "dining-m8.jpg",
  },
  {
    name: "Daal",
    image: "dining-m10.jpg",
  },
];

const FoodGallery = () => {
  return (
    <>
      <div className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto grid gap-4 md:grid-cols-3 grid-cols-1">
          {/* Left Column (2 rows) */}
          <div className="md:col-span-2 grid gap-4 grid-cols-2">
            {foodItems.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="text-white text-lg font-semibold">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="row-span-2">
            <div className="relative group rounded-lg overflow-hidden shadow-md">
              <img
                src={foodItems[1].image}
                alt={foodItems[1].name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg font-semibold">
                  {foodItems[2].name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodGallery;
