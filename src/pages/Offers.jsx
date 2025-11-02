import React from 'react';
import Offerscards from './Offerscards';

const Offers = () => {
  return (
    <>
    <div className="w-full px-4 py-10 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
       
        <h1 className="text-3xl md:text-5xl font-serif font-semibold text-black mb-4">
          Packages and Specials
        </h1>

        
        <nav className="text-sm md:text-base text-gray-600 flex justify-center gap-2">
          <span className="text-[#d4766c] font-medium">Home</span>
          <span className="text-gray-400">›</span>
          <span className="text-gray-400">Offers</span>
        </nav>
      </div>
    </div>
    <Offerscards/>
    </>
  );
};

export default Offers;
