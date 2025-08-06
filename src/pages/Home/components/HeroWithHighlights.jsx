import React from "react";
import { PhoneCall } from "lucide-react";
import imac_img from "../../../assets/imac_img.webp";
import rocket from "../../../assets/rocket.webp";
import mobile_app from "../../../assets/mobile_app.webp";

const HeroWithCards = () => {
  return (
    <section className="bg-[#170f24] text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* TOP HEADING */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-3xl uppercase font-extrabold leading-tight mb-4">
            Navigating Digital Horizons with STYL —{" "}
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">Your Trusted Creative Partner</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto">
            We craft bold digital experiences that elevate your brand. With
            innovation at our core, STYL leads you through the ever-evolving
            digital landscape—smart, sleek, and strategically sound.
          </p>
        </div>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="bg-[#1f1530] rounded-xl p-6 relative shadow-md overflow-hidden">
            <div className="relative z-10 w-[50%] lg:w-[55%]">
              <h3 className="text-white font-semibold text-lg mb-2">
                Timely and Transparent Communication
              </h3>
              <p className="text-gray-400 text-sm">
                We believe in clear, consistent communication—keeping you
                informed at every step to ensure smooth collaboration and
                results you can trust.
              </p>
            </div>
            <img
              src={imac_img}
              alt="iMac"
              className="absolute top-0 -right-25 w-full opacity-90 z-0 overflow-hidden"
            />
          </div>

          {/* CARD 2 */}
          <div className="bg-[#1f1530] rounded-xl p-6 relative shadow-md overflow-hidden">
            <div className="relative z-10 w-[50%] lg:w-[55%]">
              <h3 className="text-white font-semibold text-lg mb-2">
                Boost Traffic & Sales
              </h3>
              <p className="text-gray-400 text-sm">
                Platea rhoncus, semper consectetur iellus facilisi nec curabitur
                placerat montes lacinia tincidunt
              </p>
            </div>
            <img
              src={rocket}
              alt="Rocket"
              className="absolute top-0 right-0 w-full opacity-90 z-0"
            />
          </div>

          {/* SUPPORT CARD - span 2 rows */}
          <div className="bg-[#1f1530] rounded-xl p-6 flex flex-col text-center justify-center shadow-md lg:row-span-2">
            <div className="mb-4 flex justify-center">
              <PhoneCall className="w-8 h-8 text-purple-300" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Premium Support</h3>
            <p className="text-blue-400 text-xl font-bold mb-2">
              +91 9150099334
            </p>
            <p className="text-gray-400 text-sm mb-4">
              Get priority assistance with fast response times, expert guidance,
              and personalized help for all your Styl-related needs.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold">
              CALL NOW !
            </button>
          </div>

          {/* CARD 4 */}
          <div className="bg-[#1f1530] rounded-xl p-6 flex flex-col justify-between shadow-md">
            <div>
              <h3 className="text-3xl font-bold text-white mb-1">4.9+</h3>
              <p className="text-white font-medium text-sm mb-2">
                Client Ratings
              </p>
              <div className="mt-4 text-yellow-400 text-xl">★★★★★</div>
              <p className="text-gray-400 text-sm">
                Our clients rate us 4.9 stars for our commitment to quality,
                creativity and support. We take pride in delivering results that
                help businesses grow.
              </p>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="bg-gradient-to-br from-red-600 to-red-500 rounded-xl p-6 flex flex-col justify-between shadow-md text-white relative">
            {/* Image now directly inside the card, not inside an extra absolute div */}
            <img
              src={mobile_app}
              alt="Mobile"
              className="absolute top-4 right-4 w-36 lg:w-44 h-auto opacity-90 z-0"
            />

            {/* Content stays above image */}
            <div className="relative z-10 w-[50%]">
              <h3 className="font-semibold text-lg mb-2">
                Responsive and Scalable Solutions
              </h3>
              <p className="text-sm">
                Donec massa lacus tortor dis vulputate neque odio venenatis ex
                ad interdum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithCards;
