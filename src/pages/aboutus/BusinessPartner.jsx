import React from "react";

const BrandLogosGrid = () => {
  const brands = [
    "SAKTHICARS",
    "DRHARISHORTHO",
    "CROWN DENTAL",
    "SRI RAMAKRISHNA",
    "JOHNS ACADEMY",
    "THYROMAX LABS",
    "THEE BETTER MEE",
    "FINNEY FINDS",
  ];

  const groupedBrandsLg = [
    brands.slice(0, 3), // Row 1
    brands.slice(3, 6), // Row 2
    brands.slice(6, 8), // Row 3
  ];

  return (
    <section className="bg-[#0A0218] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white">
          Trusted by{" "}
          <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">
            300,000+ Clients
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          We're proud to work with some of the most trusted names in the industry.
        </p>
      </div>

      {/* Mobile view: zig-zag, one card per row */}
      <div className="flex flex-col gap-4 sm:flex md:hidden">
        {brands.map((brand, i) => (
          <div
            key={i}
            className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            <div className="bg-[#1c0f30] border border-purple-900 rounded-xl text-center py-5 px-6 w-[80%]
              hover:bg-gradient-to-r hover:from-purple-700 hover:to-orange-500 hover:scale-105
              transition-transform duration-300 ease-in-out"
            >
              <span className="text-white font-medium text-sm tracking-wide">
                {brand}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* md screens only: 2 cards per row */}
      <div className="hidden lg:hidden md:grid md:grid-cols-2 md:gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-[#1c0f30] border border-purple-900 rounded-xl text-center py-6 px-6
              hover:bg-gradient-to-r hover:from-purple-700 hover:to-orange-500 hover:scale-105
              transition-all duration-300 ease-in-out flex items-center justify-center h-20"
          >
            <span className="text-white font-medium text-sm tracking-wide">
              {brand}
            </span>
          </div>
        ))}
      </div>

      {/* lg and above: custom layout 3-3-2 */}
      <div className="hidden lg:block space-y-6">
        {groupedBrandsLg.map((row, i) => (
          <div key={i} className="flex justify-center gap-6">
            {row.map((brand, index) => (
              <div
                key={index}
                className="bg-[#1c0f30] border border-purple-900 rounded-xl text-center py-4 px-6 min-w-[130px]
                hover:bg-gradient-to-r hover:from-purple-700 hover:to-orange-500 hover:scale-105 transition-all duration-300 ease-in-out
                flex items-center justify-center h-20"
              >
                <span className="text-white font-medium text-sm tracking-wide">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandLogosGrid;
