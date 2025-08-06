import React from 'react';

const Landing = () => {
    return (
        <div
            className="w-full bg-cover bg-center relative"
            style={{
                backgroundImage: `url('https://i.pinimg.com/originals/62/39/4d/62394d753859943e6a1a36443ef78795.gif')`,
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/60 to-black/70 z-10" />

            {/* Content */}
            <div className="relative z-20 max-w-5xl mx-auto px-6 py-32 flex flex-col justify-center items-center text-center text-white gap-8">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg" data-aos="fade-up" data-aos-duration="2000">
                    WELCOME TO <span className="text-red-500">STYL</span>
                </h1>

                <h2 className="text-3xl md:text-4xl font-bold leading-snug drop-shadow">
                    AI-Powered <span className="text-red-300">Digital Marketing</span><br /> Company
                </h2>

                <p className="text-lg md:text-xl max-w-3xl text-gray-200 leading-relaxed drop-shadow-sm" data-aos="fade-down" data-aos-duration="2000">
                    We specialize in branding, video production, social media management, ads management, and website development to elevate your online presence and grow your business with innovation and efficiency.
                </p>

                <button className="bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-full px-6 py-3 text-white text-sm font-medium shadow shadow-white cursor-pointer">
                    LEARN MORE
                </button>
            </div>
        </div>
    );
};

export default Landing;
