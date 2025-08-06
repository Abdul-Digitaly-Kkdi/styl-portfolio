import React from "react";
import { motion } from "framer-motion";
import { MdPhone, MdEmail } from "react-icons/md";

const services = [
  "Social Media Management",
  "Performance Marketing",
  "Content Marketing",
  "Website Development",
  "Branding",
  "SEO",
  "Corporate Video",
  "Video Production",
];

const industries = [
  "Healthcare",
  "Automotive",
  "Food & Beverage",
  "Business Services",
  "Personal Development",
  "Technology",
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const ContactSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-zinc-900 to-black text-white py-20 px-6 md:px-10 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-red-500"
      >
        Let’s Connect with <span className="text-white">STYL</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 max-w-3xl mx-auto text-center mb-16"
      >
        Let’s strategize and skyrocket your brand together. Whether you're in healthcare, F&B or tech – we’ve got a strategy just for you.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-5 md:gap-7 lg:gap-10">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
          >
            {i === 0 && (
              <>
                <h3 className="text-red-500 text-lg font-bold mb-4">Contact Us</h3>
                <p className="flex items-center gap-2 mb-2">
                  <MdPhone className="text-red-500" /> +91 95000 99066
                </p>
                <p className="flex items-center gap-2">
                  <MdEmail className="text-red-500" /> sam@doitinstyl.com
                </p>
              </>
            )}
            {i === 1 && (
              <>
                <h3 className="text-red-500 text-lg font-bold mb-4">Our Services</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  {services.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </>
            )}
            {i === 2 && (
              <>
                <h3 className="text-red-500 text-lg font-bold mb-4">Industries We Serve</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  {industries.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
