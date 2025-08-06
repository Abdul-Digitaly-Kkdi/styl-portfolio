import React from "react";

const logoFeatures = [
  "Custom-designed logos tailored to your brand identity.",
  "Versatile and scalable designs for all platforms.",
  "Modern, timeless, and industry-relevant concepts.",
  "High-resolution formats for digital and print use.",
  "Logo variations for different branding needs.",
  "Concept development and multiple design options.",
];

const brandingFeatures = [
  "Brand strategy development for a strong market presence.",
  "Logo, colour palette, typography, and brand guidelines.",
  "Consistent branding across digital and print media.",
  "Brand voice and messaging strategy.",
  "Packaging and merchandising design.",
  "Rebranding and brand evolution services.",
];

const ServiceBlock = ({ title, description, features, bgClass }) => (
  <div className={`rounded-3xl shadow-xl p-8 md:p-12 ${bgClass} text-white`}>
    <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
    <p className="text-lg text-white/90 mb-8">{description}</p>
    <ul className="space-y-4 list-disc list-inside text-white/90 text-base md:text-lg">
      {features.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const BrandingAndLogoPage = () => {
  return (
    <section className="bg-[#170f24] text-white px-6 sm:px-10 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Logo Creation & Branding
            </span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl mt-4 max-w-2xl mx-auto">
            Build a powerful identity with our tailored design & branding services.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ServiceBlock
            title="Logo Creation"
            description="A logo is the face of your brand, representing your identity and values. At STYL, we design unique, memorable, and professional logos that leave a lasting impression."
            features={logoFeatures}
            bgClass="bg-gradient-to-br from-[#2a1d47] to-[#351c4e]"
          />
          <ServiceBlock
            title="Branding"
            description="Branding goes beyond just a logo—it defines how your audience perceives your business. We craft a cohesive brand identity that builds trust and strengthens recognition."
            features={brandingFeatures}
            bgClass="bg-gradient-to-br from-[#1f1d3e] to-[#33255b]"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandingAndLogoPage;
