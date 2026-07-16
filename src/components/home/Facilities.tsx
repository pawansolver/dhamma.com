"use client";

import { AnimatedTabs } from "@/components/ui/animated-tabs";
import type { Tab } from "@/components/ui/animated-tabs";
import {
  FlaskConical,
  Scan,
  BrainCircuit,
  Radio,
  Microscope,
  Syringe,
  HeartPulse,
  Building2,
} from "lucide-react";
import { useState } from "react";

const facilityTabs: Tab[] = [
  {
    id: "pathology",
    label: "Pathology",
    content: (
      <div className="flex gap-4 items-center">
        <img src="/images/facilities/pathology.png" alt="Pathology Lab" className="rounded-xl w-52 h-40 object-cover shadow-lg hidden sm:block flex-shrink-0" />
        <div>
          <div className="flex items-center gap-2 text-brandSaffron mb-2">
            <FlaskConical size={20} />
            <h3 className="text-lg font-bold text-white">Pathology</h3>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Examination of tissues, organs, bodily fluids and autopsies to study and diagnose disease. We offer all types of Blood Tests.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "xray",
    label: "X-Ray",
    content: (
      <div className="flex gap-4 items-center">
        <img src="/images/facilities/xray.png" alt="X-Ray" className="rounded-xl w-52 h-40 object-cover shadow-lg hidden sm:block flex-shrink-0" />
        <div>
          <div className="flex items-center gap-2 text-brandSaffron mb-2">
            <Scan size={20} />
            <h3 className="text-lg font-bold text-white">X-Ray</h3>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Digital X-Ray machines providing high-resolution imaging — chest, skeletal, abdominal, and portable bedside X-rays for critical patients.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "ctscan",
    label: "CT-Scan",
    content: (
      <div className="flex gap-4 items-center">
        <img src="/images/facilities/ctscan.png" alt="CT Scan" className="rounded-xl w-52 h-40 object-cover shadow-lg hidden sm:block flex-shrink-0" />
        <div>
          <div className="flex items-center gap-2 text-brandSaffron mb-2">
            <BrainCircuit size={20} />
            <h3 className="text-lg font-bold text-white">CT-Scan</h3>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Multi-slice CT scanner for rapid cross-sectional imaging of brain, chest, abdomen. Critical for emergency trauma and pre-surgical planning.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "ultrasonography",
    label: "USG",
    content: (
      <div className="flex gap-4 items-center">
        <img src="/images/facilities/ultrasonography.png" alt="Ultrasonography" className="rounded-xl w-52 h-40 object-cover shadow-lg hidden sm:block flex-shrink-0" />
        <div>
          <div className="flex items-center gap-2 text-brandSaffron mb-2">
            <Radio size={20} />
            <h3 className="text-lg font-bold text-white">Ultrasonography</h3>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Non-invasive ultrasound for obstetric, abdominal, cardiac assessments. Color Doppler available for vascular studies.
          </p>
        </div>
      </div>
    ),
  },
];

const showcaseSlides = [
  { title: "Advanced Facilities", img: "/images/facilities/operation-theatre.png", icon: HeartPulse },
  { title: "Modern Classrooms", img: "/images/facilities/classroom.png", icon: Building2 },
  { title: "Diagnostic Lab", img: "/images/facilities/diagnostic-lab.png", icon: Microscope },
  { title: "Blood Bank", img: "/images/facilities/blood-bank.png", icon: Syringe },
];

export default function Facilities() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative py-10 md:py-14 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/about-hospital.png')" }}
      />
      <div className="absolute inset-0 bg-brandBlueDark/90 backdrop-blur-[2px]" />

      <div className="container-custom relative z-10">
        <h2 className="section-heading-white">Facilities</h2>
        <span className="section-heading-line-white" />
        <p className="section-subheading-white">
          World-class diagnostic &amp; treatment infrastructure
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 items-stretch">
          <div className="flex flex-col">
            <AnimatedTabs tabs={facilityTabs} className="flex-1" />
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {showcaseSlides.map((slide, idx) => (
              <button
                key={slide.title}
                onClick={() => setActiveSlide(idx)}
                className={`group relative rounded-xl overflow-hidden h-[110px] sm:h-[130px] md:h-[150px] transition-all duration-400 ${
                  activeSlide === idx
                    ? "ring-2 ring-brandSaffron scale-[1.03]"
                    : "opacity-60 hover:opacity-85"
                }`}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-brandSaffron text-white text-[10px] font-bold flex items-center justify-center">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2.5">
                  <h3 className="text-white font-bold text-[10px] sm:text-xs">{slide.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
