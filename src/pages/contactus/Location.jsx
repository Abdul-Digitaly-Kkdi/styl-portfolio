import React from "react";

const Location = () => {
  return (
    <div className="w-full mx-auto mb-10">
      <h2 className="text-2xl md:text-3xl text-white uppercase font-bold mb-8 text-center">Our <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">Location</span></h2>
      <div className="w-full h-[30vh] md:h-[50vh]">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15553.848757628295!2d80.19831!3d12.94225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d9ad8140677%3A0x3bebeca26152842b!2sDO%20IT%20IN%20STYL%20DIGITAL%20SOLUTIONS%20LLP!5e0!3m2!1sen!2sus!4v1752309831795!5m2!1sen!2sus"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full border-0"
      ></iframe>
      </div>
    </div>
  );
};

export default Location;
