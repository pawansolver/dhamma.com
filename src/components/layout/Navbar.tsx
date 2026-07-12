"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, Clock, ShieldAlert, FileEdit, Calendar } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

function FacebookIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function TwitterIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YoutubeIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

type SubItem = { label: string; href: string; doctors?: string };
type MenuItem = { label: string; href: string; children?: SubItem[] };

const MENU: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/overview" },
  {
    label: "Area Of Care",
    href: "#",
    children: [
      { label: "Overview", href: "#" }
    ],
  },
  { label: "Health Professionals", href: "/doctors" },
  {
    label: "Gallery",
    href: "/gallery/photos",
    children: [
      { label: "Photo Gallery", href: "/gallery/photos" },
      { label: "Video Gallery", href: "/gallery/videos" }
    ]
  },
  { label: "Contact Us", href: "/contact" },
  { label: "FACULTY & DOCTORS", href: "/doctors" },
  {
    label: "DEPARTMENTS",
    href: "#",
    children: [
      { label: "All Services", href: "/departments", doctors: "32+" },
      { label: "Cardiology", href: "/departments/cardiology", doctors: "3+" },
      { label: "Neuro Surgery", href: "/departments/neuro-surgery", doctors: "2+" },
      { label: "Nephrology", href: "/departments/nephrology", doctors: "2+" },
      { label: "Orthopedic", href: "/departments/orthopaedics", doctors: "2+" },
      { label: "Urology", href: "/departments/urology", doctors: "1+" },
      { label: "General Medicine", href: "/departments/general-medicine", doctors: "2+" },
      { label: "Neurology", href: "/departments/neurology", doctors: "1+" },
      { label: "Obs. & Gynae.", href: "/departments/obstetrics-gynecology", doctors: "2+" },
      { label: "General Surgery", href: "/departments/general-surgery", doctors: "1+" },
      { label: "Rheumatology", href: "/departments/rheumatology", doctors: "1+" },
      { label: "Pediatric", href: "/departments/paediatrics", doctors: "2+" },
      { label: "Plastic Surgery", href: "/departments/plastic-surgery", doctors: "1+" },
      { label: "Gastroenterology", href: "/departments/gastroenterology", doctors: "1+" },
      { label: "Ophthalmology", href: "/departments/ophthalmology", doctors: "2+" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const { openBooking } = useBooking();

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* ───── TIER 2: Logo strip ───── */}
      <div className="relative border-b border-border bg-white overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-[55%] z-[1]">
          <Image
            src="/images/navbar-art.png"
            alt=""
            fill
            sizes="55vw"
            className="object-cover object-right opacity-70"
            aria-hidden="true"
            priority
          />
        </div>

        {/* Adjusted padding and layout so button always fits on mobile */}
        <div className="relative z-[2] w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 flex items-center justify-between h-16 sm:h-20 md:h-24 lg:h-28">

          <Link href="/" className="flex items-center gap-2 md:gap-3 flex-shrink max-w-[80%] lg:max-w-none h-full py-1 sm:py-2">
            <div className="w-40 sm:w-56 md:w-72 lg:w-96 h-full relative flex-shrink-0">
              <Image
                src="/dhamma.png"
                alt="logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>


          </Link>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button onClick={openBooking} className="nav-action-btn nav-btn-green">
              <Clock size={14} />
              Appointment Booking
            </button>
            <a href="/hospital/emergency" className="nav-action-btn nav-btn-red">
              <ShieldAlert size={14} />
              Emergency
            </a>
          </div>

          {/* Fully Visible Hamburger Button */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded-md bg-[#0056b3] text-white flex-shrink-0 ml-auto z-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <Menu size={22} className="opacity-0" /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ───── TIER 3: Main navigation ───── */}
      <nav className="relative" style={{ background: 'linear-gradient(135deg, #BF953F)', backgroundSize: '200% auto' }}>
        <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-brandSaffron/20 to-transparent pointer-events-none" />

        {/* Desktop Menu */}
        <div className="container-custom hidden lg:flex items-center justify-evenly w-full">
          {MENU.map((item, idx) => (
            <div
              key={item.label}
              className={item.children && item.children.length > 8 ? "" : "relative"}
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3 xl:px-4 py-3 text-[13px] font-semibold uppercase text-white hover:text-red-500 transition-colors whitespace-nowrap"
              >
                {item.label}
                {item.children && <ChevronDown size={13} className="opacity-70" />}
              </Link>

              {item.children && openDropdown === item.label && (
                item.children.length > 8 ? (
                  /* ── MEGA MENU (Departments) ── */
                  <div className="absolute left-0 w-full top-full bg-white border-t border-gray-200 shadow-xl z-50">
                    <div className="max-w-7xl mx-auto">
                      <div className="flex px-8 py-8 gap-10">
                        <div className="flex-1 grid grid-cols-4 gap-x-8 gap-y-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="text-[14px] text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gray-100 px-8 py-4 border-t border-gray-200">
                        <Link href="/departments" className="text-[14px] text-gray-900 font-semibold hover:text-blue-600 flex items-center gap-1 transition-colors">
                          View all {item.label.toLowerCase()} <ChevronDown size={14} className="-rotate-90" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ── STANDARD DROPDOWN ── */
                  <div className={`absolute top-full ${idx > MENU.length / 2 ? 'right-0' : 'left-0'} min-w-[220px] bg-white border border-gray-200 shadow-xl z-50 rounded-b-lg overflow-hidden transition-all duration-200 opacity-100 translate-y-0`}>
                    <div className="py-2">
                      {item.children.map((child, idx) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center px-5 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all text-[14px] font-medium"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          ))}
        </div>

        {/* ───── Mobile menu ───── */}
        {/* ───── Mobile Sidebar Overlay ───── */}
        <div
          className={`lg:hidden fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* ───── Mobile Sidebar ───── */}
        <div className={`lg:hidden fixed top-0 left-0 h-screen w-[85%] max-w-[320px] bg-[#0056b3] shadow-2xl z-[70] transition-transform duration-300 ease-in-out flex flex-col ${mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#0f2557] flex-shrink-0">
            <span className="font-extrabold text-white text-lg">Menu</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 bg-white/10 rounded-md text-white hover:bg-white/20 transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto py-2">
            {MENU.map((item) => (
              <div key={item.label} className="border-b border-white/5">
                {item.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-5 py-3.5 text-[14px] font-semibold text-white text-left focus:outline-none"
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileSubmenu(mobileSubmenu === item.label ? null : item.label);
                      }}
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${mobileSubmenu === item.label ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    {mobileSubmenu === item.label && (
                      <div className="bg-black/20">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-8 py-3 text-[13px] text-white/80 hover:text-white border-b border-white/5 last:border-0"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-5 py-3.5 text-[14px] font-semibold text-white hover:bg-white/5 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar Footer Buttons */}
          <div className="p-5 bg-[#0f2557] flex flex-col gap-3 flex-shrink-0 border-t border-white/10">
            <button
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold text-white bg-green-600 hover:bg-green-700 transition"
              onClick={() => { setMobileOpen(false); openBooking(); }}
            >
              <Clock size={16} />
              Book Appointment
            </button>
            <a
              href="/hospital/emergency"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold text-white bg-red-600 hover:bg-red-700 transition"
              onClick={() => setMobileOpen(false)}
            >
              <ShieldAlert size={16} />
              Emergency
            </a>
          </div>
        </div>
      </nav>

      {/* Floating WhatsApp Button */}
      <div className="fixed right-4 bottom-[5.5rem] sm:bottom-24 z-[999]">
        <a
          href="https://wa.me/917643990301?text=Hello!%20I%20am%20interested%20in%20knowing%20more%20about%20Dhamma%20Superspeciality%20Hospital%27s%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-green-500 text-white rounded-full shadow-xl hover:bg-green-600 hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8">
            <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.552 4.195 1.6 6.01L.226 23.593l5.69-1.492a11.967 11.967 0 0 0 6.115 1.666c6.645 0 12.03-5.385 12.03-12.03C24.061 5.385 18.676 0 12.031 0zm0 21.722a9.92 9.92 0 0 1-5.068-1.385l-.363-.215-3.77.988.995-3.676-.236-.375a9.927 9.927 0 0 1-1.527-5.347c0-5.502 4.478-9.98 9.97-9.98 5.5 0 9.98 4.478 9.98 9.98 0 5.502-4.48 9.98-9.98 9.98zm5.485-7.487c-.302-.152-1.785-.88-2.062-.98-.278-.1-.48-.152-.68.152-.202.302-.782.98-.958 1.18-.175.202-.35.228-.652.076-.302-.152-1.275-.47-2.428-1.5-.897-.803-1.503-1.796-1.68-2.098-.176-.302-.018-.465.132-.615.137-.137.302-.352.453-.528.15-.175.202-.302.302-.502.1-.202.05-.38-.025-.53-.076-.152-.68-1.642-.932-2.25-.246-.593-.497-.512-.68-.52-.176-.008-.38-.01-.582-.01-.202 0-.528.076-.805.378-.278.302-1.058 1.033-1.058 2.518 0 1.485 1.083 2.92 1.233 3.12.15.202 2.128 3.25 5.152 4.553 2.185.94 2.905.9 3.96.76.81-.106 2.062-.843 2.352-1.657.29-.812.29-1.508.202-1.657-.087-.152-.338-.228-.64-.38z" />
          </svg>
        </a>
      </div>

      {/* Floating Book OPD Button - Right Side */}
      <div className="fixed right-4 bottom-6 z-[999]">
        <button
          onClick={openBooking}
          className="group flex items-center gap-2 px-5 py-3 bg-teal-600 text-white font-bold rounded-full shadow-xl hover:bg-teal-700 hover:scale-105 transition-all duration-200 animate-bounce"
          style={{ animationDuration: "2s" }}
        >
          <Calendar size={18} />
          <span className="hidden sm:inline">Book OPD</span>
        </button>
      </div>

    </header>
  );
}
