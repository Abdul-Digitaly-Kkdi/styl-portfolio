import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import fennyImg from "../../assets/Fenny.webp";
import ramyaImg from "../../assets/ramya.webp";
import samImg from "../../assets/samhitha.webp";
import snegaImg from "../../assets/snega.webp";
import saiImg from "../../assets/sai.webp";
import debinImg from "../../assets/debin.webp";
import rajagopalImg from "../../assets/rajagopal.webp";
import anbuImg from "../../assets/anbu.webp";

const teamMembers = [
  {
    name: "Finney",
    role: "Founder CEO",
    image: fennyImg,
    socials: {
      facebook: "https://facebook.com/in/finney",
      linkedin: "https://linkedin.com/in/finney",
      instagram: "https://instagram.com/finney",
    },
  },
  {
    name: "Ramya",
    role: "Operations Head",
    image: ramyaImg,
    socials: {
      linkedin: "https://linkedin.com/in/ramya",
      instagram: "https://instagram.com/finney",
    },
  },
  {
    name: "Samhitha",
    role: "Strategy Lead",
    image: samImg,
    socials: {
      instagram: "https://instagram.com/samhitha",
      linkedin: "https://linkedin.com/in/ramya",
    },
  },
  {
    name: "Snega",
    role: "Creative Lead",
    image: snegaImg,
    socials: {
      linkedin: "https://linkedin.com/in/ramya",
    },
  },
  {
    name: "Sai Shriram",
    role: "Social Media Manager",
    image: saiImg,
    socials: {
      instagram: "https://instagram.com/samhitha",
      linkedin: "https://linkedin.com/in/ramya",
    },
  },
  {
    name: "Debin",
    role: "Cinematographer & Editor",
    image: debinImg,
    socials: {
      instagram: "https://instagram.com/samhitha",
      linkedin: "https://linkedin.com/in/ramya",
    },
  },
  {
    name: "Rajagopal",
    role: "BD Executive",
    image: rajagopalImg,
    socials: {
      facebook: "https://facebook.com/in/finney",
      linkedin: "https://linkedin.com/in/finney",
      instagram: "https://instagram.com/finney",
    },
  },
  {
    name: "Anbu Kumar",
    role: "BD Executive",
    image: anbuImg,
    socials: {
      instagram: "https://instagram.com/samhitha",
      linkedin: "https://linkedin.com/in/ramya",
    },
  },
];

const MemberCard = ({ member }) => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div
      onClick={() => setShowIcons(!showIcons)}
      className="group relative bg-white/5 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
    >
      <div className="relative">
        <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
        <div className={`absolute inset-0 bg-black/30 z-10 transition-opacity duration-300 ${showIcons ? "opacity-100" : "opacity-0"} group-hover:opacity-100`}></div>

        <div className={`absolute top-1/2 right-4 -translate-y-1/2 z-20 flex flex-col gap-3 ${showIcons ? "opacity-100" : "opacity-0"} group-hover:opacity-100 transition-opacity duration-300`}>
          {member.socials.facebook && (
            <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-blue-400">
              <FaFacebookF />
            </a>
          )}
          {member.socials.linkedin && (
            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-blue-400">
              <FaLinkedin />
            </a>
          )}
          {member.socials.instagram && (
            <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-pink-400">
              <FaInstagram />
            </a>
          )}
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
        <p className="text-purple-300 mb-5">{member.role}</p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section className="bg-[#170f24] py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-white mb-4">Meet <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">Our Team</span></h2>
        <p className="text-lg text-purple-300 mb-12 italic">
          "Alone we can do so little, together we can do so much."
        </p>

        {/* Swiper for sm and md, Grid for lg+ */}
        <div className="block lg:hidden">
          <Swiper
            // modules={[Pagination]}
            modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
            }}
          >
            {teamMembers.map((member, idx) => (
              <SwiperSlide key={idx}>
                <MemberCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <MemberCard key={idx} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
