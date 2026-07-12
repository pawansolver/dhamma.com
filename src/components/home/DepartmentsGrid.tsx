"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Stethoscope,
  HeartPulse,
  Brain,
  Baby,
  Eye,
  Bone,
  Syringe,
  Activity,
  Droplets,
  Microscope,
  Scissors,
  Stethoscope as DefaultIcon,
  type LucideIcon,
} from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Dept = { icon: LucideIcon; name: string; href: string };

const initialDepartments: Dept[] = [
  { icon: Activity, name: "All Services", href: "/departments" },
  { icon: HeartPulse, name: "Cardiology", href: "/departments/cardiology" },
  { icon: Brain, name: "Neuro Surgery", href: "/departments/neuro-surgery" },
  { icon: Droplets, name: "Nephrology", href: "/departments/nephrology" },
  { icon: Bone, name: "Orthopedic", href: "/departments/orthopaedics" },
  { icon: Syringe, name: "Urology", href: "/departments/urology" },
  { icon: Stethoscope, name: "General Medicine", href: "/departments/general-medicine" },
  { icon: Brain, name: "Neurology", href: "/departments/neurology" },
  { icon: Baby, name: "Obs. & Gynae.", href: "/departments/obstetrics-gynecology" },
  { icon: Scissors, name: "General Surgery", href: "/departments/general-surgery" },
];

const moreDepartments: Dept[] = [
  { icon: Activity, name: "Rheumatology", href: "/departments/rheumatology" },
  { icon: Baby, name: "Pediatric", href: "/departments/paediatrics" },
  { icon: Scissors, name: "Plastic Surgery", href: "/departments/plastic-surgery" },
  { icon: Microscope, name: "Gastroenterology", href: "/departments/gastroenterology" },
  { icon: Eye, name: "Ophthalmology", href: "/departments/ophthalmology" },
];

export default function DepartmentsGrid() {
  const [showMore, setShowMore] = useState(false);

  const allDepts = showMore ? [...initialDepartments, ...moreDepartments] : initialDepartments;

  return (
    <section className="py-12 sm:py-14 md:py-20 bg-gradient-to-r from-[#cda34f] via-[#fdf1ad] to-[#c19a40]">
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-2 text-center">
          Our Departments
        </h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-6 rounded-full" />
        <p className="text-white/90 text-center max-w-2xl mx-auto mb-10 md:mb-12 text-sm md:text-base">
          Specialized care across all major medical disciplines
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {allDepts.map((dept) => (
            <Link
              key={dept.name}
              href={dept.href}
              className="flex flex-col items-center justify-center gap-2 sm:gap-3 bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[130px] sm:min-h-[140px]"
            >
              <dept.icon
                size={32}
                strokeWidth={1.5}
                className="text-[#0f766e] group-hover:text-[#0d9488] transition-colors sm:group-hover:scale-110"
              />
              <span className="text-[12px] sm:text-[13px] md:text-sm font-semibold text-[#1a1a2e] text-center leading-tight">
                {dept.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 px-5 sm:px-7 py-2 sm:py-3 bg-white text-[#0f766e] font-bold text-xs sm:text-sm rounded-full hover:bg-white/90 transition-all shadow-lg"
          >
            {showMore ? (
              <>Show Less <ChevronUp size={16} /></>
            ) : (
              <>View More Departments <ChevronDown size={16} /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
