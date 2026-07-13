"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Users,
  Building2,
  HeartPulse,
  GraduationCap,
  Ambulance,
  ShieldPlus,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const reasons = [
  {
    title: "Not Just Better Care, But A Better Experience",
    desc: "At our medical center, we believe in providing not just better care but a better experience overall. We understand that your journey to health.",
    icon: ShieldPlus,
    linkText: "Learn More",
  },
  {
    title: "Serving All People Through Exemplary Care",
    desc: "At our medical center, we believe in providing not just better care but a better experience overall. We understand that your journey to health.",
    icon: HeartPulse,
    linkText: "Learn More",
  },
  {
    title: "Specialty Medicine with Compassion and Care",
    desc: "At our medical center, we believe in providing not just better care but a better experience overall. We understand that your journey to health.",
    icon: Users,
    linkText: "Learn More",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#003B5C] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">

        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-brandSaffron font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4">
            WHY CHOOSE DHAMMA SUPERSPECIALITY HOSPITAL
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white mb-6 tracking-tight leading-tight">
            We Are Different To Protect Your Health
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-md p-8 md:p-10 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-5 text-[#003B5C]">
                <item.icon size={48} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-[#003B5C] text-xl md:text-[22px] font-medium mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-[15px] leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>

              {/* Button */}
              <button className="w-full border-2 border-[#003B5C] text-[#003B5C] font-semibold py-3 px-6 rounded hover:bg-[#003B5C] hover:text-white transition-colors duration-300 text-[15px]">
                {item.linkText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
