import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TiArrowRightOutline } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { FaLinkedin, FaInstagram, FaGlobe, FaGoogle, FaFacebook, FaYoutube } from 'react-icons/fa';

import Sample1 from "../../../assets/Sample/Sample1.jpeg";
import Sample2 from "../../../assets/Sample/Sample2.jpeg";
import Sample3 from "../../../assets/Sample/Sample3.png";
import Sample4 from "../../../assets/Sample/Sample4.jpeg";
import Sample5 from "../../../assets/Sample/Sample5.jpg";

const portfolios = [
  {
    title: "Creative Samples: Videos & Posters",
    description:
      "Our creative work spans across multiple industries, showcasing our versatility and expertise in visual storytelling.",
    link: "https://drive.google.com/drive/folders/1y1ZC-RSVPO_ksRdXY2OeX-S6gm4qUevp",
    linkLabel: "View Creative Portfolio",
  },
  {
    title: "Advertisement Campaigns: Paid Advertising Creative",
    description:
      "Explore our comprehensive portfolio of paid advertising campaigns, crafted to maximize impact and engagement.",
    link: "https://drive.google.com/drive/folders/1TQIXwn1IGANsgcNmMGk_1nokRm8k1diK",
    linkLabel: "View Advertisement Portfolio",
  },
];

const cases = [Sample1, Sample2, Sample3, Sample4, Sample5];

const CreativePortfolio = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 600, easing: "ease-out" });
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white">
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        data-aos="fade-up"
      >
        Our <span className="text-red-500">Creative Work</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
        {portfolios.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 border border-gray-800 rounded-2xl hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <h3 className="text-xl font-semibold text-red-500 mb-3">{item.title}</h3>
            <p className="text-black text-sm mb-6 leading-relaxed">
              {item.description}
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full transition-colors duration-300"
            >
              {item.linkLabel} <TiArrowRightOutline size={18} />
            </a>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-10">
        <h1 className="text-xl md:text-3xl text-center my-10 font-semibold">
          Sample Works
        </h1>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full pb-12"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {cases.map((c, idx) => (
            <SwiperSlide key={idx}>
              <div className="max-w-[400px] max-h-[400px] mx-auto">
                <img
                  src={c}
                  alt={`Sample ${idx + 1}`}
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CreativePortfolio;
