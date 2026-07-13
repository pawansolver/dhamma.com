"use client";

import { useRef, useEffect } from "react";
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
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

type Dept = { icon: LucideIcon; name: string; href: string };

const allDepts: Dept[] = [
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
  { icon: Activity, name: "Rheumatology", href: "/departments/rheumatology" },
  { icon: Baby, name: "Pediatric", href: "/departments/paediatrics" },
  { icon: Scissors, name: "Plastic Surgery", href: "/departments/plastic-surgery" },
  { icon: Microscope, name: "Gastroenterology", href: "/departments/gastroenterology" },
  { icon: Eye, name: "Ophthalmology", href: "/departments/ophthalmology" },
];

export default function DepartmentsGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If we've reached the end of the scroll container
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          // Loop back to the start
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise, scroll right automatically
          scroll('right');
        }
      }
    }, 3500); // Slide every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-10 border-b pb-4">
          <h2 className="text-2xl md:text-3xl lg:text-[32px] font-medium text-[#1A202C]">
            Speciality
          </h2>
          <Link 
            href="/departments" 
            className="text-orange-500 font-medium hover:text-orange-600 transition-colors pb-1"
          >
            View all
          </Link>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {allDepts.map((dept, idx) => (
              <Link
                key={idx}
                href={dept.href}
                className="flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] snap-start group"
              >
                <div className="bg-white rounded-xl p-5 sm:p-6 h-[180px] sm:h-[200px] flex flex-col items-center text-center justify-center border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#003B5C] flex items-center justify-center mb-4 text-white shadow-md group-hover:scale-110 group-hover:bg-[#002842] transition-all duration-300">
                    <dept.icon size={28} strokeWidth={2} />
                  </div>
                  <h3 className="text-[#333] font-medium text-[13px] sm:text-[14px] leading-snug">
                    {dept.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-4 mt-2">
          <button 
            onClick={() => scroll('left')}
            className="text-[#d87c53] hover:text-[#c4683f] transition-colors p-2"
            aria-label="Scroll left"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="text-[#d87c53] hover:text-[#c4683f] transition-colors p-2"
            aria-label="Scroll right"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>
        </div>
        
      </div>
    </section>
  );
}
