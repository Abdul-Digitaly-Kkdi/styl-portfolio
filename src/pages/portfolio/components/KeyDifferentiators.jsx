import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const differentiators = [
  {
    title: "Proven Results",
    description:
      "Our track record speaks for itself - consistent organic growth rates between 20-42% monthly across diverse industries, with paid campaigns generating thousands of qualified leads.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Comprehensive Service Suite",
    description:
      "From initial strategy development to final execution and ongoing optimization, we provide end-to-end digital marketing solutions under one roof.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Industry Expertise",
    description:
      "Our experience spans healthcare, automotive, food & beverage, business services, and personal development, allowing us to adapt strategies to any industry vertical.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Data-Driven Approach",
    description:
      "Every strategy is backed by thorough analytics, continuous monitoring, and optimization based on real performance data to ensure maximum ROI.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
];

const KeyDifferentiators = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="relative bg-white py-12 sm:py-16 px-2 sm:px-4 lg:px-8 overflow-hidden font-content ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            What Sets <span className="text-red-600">Us</span> Apart
          </h2>

          <p
            className="text-slate-600 text-base leading-relaxed max-w-3xl mx-auto md:text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
          >
            Our clients value the impact of our services on their business growth, highlighting our effectiveness and results-driven approach.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-red-400/60 transform -translate-x-1/2 hidden md:block" />
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {/* Mobile view */}
            <div className="md:hidden relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-red-400 z-0" />
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="relative z-10 mb-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="500"
                >
                  <div className="flex flex-row items-start w-full space-y-4">
                    <div
                      className="flex flex-col gap-5 items-center"
                      style={{ width: "2.5rem", minWidth: "2.5rem" }}
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-red-400 shadow-lg flex items-center justify-center my-2 text-red-400">
                        {item.icon}
                      </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-md p-4 rounded-2xl border border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 text-left ml-5 flex-1">
                      <h3 className="text-base font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-xs">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop view */}
            <div className="hidden md:block">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="600"
                >
                  <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 w-full">
                    {/* Left Card */}
                    <div className={`md:w-1/2 w-full ${index % 2 === 0 ? "flex justify-end" : "hidden md:block"}`}>
                      {index % 2 === 0 && (
                        <div
                          className="h-full flex gap-2 items-center"
                          data-aos="fade-right"
                          data-aos-delay={index * 100 + 200}
                          data-aos-duration="500"
                        >
                          <div className="bg-gray-50 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 md:text-left">
                            <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                            <p className="text-gray-700 md:text-base text-sm">{item.description}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Icon */}
                    <div className="relative flex flex-col items-center md:w-0 w-full z-10">
                      <div className="absolute left-1/2 top-0 md:static md:left-auto md:top-auto -translate-x-1/2 md:translate-x-0 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border-2 border-red-700 shadow-lg text-white">
                        {item.icon}
                      </div>
                      {index !== differentiators.length - 1 && (
                        <span className="w-0.5 h-14 bg-red-700 block mx-auto" />
                      )}
                    </div>

                    {/* Right Card */}
                    <div className={`md:w-1/2 w-full ${index % 2 === 0 ? "hidden md:block" : "flex justify-start"}`}>
                      {index % 2 !== 0 && (
                        <div
                          className="h-full flex items-center"
                          data-aos="fade-left"
                          data-aos-delay={index * 100 + 200}
                          data-aos-duration="500"
                        >
                          <div className="bg-gray-800/20 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 md:text-left">
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-800 md:text-base text-sm">{item.description}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyDifferentiators;
