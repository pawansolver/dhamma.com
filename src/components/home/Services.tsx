"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "OPD Services",
    image: "/images/services/opd.png",
  },
  {
    title: "24 X 7 Emergency",
    image: "/images/services/emergency.png",
  },
  {
    title: "ICU (With Ventilator)",
    image: "/images/services/icu.png",
  },
  {
    title: "NICU (With Ventilator)",
    image: "/images/services/nicu.png",
  },
  {
    title: "PICU (With Ventilator)",
    image: "/images/services/picu.png",
  },
  {
    title: "Special Ward",
    image: "/images/services/special-ward.png",
  },
  {
    title: "24 X 7 Pharmacy",
    image: "/images/services/pharmacy.png",
  },
  {
    title: "General Ward",
    image: "/images/services/general-ward.png",
  },
];

export default function Services() {
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const update = () => {
      setVisibleCount(window.innerWidth < 768 ? 2 : 4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.ceil(services.length / visibleCount);

  const next = useCallback(() => {
    setCurrentPage((p) => (p + 1) % totalPages);
  }, [totalPages]);

  const prev = useCallback(() => {
    setCurrentPage((p) => (p - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const startIdx = currentPage * visibleCount;
  const visibleServices = services.slice(startIdx, startIdx + visibleCount);

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6">
        <h2 className="section-heading">Our Services</h2>
        <span className="section-heading-line" />
        <p className="section-subheading">
          Comprehensive healthcare facilities under one roof for complete patient care
        </p>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute -left-2 sm:-left-3 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-1 sm:px-3 md:px-4">
            {visibleServices.map((service) => (
              <div key={service.title} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-[6px] overflow-hidden mb-4 shadow-md border border-gray-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-[#0072CE] font-semibold text-[15px] md:text-[17px] leading-snug group-hover:underline transition-all px-1">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute -right-2 sm:-right-3 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentPage
                  ? "bg-[#0072CE] scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
