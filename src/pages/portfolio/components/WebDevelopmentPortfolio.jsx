import React from "react";
import { FaHospitalAlt, FaBusinessTime, FaCar } from "react-icons/fa";

const industries = [
  {
    title: "Healthcare",
    icon: <FaHospitalAlt className="text-xl text-red-600" />,
    clients: [
      {
        name: "Dr. Harish Orthopaedic",
        url: "https://drharishortho.com/",
        subtitle: "Orthopedic Specialist Website",
      },
      {
        name: "Sri Ramakrishna Specialty Hospital",
        url: "https://sriramakrishnahospitaltrichy.com/",
        subtitle: "Hospital Management System",
      },
      {
        name: "Mukesh Arthro Care",
        url: "https://www.mukeshortho.com/",
        subtitle: "Arthroscopy Center Portal",
      },
      {
        name: "Neshr Biocare",
        url: "https://neshrbiocare.renderforestsites.com/",
        subtitle: "Medical Equipment E-commerce",
      },
      {
        name: "Dr. Ramesh Prabu",
        url: "https://drrameshprabu.renderforestsites.com/",
        subtitle: "Dental Practice Website",
      },
    ],
  },
  {
    title: "Business Services",
    icon: <FaBusinessTime className="text-xl text-red-600" />,
    clients: [
      {
        name: "Growth Catalyst",
        url: "https://growthcatalyst.renderforestsites.com/",
        subtitle: "Business Consulting Platform",
      },
      {
        name: "TheebetterMee",
        url: "https://theebettermee.com/",
        subtitle: "HR Management System",
      },
      // {
      //   name: "AVZA",
      //   url: "https://demo1.itsmeaskar.com/#",
      //   subtitle: "Corporate Services Portal",
      // },
    ],
  },
  {
    title: "Automotive",
    icon: <FaCar className="text-xl text-red-600" />,
    clients: [
      {
        name: "Sakthi Car",
        url: "https://sakthicar.com/",
        subtitle: "Used Car Dealership Platform",
      },
    ],
  },
];

const WebDevelopmentPortfolio = () => (
  <section className="bg-gray-100 text-black py-20 px-6 md:px-20 font-sans">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Web <span className="text-red-500">Development</span> Portfolio
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto text-base">
          Clean and conversion-focused digital platforms for diverse industries.
        </p>
      </div>

      <div className="space-y-14">
        {industries.map((industry, idx) => (
          <div
            key={industry.title}
            className="border-l-4 border-red-600 pl-6 relative"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="flex items-center gap-3 mb-4 ">
              <div>{industry.icon}</div>
              <h3 className="text-2xl font-semibold text">{industry.title}</h3>
            </div>

            <ul className="space-y-3">
              {industry.clients.map((client, i) => (
                <li key={i}>
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-800 py-2 group-hover:pl-2 transition-all">
                      <div>
                        <p className="text-base font-medium text-red-500 group-hover:text-red-500 transition">
                          {client.name}
                        </p>
                        <p className="text-sm text-gray-400">{client.subtitle}</p>
                      </div>
                      <span className="text-xs text-gray-500 mt-2 sm:mt-0">
                        View →
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WebDevelopmentPortfolio;
