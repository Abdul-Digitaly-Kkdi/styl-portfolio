import React from "react";
import { Briefcase, Video, BarChart, Globe, Users, Search } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Brand Identity",
    description:
      "We craft unique brand identities that leave a lasting impression. From logo design to brand strategy, we help businesses establish a strong and memorable presence.",
    icon: Briefcase,
    slug: "brand-identity",
    link: "/services/brand-identity",
  },
  {
    title: "Video Production",
    description:
      "Engaging and high-quality video content that captures attention and tells your brand story. From promotional videos to social media content, we bring your vision to life.",
    icon: Video,
    slug: "video-production",
    link: "/services/video-production",
  },
  {
    title: "Ads Management",
    description:
      "Maximize your ROI with data-driven ad campaigns. We handle Google Ads, Facebook Ads, and other digital advertising platforms to ensure targeted reach and high conversions.",
    icon: BarChart,
slug: "performance-marketing",
    link: "/services/performance-marketing",
    
  },
  {
    title: "Website Development",
    description:
      "We build custom, responsive, and user-friendly websites that enhance your online presence. Whether it's a business site or an e-commerce store, we create websites that drive results.",
    icon: Globe,
slug: "website-development",
    link: "/services/website-development",
    
  },
  {
    title: "Social Media Management",
    description:
      "Level up your digital presence with content planning, trend-based growth, and real-time engagement across all platforms.",
    icon: Users,
slug: "social-media-marketing",
    link: "/services/social-media-marketing",
    
  },
  {
    title: "Search Engine Optimization",
    description:
      "Boost your brand’s presence with strategic content, engagement, and analytics-driven growth. We manage your social media platforms to increase visibility and audience interaction.",
    icon: Search,
slug: "seo",
    link: "/services/seo",

    
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#170f24] py-16 px-4 sm:px-8" id="services">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl uppercase font-bold text-white mb-4">
          What <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">We Offer</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          You're not just buying services. You're Partnering for Results.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1f1530] group rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-left border border-transparent hover:border-red-500"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-red-300 text-red-700">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition">
                {service.title}
              </h3>
              <p className="text-gray-300 mt-3 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <Link to={`/services/${service.slug}`} className="text-sm font-medium text-red-400 hover:underline">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
