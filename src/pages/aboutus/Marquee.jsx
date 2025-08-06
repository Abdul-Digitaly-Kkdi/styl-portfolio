import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Marquee from 'react-fast-marquee';

import Crown from "../../assets/logos/Crown_Logo.png";
import cymno from "../../assets/logos/cymno.jpg";
import DECADENCE from "../../assets/logos/DECADENCE_LOGO.png";
import feasta from "../../assets/logos/feasta.png";
import finny from "../../assets/logos/finny.png";
import johns from "../../assets/logos/johns.jpg";
import JOHNSACADEMY from "../../assets/logos/JOHNSACADEMY.png";
import LMN from "../../assets/logos/LMN.jpg";
import mugesh from "../../assets/logos/mugesh.jpg";
import Offisolv from "../../assets/logos/Offisolv.png";
import Sakthi from "../../assets/logos/Sakthi.png";
import smart from "../../assets/logos/smart.png";
import SRSH from "../../assets/logos/SRSH.jpg";
import SYC from "../../assets/logos/SYC.png";
import TC from "../../assets/logos/TC.png";
import three from "../../assets/logos/three.jpg";
import Thyromax from "../../assets/logos/Thyromax.png";
import Untitled from "../../assets/logos/Untitled.png";

const images = [
  Crown, cymno, DECADENCE, feasta, finny,
  johns, JOHNSACADEMY, LMN, mugesh, Offisolv,
  Sakthi, smart, SRSH, SYC, TC,
  three, Thyromax, Untitled,
];

const MarqueeAds = () => {
  return (
    
      <>
          <h1 className='text-center text-3xl md:text-4xl font-semibold text-red-700 py-5 md:hidden '>Our Insurance</h1>
          <div className="w-full bg-[#170f24] py-4 relative mb-5">

              <div className='hidden md:flex absolute top-0 left-0 z-10  items-center font-semibold px-2 text-3xl bg-rose-400  h-28 text-white'>
                  Our Clients
              </div>

              <Marquee pauseOnHover={true} speed={40}>
                  {images.map((img, index) => (
                      <div
                          key={index}
                          className="mx-7 flex items-center justify-center overflow-hidden"
                      >
                          <img
                              src={img}
                              alt={`insurance-${index + 1}`}
                              className="h-20 w-auto object-contain  hover:scale-105 transition-transform duration-300"
                          />
                      </div>
                  ))}
              </Marquee>
          </div>
      </>
  );
};

export default MarqueeAds;
