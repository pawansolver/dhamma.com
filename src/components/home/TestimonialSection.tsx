"use client";

import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, Stethoscope } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    rating: 5.0,
    text: "I am deeply grateful for the exceptional support provided by Dhamma Institute of Medical Sciences. With their seamless coordination, I was able to connect with the best doctors for a virtual second opinion consultation. The doctor's expertise and compassionate approach gave me clarity and confidence in my treatment journey. The entire experience from booking to consultation was smooth and reassuring. Thank you for bridging the gap and making world-class healthcare accessible.",
    name: "KABITA SHRESTHA",
    image: "/images/why-choose/patient-centric.png",
  },
  {
    rating: 5.0,
    text: "The medical staff was exceptional. They took my concerns seriously and provided the best care possible. The hospital facilities are truly world-class, and the entire process from admission to discharge was seamless. I couldn't have asked for better care.",
    name: "RAJESH KUMAR",
    image: "/images/why-choose/expert-faculty.png",
  },
  {
    rating: 5.0,
    text: "Outstanding service and very polite staff. The 24x7 emergency response was a lifesaver for my grandfather. The specialists maintained excellent communication throughout the critical phase. Highly recommended.",
    name: "SNEHA GUPTA",
    image: "/images/why-choose/emergency-247.png",
  }
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[activeIndex];

  return (
    <section className="py-16 md:py-24 bg-[#f0f7fd] overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0072CE 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="section-heading text-[#0072CE]">Patient Testimonial</h2>
          <span className="section-heading-line" />
        </div>

        {/* Testimonial Slider Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          
          {/* Main Card */}
          <div className="relative mx-4 sm:mx-10 md:mx-16">
            
            {/* Left Quote */}
            <div className="absolute -top-6 -left-6 sm:-left-12 text-[#FFC107] z-20 hidden sm:block">
              <Quote size={80} fill="currentColor" className="rotate-180 drop-shadow-md" />
            </div>

            {/* Right Quote */}
            <div className="absolute bottom-10 -right-6 sm:-right-12 text-[#0072CE] z-20 hidden sm:block">
              <Quote size={80} fill="currentColor" className="drop-shadow-md" />
            </div>

            {/* Card Content */}
            <div className="relative rounded-[24px] overflow-hidden shadow-2xl flex flex-col bg-white transition-all duration-500 ease-in-out">
              
              {/* Top Half: Blue Background */}
              <div className="bg-[#0072CE] pt-12 pb-20 px-6 sm:px-10 md:px-14 text-white text-justify text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] font-medium relative shadow-inner flex flex-col justify-center min-h-[350px] md:min-h-[280px]">
                <div>"{t.text}"</div>
                
                {/* Overlapping Avatar */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-[50px] z-20 w-[100px] h-[100px] rounded-full bg-[#FFC107] flex items-end justify-center overflow-hidden shadow-lg border-4 border-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-[85%] h-[85%] translate-y-2">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Bottom Half: White Background */}
              <div className="bg-white pt-16 pb-10 px-6 flex flex-col items-center relative">
                
                {/* Stars */}
                <div className="flex gap-1.5 mb-3 text-[#FFC107]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} fill="currentColor" className="text-[#FFC107]" />
                  ))}
                </div>
                
                {/* Name */}
                <h3 className="text-[#0072CE] font-bold text-xl uppercase tracking-widest">{t.name}</h3>

                {/* Stethoscope Decoration */}
                <div className="absolute bottom-0 left-0 text-slate-200/50 -translate-x-4 translate-y-4">
                  <Stethoscope size={140} strokeWidth={1} />
                </div>
              </div>

            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "bg-[#0072CE] w-8" : "bg-[#0072CE]/30 hover:bg-[#0072CE]/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Footer Text */}
        <div className="text-center mt-12">
          <p className="text-gray-700 text-lg sm:text-xl">
            Get second medical opinion<br />
            by the <strong className="text-[#0072CE]">Best Doctors</strong>
          </p>
        </div>

      </div>
    </section>
  );
}
