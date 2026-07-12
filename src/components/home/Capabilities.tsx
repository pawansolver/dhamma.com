"use client";

import { useEffect, useRef, useState } from "react";
import { Stethoscope, Ambulance, Users, BedDouble } from "lucide-react";

const capabilities = [
  {
    icon: Stethoscope,
    value: "Free OPD",
    label: "9AM - 3PM (Mon - Sat)",
    color: "text-green-400",
  },
  {
    icon: Ambulance,
    value: "24x7",
    label: "Emergency Services",
    color: "text-red-400",
  },
  {
    icon: Users,
    value: 250,
    suffix: "+",
    label: "Expert Faculty & Doctors",
    color: "text-blue-400",
  },
  {
    icon: BedDouble,
    value: 800,
    suffix: "+",
    label: "Bed Multispeciality Hospital",
    color: "text-purple-400",
  },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Capabilities() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/herrroo/gfs.png')" }}
      />
      <div className="absolute inset-0 bg-[#1a3a6b]/80" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-24">
        <h2 className="section-heading-white">Our Capabilities</h2>
        <span className="section-heading-line-white" />
        <p className="section-subheading-white">
          World-class facilities and expertise dedicated to advancing medical science and patient care
        </p>

        <div className="flex flex-wrap justify-center items-center">
          {capabilities.map((cap, i) => (
            <div key={cap.label} className="flex items-center">
              <div className="flex flex-col items-center text-center px-3 sm:px-6 md:px-10 lg:px-14 py-3 sm:py-4">
                <cap.icon size={28} strokeWidth={1.5} className={`${cap.color} mb-2 sm:mb-3`} />
                <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  {typeof cap.value === "number" ? (
                    <AnimatedNumber target={cap.value} suffix={cap.suffix || ""} />
                  ) : (
                    cap.value
                  )}
                </div>
                <p className="text-white/60 text-xs sm:text-sm md:text-base font-medium mt-1.5 sm:mt-2 tracking-wide">
                  {cap.label}
                </p>
              </div>
              {i < capabilities.length - 1 && (
                <div className="hidden sm:block w-px h-20 bg-white/25" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
