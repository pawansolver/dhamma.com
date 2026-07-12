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
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { NoiseButton } from "@/components/ui/noise-button";

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

        <HoverEffect items={allDepts} />

        <div className="text-center mt-6 sm:mt-8">
          <NoiseButton
            onClick={() => setShowMore(!showMore)}
            className="text-black"
          >
            {showMore ? (
              <>Show Less <ChevronUp size={16} className="ml-1 inline" /></>
            ) : (
              <>View More Departments <ChevronDown size={16} className="ml-1 inline" /></>
            )}
          </NoiseButton>
        </div>
      </div>
    </section>
  );
}
