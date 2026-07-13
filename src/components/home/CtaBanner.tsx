"use client";

import { Phone } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { NoiseButton } from "@/components/ui/noise-button";
import Link from "next/link";
import Image from "next/image";

export default function CtaBanner() {
  const { openBooking } = useBooking();

  return (
    <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact_doctor.png"
          alt="Healthcare Assistance"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Glassy Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0072CE]/85 via-[#FFC107]/70 to-[#E63946]/85 backdrop-blur-md"></div>

      <div className="container-custom text-center relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 !text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          Need Medical Assistance?
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto drop-shadow-md text-white/95 font-medium">
          Our team is available 24/7 to provide you with the best healthcare services. Contact us today or book an appointment online.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <NoiseButton as={Link} href="/hospital/emergency">
            Emergency Helpline
          </NoiseButton>
          <NoiseButton onClick={openBooking}>
            Book OPD
          </NoiseButton>
        </div>
      </div>
    </section>
  );
}
