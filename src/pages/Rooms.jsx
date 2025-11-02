import React from 'react';
import RoomCard from './RoomsCards';


const Rooms = () => {
  return (
    <>
    <div className="w-full px-4 py-10 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-serif font-semibold text-black mb-4">
          Our Rooms
        </h1>

        {/* Breadcrumb */}
        <nav className="text-sm md:text-base text-gray-600 flex justify-center gap-2">
          <span className="text-[#d4766c] font-medium">Home</span>
          <span className="text-gray-400">›</span>
          <span className="text-gray-400">Rooms</span>
        </nav>
      </div>
    </div>
   <RoomCard/>
    </>
  );
};

export default Rooms;
