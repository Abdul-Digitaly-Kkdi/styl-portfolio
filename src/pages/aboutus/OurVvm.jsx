import React from "react";
import {
  FaRocket,
  FaRobot,
  FaHandshake,
  FaBullseye,
  FaPaintBrush,
  FaShieldAlt,
  FaBolt,
  FaStar,
  FaBullhorn,
} from "react-icons/fa";

const ValuesSection = () => {
  const values = [
    {
      title: "Client Success First",
      description:
        "We succeed only when our clients win — with real results, not vanity metrics.",
      icon: <FaRocket />,
    },
    {
      title: "AI with Purpose",
      description:
        "We use AI not as a buzzword, but as a tool to enhance performance, personalize campaigns, and scale smartly.",
      icon: <FaRobot />,
    },
    {
      title: "Partnership Over Projects",
      description:
        "We act as extended business teams — not as external vendors. Our client's growth is our responsibility.",
      icon: <FaHandshake />,
    },
    {
      title: "Business-First Thinking",
      description: "Every campaign starts with a business objective, not a digital trend.",
      icon: <FaBullseye />,
    },
    {
      title: "Creative That Converts",
      description:
        "Our creative work is not just aesthetic — it's strategic, built to position, attract, and convert.",
      icon: <FaPaintBrush />,
    },
    {
      title: "Integrity in Action",
      description: "Clear communication. Honest feedback. Consistent delivery.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Adapt, Automatic, Accelerate",
      description:
        "We evolve with markets, automate where needed, and always aim to accelerate client growth using cutting-edge AI tools and insights.",
      icon: <FaBolt />,
    },
  ];

  return (
    <section className="relative bg-[#170f24] py-16 px-6 sm:px-12 flex justify-center overflow-hidden">
      <div className="w-10/12 max-w-7xl text-white">
        <div className="flex flex-col lg:flex-row gap-14">
          {/* Left: Our Value */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 tracking-wide relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
              OUR VALUE
              <span className="block h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-600 rounded mt-3 animate-wiggle" />
            </h2>

            <div className="grid grid-cols-1 gap-10 max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-transparent">
              {values.map(({ title, description, icon }, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-tr from-[#342a64]/70 to-[#1c1440]/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-[#7b66ff]/40 cursor-default flex gap-5 transform transition duration-300 hover:scale-[1.05] hover:shadow-[0_15px_40px_rgba(123,102,255,0.7)]"
                >
                  <div className="text-4xl flex items-center justify-center text-purple-400 group-hover:text-indigo-400 transition-colors duration-300">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-[#e5dbff] tracking-wide">
                      {title}
                    </h3>
                    <p className="text-[#c1bde0] leading-relaxed text-base sm:text-lg">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Vision & Mission with reduced height */}
          <div className="lg:w-1/2 flex flex-col gap-10">
            {[
              {
                title: "OUR VISION",
                content:
                  "To be the kingmaker in the digital marketing arena, empowering businesses to reach unparalleled success through our expertise and innovation. Our goal is to help brands stand out, connect with their audience, and thrive in the ever-evolving digital landscape through creativity, strategy, and excellence.",
                icon: <FaStar />,
              },
              {
                title: "OUR MISSION",
                content:
                  "To help our clients become number one in their fields, providing them with the tools, strategies, and support needed to dominate their markets. We strive to turn ideas into impactful digital experiences, ensuring every project we undertake adds value and drives meaningful results.",
                icon: <FaBullhorn />,
              },
            ].map(({ title, content, icon }, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-tr from-[#342a64]/60 to-[#1c1440]/60 backdrop-blur-lg rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#7b66ff]/30 flex flex-col items-start"
                style={{ minHeight: "auto" }}
              >
                <div className="text-5xl mb-4 text-purple-400">{icon}</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-[#e5dbff] tracking-wide">
                  {title}
                </h2>
                <p className="text-[#b9b0d9] text-base sm:text-lg leading-relaxed">
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(1.15); }
        }
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(123,102,255,0.6);
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
};

export default ValuesSection;
