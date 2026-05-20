"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ChevronRight, Calendar } from "lucide-react";

const galleryImages = [
  { src: "/images/facilities/classroom.png", alt: "Modern Classrooms" },
  { src: "/images/facilities/operation-theatre.png", alt: "Advanced OT" },
  { src: "/images/facilities/hospital-building.png", alt: "Main Campus" },
  { src: "/images/facilities/diagnostic-lab.png", alt: "Diagnostic Lab" },
];

const latestUpdates = [
  {
    day: "15",
    month: "MAY",
    year: "2026",
    title: "MBBS Admissions 2026-27 open — Apply online now through NMC counselling portal.",
    isNew: true,
  },
  {
    day: "10",
    month: "MAY",
    year: "2026",
    title: "Free Mega Health Camp successfully conducted — 1200+ patients screened.",
    isNew: true,
  },
  {
    day: "28",
    month: "APR",
    year: "2026",
    title: "New MRI Machine installed — advanced 1.5T imaging now available 24x7.",
    isNew: false,
  },
  {
    day: "20",
    month: "APR",
    year: "2026",
    title: "BHRI signed MoU with AIIMS Patna for academic exchange and research collaboration.",
    isNew: false,
  },
  {
    day: "8",
    month: "APR",
    year: "2026",
    title: "World Health Day celebrated with awareness rally and free BP/sugar check-up camp.",
    isNew: false,
  },
];

export default function CampusLife() {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <section className="relative bg-bgLight py-12 md:py-16 overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="section-heading">Welcome to Life at Our Campus</h2>
          <span className="section-heading-line" />
          <p className="section-subheading">
            World-class facilities and expertise dedicated to advancing medical science and patient care
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 items-start">
          {/* LEFT — Campus Gallery (3 cols) */}
          <div className="lg:col-span-3">
            {/* Main Image / Video */}
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-xl">
              <Image
                src={galleryImages[activeImg].src}
                alt={galleryImages[activeImg].alt}
                width={800}
                height={450}
                className="w-full h-[200px] sm:h-[280px] md:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40 group-hover:scale-110 transition-transform">
                  <Play size={24} className="text-white ml-1" fill="white" />
                </div>
              </div>

              {/* Bottom info bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Image src="/logo.png" alt="BHRI" width={28} height={28} className="rounded-full" />
                    <span className="text-white/80 text-xs font-semibold">Buddha Hospital &amp; Research Institute, Gaya</span>
                  </div>
                  <h3 className="text-white font-bold text-sm md:text-base">{galleryImages[activeImg].alt}</h3>
                </div>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-1.5 sm:gap-2 mt-2 sm:mt-3">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`relative rounded-lg overflow-hidden flex-1 h-[50px] sm:h-[60px] md:h-[72px] transition-all duration-300 ${activeImg === idx
                      ? "ring-2 ring-brandSaffron scale-[1.03]"
                      : "opacity-50 hover:opacity-80"
                    }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Latest Updates (2 cols) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
              {/* Header */}
              <div className="bg-brandBlue px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between">
                <h3 className="text-white font-extrabold text-sm sm:text-base tracking-wide">Latest Updates</h3>
                <Calendar size={14} className="text-brandSaffron" />
              </div>

              {/* Updates list */}
              <div className="divide-y divide-border">
                {latestUpdates.map((update, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3.5 hover:bg-bgLight transition-colors group cursor-pointer"
                  >
                    {/* Date badge */}
                    <div className="flex-shrink-0 w-12 sm:w-14 text-center">
                      <span className="block text-lg sm:text-xl font-extrabold text-brandBlue leading-none">
                        {update.day}<sup className="text-[9px] font-bold">th</sup>
                      </span>
                      <span className="block text-[8px] sm:text-[10px] font-bold text-textmain/40 uppercase tracking-wider">
                        {update.month}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] sm:text-xs text-textmain/80 leading-relaxed line-clamp-2 group-hover:text-brandBlue transition-colors">
                        {update.title}
                      </p>
                      {update.isNew && (
                        <span className="inline-block mt-1 text-[8px] font-extrabold text-red-500 bg-red-50 px-1.5 py-0.5 rounded uppercase tracking-wider">
                          New
                        </span>
                      )}
                    </div>

                    <ChevronRight size={14} className="flex-shrink-0 text-textmain/20 group-hover:text-brandBlue transition-colors mt-0.5" />
                  </div>
                ))}
              </div>

              {/* View all link */}
              <div className="px-4 py-3 bg-bgLight border-t border-border">
                <a href="/#" className="text-xs font-bold text-brandBlue hover:text-brandSaffron transition flex items-center gap-1">
                  View All Notices <ChevronRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
