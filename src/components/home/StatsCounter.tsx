"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Departments" },
  { value: 150, suffix: "+", label: "Expert Doctors" },
  { value: 500, suffix: "+", label: "Beds Capacity" },
  { value: 50000, suffix: "+", label: "Patients Treated" },
  { value: 10, suffix: "+", label: "Years of Excellence" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
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

  const display = target >= 1000 ? `${(count / 1000).toFixed(count >= target ? 0 : 1)}K` : count;

  return (
    <div ref={ref} className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
      {display}{suffix}
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/stats-bg.png')" }}
      />
      <div className="absolute inset-0 bg-[#1a3a6b]/80" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 py-10 sm:py-14 md:py-20">
        <div className="flex flex-wrap justify-center items-center">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-10 lg:px-14 py-3 sm:py-4">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                <p className="text-white/70 text-xs sm:text-sm md:text-base font-medium mt-1.5 sm:mt-2 tracking-wide">
                  {stat.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block w-px h-16 bg-white/25" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
