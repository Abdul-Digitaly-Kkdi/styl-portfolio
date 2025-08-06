import React from "react";

const Team = () => {
  return (
    <section className="relative bg-[#0A0218] overflow-hidden py-24 px-4 sm:px-6 lg:px-8 rounded-b-[60px]">
      {/* Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-purple-600 opacity-30 blur-3xl"></div>
      </div>

      {/* Grid Overlay (Optional - based on image) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-5xl font-semibold text-gray-300 mb-4">Our Team</h2>
        <p className="text-lg sm:text-3xl font-semibold text-gray-400">
        Our dedicated team of creative minds and strategic thinkers
        </p>
      </div>
    </section>
  );
};

export default Team;
