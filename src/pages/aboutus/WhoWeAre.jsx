import React from "react";
import whoWeAre from "../../assets/whoWeAre.webp"; // replace with actual path

const WhoWeAre = () => {
  return (
    <section className="bg-[#0A0218] text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Image Box */}
        <div className="w-full lg:w-6/12 border border-pink-800 p-2 rounded-xl">
          <img
            src={whoWeAre}
            alt="Who We Are"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Text Box */}
        <div className="w-full lg:w-6/12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-300 mb-4">
            WHO WE ARE
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            At STYL, we specialize in branding, video production, social media
            management, ads management, and website development to help
            businesses build a strong digital presence. Our creative approach
            ensures that your brand stands out, engages the right audience, and
            drives real growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
