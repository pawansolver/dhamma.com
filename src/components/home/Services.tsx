"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, BriefcaseMedical, Dna, Activity, Stethoscope, Pill, Landmark } from "lucide-react";

const services = [
  {
    title: "Urology",
    description: "Expert urological care for kidney, bladder, and male reproductive health.",
    icon: BriefcaseMedical,
  },
  {
    title: "Neuro Surgery",
    description: "Advanced surgical care for complex neurological conditions with precision and expertise.",
    icon: Dna,
  },
  {
    title: "Rheumatology",
    description: "Comprehensive care for autoimmune and joint diseases to reduce inflammation.",
    icon: BriefcaseMedical,
  },
  {
    title: "Obs. & Gynae.",
    description: "Comprehensive care for women's health, including pregnancy, fertility, and wellness.",
    icon: Activity,
  },
  {
    title: "Gastroenterology",
    description: "Digestive health services for GI disorders with endoscopic and surgical solutions.",
    icon: BriefcaseMedical,
  },
  {
    title: "Pediatric",
    description: "Comprehensive child healthcare from newborns to adolescents, focusing on wellness.",
    icon: Stethoscope,
  },
  {
    title: "Plastic Surgery",
    description: "Aesthetic and reconstructive surgery for facial, body, and hand conditions.",
    icon: Activity,
  },
  {
    title: "General Medicine",
    description: "Primary healthcare managing chronic and acute diseases with personalized care.",
    icon: Pill,
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4 md:gap-6 px-1 sm:px-3 md:px-4">
            {visibleServices.map((service) => (
              <div 
                key={service.title} 
                className="group cursor-pointer bg-[#c2ebe5] relative p-5 md:p-6 aspect-square flex flex-col justify-between border-b-[8px] border-[#009b9b] overflow-hidden transition-colors hover:bg-[#b0dfd8]"
              >
                {/* Watermark Icon */}
                <Landmark strokeWidth={1} className="absolute -bottom-4 -left-4 w-28 h-28 text-white/40 z-0 pointer-events-none" />
                
                {/* Content */}
                <div className="relative z-10 w-11/12">
                  <h3 className="text-[#111111] font-semibold text-[17px] md:text-[19px] leading-snug mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#111111]/80 text-[13px] leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
                
                {/* Arrow */}
                <div className="w-full flex justify-end relative z-10">
                  <ArrowRight strokeWidth={1.5} className="w-6 h-6 text-[#111111] transition-transform duration-300 group-hover:translate-x-2" />
                </div>
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
