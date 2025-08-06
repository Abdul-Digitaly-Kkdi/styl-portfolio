import React from 'react';

const valuesList = [
    {
        title: 'Client Success First',
        description: 'We succeed only when our clients win — with real results, not vanity metrics.',
    },
    {
        title: 'AI with Purpose',
        description: 'We use AI not as a buzzword, but as a tool to enhance performance, personalize campaigns, and scale smartly.',
    },
    {
        title: 'Partnership Over Projects',
        description: 'We act as extended business teams — not as external vendors. Our client’s growth is our responsibility.',
    },
    {
        title: 'Business-First Thinking',
        description: 'Every campaign starts with a business objective, not a digital trend.',
    },
    {
        title: 'Creative That Converts',
        description: 'Our creative work is not just aesthetic — it’s strategic, built to position, attract, and convert.',
    },
    {
        title: 'Integrity in Action',
        description: 'Clear communication. Honest feedback. Consistent delivery.',
    },
    {
        title: 'Adapt, Automate, Accelerate',
        description: 'We evolve with markets, automate where needed, and always aim to accelerate client growth using cutting-edge AI tools and insights.',
    },
];

const sideCards = [
    {
        title: 'OUR VISION',
        content:
            'To be the kingmaker in the digital marketing arena, empowering businesses to reach unparalleled success through our expertise and innovation. Our goal is to help brands stand out, connect with their audience, and thrive in the ever-evolving digital landscape through creativity, strategy, and excellence.',
        bgColor: 'bg-red-600',
        hcolor: 'bg-black'

    },
    {
        title: 'OUR MISSION',
        content:
            'To help our clients become number one in their fields, providing them with the tools, strategies, and support needed to dominate their markets. We strive to turn ideas into impactful digital experiences, ensuring every project we undertake adds value and drives meaningful results.',
        bgColor: 'bg-black',
        hcolor: 'bg-red-600'
    },
];

const VisionMissionValues = () => {
    return (
        <section className="w-full bg-[#0a0215] text-white px-6 py-16">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
                {/* LEFT: OUR VALUE */}
                <div
                    className="lg:w-[60%] xl:w-[70%] w-full relative rounded-xl overflow-hidden"
                    style={{
                        backgroundImage: `url('https://i.pinimg.com/originals/1d/30/b5/1d30b5a0c298c02edaf2f501b22a6587.gif')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/10 z-0" />
                    <div className="absolute inset-0 bg-black/20 bg-opacity-60 z-0" />
                    <div className="relative z-10 p-8 md:p-12 backdrop-blur-md">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-6">OUR <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">VALUE</span></h2>
                        <ul className="space-y-6 text-gray-200 text-sm md:text-base leading-relaxed">
                            {valuesList.map((item, idx) => (
                                <li key={idx}>
                                    <strong>{item.title}</strong><br />
                                    {item.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* RIGHT: VISION + MISSION CARDS */}
                <div className="lg:w-[40%] xl:w-[30%] w-full flex flex-col gap-6 justify-center ">
                    {sideCards.map((card, idx) => (
                        <div
                            key={idx}
                            className={`cursor-pointer group relative p-6 md:p-8 rounded-xl shadow-md text-white overflow-hidden transition-all duration-700 ease-in-out`}
                        >
                            {/* Background layer with hover effect */}
                            <div
                                className={`absolute inset-0 z-0 transition-all duration-700 ease-in-out bg-${card.bgColor.replace('bg-', '')} group-hover:bg-${card.hcolor.replace('bg-', '')}`}
                            ></div>

                            {/* Gradient sliding overlay */}
                            <div className="absolute inset-0 bg-gradient-to-l from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

                            {/* Content on top */}
                            <div className="relative z-20">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">{card.title}</h2>
                                <p className="text-sm md:text-base leading-relaxed">{card.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisionMissionValues;
