"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Activity, ShieldCheck, HeartPulse, Stethoscope, Microscope, 
    Pill, Clock, Award, Users, CheckCircle, ChevronRight,
    Hospital, Target, PhoneCall, Globe,
    ClipboardList, UserCheck, TestTube, MapPin,
    Calendar, Baby, Bone, Heart, Zap, Ear, Scissors
} from "lucide-react";
import OPDTimetable from "@/components/shared/OPDTimetable";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000/api";

function formatTime12(time24: string) {
    if (!time24) return "";
    const [h, m] = time24.split(":").map(Number);
    const ampm = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 || 12;
    return `${h12}:${String(m).padStart(2, "0")} ${ampm}`;
}

function DynamicOPDTimings() {
    const [timings, setTimings] = useState<{ label: string; start: string; end: string }[]>([]);

    useEffect(() => {
        fetch(`${API_BASE}/settings/opd-timing`)
            .then(r => r.json())
            .then(data => {
                if (data.success && data.data) {
                    setTimings([
                        { label: "Morning Session", start: data.data.morningStart, end: data.data.morningEnd },
                        { label: "Evening Session", start: data.data.eveningStart, end: data.data.eveningEnd },
                    ]);
                }
            })
            .catch(() => {});
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-blue-600 rounded-[2.5rem] p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <Clock className="mb-6 opacity-80" size={48} />
            <h3 className="text-3xl font-bold mb-8 font-montserrat">OPD Timings</h3>
            <div className="space-y-6 relative z-10">
                {timings.length === 0 ? (
                    <div className="text-white/60 text-center py-4">Loading timings...</div>
                ) : (
                    timings.map((session, i) => (
                        <div key={i} className="flex items-center justify-between border-b border-white/20 pb-4">
                            <span className="font-montserrat text-lg">{session.label}</span>
                            <span className="font-bold font-montserrat text-xl">{formatTime12(session.start)} – {formatTime12(session.end)}</span>
                        </div>
                    ))
                )}
            </div>
            <div className="mt-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <h4 className="font-bold mb-2 font-montserrat flex items-center gap-2 text-blue-50">
                    <Calendar size={20} /> Appointment & Booking
                </h4>
                <p className="text-sm text-blue-100 font-montserrat leading-relaxed">
                    Book via registration counter, phone call, or online system. Advance booking is encouraged to reduce waiting time.
                </p>
            </div>
        </motion.div>
    );
}

export default function OPDPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { title: "Quick & Easy Consultation", desc: "Get expert medical advice without long delays.", image: "/carousel-1.png", icon: UserCheck },
        { title: "Multiple Specialties Available", desc: "All essential healthcare services in one place.", image: "/carousel-2.png", icon: Stethoscope },
        { title: "Patient-Friendly Experience", desc: "Comfortable and well-managed OPD system.", image: "/carousel-3.png", icon: HeartPulse },
        { title: "Trusted Medical Guidance", desc: "Accurate diagnosis and proper care.", image: "/carousel-4.png", icon: ShieldCheck },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const scrollToOverview = () => {
        const overviewSec = document.getElementById("overview-section") || document.getElementsByTagName("section")[1];
        if (overviewSec) {
            overviewSec.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <div className="bg-slate-50" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            
            {/* ===== HERO SECTION ===== */}
            <section className="relative h-[75vh] min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
                    <Image 
                        src="/hospital_opd_hero.png"
                        alt="OPD Services"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                
                <div className="relative z-20 container mx-auto px-6 lg:px-12 text-left max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1.5 px-4 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold tracking-[0.2em] text-xs mb-6 border border-white/20 uppercase font-montserrat">
                            BHRI HEALTHCARE
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl font-montserrat" style={{ fontFamily: "'Playfair Display', serif" }}>
                            OPD Services
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-300 font-medium max-w-2xl mb-10 leading-relaxed drop-shadow-md font-montserrat">
                            Convenient, Accessible, and Expert Medical Consultation
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                onClick={scrollToOverview}
                                className="px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center gap-2 max-w-xs font-montserrat"
                            >
                                Explore Services
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== OVERVIEW (2 Column Layout) ===== */}
            <section id="overview-section" className="pt-8 pb-16 lg:pt-10 lg:pb-20 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider font-montserrat">Quick Access</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-6 font-montserrat leading-tight">
                                Expert Care, <span className="text-blue-600">Simplified</span>
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed font-montserrat text-[15px]">
                                <p>
                                    The <strong className="text-slate-800">Outpatient Department (OPD)</strong> at Buddha Hospital & Research Institute (BHRI) is designed to provide easy access to expert medical consultation without the need for hospital admission. Our OPD services ensure that patients receive timely diagnosis, proper guidance, and effective treatment in a comfortable and organized environment.
                                </p>
                                <p>
                                    We aim to make healthcare simple, efficient, and patient-friendly.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white p-8 lg:p-10 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-5 text-blue-600 transform group-hover:scale-110 transition-transform duration-500">
                                    <ClipboardList size={120} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-montserrat relative z-10 flex items-center gap-3">
                                    <Stethoscope className="text-blue-500" />
                                    What is OPD?
                                </h3>
                                <div className="space-y-4 text-slate-600 leading-relaxed font-montserrat text-[15px] relative z-10">
                                    <p>
                                        OPD (Outpatient Department) is the first point of contact for patients visiting the hospital. Here, patients can consult doctors, undergo basic tests, and receive treatment advice without being admitted.
                                    </p>
                                    <ul className="space-y-2 mt-4">
                                        {[
                                            "Consultation with experienced doctors",
                                            "General health check-ups and follow-ups",
                                            "Initial diagnosis and treatment planning",
                                            "Prescription and medication guidance",
                                            "Referral to specialists or admission",
                                            "Minor procedures and basic treatments"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== HIGHLIGHTS (Stats Section) ===== */}
            <section className="py-12 lg:py-16 bg-white border-y border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 text-center">
                        {[
                            { icon: Users, text: "Experienced Doctors", count: "Daily" },
                            { icon: Clock, text: "Minimal Waiting", count: "System" },
                            { icon: ClipboardList, text: "Digital Records", count: "Organized" },
                            { icon: TestTube, text: "Diagnostic Services", count: "Easy Access" },
                            { icon: Pill, text: "In-house Pharmacy", count: "Full Support" }
                        ].map((stat, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center group"
                            >
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 border border-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-sm">
                                    <stat.icon size={26} />
                                </div>
                                <div className="text-xl lg:text-2xl font-bold font-montserrat text-slate-900 mb-1">{stat.count}</div>
                                <div className="text-[10px] lg:text-xs font-semibold text-slate-500 font-montserrat uppercase tracking-wider">{stat.text}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SPECIALTIES GRID ===== */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-wider font-montserrat">Expertise</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 font-montserrat">Specialties Available in OPD</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                        {[
                            { icon: Stethoscope, name: "General Medicine" },
                            { icon: Baby, name: "Pediatrics" },
                            { icon: HeartPulse, name: "Gynecology & Obstetrics" },
                            { icon: Bone, name: "Orthopedics" },
                            { icon: Heart, name: "Cardiology" },
                            { icon: Zap, name: "Dermatology" },
                            { icon: Ear, name: "ENT" },
                            { icon: Scissors, name: "General Surgery" }
                        ].map((spec, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-100 hover:shadow-lg hover:bg-white hover:border-blue-200 transition-all cursor-default group"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-500 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    <spec.icon size={24} />
                                </div>
                                <h4 className="font-bold text-slate-800 font-montserrat text-sm lg:text-base">{spec.name}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== HOW OPD WORKS (Step-by-Step) ===== */}
            <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-wider font-montserrat">Process</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 font-montserrat">How OPD Works</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-blue-100 z-0" />
                        
                        {[
                            { icon: UserCheck, title: "Registration", desc: "OPD counter" },
                            { icon: Award, title: "Token", desc: "Assigned slot" },
                            { icon: Stethoscope, title: "Consultation", desc: "Doctor exam" },
                            { icon: Microscope, title: "Diagnosis", desc: "Tests recommended" },
                            { icon: ClipboardList, title: "Treatment", desc: "Prescription" },
                            { icon: Zap, title: "Next Steps", desc: "Recovery plan" }
                        ].map((step, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative z-10 flex flex-col items-center text-center"
                            >
                                <div className="w-14 h-14 bg-white rounded-full border-4 border-slate-50 flex items-center justify-center text-blue-600 shadow-md mb-4 group-hover:scale-110 transition-transform">
                                    <step.icon size={24} />
                                </div>
                                <h4 className="font-bold text-slate-900 text-sm mb-1 font-montserrat">{step.title}</h4>
                                <p className="text-xs text-slate-500 font-montserrat">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TIMINGS & CONVENIENCE (Split) ===== */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        
                        {/* Timings - Dynamic from Backend */}
                        <DynamicOPDTimings />

                        {/* Convenience */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="flex flex-col justify-center"
                        >
                            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider font-montserrat">Patient First</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-8 font-montserrat leading-tight">
                                Patient Convenience Features
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Easy registration process",
                                    "Clean waiting areas",
                                    "Supportive staff guidance",
                                    "Fast consultation flow",
                                    "Affordable fees",
                                    "Supportive staff guidance"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <CheckCircle className="text-blue-500 shrink-0" size={18} />
                                        <span className="text-slate-700 font-montserrat font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== DYNAMIC OPD TIMETABLE FROM BACKEND ===== */}
            <OPDTimetable />

            {/* ===== WHY CHOOSE US (Grid) ===== */}
            <section className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12 lg:mb-16">
                        <span className="text-blue-400 font-bold text-sm uppercase tracking-wider font-montserrat">Excellence</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 font-montserrat">Why Choose Our OPD?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { title: "Quick Access", text: "Expert advice without long delays." },
                            { title: "Multi-Specialty", text: "Essential services under one roof." },
                            { title: "Structured", text: "Organized and simple process." },
                            { title: "Affordable", text: "Transparent consultation fees." },
                            { title: "Friendly", text: "Patient-friendly and clean environment." }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors text-center"
                            >
                                <Award className="mx-auto text-blue-400 mb-4" size={32} />
                                <h4 className="font-bold font-montserrat text-lg mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-300 font-montserrat leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CAROUSEL ===== */}
            <section className="py-10 lg:py-12 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-6">
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-wider font-montserrat">Gallery</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-1 font-montserrat">A Glimpse of OPD</h2>
                    </div>
                    <div className="rounded-[2rem] overflow-hidden relative min-h-[320px] lg:min-h-[400px] shadow-2xl bg-slate-900 border-4 border-slate-100">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 1.02 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={slides[currentSlide].image}
                                    alt={slides[currentSlide].title}
                                    fill
                                    className="object-cover opacity-60 mix-blend-overlay"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement!.style.backgroundColor = '#1e293b';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

                                <div className="relative z-10 h-full flex flex-col justify-end items-center p-6 lg:p-10 text-center pb-16">
                                    <motion.div
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                    >
                                        <div className="flex justify-center mb-4">
                                            <div className="w-12 h-12 bg-blue-600/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-xl border border-white/20">
                                                {React.createElement(slides[currentSlide].icon, { size: 24, className: 'text-white' })}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl lg:text-4xl font-bold mb-3 font-montserrat text-white leading-tight drop-shadow-lg">
                                            {slides[currentSlide].title}
                                        </h3>
                                        <p className="text-blue-50 text-sm lg:text-base max-w-2xl mx-auto font-montserrat drop-shadow-md">
                                            {slides[currentSlide].desc}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-10 bg-blue-500' : 'w-3 bg-white/40 hover:bg-white/70'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CALL TO ACTION ===== */}
            <section className="py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay" />
                </div>
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-montserrat leading-tight text-white">
                            Book your OPD appointment today.
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-300 font-medium mb-10 font-montserrat">
                            Consult our expert doctors for timely and reliable care.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="px-8 py-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 font-montserrat">
                                <PhoneCall size={20} />
                                Book Appointment
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
