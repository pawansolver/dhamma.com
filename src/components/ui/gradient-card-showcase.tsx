import React from "react";
import type { LucideIcon } from "lucide-react";

interface SkewCard {
  title: string;
  desc: string;
  gradientFrom: string;
  gradientTo: string;
  icon?: LucideIcon;
}

interface SkewCardsProps {
  cards: SkewCard[];
}

export default function SkewCards({ cards }: SkewCardsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
      {cards.map(({ title, desc, gradientFrom, gradientTo, icon: Icon }, idx) => (
        <div
          key={idx}
          className="skew-card group relative h-[220px] md:h-[240px] transition-all duration-500"
        >
          {/* Skewed gradient panel */}
          <span
            className="absolute top-0 left-[24px] w-[55%] h-full rounded-xl transform skew-x-[12deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[8px] group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})` }}
          />
          {/* Blurred glow */}
          <span
            className="absolute top-0 left-[24px] w-[55%] h-full rounded-xl transform skew-x-[12deg] blur-[20px] opacity-60 transition-all duration-500 group-hover:skew-x-0 group-hover:left-[8px] group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})` }}
          />

          {/* Floating blobs */}
          <span className="pointer-events-none absolute inset-0 z-10">
            <span className="absolute top-0 left-0 w-0 h-0 rounded-xl opacity-0 bg-white/10 backdrop-blur-sm shadow-md transition-all duration-300 skew-blob group-hover:top-[-24px] group-hover:left-[24px] group-hover:w-[48px] group-hover:h-[48px] group-hover:opacity-100" />
            <span className="absolute bottom-0 right-0 w-0 h-0 rounded-xl opacity-0 bg-white/10 backdrop-blur-sm shadow-md transition-all duration-500 skew-blob skew-blob-delay group-hover:bottom-[-24px] group-hover:right-[24px] group-hover:w-[48px] group-hover:h-[48px] group-hover:opacity-100" />
          </span>

          {/* Content */}
          <div className="relative z-20 left-0 h-full flex flex-col items-center justify-center gap-2 p-5 bg-white/[0.06] backdrop-blur-md shadow-xl rounded-xl text-white transition-all duration-500 group-hover:left-[-12px] group-hover:p-6">
            {Icon && (
              <div className="w-12 h-12 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-5deg]">
                <Icon size={24} strokeWidth={1.8} />
              </div>
            )}
            <h2 className="text-sm md:text-base font-bold text-center leading-tight">{title}</h2>
            <p className="text-xs leading-relaxed text-white/70 text-center line-clamp-2">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
