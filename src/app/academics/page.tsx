"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    GraduationCap, Calendar, BookOpen, Atom, Users, 
    Award, ShieldCheck, ChevronRight, Sparkles, BookMarked
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

interface AcademicSection {
    title: string;
    description: string;
    href: string;
    icon: any;
    metric: string;
    metricLabel: string;
    color: string;
}

const academicSections: AcademicSection[] = [
    {
        title: "MBBS Programmes",
        description: "Explore the Bachelor of Medicine and Bachelor of Surgery course details, total durations, internship guidelines, and intake seat details.",
        href: "/academics/programmes",
        icon: GraduationCap,
        metric: "150 Seats",
        metricLabel: "Annual Intake",
        color: "from-blue-600 to-indigo-600"
    },
    {
        title: "NMC CBME Curriculum",
        description: "View the regulatory Competency-Based Medical Education blueprints, AETCOM ethics logs, and mandatory bedside skill-book checkposts.",
        href: "/academics/nmc-cbme-curriculum",
        icon: ShieldCheck,
        metric: "NMC Guideline",
        metricLabel: "CBME Outcome Models",
        color: "from-emerald-600 to-teal-600"
    },
    {
        title: "Academic Time Table",
        description: "Track live daily lecture galleries, practical batch rotations, clinical hospital postings, and weekly assessment calendars.",
        href: "/academics/time-table",
        icon: Calendar,
        metric: "6 Days/Wk",
        metricLabel: "Lectures &amp; OPDs",
        color: "from-sky-600 to-blue-600"
    },
    {
        title: "Medical Research",
        description: "Discover publications registry, ICMR student research projects, PubMed/Scopus journals index, and ongoing faculty clinical trials.",
        href: "/academics/research",
        icon: Atom,
        metric: "PubMed Index",
        metricLabel: "Faculty Journals",
        color: "from-cyan-600 to-teal-600"
    },
    {
        title: "Student Details",
        description: "Review active MBBS batch distributions, male-female scholar ratios, mentor allocation tables, and student welfare anti-ragging files.",
        href: "/academics/student-details",
        icon: Users,
        metric: "1:15 Ratio",
        metricLabel: "Mentor Allocation",
        color: "from-indigo-600 to-violet-600"
    },
    {
        title: "List of Holidays",
        description: "Browse the gazetted regional festival almanac, restricted holidays, and summer/winter institutional academic recesses.",
        href: "/academics/holidays",
        icon: BookOpen,
        metric: "Annual",
        metricLabel: "Holiday Almanac",
        color: "from-amber-600 to-orange-600"
    },
    {
        title: "Academic Results",
        description: "Celebrate university examination pass percentages, gold medalists lists, batch toppers, and subject honors registries.",
        href: "/academics/results",
        icon: Award,
        metric: "94.8% Pass",
        metricLabel: "University Boards",
        color: "from-yellow-600 to-amber-600"
    }
];

export default function AcademicsHubPage() {
    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>
            
            {/* HERO */}
            <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/80 mix-blend-multiply opacity-90 z-10" />
                    <Image src="/academic_complex_hero.png" alt="Academics Hub" fill className="object-cover" priority />
                </div>
                
                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto -mt-6">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-indigo-500/10 backdrop-blur-md rounded-full font-bold tracking-widest text-[10px] uppercase border border-indigo-500/30 text-indigo-300 mb-6">
                        <BookMarked size={12} /> Education &amp; Clinical Competence
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-montserrat leading-tight" style={{ fontFamily: serifFont }}>
                        Academics Portal
                    </h1>
                    <p className="text-lg lg:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl mx-auto opacity-95">
                        Fostering state-of-the-art medical education under strict National Medical Commission guidelines at Dhamma Institute of Medical Sciences.
                    </p>
                </div>
            </section>

            {/* SECTIONS GRID */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    
                    <div className="text-center mb-16">
                        <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-3 block">Academic Hub</span>
                        <h2 className="section-heading" style={{ fontFamily: serifFont }}>Explore Educational Portals</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            Select any section below to navigate its custom interactive features, schedules, regulatory checklists, and research archives.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {academicSections.map((sec, idx) => {
                            const Icon = sec.icon;
                            return (
                                <Link 
                                    href={sec.href}
                                    key={idx}
                                    className="group bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between min-h-[350px] shadow-sm hover:shadow-2xl"
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="w-12 h-12 bg-white group-hover:bg-white/10 rounded-2xl flex items-center justify-center text-slate-700 group-hover:text-white transition-all shadow-sm shrink-0">
                                                <Icon size={24} />
                                            </div>
                                            <div className="text-right">
                                                <span className="text-lg font-black text-slate-900 group-hover:text-white block font-montserrat">{sec.metric}</span>
                                                <span className="text-[9px] text-slate-400 group-hover:text-slate-300 font-bold uppercase tracking-wider block">{sec.metricLabel}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 font-montserrat text-slate-900 group-hover:text-white group-hover:underline transition-all">
                                            {sec.title}
                                        </h3>
                                        <p className="text-xs text-slate-500 group-hover:text-slate-300 leading-relaxed mb-6">
                                            {sec.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-indigo-600 group-hover:text-white uppercase tracking-wider">
                                        <span>Explore Portal</span>
                                        <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                </div>
            </section>
        </div>
    );
}
