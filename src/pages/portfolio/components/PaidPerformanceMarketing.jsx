import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaLinkedin,
  FaInstagram,
  FaGlobe,
  FaGoogle,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const cases = [
  {
    title: "TheebetterMee - Personal Development Coaching",
    industry: "Personal Development & Coaching",
    challenge: "Generate high-quality leads for one-on-one consulting services",
    strategy: "LinkedIn content marketing and organic lead generation",
    result: "10-20 Monthly Qualified Leads - Organic LinkedIn Strategy",
    services: [
      "LinkedIn content strategy and management",
      "Organic lead generation through thought leadership",
      "Profile optimization and network building",
      "Content creation for professional audience",
    ],
    platforms: [{ name: "LinkedIn", url: "https://www.linkedin.com/in/arunodaya/" }, {
      name: "Instagram", url: "https://www.instagram.com/theebettermee/"
    }, { name: "Website", url: "https://theebettermee.com/" }],
  },
  {
    title: "Sakthi Cars - Paid Advertising Campaign",
    industry: "Automotive",
    challenge: "Increase qualified leads and boost sales conversion",
    strategy: "Multi-platform paid advertising with sales team training",
    result: "1,000+ Qualified Leads | 32% Sales Increase",
    services: [
      "Google Ads campaign management and optimization",
      "Meta Ads (Facebook & Instagram) strategy",
      "Sales training for all executives",
      "Lead tracking and conversion optimization",
      "ROI analysis and performance reporting",
    ],
    platforms: [ {
      name: "Instagram", url: "https://www.instagram.com/sakthi_cars_official?igsh=N3l4eHc3bWV5ZzBz"
    }, { name: "Website", url: "https://sakthicar.com/" }],
  },
  {
    title: "Growth Catalyst - B2B Lead Generation",
    industry: "Business Consulting",
    challenge: "Generate qualified leads for consulting services",
    strategy: "LinkedIn organic content marketing and thought leadership",
    result: "10-20 Monthly Qualified Leads - Organic LinkedIn Strategy",
    services: [
      "LinkedIn content strategy and execution",
      "Organic lead generation through valuable content",
      "Professional network building and engagement",
      "Lead nurturing and conversion optimization",
    ],
    platforms: [{ name: "Website", url: "https://growthcatalyst.renderforestsites.com/" }]
  },
  {
    title: "Dr. Monnica - Crown Dental Cosmetology",
    industry: "Dental & Cosmetic Healthcare",
    challenge: "Attract new patients for dental and cosmetic procedures",
    strategy: "Targeted digital advertising with local focus",
    result: "450+ Qualified Leads Generated",
    services: [
      "Google Ads campaign management",
      "Meta Ads optimization for local targeting",
      "Lead qualification and tracking",
      "Campaign performance analysis",
    ],
    platforms: [{ name: "Instagram", url: "https://www.instagram.com/crown_dental_cosmetology/" }]
  },
  {
    title: "Offisolv - Business Solutions",
    industry: "Business Services",
    challenge: "Scale lead generation for B2B services",
    strategy: "Comprehensive paid advertising approach",
    result: "860+ Qualified Leads Per Month",
    services: [
      "Google Ads campaign optimization",
      "Meta Ads strategy and execution",
      "Lead generation funnel optimization",
      "Monthly performance reporting",
    ],
    platforms: [{ name: "Instagram", url: "https://www.instagram.com/offisolv/" }]
  },
];

const platformIcons = {
  LinkedIn: <FaLinkedin className="text-blue-700" title="LinkedIn" />,
  Instagram: <FaInstagram className="text-pink-500" title="Instagram" />,
  Website: <FaGlobe className="text-white" title="Website" />,
  "Google Ads": <FaGlobe className="text-white" title="Google Ads" />,
  "Meta Ads": <FaFacebook className="text-blue-600" title="Meta Ads" />,
  YouTube: <FaYoutube className="text-red-600" title="YouTube" />,
};

const getPlatformUrl = (platform) =>
  `https://example.com/${encodeURIComponent(
    platform.replace(/\s+/g, "-").toLowerCase()
  )}`;

const PaidPerformanceMarketing = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="bg-white py-16 px-6 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-black"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Paid <span className="text-red-500">Performance</span> Marketing
        </h2>

        <p
          className="text-center max-w-2xl mx-auto text-gray-700 mb-14 text-base md:text-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Data-driven paid marketing strategies that deliver measurable ROI through
          precise targeting, continuous optimization, and performance-focused
          campaign management.
        </p>

        <div className="flex flex-wrap justify-center w- gap-8">
          {cases.map((c, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] w-full md:w-[45%] rounded-2xl border border-gray-800 shadow-md p-6 hover:shadow-red-500/40 transition duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              data-aos-duration="500"
            >
              <h3 className="text-xl font-semibold text-red-500 mb-1">
                {c.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{c.industry}</p>

              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="text-xs text-red-400 uppercase">Challenge</h4>
                  <p className="text-xs">{c.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs text-red-400 uppercase">Strategy</h4>
                  <p className="text-xs">{c.strategy}</p>
                </div>
                <div className="bg-green-600/10 p-2 rounded-md">
                  <h4 className="text-xs text-green-500 uppercase">Result</h4>
                  <p className="font-semibold text-green-300 text-xs">{c.result}</p>
                </div>
                <div>
                  <h4 className="text-xs text-red-400 uppercase">Services</h4>
                  <ul className="list-disc list-inside text-gray-300 text-xs">
                    {c.services.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                 
                  <h4 className="text-xs text-red-400 uppercase"> {c.platforms.length > 1 ?
                   "Platforms" :"Platform"                  
                  }</h4>

                  <div className="flex gap-3 mt-2 text-xl">
                    {Array.isArray(c.platforms)
                      ? c.platforms.map((p, i) => (
                        <a
                          key={i}
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:scale-110 transition-transform"
                        >
                          {platformIcons[p.name] || <FaGlobe />}
                        </a>
                      ))
                      : c.platforms
                        .split(/,?\s*\|\s*|,\s*/)
                        .map((p, i) => (
                          <a
                            key={i}
                            href={getPlatformUrl(p.trim())}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                          >
                            {platformIcons[p.trim()] || <FaGlobe />}
                          </a>
                        ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaidPerformanceMarketing;
