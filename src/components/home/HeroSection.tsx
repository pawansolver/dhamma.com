"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[50vh] min-h-[350px] bg-[#cde4f7] overflow-hidden group">
      
      {/* Main Single Static Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/images/herrroo/gfs.png"
          alt="Dhamma Superspeciality Hospital"
          fill
          priority
          className="object-fill w-full h-full"
        />
      </div>


    </section>
  );
}