'use client'

import { useRef } from "react";
import Image from "next/image";

export default function ProgramsCarousel() {
  const scrollRef = useRef(null);

  const programs = [
    { src: "/ai.jpg", title: "Certificate in AI" },
    { src: "/r.png", title: "Certificate in Robotics" },
    { src: "/pr.jpg", title: "Project Management with AI" },
    { src: "/j.jpg", title: "Certificate in Java" },
    { src: "/p.jpg", title: "Certificate in Python" },
    { src: "/eng.jpg", title: "Certificate in Engineering Fundamentals" },
    { src: "/elec.jpg", title: "Certificate in Electronics" },
    { src: "/k.jpg", title: "Certificate in AI & Robotics" },
    { src: "/pe.jpg", title: "Certificate in Professional English" },
    { src: "/de.jpg", title: "Diploma in Engineering" },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 relative">
      <h2 className="text-3xl font-bold text-white text-center mb-10">Explore Our Programs</h2>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 z-10 hover:bg-opacity-80"
        aria-label="Scroll Left"
      >
        &#8592;
      </button>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth py-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {programs.map((program, i) => (
          <div
            key={i}
            className="min-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden relative flex-shrink-0"
          >
            <Image
              src={program.src}
              alt={program.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2 text-center rounded-b-xl">
              <h3 className="text-white text-sm font-semibold">{program.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 z-10 hover:bg-opacity-80"
        aria-label="Scroll Right"
      >
        &#8594;
      </button>
    </div>
  );
}
