import React from "react";
import { FaRegClock } from "react-icons/fa";
import Footer from "../components/Footer";
import WhatsApppop from "../components/Whatsapppop";

const cardData = [
  {
    title: "FAMILY FUN PACKAGE",
    description: "Go on the best family holiday ever!",
    price: "From PHP 8,500.00 Average Per Night",
    img: "",
  },
  {
    title: "LONG STAY OFFERS",
    description: "Up to 20% off our flexible rates!",
    price: "From PHP 5,500.00 Average Per Night",
    img: "",
  },
  {
    title: "SPECIAL HOLIDAY RATES",
    description: "Holy Week/All Saints Day/Christmas/New Year",
    price: "From PHP 7,600.00 Average Per Night",
    img: "#",
  },
  {
    title: "ROMANTIC GETAWAY",
    description: "Escape to paradise with your loved one.",
    price: "From PHP 9,200.00 Average Per Night",
    img: "#",
  },
  {
    title: "ADVENTURE PACKAGE",
    description: "Explore nature like never before.",
    price: "From PHP 6,800.00 Average Per Night",
    img: "#",
  },
  {
    title: "WEEKEND RETREAT",
    description: "Perfect weekend breaks to recharge.",
    price: "From PHP 5,999.00 Average Per Night",
    img: "#",
  },
];

const Offerscards = () => {
  return (
    <>
      <div className="bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="border rounded-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-5 space-y-3">
                <span className="inline-block bg-rose-300 text-white font-semibold px-3 py-1 text-sm rounded">
                  {card.title}
                </span>
                <p className="text-lg font-medium text-black">
                  {card.description}
                </p>
                <div className="flex items-center text-sm text-gray-700 gap-2">
                  <FaRegClock className="text-sm" />
                  <span className="tracking-wide">{card.price}</span>
                </div>
                <button className="text-sm font-semibold text-black hover:underline mt-3 relative group">
                  MORE DETAILS
                  <span className="block h-[2px] w-24 bg-rose-300 mt-1 group-hover:w-full transition-all duration-300"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Offerscards;
