import React from 'react';

const stats = [
    {
        value: '15+',
        label: 'PROJECT DONE',
    },
    {
        value: '15+',
        label: 'HAPPY CLIENT',
    },
    {
        value: '4.8',
        label: 'CLIENT RATINGS',
    },
    {
        value: '100%',
        label: 'DIGITAL SUCCESS',
    },
];

const StatsSection = () => {
    return (
        <section className="w-full bg-gradient-to-r from-red-700 via-red-800 to-black text-white px-4 py-6">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center divide-x divide-white/30">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`px-4 py-6 flex flex-col items-center justify-center ${index === 0 ? 'md:pl-0' : ''
                            }`}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold">{stat.value}</h3>
                        <p className="mt-2 text-sm md:text-base font-semibold uppercase tracking-wide text-white">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
