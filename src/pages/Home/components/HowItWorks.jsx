import React from "react";
import { Lightbulb, LayoutTemplate, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Free Consultation",
    description:
      "Tell us about your brand, vision, and goals. Our experts will guide you through the process.",
  },
  {
    icon: LayoutTemplate,
    title: "Choose Your Design",
    description:
      "Select from our professionally crafted branding options or request a custom solution tailored to your business.",
  },
  {
    icon: PenTool,
    title: "Review & Refine",
    description:
      "Provide feedback, and we’ll refine the designs to ensure they align perfectly with your brand identity.",
  },
  {
    icon: Rocket,
    title: "Launch & Grow",
    description:
      "Receive high-quality branding assets and start using them across all platforms to build a strong, recognizable brand.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#170f24] py-20 px-4 sm:px-8 text-white relative overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl uppercase font-bold mb-6 tracking-tight">
          How <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">It Works</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl mx-auto">
          Create a Powerful Brand Identity in Just 4 Simple Steps!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-br from-[#1f1530] via-[#21152a] to-[#1f1530] rounded-2xl p-8 border border-red-800/30 hover:border-red-500 transition-all duration-300 shadow-[0_0_30px_#1e1b2d] hover:shadow-red-200 transform hover:-translate-y-2"
            >
              {/* Glowing number badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-red-300 w-14 h-14 rounded-full flex items-center justify-center text-red-700 text-xl font-bold shadow-lg shadow-red-600/40 border-4 border-[#170f24]">
                  {index + 1}
                </div>
              </div>

              {/* Icon */}
              <div className="mb-6 mt-10 flex justify-center">
                <step.icon className="w-10 h-10 text-red-400 group-hover:text-white transition duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-red-400 group-hover:text-white transition">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

