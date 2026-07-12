"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
    Heart, Target, Eye, ShieldCheck, Users, Zap,
    MapPin, Clock, Stethoscope, Microscope, Ambulance,
    Bed, UserCheck, Activity, Award, CheckCircle, ChevronRight,
    ChevronLeft, GraduationCap, Building2, FlaskConical, HeartPulse,
    Baby, Syringe, School, ShieldAlert, Globe, Star, Pill, Thermometer,
    Microscope as MicroscopeIcon
} from "lucide-react";
import { SparkleButton } from "@/components/ui/button-8";

// --- Sub-components ---

const AnimatedCounter = ({ value, label, icon: Icon }: { value: string, label: string, icon: any }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);
    const numericValue = value.replace(/\D/g, '');
    const target = numericValue ? parseInt(numericValue) : 0;
    const isNumeric = numericValue.length > 0;

    useEffect(() => {
        if (isInView && isNumeric) {
            let start = 0;
            const duration = 2000;
            const increment = Math.ceil(target / (duration / 16));

            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, target, isNumeric]);

    return (
        <div ref={ref} className="flex flex-col items-center p-8 text-center border-b md:border-b-0 md:border-r border-white/10 last:border-0 hover:bg-white/5 transition-colors duration-300 w-full md:w-1/3 lg:w-1/6">
            <div className="w-14 h-14 bg-brandSaffron/15 rounded-2xl flex items-center justify-center mb-5 text-brandSaffron shadow-lg shadow-brandSaffron/10">
                <Icon size={28} />
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                {isNumeric ? count : value}{isNumeric && value.includes('+') ? '+' : ''}
            </h3>
            <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">{label}</p>
        </div>
    );
};

const SectionHeading = ({ subtitle, title, centered = true }: { subtitle: string, title: string, centered?: boolean }) => (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
        <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brandSaffron font-black text-xs uppercase tracking-[0.3em] mb-4 block"
        >
            {subtitle}
        </motion.span>
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-brandBlue leading-tight uppercase tracking-tight"
        >
            {title}
        </motion.h2>
        <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className={`h-1.5 bg-brandSaffron mt-6 rounded-full ${centered ? 'mx-auto' : ''}`}
        />
    </div>
);

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: { icon: any, title: string, description: string, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
    >
        <div className="w-14 h-14 bg-brandBlue/5 rounded-2xl flex items-center justify-center mb-6 text-brandBlue group-hover:bg-brandBlue group-hover:text-white transition-colors duration-300">
            <Icon size={28} />
        </div>
        <h4 className="text-xl font-bold text-brandBlue mb-4 uppercase tracking-tight">{title}</h4>
        <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
    </motion.div>
);

const AboutOverview = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { title: "Quality Healthcare You Can Trust", desc: "Delivering reliable and compassionate care for every patient.", icon: HeartPulse },
        { title: "Advanced Medical Facilities", desc: "Equipped with modern technology for accurate diagnosis and treatment.", icon: MicroscopeIcon },
        { title: "Expert Doctors & Staff", desc: "Experienced professionals dedicated to your health.", icon: UserCheck },
        { title: "24/7 Emergency Services", desc: "Always ready when you need us the most.", icon: Ambulance },
        { title: "Serving Community with Care", desc: "Healthcare that reaches every corner of society.", icon: Globe },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="bg-white">
            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brandBlue">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/logo.png" // Using logo as a pattern if background image is not available
                        alt="Dhamma Superspeciality Hospital"
                        fill
                        className="object-contain opacity-5 scale-150 rotate-12"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brandBlue via-brandBlue/90 to-transparent" />
                </div>

                <div className="container-custom relative z-10 py-20">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-brandSaffron text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full mb-8 shadow-xl shadow-brandSaffron/20">
                                Established for Excellence
                            </span>
                            <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.05] uppercase tracking-tighter mb-8">
                                Healing with <br />
                                <span className="text-brandSaffronLight">Innovation</span> &amp; <br />
                                Integrity
                            </h1>
                            <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-10">
                                Dhamma Superspeciality Hospital is a trusted healthcare destination in Patna, committed to delivering quality medical care with compassion and modern technology.
                            </p>
                            <div className="flex flex-wrap gap-5">
                                <SparkleButton href="/contact">Book Appointment</SparkleButton>
                                <SparkleButton href="/facilities">Our Facilities</SparkleButton>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Floating Stats Label */}
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-brandBlueDark/90 backdrop-blur-xl border-t border-white/10 overflow-hidden">
                    <div className="container-custom flex flex-wrap justify-between">
                        <AnimatedCounter icon={Bed} value="300+" label="Beds Facility" />
                        <AnimatedCounter icon={UserCheck} value="50+" label="Experienced Doctors" />
                        <AnimatedCounter icon={Microscope} value="Fully" label="Diagnostic Labs" />
                        <AnimatedCounter icon={Ambulance} value="24/7" label="Emergency Service" />
                        <AnimatedCounter icon={Baby} value="Adv." label="ICU & NICU Units" />
                        <AnimatedCounter icon={Users} value="1000s" label="Monthly Patients" />
                    </div>
                </div>
            </section>

            {/* --- WHO WE ARE SECTION --- */}
            <section className="section-padding bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brandBlue/5 -skew-x-12 translate-x-20" />
                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="flex-1">
                            <SectionHeading subtitle="Who We Are" title="A Vision for Better Healthcare in Bihar" centered={false} />
                            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                                We are a multi-speciality hospital and research institute focused on advanced patient care, medical education, and community health development.
                            </p>
                            <p className="text-slate-500 mb-8">
                                Dhamma Superspeciality Hospital is built with a vision to become a leading healthcare institution in Bihar and Eastern India, combining advanced medical technology with experienced healthcare professionals.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                {[
                                    { icon: Activity, text: "Advanced Patient Care" },
                                    { icon: GraduationCap, text: "Medical Education" },
                                    { icon: Users, text: "Community Health" },
                                    { icon: ShieldCheck, text: "Transparent Treatment" }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100"
                                    >
                                        <div className="w-10 h-10 bg-brandBlue/5 rounded-xl flex items-center justify-center text-brandBlue">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="font-bold text-brandBlue text-sm uppercase tracking-tight">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                                <Image src="/logo.png" alt="Who We Are" width={600} height={450} className="w-full object-contain p-20" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brandSaffron rounded-3xl z-0 rotate-12 opacity-20" />
                            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brandBlue rounded-full z-0 opacity-10 blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MISSION & VISION --- */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-brandBlue p-12 rounded-[3rem] text-white relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-10 text-white/5 group-hover:scale-110 transition-transform duration-500">
                                <Target size={180} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-brandSaffron rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-brandSaffron/20">
                                    <Target size={32} />
                                </div>
                                <h3 className="text-4xl font-black mb-6 uppercase tracking-tight">Our Mission</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Provide affordable and high-quality healthcare",
                                        "Ensure patient safety and satisfaction",
                                        "Adopt modern medical technologies",
                                        "Support medical education and research"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start gap-3 text-white/80">
                                            <CheckCircle className="text-brandSaffron shrink-0 mt-1" size={18} />
                                            <span className="font-medium">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-brandSaffron p-12 rounded-[3rem] text-white relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-10 text-white/5 group-hover:scale-110 transition-transform duration-500">
                                <Eye size={180} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-brandBlue rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-brandBlue/20">
                                    <Eye size={32} />
                                </div>
                                <h3 className="text-4xl font-black mb-6 uppercase tracking-tight">Our Vision</h3>
                                <p className="text-lg leading-relaxed font-medium text-white/90">
                                    To become a center of excellence in healthcare by delivering world-class medical services, fostering innovation, and building trust within the community.
                                </p>
                                <div className="mt-10 h-1 w-20 bg-white/40 rounded-full" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- CORE VALUES --- */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom">
                    <SectionHeading subtitle="Our Foundations" title="Our Core Values" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {[
                            { icon: Heart, title: "Compassion", desc: "Caring with empathy" },
                            { icon: ShieldCheck, title: "Integrity", desc: "Transparency in care" },
                            { icon: Award, title: "Excellence", desc: "Continuous improvement" },
                            { icon: Zap, title: "Innovation", desc: "Modern tools & tech" },
                            { icon: Globe, title: "Accessibility", desc: "Healthcare for everyone" }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-[2rem] text-center border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-brandBlue/5 text-brandBlue rounded-full flex items-center justify-center mx-auto mb-6">
                                    <value.icon size={28} />
                                </div>
                                <h4 className="text-lg font-black text-brandBlue uppercase tracking-tight mb-2">{value.title}</h4>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- WHAT WE OFFER SECTION --- */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeading subtitle="What We Offer" title="Comprehensive Healthcare Services" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard icon={Activity} title="Multi-Speciality" description="Specialized medical care across all departments under one roof." />
                        <FeatureCard icon={ShieldAlert} title="Emergency Care" description="24/7 critical care and trauma services for urgent needs." delay={0.1} />
                        <FeatureCard icon={FlaskConical} title="Diagnostics" description="Advanced imaging and laboratory facilities for accurate diagnosis." delay={0.2} />
                        <FeatureCard icon={UserCheck} title="Expert Team" description="Highly skilled doctors and compassionate nursing staff." delay={0.3} />
                        <FeatureCard icon={Building2} title="Modern OTs" description="Modular operation theatres equipped with latest technology." />
                        <FeatureCard icon={Pill} title="Pharmacy" description="In-house medical store and pharmacy for 24/7 availability." delay={0.1} />
                        <FeatureCard icon={Baby} title="Maternity" description="Comprehensive care for mother and child with NICU/PICU." delay={0.2} />
                        <FeatureCard icon={HeartPulse} title="Health Checkups" description="Preventive health packages for proactive wellness." delay={0.3} />
                    </div>
                </div>
            </section>

            {/* --- COMMUNITY & TEAM (Premium Split) --- */}
            <section className="py-0">
                <div className="flex flex-col lg:flex-row min-h-[600px]">
                    <div className="flex-1 bg-brandBlue text-white p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-20 text-white/5 -rotate-12">
                            <Globe size={400} />
                        </div>
                        <div className="relative z-10">
                            <SectionHeading subtitle="Our Impact" title="Community & Social Work" centered={false} />
                            <p className="text-white/70 text-lg mb-12 max-w-xl font-medium">
                                At Dhamma Superspeciality Hospital, we believe healthcare should reach everyone. We actively bridge the gap in underserved areas through dedicated programs.
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Free health check-up camps",
                                    "Rural healthcare awareness programs",
                                    "Vaccination drives",
                                    "Health education initiatives"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-1.5 h-1.5 bg-brandSaffron rounded-full group-hover:scale-150 transition-transform" />
                                        <span className="text-xl font-bold uppercase tracking-tight group-hover:text-brandSaffron transition-colors">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-brandSaffron text-white p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-20 text-white/5 rotate-12">
                            <Users size={400} />
                        </div>
                        <div className="relative z-10">
                            <SectionHeading subtitle="Our Strength" title="Our Expert Team" centered={false} />
                            <p className="text-white/90 text-lg mb-12 max-w-xl font-medium">
                                Our strength lies in our people. We work together to ensure every patient receives the best possible care.
                            </p>
                            <div className="grid grid-cols-1 gap-8">
                                <div className="flex items-center gap-6 bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/10">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brandSaffron shadow-xl">
                                        <Stethoscope size={32} />
                                    </div>
                                    <div>
                                        <h5 className="text-2xl font-black uppercase tracking-tight">Qualified Doctors</h5>
                                        <p className="text-white/70 font-medium">Top specialists across all medical fields</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/10">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brandSaffron shadow-xl">
                                        <Users size={32} />
                                    </div>
                                    <div>
                                        <h5 className="text-2xl font-black uppercase tracking-tight">Dedicated Staff</h5>
                                        <p className="text-white/70 font-medium">Caring nurses and professional administrators</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- INFRASTRUCTURE --- */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom">
                    <SectionHeading subtitle="Infrastructure" title="Modern Medical Technology" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { title: "Advanced ICU Units", icon: Activity },
                            { title: "Digital Diagnostics", icon: MicroscopeIcon },
                            { title: "Modular OTs", icon: Building2 },
                            { title: "Electronic Records (EMR)", icon: FlaskConical },
                            { title: "Patient-Friendly Environment", icon: ShieldCheck }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-6 group"
                            >
                                <div className="w-20 h-20 bg-white border border-slate-200 rounded-3xl flex items-center justify-center text-brandBlue shadow-sm group-hover:bg-brandBlue group-hover:text-white group-hover:shadow-xl transition-all duration-300">
                                    <item.icon size={36} />
                                </div>
                                <h5 className="text-xl font-black text-brandBlue uppercase tracking-tight leading-tight group-hover:text-brandSaffron transition-colors">{item.title}</h5>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- WHY CHOOSE Dhamma Superspeciality Hospital (Premium Icon Grid) --- */}
            <section className="section-padding bg-brandBlue relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[url('/grid-pattern.png')] bg-repeat" />
                <div className="container-custom relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-brandSaffron font-black text-xs uppercase tracking-[0.4em] mb-4 block">Advantages</span>
                        <h2 className="section-heading-white">Why Choose Dhamma Superspeciality Hospital?</h2>
                        <div className="h-1.5 w-20 bg-brandSaffron mx-auto mt-8 rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-sm">
                        {[
                            { title: "Trusted in Patna", icon: Award, desc: "Reliable healthcare provider for the region." },
                            { title: "Affordable Care", icon: ShieldCheck, desc: "Quality treatment that is accessible to all." },
                            { title: "Expert Doctors", icon: UserCheck, desc: "Highly experienced medical professionals." },
                            { title: "Modern Facilities", icon: Zap, desc: "Latest medical equipment and infrastructure." },
                            { title: "Patient First", icon: Heart, desc: "Compassionate and personalized approach." },
                            { title: "Transparent Process", icon: CheckCircle, desc: "Clarity in treatment and billing protocols." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                                className="p-12 transition-colors duration-300 group"
                            >
                                <div className="w-12 h-12 bg-brandSaffron/20 text-brandSaffron rounded-xl flex items-center justify-center mb-8 group-hover:bg-brandSaffron group-hover:text-white transition-all duration-300">
                                    <item.icon size={24} />
                                </div>
                                <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-300">{item.title}</h4>
                                <p className="text-white/50 leading-relaxed text-sm group-hover:text-white/70 transition-colors">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CAROUSEL SLIDER --- */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="bg-slate-50 rounded-[4rem] p-12 md:p-24 relative overflow-hidden border border-slate-100">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="text-center max-w-4xl mx-auto"
                            >
                                <div className="flex justify-center mb-10">
                                    <div className="w-24 h-24 bg-brandBlue text-white rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-brandBlue/30">
                                        {React.createElement(slides[currentSlide].icon, { size: 48 })}
                                    </div>
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black text-brandBlue uppercase tracking-tighter mb-8 leading-tight">
                                    {slides[currentSlide].title}
                                </h3>
                                <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                                    {slides[currentSlide].desc}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex justify-center gap-3 mt-16">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`h-2 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-16 bg-brandSaffron' : 'w-3 bg-slate-200'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DETAILED PARAGRAPH --- */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-16 items-start">
                            <div className="flex-1">
                                <SectionHeading subtitle="Deep Dive" title="Our Commitment to Quality" centered={false} />
                                <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                                    Dhamma Superspeciality Hospital is dedicated to redefining healthcare standards in the region by integrating modern medical practices with compassionate patient care. With a strong focus on quality, safety, and accessibility, Dhamma Superspeciality Hospital ensures that every patient receives personalized attention and the best possible treatment.
                                </p>
                                <p className="text-slate-500 text-md leading-relaxed font-medium">
                                    Our institution is continuously evolving to meet the growing healthcare needs of society. From advanced diagnostics to specialized treatments, we strive to deliver excellence at every level. We also emphasize preventive healthcare and community outreach programs to promote healthier lifestyles.
                                </p>
                            </div>
                            <div className="w-full md:w-80 pt-10">
                                <div className="bg-brandBlue p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                                    <div className="absolute -top-10 -right-10 text-white/5 rotate-12 group-hover:scale-110 transition-transform">
                                        <Award size={200} />
                                    </div>
                                    <Star className="text-brandSaffron mb-6 relative z-10" size={40} />
                                    <h6 className="text-2xl font-black uppercase tracking-tight mb-4 relative z-10">Excellence in Every Step</h6>
                                    <p className="text-white/60 text-sm italic relative z-10">"Your health is our priority. We are here to serve Patna with the best of medicine and care."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CALL TO ACTION --- */}
            <section className="section-padding bg-brandSaffron overflow-hidden relative">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brandBlue/10 rounded-full blur-3xl" />
                <div className="container-custom relative z-10 text-center">
                    <h2 className="section-heading-white">
                        Your Health is <br /> Our Priority
                    </h2>
                    <p className="text-white text-xl font-bold mb-12 uppercase tracking-[0.2em]">
                        Visit Dhamma Superspeciality Hospital today and experience healthcare with care, trust, and excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <button className="bg-white text-brandSaffron px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-brandBlue hover:text-white transition-all duration-300 shadow-2xl">
                            Call Now: +91-XXXX-XXXXXX
                        </button>
                        <SparkleButton href="/contact">Book Now</SparkleButton>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default function AboutPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);

    if (slug === 'overview') {
        return <AboutOverview />;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 py-20 px-6">
            <SectionHeading subtitle="404" title="Page Not Found" />
            <p className="text-slate-500 mb-10 text-center max-w-md">
                The about page for "{slug}" is under construction or does not exist.
            </p>
            <SparkleButton href="/">Back to Home</SparkleButton>
        </div>
    );
}