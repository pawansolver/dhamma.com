"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Plus, Minus, Phone, CalendarCheck, ArrowRight, CheckCircle } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

/* ── Types ─────────────────────────────────────────────── */
export interface DeptData {
  name: string;
  tagline: string;
  heroImage: string;
  accentColor?: string; // tailwind class e.g. "teal"
  overview: string;
  highlights: string[];
  services: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
  facilities: string[];
  faqs: { q: string; a: string }[];
  splitImage?: string; // optional second image for split section
  splitHeading?: string;
  splitText?: string;
}

/* ── Floating shape decoration ────────────────────────── */
function FloatOrb({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      animate={{ y: [0, -18, 0], scale: [1, 1.06, 1] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function FloatLine({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{ x: [-6, 6, -6], opacity: [0.08, 0.18, 0.08] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ── FAQ Item ─────────────────────────────────────────── */
function FaqItem({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={toggle}
      >
        <span className="text-base font-semibold text-white/90">{q}</span>
        <span className="flex-shrink-0 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/50">
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden text-white/50 text-sm leading-relaxed pb-5"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Main Template ────────────────────────────────────── */
export default function DepartmentPage({ data }: { data: DeptData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { openBooking } = useBooking();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  });

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">

      {/* ═══════ HERO ═══════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={data.name}
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent" />
        </div>

        {/* Floating orbs */}
        <FloatOrb className="w-80 h-80 bg-teal-500/8 blur-3xl top-1/4 right-[15%]" />
        <FloatOrb className="w-56 h-56 bg-blue-400/6 blur-2xl bottom-1/3 right-[30%]" />
        <FloatLine className="h-[1px] w-72 bg-teal-400/20 top-[40%] right-[10%]" />

        {/* ── Main content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 pb-12 flex-1">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/30 text-xs mb-10">
            <Link href="/" className="hover:text-white/60 transition">Home</Link>
            <ChevronRight size={12} />
            <Link href="#" className="hover:text-white/60 transition">Departments</Link>
            <ChevronRight size={12} />
            <span className="text-teal-400">{data.name}</span>
          </div>

          {/* Small tag */}
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold uppercase tracking-[0.28em] text-teal-400 mb-4 flex items-center gap-2"
          >
            <span className="w-6 h-px bg-teal-500" />
            Dhamma Superspeciality Hospital
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mb-6 max-w-4xl"
          >
            {data.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/55 text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
          >
            {data.tagline}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <button
              onClick={openBooking}
              className="inline-flex items-center gap-2 bg-white text-black font-extrabold px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-[12px] sm:text-sm hover:bg-teal-300 transition-all"
            >
              Book Consultation <ArrowRight size={15} />
            </button>
            <a href="tel:+917643990301"
              className="inline-flex items-center gap-2 sm:gap-3 border border-white/20 text-white/80 px-4 py-2 sm:px-6 sm:py-3.5 rounded-full text-[11px] sm:text-sm hover:border-white/50 hover:text-white transition-all"
            >
              <Phone size={12} className="flex-shrink-0 sm:w-3.5 sm:h-3.5" />
              <span className="whitespace-nowrap">+91 7643990301 / +9176439 90302</span>
            </a>
          </motion.div>
        </div>

        {/* ── Stats strip — sits naturally below content, no absolute ── */}
        <div className="relative z-10 bg-white/5 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {data.stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-xl sm:text-2xl font-extrabold text-white">{s.value}</p>
                <p className="text-white/40 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ OVERVIEW ═══════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <FloatOrb className="w-[500px] h-[500px] bg-teal-500/5 blur-3xl -top-20 -right-20" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            <motion.div {...fadeUp()} className="lg:col-span-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-teal-400 mb-4 flex items-center gap-2">
                <span className="w-5 h-px bg-teal-500" /> Overview
              </p>
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-8 text-white">
                About the<br />Department
              </h2>
              <ul className="space-y-3 mt-2">
                {data.highlights.map((h, i) => (
                  <motion.li key={i} {...fadeUp(i * 0.07)} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
                    <CheckCircle size={15} className="text-teal-400 flex-shrink-0 mt-0.5" />
                    {h}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="lg:col-span-7">
              <div className="bg-white/[0.04] border border-white/8 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                <FloatOrb className="w-40 h-40 bg-teal-400/8 blur-2xl -top-6 -right-6" />
                <p className="text-white/55 text-lg leading-relaxed relative z-10">
                  {data.overview}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════ SERVICES GRID ══════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp()} className="mb-14">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-teal-400 mb-4 flex items-center gap-2">
              <span className="w-5 h-px bg-teal-500" /> Services
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white">What We Offer</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.services.map((svc, i) => (
              <motion.div key={i} {...fadeUp(i * 0.06)}
                className="group relative bg-white/[0.04] border border-white/8 rounded-2xl p-7 hover:bg-white/[0.08] hover:border-teal-500/30 transition-all duration-300 overflow-hidden cursor-default"
              >
                <FloatOrb className="w-24 h-24 bg-teal-400/6 blur-xl -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/20 flex items-center justify-center mb-5">
                  <span className="text-teal-400 font-extrabold text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-extrabold text-white text-base mb-2 leading-snug">{svc.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SPLIT SECTION (image + text) ══════════════ */}
      {data.splitImage && (
        <section className="relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
            {/* Image half */}
            <div className="relative min-h-[360px] lg:min-h-0 overflow-hidden">
              <Image src={data.splitImage} alt="" fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-[#0a0a0a]/30" />
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3"
              >
                <p className="text-white font-extrabold text-sm">{data.name}</p>
                <p className="text-white/50 text-xs mt-0.5">Dhamma Superspeciality Hospital, Patna</p>
              </motion.div>
            </div>

            {/* Text half */}
            <div className="bg-[#0f0f0f] flex items-center px-10 lg:px-16 py-16 relative overflow-hidden">
              <FloatOrb className="w-72 h-72 bg-teal-500/8 blur-3xl -bottom-10 -right-10" />
              <div className="relative z-10 max-w-lg">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-teal-400 mb-4 flex items-center gap-2">
                  <span className="w-5 h-px bg-teal-500" /> Excellence
                </p>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                  {data.splitHeading || "Clinical Excellence"}
                </h2>
                <p className="text-white/50 text-base leading-relaxed mb-8">
                  {data.splitText || data.overview}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {data.facilities.slice(0, 4).map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-white/55 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0 mt-1" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════ FACILITIES ══════════════════════════════════ */}
      <section className="py-24 lg:py-28 bg-[#0a0a0a] relative overflow-hidden">
        <FloatOrb className="w-96 h-96 bg-blue-400/5 blur-3xl top-0 left-0" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div {...fadeUp()} className="mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-teal-400 mb-4 flex items-center gap-2">
              <span className="w-5 h-px bg-teal-500" /> Infrastructure
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white">Facilities &amp; Equipment</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.facilities.map((f, i) => (
              <motion.div key={i} {...fadeUp(i * 0.05)}
                className="flex items-center gap-3 bg-white/[0.04] border border-white/8 rounded-xl px-5 py-4 hover:bg-white/[0.07] hover:border-teal-500/25 transition-all group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 group-hover:scale-150 transition-transform flex-shrink-0" />
                <span className="text-white/60 group-hover:text-white text-sm font-medium transition-colors">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
          {/* Left image */}
          <div className="relative min-h-[300px] lg:min-h-0 overflow-hidden hidden lg:block">
            <Image src={data.heroImage} alt="" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/10 to-[#0a0a0a]/70" />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-8 bg-[#0a0a0a]/60 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-4 max-w-[200px]"
            >
              <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Department</p>
              <p className="text-white font-bold text-sm leading-tight">{data.name}</p>
            </motion.div>
          </div>

          {/* Right FAQ */}
          <div className="bg-[#111] flex flex-col justify-center px-8 lg:px-14 py-16 relative overflow-hidden">
            <FloatOrb className="w-64 h-64 bg-teal-500/6 blur-3xl -top-10 -left-10" />
            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-teal-400 mb-4 flex items-center gap-2">
                <span className="w-5 h-px bg-teal-500" /> FAQ
              </p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-8">Quick Answers</h2>

              <div className="space-y-0">
                {data.faqs.map((faq, i) => (
                  <FaqItem
                    key={i}
                    q={faq.q}
                    a={faq.a}
                    isOpen={openFaq === i}
                    toggle={() => setOpenFaq(openFaq === i ? null : i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ══════════════════════════════════════════ */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <Image src={data.splitImage || data.heroImage} alt="" fill className="object-cover object-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]/60" />
        <FloatOrb className="w-[600px] h-[600px] bg-teal-500/8 blur-3xl -top-40 right-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <motion.div {...fadeUp()}>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-teal-400 mb-4 flex items-center gap-2">
              <span className="w-5 h-px bg-teal-500" /> Get in Touch
            </p>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-5 max-w-2xl">
              Ready to consult with our experts?
            </h2>
            <p className="text-white/45 text-base mb-10 max-w-lg leading-relaxed">
              Our specialists at the Department of {data.name} are available for consultations, referrals, and emergency care.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={openBooking}
                className="inline-flex items-center gap-2 bg-white text-black font-extrabold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-[12px] sm:text-sm hover:bg-teal-300 transition-all"
              >
                <CalendarCheck size={16} /> Book Appointment
              </button>
              <a href="tel:+917643990301"
                className="inline-flex items-center gap-2 sm:gap-3 bg-white/8 hover:bg-white/15 text-white font-semibold px-4 py-2 sm:px-8 sm:py-3.5 rounded-full border border-white/15 transition-all text-[11px] sm:text-sm"
              >
                <Phone size={12} className="flex-shrink-0 sm:w-3.5 sm:h-3.5" />
                <span className="whitespace-nowrap">+91 7643990301 / +9176439 90302</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
