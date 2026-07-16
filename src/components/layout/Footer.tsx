"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronDown, Calendar } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

type SubItem = { label: string; href: string };
type MenuItem = { label: string; href: string; children?: SubItem[] };

const NAVBAR_MENU: MenuItem[] = [
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
];

const NAVBAR_DEPARTMENTS = [
  { label: "All Services", href: "/departments" },
  { label: "Cardiology", href: "/departments/cardiology" },
  { label: "Neuro Surgery", href: "/departments/neuro-surgery" },
  { label: "Nephrology", href: "/departments/nephrology" },
  { label: "Orthopedic", href: "/departments/orthopaedics" },
  { label: "Urology", href: "/departments/urology" },
  { label: "General Medicine", href: "/departments/general-medicine" },
  { label: "Neurology", href: "/departments/neurology" },
  { label: "Obs. & Gynae.", href: "/departments/obstetrics-gynecology" },
  { label: "General Surgery", href: "/departments/general-surgery" },
  { label: "Rheumatology", href: "/departments/rheumatology" },
  { label: "Pediatric", href: "/departments/paediatrics" },
  { label: "Plastic Surgery", href: "/departments/plastic-surgery" },
  { label: "Gastroenterology", href: "/departments/gastroenterology" },
  { label: "Ophthalmology", href: "/departments/ophthalmology" },
];

export default function Footer() {
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());
  const { openBooking } = useBooking();

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  return (
    <footer className="bg-[#f4f9f5] text-gray-800 font-sans">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          
          {/* Column 1: Contact Info */}
          <div>
            <h3 className="text-[15px] font-bold text-[#111] mb-5 tracking-wide uppercase">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[14px] text-gray-600">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#0072CE]" />
                <span className="leading-relaxed">Opposite Canara Bank, Phulwari Sharif, Near AIIMS Gate No. 1, Patna, India, Bihar</span>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-gray-600">
                <Mail size={18} className="flex-shrink-0 text-[#0072CE]" />
                <a href="mailto:info@dhammainstitute.com" className="hover:text-[#0072CE] transition">info@dhammainstitute.com</a>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-gray-600">
                <Phone size={18} className="flex-shrink-0 text-[#0072CE]" />
                <span>+91 7643990301 / +9176439 90302</span>
              </li>
              <li className="flex items-start gap-3 text-[14px] text-gray-600 mt-6">
                <div className="flex-shrink-0 text-[#0072CE] mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <span className="leading-relaxed">
                  <strong className="text-gray-800 font-semibold block mb-1">VISITING HOURS</strong>
                  Sunday: 08:00 AM - 10:00 PM<br />
                  Mon - Sat: 06:00 AM - 12:00 AM
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: Main Links */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-[15px] font-bold text-[#111] mb-1 tracking-wide uppercase">Quick Links</h3>
            {NAVBAR_MENU.map((item) => (
              <div key={item.label} className="flex flex-col">
                
                {item.children ? (
                  <button
                    onClick={() => toggleMenu(item.label)}
                    className="flex items-center gap-1.5 text-left group w-fit"
                  >
                    <span className="text-[14px] text-gray-600 group-hover:text-[#0072CE] transition capitalize">
                      {item.label.toLowerCase()}
                    </span>
                    <ChevronDown 
                      size={14} 
                      className={`text-gray-500 group-hover:text-[#0072CE] transition-transform duration-300 ${openMenus.has(item.label) ? "rotate-180" : ""}`} 
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[14px] text-gray-600 hover:text-[#0072CE] transition capitalize w-fit"
                  >
                    {item.label.toLowerCase()}
                  </Link>
                )}

                {item.children && (
                  <div className={`flex flex-col ml-3 border-l border-gray-200 pl-3 transition-all duration-300 overflow-hidden ${openMenus.has(item.label) ? "max-h-[500px] opacity-100 mt-2 space-y-2" : "max-h-0 opacity-0"}`}>
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="text-[13px] text-gray-500 hover:text-[#0072CE] transition"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Column 3 & 4: Expandable Departments Mega Menu & Action Buttons */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-[15px] font-bold text-[#111] mb-3 tracking-wide uppercase">Specialities</h3>
            
            <button 
              onClick={() => toggleMenu("Departments")}
              className="flex items-center justify-between w-full md:w-3/4 bg-white border border-gray-200 px-4 py-3 rounded-lg text-gray-700 font-medium hover:border-[#0072CE] hover:text-[#0072CE] transition-all"
            >
              <span>View All Departments</span>
              <ChevronDown size={18} className={`transition-transform duration-300 ${openMenus.has("Departments") ? "rotate-180" : ""}`} />
            </button>

            {/* Toggleable Mega Menu inside Footer */}
            <div className={`transition-all duration-300 overflow-hidden ${openMenus.has("Departments") ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                {NAVBAR_DEPARTMENTS.map((dept) => (
                  <Link
                    key={dept.label}
                    href={dept.href}
                    className="text-[14px] text-gray-600 hover:text-[#0072CE] font-medium flex items-center gap-2 transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0072CE]/50"></span>
                    {dept.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Action Buttons in Empty Space */}
            <div className="mt-12 flex flex-wrap items-center gap-4 xl:gap-6">
              <a 
                href="https://wa.me/917643990301?text=Hello%2C%20I%20would%20like%20to%20request%20a%20callback%20from%20Dhamma%20Institute%20of%20Medical%20Sciences."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 font-medium hover:text-[#00509E] transition-colors"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                <span className="text-[14px]">Request a Callback</span>
              </a>

              <button 
                onClick={openBooking} 
                className="flex items-center gap-2 bg-[#FDECEE] text-[#2d1b19] px-6 py-2.5 rounded-full font-semibold hover:bg-[#FAD7DC] transition-colors shadow-sm"
              >
                <Calendar size={18} className="text-[#E63946]" />
                <span className="text-[14px]">Book Appointment</span>
              </button>

              <a href="/health-checkup" className="flex items-center gap-2 text-gray-700 font-medium hover:text-[#0072CE] transition-colors">
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2.05h-.1a10 10 0 0 0-9.8 10A10 10 0 0 0 11 22h.1M17 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 10l5-5M15 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0zM17 19v3"></path></svg>
                </span>
                <span className="text-[14px]">Get Health Checkup</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-8 mt-4 border-t border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: responsive brand mark and name */}
          <Link href="/" className="flex items-center gap-3">
             <span className="relative h-12 w-[92px] flex-none sm:h-14 sm:w-[106px]">
               <Image
                 src="/dhamma.png"
                 alt="Dhamma Institute of Medical Sciences logo"
                 fill
                 sizes="(max-width: 640px) 92px, 106px"
                 className="object-contain"
               />
             </span>
             <span className="text-left text-sm font-extrabold leading-tight text-[#00509E] sm:text-base">
               <span className="block whitespace-nowrap">Dhamma Institute of</span>
               <span className="block whitespace-nowrap">Medical Sciences</span>
             </span>
          </Link>

          {/* Center: Socials */}
          <div className="flex flex-col items-center gap-3">
             <span className="text-[12px] font-bold text-[#111] tracking-widest uppercase">Stay in touch</span>
             <div className="flex items-center gap-3">
               <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-pink-600 hover:-translate-y-1 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600 hover:-translate-y-1 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.8l.2-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-black shadow-sm flex items-center justify-center text-white hover:-translate-y-1 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-red-600 hover:-translate-y-1 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
               </a>
             </div>
          </div>
          
          {/* Right section empty since buttons were removed to keep spacing clean */}
          <div className="hidden md:block w-[180px]"></div>

        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center text-[12px] text-gray-500">
           <div className="flex flex-col md:flex-row items-center gap-4">
             <div>© {new Date().getFullYear()} Dhamma Institute of Medical Sciences. All rights reserved.</div>
             <div className="flex gap-4">
               <Link href="/terms-and-conditions" className="hover:text-gray-800 transition">Terms &amp; Conditions</Link>
               <span className="hidden md:inline">|</span>
               <Link href="/privacy-policy" className="hover:text-gray-800 transition">Privacy Policy</Link>
             </div>
           </div>
           <div>
             Designed by <a href="https://nighwantech.com/" target="_blank" rel="noopener noreferrer" className="text-[#0072CE] font-semibold hover:underline">NighwanTechnology</a>
           </div>
        </div>
      </div>

    </footer>
  );
}
