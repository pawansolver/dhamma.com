"use client";

import React, { createContext, useContext, useState } from "react";

interface BookingContextType {
  isOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType>({
  isOpen: false,
  openBooking: () => {},
  closeBooking: () => {},
});

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BookingContext.Provider
      value={{ isOpen, openBooking: () => setIsOpen(true), closeBooking: () => setIsOpen(false) }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
