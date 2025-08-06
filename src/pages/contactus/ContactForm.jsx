import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { FiArrowUpRight } from "react-icons/fi";

const ContactFormSection = () => {
  const SERVICE_ID = "service_77wzhnm"; // e.g., service_gmail
  const TEMPLATE_ID = "template_d1dah6c"; // e.g., template_contact
  const PUBLIC_KEY = "aYTkLLdSEBiy-uRbx"; // from dashboard


  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z. ]+$/.test(formData.name)) {
      newErrors.name = "Name can contain only letters, spaces, and dots";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (formData.name.length > 60) {
      newErrors.name = "Name cannot exceed 60 characters";
    }

    if (!formData.company) newErrors.company = "Company is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!formData.service || formData.service === "Select") {
      newErrors.service = "Please select a department";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [submissionError, setSubmissionError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate(); // ⬅️ this returns true/false
    setSuccess(false);
    setEmailError("");
  
    if (!isValid) return; // ⬅️ stop if there are validation errors
  
    setLoading(true);
    const templateParams = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };
  
    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
  
      console.log("SUCCESS!", result.text);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED...", error);
      setSubmissionError("Something went wrong.");
      setTimeout(() => setSubmissionError(""), 3000);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="bg-[#0A0218] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Left Section */}
        <div className="w-full lg:w-6/12 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">GET <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">IN TOUCH</span></h2>
          <h3 className="text-xl font-semibold text-gray-400">
            Seamless Communication, Global Impact
          </h3>
          <p className="text-gray-400">
            We’d love to hear from you! Whether you have a question, need
            support, or just want to say hello — we’re here for you
          </p>

          <div className="space-y-6 border-t border-b border-gray-700 py-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-600 rounded-full p-3">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <div>
                <p className="font-bold">HEAD OFFICE</p>
                <p className="text-gray-400 text-sm">
                  153, 13th St, Maxworth Nagar, Kovilambakkam,
                  <br />
                  Chennai, Tamil Nadu 600117
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-600 rounded-full p-3">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <div>
                <p className="font-bold">EMAIL SUPPORT</p>
                <p className="text-gray-400 text-sm">
                  styldoitwithit@gmail.com
                  <br />
                  ramya@doitinstyl.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-600 rounded-full p-3">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
              <div>
                <p className="font-bold">LET’S TALK</p>
                <p className="text-gray-400 text-sm">
                  Phone: +91 91500 88334 <br />
                  Phone: +91 86678 68520
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-600 rounded-full p-3">
                <FaClock className="text-white text-xl" />
              </div>
              <div>
                <p className="font-bold">WORKING HOURS</p>
                <p className="text-gray-400 text-sm">
                  Monday – Saturday
                  <br />
                  09am – 07pm
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-300 mb-3">
              Follow our social media
            </h4>
            <div className="flex gap-4 text-gray-300 text-lg">
                <a target="_blank" href="https://www.facebook.com/styl.doitwithit/">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" /></a>
              <a target="_blank" href="https://in.pinterest.com/doitinstyl/">
              <FaPinterestP className="hover:text-[#D60124] cursor-pointer" /></a>
              <a target="_blank" href="https://www.instagram.com/styl_doit_withit/">
              <FaInstagram className="hover:text-[#E63180] cursor-pointer" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/styl-do-it-with-it-41a772298/?original_referer=https%3A%2F%2Fdoitinstyl.com%2F">
              <FaLinkedinIn className="hover:text-[#0073B1] cursor-pointer" /></a>
              <a target="_blank" href="https://www.youtube.com/@Doitinstyl">
              <FaYoutube className="hover:text-[#F70000] cursor-pointer" /></a>
              <a target="_blank" href="https://x.com/Styl_Doit">
              <FaXTwitter className="hover:text-[#1C96E8] cursor-pointer" /></a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-6/12 bg-[#1c0f30] p-8 rounded-xl flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Send us a message
          </h2>
          <p className="text-center text-gray-400 mb-6 text-sm">
            Please feel free to send us any questions, feedback or suggestions
            you might have.
          </p>

          <form
            className="flex flex-col flex-grow space-y-4"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="bg-[#0A0218] p-3 rounded-md outline-0 w-full border border-gray-700 text-white"
                />
                 <div className="min-h-[18px] mt-1">
                    {errors.name && (
                      <p className="text-red-500 text-xs text-right">
                        {errors.name}
                      </p>
                    )}
                  </div>
              </div>

              <div className="w-full">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="bg-[#0A0218] p-3 rounded-md outline-0 w-full border border-gray-700 text-white"
                />
                <div className="min-h-[18px] mt-1">
                    {errors.company && (
                      <p className="text-red-500 text-xs text-right">
                        {errors.company}
                      </p>
                    )}
                  </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="bg-[#0A0218] p-3 rounded-md outline-0 w-full border border-gray-700 text-white"
                />
                <div className="min-h-[18px] mt-1">
                    {errors.phone && (
                      <p className="text-red-500 text-xs text-right">
                        {errors.phone}
                      </p>
                    )}
                  </div>
              </div>

              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="bg-[#0A0218] p-3 rounded-md outline-0 w-full border border-gray-700 text-white"
                />
               <div className="min-h-[18px] mt-1">
                    {errors.email && (
                      <p className="text-red-500 text-xs text-right">
                        {errors.email}
                      </p>
                    )}
                  </div>
              </div>
            </div>

            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#0A0218] px-4 py-2 rounded-md outline-none border border-gray-700 text-white"
              >
                <option>Select</option>
                <option>Video Production</option>
                <option>Ads Management</option>
                <option>Website Development</option>
                <option>Apps Development</option>
                <option>Search Engine Optimization</option>
                <option>Social Media Management</option>
                <option>Corporate pitch deck</option>
              </select>
              <div className="min-h-[18px] mt-1">
                    {errors.service && (
                      <p className="text-red-500 text-xs text-right">
                        {errors.service}
                      </p>
                    )}
                  </div>
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Message"
                className="w-full bg-[#0A0218] px-4 py-2 rounded-md outline-none border border-gray-700 text-white"
              ></textarea>
              <div className="min-h-[18px] mt-1">
                    {errors.message && (
                      <p className="text-red-500 text-xs text-right">
                        {errors.message}
                      </p>
                    )}
                  </div>
            </div>

            <div className="min-h-[18px] mt-1">
                  {success && (
                    <p className="text-green-600 text-sm font-medium mb-2">
                      Your message has been successfully sent!
                    </p>
                  )}
                  {submissionError && (
                    <p className="text-red-600 text-sm font-medium mb-2">
                      {submissionError}
                    </p>
                  )}
                </div>  

            <button
                  type="submit"
                  disabled={loading}
                  className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full mt-2 cursor-pointer transition
    ${
      loading
        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
        : "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-pink-500 hover:to-red-500 hover:text-black"
    }
  `}
                >
                  {loading ? "Submitting..." : "SEND MESSAGE"}{" "}
                  <FiArrowUpRight />
                </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
