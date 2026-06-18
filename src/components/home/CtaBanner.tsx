"use client";

import { SparkleButton } from "@/components/ui/button-8";
import { useBooking } from "@/context/BookingContext";

export default function CtaBanner() {
  const { openBooking } = useBooking();

  return (
    <section className="bg-gradient-to-r from-[#0f2557] via-[#1a3a6b] to-[#14532d] text-white py-10 sm:py-14 md:py-20">
      <div className="container-custom text-center">
        <h2 className="section-heading-white">Need Medical Assistance?</h2>
        <span className="section-heading-line-white" />
        <p className="section-subheading-white !mb-6 sm:!mb-8">
          Our team of expert doctors and staff is available 24x7 for emergency care.
          Book your OPD appointment or reach us anytime.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
          <SparkleButton href="/hospital/emergency">Emergency Helpline</SparkleButton>
          <SparkleButton onClick={openBooking}>Book OPD</SparkleButton>
        </div>
      </div>
    </section>
  );
}
