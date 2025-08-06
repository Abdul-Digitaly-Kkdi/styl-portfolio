import React from "react";
import { useParams } from "react-router-dom";

const serviceDetails = {
  "brand-identity": {
    title: "Brand Identity",
    sections: [
      {
        heading: "Logo Creation",
        description:
          "A logo is the face of your brand, representing your identity and values. At STYL, we design unique, memorable, and professional logos that leave a lasting impression. Our goal is to create a logo that reflects your brand’s personality and connects with your target audience.",
        points: [
          "Custom-designed logos tailored to your brand identity.",
          "Versatile and scalable designs for all platforms.",
          "Modern, timeless, and industry-relevant concepts.",
          "High-resolution formats for digital and print use.",
          "Logo variations for different branding needs.",
          "Concept development and multiple design options.",
        ],
      },
      {
        heading: "Branding",
        description:
          "Branding goes beyond just a logo—it defines how your audience perceives your business. We craft a cohesive brand identity that builds trust, strengthens recognition, and differentiates you from competitors. Our strategic approach ensures consistency across all touchpoints.",
        points: [
          "Brand strategy development for a strong market presence.",
          "Logo, colour palette, typography, and brand guidelines.",
          "Consistent branding across digital and print media.",
          "Brand voice and messaging strategy.",
          "Packaging and merchandising design.",
          "Rebranding and brand evolution services.",
        ],
      },
    ],
  },



  "video-production": {
    title: "Video Production",
    sections: [
      {
        heading: "Video Production",
        description:
          "Video is one of the most engaging forms of content... We bring your brand to life.",
        points: [
          "Professional scriptwriting, shooting, and editing.",
          "Corporate, product, and brand promotional videos.",
          "High-quality visuals and engaging storytelling.",
          "Testimonial and case study videos.",
          "Social media video content creation.",
        ],
      },
      {
        heading: "Corporate Pitch Video",
        description:
          "A corporate pitch video is a powerful way to present your business or pitch ideas.",
        points: [
          "Engaging scripts that highlight key selling points.",
          "Professional visuals and voiceovers.",
          "Structured storytelling to leave a lasting impact.",
          "High-quality production for a polished look.",
          "Short and long-format videos for different audiences.",
          "Custom branding elements and graphics.",
        ],
      },
      {
        heading: "Corporate Pitch Deck",
        description:
          "A strong pitch deck can make all the difference in securing funding or winning clients.",
        points: [
          "Well-structured, investor-friendly presentations.",
          "Visually compelling slides with impactful messaging.",
          "Data-driven storytelling to strengthen your pitch.",
          "Custom graphics, charts, and infographics.",
          "PowerPoint and PDF formats for easy sharing.",
          "Professional content writing and design.",
        ],
      },
    ],
  },

"performance-marketing": {
    title: "Performance Marketing",
    sections: [
      {
        heading: "Performance Marketing (Ads)",
        description: "Paid advertising ensures quick and measurable business growth. We create and manage data-driven ad campaigns to maximize conversions and ROI.",
        points: [
          "Google Ads, social media ads, and display advertising.",
          "Targeted audience segmentation for better results.",
          "Performance tracking and campaign optimization.",
          "A/B testing for improved ad effectiveness.",
          "Retargeting campaigns for higher conversion rates.",
          "Budget optimization for maximum ROI."
        ]
      },
      {
        heading: "WhatsApp Marketing",
        description: "WhatsApp is a direct and personal way to reach customers. We design effective WhatsApp marketing campaigns to improve engagement and conversions.",
        points: [
          "Automated messaging and chatbot setup.",
          "Bulk messaging for promotions and offers.",
          "Interactive engagement strategies for better response rates.",
          "Personalized customer communication.",
          "Click-to-WhatsApp ad integration.",
          "Campaign performance analytics."
        ]
      },
      {
        heading: "Email Marketing",
        description: "Email marketing is a cost-effective way to nurture leads and drive sales. We create targeted, personalized campaigns to keep your audience engaged and convert prospects into customers.",
        points: [
          "Custom-designed, mobile-friendly email templates.",
          "Segmentation and automation for better engagement.",
          "Performance tracking to optimize campaign success.",
          "Drip campaigns and lead nurturing sequences.",
          "Compliance with email marketing best practices."
        ]
      },
{
        heading: "",
        description: "At Styl, we combine creativity, strategy, and technology to deliver exceptional digital solutions. Let’s work together to take your brand to the next level!",
        points: []
        
      }

      
    ]
  },

  "website-development": {
    title: "Website Development",
    sections: [
      {
        heading: "Website Development",
        description: "Your website is your digital storefront, and we ensure it delivers an outstanding experience. We create high-performance, user-friendly websites that are visually appealing, responsive, and optimized for conversions.",
        points: [
          "Custom-designed websites tailored to your brand.",
          "Mobile-friendly, fast-loading, and SEO-optimized pages.",
          "Secure, scalable, and easy-to-manage web solutions.",
          "E-commerce website development.",
          "UI/UX design for enhanced user experience.",
          "Website maintenance and support."
        ]
      }
    ]
  },

  "social-media-marketing": {
    title: "Social Media Marketing (SMM)",
    sections: [
      {
        heading: "Social Media Marketing (SMM)",
        description: "Social media is a powerful tool for brand awareness and engagement. We develop effective social media strategies to connect with your audience and grow your brand.",
        points: [
          "Content creation and social media management.",
          "Paid ad campaigns for targeted reach and conversions.",
          "Performance tracking and engagement optimization.",
          "Community management and audience interaction.",
          "Influencer collaborations and partnerships.",
          "Platform-specific strategies (Instagram, Facebook, LinkedIn, etc.)."
        ]
      }
    ]
  },


  "seo": {
    title: "SEO (Search Engine Optimization)",
    sections: [
      {
        heading: "SEO (Search Engine Optimization)",
        description: "SEO helps your website rank higher in search engines, increasing organic traffic and visibility. We implement proven strategies to boost your rankings and help potential customers find your business easily.",
        points: [
          "Keyword research and on-page optimization.",
          "Technical SEO and website performance improvements.",
          "Link-building and content strategies for long-term growth.",
          "Local and global SEO strategies.",
          "Competitor analysis and SEO audits.",
          "Regular reporting and performance tracking."
        ]
      },
      {
        heading: "Google My Business",
        description: "Enhancing your local online presence is key to attracting nearby customers. We optimize your Google My Business profile to improve search rankings, credibility, and customer engagement.",
        points: [
          "Profile setup and optimization for maximum visibility.",
          "Google reviews management to build trust and reputation.",
          "Regular updates and posts to engage your audience.",
          "Accurate business information for better search rankings.",
          "Insights and analytics tracking.",
          "Local SEO strategy integration."
        ]
      }
    ]
  }
  
};

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const data = serviceDetails[slug];

  if (!data) {
    return (
      <div className="text-white text-center py-20">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
      </div>
    );
  }

  return (
    <section className="bg-[#170f24] text-white px-4 sm:px-8 md:px-10 lg:px-16 xl:px-28 2xl:px-36 py-20 min-h-screen">
  <div className="max-w-6xl mx-auto space-y-12">
    <div className="text-center text-white uppercase">
      <h1 className="text-2xl md:text-3xl font-bold text-red-400">
        {data.title}
      </h1>
      <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
        {data.description}
      </p>
    </div>

    <div className="space-y-10">
      {data.sections.map((section, index) => (
        <div key={index} className="bg-white/5 p-6 sm:p-8 rounded-2xl shadow-md border border-white/10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-red-300">
            {section.heading}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80">
            {section.description}
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/90 text-sm sm:text-base md:text-lg pl-4">
            {section.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default ServiceDetailPage;
