import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    title: "Social Media Marketing & Management",
    points: [
      "Content strategy development and execution",
      "Community management and engagement",
      "Social media advertising campaigns",
      "Brand storytelling and visual identity",
      "Analytics and performance reporting",
    ],
  },
  {
    title: "Performance Marketing",
    points: [
      "Google Ads campaign management",
      "Meta Ads (Facebook & Instagram) optimization",
      "LinkedIn lead generation strategies",
      "Conversion rate optimization",
      "ROI-focused campaign management",
    ],
  },
  {
    title: "Content Creation & Video Production",
    points: [
      "Professional video production and editing",
      "Graphic design and poster creation",
      "Content scripting and copywriting",
      "Thumbnail design and optimization",
      "Multi-platform content adaptation",
    ],
  },
  {
    title: "Web Development & Design",
    points: [
      "Responsive website development",
      "E-commerce solutions",
      "User experience optimization",
      "Mobile-first design approach",
      "SEO-optimized development",
    ],
  },
];

const CoreServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-20">
      <div className='mx-auto max-w-6xl'>
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Core <span className="text-rose-600">Services</span>
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            We deliver complete 360° digital marketing and development solutions to grow your brand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-rose-500"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
