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
      { label: "Managing Director Message", href: "/about/md" },
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
    <footer className="relative bg-gradient-to-br from-[#0f2557] via-[#1a3a6b] to-[#14532d] text-white overflow-hidden">
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

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10">
          {/* Column 1, 2, 3 — Menu Items with arrow toggle */}
          {[
            MENU.slice(0, 4),
            MENU.slice(4, 8),
            MENU.slice(8),
          ].map((chunk, colIdx) => (
            <div key={colIdx} className="space-y-0.5">
              <h3 className="text-[15px] font-bold text-white mb-3 italic">
                {colIdx === 0 ? "Site Map" : colIdx === 1 ? "More Links" : "Quick Links"}
              </h3>

              {chunk.map((item) => (
                <div key={item.label} className="border-b border-white/10 last:border-0">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex-1 py-2 text-[13px] font-medium text-white/70 hover:text-white transition"
                    >
                      <span className="mr-1.5 text-white/40">&gt;</span>
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => toggleMenu(item.label)}
                        className="p-2 text-white/40 hover:text-white transition"
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${
                            openMenus.has(item.label) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {item.children && openMenus.has(item.label) && (
                    <div
                      className={`pb-2 pl-5 ${
                        item.children.length > 6
                          ? "grid grid-cols-2 gap-x-3 gap-y-0.5 max-h-[140px] overflow-y-auto no-scrollbar"
                          : "space-y-1"
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-1.5 text-[11px] text-white/50 hover:text-white transition py-0.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-white/50 flex-shrink-0" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}

          {/* Column 4 — About + Contact (moved to right) */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.png" alt="BHRI" width={140} height={140} className="rounded-full bg-white p-0.5" />
            </Link>
            <p className="text-xs text-white/60 leading-relaxed mb-2">
              Buddha Hospital &amp; Research Institute is a multi-Specialty hospital in Gaya
              offering world-class healthcare with the motto &ldquo;सेवा परमो धर्म:&rdquo;
            </p>
            <p className="text-[11px] text-white/50 mb-4">
              Reg. No.: CE/GAY/2025/NH-0504
            </p>

            <ul className="space-y-2.5 mb-4">
              <li className="flex items-start gap-2 text-xs text-white/60">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-white/80" />
                <span>Gaya-Dobhi Road, NH-22, Kharanti More, Tikuna Farm, Gaya (Bihar)-823004</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-white/60">
                <Mail size={14} className="flex-shrink-0 text-white/80" />
                <a href="mailto:bhribodhgaya@gmail.com" className="hover:text-white transition">bhribodhgaya@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-xs text-white/60">
                <Phone size={14} className="flex-shrink-0 text-white/80" />
                <span>8603048174 / 9060646592</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/15">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[12px] text-white/50">
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-white transition">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          </div>
          <span>Designed &amp; Developed by <a href="https://nighwantech.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white font-semibold underline underline-offset-2 transition">NighwanTech</a> &mdash; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
