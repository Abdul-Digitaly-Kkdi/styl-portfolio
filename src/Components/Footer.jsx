import React from 'react';
import {
    Facebook, Instagram, Linkedin, Youtube, X, CircleUser,
} from 'lucide-react';
import { PiPinterestLogo } from 'react-icons/pi';
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import logo from '../assets/Styl-Logo.png'
import { Link } from 'react-router-dom';

// === Individual JSON sections ===

const servicesLinks = [
    { name: 'Brand Identity', path: '/services/brand-identity' },
    { name: 'Graphic Design', path: '/services/video-production' },
    { name: 'Video Production', path: '/services/video-production' },
    { name: 'Ads Management', path: '/services/performance-marketing' },
    { name: 'App Development', path: '/services/website-development' },
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'Social Media Management', path: '/services/social-media-marketing' },
    { name: 'SEO', path: '/services/seo' },
];

const policiesLinks = [
    { name: 'Term of use', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Cookie Policy', path: '/cockies' },
];

const companyLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Team', path: '/team' },
    { name: 'Services', path: '/services' },
    { name: 'Contact us', path: '/contact' },
    { name: 'About us', path: '/about' },
];

const socialIcons = [
    { icon: <Facebook size={18} />, hoverColor: "hover:bg-blue-600", link: 'https://www.facebook.com/styl.doitwithit/' },
    { icon: <PiPinterestLogo size={18} />, hoverColor: "hover:bg-[#D60124]", link: 'https://in.pinterest.com/doitinstyl/' },
    { icon: <Instagram size={18} />, hoverColor: "hover:bg-[#E63180]", link: 'https://www.instagram.com/styl_doit_withit/' },
    { icon: <Linkedin size={18} />, hoverColor: "hover:bg-[#0073B1]", link: 'https://www.linkedin.com/in/styl-do-it-with-it-41a772298/?original_referer=https%3A%2F%2Fdoitinstyl.com%2F' },
    { icon: <Youtube size={18} />, hoverColor: "hover:bg-[#F70000]", link: 'https://www.youtube.com/@Doitinstyl' },
    { icon: <FaXTwitter size={18} />, hoverColor: "hover:bg-[#000000]", link: 'https://x.com/Styl_Doit' },
    { icon: <FaThreads size={18} />, hoverColor: "hover:bg-[#000000]", link: 'https://www.threads.com/login/?next=https%3A%2F%2Fwww.threads.com%2F%40styl_doit_withit%2F' },
];

const Footer = () => {
    return (
        <footer className="bg-[#0a0215] text-white py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap gap-5 justify-center">
                {/* Logo + Description + Social Icons */}
                <div className="md:w-[30%]">
                    <div className=" font-bold mb-2">
                        <Link to="/">
                            <img src={logo} alt='Logo' className='h-20' />
                        </Link>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">
                        Transforming Ideas into Digital Excellence. Elevate your online presence with our innovative solutions and strategic digital services.
                    </p>
                    <div className="flex gap-3 mt-4 flex-wrap">
                        {socialIcons.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`bg-white text-black p-2 rounded-full transition ${item.hoverColor} hover:text-white`}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Services Section */}
                <div className="md:w-[20%]">
                    <h3 className="text-lg font-semibold text-gray-300 mb-3">Services</h3>
                    <ul className="text-sm space-y-2 text-gray-400">
                        {servicesLinks.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.path} className="hover:text-white transition">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Policies Section */}
                <div className="md:w-[20%]">
                    <h3 className="text-lg font-semibold text-gray-300 mb-3">Policies</h3>
                    <ul className="text-sm space-y-2 text-gray-400">
                        {policiesLinks.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.path} className="hover:text-white transition">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company Section */}
                <div className="md:w-[20%]">
                    <h3 className="text-lg font-semibold text-gray-300 mb-3">Quick Links</h3>
                    <ul className="text-sm space-y-2 text-gray-400">
                        {companyLinks.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.path} className="hover:text-white transition">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-12 pt-6 text-sm flex flex-col md:flex-row items-center justify-center text-gray-400">
                <p>Copyright© 2025 STYL, All rights reserved.</p>
                {/* <div className="flex gap-4 mt-2 md:mt-0">
                    <a href="/terms">Term of use</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/cookies">Cookie Policy</a>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;
