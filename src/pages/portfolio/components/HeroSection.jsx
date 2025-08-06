import React, { useState, useEffect } from "react";
// import video1 from "../../../assets/video1.gif";
// import logo from "../../../assets/Styl-Logo.png"; // Your logo

const HeroSection = () => {
  const actionWords = ["Accelerate", "Transform", "Elevate", "Amplify", "Redefine"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % actionWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] sm:h-screen w-full overflow-hidden flex items-center justify-center text-white bg-black">

      {/* 🎥 Background Video */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover opacity-50"
          src={video1}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black/10" />
      </div> */}

      {/* 🌟 Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#DD1111] via-white to-gray-300 text-transparent bg-clip-text"
          data-aos="fade-up"
        >
          STYL AI
        </h1>
        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold mt-4 mb-4 bg-gradient-to-r from-white via-white to-[#DD1111] text-transparent bg-clip-text"
          data-aos="fade-up"
        >
          Solutions
        </h1>

        <p
          className="text-lg sm:text-2xl text-white/80 mb-6 mt-4 md:mt-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Strategic Digital Marketing & Creative Excellence
        </p>

        {/* Scroll indicator */}
        <div className="mt-12" data-aos="fade-in" data-aos-delay="600">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto relative">
            <div className="w-1 h-2 bg-white rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce" />
          </div>
          <p className="text-sm text-white/50 mt-2 tracking-widest">
            SCROLL TO EXPLORE
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
