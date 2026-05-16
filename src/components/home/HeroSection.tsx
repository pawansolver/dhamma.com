import Image from "next/image";
import { SparkleButton } from "@/components/ui/button-8";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brandBlue via-brandBlueDark to-brandBlue text-white">
      <div className="absolute inset-0 bg-[url('/logo.png')] bg-no-repeat bg-center opacity-[0.04] bg-[length:500px]" />
      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center gap-10 py-16 md:py-24">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-brandSaffron font-bold text-sm uppercase tracking-widest mb-3">
            सेवा परमो धर्म:
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
            Welcome to <br className="hidden md:block" />
            <span className="text-brandSaffronLight">Buddha Hospital</span>{" "}
            &amp; Research Institute
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-8 mx-auto lg:mx-0">
            A premier healthcare and medical education institution in Gaya, Bihar —
            delivering compassionate care with modern infrastructure and expert faculty.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <SparkleButton href="/about">Explore More</SparkleButton>
            <SparkleButton href="/contact">Contact Us</SparkleButton>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="BHRI Logo"
            width={280}
            height={280}
            priority
            className="drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
