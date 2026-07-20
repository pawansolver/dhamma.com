"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar, ChevronDown, Menu, X } from "lucide-react";
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
    label: "Gallery",
    href: "/gallery/photos",
    children: [
      { label: "Photo Gallery", href: "/gallery/photos" },
      { label: "Video Gallery", href: "/gallery/videos" }
    ]
  },
  { label: "Contact Us", href: "/contact" },
  { label: "Faculty & Doctors", href: "/doctors" },
  {
    label: "Departments",
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
  {
    label: "Media Centre",
    href: "#",
    children: [
      { label: "Press Release", href: "/media/press-release" },
      { label: "Media Coverage", href: "/media/media-coverage" },
      { label: "Newsletters", href: "/media/newsletters" },
      { label: "Media Connect", href: "/media/media-connect" }
    ]
  },
  {
    label: "Patient Corner",
    href: "#",
    children: [
      { label: "Blogs", href: "/patient-corner/blogs" }
    ]
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [dynamicMenu, setDynamicMenu] = useState<MenuItem[]>(MENU);
  const { openBooking } = useBooking();

  useEffect(() => {
    async function fetchDepartments() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/departments`);
        const data = await res.json();
        if (data.success && data.data) {
          const fetchedDepts = data.data.map((dept: any) => ({
            label: dept.name,
            href: `/departments/${dept.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
            doctors: "1+" // Dummy fallback, dynamic logic could fetch real count
          }));
          
          setDynamicMenu(prevMenu => prevMenu.map(menuItem => {
            if (menuItem.label === "Departments") {
              return {
                ...menuItem,
                children: [
                  { label: "All Services", href: "/departments", doctors: "32+" },
                  ...fetchedDepts
                ]
              };
            }
            return menuItem;
          }));
        }
      } catch (error) {
        console.error("Failed to fetch departments for navbar", error);
      }
    }
    fetchDepartments();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm border-l-[8px] border-[#0072CE] flex flex-col font-sans">
      {/* ── Top Row: Action Buttons ── */}
      <div className="hidden lg:flex w-full bg-[#fdfaf8] border-b border-gray-200 py-1.5">
        <div className="w-full max-w-[1600px] mx-auto px-4 flex justify-end xl:justify-center items-center gap-10">
          
          <a 
            href="https://wa.me/917643990301?text=Hello%2C%20I%20would%20like%20to%20request%20a%20callback%20from%20Dhamma%20Institute%20of%20Medical%20Sciences."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 font-medium hover:text-[#00509E] transition-colors"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </span>
            Request a Callback
          </a>

          <button 
            onClick={openBooking} 
            className="flex items-center gap-2 bg-[#FDECEE] text-[#2d1b19] px-6 py-2 rounded-full font-semibold hover:bg-[#FAD7DC] transition-colors"
          >
            <Calendar size={18} className="text-[#E63946]" />
            Book Appointment
          </button>

          <a href="/health-checkup" className="flex items-center gap-2 text-gray-700 font-medium hover:text-[#0072CE] transition-colors">
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2.05h-.1a10 10 0 0 0-9.8 10A10 10 0 0 0 11 22h.1M17 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 10l5-5M15 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0zM17 19v3"></path></svg>
            </span>
            Get Health Checkup
          </a>

        </div>
      </div>

      {/* ── Main Row: Logo & Menu ── */}
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-2 py-2 sm:px-4 md:py-3">
        
        {/* Left: responsive brand mark and name */}
        <div className="min-w-0 flex-shrink lg:max-w-[320px] xl:max-w-[380px]">
          <Link href="/" className="flex min-w-0 items-center gap-1.5 overflow-hidden sm:gap-3">
            <div className="relative h-11 w-[83px] flex-none sm:h-14 sm:w-[106px] xl:h-16 xl:w-[121px]">
              <Image
                src="/dhamma.png"
                alt="Dhamma Institute of Medical Sciences logo"
                fill
                priority
                sizes="(max-width: 640px) 83px, (max-width: 1280px) 106px, 121px"
                className="object-contain"
              />
            </div>
            <span className="min-w-0 border-l-2 border-[#ED1C24] pl-2 text-[10px] font-black leading-[1.08] min-[360px]:text-[11px] sm:pl-3 sm:text-[15px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px]">
              <span className="sm:hidden">
                <span className="block whitespace-nowrap tracking-[-0.02em] text-[#0072CE]">
                  Dhamma Institute
                </span>
                <span className="mt-0.5 block whitespace-nowrap tracking-[0.01em] text-[#ED1C24]">
                  of Medical Sciences
                </span>
              </span>
              <span className="hidden sm:block">
                <span className="block whitespace-nowrap tracking-[-0.02em] text-[#0072CE]">
                  Dhamma Institute of
                </span>
                <span className="mt-0.5 block whitespace-nowrap tracking-[0.01em] text-[#ED1C24]">
                  Medical Sciences
                </span>
              </span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <nav className="hidden lg:flex items-center justify-center gap-2 xl:gap-4 flex-1 h-full">
          {dynamicMenu.map((item, idx) => (
            <div
              key={item.label}
              className={`h-full flex items-center ${item.children && item.children.length > 8 ? "" : "relative"}`}
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-1.5 xl:px-3 py-1 text-[13px] xl:text-[15px] font-medium text-gray-700 hover:text-black transition-all whitespace-nowrap group border-b-2 border-transparent hover:border-gray-300"
              >
                <span className="capitalize">{item.label}</span>
                {item.children && <ChevronDown size={14} className="text-gray-500 group-hover:text-black" />}
              </Link>

              {item.children && openDropdown === item.label && (
                item.children.length > 8 ? (
                  /* ── MEGA MENU (Departments) ── */
                  <div className="absolute left-0 w-full top-full z-50">
                    {/* Invisible Hover Bridge */}
                    <div className="absolute w-full h-10 -top-10 bg-transparent" />
                    <div className="bg-white border-t border-gray-200 shadow-xl relative">
                      <div className="max-w-7xl mx-auto">
                        <div className="flex px-8 py-8 gap-10">
                          <div className="flex-1 grid grid-cols-4 gap-x-8 gap-y-4">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="text-[14px] text-gray-700 hover:text-[#0072CE] font-medium transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
                          <Link href="/departments" className="text-[14px] text-[#0072CE] font-bold hover:text-[#00509E] flex items-center gap-1 transition-colors">
                            View all {item.label.toLowerCase()} <ChevronDown size={14} className="-rotate-90" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ── STANDARD DROPDOWN ── */
                  <div className={`absolute top-full ${idx > dynamicMenu.length / 2 ? 'right-0' : 'left-0'} min-w-[240px] z-50 transition-all duration-200`}>
                    {/* Invisible Hover Bridge */}
                    <div className="absolute w-full h-10 -top-10 bg-transparent" />
                    <div className="bg-white border border-gray-100 shadow-xl rounded-b-md overflow-hidden relative">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-5 py-3 text-gray-700 hover:text-[#0072CE] hover:bg-blue-50/50 transition-all text-[14px] font-medium"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        {!mobileOpen && (
          <button
            className="ml-2 flex flex-shrink-0 items-center justify-center rounded-xl bg-[#00509E] p-2.5 text-white shadow-md transition hover:bg-[#003f7d] sm:ml-4 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded="false"
          >
            <Menu size={23} />
          </button>
        )}
      </div>


      {/* ───── Mobile menu ───── */}
      {/* ───── Mobile Sidebar Overlay ───── */}
      <div
        className={`fixed inset-0 z-[1090] bg-slate-950/55 backdrop-blur-[2px] transition-all duration-300 lg:hidden ${mobileOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* ───── Mobile Sidebar ───── */}
      <aside
        className={`fixed left-0 top-0 z-[1100] flex h-[100dvh] w-[88%] max-w-[360px] flex-col overflow-hidden border-r border-white/30 bg-white shadow-[20px_0_60px_rgba(15,23,42,0.25)] transition-transform duration-300 ease-out lg:hidden ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Sidebar Header */}
        <div className="flex flex-shrink-0 items-center justify-between border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white px-3 py-3.5">
          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center gap-1 overflow-hidden"
            onClick={() => setMobileOpen(false)}
          >
            <span className="relative h-10 w-[72px] flex-none">
              <Image
                src="/dhamma.png"
                alt="Dhamma Institute of Medical Sciences logo"
                fill
                sizes="72px"
                className="object-contain"
              />
            </span>
            <span className="min-w-0 border-l-2 border-[#ED1C24] pl-1.5 text-[10px] font-black leading-[1.08]">
              <span className="block whitespace-nowrap tracking-[-0.02em] text-[#0072CE]">
                Dhamma Institute
              </span>
              <span className="mt-0.5 block whitespace-nowrap tracking-[0.01em] text-[#ED1C24]">
                of Medical Sciences
              </span>
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="ml-1.5 flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-[#00509E] text-white shadow-sm transition hover:bg-[#003f7d] active:scale-95"
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 space-y-1 overflow-y-auto overscroll-contain bg-slate-50/60 p-3">
          <p className="px-3 pb-1 pt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Navigation
          </p>
          {dynamicMenu.map((item) => (
            <div key={item.label} className="overflow-hidden rounded-xl bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
              {item.children ? (
                <>
                  <button
                    className="flex w-full items-center justify-between px-4 py-3.5 text-left text-[14px] font-bold text-[#064f96] transition hover:bg-blue-50 focus:outline-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileSubmenu(mobileSubmenu === item.label ? null : item.label);
                    }}
                    aria-expanded={mobileSubmenu === item.label}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={17}
                      className={`text-[#0072CE] transition-transform duration-300 ${mobileSubmenu === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileSubmenu === item.label && (
                    <div className="border-t border-blue-100 bg-blue-50/60 py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="mx-2 block rounded-lg px-4 py-2.5 text-[13px] font-medium text-slate-600 transition hover:bg-white hover:text-[#00509E]"
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
                  className="block px-4 py-3.5 text-[14px] font-bold text-[#064f96] transition hover:bg-blue-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="px-1 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-3">
            <button
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FDECEE] px-4 py-3.5 text-sm font-bold text-[#2d1b19] shadow-sm ring-1 ring-[#FAD7DC] transition hover:bg-[#FAD7DC] active:scale-[0.98]"
              onClick={() => { setMobileOpen(false); openBooking(); }}
            >
              <Calendar size={18} className="text-[#E63946]" />
              Book Appointment
            </button>
          </div>
        </nav>
      </aside>

      {/* Floating WhatsApp Button */}
      <div className={`fixed right-4 bottom-[5.5rem] z-[55] transition-all sm:bottom-24 ${mobileOpen ? "pointer-events-none translate-y-3 opacity-0" : "opacity-100"}`}>
        <a
          href="https://wa.me/917643990301?text=Hello!%20I%20am%20interested%20in%20knowing%20more%20about%20Dhamma%20Institute%20of%20Medical%20Sciences%27s%20services."
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



    </header>
  );
}
