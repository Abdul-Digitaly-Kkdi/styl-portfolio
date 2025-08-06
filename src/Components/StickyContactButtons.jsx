import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const StickyContactButtons = () => {
  return (
    <div className="fixed right-0 top-3/4 transform -translate-y-1/2 z-50 flex flex-col gap-3 pr-1">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919150099334" // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-l-full shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-105"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={25} />
      </a>

      {/* Phone Button */}
      <a
        href="tel:+919500099066" // replace with your phone number
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-l-full shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-105"
        title="Call Now"
      >
        <FaPhoneAlt size={20} />
      </a>
    </div>
  );
};

export default StickyContactButtons;
