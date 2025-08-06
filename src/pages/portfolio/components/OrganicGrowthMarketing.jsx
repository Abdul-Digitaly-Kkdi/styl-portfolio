import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGoogle, FaInstagram, FaYoutube } from "react-icons/fa";
import image from "../../../assets/imag12.jpg";

const cases = [
  {
    title: "Sri Ramakrishna Specialty Hospital - Trichy",
    industry: "Healthcare",
    challenge:
      "Establish digital presence and build patient trust in competitive healthcare market",
    strategy:
      "Comprehensive social media management with educational content and patient testimonials",
    growth: "20% Monthly Follower Growth - Organic",
    services: [
      "Video production (scripting, shooting, editing, thumbnails)",
      "Content creation (posters, carousels, copywriting)",
      "Social media management and posting",
      "Promotional strategies (QR codes, cross-sharing)",
      "Performance analytics and reporting",
    ],
    platforms: [
      { icon: <FaInstagram />, url: "https://www.instagram.com/s_r_s_hospital/", bg: "from-[#f09433] to-[#bc1888]" },
      { icon: <FaYoutube />, url: "https://www.youtube.com/@SRSHTrichy", bg: "from-[#FF0000] to-[#CC0000]" },
      { icon: <FaGoogle />, url: "https://sriramakrishnahospitaltrichy.com/", bg: "from-[#4285F4] to-[#0F9D58]" },
    ],
  },
  {
    title: "Dr. Kayal - Natural Wellness Solutions",
    industry: "Wellness & Healthcare",
    challenge: "Position as thought leader in natural wellness space",
    strategy: "Educational content series showcasing natural health solutions",
    growth: "35% Monthly Follower Growth - Organic",
    services: [
      "Video production (scripting, shooting, editing, thumbnails)",
      "Content creation (educational posters, wellness carousels)",
      "Social media management and community engagement",
      "Performance analytics and strategic reporting",
    ],
    platforms: [
      { icon: <FaInstagram />, url: "https://www.instagram.com/drkayel_naturalwellnesolutions/", bg: "from-[#f09433] to-[#bc1888]" },
    ],
  },
  {
    title: "Decadence by Sai Krupa",
    industry: "Food & Beverage (Cloud Bakery)",
    challenge: "Build brand awareness for custom dessert and bakery services",
    strategy: "Visual storytelling through high-quality food photography and behind-the-scenes content",
    growth: "35% Monthly Follower Growth - Organic",
    services: [
      "Video production (product showcases, process videos)",
      "Visual content creation and food photography",
      "Social media management and customer engagement",
      "Performance tracking and growth analysis",
    ],
    platforms: [
      { icon: <FaInstagram />, url: "https://www.instagram.com/decadence_bysaikrupa/", bg: "from-[#f09433] to-[#bc1888]" },
    ],
  },
  {
    title: "Sakthi Cars - Certified Pre-Owned Vehicles",
    industry: "Automotive",
    challenge: "Establish trust and credibility in used car market",
    strategy: "Transparency-focused content with vehicle showcases and customer testimonials",
    growth: "42% Monthly Follower Growth - Organic",
    services: [
      "Video production (vehicle showcases, customer testimonials)",
      "Content creation (vehicle feature posters, promotional carousels)",
      "Social media management and customer engagement",
      "Performance analytics and growth optimization",
    ],
    platforms: [
      { icon: <FaInstagram />, url: "https://www.instagram.com/sakthi_cars_official/", bg: "from-[#f09433] to-[#bc1888]" },
      { icon: <FaYoutube />, url: "https://www.youtube.com/@sakthicarsadambakkam", bg: "from-[#FF0000] to-[#CC0000]" },
      { icon: <FaGoogle />, url: "https://sakthicar.com/", bg: "from-[#4285F4] to-[#0F9D58]" },
    ],
  },
];

const OrganicGrowthMarketing = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-10 px-4 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8"
          data-aos="fade-up"
        >
          Client <span className="text-red-600">Success</span> Stories
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {cases.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-xl border border-gray-100 p-6 bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-rose-700">{item.title}</h3>
                <p className="text-sm text-gray-500 italic">{item.industry}</p>
              </div>

              <div className="mb-4">
                <p><span className="font-semibold text-gray-700">Challenge:</span> {item.challenge}</p>
                <p><span className="font-semibold text-gray-700">Strategy:</span> {item.strategy}</p>
                <p><span className="font-semibold text-gray-700">Growth:</span> {item.growth}</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-700 mb-1">Services Provided:</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {item.services.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 mt-4">
                {item.platforms.map((platform, i) => (
                  <a
                    key={i}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white p-2 rounded-full transition-transform transform hover:scale-110 bg-gradient-to-br ${platform.bg}`}
                  >
                    {platform.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganicGrowthMarketing;
