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
    title: "Expert Faculty",
    desc: "Highly qualified doctors with decades of clinical experience across 20+ departments.",
    icon: Users,
    img: "/images/why-choose/expert-faculty.png",
    btnColor: "bg-blue-500 hover:bg-blue-600",
    borderColor: "border-blue-400/40",
  },
  {
    title: "Modern Infrastructure",
    desc: "State-of-the-art OT, ICU, NICU, PICU, labs and diagnostic imaging.",
    icon: Building2,
    img: "/images/why-choose/modern-infra.png",
    btnColor: "bg-emerald-500 hover:bg-emerald-600",
    borderColor: "border-emerald-400/40",
  },
  {
    title: "Affordable Care",
    desc: "Quality healthcare accessible to all at reasonable costs with insurance support.",
    icon: HeartPulse,
    img: "/images/why-choose/affordable-care.png",
    btnColor: "bg-rose-500 hover:bg-rose-600",
    borderColor: "border-rose-400/40",
  },
  {
    title: "Academic Excellence",
    desc: "MBBS, PG, Nursing & Paramedical programs with NMC approved curriculum.",
    icon: GraduationCap,
    img: "/images/why-choose/academic-excellence.png",
    btnColor: "bg-violet-500 hover:bg-violet-600",
    borderColor: "border-violet-400/40",
  },
  {
    title: "24x7 Emergency",
    desc: "Round-the-clock emergency, ambulance, trauma center & blood bank.",
    icon: Ambulance,
    img: "/images/why-choose/emergency-247.png",
    btnColor: "bg-red-500 hover:bg-red-600",
    borderColor: "border-red-400/40",
  },
  {
    title: "Patient-Centric",
    desc: "Compassionate care with dedicated staff and personalized treatment plans.",
    icon: ShieldPlus,
    img: "/images/why-choose/patient-centric.png",
    btnColor: "bg-amber-500 hover:bg-amber-600",
    borderColor: "border-amber-400/40",
  },
];

const VISIBLE_LG = 4;
const VISIBLE_SM = 2;
const INTERVAL = 3000;

export default function WhyChooseUs() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(VISIBLE_LG);
  const total = reasons.length;

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth >= 1024 ? VISIBLE_LG : VISIBLE_SM);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < visibleCount; i++) {
      cards.push(reasons[(current + i) % total]);
    }
    return cards;
  };

  return (
    <section className="relative py-14 md:py-20 overflow-hidden bg-bgLight">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 bg-brandSaffron/10 text-brandSaffron text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full border border-brandSaffron/20">
              <Award size={14} />
              Centre of Excellence
            </div>
          </div>
          <h2 className="section-heading">Why Choose <span className="text-brandSaffron">BHRI?</span></h2>
          <span className="section-heading-line" />
          <p className="section-subheading">
            With a state of the art technology and infrastructure the institute is well equipped for every treatment and emergency
          </p>
        </div>

        {/* Slider */}
        <div className="relative px-3 sm:px-6 md:px-8 lg:px-12">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden sm:flex w-10 h-10 rounded-full bg-white shadow-lg border border-border items-center justify-center text-brandBlue hover:bg-brandBlue hover:text-white transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden sm:flex w-10 h-10 rounded-full bg-white shadow-lg border border-border items-center justify-center text-brandBlue hover:bg-brandBlue hover:text-white transition"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards */}
          <div className={`grid gap-3 sm:gap-4 md:gap-5 ${visibleCount === VISIBLE_LG ? "grid-cols-4" : "grid-cols-2"}`}>
            {getVisibleCards().map((item) => (
              <div
                key={item.title}
                className={`group bg-[#fff5ee] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border ${item.borderColor} hover:-translate-y-2`}
              >
                {/* Image area */}
                <div className="relative h-40 md:h-44 m-3 rounded-xl overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Centered icon overlay on image */}
                  <div className="absolute inset-0 flex items-end justify-center pb-3 z-10">
                    <div className="w-14 h-14 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center border border-brandSaffron/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-5deg]">
                      <item.icon size={26} className="text-brandBlue" strokeWidth={1.6} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-4 pb-5 px-4 text-center">
                  <h3 className="font-bold text-textmain text-base mb-2 group-hover:text-brandBlue transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-textmain/50 text-xs leading-relaxed mb-4 line-clamp-2 px-1">
                    {item.desc}
                  </p>
                  <button className={`text-xs font-bold text-white ${item.btnColor} px-5 py-2 rounded-md transition shadow-sm hover:shadow-md`}>
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {reasons.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === current
                  ? "w-8 h-2.5 bg-brandSaffron"
                  : "w-2.5 h-2.5 bg-brandBlue/20 hover:bg-brandBlue/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
