import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './../assets/Styl-Logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-[#0a0215] text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-22" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8 md:text-base xl:text-lg font-normal">
                    <Link to="/" className="hover:text-red-500">Home</Link>
                    <Link to="/team" className="hover:text-red-500">Our Team</Link>
                    <Link to="/portfolio" className="hover:text-red-500">Portfolio</Link>
                    <Link to="/services" className="hover:text-red-500">Services</Link>
                    <Link to="/contact" className="hover:text-red-500">Contact us</Link>
                    <Link to="/about" className="hover:text-red-500">About us</Link>
                </nav>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-4 bg-[#0a0215] text-center">
                    <Link to="/" className="block hover:text-red-500" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/team" className="block hover:text-red-500" onClick={() => setMenuOpen(false)}>Our Team</Link>
                    <Link to="/portfolio" className="block hover:text-red-500" onClick={() => setMenuOpen(false)}>Portfolio</Link>
                    <Link to="/services" className="block hover:text-red-500" onClick={() => setMenuOpen(false)}>Services</Link>
                    <Link to="/contact" className="block hover:text-red-500" onClick={() => setMenuOpen(false)}>Contact us</Link>
                    <Link to="/about" className="block hover:text-red-500" onClick={() => setMenuOpen(false)}>About us</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
