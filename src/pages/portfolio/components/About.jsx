import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
          About <span className="text-rose-600">STYL</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-justify md:text-center">
          STYL is a premier digital marketing agency specializing in strategic social media
          management, performance marketing, and creative content production. We transform brands
          through data-driven strategies, compelling storytelling, and measurable results that
          drive business growth.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        <div data-aos="fade-right" className="max-w-3xl mx-auto ">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
            Our Mission
          </h3>
          <p className="text-gray-600 leading-relaxed text-justify md:text-center">
            To elevate brands through innovative digital strategies that create meaningful
            connections between businesses and their audiences, delivering exceptional ROI and
            sustainable growth.
          </p>
        </div>

        <div data-aos="zoom-in" className="max-w-3xl mx-auto text-center pt-10">
          <p className="text-gray-500 italic">
            “We don’t just market — we create impact.” – Team STYL
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
