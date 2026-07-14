"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/context/BookingContext";
import {
    Heart, ShieldCheck,
    CalendarCheck, ChevronRight,
    ArrowLeft, ArrowRight, Phone,
    MapPin, Users, Award, BookOpen, Globe, CheckSquare
} from "lucide-react";

export default function AboutOverview() {
    const { openBooking } = useBooking();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "/images/about/patient_story.png",
            caption: "Ramesh Prasad, a local farmer, recovers fully after a complex cardiac bypass surgery performed by our expert cardiothoracic team.",
            ctaText: "Read Ramesh's story >",
            link: "#"
        },
        {
            image: "/images/about/surgery_team.png",
            caption: "State-of-the-art modular OT suites running 24/7 to ensure timely surgical care for all trauma and emergency cases.",
            ctaText: "Explore our surgical departments >",
            link: "/departments"
        },
        {
            image: "/images/about/doctor_child.png",
            caption: "Delivering advanced neonatology and pediatric care to rural and urban families across Patna.",
            ctaText: "Learn about NICU & PICU services >",
            link: "/departments"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Auto-advance slides every 8 seconds
    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-white text-gray-900 overflow-x-hidden pt-16">
            {/* ------- BREADCRUMBS & HEADING (COMPACT) ---------------- */}
            <div className="max-w-[1140px] mx-auto px-4 sm:px-6 pt-4 pb-6">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-1.5 text-gray-500 text-xs font-sans mb-4">
                    <Link href="/" className="hover:text-brandBlue transition">Home</Link>
                    <ChevronRight size={10} className="text-gray-400" />
                    <span className="text-gray-900 font-medium">About Dhamma Hospital</span>
                </div>

                {/* Subtitle */}
                <p className="text-xs font-bold uppercase tracking-wider text-brandBlue mb-2">
                    About Dhamma Superspeciality Hospital
                </p>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-gray-900 leading-[1.1] max-w-4xl">
                    Solving Bihar&apos;s toughest medical problems
                    <span className="block text-brandBlue italic font-light mt-1">— one person at a time</span>
                </h1>
            </div>

            {/* ------- INTERACTIVE STORY CAROUSEL (COMPACTED HEIGHT) --- */}
            <section className="relative w-full aspect-[2.4/1] min-h-[280px] max-h-[440px] bg-gray-900 overflow-hidden mb-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={slides[currentSlide].image}
                            alt="Dhamma Hospital Story"
                            fill
                            priority
                            className="object-cover"
                        />
                        {/* Dark gradient overlay matching screenshots */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                    </motion.div>
                </AnimatePresence>

                {/* Carousel Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 lg:p-10 z-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div className="max-w-xl text-white">
                        <motion.p
                            key={`cap-${currentSlide}`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm sm:text-base lg:text-lg font-light leading-relaxed mb-2 text-white/95"
                        >
                            {slides[currentSlide].caption}
                        </motion.p>
                        <motion.div key={`cta-${currentSlide}`} initial={{ opacity: 0 }}>
                            <Link
                                href={slides[currentSlide].link}
                                className="inline-flex items-center text-xs font-semibold text-white hover:underline gap-0.5"
                            >
                                {slides[currentSlide].ctaText}
                            </Link>
                        </motion.div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex items-center gap-2 self-end sm:self-auto">
                        <div className="flex gap-1.5 mr-3">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`h-0.5 rounded-full transition-all duration-300 ${
                                        idx === currentSlide ? "w-6 bg-white" : "w-1.5 bg-white/40"
                                    }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={prevSlide}
                            className="w-8 h-8 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white transition bg-black/20 hover:bg-black/40"
                            aria-label="Previous story"
                        >
                            <ArrowLeft size={14} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-8 h-8 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white transition bg-black/20 hover:bg-black/40"
                            aria-label="Next story"
                        >
                            <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </section>

            {/* ------- TWO COLUMN: WHO WE ARE (COMPACTED Y-PADDING) ---- */}
            <section className="max-w-[1140px] mx-auto px-4 sm:px-6 py-8 lg:py-12 border-b border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: Vertical Image */}
                    <div className="lg:col-span-5 relative aspect-[4/5] w-full rounded-xl overflow-hidden shadow-lg bg-gray-100 max-h-[400px]">
                        <Image
                            src="/images/about/surgery_team.png"
                            alt="Transforming Healthcare"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                            Who we are
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight text-gray-900 mb-4">
                            Transforming health care
                        </h2>
                        <div className="prose prose-gray text-gray-600 text-xs sm:text-sm leading-relaxed space-y-4 font-sans text-justify">
                            <p>
                                Dhamma Superspeciality Hospital, situated at Phulwari Sharif, Patna, Bihar (Opposite Canara Bank, near AIIMS Gate No. 1), is a premier multi-speciality healthcare facility guiding patient care under the motto <strong className="text-brandBlue font-semibold">सेवा परमो धर्म:</strong> (Service is the highest duty).
                            </p>
                            <p>
                                We host modern modular OT complexes, a 60-bed advanced ICU with round-the-clock critical trauma care, pediatric NICU/PICU, and modern diagnostics (CT, MRI, Pathology) — making elite medicine reachable and affordable for everyone in Eastern India.
                            </p>

                            <h3 className="text-sm font-bold text-gray-900 pt-2">Innovating for new solutions</h3>
                            <p>
                                Our clinical experts combine advanced skills with medical compassion to solve challenging diagnoses. From multi-speciality OPD consultations to complex cardiothoracic, orthopedic, and neurological surgeries, we deliver elite clinical protocols.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------- TWO COLUMN: PEOPLE WHO MAKE THE DIFFERENCE (NEW COMPACTED BLOCK) */}
            <section className="max-w-[1140px] mx-auto px-4 sm:px-6 py-8 lg:py-12 border-b border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: Content (Order 2 on mobile, Order 1 on Desktop) */}
                    <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                            People and culture
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight text-gray-900 mb-4">
                            People who make the difference
                        </h2>
                        <div className="prose prose-gray text-gray-600 text-xs sm:text-sm leading-relaxed space-y-4 font-sans text-justify">
                            <p>
                                Every staff member at Dhamma Superspeciality Hospital is dedicated to giving high-quality, compassionate care. That includes thousands of families across Patna and rural Bihar who put their faith in our treatments each year.
                            </p>
                            <p>
                                We prioritize a culture of absolute teamwork, honesty, transparency in billing, and putting patients first. Our medical staff, nurses, and technicians work seamlessly to find fast solutions for complex health issues.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Vertical Image (Order 1 on mobile, Order 2 on Desktop) */}
                    <div className="lg:col-span-5 relative aspect-[4/5] w-full rounded-xl overflow-hidden shadow-lg bg-gray-100 max-h-[400px] order-1 lg:order-2">
                        <Image
                            src="/images/about/medical_researcher.png"
                            alt="People Who Make The Difference"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* ------- LEADERSHIP QUOTE SECTION (NEW COMPACT) ----------- */}
            <section className="bg-gray-50 py-10 lg:py-14 border-b border-gray-100">
                <div className="max-w-[800px] mx-auto px-4 text-center">
                    <blockquote className="text-lg sm:text-xl lg:text-2xl font-serif italic text-gray-800 leading-relaxed mb-4">
                        &ldquo;A diverse, dedicated staff makes every aspect of healthcare better. At Dhamma Hospital, we aim to create the right environment for our team to thrive, so we can deliver an unparalleled patient experience.&rdquo;
                    </blockquote>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5">
                        Dr. Narendra Prasad
                    </p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                        Chairman &amp; Chief Director, Dhamma Superspeciality Hospital
                    </p>
                </div>
            </section>

            {/* ------- DISCOVER RESOURCES GRID (NEW COMPACT) ----------- */}
            <section className="max-w-[1140px] mx-auto px-4 sm:px-6 py-10 lg:py-14 border-b border-gray-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1 text-center">
                    Resources
                </p>
                <h2 className="text-2xl sm:text-3xl font-serif text-center text-gray-900 mb-8">
                    Discover more about Dhamma Hospital
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Card 1 */}
                    <div className="bg-white border border-gray-100 hover:border-gray-200 shadow-sm rounded-xl p-5 hover:shadow-md transition-all">
                        <MapPin className="text-brandBlue w-5 h-5 mb-3" />
                        <h4 className="text-sm font-bold text-gray-900 hover:text-brandBlue mb-2">
                            <Link href="/contact">Our Locations</Link>
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Opposite Canara Bank, Phulwari Sharif, Near AIIMS Gate No. 1, Patna, Bihar. Accessible 24/7 for emergencies.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border border-gray-100 hover:border-gray-200 shadow-sm rounded-xl p-5 hover:shadow-md transition-all">
                        <Users className="text-brandBlue w-5 h-5 mb-3" />
                        <h4 className="text-sm font-bold text-gray-900 hover:text-brandBlue mb-2">
                            <Link href="/about/chairman">Leadership &amp; Governance</Link>
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Under the leadership of renowned medical professionals guiding our clinical and administrative staff.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border border-gray-100 hover:border-gray-200 shadow-sm rounded-xl p-5 hover:shadow-md transition-all">
                        <Award className="text-brandBlue w-5 h-5 mb-3" />
                        <h4 className="text-sm font-bold text-gray-900 hover:text-brandBlue mb-2">
                            <Link href="/hospital">Empaneled Cashless Partners</Link>
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Cashless benefits for Ayushman Bharat (PMJAY), CGHS, ECHS, and leading commercial insurance TPAs.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white border border-gray-100 hover:border-gray-200 shadow-sm rounded-xl p-5 hover:shadow-md transition-all">
                        <Globe className="text-brandBlue w-5 h-5 mb-3" />
                        <h4 className="text-sm font-bold text-gray-900 hover:text-brandBlue mb-2">
                            <Link href="/contact">Community Outreach</Link>
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Organizing rural clinics, free diagnostic check-ups, and health education initiatives across Bihar.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white border border-gray-100 hover:border-gray-200 shadow-sm rounded-xl p-5 hover:shadow-md transition-all">
                        <BookOpen className="text-brandBlue w-5 h-5 mb-3" />
                        <h4 className="text-sm font-bold text-gray-900 hover:text-brandBlue mb-2">
                            <Link href="/departments">20+ Clinical Departments</Link>
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Explore full clinical fields spanning medicine, advanced orthopedics, general surgery, and pediatrics.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white border border-gray-100 hover:border-gray-200 shadow-sm rounded-xl p-5 hover:shadow-md transition-all">
                        <CheckSquare className="text-brandBlue w-5 h-5 mb-3" />
                        <h4 className="text-sm font-bold text-gray-900 hover:text-brandBlue mb-2">
                            <Link href="/">Our Mission &amp; Values</Link>
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Patient safety, professional honesty, transparent charging structure, and compassionate care.
                        </p>
                    </div>
                </div>
            </section>

            {/* ------- IMPACT METRICS BLOCK (COMPACT) ----------------- */}
            <section className="max-w-[1140px] mx-auto px-4 sm:px-6 py-10 lg:py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Metric 1 */}
                    <div className="border-t border-gray-200 pt-6 flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
                                Patient Welfare &amp; Equity
                            </span>
                            <Heart className="text-brandBlue w-5 h-5" />
                        </div>
                        <p className="text-4xl sm:text-5xl font-serif text-brandBlue font-light leading-none my-2">
                            ₹20L+
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Spent annually on providing subsidized medicines, free outpatient consultations, and highly discounted surgeries for low-income patients across Bihar.
                        </p>
                    </div>

                    {/* Metric 2 */}
                    <div className="border-t border-gray-200 pt-6 flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
                                Clean energy &amp; sustainability
                            </span>
                            <ShieldCheck className="text-brandBlue w-5 h-5" />
                        </div>
                        <p className="text-4xl sm:text-5xl font-serif text-brandBlue font-light leading-none my-2">
                            50%
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Targeted reduction in carbon emissions and electricity footprint via our advanced rooftop solar installations and modern LED energy systems.
                        </p>
                    </div>
                </div>
            </section>

            {/* ------- CALL TO ACTION (CTA) (COMPACT) ----------------- */}
            <section className="bg-gray-50 border-t border-gray-100 py-10 sm:py-14">
                <div className="max-w-[700px] mx-auto px-4 text-center flex flex-col items-center">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-brandBlue mb-2">
                        Your health. Our priority.
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight text-gray-900 mb-4 leading-tight">
                        Compassionate care,<br />every single day.
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 max-w-lg">
                        Visit Dhamma Superspeciality Hospital — where elite medicine meets local empathy. Walk in or schedule a priority consultation online.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <button
                            onClick={openBooking}
                            className="bg-brandBlue hover:bg-[#061830] text-white font-semibold px-6 py-3 rounded-full transition-all text-xs flex items-center justify-center gap-1.5"
                        >
                            <CalendarCheck size={14} /> Book Appointment
                        </button>
                        <a
                            href="tel:+917643990301"
                            className="bg-white hover:bg-gray-100 border border-gray-200 text-gray-900 font-semibold px-6 py-3 rounded-full transition-all text-xs flex items-center justify-center gap-1.5"
                        >
                            <Phone size={12} /> Call Helpline
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
