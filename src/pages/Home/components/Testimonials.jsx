import React from "react";
import { MessageSquareQuote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "STYL helped my home bakery reach more customers with beautiful content, social media marketing, and local SEO. Now, I get more orders and engagement than ever before. Highly recommended.",
      author: "Salt Krupe",
      position: "Founder & CEO, Decadence"
    },
    {
      quote: "STYL doesn't just create content—they create results. From starting to execution, every step is designed for impact. Our ROI has improved significantly since partnering with them!",
      author: "Annealinga",
      position: "Founder, Than Better Me"
    },
    {
      quote: "The professional approach and customer centricity are the cornerstones of DO IT INSTYL DIGITAL SOLUTIONS. The team is dynamic, consistently exceeding expectations. I wholeheartedly recommend them.",
      author: "Dr. Swammathan Sabe San",
      position: "Growth Catalyst, FOURRIES"
    },
    {
      quote: "STYL helped us build a strong brand identity and drive leads. Their deep understanding ensured every asset aligned with our goals. Highly recommend!",
      author: "Dr. S. K. Gupta",
      position: "Gupta & Co"
    },
    {
      quote: "STYL helped take our tuition center online with a smart digital strategy. Their videos, social media, and SEO brought in more student inquiries. Perfect for educational growth!",
      author: "Alahwaya",
      position: "Center Head, Johns Academy"
    }
  ];

  const TestimonialCard = ({ quote, author, position }) => (
    <div className="relative bg-[#1e1530]/80 backdrop-blur-xl p-8 pt-12 rounded-2xl shadow-lg hover:shadow-red-600/30 border border-white/10 transition-all duration-300 group min-h-[300px]">
      <div className="absolute top-4 left-4 bg-red-600 text-white p-2 rounded-full shadow-md z-10">
        <MessageSquareQuote className="w-6 h-6" />
      </div>
      <p className="text-gray-200 italic mb-6 mt-2 leading-relaxed">“{quote}”</p>
      <div className="border-t border-gray-700 pt-4">
        <p className="text-lg font-semibold text-white">{author}</p>
        <p className="text-sm text-gray-400">{position}</p>
      </div>
    </div>
  );

  return (
    <section className="bg-[#170f24] py-20 px-4 sm:px-6 lg:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl uppercase font-bold mb-16 text-white bg-clip-text">
          What <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">Our Clients Say</span>
        </h2>

        {/* Swiper on sm and md */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid on lg and above */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
