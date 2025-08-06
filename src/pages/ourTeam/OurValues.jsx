import React from "react";
import valueImage from "../../assets/values.webp"; // Replace with your actual image path

const OurValues = () => {
  const values = [
    {
      title: "Client Success First",
      description: "We succeed only when our clients win — with real results, not vanity metrics.",
    },
    {
      title: "AI with Purpose",
      description: "We use AI not as a buzzword, but as a tool to enhance performance, personalize campaigns, and scale smartly.",
    },
    {
      title: "Partnership Over Projects",
      description: "We act as external business teams — not as external vendors. Our clients' growth is our responsibility.",
    },
    {
      title: "Business-First Thinking",
      description: "Every campaign starts with a business objective, not a digital trend.",
    },
    {
      title: "Creative That Converts",
      description: "Our creative work is not just aesthetic — it's strategic, built to position, attract, and connect.",
    },
    {
      title: "Integrity in Action",
      description: "Clear communication. Honest feedback. Consistent delivery.",
    },
    {
      title: "Adapt, Automate, Accelerate",
      description: "We evolve with markets, automate where needed, and always aim to accelerate client growth using cutting-edge AI tools and insights.",
    },
  ];

  return (
    <section className="bg-[#170f24] text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT: Text Content */}
        <div className="w-full lg:w-6/12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center lg:text-left">OUR <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">VALUES</span></h2>
          <div className="space-y-2">
            {values.map((val, index) => (
              <div key={index} className="bg-[#1e1530] p-2 rounded-xl border-l-4 border-red-600 hover:border-red-400 transition">
                <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
                <p className="text-gray-300 text-sm">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Full Image */}
        <div className="w-full lg:w-6/12">
          <img
            src={valueImage}
            alt="Our Values"
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default OurValues;
