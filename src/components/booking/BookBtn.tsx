"use client";

import React from "react";
import { useBooking } from "@/context/BookingContext";

interface BookBtnProps {
  children: React.ReactNode;
  className?: string;
}

export default function BookBtn({ children, className = "" }: BookBtnProps) {
  const { openBooking } = useBooking();
  return (
    <button type="button" onClick={openBooking} className={className}>
      {children}
    </button>
  );
}
