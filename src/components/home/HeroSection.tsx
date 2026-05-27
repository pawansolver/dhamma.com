"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { SparkleButton } from "@/components/ui/button-8";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imageSlides = [
  {
    image: "/images/hero/hero-1.png",
    title: "World-Class Healthcare",
    subtitle: "State-of-the-art infrastructure with advanced medical technology",
  },
  {
    image: "/images/hero/hero-2.png",
    title: "Expert Medical Team",
    subtitle: "250+ experienced doctors & faculty across 20+ departments",
  },
  {
    image: "/images/hero/hero-3.png",
    title: "Advanced Surgical Care",
    subtitle: "Equipped with modern OT, ICU, NICU & PICU with ventilator support",
  },
  {
    image: "/images/hero/hero-4.png",
    title: "Patient-First Approach",
    subtitle: "Compassionate care with the motto — सेवा परमो धर्म:",
  },
];

const TOTAL = 1 + imageSlides.length;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % TOTAL);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + TOTAL) % TOTAL);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">

      {/* ── Slide 0: Light theme static hero ── */}
      <div
        className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out bg-[#eef4fb]"
        style={{ opacity: current === 0 ? 1 : 0, zIndex: current === 0 ? 2 : 1 }}
      >
        {/* Decorative bg shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full border-2 border-brandBlue/10" />
          <div className="absolute -top-10 -right-10 w-[350px] h-[350px] rounded-full border border-brandBlue/[0.06]" />
          <div className="absolute bottom-10 left-[5%] w-[200px] h-[200px] rounded-full bg-brandBlue/[0.04]" />
          <div className="absolute top-[20%] left-[30%] w-3 h-3 rounded-full bg-brandBlue/10" />
          <div className="absolute top-[60%] left-[15%] w-2 h-2 rounded-full bg-brandSaffron/15" />
          <div className="absolute bottom-[30%] right-[40%] w-2.5 h-2.5 rounded-full bg-brandGreen/10" />
          <svg className="absolute bottom-0 left-0 w-full h-16 opacity-[0.05]" viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none">
            <path d="M0 32 L200 32 L220 8 L240 56 L260 16 L280 48 L300 32 L600 32 L620 10 L640 54 L660 18 L680 46 L700 32 L1440 32" stroke="#1a3a6b" strokeWidth="2.5" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 h-full w-full max-w-[1440px] mx-auto px-10 sm:px-14 md:px-16 lg:px-10 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10 pt-24 pb-20 sm:pt-20 lg:py-6">
          
          {/* Logo is now visible on mobile, positioned neatly */}
          <div className="flex-shrink-0 relative order-first lg:order-last mb-2 lg:mb-0">
            <div className="absolute -inset-2 lg:-inset-4 rounded-full border-2 border-dashed border-brandBlue/10 animate-[spin_40s_linear_infinite]" />
            <Image
              src="/logo.png"
              alt="BHRI Logo"
              width={220}
              height={220}
              priority
              className="drop-shadow-xl relative z-10 w-24 h-24 sm:w-28 sm:h-28 lg:w-[220px] lg:h-[220px] object-contain"
            />
          </div>

          <div className="flex-1 text-center lg:text-left mt-2 lg:mt-0">
            <p className="text-brandBlue font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-3 flex items-center gap-2 justify-center lg:justify-start">
              <span className="w-2 h-2 rounded-full bg-brandSaffron inline-block" />
              सेवा परमो धर्म:
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3 md:mb-5 text-[#1a1a2e]">
              Welcome to <br className="hidden lg:block" />
              <span className="text-brandBlue">Buddha Hospital</span>{" "}
              <br className="block lg:hidden" />
              &amp; Research Institute
            </h1>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mb-6 mx-auto lg:mx-0 leading-relaxed">
              A premier healthcare and medical education institution in Gaya, Bihar —
              delivering compassionate care with modern infrastructure and expert faculty.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
              <SparkleButton href="#about-section">Explore More</SparkleButton>
              <SparkleButton href="/contact">Contact Us</SparkleButton>
            </div>
          </div>
        </div>
      </div>

      {/* ── Slides 1-4: Full image slides with light overlay ── */}
      {imageSlides.map((slide, i) => {
        const slideIdx = i + 1;
        return (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
            style={{ opacity: current === slideIdx ? 1 : 0, zIndex: current === slideIdx ? 2 : 1 }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              className="object-fill"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white/90 via-white/70 md:via-white/40 to-transparent" />
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              <div className="absolute -top-16 -right-16 w-[350px] h-[350px] rounded-full border-2 border-brandBlue/10" />
              <div className="absolute bottom-8 left-[8%] w-[150px] h-[150px] rounded-full bg-brandBlue/[0.05]" />
            </div>
            
            <div className="relative z-10 h-full w-full max-w-[1440px] mx-auto px-10 sm:px-14 md:px-16 lg:px-10 flex flex-col justify-center text-center md:text-left items-center md:items-start pt-16 md:pt-0">
              <div className="max-w-xl">
                <p className="text-brandBlue font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-3 flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-brandSaffron inline-block" />
                  Buddha Hospital &amp; Research Institute
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] leading-[1.2] md:leading-[1.1] mb-3 md:mb-4">
                  {slide.title}
                </h2>
                <p className="text-gray-700 md:text-gray-600 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* ── Navigation arrows ── */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-brandBlue/10 backdrop-blur-sm border border-brandBlue/20 flex items-center justify-center text-brandBlue hover:bg-brandBlue hover:text-white transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="sm:w-[22px] sm:h-[22px]" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-brandBlue/10 backdrop-blur-sm border border-brandBlue/20 flex items-center justify-center text-brandBlue hover:bg-brandBlue hover:text-white transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="sm:w-[22px] sm:h-[22px]" />
      </button>

      {/* ── Dot indicators ── */}
      {/* Shifted up to avoid bottom strip on mobile */}
      <div className="absolute bottom-[80px] sm:bottom-[70px] lg:bottom-16 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 sm:gap-2">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
              i === current ? "w-6 sm:w-8 bg-brandBlue" : "w-2 sm:w-3 bg-brandBlue/25 hover:bg-brandBlue/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Slide counter ── */}
      {/* Shifted up as well */}
      <div className="absolute bottom-[76px] sm:bottom-[66px] lg:bottom-[60px] right-4 lg:right-10 z-10 text-gray-500 text-xs sm:text-sm font-mono">
        <span className="text-brandBlue font-bold text-base sm:text-lg">{String(current + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        <span>{String(TOTAL).padStart(2, "0")}</span>
      </div>

      {/* ── Bottom service strip ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-gradient-to-r from-brandBlue to-brandBlueDark">
          <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-10 py-3 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-6 lg:gap-12 text-white text-[11px] sm:text-[12px] lg:text-[13px]">
            <span className="flex items-center gap-1.5 sm:gap-2 font-semibold">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400" />
              24x7 Emergency
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2 font-semibold">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brandSaffron" />
              Free OPD
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2 font-semibold">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400" />
              250+ Doctors
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2 font-semibold">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400" />
              800+ Beds
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}