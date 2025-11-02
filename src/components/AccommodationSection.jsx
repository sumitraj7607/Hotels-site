import React from "react";
import ServicesSection from "./ServicesSection";

const rooms = [
  {
    name: "Garden Suite",
    price: "₹800",
    img: "room-1.png",
    size: "30 ft",
    capacity: "Max 4 persons",
    bed: "King Beds",
    services: "Wifi, Television, Bathroom,...",
  },
  {
    name: "Premium King Room",
    price: "₹ 1000",
    img: "room-2.jpg",
    size: "35 ft",
    capacity: "Max 5 persons",
    bed: "King + Sofa",
    services: "Wifi, TV, Kitchen,...",
  },
  {
    name: "Standard Room",
    price: "₹1,120",
    img: "room-3.png",
    size: "25 ft",
    capacity: "Max 2 persons",
    bed: "Queen Bed",
    services: "Wifi, Television,...",
  },
  {
    name: "Family Room",
    price: "₹1,550",
    img: "room-b4.png",
    size: "40 ft",
    capacity: "Max 6 persons",
    bed: "Double Beds",
    services: "Wifi, TV, Bathroom,...",
  },
];

const AccommodationSection = () => {
  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h3 className="text-sm text-[#d4766c] uppercase tracking-wider">
            Our Accommodation
          </h3>
          <h2 className="text-4xl font-bold text-gray-800">
            Your Home Away From Home
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="relative h-96 rounded-md overflow-hidden group shadow-lg"
            >
              <img
                src={room.img}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Default View */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-xl font-semibold">{room.name}</h3>
                <p className="text-2xl font-bold text-[#f1dec9]">
                  {room.price}
                  <span className="text-sm text-white font-normal">
                    {" "}
                    /Per night
                  </span>
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
                  <p className="text-xl text-[#f1dec9] font-bold mb-4">
                    {room.price}
                    <span className="text-sm text-white font-normal">
                      {" "}
                      /Per night
                    </span>
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>
                      <span className="font-semibold">Size:</span> {room.size}
                    </li>
                    <li>
                      <span className="font-semibold">Capacity:</span>{" "}
                      {room.capacity}
                    </li>
                    <li>
                      <span className="font-semibold">Bed:</span> {room.bed}
                    </li>
                    <li>
                      <span className="font-semibold">Services:</span>{" "}
                      {room.services}
                    </li>
                  </ul>
                </div>
                <div>
                  <button className="mt-4 text-white underline font-semibold hover:text-[#f1dec9] transition">
                    MORE DETAILS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AccommodationSection;
