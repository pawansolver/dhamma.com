"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus, Phone, CalendarCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

/* ── Types ───────────────────────────────────────── */
export interface HospitalSubData {
  /** Page heading H1 — e.g. "OPD Services" */
  name: string;
  /** Hero massive heading split in two lines */
  heroTitleLine1: string;
  heroTitleLine2: string;
  /** Tagline under the bottom-right CTA in hero */
  ctaTagline: string;
  /** Hero, intro, split, faq images */
  heroImage: string;
  introImages: string[]; // 4 images for the intro card grid
  splitImage: string;
  faqImage: string;
  /** Top section bold tagline */
  introHeadline: string;
  /** Small label above intro headline */
  introBadge: string;
  /** 4 stat cards in intro grid */
  introCards: { value: string; unit: string; title: string; desc: string; img: string }[];
  /** Stats block "Anyone Anywhere" tagline */
  bigStatsHeading: string;
  bigStatsSubheading: string;
  /** 4 features for stat strip */
  features: { icon: LucideIcon; title: string; desc: string }[];
  /** Services section heading + 6 services */
  servicesBadge: string;
  servicesHeading: string;
  services: { num: string; title: string; desc: string }[];
  /** Split section text */
  splitHeading: string;
  splitText: string;
  splitBadgeTitle: string;
  splitBadgeSub: string;
  /** Facilities */
  facilities: string[];
  /** Stats numbers */
  stats: { value: string; label: string }[];
  /** FAQ */
  faqs: { q: string; a: string }[];
  /** CTA */
  ctaHeadingLine1: string;
  ctaHeadingLine2: string;
  ctaText: string;
  /** Theme accent — "amber" or "teal" */
  accent?: "amber" | "teal";
}

/* ── Floating orb ───────────────────────────────── */
function FloatOrb({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      animate={{ y: [0, -22, 0], scale: [1, 1.08, 1] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ── FAQ Item ───────────────────────────────────── */
function FaqItem({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button className="w-full flex items-center justify-between py-5 text-left gap-4" onClick={toggle}>
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

/* ── Main Template ──────────────────────────────── */
export default function HospitalSubPage({ data }: { data: HospitalSubData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openBooking } = useBooking();
  const accent = data.accent || "amber";
  const accentText = accent === "teal" ? "text-teal-400" : "text-amber-400";
  const accentBg = accent === "teal" ? "bg-teal-400" : "bg-amber-400";
  const accentHover = accent === "teal" ? "hover:bg-teal-300" : "hover:bg-amber-300";
  const accentBlur = accent === "teal" ? "bg-teal-500/8" : "bg-amber-500/8";
  const accentBlurStrong = accent === "teal" ? "bg-teal-500/10" : "bg-amber-500/10";
  const accentHoverBorder = accent === "teal" ? "hover:border-teal-500/30" : "hover:border-amber-500/30";
  const accentHoverBorder25 = accent === "teal" ? "hover:border-teal-500/25" : "hover:border-amber-500/25";
  const accentSubText = accent === "teal" ? "text-teal-400/80" : "text-amber-400/80";

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  });

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">

      {/* ═══════ HERO ═══════════════════════════════ */}
      <section className="relative min-h-screen flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={data.heroImage} alt={data.name} fill priority className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-[#0a0a0a]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/85 via-transparent to-transparent" />
        </div>

        <FloatOrb className={`w-80 h-80 ${accentBlurStrong} blur-3xl top-[30%] right-[15%]`} />
        <FloatOrb className="w-64 h-64 bg-blue-400/8 blur-3xl bottom-1/4 right-[35%]" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-6 lg:left-12 z-20 flex items-center gap-2 text-white/40 text-xs">
          <Link href="/" className="hover:text-white/70 transition">Home</Link>
          <span>/</span>
          <Link href="/hospital/the-hospital" className="hover:text-white/70 transition">Hospital</Link>
          <span>/</span>
          <span className={accentText}>{data.name}</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute top-36 left-6 lg:left-12 text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-[0.92] tracking-tight max-w-3xl z-20"
        >
          {data.heroTitleLine1}<br />{data.heroTitleLine2}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="absolute bottom-12 right-6 lg:right-12 text-right z-20 max-w-md"
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-5 leading-tight">
            {data.ctaTagline}
          </p>
          <button
            onClick={openBooking}
            className="inline-flex items-center gap-3 bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/20 text-white font-bold px-5 py-3 rounded-full text-sm hover:bg-white hover:text-black transition-all"
          >
            Book Appointment
            <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center">
              <ArrowRight size={13} />
            </span>
          </button>
        </motion.div>
      </section>

      {/* ═══════ INTRO — Beige with image cards ═══════ */}
      <section className="relative bg-[#e9e6df] text-[#1a1a1a] py-20 lg:py-28 overflow-hidden">
        <FloatOrb className="w-72 h-72 bg-amber-100/40 blur-3xl top-0 right-1/4" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div {...fadeUp()} className="flex items-start gap-3 mb-10">
            <span className="text-2xl">✻</span>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1a1a1a]/60 max-w-xs leading-relaxed">
              {data.introBadge}
            </p>
          </motion.div>

          <motion.h2 {...fadeUp(0.1)} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.02] tracking-tight max-w-5xl mb-12">
            {data.introHeadline}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
            {data.introCards.map((card, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-[#1a1a1a] shadow-md cursor-default"
              >
                <Image src={card.img} alt={card.title} fill className="object-cover object-center group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/95 via-[#0a0a0a]/30 to-transparent" />

                <div className="absolute top-0 left-0 right-0 p-4 flex items-start justify-between">
                  <div>
                    <span className="text-white text-2xl font-extrabold">{card.value}</span>
                    <span className="text-white/60 text-[10px] ml-1 uppercase tracking-wider">{card.unit}</span>
                    <p className="text-white text-xs font-semibold mt-1">{card.title}</p>
                  </div>
                  <span className="text-white/50 text-[10px] tracking-wider">●●●●</span>
                </div>

                <p className="absolute bottom-0 left-0 right-0 p-4 text-white/85 text-xs leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ STATS — Anyone Anywhere style ═══════ */}
      <section className="relative bg-[#e9e6df] py-16 border-t border-[#1a1a1a]/8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 {...fadeUp()} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] leading-tight mb-12">
            {data.bigStatsHeading}<br />
            <span className="text-[#1a1a1a]/60">{data.bigStatsSubheading}</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-[#1a1a1a]/15 pt-10">
            {data.features.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="border-l border-[#1a1a1a]/10 pl-6 first:border-l-0 first:pl-0">
                <div className="w-10 h-10 mb-5 text-[#1a1a1a]/80">
                  <s.icon size={32} />
                </div>
                <p className="font-extrabold text-[#1a1a1a] mb-2">{s.title}</p>
                <p className="text-[#1a1a1a]/55 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DARK SERVICES ═══════════════════════ */}
      <section className="bg-[#0a0a0a] py-24 lg:py-32 relative overflow-hidden">
        <FloatOrb className={`w-[600px] h-[600px] ${accentBlur} blur-3xl -top-20 -right-20`} />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div {...fadeUp()} className="mb-14">
            <p className={`text-[10px] font-bold uppercase tracking-[0.28em] ${accentText} mb-4 flex items-center gap-2`}>
              <span className={`w-5 h-px ${accentBg}`} /> {data.servicesBadge}
            </p>
            <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight max-w-3xl">
              {data.servicesHeading}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.services.map((svc, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)}
                className={`group relative bg-white/[0.04] border border-white/8 rounded-2xl p-7 hover:bg-white/[0.08] ${accentHoverBorder} transition-all duration-300 overflow-hidden cursor-default`}
              >
                <FloatOrb className={`w-24 h-24 ${accent === "teal" ? "bg-teal-400/8" : "bg-amber-400/8"} blur-xl -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <p className={`${accentSubText} text-xs font-bold uppercase tracking-widest mb-5`}>{svc.num}</p>
                <h3 className="text-xl font-extrabold text-white mb-3 leading-snug">{svc.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{svc.desc}</p>
                <ArrowRight size={16} className={`absolute bottom-7 right-7 text-white/30 group-hover:${accentText} group-hover:translate-x-1 transition-all`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SPLIT — Image + Beige text ═══════ */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">
        <div className="relative min-h-[400px] lg:min-h-0 overflow-hidden">
          <Image src={data.splitImage} alt={data.splitBadgeTitle} fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#0a0a0a]/15" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3"
          >
            <p className="text-white font-extrabold text-sm">{data.splitBadgeTitle}</p>
            <p className="text-white/50 text-xs mt-0.5">{data.splitBadgeSub}</p>
          </motion.div>
        </div>

        <div className="bg-[#d6cdb8] flex items-center px-10 lg:px-16 py-20 relative overflow-hidden">
          <FloatOrb className="w-96 h-96 bg-amber-200/30 blur-3xl -bottom-20 -right-10" />
          <div className="relative z-10 max-w-lg">
            <h2 className="text-5xl lg:text-7xl font-extrabold text-[#1a1a1a] leading-[0.95] mb-6">
              {data.splitHeading}
            </h2>
            <p className="text-[#1a1a1a]/65 text-base leading-relaxed mb-10 max-w-md">
              {data.splitText}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#000] text-white font-bold px-5 py-3 rounded-full text-sm transition-all"
            >
              Get In Touch
              <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center">
                <ArrowRight size={13} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ FACILITIES + STATS ═══════════════════ */}
      <section className="bg-[#0a0a0a] py-24 lg:py-28 relative overflow-hidden">
        <FloatOrb className="w-96 h-96 bg-blue-400/5 blur-3xl top-0 left-0" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div {...fadeUp()} className="mb-12">
            <p className={`text-[10px] font-bold uppercase tracking-[0.28em] ${accentText} mb-4 flex items-center gap-2`}>
              <span className={`w-5 h-px ${accentBg}`} /> Infrastructure
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold">Facilities &amp; Amenities</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.facilities.map((f, i) => (
              <motion.div key={i} {...fadeUp(i * 0.05)}
                className={`flex items-center gap-3 bg-white/[0.04] border border-white/8 rounded-xl px-5 py-4 hover:bg-white/[0.08] ${accentHoverBorder25} transition-all group`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${accentBg} group-hover:scale-150 transition-transform flex-shrink-0`} />
                <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors">{f}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {data.stats.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.06)}
                className={`bg-white/[0.04] border border-white/8 rounded-2xl px-6 py-7 hover:bg-white/[0.08] ${accentHoverBorder} transition-all`}
              >
                <p className="text-3xl lg:text-4xl font-extrabold text-white">{s.value}</p>
                <p className="text-white/45 text-xs mt-1.5 uppercase tracking-wider">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════════════════════════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">
        <div className="relative min-h-[400px] lg:min-h-0 hidden lg:block overflow-hidden">
          <Image src={data.faqImage} alt="" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111]/60" />
        </div>
        <div className="bg-[#111] flex flex-col justify-center px-8 lg:px-14 py-20 relative overflow-hidden">
          <FloatOrb className={`w-72 h-72 ${accentBlur} blur-3xl -top-10 -left-10`} />
          <div className="relative z-10 max-w-2xl">
            <p className={`text-[10px] font-bold uppercase tracking-[0.28em] ${accentText} mb-4 flex items-center gap-2`}>
              <span className={`w-5 h-px ${accentBg}`} /> Quick Answers
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-10 leading-tight">{data.name} FAQs</h2>
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
      </section>

      {/* ═══════ CTA ══════════════════════════════ */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <Image src={data.heroImage} alt="" fill className="object-cover object-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/75 to-[#0a0a0a]/40" />
        <FloatOrb className={`w-[600px] h-[600px] ${accentBlurStrong} blur-3xl -top-40 right-0`} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <motion.div {...fadeUp()}>
            <p className={`text-[10px] font-bold uppercase tracking-[0.28em] ${accentText} mb-5 flex items-center gap-2`}>
              <span className={`w-5 h-px ${accentBg}`} /> Ready to Help
            </p>
            <h2 className="text-4xl lg:text-7xl font-extrabold text-white leading-[0.95] mb-6 max-w-3xl">
              {data.ctaHeadingLine1}<br />{data.ctaHeadingLine2}
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-10 max-w-lg">
              {data.ctaText}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={openBooking}
                className={`inline-flex items-center gap-2 bg-white text-black font-extrabold px-8 py-4 rounded-full text-sm ${accentHover} transition-all`}
              >
                <CalendarCheck size={16} /> Book Appointment
              </button>
              <a href="tel:+918603048174"
                className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-full border border-white/15 transition-all text-sm"
              >
                <Phone size={16} /> +91 8603048174 / 9060646592
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
