"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

const services = [
  {
    title: "Maternal Care",
    img: "/images/maternity/maternal-care.png",
    color: "from-violet-500 to-purple-700",
  },
  {
    title: "High Risk Pregnancy Care",
    img: "/images/maternity/high-risk-pregnancy.png",
    color: "from-red-500 to-red-700",
  },
  {
    title: "MR Guided Ultrasound",
    img: "/images/maternity/mr-guided-ultrasound.png",
    color: "from-blue-500 to-indigo-700",
  },
  {
    title: "Neonatal ICU",
    img: "/images/maternity/neonatal-icu.png",
    color: "from-amber-500 to-orange-700",
  },
];

export default function MaternityCare() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-10">
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              <Heart size={13} fill="currentColor" /> Department of Obstetrics &amp; Gynaecology
            </div>
          </div>
          <h2 className="section-heading">Maternity Care</h2>
          <span className="section-heading-line" />
          <p className="section-subheading">
            We have a pool of best doctors from some of the best Medical colleges of India.
            Our Department of Obstetrics &amp; Gynaecology is probably the best for the city and surrounding areas.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {services.map((svc, idx) => (
            <div
              key={svc.title}
              className="maternity-card group relative rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative h-[160px] sm:h-[180px] md:h-[220px] overflow-hidden">
                <Image
                  src={svc.img}
                  alt={svc.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    hovered === idx ? "scale-110 brightness-110" : "scale-100"
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${svc.color} transition-opacity duration-500 ${
                  hovered === idx ? "opacity-40" : "opacity-0"
                }`} />
              </div>

              {/* Title bar */}
              <div className={`relative bg-gradient-to-r ${svc.color} px-3 sm:px-5 py-2.5 sm:py-3 transition-all duration-500 ${
                hovered === idx ? "py-3 sm:py-4" : ""
              }`}>
                <h3 className="text-white font-bold text-xs sm:text-sm md:text-base text-center">
                  {svc.title}
                </h3>
              </div>

              {/* Subtle border glow on hover */}
              <div className={`absolute inset-0 rounded-2xl ring-2 transition-all duration-300 pointer-events-none ${
                hovered === idx
                  ? "ring-white/40 shadow-[0_0_30px_rgba(236,72,153,0.2)]"
                  : "ring-transparent"
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
