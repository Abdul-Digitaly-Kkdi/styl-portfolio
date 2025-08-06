import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const cards = [
    {
        title: 'Boost Sales',
        text: 'Turn clicks into loyal buyers fast',
        color: 'bg-blue-500',
    },
    {
        title: 'Grow Smarter',
        text: 'Unlock tailored strategies that scale',
        color: 'bg-pink-500',
    },
    {
        title: 'Data Driven',
        text: 'Make bold decisions with confidence',
        color: 'bg-purple-500',
    },
    {
        title: 'Scale Fast',
        text: 'Ready-made automation workflows',
        color: 'bg-red-500',
    },
];

const StackedScrollCards = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 600], [0, -300]);

    return (
        <section className="w-full h-[150vh] bg-[#0a0215] text-white relative flex items-center justify-center px-4">
            {/* LEFT TEXT */}
            <div className="absolute left-10 top-[20%] w-1/2">
                <h2 className="text-xl md:text-2xl font-semibold">
                    Custom-built growth plans that evolve as you do — no templates, no fluff
                </h2>
            </div>

            {/* CARD STACK */}
            <div className="relative w-[300px] h-[300px]">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        style={{ y }}
                        className={`absolute w-full h-full rounded-3xl shadow-xl ${card.color} text-black flex flex-col items-start justify-center p-6 z-[${index}]`}>
                        <h3 className="text-sm font-bold mb-1">{card.title}</h3>
                        <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
                            {card.text}
                        </h2>
                    </motion.div>
                )).reverse()}
            </div>
        </section>
    );
};

export default StackedScrollCards;
