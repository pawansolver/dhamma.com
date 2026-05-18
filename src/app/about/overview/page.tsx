"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
    Heart, Target, Eye, ShieldCheck, Users, Zap,
    MapPin, Clock, Stethoscope, Microscope, Ambulance,
    Bed, UserCheck, Activity, Award, CheckCircle, ChevronRight,
    ChevronLeft, GraduationCap, Building2, FlaskConical, HeartPulse,
    Baby, Pill, Globe, Star
} from "lucide-react";
import ElectricBorder from "@/components/ui/electric-border";

// --- Counter Component ---
const CounterStat = ({ number, label, icon: Icon }: { number: string; label: string; icon: any }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);
    const numericValue = number.replace(/[^0-9]/g, '');
    const target = numericValue ? parseInt(numericValue) : 0;
    const isNumeric = /^\d+[+s]?$/.test(number.trim());

    useEffect(() => {
        if (isInView && isNumeric && target > 0) {
            let start = 0;
            const duration = 2000;
            const frameRate = 16;
            const totalFrames = duration / frameRate;
            const increment = Math.ceil(target / totalFrames);

            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, frameRate);
            return () => clearInterval(timer);
        } else if (!isNumeric) {
            setCount(0); // Not used if not numeric
        }
    }, [isInView, target, isNumeric]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-8 px-6 hover:bg-gray-50 transition-colors"
        >
            <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Icon size={24} />
                </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2 font-montserrat">
                {isNumeric ? count : number}{isNumeric && number.includes('+') ? '+' : ''}
            </h3>
            <p className="text-sm text-gray-600 font-montserrat">{label}</p>
        </motion.div>
    );
};

const ServiceCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group"
    >
        <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-6 group-hover:bg-red-100 group-hover:text-red-600 transition-colors">
            <Icon size={24} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed font-montserrat">{description}</p>
    </motion.div>
);

const AboutOverview = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { title: "Quality Healthcare You Can Trust", desc: "Delivering reliable and compassionate care for every patient.", icon: HeartPulse, image: "/carousel-1.png" },
        { title: "Advanced Medical Facilities", desc: "Equipped with modern technology for accurate diagnosis and treatment.", icon: Microscope, image: "/carousel-2.png" },
        { title: "Expert Doctors & Staff", desc: "Experienced professionals dedicated to your health.", icon: UserCheck, image: "/carousel-3.png" },
        { title: "24/7 Emergency Services", desc: "Always ready when you need us the most.", icon: Ambulance, image: "/carousel-4.png" },
        { title: "Serving Community with Care", desc: "Healthcare that reaches every corner of society.", icon: Globe, image: "/carousel-5.png" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="bg-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {/* ===== HERO SECTION ===== */}
            <section className="relative bg-slate-50 pt-8 pb-10 lg:pb-14 overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/40 -skew-x-12 translate-x-20" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-green-50/40 skew-x-12 -translate-x-20" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-100/30 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl relative"
                        >
                            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-montserrat relative z-10">
                                Healing with <span className="text-green-600">Innovation</span> &amp; <span className="text-red-600">Integrity</span>
                            </h1>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-montserrat max-w-xl relative z-10">
                                Buddha Hospital &amp; Research Institute (BHRI) is a trusted healthcare destination in Gaya, committed to delivering quality medical care with compassion and modern technology.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors font-montserrat text-sm shadow-lg shadow-green-600/20">
                                    Book Appointment
                                </button>
                                <button className="bg-white/50 backdrop-blur-sm border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:border-green-600 hover:text-green-600 transition-colors font-montserrat text-sm">
                                    Learn More
                                </button>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative hidden lg:block"
                        >
                            <ElectricBorder
                                color="#16a34a"
                                speed={1}
                                chaos={0.12}
                                borderRadius={24}
                            >
                                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] relative">
                                    <Image src="/bhri-building.png" alt="BHRI Institute" fill className="object-cover" />
                                </div>
                            </ElectricBorder>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== STATS SECTION ===== */}
            <section className="bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-gray-200">
                        <CounterStat icon={Bed} number="300+" label="Beds Facility" />
                        <CounterStat icon={UserCheck} number="50+" label="Experienced Doctors" />
                        <CounterStat icon={Microscope} number="12+" label="Diagnostic Labs" />
                        <CounterStat icon={Ambulance} number="24/7" label="Emergency Service" />
                        <CounterStat icon={Baby} number="25+" label="ICU &amp; NICU Units" />
                        <CounterStat icon={Users} number="5000+" label="Monthly Patients" />
                    </div>
                </div>
            </section>

            {/* ===== ABOUT SECTION ===== */}
            <section className="py-8 lg:py-12 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-green-600 font-bold text-sm uppercase tracking-wider font-montserrat">About BHRI</span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-8 leading-tight font-montserrat">
                                A Vision for Better Healthcare in Bihar
                            </h2>
                            <p className="text-gray-700 text-lg mb-6 leading-relaxed font-montserrat">
                                We are a multi-speciality hospital and research institute focused on advanced patient care, medical education, and community health development.
                            </p>
                            <p className="text-gray-600 text-base mb-8 leading-relaxed font-montserrat">
                                BHRI is built with a vision to become a leading healthcare institution in Bihar and Eastern India, combining advanced medical technology with experienced healthcare professionals.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Activity, text: "Advanced Patient Care" },
                                    { icon: GraduationCap, text: "Medical Education" },
                                    { icon: Users, text: "Community Health" },
                                    { icon: ShieldCheck, text: "Transparent Treatment" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                            <item.icon size={18} />
                                        </div>
                                        <span className="text-gray-900 font-semibold text-sm font-montserrat">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-100 rounded-xl overflow-hidden"
                        >
                            <Image src="/logo.png" alt="About" width={500} height={400} className="w-full h-auto object-contain p-12" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== MISSION & VISION (Hanging Lanyard Card Stack Design) ===== */}
            <section className="pt-0 pb-10 lg:pb-14 bg-gradient-to-b from-gray-55 to-white overflow-hidden relative">
                
                {/* Desktop Unified Straight Suspension Cable (hidden on mobile) */}
                <div className="hidden md:block absolute inset-x-0 top-[48px] h-6 z-10 pointer-events-none">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full relative">
                        {/* Straight tensioned rope starting exactly at left 25% and ending at right 25% */}
                        <div className="absolute left-[25%] right-[25%] top-1/2 -translate-y-1/2 h-1.5 z-10">
                            <svg className="w-full h-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                                <line x1="0" y1="4" x2="100" y2="4" stroke="#121212" strokeWidth="6" strokeDasharray="1.5,1.5" />
                                <line x1="0" y1="4" x2="100" y2="4" stroke="#e6960a" strokeWidth="1.5" opacity="0.8" />
                            </svg>
                        </div>
                        
                        {/* Centered Grand Floating Highlighted BHRI Badge inline with the straight cable */}
                        <motion.div
                            animate={{ y: [0, -4, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none"
                        >
                            <div className="bg-[#1a3a6b] border-2 border-brandSaffron px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(246,143,30,0.65),inset_0_1px_3px_rgba(255,255,255,0.15)] text-xs font-black text-brandSaffron tracking-[0.3em] font-montserrat flex items-center gap-2 backdrop-blur-sm select-none">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                                BHRI
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 pt-0">
                        
                        {/* Mission Hanging Card */}
                        <div className="relative pt-44 pb-4 flex justify-center w-full max-w-md mx-auto">
                            {/* Curved Suspension Cable (Rope) meeting in the center (Mobile only) */}
                            <svg className="md:hidden absolute top-0 left-0 w-full h-24 pointer-events-none" viewBox="0 0 400 96" preserveAspectRatio="none">
                                {/* Left rope branch */}
                                <path d="M 30,0 Q 115,75 200,80" fill="none" stroke="#121212" strokeWidth="4" strokeDasharray="2,2" />
                                <path d="M 30,0 Q 115,75 200,80" fill="none" stroke="#e6960a" strokeWidth="1.5" opacity="0.75" />

                                {/* Right rope branch */}
                                <path d="M 370,0 Q 285,75 200,80" fill="none" stroke="#121212" strokeWidth="4" strokeDasharray="2,2" />
                                <path d="M 370,0 Q 285,75 200,80" fill="none" stroke="#e6960a" strokeWidth="1.5" opacity="0.75" />
                            </svg>

                            {/* Floating Highlighted BHRI Badge at the rope junction (Mobile only) */}
                            <motion.div
                                animate={{ y: [0, -4, 0], scale: [1, 1.04, 1] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="md:hidden absolute top-[68px] left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none"
                            >
                                <div className="bg-[#1a3a6b] border border-brandSaffron px-3 py-1 rounded-full shadow-[0_0_15px_rgba(246,143,30,0.55),inset_0_1px_3px_rgba(255,255,255,0.1)] text-[10px] font-black text-brandSaffron tracking-[0.25em] font-montserrat flex items-center gap-1.5 backdrop-blur-sm select-none">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                                    BHRI
                                </div>
                            </motion.div>

                            {/* Vertical Lanyard extending from the floating badge/catenary curve down to the snap clip */}
                            <div className="absolute top-20 md:top-[48px] h-16 md:h-24 left-1/2 -translate-x-1/2 w-4 bg-[#121212] shadow-[inset_0_0_6px_rgba(0,0,0,0.85),0_2px_4px_rgba(0,0,0,0.15)] z-0 rounded-t-sm flex flex-col justify-around items-center py-1 pointer-events-none">
                                <span className="text-[8px] text-brandSaffron opacity-90 select-none font-bold">☸</span>
                            </div>

                            {/* Metal Swivel Snap Clip connecting lanyard to the card hook */}
                            <div className="absolute top-[144px] left-1/2 -translate-x-1/2 w-3.5 h-4.5 bg-gradient-to-b from-gray-550 to-gray-750 border border-gray-600 rounded-sm z-10 pointer-events-none" />
                            <div className="absolute top-[156px] left-1/2 -translate-x-1/2 w-4 h-4.5 rounded-t-full border-[2.5px] border-gray-600 bg-transparent z-10 pointer-events-none" />

                            {/* Pendulum Swinging Motion Card Container */}
                            <motion.div
                                animate={{ rotate: [1.2, -1.2, 1.2] }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{ transformOrigin: "top center" }}
                                className="relative group w-full max-w-md pt-3"
                            >
                                {/* Visual Card Stack layers (Saffron/Amber/Blue tones) */}
                                <div className="absolute inset-0 bg-brandSaffron/20 rounded-[2rem] rotate-2 translate-x-2 translate-y-2 -z-10 transition-transform duration-500 group-hover:rotate-4 group-hover:translate-x-3 group-hover:translate-y-3 border border-brandSaffron/20" />
                                <div className="absolute inset-0 bg-[#122b52] rounded-[2rem] -rotate-1.5 -translate-x-1.5 translate-y-1.5 -z-20 transition-transform duration-500 group-hover:-rotate-3 group-hover:-translate-x-2 group-hover:translate-y-2 border border-brandSaffron/10" />

                                <div className="bg-[#1a3a6b] rounded-[2rem] border border-brandSaffron/30 p-8 lg:p-10 pt-12 shadow-[0_15px_40px_rgba(26,58,107,0.15)] hover:shadow-[0_25px_60px_rgba(249,115,22,0.2)] relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5 min-h-[380px] flex flex-col justify-between cursor-default">
                                    
                                    {/* Hanging Card Grommet Hole at the very top center */}
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#122b52] border border-brandSaffron/35 shadow-inner flex items-center justify-center z-20">
                                        <div className="w-2 h-2 rounded-full bg-brandSaffron/70" />
                                    </div>

                                    {/* Saffron Bodhi Tree Drawing Watermark (Optimized for Dark Blue Box) */}
                                    <div className="absolute bottom-0 right-0 w-56 h-56 opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 pointer-events-none mix-blend-screen invert brightness-[0.7] sepia-[1] saturate-[8] hue-rotate-[10deg]">
                                        <Image
                                            src="/mission-vision-bg.png"
                                            alt="Bodhi Tree"
                                            fill
                                            className="object-contain object-right-bottom"
                                            priority
                                        />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brandSaffron to-amber-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-brandSaffron/30 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                            <Target size={22} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-brandSaffron mb-6 font-montserrat tracking-tight">Our Mission</h3>
                                        <ul className="space-y-3.5 max-w-[85%]">
                                            {[
                                                "Provide affordable and high-quality healthcare",
                                                "Ensure patient safety and satisfaction",
                                                "Adopt modern medical technologies",
                                                "Support medical education and research"
                                            ].map((text, i) => (
                                                <li key={i} className="flex items-start gap-3.5 text-brandSaffronLight group/item">
                                                    <div className="w-5 h-5 rounded-full bg-brandSaffron/10 border border-brandSaffron/20 flex items-center justify-center mt-0.5 shrink-0 group-hover/item:bg-brandSaffron/20 transition-colors">
                                                        <CheckCircle className="text-brandSaffronLight shrink-0" size={15} />
                                                    </div>
                                                    <span className="font-montserrat text-[13px] lg:text-sm font-semibold group-hover/item:text-white transition-colors">{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Vision Hanging Card */}
                        <div className="relative pt-44 pb-4 flex justify-center w-full max-w-md mx-auto">
                            {/* Curved Suspension Cable (Rope) meeting in the center (Mobile only) */}
                            <svg className="md:hidden absolute top-0 left-0 w-full h-24 pointer-events-none" viewBox="0 0 400 96" preserveAspectRatio="none">
                                {/* Left rope branch */}
                                <path d="M 30,0 Q 115,75 200,80" fill="none" stroke="#121212" strokeWidth="4" strokeDasharray="2,2" />
                                <path d="M 30,0 Q 115,75 200,80" fill="none" stroke="#e6960a" strokeWidth="1.5" opacity="0.75" />

                                {/* Right rope branch */}
                                <path d="M 370,0 Q 285,75 200,80" fill="none" stroke="#121212" strokeWidth="4" strokeDasharray="2,2" />
                                <path d="M 370,0 Q 285,75 200,80" fill="none" stroke="#e6960a" strokeWidth="1.5" opacity="0.75" />
                            </svg>

                            {/* Floating Highlighted BHRI Badge at the rope junction (Mobile only) */}
                            <motion.div
                                animate={{ y: [0, -4, 0], scale: [1, 1.04, 1] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="md:hidden absolute top-[68px] left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none"
                            >
                                <div className="bg-[#1a3a6b] border border-brandSaffron px-3 py-1 rounded-full shadow-[0_0_15px_rgba(246,143,30,0.55),inset_0_1px_3px_rgba(255,255,255,0.1)] text-[10px] font-black text-brandSaffron tracking-[0.25em] font-montserrat flex items-center gap-1.5 backdrop-blur-sm select-none">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                                    BHRI
                                </div>
                            </motion.div>

                            {/* Vertical Lanyard extending from the floating badge/catenary curve down to the snap clip */}
                            <div className="absolute top-20 md:top-[48px] h-16 md:h-24 left-1/2 -translate-x-1/2 w-4 bg-[#121212] shadow-[inset_0_0_6px_rgba(0,0,0,0.85),0_2px_4px_rgba(0,0,0,0.15)] z-0 rounded-t-sm flex flex-col justify-around items-center py-1 pointer-events-none">
                                <span className="text-[8px] text-brandSaffron opacity-90 select-none font-bold">☸</span>
                            </div>

                            {/* Metal Swivel Snap Clip connecting lanyard to the card hook */}
                            <div className="absolute top-[144px] left-1/2 -translate-x-1/2 w-3.5 h-4.5 bg-gradient-to-b from-gray-550 to-gray-750 border border-gray-600 rounded-sm z-10 pointer-events-none" />
                            <div className="absolute top-[156px] left-1/2 -translate-x-1/2 w-4 h-4.5 rounded-t-full border-[2.5px] border-gray-600 bg-transparent z-10 pointer-events-none" />

                            {/* Pendulum Swinging Motion Card Container */}
                            <motion.div
                                animate={{ rotate: [-1.2, 1.2, -1.2] }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{ transformOrigin: "top center" }}
                                className="relative group w-full max-w-md pt-3"
                            >
                                {/* Visual Card Stack layers (Saffron/Amber/Blue tones) */}
                                <div className="absolute inset-0 bg-brandSaffron/20 rounded-[2rem] rotate-2 translate-x-2 translate-y-2 -z-10 transition-transform duration-500 group-hover:rotate-4 group-hover:translate-x-3 group-hover:translate-y-3 border border-brandSaffron/20" />
                                <div className="absolute inset-0 bg-[#122b52] rounded-[2rem] -rotate-1.5 -translate-x-1.5 translate-y-1.5 -z-20 transition-transform duration-500 group-hover:-rotate-3 group-hover:-translate-x-2 group-hover:translate-y-2 border border-brandSaffron/10" />

                                <div className="bg-[#1a3a6b] rounded-[2rem] border border-brandSaffron/30 p-8 lg:p-10 pt-12 shadow-[0_15px_40px_rgba(26,58,107,0.15)] hover:shadow-[0_25px_60px_rgba(249,115,22,0.2)] relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5 min-h-[380px] flex flex-col justify-between cursor-default">
                                    
                                    {/* Hanging Card Grommet Hole at the very top center */}
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#122b52] border border-brandSaffron/35 shadow-inner flex items-center justify-center z-20">
                                        <div className="w-2 h-2 rounded-full bg-brandSaffron/70" />
                                    </div>

                                    {/* Saffron Bodhi Tree Drawing Watermark (Optimized for Dark Blue Box) */}
                                    <div className="absolute bottom-0 right-0 w-56 h-56 opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 pointer-events-none mix-blend-screen invert brightness-[0.7] sepia-[1] saturate-[8] hue-rotate-[10deg]">
                                        <Image
                                            src="/mission-vision-bg.png"
                                            alt="Bodhi Tree"
                                            fill
                                            className="object-contain object-right-bottom"
                                            priority
                                        />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brandSaffron to-amber-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-brandSaffron/30 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                            <Eye size={22} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-brandSaffron mb-6 font-montserrat tracking-tight">Our Vision</h3>
                                        <div className="space-y-4 max-w-[85%] text-brandSaffronLight">
                                            <p className="leading-relaxed font-montserrat text-[13px] lg:text-sm font-semibold group-hover:text-white transition-colors">
                                                To become a center of excellence in healthcare by delivering world-class medical services, fostering innovation, and building trust within the community.
                                            </p>
                                            <div className="w-full h-px bg-gradient-to-r from-brandSaffron/40 via-brandSaffron/20 to-transparent my-4" />
                                            <p className="text-brandSaffronLight/85 text-[12px] lg:text-[13px] font-montserrat italic leading-relaxed">
                                                BHRI aims to be the leading healthcare institution in Bihar and Eastern India through ethical practices.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== CORE VALUES ===== */}
            <section className="py-8 lg:py-12 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-10 lg:mb-12">
                        <span className="text-green-600 font-bold text-sm uppercase tracking-wider font-montserrat">Our Foundations</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 font-montserrat">Our Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {[
                            { icon: Heart, title: "Compassion", desc: "Caring with empathy" },
                            { icon: ShieldCheck, title: "Integrity", desc: "Transparency in care" },
                            { icon: Award, title: "Excellence", desc: "Continuous improvement" },
                            { icon: Zap, title: "Innovation", desc: "Modern tools &amp; tech" },
                            { icon: Globe, title: "Accessibility", desc: "Healthcare for everyone" }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100 group-hover:text-red-600 transition-colors">
                                    <value.icon size={24} />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2 font-montserrat">{value.title}</h4>
                                <p className="text-gray-600 text-xs font-montserrat">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SERVICES SECTION ===== */}
            <section className="py-8 lg:py-12 bg-gray-55">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-10 lg:mb-12">
                        <span className="text-green-600 font-bold text-sm uppercase tracking-wider font-montserrat">What We Offer</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 font-montserrat">Comprehensive Healthcare Services</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ServiceCard icon={Activity} title="Multi-Speciality" description="Specialized medical care across all departments under one roof." />
                        <ServiceCard icon={ShieldCheck} title="Emergency Care" description="24/7 critical care and trauma services for urgent needs." />
                        <ServiceCard icon={FlaskConical} title="Diagnostics" description="Advanced imaging and laboratory facilities for accurate diagnosis." />
                        <ServiceCard icon={UserCheck} title="Expert Team" description="Highly skilled doctors and compassionate nursing staff." />
                        <ServiceCard icon={Building2} title="Modern OTs" description="Modular operation theatres equipped with latest technology." />
                        <ServiceCard icon={Pill} title="Pharmacy" description="In-house medical store and pharmacy for 24/7 availability." />
                        <ServiceCard icon={Baby} title="Maternity" description="Comprehensive care for mother and child with NICU/PICU." />
                        <ServiceCard icon={HeartPulse} title="Health Checkups" description="Preventive health packages for proactive wellness." />
                    </div>
                </div>
            </section>

            {/* ===== COMMUNITY & TEAM ===== */}
            <section className="py-10 lg:py-14 bg-slate-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        {/* Community Card Stack */}
                        <motion.div
                            initial={{ opacity: 0, x: -100, rotate: -15 }}
                            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                            className="relative group"
                        >
                            {/* Visual Card Stack layers */}
                            <div className="absolute inset-0 bg-gray-300 rounded-[3rem] rotate-6 translate-x-4 translate-y-4 -z-10 transition-transform group-hover:rotate-12" />
                            <div className="absolute inset-0 bg-gray-200 rounded-[3rem] -rotate-3 -translate-x-2 translate-y-2 -z-20 transition-transform group-hover:-rotate-6" />

                            <div className="bg-gray-900 text-white p-10 lg:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden border border-gray-800">
                                <span className="text-green-400 font-bold text-sm uppercase tracking-wider font-montserrat">Our Impact</span>
                                <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-6 font-montserrat leading-tight">Community &amp; <br />Social Work</h2>
                                <p className="text-gray-300 text-base mb-10 leading-relaxed font-montserrat">
                                    At BHRI, we believe healthcare should reach everyone. We actively bridge the gap in underserved areas through dedicated programs.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Free health check-up camps",
                                        "Rural healthcare awareness",
                                        "Vaccination drives",
                                        "Health education initiatives"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                                            <span className="font-montserrat text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Team Card Stack */}
                        <motion.div
                            initial={{ opacity: 0, x: 100, rotate: 15 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
                            className="relative group mt-12 lg:mt-0"
                        >
                            {/* Visual Card Stack layers */}
                            <div className="absolute inset-0 bg-green-100 rounded-[3rem] rotate-6 translate-x-4 translate-y-4 -z-10 transition-transform group-hover:rotate-12" />
                            <div className="absolute inset-0 bg-green-50 rounded-[3rem] -rotate-3 -translate-x-2 translate-y-2 -z-20 transition-transform group-hover:-rotate-6" />

                            <div className="bg-green-600 text-white p-10 lg:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden border border-green-500">
                                <span className="text-green-100 font-bold text-sm uppercase tracking-wider font-montserrat">Our Strength</span>
                                <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-6 font-montserrat leading-tight">Our Expert <br />Medical Team</h2>
                                <p className="text-green-50 text-base mb-10 leading-relaxed font-montserrat">
                                    Our strength lies in our people. We work together to ensure every patient receives the best possible care.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { icon: Stethoscope, title: "Qualified Doctors", desc: "Top specialists" },
                                        { icon: Users, title: "Dedicated Staff", desc: "Caring nurses & staff" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-white text-green-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg font-montserrat">{item.title}</h4>
                                                <p className="text-green-100 text-xs font-montserrat">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* ===== WHY CHOOSE ===== */}
            <section className="py-8 lg:py-12 bg-gray-55">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-10 lg:mb-12">
                        <span className="text-green-600 font-bold text-sm uppercase tracking-wider font-montserrat">Advantages</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 font-montserrat">Why Choose BHRI?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Trusted in Gaya", icon: Award, desc: "Reliable healthcare provider for the region." },
                            { title: "Affordable Care", icon: ShieldCheck, desc: "Quality treatment that is accessible to all." },
                            { title: "Expert Doctors", icon: UserCheck, desc: "Highly experienced medical professionals." },
                            { title: "Modern Facilities", icon: Zap, desc: "Latest medical equipment and infrastructure." },
                            { title: "Patient First", icon: Heart, desc: "Compassionate and personalized approach." },
                            { title: "Transparent Process", icon: CheckCircle, desc: "Clarity in treatment and billing protocols." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg hover:border-green-200 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-6 group-hover:bg-red-100 group-hover:text-red-600 transition-colors">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3 font-montserrat">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed font-montserrat">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CAROUSEL ===== */}
            <section className="py-8 lg:py-12 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="rounded-3xl overflow-hidden relative min-h-[300px] lg:min-h-[400px] shadow-2xl bg-gray-900">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0"
                            >
                                {/* Background Image */}
                                <Image
                                    src={slides[currentSlide].image}
                                    alt={slides[currentSlide].title}
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay for readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent" />

                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 lg:p-12 text-center">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                    >
                                        <div className="flex justify-center mb-4">
                                            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-600/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl border border-white/20 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                                                {React.createElement(slides[currentSlide].icon, { size: 28, className: 'text-white' })}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl lg:text-4xl font-bold mb-3 font-montserrat text-white leading-tight">
                                            {slides[currentSlide].title}
                                        </h3>
                                        <p className="text-green-50 text-base lg:text-lg max-w-2xl mx-auto font-montserrat opacity-90">
                                            {slides[currentSlide].desc}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Dots UI Overlay */}
                        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-10 bg-green-500' : 'w-3 bg-white/40 hover:bg-white/60'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== COMMITMENT ===== */}
            <section className="py-8 lg:py-12 bg-gray-55">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-green-600 font-bold text-sm uppercase tracking-wider font-montserrat">Deep Dive</span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-8 leading-tight font-montserrat">
                                Our Commitment to Quality
                            </h2>
                            <p className="text-gray-700 text-lg mb-6 leading-relaxed font-montserrat">
                                Buddha Hospital &amp; Research Institute is dedicated to redefining healthcare standards in the region by integrating modern medical practices with compassionate patient care. With a strong focus on quality, safety, and accessibility, BHRI ensures that every patient receives personalized attention and the best possible treatment.
                            </p>
                            <p className="text-gray-600 text-base leading-relaxed font-montserrat">
                                Our institution is continuously evolving to meet the growing healthcare needs of society. From advanced diagnostics to specialized treatments, we strive to deliver excellence at every level. We also emphasize preventive healthcare and community outreach programs to promote healthier lifestyles.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl p-10 border border-gray-200 h-fit sticky top-32"
                        >
                            <Star className="text-green-600 mb-6" size={32} />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">Excellence in Every Step</h3>
                            <p className="text-gray-600 italic text-base font-montserrat">"Your health is our priority. We are here to serve Gaya with the best of medicine and care."</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="py-8 lg:py-12 bg-green-600 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-montserrat">
                            Your Health is Our Priority
                        </h2>
                        <p className="text-lg text-green-100 mb-10 max-w-2xl mx-auto font-montserrat">
                            Visit BHRI today and experience healthcare with care, trust, and excellence.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors font-montserrat">
                                Call Now: +91-XXXX-XXXXXX
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors font-montserrat">
                                Book Now
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <section className="bg-white border-t border-gray-200 py-6">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <p className="text-gray-600 font-montserrat">Excellence in Healthcare | Buddha Hospital &amp; Research Institute, Gaya</p>
                </div>
            </section>
        </div>
    );
};

export default AboutOverview;