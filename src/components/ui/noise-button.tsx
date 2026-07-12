"use client";

import { cn } from "@/lib/utils";
import { NoiseBackground } from "@/components/ui/noise-background";
import { ReactNode } from "react";

interface NoiseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  containerClassName?: string;
  gradientColors?: string[];
  as?: React.ElementType;
  href?: string;
}

export function NoiseButton({
  children,
  className,
  containerClassName,
  gradientColors,
  as: Component = "button",
  href,
  ...props
}: NoiseButtonProps) {
  const isLink = typeof href !== "undefined" || Component !== "button";
  const InnerComponent = isLink ? (Component as any) : "button";

  return (
    <NoiseBackground
      containerClassName={cn("w-fit p-[2px] rounded-full inline-block", containerClassName)}
      gradientColors={gradientColors || [
        "rgb(15, 118, 110)", // Teal 600
        "rgb(20, 184, 166)", // Teal 500
        "rgb(251, 191, 36)", // Amber 400
      ]}
    >
      <InnerComponent
        href={href}
        className={cn(
          "h-full w-full flex items-center justify-center gap-2 cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-6 py-2.5 !text-red-600 font-bold shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-95 dark:from-black dark:via-black dark:to-neutral-900 dark:!text-red-500 dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]",
          className
        )}
        {...props}
      >
        {children}
      </InnerComponent>
    </NoiseBackground>
  );
}
