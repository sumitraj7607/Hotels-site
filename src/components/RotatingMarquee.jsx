import React from "react";

const MarqueeItem = () => (
  <div className="flex items-center gap-6">
    <span className="text-black  text-base sm:text-xl">2025</span>
    <div className="w-5 h-5 border-2 border-black rounded-full border-dashed animate-spin"></div>
    <span className="text-black  text-base sm:text-xl">
      Tech 
    </span>
    <div className="w-5 h-5 border-2 border-black rounded-full border-dashed animate-spin"></div>
    <span className="text-black  text-base sm:text-xl">
      hub
    </span>
    <div className="w-5 h-5 border-2 border-black rounded-full border-dashed animate-spin"></div>
    <span className="text-black  text-base sm:text-xl">
      Noida
    </span>
    <div className="w-5 h-5 border-2 border-black rounded-full border-dashed animate-spin"></div>
  </div>
);

const RotatingMarquee = () => {
  return (
    <div className="w-full bg-[#F8EAD8] overflow-hidden whitespace-nowrap py-3 mt-30">
      <div className="inline-flex items-center gap-6 animate-marquee">
        <MarqueeItem />
        <MarqueeItem />
      </div>
    </div>
  );
};

export default RotatingMarquee;
