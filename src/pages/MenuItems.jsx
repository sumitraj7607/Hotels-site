import React from "react";
import { FaStar } from "react-icons/fa";
import Footer from "../components/Footer";
import WhatsApppop from "../components/Whatsapppop";

const menuItems = [
  {
    name: "Fast Food",
    price: 119,
    image: "dining-m1.jpg",
  },
  {
    name: "Aalu Fry",
    price: 45,
    image: "dining-m2.jpg",
  },
  {
    name: "Veg Roll",
    price: 50,
    image: "dining-m5.jpg",
  },
  {
    name: "Gobhi sabji",
    price: 40,
    image: "dining-m7.jpg",
  },
  {
    name: "Fast Food",
    price: 80,
    image: "dining-m1.jpg",
  },
  {
    name: "Veg Roll",
    price: 40,
    image: "dining-m5.jpg",
  },
  {
    name: "Calamares",
    price: 190,
    image: "dining-m7.jpg",
  },
  {
    name: "Baby Back Ribs",
    price: 290,
    image: "dining-m2.jpg",
  },
  {
    name: "Dosha",
    price: 140,
    image: "dining-m3.jpg",
  },
  {
    name: "idli",
    price: 250,
    image: "dining-m6.jpg",
  },
];

const Menu = () => {
  return (
    <>
      <div className="bg-[#f8f8f8] min-h-screen py-10 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Menu</h2>
          <p className="text-gray-500">Feel the joy of mouthwatering food</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <div key={index} className="text-center">
              <div className="overflow-hidden rounded-xl shadow-md group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110 rounded-xl"
                />
              </div>
              <p className="mt-3 font-medium">{item.name}</p>
              <div className="flex justify-center items-center text-yellow-500 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>
              <p className="text-gray-700 mt-1 font-semibold">
                {item.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
