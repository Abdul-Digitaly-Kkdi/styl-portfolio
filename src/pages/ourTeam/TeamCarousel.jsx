import React, { useRef, useEffect, useState } from "react";
import fennyImg from "../../assets/Fenny.webp";
import ramyaImg from "../../assets/ramya.webp";
import samImg from "../../assets/samhitha.webp";
import snegaImg from "../../assets/snega.webp";
import saiImg from "../../assets/sai.webp";
import debinImg from "../../assets/debin.webp";
import rajagopalImg from "../../assets/rajagopal.webp";
import anbuImg from "../../assets/anbu.webp";

const images = [
  { src: fennyImg, name: "Fenny" },
  { src: ramyaImg, name: "Ramya" },
  { src: samImg, name: "Samhitha" },
  { src: snegaImg, name: "Snega" },
  { src: saiImg, name: "Sai" },
  { src: debinImg, name: "Debin" },
  { src: rajagopalImg, name: "Rajagopal" },
  { src: anbuImg, name: "Anbu" },
];

const imageWidth = 220;
const imageHeight = 300;
const spacing = 50; // Space between items
const amplitude = 100; // Curve height

const HorizontalCurvedCarousel = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let animationId;
    const speed = 1;

    const animate = () => {
      setScrollPosition(prev => {
        const totalWidth = (images.length * (imageWidth + spacing));
        return (prev + speed) % totalWidth;
      });
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="bg-[#170f24] py-20 px-4 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">Meet <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">Our Team</span></h2>
        <p className="text-lg text-purple-300 italic">
          A dynamic blend of creativity and professionalism
        </p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full h-[400px] overflow-visible"
      >
        {images.map((member, index) => {
          // Calculate horizontal position with infinite scroll
          const totalWidth = images.length * (imageWidth + spacing);
          const x = (index * (imageWidth + spacing) - scrollPosition + totalWidth) % totalWidth;
          
          // Calculate vertical position using sine wave for curve
          const normalizedX = (x / containerWidth) * Math.PI * 2;
          const y = Math.sin(normalizedX) * amplitude;
          
          // Calculate scale based on position (center = larger)
          const scale = 0.8 + 0.4 * Math.cos(normalizedX);
          
          // Calculate opacity based on position
          const opacity = 0.7 + 0.3 * (1 - Math.abs(Math.sin(normalizedX)));

          return (
            <div
              key={index}
              className="absolute w-[220px] h-[300px] rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 ease-out"
              style={{
                left: `${x}px`,
                top: `calc(50% + ${y}px)`,
                transform: `translateY(-50%) scale(${scale})`,
                zIndex: Math.round(scale * 100),
                opacity: opacity,
                backgroundColor: "#2e1e4e",
                boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
              }}
            >
              <img
                src={member.src}
                alt={member.name}
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent text-white text-center py-3 font-semibold text-lg tracking-wide">
                {member.name}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HorizontalCurvedCarousel;