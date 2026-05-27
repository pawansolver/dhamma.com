"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, Phone, Mail, Clock, ShieldAlert, FileEdit, Calendar } from "lucide-react";
import AppointmentModal from "@/components/booking/AppointmentModal";

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

type SubItem = { label: string; href: string };
type MenuItem = { label: string; href: string; children?: SubItem[] };

const MENU: MenuItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT US",
    href: "/about/overview",
    children: [
      { label: "Overview", href: "/about/overview" },
      { label: "Chairman Message", href: "/about/chairman" },
    ],
  },
  {
    label: "HOSPITAL",
    href: "/hospital/the-hospital",
    children: [
      { label: "The Hospital", href: "/hospital/the-hospital" },
      { label: "OPD Services", href: "/hospital/opd" },
      { label: "In-Wards Services", href: "/hospital/in-wards" },
      { label: "Diagnostic Services", href: "/hospital/diagnostics" },
      { label: "Emergency Services", href: "/hospital/emergency" },
    ],
  },
  {
    label: "DEPARTMENTS",
    href: "#",
    children: [
      { label: "Anatomy", href: "/departments/anatomy" },
      { label: "Forensic Medicine & Toxicology", href: "/departments/forensic-medicine" },
      { label: "Orthopaedics", href: "/departments/orthopaedics" },
      { label: "Physiology", href: "/departments/physiology" },
      { label: "Community Medicine", href: "/departments/community-medicine" },
      { label: "Oto-Rhino-Laryngology (ENT)", href: "/departments/ent" },
      { label: "Biochemistry", href: "/departments/biochemistry" },
      { label: "General Medicine", href: "/departments/general-medicine" },
      { label: "Ophthalmology", href: "/departments/ophthalmology" },
      { label: "Pharmacology", href: "/departments/pharmacology" },
      { label: "Paediatrics", href: "/departments/paediatrics" },
      { label: "Obstetrics & Gynecology", href: "/departments/obstetrics-gynecology" },
      { label: "Pathology", href: "/departments/pathology" },
      { label: "Psychiatry", href: "/departments/psychiatry" },
      { label: "Radiology", href: "/departments/radiology" },
      { label: "Microbiology", href: "/departments/microbiology" },
      { label: "Dermatology, Venereology & Leprosy", href: "/departments/dermatology" },
      { label: "Dentistry", href: "/departments/dentistry" },
      { label: "Anaesthesiology", href: "/departments/anaesthesiology" },
      { label: "General Surgery", href: "/departments/general-surgery" },
    ],
  },
  { label: "FACULTY & DOCTORS", href: "/doctors" },
  {
    label: "INFRASTRUCTURE",
    href: "/#",
    children: [
      { label: "Academic Complex", href: "/infrastructure/academic-complex" },
      { label: "Residential Block", href: "/infrastructure/residential-block" },
      { label: "Sports & Gymnasium", href: "/infrastructure/sports-gymnasium" },
      { label: "Cafeteria & Mess", href: "/infrastructure/cafeteria-mess" },
    ],
  },
  {
    label: "ACADEMICS",
    href: "/academics",
    children: [
      { label: "Programmes", href: "/academics/programmes" },
      { label: "NMC CBME Curriculum", href: "/academics/nmc-cbme-curriculum" },
      { label: "Time Table", href: "/academics/time-table" },
      { label: "Research", href: "/academics/research" },
      { label: "Student Details", href: "/academics/student-details" },
      { label: "List of Holidays", href: "/academics/holidays" },
      { label: "Results", href: "/academics/results" },
    ],
  },
  { label: "ADMISSIONS", href: "/admissions" },
  {
    label: "GALLERY",
    href: "#",
    children: [
      { label: "Photo Gallery", href: "/gallery/photos" },
      { label: "Video Gallery", href: "/gallery/videos" },
      { label: "Events", href: "/gallery/events" },
    ],
  },
  { label: "LIBRARY", href: "/library" },
  { label: "CAREER", href: "/career" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [showBooking, setShowBooking] = useState(false);

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
        <div className="relative z-[2] w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 flex items-center justify-between py-2 sm:py-3">
          
          <Link href="/" className="flex items-center gap-2 md:gap-3 flex-shrink max-w-[80%] lg:max-w-none">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 relative flex-shrink-0 rounded-full overflow-hidden">
              <Image
                src="/logo.png"
                alt="Buddha Hospital And Research Institute"
                fill
                priority
                className="object-cover"
              />
            </div>
            
            <div className="flex flex-col justify-center select-none">
              <span className="font-extrabold text-[12px] sm:text-[14px] md:text-[18px] leading-tight text-[#1a3a6b] uppercase tracking-wide line-clamp-2">
                Buddha Hospital And Research Institute
              </span>
              <span className="hidden sm:block text-[8px] sm:text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">
                Gaya-Dobhi Road, NH-22, Kharanti More, Gaya-823004
              </span>
            </div>
          </Link>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button onClick={() => setShowBooking(true)} className="nav-action-btn nav-btn-green">
              <Clock size={14} />
              Appointment Booking
            </button>
            <a href="/hospital/emergency" className="nav-action-btn nav-btn-red">
              <ShieldAlert size={14} />
              Emergency
            </a>
            <a href="/admissions" className="nav-action-btn nav-btn-saffron">
              <FileEdit size={14} />
              Online Registration
            </a>
          </div>

          {/* Fully Visible Hamburger Button */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded-md bg-[#1a3a6b] text-white flex-shrink-0 ml-auto z-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ───── TIER 3: Main navigation ───── */}
      <nav className="relative bg-[#1a3a6b]">
        <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-brandSaffron/20 to-transparent pointer-events-none" />
        
        {/* Desktop Menu */}
        <div className="container-custom hidden lg:flex items-center justify-center">
          {MENU.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3 xl:px-4 py-3 text-[13px] font-semibold text-white hover:bg-brandBlueDark transition-colors whitespace-nowrap"
              >
                {item.label}
                {item.children && <ChevronDown size={13} className="opacity-70" />}
              </Link>

              {item.children && openDropdown === item.label && (
                <div
                  className={`absolute top-full bg-white shadow-xl border-t-[3px] border-brandSaffron z-50 ${
                    item.children.length > 8
                      ? "left-1/2 -translate-x-1/2 w-[680px] grid grid-cols-3 gap-0 p-2"
                      : "left-0 min-w-[220px]"
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className={`block text-sm text-textmain hover:bg-[#1a3a6b] hover:text-white transition-colors ${
                        item.children!.length > 8
                          ? "px-4 py-2.5 rounded-md"
                          : "px-4 py-2.5 border-b border-border/50 last:border-0"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ───── Mobile menu ───── */}
        {/* Changed from absolute to block logic inside nav to push content down properly instead of overlapping */}
        <div className={`lg:hidden w-full bg-[#1a3a6b] transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[80vh] overflow-y-auto border-t border-white/10" : "max-h-0 overflow-hidden"
        }`}>
          {MENU.map((item) => (
            <div key={item.label} className="border-b border-white/10">
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
                      className={`transition-transform duration-300 ${
                        mobileSubmenu === item.label ? "rotate-180" : ""
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
                  className="block px-5 py-3.5 text-[14px] font-semibold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <div className="flex flex-col gap-3 p-5 bg-black/10">
            <button 
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold text-white bg-green-600 hover:bg-green-700"
              onClick={() => { setMobileOpen(false); setShowBooking(true); }}
            >
              <Clock size={16} />
              Book Appointment
            </button>
            <a 
              href="/hospital/emergency" 
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold text-white bg-red-600 hover:bg-red-700"
              onClick={() => setMobileOpen(false)}
            >
              <ShieldAlert size={16} />
              Emergency
            </a>
            <a 
              href="/admissions" 
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600"
              onClick={() => setMobileOpen(false)}
            >
              <FileEdit size={16} />
              Online Registration
            </a>
          </div>
        </div>
      </nav>

      {/* Floating Book OPD Button - Right Side */}
      <div className="fixed right-4 bottom-6 z-[999] flex flex-col gap-2">
        <button
          onClick={() => setShowBooking(true)}
          className="group flex items-center gap-2 px-5 py-3 bg-green-600 text-white font-bold rounded-full shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-200 animate-bounce"
          style={{ animationDuration: "2s" }}
        >
          <Calendar size={18} />
          <span className="hidden sm:inline">Book OPD</span>
        </button>
      </div>

      {/* Appointment Booking Modal */}
      <AppointmentModal isOpen={showBooking} onClose={() => setShowBooking(false)} />
    </header>
  );
}