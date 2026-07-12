"use client";

import { Phone } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { NoiseButton } from "@/components/ui/noise-button";
import Link from "next/link";

export default function CtaBanner() {
  const { openBooking } = useBooking();

  return (
    <section className="bg-gradient-to-r from-[#0066CC] via-[#FBB03B] to-[#FF0000] text-white py-10 sm:py-14 md:py-20 relative overflow-hidden">
      <div className="container-custom text-center relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 !text-white drop-shadow-md">
          Need Medical Assistance?
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto drop-shadow-sm">
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
