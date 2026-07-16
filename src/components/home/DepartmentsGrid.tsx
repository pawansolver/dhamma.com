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
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#fafafa]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="section-heading !text-left !mb-2 !w-auto">
              Speciality
            </h2>
            <span className="section-heading-line !ml-0 !mb-0" />
          </div>
          <Link 
            href="/departments" 
            className="text-[#0072CE] font-normal text-[15px] hover:underline transition-all pb-1 border-b border-transparent"
          >
            View all
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200 mb-10"></div>

        {/* Slider Container */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {allDepts.map((dept, idx) => (
              <Link
                key={idx}
                href={dept.href}
                className="flex-shrink-0 w-[140px] sm:w-[150px] md:w-[160px] snap-start group"
              >
                <div className="bg-white rounded-xl p-5 h-[180px] sm:h-[190px] flex flex-col items-center text-center justify-center border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300">
                  
                  {/* Duotone Icon Matching Screenshot Style */}
                  <div className="mb-5 relative flex items-center justify-center">
                    <dept.icon 
                      size={56} 
                      strokeWidth={1.5} 
                      className="text-[#0072CE] fill-[#FFC107]/80 relative z-10 transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>
                  
                  <h3 className="text-[#333] font-medium text-[13px] sm:text-[14px] leading-tight">
                    {dept.name}
                  </h3>
                  
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button 
            onClick={() => scroll('left')}
            className="text-[#0072CE] hover:text-[#00509E] transition-colors p-1"
            aria-label="Scroll left"
          >
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="text-[#0072CE] hover:text-[#00509E] transition-colors p-1"
            aria-label="Scroll right"
          >
            <ChevronRight size={28} strokeWidth={1.5} />
          </button>
        </div>
        
      </div>
    </section>
  );
}
