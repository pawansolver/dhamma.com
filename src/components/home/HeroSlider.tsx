"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/about-hospital.png",
    title: "World-Class Healthcare",
    subtitle: "State-of-the-art infrastructure with advanced medical technology",
  },
  {
    image: "/hospital_hero_hd.png",
    title: "Expert Medical Team",
    subtitle: "250+ experienced doctors & faculty across 20+ departments",
  },
  {
    image: "/hospital_ot_hd.png",
    title: "Advanced Surgical Care",
    subtitle: "Equipped with modern OT, ICU, NICU & PICU with ventilator support",
  },
  {
    image: "/hospital_icu_hd.png",
    title: "Critical Care Excellence",
    subtitle: "24/7 Intensive Care with advanced life support and continuous monitoring",
  },
  {
    image: "/hospital_interior_hd.png",
    title: "Patient-First Approach",
    subtitle: "Compassionate care with the motto — सेवा परमो धर्म:",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[420px] md:h-[520px] lg:h-[560px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 overflow-hidden transition-opacity duration-[1000ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-[#0f2557]"
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundPosition: "center 32%",
            }}
            role="img"
            aria-label={slide.title}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2557]/80 via-[#0f2557]/50 to-transparent z-[1]" />

      <div className="relative z-[2] h-full w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 flex flex-col justify-center">
        <div className="max-w-xl">
          <h2
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] mb-2 sm:mb-3"
            key={`t-${current}`}
          >
            {slides[current].title}
          </h2>
          <p
            className="text-white/75 text-xs sm:text-base md:text-lg max-w-md mb-4 sm:mb-6 leading-relaxed"
            key={`s-${current}`}
          >
            {slides[current].subtitle}
          </p>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-3 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-[3] w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} className="sm:w-[20px] sm:h-[20px]" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-[3] w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={18} className="sm:w-[20px] sm:h-[20px]" />
      </button>

      <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-[3] flex items-center gap-1.5 sm:gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ${
              i === current
                ? "w-6 sm:w-8 bg-brandSaffron"
                : "w-2 sm:w-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-4 sm:bottom-5 right-4 sm:right-6 md:right-10 z-[3] text-white/50 text-xs sm:text-sm font-mono">
        <span className="text-white font-bold text-base sm:text-lg">{String(current + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
