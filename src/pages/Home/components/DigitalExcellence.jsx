import React from "react";
import disscusion from "../../../assets/disscusion.webp";

const HeroSection = () => {
  return (
    <div className="relative bg-[#170f24] text-white py-28 px-4 sm:px-6 lg:px-8 overflow-hidden max-w-7xl mx-auto">
      
      {/* Background Image */}
      <img
        src={disscusion}
        alt="Discussion"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />

      {/* Text Overlay */}
      <div className="relative z-50 max-w-2xl mx-auto text-center bg-[#1a0f24]/20 p-8 rounded-xl shadow-2xl border border-white/10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold mb-6 leading-tight">
          Pioneering Digital Excellence: Discover the Digimax Advantage.
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec diam nonper mattis, pulvinar aliquip ex ea.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
