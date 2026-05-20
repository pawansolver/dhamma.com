"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Stethoscope,
  HeartPulse,
  Brain,
  Baby,
  Eye,
  Ear,
  Bone,
  Syringe,
  ShieldPlus,
  Microscope,
  FlaskConical,
  Pill,
  Scan,
  Bug,
  Scissors,
  Activity,
  type LucideIcon,
} from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Dept = { icon: LucideIcon; name: string; href: string };

const initialDepartments: Dept[] = [
  { icon: Stethoscope, name: "General Medicine", href: "/departments/general-medicine" },
  { icon: HeartPulse, name: "Obstetrics & Gynecology", href: "/departments/obstetrics-gynecology" },
  { icon: Syringe, name: "General Surgery", href: "/departments/general-surgery" },
  { icon: Baby, name: "Paediatrics", href: "/departments/paediatrics" },
  { icon: Bone, name: "Orthopaedics", href: "/departments/orthopaedics" },
  { icon: Eye, name: "Ophthalmology", href: "/departments/ophthalmology" },
  { icon: Ear, name: "ENT", href: "/departments/ent" },
  { icon: Brain, name: "Psychiatry", href: "/departments/psychiatry" },
  { icon: ShieldPlus, name: "Radiology", href: "/departments/radiology" },
  { icon: Microscope, name: "Pathology", href: "/departments/pathology" },
];

const moreDepartments: Dept[] = [
  { icon: Stethoscope, name: "Anatomy", href: "/departments/anatomy" },
  { icon: FlaskConical, name: "Biochemistry", href: "/departments/biochemistry" },
  { icon: Activity, name: "Physiology", href: "/departments/physiology" },
  { icon: Pill, name: "Pharmacology", href: "/departments/pharmacology" },
  { icon: Bug, name: "Microbiology", href: "/departments/microbiology" },
  { icon: ShieldPlus, name: "Community Medicine", href: "/departments/community-medicine" },
  { icon: Scan, name: "Forensic Medicine", href: "/departments/forensic-medicine" },
  { icon: Scissors, name: "Anaesthesiology", href: "/departments/anaesthesiology" },
  { icon: ShieldPlus, name: "Dermatology", href: "/departments/dermatology" },
  { icon: Syringe, name: "Dentistry", href: "/departments/dentistry" },
];

export default function DepartmentsGrid() {
  const [showMore, setShowMore] = useState(false);

  const allDepts = showMore ? [...initialDepartments, ...moreDepartments] : initialDepartments;

  return (
    <section className="py-12 sm:py-14 md:py-20 bg-gradient-to-br from-[#0d9488] via-[#0f766e] to-[#115e59]">
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6">
        <h2 className="section-heading-white">Our Departments</h2>
        <span className="section-heading-line-white" />
        <p className="section-subheading-white">
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
