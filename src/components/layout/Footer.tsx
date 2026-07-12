"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";

type SubItem = { label: string; href: string };
type MenuItem = { label: string; href: string; children?: SubItem[] };

const MENU: MenuItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT US",
    href: "/about",
    children: [
      { label: "Overview", href: "/about" },
      { label: "Vision & Mission", href: "/about/vision" },
      { label: "Chairman Message", href: "/about/chairman" },
    ],
  },
  {
    label: "HOSPITAL",
    href: "/hospital",
    children: [
      { label: "The Hospital", href: "/hospital" },
      { label: "OPD Services", href: "/hospital/opd" },
      { label: "In-Wards Services", href: "/hospital/in-wards" },
      { label: "Diagnostic Services", href: "/hospital/diagnostics" },
      { label: "Emergency Services", href: "/hospital/emergency" },
    ],
  },
  {
    label: "DEPARTMENTS",
    href: "/departments",
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
    href: "/infrastructure",
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
    href: "/gallery",
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

export default function Footer() {
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  return (
    <footer className="relative bg-gradient-to-r from-[#0066CC] via-[#FBB03B] to-[#FF0000] text-white overflow-hidden">
      {/* Top golden gradient strip */}
      <div className="h-[3px] w-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600" />
      {/* CSS decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/[0.03] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/[0.03] translate-y-1/2 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.05]" />
        <div className="absolute top-10 left-[20%] w-2 h-2 rounded-full bg-white/10" />
        <div className="absolute top-[30%] right-[15%] w-3 h-3 rounded-full bg-white/[0.07]" />
        <div className="absolute bottom-[25%] left-[40%] w-1.5 h-1.5 rounded-full bg-white/10" />
        <div className="absolute top-[60%] left-[10%] w-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-[20%] right-[30%] w-32 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 py-4 lg:py-6">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
          
          {/* Mobile Top / Desktop Right: About + Contact */}
          <div className="w-full lg:w-[30%] order-first lg:order-last">
            <Link href="/" className="inline-block mb-3">
              <Image src="/dhamma.png" alt="Dhamma Superspeciality Hospital" width={220} height={60} className="object-contain" />
            </Link>

            <p className="text-[13px] sm:text-[14px] text-white/80 leading-relaxed mb-3">
              Dhamma Superspeciality Hospital is a premier multi-Specialty hospital
              offering world-class healthcare with the motto <span className="text-amber-400 font-semibold">&ldquo;सेवा परमो धर्म:&rdquo;</span>
            </p>
            <p className="text-[12px] text-white/50 mb-6">
              Reg. No.: CE/GAY/2025/NH-0504
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[13px] sm:text-[14px] text-white/70">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-amber-400" />
                <span>Opposite Canara Bank, Phulwari Sharif, Near AIIMS Gate No. 1, Patna, India, Bihar</span>
              </li>
              <li className="flex items-center gap-3 text-[13px] sm:text-[14px] text-white/70">
                <Mail size={18} className="flex-shrink-0 text-amber-400" />
                <a href="mailto:info@dhammainstitute.com" className="hover:text-white transition">info@dhammainstitute.com</a>
              </li>
              <li className="flex items-center gap-3 text-[13px] sm:text-[14px] text-white/70">
                <Phone size={18} className="flex-shrink-0 text-amber-400" />
                <span>+91 7643990301 / +9176439 90302</span>
              </li>
              <li className="flex items-start gap-3 text-[13px] sm:text-[14px] text-white/70">
                <div className="flex-shrink-0 text-amber-400 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <span>
                  <strong>VISITING HOURS</strong><br />
                  Sunday: 08:00 AM - 10:00 PM<br />
                  Monday - Saturday: 06:00 AM - 12:00 AM
                </span>
              </li>
            </ul>
          </div>

          {/* Links Columns */}
          <div className="w-full lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              MENU.slice(0, 4),
              MENU.slice(4, 8),
              MENU.slice(8),
            ].map((chunk, colIdx) => (
              <div key={colIdx} className="flex flex-col space-y-0.5">
                <h3 className="text-[14px] font-bold text-amber-400 mb-3 tracking-wider uppercase">
                  {colIdx === 0 ? "Site Map" : colIdx === 1 ? "More Links" : "Quick Links"}
                </h3>

                {chunk.map((item) => (
                  <div key={item.label} className="border-b border-white/10 last:border-0">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="flex-1 py-2.5 text-[13px] sm:text-[14px] font-medium text-white/80 hover:text-amber-400 transition"
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          onClick={() => toggleMenu(item.label)}
                          className="p-2 text-white/50 hover:text-white transition"
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${
                              openMenus.has(item.label) ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {item.children && openMenus.has(item.label) && (
                      <div
                        className={`pb-3 pl-3 ${
                          item.children.length > 6
                            ? "grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 max-h-[180px] overflow-y-auto no-scrollbar"
                            : "flex flex-col space-y-1.5"
                        }`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-center gap-2 text-[12px] sm:text-[13px] text-white/60 hover:text-white transition py-1"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 flex-shrink-0" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-amber-500/20">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[12px] text-white/50">
          <div className="flex items-center gap-4">
            <Link href="/terms-and-conditions" className="hover:text-amber-400 transition">Terms &amp; Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-amber-400 transition">Privacy Policy</Link>
          </div>
          <span>Designed &amp; Developed by <a href="https://nighwantech.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 transition">Nighwan Technology</a> &mdash; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
