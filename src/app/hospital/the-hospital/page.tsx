"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Activity, ShieldCheck, HeartPulse, Stethoscope, Microscope,
    Bed, Clock, Users, ArrowRight, Plus, Minus, Phone,
    CalendarCheck, ChevronRight, Globe, Award
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

/* â”€â”€ Floating Orb Animation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function FloatOrb({ className }: { className?: string }) {
    return (
        <motion.div
            className={`absolute rounded-full pointer-events-none ${className}`}
            animate={{ y: [0, -22, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
    );
}

/* â”€â”€ FAQ Item â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

export default function HospitalPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const { openBooking } = useBooking();

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay },
    });

    const heroFeatures = [
        { icon: Activity, title: "Real-Time Care", desc: "Round-the-clock acute care without delays." },
        { icon: HeartPulse, title: "Patient-First Approach", desc: "Personalised treatment for every individual." },
        { icon: ShieldCheck, title: "Holistic Health Monitoring", desc: "Combining medical, diagnostic, and wellness data." },
    ];

    const stats = [
        { value: "300+", label: "Operational Beds" },
        { value: "50+", label: "Specialist Doctors" },
        { value: "24Ã—7", label: "Emergency Cover" },
        { value: "20+", label: "Departments" },
    ];

    const services = [
        { num: "01", title: "Outpatient Care", desc: "Comprehensive consultation across all specialities." },
        { num: "02", title: "Inpatient Wards", desc: "Spacious wards with dedicated nursing care." },
        { num: "03", title: "Critical Care", desc: "Modern ICU, NICU, and PICU facilities." },
        { num: "04", title: "Surgical Suites", desc: "Modular operation theatres for all surgeries." },
        { num: "05", title: "Diagnostics", desc: "Advanced labs and imaging under one roof." },
        { num: "06", title: "Pharmacy & Support", desc: "24/7 in-house pharmacy and patient services." },
    ];

    const facilities = [
        "Spacious Patient Wards", "Advanced ICU/NICU/PICU", "Modular Operation Theatres",
        "Digital Imaging Suite", "24/7 Pharmacy", "Cafeteria & Mess",
        "Ambulance Service", "Wheelchair Access",
    ];

    const faqs = [
        { q: "What kind of hospital Is Dhamma Superspeciality Hospital?", a: "Dhamma Superspeciality Hospital is a modern multi-speciality hospital and research institute providing comprehensive healthcare services from outpatient consultation to advanced critical care, surgery, and diagnostics — all under one roof in Patna, Bihar." },
        { q: "Does Dhamma Superspeciality Hospital offer 24/7 emergency services?", a: "Yes. Our emergency department operates 24×7 with dedicated trauma care, ambulance support, and rapid response teams to handle critical medical situations at any hour." },
        { q: "What specialities are available?", a: "Dhamma Superspeciality Hospital covers 20+ medical specialities including General Medicine, Surgery, Cardiology, Orthopaedics, Paediatrics, Obstetrics & Gynaecology, ENT, Ophthalmology, Psychiatry, Radiology, and many more." },
        { q: "Can patients book appointments online?", a: "Yes. Patients can book OPD appointments through our website, by phone, or directly at the hospital reception. Our online system shows available doctors and time slots in real time." },
        { q: "Are the facilities accessible to all patients?", a: "Yes. The hospital is fully wheelchair accessible with ramps, elevators, dedicated washrooms, and patient-assist services for elderly and differently-abled patients." },
        { q: "Does Dhamma Superspeciality Hospital have insurance cashless tie-ups?", a: "Yes. We have cashless tie-ups with major insurance providers and TPAs. Patients can avail cashless treatment after pre-authorisation through our insurance desk." },
    ];

    return (
        <div className="bg-[#0a0a0a] text-white overflow-x-hidden">

            {/* ═══════ HERO — Full bleed cinematic ══════════════════════════ */}
            <section className="relative min-h-[100dvh] pt-28 sm:pt-36 pb-12 sm:pb-16 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/hospital_hero_hd.png" alt="The Hospital" fill priority className="object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-[#0a0a0a]/30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/85 via-transparent to-transparent" />
                </div>

                <FloatOrb className="w-80 h-80 bg-amber-500/10 blur-3xl top-[30%] right-[15%]" />
                <FloatOrb className="w-64 h-64 bg-blue-400/8 blur-3xl bottom-1/4 right-[35%]" />

                {/* Top heading */}
                <div className="relative z-20 w-full px-6 lg:px-12 flex flex-col gap-6 sm:gap-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-[1.05] sm:leading-[0.92] tracking-tight max-w-3xl text-white"
                    >
                        Care You<br />Can Trust.
                    </motion.h1>
                </div>

                {/* Bottom content wrapper */}
                <div className="relative z-20 w-full px-6 lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8 sm:gap-10 mt-12 sm:mt-auto">
                    {/* Bottom-left feature cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.4 }}
                        className="flex flex-col gap-5 max-w-md"
                    >
                        {heroFeatures.map((f, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/8 border border-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <f.icon size={16} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">{f.title}</p>
                                    <p className="text-white/45 text-xs leading-relaxed mt-0.5">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Bottom-right CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.5 }}
                        className="text-left md:text-right max-w-md mt-6 md:mt-0"
                    >
                        <h2 className="section-heading-white mb-6">
                            Modern medicine,<br />delivered with care.
                        </h2>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/20 text-white font-bold px-5 py-3 rounded-full text-sm hover:bg-white hover:text-black transition-all"
                        >
                            Book Appointment
                            <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center">
                                <ArrowRight size={13} />
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* â•â•â•â•â•â•â• INTRO â€” Light Bold Headline â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <section className="relative bg-[#e9e6df] text-[#1a1a1a] py-20 lg:py-28 overflow-hidden">
                <FloatOrb className="w-72 h-72 bg-amber-100/40 blur-3xl top-0 right-1/4" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div {...fadeUp()} className="flex items-start gap-3 mb-10">
                        <span className="text-2xl">âœ»</span>
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1a1a1a]/60 max-w-xs leading-relaxed">
                            Dhamma Superspeciality Hospital<br />Where care begins, healing follows.
                        </p>
                    </motion.div>

                    <motion.h2 {...fadeUp(0.1)} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.02] tracking-tight max-w-5xl mb-12">
                        A Modern, Compassionate Hospital â€” for People and Practitioners.
                    </motion.h2>

                    {/* 4 image cards row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
                        {[
                            { img: "/hospital_interior_hd.png", value: "20+", unit: "specs", title: "Departments", desc: "Multi-speciality care under one roof â€” internal medicine to surgery, paediatrics to psychiatry." },
                            { img: "/hospital_icu_hd.png", value: "300", unit: "beds", title: "Inpatient", desc: "Spacious wards, advanced ICU/NICU/PICU and recovery suites for round-the-clock care." },
                            { img: "/hospital_ot_hd.png", value: "12", unit: "OT", title: "Surgical Suites", desc: "Modular operation theatres with high-end equipment for complex and routine surgeries." },
                            { img: "/hospital_hero_hd.png", value: "24Ã—7", unit: "ER", title: "Emergency", desc: "Always-on trauma and critical care, ambulance support, and rapid response teams." },
                        ].map((card, i) => (
                            <motion.div key={i} {...fadeUp(i * 0.08)}
                                className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-[#1a1a1a] shadow-md cursor-default"
                            >
                                <Image src={card.img} alt={card.title} fill className="object-cover object-center group-hover:scale-105 transition duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/95 via-[#0a0a0a]/30 to-transparent" />

                                {/* Top overlay */}
                                <div className="absolute top-0 left-0 right-0 p-4 flex items-start justify-between">
                                    <div>
                                        <span className="text-white text-2xl font-extrabold">{card.value}</span>
                                        <span className="text-white/60 text-[10px] ml-1 uppercase tracking-wider">{card.unit}</span>
                                        <p className="text-white text-xs font-semibold mt-1">{card.title}</p>
                                    </div>
                                    <span className="text-white/50 text-[10px] tracking-wider">â—â—â—â—</span>
                                </div>

                                {/* Bottom desc */}
                                <p className="absolute bottom-0 left-0 right-0 p-4 text-white/85 text-xs leading-relaxed">
                                    {card.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* â•â•â•â•â•â•â• STATS â€” Anyone Anywhere style â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <section className="relative bg-[#e9e6df] py-16 border-t border-[#1a1a1a]/8 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.h2 {...fadeUp()} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] leading-tight mb-12">
                        Anyone. Anywhere.<br />
                        <span className="text-[#1a1a1a]/60">300+ beds, 20+ specialities.</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-[#1a1a1a]/15 pt-10">
                        {[
                            { icon: Activity, title: "No Long Wait Times", desc: "Streamlined admissions and triage â€” get seen faster, treated faster." },
                            { icon: Microscope, title: "Smarter Diagnostics", desc: "Advanced labs, imaging and pathology â€” accurate results, every time." },
                            { icon: HeartPulse, title: "Tailored to You", desc: "Personalised treatment plans built around your medical history and lifestyle." },
                            { icon: Globe, title: "Always-On Awareness", desc: "Our team monitors patients continuously â€” proactive, not reactive." },
                        ].map((s, i) => (
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

            {/* â•â•â•â•â•â•â• DARK SERVICES â€” Compact pro grid â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <section className="bg-[#0a0a0a] py-24 lg:py-32 relative overflow-hidden">
                <FloatOrb className="w-[600px] h-[600px] bg-amber-500/8 blur-3xl -top-20 -right-20" />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div {...fadeUp()} className="mb-14">
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400 mb-4 flex items-center gap-2">
                            <span className="w-5 h-px bg-amber-400" /> What We Do
                        </p>
                        <h2 className="section-heading">
                            Complete care,<br />from arrival to recovery.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {services.map((svc, i) => (
                            <motion.div key={i} {...fadeUp(i * 0.07)}
                                className="group relative bg-white/[0.04] border border-white/8 rounded-2xl p-7 hover:bg-white/[0.08] hover:border-amber-500/30 transition-all duration-300 overflow-hidden cursor-default"
                            >
                                <FloatOrb className="w-24 h-24 bg-amber-400/8 blur-xl -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <p className="text-amber-400/80 text-xs font-bold uppercase tracking-widest mb-5">{svc.num}</p>
                                <h3 className="text-xl font-extrabold text-white mb-3 leading-snug">{svc.title}</h3>
                                <p className="text-white/45 text-sm leading-relaxed">{svc.desc}</p>
                                <ArrowRight size={16} className="absolute bottom-7 right-7 text-white/30 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* â•â•â•â•â•â•â• SPLIT â€” Beige large image + text â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">
                {/* Left image */}
                <div className="relative min-h-[400px] lg:min-h-0 overflow-hidden">
                    <Image src="/hospital_icu_hd.png" alt="ICU Care" fill className="object-cover object-center" />
                    <div className="absolute inset-0 bg-[#0a0a0a]/15" />
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3"
                    >
                        <p className="text-white font-extrabold text-sm">Critical Care Unit</p>
                        <p className="text-white/50 text-xs mt-0.5">Modern ICU, NICU & PICU</p>
                    </motion.div>
                </div>

                {/* Right text */}
                <div className="bg-[#d6cdb8] flex items-center px-10 lg:px-16 py-20 relative overflow-hidden">
                    <FloatOrb className="w-96 h-96 bg-amber-200/30 blur-3xl -bottom-20 -right-10" />
                    <div className="relative z-10 max-w-lg">
                        <h2 className="section-heading">
                            Everyone.<br />Everywhere.
                        </h2>
                        <p className="text-[#1a1a1a]/65 text-base leading-relaxed mb-10 max-w-md">
                            Healthcare shouldn&apos;t be limited by income, location, or time. Dhamma Superspeciality Hospital exists to bring world-class clinical care into the hands of every family in Bihar.
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

            {/* â•â•â•â•â•â•â• FACILITIES â€” Dark pill grid â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <section className="bg-[#0a0a0a] py-24 lg:py-28 relative overflow-hidden">
                <FloatOrb className="w-96 h-96 bg-blue-400/5 blur-3xl top-0 left-0" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div {...fadeUp()} className="mb-12">
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400 mb-4 flex items-center gap-2">
                            <span className="w-5 h-px bg-amber-400" /> Infrastructure
                        </p>
                        <h2 className="section-heading">Facilities &amp; Amenities</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {facilities.map((f, i) => (
                            <motion.div key={i} {...fadeUp(i * 0.05)}
                                className="flex items-center gap-3 bg-white/[0.04] border border-white/8 rounded-xl px-5 py-4 hover:bg-white/[0.08] hover:border-amber-500/25 transition-all group"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:scale-150 transition-transform flex-shrink-0" />
                                <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors">{f}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats strip below */}
                    <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {stats.map((s, i) => (
                            <motion.div key={i} {...fadeUp(i * 0.06)}
                                className="bg-white/[0.04] border border-white/8 rounded-2xl px-6 py-7 hover:bg-white/[0.08] hover:border-amber-500/30 transition-all"
                            >
                                <p className="text-3xl lg:text-4xl font-extrabold text-white">{s.value}</p>
                                <p className="text-white/45 text-xs mt-1.5 uppercase tracking-wider">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* â•â•â•â•â•â•â• FAQ â€” Image left + Accordion right â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">
                <div className="relative min-h-[400px] lg:min-h-0 hidden lg:block overflow-hidden">
                    <Image src="/hospital_ot_hd.png" alt="" fill className="object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111]/60" />
                </div>
                <div className="bg-[#111] flex flex-col justify-center px-8 lg:px-14 py-20 relative overflow-hidden">
                    <FloatOrb className="w-72 h-72 bg-amber-500/8 blur-3xl -top-10 -left-10" />
                    <div className="relative z-10 max-w-2xl">
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400 mb-4 flex items-center gap-2">
                            <span className="w-5 h-px bg-amber-400" /> Quick Answers
                        </p>
                        <h2 className="section-heading-white">Hospital FAQs</h2>
                        <div className="space-y-0">
                            {faqs.map((faq, i) => (
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

            {/* â•â•â•â•â•â•â• CTA â€” Final cinematic call â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <section className="relative min-h-[520px] flex items-center overflow-hidden">
                <Image src="/hospital_hero_hd.png" alt="" fill className="object-cover object-center opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/75 to-[#0a0a0a]/40" />
                <FloatOrb className="w-[600px] h-[600px] bg-amber-500/10 blur-3xl -top-40 right-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
                    <motion.div {...fadeUp()}>
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400 mb-5 flex items-center gap-2">
                            <span className="w-5 h-px bg-amber-400" /> Ready to Help
                        </p>
                        <h2 className="section-heading-white">
                            Backed by Care.<br />
                            Built for You.
                        </h2>
                        <p className="text-white/45 text-base leading-relaxed mb-10 max-w-lg">
                            Walk in, schedule a consultation, or call our 24Ã—7 helpline. Our specialists are ready to deliver the care you and your family deserve.
                        </p>
                        <div className="flex flex-wrap gap-3 sm:gap-4">
                            <button onClick={openBooking} className="btn-inverse"><CalendarCheck size={16} /> Book Appointment</button>
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

