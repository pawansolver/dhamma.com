import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    name: string;
    href: string;
    icon: React.ElementType;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-5",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <a
            href={item?.href}
            key={item?.name}
            className="relative group block p-1 sm:p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-white/40 block rounded-2xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="aspect-square rounded-lg sm:rounded-xl h-full w-full p-4 sm:p-6 md:p-8 overflow-hidden bg-white shadow-md group-hover:shadow-xl transition-all duration-300 relative z-20 flex flex-col items-center justify-center gap-2 sm:gap-3">
              <Icon
                size={32}
                strokeWidth={1.5}
                className="text-[#0f766e] group-hover:text-[#0d9488] transition-colors sm:group-hover:scale-110"
              />
              <span className="text-[12px] sm:text-[13px] md:text-sm font-semibold text-[#1a1a2e] text-center leading-tight">
                {item.name}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
};
