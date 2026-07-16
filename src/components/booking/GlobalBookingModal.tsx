"use client";

import { useBooking } from "@/context/BookingContext";
import AppointmentModal from "./AppointmentModal";

export default function GlobalBookingModal() {
  const { isOpen, closeBooking } = useBooking();
  return <AppointmentModal isOpen={isOpen} onClose={closeBooking} />;
}
