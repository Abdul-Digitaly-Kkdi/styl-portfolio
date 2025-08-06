import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const stats = [
    { value: 15, label: "PROJECT DONE", suffix: "+" },
    { value: 15, label: "HAPPY CLIENT", suffix: "+" },
    { value: 4.8, label: "CLIENT RATINGS", decimals: 1 },
    { value: 100, label: "DIGITAL SUCCESS", suffix: "%" },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="w-full bg-gradient-to-r from-red-800 via-red-400 to-red-600 py-6">
      <div className="w-10/12 max-w-7xl mx-auto">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 text-white text-center select-none"
        >
          {stats.map(({ value, label, suffix, decimals }, idx) => (
  <div
    key={idx}
    className="flex flex-col items-center justify-center px-4 relative"
  >
    {(idx === 1 || idx === 3) && (
      <>
        {/* Small screens */}
        <div className="block md:hidden absolute left-0 top-1/2 -translate-y-1/2 h-14 border-l border-white/40" />

        {/* Medium screens only */}
        <div className="hidden md:block lg:hidden absolute left-0 top-1/2 -translate-y-1/2 h-14 border-l border-white/40" />
      </>
    )}

    {/* Large screens and above: show divider between all except first & last */}
    {idx !== 0 && idx !== stats.length + 1 && (
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-14 border-l border-white/40" />
    )}

    <span className="text-3xl sm:text-4xl font-extrabold drop-shadow-lg">
      {inView ? (
        <CountUp
          start={0}
          end={value}
          duration={2.5}
          decimals={decimals || 0}
          suffix={suffix || ""}
        />
      ) : (
        "0"
      )}
    </span>
    <span className="mt-1 text-base sm:text-lg font-semibold tracking-wide">
      {label}
    </span>
  </div>
))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
