"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="group relative h-[220px] w-full overflow-hidden bg-[#cde4f7] min-[400px]:h-[250px] sm:h-[320px] md:h-[50vh] md:min-h-[350px]">
      
      {/* Main Single Static Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/images/herrroo/gfs.png"
          alt="Dhamma Institute of Medical Sciences"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-[68%_center] md:object-fill md:object-center"
        />
      </div>


    </section>
  );
}