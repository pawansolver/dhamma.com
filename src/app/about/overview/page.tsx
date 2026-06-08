"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useBooking } from "@/context/BookingContext";
import {
    Heart, Target, Eye, ShieldCheck, Users, Zap,
    Bed, UserCheck, Activity, Award, CheckCircle,
    GraduationCap, Building2, FlaskConical, HeartPulse,
    Baby, Globe, Phone, CalendarCheck, ChevronRight,
    TrendingUp, Lightbulb, Plus, Minus
} from "lucide-react";

/* ── Animated Counter ─────────────────────────────── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    useEffect(() => {
        if (!inView) return;
        let cur = 0;
        const inc = Math.ceil(target / 60);
        const t = setInterval(() => {
            cur += inc;
            if (cur >= target) { setCount(target); clearInterval(t); }
            else setCount(cur);
        }, 28);
        return () => clearInterval(t);
    }, [inView, target]);
    const display = target >= 1000 ? `${(count / 1000).toFixed(count >= target ? 0 : 1)}K` : count;
    return <span ref={ref}>{display}{suffix}</span>;
}

/* ── Floating orb ─────────────────────────────────── */
function FloatOrb({ className }: { className?: string }) {
    return (
        <motion.div
            className={`absolute rounded-full pointer-events-none ${className}`}
            animate={{ y: [0, -20, 0], scale: [1, 1.07, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
    );
}

/* ── FAQ Item ─────────────────────────────────────── */
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

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
});

export default function AboutOverview() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const { openBooking } = useBooking();

    const stats = [
        { icon: Bed, value: 300, suffix: "+", label: "Operational Beds" },
        { icon: UserCheck, value: 50, suffix: "+", label: "Expert Doctors" },
        { icon: Building2, value: 20, suffix: "+", label: "Departments" },
        { icon: Baby, value: 25, suffix: "+", label: "ICU / NICU Units" },
        { icon: Users, value: 5000, suffix: "+", label: "Monthly Patients" },
        { icon: FlaskConical, value: 12, suffix: "+", label: "Diagnostic Labs" },
    ];

    const values = [
        { icon: Heart, title: "Patient Centricity", color: "text-rose-400", points: ["Best outcomes for every patient", "Compassionate, dignified care", "Patient needs always come first"] },
        { icon: ShieldCheck, title: "Integrity", color: "text-blue-400", points: ["Principled and honest", "Transparent billing always", "Courage to do what's right"] },
        { icon: Users, title: "Teamwork", color: "text-teal-400", points: ["One unified team always", "Respect every colleague", "Collaborate across departments"] },
        { icon: TrendingUp, title: "Ownership", color: "text-orange-400", points: ["Responsible for outcomes", "Initiative beyond the call", "Deliver on every promise"] },
        { icon: Lightbulb, title: "Innovation", color: "text-purple-400", points: ["Continuous improvement", "Modern tools, better care", "Challenge status quo daily"] },
    ];

    const services = [
        { icon: Activity, title: "Multi-Speciality OPD" },
        { icon: ShieldCheck, title: "Emergency 24×7" },
        { icon: FlaskConical, title: "Diagnostics & Imaging" },
        { icon: Building2, title: "Modular OT Suites" },
        { icon: Baby, title: "Maternity & NICU" },
        { icon: HeartPulse, title: "Health Check-ups" },
        { icon: GraduationCap, title: "Medical Education" },
        { icon: Globe, title: "Community Outreach" },
    ];

    const faqs = [
        { q: "What is BHRI?", a: "Buddha Hospital & Research Institute (BHRI) is a modern multi-speciality hospital in Bodhgaya, Bihar. It provides comprehensive healthcare — from OPD consultations to emergency, surgical, critical, and diagnostic services — all under one roof." },
        { q: "What specialities are available?", a: "BHRI covers 20+ specialities including General Medicine, Surgery, Paediatrics, Obstetrics, ENT, Ophthalmology, Orthopaedics, Psychiatry, Radiology, Pathology, Pharmacology, Dermatology, Dentistry, Anaesthesiology, and more." },
        { q: "Is BHRI available for emergencies 24×7?", a: "Yes. Our emergency department is staffed 24 hours a day, 7 days a week, with Advanced Life Support ambulances, trauma-ready specialists, and direct ICU access. Call +91 8603048174 for emergencies." },
        { q: "How do I book an appointment?", a: "Book online via our website, call our helpline at +91 8603048174, or walk in directly. Our smart token system minimises waiting time across all OPD specialities." },
        { q: "Does BHRI accept insurance?", a: "Yes. We have cashless tie-ups with major insurance providers, TPAs, Ayushman Bharat (PMJAY), CGHS, and ECHS. Our insurance desk handles the authorisation process for you." },
    ];

    return (
        <div className="bg-[#0a0a0a] text-white overflow-x-hidden">

            {/* ═══════ HERO ═════════════════════════════════════════ */}
            <section className="relative min-h-screen flex items-end pb-16 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/about-hospital.png" alt="Buddha Hospital & Research Institute" fill priority className="object-cover object-top" />
                    {/* Dark cinematic overlays */}
                    <div className="absolute inset-0 bg-[#0a0a0a]/65" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent" />
                </div>

                <FloatOrb className="w-96 h-96 bg-amber-500/10 blur-3xl top-1/4 right-[12%]" />
                <FloatOrb className="w-64 h-64 bg-blue-400/8 blur-3xl bottom-1/4 right-[30%]" />

                {/* Breadcrumb */}
                <div className="absolute top-24 left-6 lg:left-12 z-20 flex items-center gap-2 text-white/40 text-xs">
                    <Link href="/" className="hover:text-white/70 transition">Home</Link>
                    <span>/</span>
                    <span className="text-amber-400">About Us</span>
                </div>

                {/* Main heading top-left */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="absolute top-36 left-6 lg:left-12 z-20 max-w-3xl"
                >
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400 mb-4 flex items-center gap-2">
                        <span className="w-5 h-px bg-amber-400 inline-block" /> BHRI — Bodhgaya, Bihar
                    </p>
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-[0.92] tracking-tight">
                        Healing with<br />Purpose.
                    </h1>
                </motion.div>

                {/* Bottom-left feature list */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                    className="relative z-20 flex flex-col gap-4 px-6 lg:px-12 max-w-sm"
                >
                    {[
                        { icon: Activity, text: "Multi-speciality hospital" },
                        { icon: HeartPulse, text: "Compassionate patient care" },
                        { icon: Award, text: "Medical education & research" },
                    ].map((f, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-white/8 border border-white/15 flex items-center justify-center flex-shrink-0">
                                <f.icon size={15} className="text-white" />
                            </div>
                            <p className="text-white/70 text-sm font-medium">{f.text}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Bottom-right CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.5 }}
                    className="absolute bottom-12 right-6 lg:right-12 z-20 text-right max-w-sm"
                >
                    <p className="text-2xl sm:text-3xl font-extrabold text-white mb-5 leading-tight">
                        Bihar's trusted<br />healthcare partner.
                    </p>
                    <button
                        onClick={openBooking}
                        className="inline-flex items-center gap-3 bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/20 text-white font-bold px-5 py-3 rounded-full text-sm hover:bg-white hover:text-black transition-all"
                    >
                        Book Appointment
                        <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center">
                            <ChevronRight size={13} />
                        </span>
                    </button>
                </motion.div>
            </section>

            {/* ═══════ INTRO — Beige + image cards ═════════════════ */}
            <section className="relative bg-[#e9e6df] text-[#1a1a1a] py-20 lg:py-28 overflow-hidden">
                <FloatOrb className="w-72 h-72 bg-amber-100/40 blur-3xl top-0 right-1/4" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div {...fadeUp()} className="flex items-start gap-3 mb-10">
                        <span className="text-2xl">✻</span>
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1a1a1a]/60 max-w-xs leading-relaxed">
                            Buddha Hospital &amp; Research Institute<br />A legacy of healing and innovation.
                        </p>
                    </motion.div>

                    <motion.h2 {...fadeUp(0.1)} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.02] tracking-tight max-w-5xl mb-12">
                        A Modern, Compassionate Hospital — for People and Practitioners.
                    </motion.h2>

                    {/* 4 image cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
                        {[
                            { img: "/hospital_interior_hd.png", value: "20+", unit: "specs", title: "Specialities", desc: "Multi-speciality care under one roof — from medicine to surgery and paediatrics." },
                            { img: "/hospital_icu_hd.png", value: "300+", unit: "beds", title: "Inpatient Capacity", desc: "Spacious wards, advanced ICU / NICU / PICU for round-the-clock care." },
                            { img: "/hospital_ot_hd.png", value: "12+", unit: "labs", title: "Diagnostic Labs", desc: "Pathology, biochemistry, microbiology and imaging — all in-house." },
                            { img: "/hospital_emergency_hd.png", value: "24×7", unit: "ER", title: "Emergency", desc: "Trauma-ready emergency team, ALS ambulances, and direct ICU access." },
                        ].map((card, i) => (
                            <motion.div key={i} {...fadeUp(i * 0.08)}
                                className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-[#1a1a1a] shadow-md cursor-default"
                            >
                                <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-105 transition duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/95 via-[#0a0a0a]/30 to-transparent" />
                                <div className="absolute top-0 left-0 right-0 p-4 flex items-start justify-between">
                                    <div>
                                        <span className="text-white text-2xl font-extrabold">{card.value}</span>
                                        <span className="text-white/60 text-[10px] ml-1 uppercase tracking-wider">{card.unit}</span>
                                        <p className="text-white text-xs font-semibold mt-1">{card.title}</p>
                                    </div>
                                    <span className="text-white/50 text-[10px]">●●●●</span>
                                </div>
                                <p className="absolute bottom-0 left-0 right-0 p-4 text-white/85 text-xs leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ STATS BAR ════════════════════════════════════ */}
            <section className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                        {stats.map((s, i) => (
                            <motion.div key={i} {...fadeUp(i * 0.07)}
                                className="flex flex-col items-center text-center py-8 px-4 border-r border-gray-100 last:border-r-0 hover:bg-slate-50 transition"
                            >
                                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                                    <s.icon size={20} />
                                </div>
                                <p className="text-3xl font-extrabold text-[#0b2545] leading-none">
                                    <Counter target={s.value} suffix={s.suffix} />
                                </p>
                                <p className="text-xs text-gray-500 mt-1.5 font-medium">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ VISION & MISSION ════════════════════════════ */}
            <section className="bg-[#0a0a0a] py-24 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.07),transparent_60%)]" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div {...fadeUp()} className="text-center mb-14">
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400 mb-4 flex items-center justify-center gap-2">
                            <span className="w-5 h-px bg-amber-400" /> Foundation <span className="w-5 h-px bg-amber-400" />
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-extrabold">Vision &amp; Mission</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Vision */}
                        <motion.div {...fadeUp(0.1)}
                            className="group relative bg-white/[0.05] border border-white/10 rounded-3xl p-10 overflow-hidden hover:bg-white/[0.08] transition-all duration-300"
                        >
                            <FloatOrb className="w-48 h-48 bg-amber-400/8 blur-2xl -top-6 -right-6" />
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-6">
                                    <Eye size={26} />
                                </div>
                                <h3 className="text-2xl font-extrabold text-white mb-5">Our Vision</h3>
                                <p className="text-white/55 text-[15px] leading-relaxed">
                                    To create a world-class integrated healthcare delivery system in Bihar, entailing the finest medical skills combined with compassionate patient care — accessible to every individual, regardless of background.
                                </p>
                            </div>
                        </motion.div>

                        {/* Mission */}
                        <motion.div {...fadeUp(0.18)}
                            className="group relative bg-amber-500/10 border border-amber-400/15 rounded-3xl p-10 overflow-hidden hover:bg-amber-500/15 transition-all duration-300"
                        >
                            <FloatOrb className="w-48 h-48 bg-amber-400/10 blur-2xl -bottom-6 -left-6" />
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/20 text-amber-300 flex items-center justify-center mb-6">
                                    <Target size={26} />
                                </div>
                                <h3 className="text-2xl font-extrabold text-white mb-5">Our Mission</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Provide affordable, high-quality healthcare to all",
                                        "Ensure patient safety and satisfaction always",
                                        "Adopt modern medical technologies continuously",
                                        "Support medical education and research",
                                    ].map((pt, i) => (
                                        <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                                            <CheckCircle size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════ SERVICES GRID ═══════════════════════════════ */}
            <section className="bg-[#0a0a0a] py-20 lg:py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div {...fadeUp()} className="mb-12">
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400 mb-4 flex items-center gap-2">
                            <span className="w-5 h-px bg-amber-400" /> What We Offer
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-extrabold">Comprehensive Services</h2>
                    </motion.div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {services.map((svc, i) => (
                            <motion.div key={i} {...fadeUp(i * 0.06)}
                                className="group flex flex-col items-center text-center bg-white/[0.04] border border-white/8 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-amber-500/30 transition-all cursor-default"
                            >
                                <div className="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-400 group-hover:bg-amber-500 group-hover:text-black flex items-center justify-center mb-4 transition-all">
                                    <svc.icon size={20} />
                                </div>
                                <p className="text-white/70 text-xs font-semibold group-hover:text-white transition-colors leading-snug">{svc.title}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ CORE VALUES ═════════════════════════════════ */}
            <section className="bg-[#111] py-24 lg:py-32 relative overflow-hidden">
                <FloatOrb className="w-[500px] h-[500px] bg-amber-500/6 blur-3xl -top-20 -right-20" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div {...fadeUp()} className="mb-14">
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400 mb-4 flex items-center gap-2">
                            <span className="w-5 h-px bg-amber-400" /> What Drives Us
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-extrabold">Core Values</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                        {values.map((v, i) => (
                            <motion.div key={i} {...fadeUp(i * 0.07)}
                                className="group bg-white/[0.04] border border-white/8 rounded-2xl p-7 hover:bg-white/[0.08] hover:border-amber-500/25 transition-all cursor-default"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-white/8 ${v.color} flex items-center justify-center mb-5 group-hover:scale-110 transition`}>
                                    <v.icon size={22} />
                                </div>
                                <h4 className="font-extrabold text-white text-sm mb-4">{v.title}</h4>
                                <ul className="space-y-2">
                                    {v.points.map((pt, j) => (
                                        <li key={j} className="flex items-start gap-2 text-white/45 text-[11px] leading-relaxed">
                                            <CheckCircle size={11} className="text-amber-400 flex-shrink-0 mt-0.5" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ SPLIT — Image + Community text ════════════════ */}
            <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                <div className="relative min-h-[400px] lg:min-h-0 overflow-hidden">
                    <Image src="/hospital_hero_hd.png" alt="BHRI Care" fill className="object-cover object-center" />
                    <div className="absolute inset-0 bg-[#0a0a0a]/20" />
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3"
                    >
                        <p className="text-white font-extrabold text-sm">BHRI — Bodhgaya</p>
                        <p className="text-white/50 text-xs mt-0.5">Gaya-Dobhi Road, Bihar</p>
                    </motion.div>
                </div>

                <div className="bg-[#d6cdb8] flex items-center px-10 lg:px-16 py-20 relative overflow-hidden">
                    <FloatOrb className="w-96 h-96 bg-amber-200/30 blur-3xl -bottom-20 -right-10" />
                    <div className="relative z-10 max-w-lg">
                        <h2 className="text-5xl lg:text-7xl font-extrabold text-[#1a1a1a] leading-[0.95] mb-6">
                            Bihar.<br />Bodhgaya.<br />One Mission.
                        </h2>
                        <p className="text-[#1a1a1a]/65 text-base leading-relaxed mb-10 max-w-md">
                            Healthcare shouldn&apos;t be limited by income, location, or time. BHRI is here to bring world-class clinical care to every family across Bihar and beyond.
                        </p>
                        <Link href="/contact"
                            className="inline-flex items-center gap-3 bg-[#1a1a1a] hover:bg-black text-white font-bold px-5 py-3 rounded-full text-sm transition-all"
                        >
                            Get In Touch
                            <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center">
                                <ChevronRight size={13} />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════ FAQ ══════════════════════════════════════════ */}
            <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
                <div className="relative min-h-[300px] lg:min-h-0 hidden lg:block overflow-hidden">
                    <Image src="/images/about-hospital.png" alt="" fill className="object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111]/60" />
                </div>
                <div className="bg-[#111] flex flex-col justify-center px-8 lg:px-14 py-20 relative overflow-hidden">
                    <FloatOrb className="w-64 h-64 bg-amber-500/8 blur-3xl -top-10 -left-10" />
                    <div className="relative z-10 max-w-2xl">
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400 mb-4 flex items-center gap-2">
                            <span className="w-5 h-px bg-amber-400" /> Quick Answers
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-10 leading-tight">About BHRI FAQs</h2>
                        <div>
                            {faqs.map((faq, i) => (
                                <FaqItem key={i} q={faq.q} a={faq.a} isOpen={openFaq === i} toggle={() => setOpenFaq(openFaq === i ? null : i)} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════ CTA ══════════════════════════════════════════ */}
            <section className="relative min-h-[500px] flex items-center overflow-hidden">
                <Image src="/images/about-hospital.png" alt="" fill className="object-cover object-top opacity-35" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/75 to-[#0a0a0a]/50" />
                <FloatOrb className="w-[600px] h-[600px] bg-amber-500/10 blur-3xl -top-40 right-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
                    <motion.div {...fadeUp()}>
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400 mb-5 flex items-center gap-2">
                            <span className="w-5 h-px bg-amber-400" /> Your Health, Our Priority
                        </p>
                        <h2 className="text-4xl lg:text-7xl font-extrabold text-white leading-[0.95] mb-6 max-w-3xl">
                            Trusted care,<br />every single day.
                        </h2>
                        <p className="text-white/45 text-base leading-relaxed mb-10 max-w-lg">
                            Visit BHRI — where expert medicine meets compassionate care. Walk in or book online for OPD, diagnostics, or emergency services.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={openBooking}
                                className="inline-flex items-center gap-2 bg-white text-black font-extrabold px-8 py-4 rounded-full text-sm hover:bg-amber-300 transition-all"
                            >
                                <CalendarCheck size={16} /> Book Appointment
                            </button>
                            <a href="tel:+918603048174"
                                className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-full border border-white/15 transition-all text-sm"
                            >
                                <Phone size={16} /> +91 8603048174
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
