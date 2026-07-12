"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Users, Zap, Award, ChevronRight, ArrowRight, Quote } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

function FloatOrb({ className }: { className?: string }) {
    return (
        <motion.div
            className={`absolute rounded-full pointer-events-none ${className}`}
            animate={{ y: [0, -20, 0], scale: [1, 1.07, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
    );
}

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
});

const highlights = [
    { icon: Heart, title: "Patient-First", desc: "Every decision starts and ends with patient wellbeing at its core." },
    { icon: ShieldCheck, title: "Ethical Care", desc: "Transparent, honest, and principled medical practices at all times." },
    { icon: Zap, title: "Modern Technology", desc: "Continuous investment in the best medical equipment and systems." },
    { icon: Users, title: "Community Focus", desc: "Health camps, rural outreach, and preventive care for all." },
    { icon: Award, title: "Building Trust", desc: "Earning patient confidence through excellence and compassion." },
];

export default function ChairmanPage() {
    const { openBooking } = useBooking();
    return (
        <div className="bg-[#0a0a0a] text-white overflow-x-hidden">

            {/* ------- HERO — Full bleed cinematic ------------------- */}
            <section className="relative min-h-[100dvh] pt-28 sm:pt-36 pb-12 sm:pb-20 flex flex-col justify-between overflow-hidden">
                {/* bg image */}
                <div className="absolute inset-0">
                    <Image src="/images/about-hospital.png" alt="Dhamma Superspeciality Hospital" fill priority className="object-cover object-top" />
                    {/* Dark cinematic overlay — keeps Dhamma Superspeciality Hospital branding visible but creates premium dark feel */}
                    <div className="absolute inset-0 bg-[#0a0a0a]/75 sm:bg-[#0a0a0a]/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-transparent to-transparent" />
                </div>

                <FloatOrb className="w-96 h-96 bg-amber-500/10 blur-3xl top-1/4 right-[10%]" />
                <FloatOrb className="w-64 h-64 bg-blue-400/8 blur-3xl bottom-1/3 right-[30%]" />

                {/* Top content wrapper: Breadcrumb & Heading */}
                <div className="relative z-20 w-full px-6 lg:px-12 flex flex-col gap-6 sm:gap-8">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-white/40 text-xs">
                        <Link href="/" className="hover:text-white/70 transition">Home</Link>
                        <span>/</span>
                        <Link href="/about/overview" className="hover:text-white/70 transition">About</Link>
                        <span>/</span>
                        <span className="text-amber-400">Chairman</span>
                    </div>

                    {/* Hero text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="max-w-2xl"
                    >
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400 mb-3 sm:mb-4 flex items-center gap-2">
                            <span className="w-5 h-px bg-amber-400 inline-block" /> Message from the Chairman
                        </p>
                        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-[1.05] sm:leading-[0.92] tracking-tight text-white">
                            Leading<br />with Purpose.
                        </h1>
                    </motion.div>
                </div>

                {/* Bottom right quote */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.5 }}
                    className="relative z-20 w-full px-6 lg:px-12 mt-12 sm:mt-auto text-left sm:text-right sm:self-end max-w-sm sm:max-w-md"
                >
                    <p className="text-white/60 text-sm italic leading-relaxed">
                        &ldquo;Your health is our responsibility, and your trust is our greatest strength.&rdquo;
                    </p>
                    <p className="text-amber-400 font-bold text-sm mt-3">— Chairman, Dhamma Superspeciality Hospital</p>
                </motion.div>
            </section>

            {/* ------- CHAIRMAN INTRO — Beige split ------------------- */}
            <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">

                {/* Left — Chairman photo */}
                <div className="relative min-h-[500px] lg:min-h-0 overflow-hidden bg-[#111] group">
                    <Image
                        src="/chairman.jpg"
                        alt="Chairman — Dhamma Superspeciality Hospital"
                        fill
                        className="object-cover object-center group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 to-transparent" />
                    {/* Floating name card */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4"
                    >
                        <p className="text-white font-extrabold text-base">Chairman</p>
                        <p className="text-white/50 text-xs mt-0.5">Dhamma Superspeciality Hospital</p>
                        <p className="text-white/35 text-[10px] mt-0.5">Patna, Bihar</p>
                    </motion.div>
                </div>

                {/* Right — Message */}
                <div className="bg-[#e9e6df] text-[#1a1a1a] flex items-center px-10 lg:px-16 py-20 relative overflow-hidden">
                    <FloatOrb className="w-80 h-80 bg-amber-200/30 blur-3xl -bottom-10 -right-10" />
                    <div className="relative z-10 max-w-lg">
                        <div className="flex items-start gap-3 mb-8">
                            <span className="text-2xl select-none">?</span>
                            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1a1a1a]/50 leading-relaxed">
                                Dhamma Superspeciality Hospital<br />A Message of Vision &amp; Purpose
                            </p>
                        </div>

                        <h2 className="section-heading">
                            Message from<br />the Chairman
                        </h2>

                        <div className="space-y-5 text-[#1a1a1a]/70 text-[15px] leading-relaxed">
                            <p>
                                At <strong className="text-[#1a1a1a]">Dhamma Superspeciality Hospital</strong>, our journey began with a simple yet powerful vision — to make quality healthcare accessible, affordable, and trustworthy for every individual.
                            </p>
                            <p>
                                Healthcare is not just about treatment; it is about care, compassion, and commitment. Our team of dedicated doctors, nurses, and staff work tirelessly to uphold the highest standards of medical excellence.
                            </p>
                            <p>
                                We believe that modern healthcare must combine advanced technology with a human touch — which is why we continuously invest in infrastructure, innovation, and skilled professionals to deliver the best possible outcomes for every patient who walks through our doors.
                            </p>
                            <p>
                                Our mission goes beyond hospital walls. We are deeply committed to serving the community through health awareness programs, rural outreach, and preventive care initiatives. Every step we take is aimed at building a healthier and stronger society.
                            </p>
                        </div>

                        {/* Signature */}
                        <div className="mt-10 pt-8 border-t border-[#1a1a1a]/15">
                            <p className="text-[#1a1a1a]/50 text-xs uppercase tracking-widest mb-2">Warm regards,</p>
                            <p className="text-2xl font-extrabold text-[#1a1a1a]">Chairman</p>
                            <p className="text-[#1a1a1a]/55 text-sm mt-1">Dhamma Superspeciality Hospital</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------- QUOTE BANNER — Cinematic dark ---------------- */}
            <section className="relative bg-[#0a0a0a] py-24 lg:py-32 overflow-hidden">
                <FloatOrb className="w-[600px] h-[600px] bg-amber-500/7 blur-3xl -top-20 -left-20" />
                <FloatOrb className="w-96 h-96 bg-blue-400/6 blur-3xl bottom-0 right-0" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
                    <motion.div {...fadeUp()}>
                        <Quote size={52} className="mx-auto mb-8 text-amber-400/30 rotate-180" />
                        <h2 className="section-heading-white">
                            &ldquo;Healthcare is not just a service — it is a responsibility towards humanity. at Dhamma Superspeciality Hospital, we honor that responsibility every day.&rdquo;
                        </h2>
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <div className="w-12 h-px bg-amber-400/50" />
                            <p className="text-amber-400 font-bold text-sm uppercase tracking-widest">Chairman, Dhamma Superspeciality Hospital</p>
                            <div className="w-12 h-px bg-amber-400/50" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ------- HIGHLIGHTS — Dark cards ----------------------- */}
            <section className="bg-[#0a0a0a] py-20 lg:py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div {...fadeUp()} className="mb-14">
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400 mb-4 flex items-center gap-2">
                            <span className="w-5 h-px bg-amber-400" /> Core Focus
                        </p>
                        <h2 className="section-heading-white">Key Highlights</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                        {highlights.map((h, i) => (
                            <motion.div key={i} {...fadeUp(i * 0.07)}
                                className="group bg-white/[0.04] border border-white/8 rounded-2xl p-7 hover:bg-white/[0.08] hover:border-amber-500/30 transition-all duration-300 cursor-default"
                            >
                                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                                    <h.icon size={22} />
                                </div>
                                <h4 className="font-extrabold text-white text-sm mb-2">{h.title}</h4>
                                <p className="text-white/45 text-xs leading-relaxed">{h.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ------- SPLIT — Vision image + commitment text -------- */}
            <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
                {/* Image */}
                <div className="relative min-h-[380px] lg:min-h-0 overflow-hidden group">
                    <Image src="/hospital_hero_hd.png" alt="Dhamma Superspeciality Hospital" fill className="object-cover object-center group-hover:scale-105 transition duration-700" />
                    <div className="absolute inset-0 bg-[#0a0a0a]/20" />
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 max-w-[200px]"
                    >
                        <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Our Commitment</p>
                        <p className="text-white font-bold text-sm leading-tight">Serving Bihar with Excellence</p>
                    </motion.div>
                </div>

                {/* Text */}
                <div className="bg-[#111] flex items-center px-10 lg:px-16 py-20 relative overflow-hidden">
                    <FloatOrb className="w-72 h-72 bg-amber-500/8 blur-3xl -bottom-10 -left-10" />
                    <div className="relative z-10 max-w-lg">
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400 mb-5 flex items-center gap-2">
                            <span className="w-5 h-px bg-amber-400" /> Our Commitment
                        </p>
                        <h2 className="section-heading-white">
                            Building a<br />Healthier Bihar.
                        </h2>
                        <p className="text-white/50 text-base leading-relaxed mb-8">
                            As Dhamma Superspeciality Hospital continues to grow, we remain focused on building a center of excellence in healthcare and medical education — earning the trust of every patient and family through transparency, integrity, and compassionate service.
                        </p>

                        <div className="space-y-3 mb-10">
                            {[
                                "Advanced medical education & research",
                                "Free community health camps",
                                "Preventive care for rural populations",
                                "24—7 emergency & critical care",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/60 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>

                        <Link href="/contact"
                            className="inline-flex items-center gap-3 bg-white text-black font-extrabold px-7 py-3.5 rounded-full text-sm hover:bg-amber-300 transition-all"
                        >
                            Contact Us <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ------- CTA ------------------------------------------- */}
            <section className="relative bg-[#0a0a0a] py-20 overflow-hidden">
                <Image src="/images/about-hospital.png" alt="" fill className="object-cover object-center opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]/60" />
                <FloatOrb className="w-[500px] h-[500px] bg-amber-500/10 blur-3xl -top-20 right-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div {...fadeUp()} className="max-w-2xl">
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400 mb-5 flex items-center gap-2">
                            <span className="w-5 h-px bg-amber-400" /> Visit Dhamma Superspeciality Hospital
                        </p>
                        <h2 className="section-heading-white">
                            Experience care<br />built on trust.
                        </h2>
                        <p className="text-white/45 text-base leading-relaxed mb-10">
                            Come visit Dhamma Superspeciality Hospital — a place where every patient is treated with the dignity, compassion, and clinical excellence they deserve.
                        </p>
                        <div className="flex flex-wrap gap-3 sm:gap-4">
                            <button
                                onClick={openBooking}
                                className="btn-inverse"
                            >
                                Book Appointment <ChevronRight size={16} />
                            </button>
                            <Link href="/contact#contact-form"
                                className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/15 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-white/15 transition-all text-[12px] sm:text-sm"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
