"use client";

import { SparkleButton } from "@/components/ui/button-8";
import { useBooking } from "@/context/BookingContext";

export default function CtaBanner() {
  const { openBooking } = useBooking();

  return (
    <section className="bg-gradient-to-r from-[#0066CC] via-[#FBB03B] to-[#FF0000] text-white py-10 sm:py-14 md:py-20">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold !text-white mb-2 drop-shadow-md">Need Medical Assistance?</h2>
        <div className="w-16 h-1 bg-white mx-auto mb-6 rounded-full shadow-sm" />
        <p className="text-white font-medium text-sm md:text-base max-w-2xl mx-auto !mb-6 sm:!mb-8 drop-shadow-md">
          Our team of expert doctors and staff is available 24x7 for emergency care.
          Book your OPD appointment or reach us anytime.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center">
          <SparkleButton href="/hospital/emergency">Emergency Helpline</SparkleButton>
          <SparkleButton onClick={openBooking}>Book OPD</SparkleButton>
        </div>
      </div>
    </section>
  );
}
