import React from "react";
import excellenceImg from "../../assets/digital_excellence.webp"; // replace with your actual image

const DigitalExcellence = () => {
  const features = [
    "Expertise in Digital Solutions",
    "Innovative Design Approach",
    "Strategic Digital Marketing",
    "Data-Driven Decisions",
    "Holistic Security Measures",
    "Tailored Digital Strategy",
    "Responsive & Scalable",
    "Proven Track Record"
  ];

  return (
    <div className="bg-[#170f24] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-2xl  md:text-3xl uppercase font-bold text-center mb-6">
          Pioneering Digital Excellence: <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">Discover the Digimax Advantage</span>
        </h1>

        {/* Description Paragraph */}
        <p className="text-lg sm:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-12">
          Pode inceptos du diam felis vehicula rutrum ridiculus at consectetur nam et mollis vitae netus dus pellentesque ligula ennem taciti eget timidunt commodo tristique elit.
        </p>

        {/* Flex Layout for Image + Features */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Features Grid - w-6/12 */}
          <div className="w-full lg:w-6/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
  <div
    key={index}
    className="flex items-center gap-4 bg-[#1e1530] hover:bg-[#2a1d47] transition-all duration-300 p-5 rounded-xl shadow-md"
  >
    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-red-200 text-red-700">
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
    <p className="text-white font-medium text-base sm:text-lg">{feature}</p>
  </div>
))}

          </div>

          {/* Image - w-6/12 */}
          <div className="w-full lg:w-6/12">
            <img
              src={excellenceImg}
              alt="Digital Excellence"
              className="rounded-xl w-full h-auto shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalExcellence;
