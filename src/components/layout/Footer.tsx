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

function FacebookIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function Footer() {
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  return (
    <footer className="bg-[#2d2d2d] text-white">
      <div className="container-custom py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1 — About + Contact */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="BHRI" width={100} height={100} className="rounded-full bg-white p-0.5" />
              <div>
                <p className="font-extrabold text-base leading-tight">BUDDHA HOSPITAL</p>
                <p className="text-[10px] text-brandSaffron font-bold">&amp; Research Institute</p>
              </div>
            </Link>
            <p className="text-xs text-white/60 leading-relaxed mb-4">
              Buddha Hospital &amp; Research Institute is a multi-Specialty hospital in Gaya
              offering world-class healthcare with the motto &ldquo;सेवा परमो धर्म:&rdquo;
            </p>

            <ul className="space-y-2.5 mb-4">
              <li className="flex items-start gap-2 text-xs text-white/60">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-brandSaffron" />
                <span>Durway, Gaya-Rajganj Road, Near FCI Godown, Gaya-823001</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-white/60">
                <Mail size={14} className="flex-shrink-0 text-brandSaffron" />
                <a href="mailto:bhrigaya@gmail.com" className="hover:text-white transition">bhrigaya@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-xs text-white/60">
                <Phone size={14} className="flex-shrink-0 text-brandSaffron" />
                <span>9162845503 / 9162845504</span>
              </li>
            </ul>

            <div className="flex items-center gap-2">
              <a href="#" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center bg-[#1877f2] rounded hover:scale-110 transition">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="YouTube" className="w-8 h-8 flex items-center justify-center bg-[#ff0000] rounded hover:scale-110 transition">
                <YoutubeIcon />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded hover:scale-110 transition">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Column 2, 3, 4 — All Menu Items (split into 3 columns) */}
          {[
            MENU.slice(0, 4),
            MENU.slice(4, 8),
            MENU.slice(8),
          ].map((chunk, colIdx) => (
            <div key={colIdx} className="space-y-1">
              {colIdx === 0 && (
                <h3 className="font-bold text-white text-sm mb-2 underline underline-offset-4 decoration-brandSaffron decoration-2">
                  Site Map
                </h3>
              )}
              {colIdx === 1 && (
                <h3 className="font-bold text-white text-sm mb-2 underline underline-offset-4 decoration-brandSaffron decoration-2 hidden lg:block">
                  &nbsp;
                </h3>
              )}
              {colIdx === 2 && (
                <h3 className="font-bold text-white text-sm mb-2 underline underline-offset-4 decoration-brandSaffron decoration-2 hidden lg:block">
                  &nbsp;
                </h3>
              )}

              {chunk.map((item) => (
                <div key={item.label} className="border-b border-white/5 last:border-0">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex-1 py-2 text-xs font-semibold text-white/70 hover:text-brandSaffron transition"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => toggleMenu(item.label)}
                        className="p-2 text-white/40 hover:text-brandSaffron transition"
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
                      className={`pb-2 pl-3 ${
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
                          <span className="w-1 h-1 rounded-full bg-brandSaffron flex-shrink-0" />
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

      {/* Bottom bar */}
      <div className="bg-[#222222] border-t border-white/10">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between py-3 gap-2 text-[11px] text-white/40">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved Buddha Hospital &amp; Research Institute</p>
          <p>
            Design &amp; Develop By: <span className="text-brandSaffron font-bold">BHRI Gaya</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
