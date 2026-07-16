"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap, Calendar, Users, Award, BookOpen, 
    CheckCircle, ChevronRight, X, Heart, ShieldCheck
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

type PhaseKey = "phase1" | "phase2" | "phase3_1" | "phase3_2";

interface PhaseData {
    title: string;
    duration: string;
    subjects: string[];
    description: string;
}

const curriculumPhases: Record<PhaseKey, PhaseData> = {
    phase1: {
        title: "Phase I (1st Professional Year)",
        duration: "13 Months",
        subjects: ["Human Anatomy", "Physiology", "Biochemistry", "Foundation Course (1 Month)"],
        description: "Introduces basic medical sciences and normal human biology, including structural and metabolic processes. Includes immediate early clinical exposure (ECE)."
    },
    phase2: {
        title: "Phase II (2nd Professional Year)",
        duration: "11 Months",
        subjects: ["Pharmacology", "Pathology", "Microbiology", "Clinical Postings & Skills Labs"],
        description: "Focuses on pathogenesis of diseases, pharmacodynamics, diagnostics, and essential clinical posting guidelines at hospital bedside clinics."
    },
    phase3_1: {
        title: "Phase III - Part 1 (3rd Professional Year)",
        duration: "12 Months",
        subjects: ["Forensic Medicine & Toxicology", "Community Medicine (PSM)", "Oto-Rhino-Laryngology (ENT)", "Ophthalmology"],
        description: "Covers preventive care, social health initiatives, forensic legal procedures, and specialized head/neck/eye surgical sciences."
    },
    phase3_2: {
        title: "Phase III - Part 2 (4th Professional Year)",
        duration: "14 Months",
        subjects: ["General Medicine", "General Surgery", "Paediatrics", "Obstetrics & Gynecology"],
        description: "Intensive clinical specialization, advanced surgical methods, maternal care operations, pediatric resuscitations, and major ward assignments."
    }
};

export default function ProgrammesPage() {
    const [selectedPhase, setSelectedPhase] = useState<PhaseKey>("phase1");
    const activePhase = curriculumPhases[selectedPhase];

    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>
            
            {/* HERO */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/80 mix-blend-multiply opacity-90 z-10" />
                    <Image src="/pharmacology_overview.png" alt="Programmes" fill className="object-cover" priority />
                </div>
                
                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto -mt-6">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-indigo-500/10 backdrop-blur-md rounded-full font-bold tracking-widest text-[10px] uppercase border border-indigo-500/30 text-indigo-300 mb-6">
                        <GraduationCap size={12} /> Undergraduate Medical Studies
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-montserrat leading-tight" style={{ fontFamily: serifFont }}>
                        MBBS Programme
                    </h1>
                    <p className="text-lg lg:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl mx-auto opacity-95">
                        Bachelor of Medicine and Bachelor of Surgery (MBBS) — A premium 4.5 Years Academic Study + 1 Year Mandatory Rotatory Internship.
                    </p>
                    <button 
                        onClick={() => document.getElementById("matrix")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold rounded-full shadow-lg shadow-indigo-600/30 transition-all text-xs uppercase tracking-wider"
                    >
                        View Programme Matrix
                    </button>
                </div>
            </section>

            {/* SEAT & ADMISSION ELIGIBILITY MATRIX */}
            <section id="matrix" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-3 block">Eligibility Matrix</span>
                        <h2 className="section-heading" style={{ fontFamily: serifFont }}>Intake &amp; Admission Guidelines</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] text-center shadow-sm">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Users size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2 font-montserrat">Annual Seat Intake</h3>
                            <span className="text-3xl font-black text-indigo-600">150 Seats</span>
                            <p className="text-slate-500 text-xs mt-3">Sanctioned by the National Medical Commission (NMC) under standard regulations.</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] text-center shadow-sm">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Award size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2 font-montserrat">Eligibility Exams</h3>
                            <span className="text-3xl font-black text-indigo-600">NEET-UG Qualified</span>
                            <p className="text-slate-500 text-xs mt-3">Candidates must be qualified under standard National Testing Agency scorecards.</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] text-center shadow-sm">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Calendar size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2 font-montserrat">Age Limit Criteria</h3>
                            <span className="text-3xl font-black text-indigo-600">17 Years Min</span>
                            <p className="text-slate-500 text-xs mt-3">Must have completed the age before Dec 31st of the active admission year.</p>
                        </div>
                    </div>

                    {/* INTERACTIVE PHASE SELECTOR */}
                    <div className="bg-slate-900 text-white rounded-[3rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                        
                        <div className="text-center mb-10">
                            <span className="text-indigo-400 font-bold text-xs uppercase tracking-widest block mb-2">Curriculum Mapping</span>
                            <h3 className="text-2xl lg:text-4xl font-bold font-montserrat" style={{ fontFamily: serifFont }}>MBBS Professional Syllabus</h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            {/* Tabs */}
                            <div className="lg:col-span-4 space-y-3">
                                {(Object.keys(curriculumPhases) as PhaseKey[]).map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => setSelectedPhase(key)}
                                        className={`w-full text-left p-4 rounded-2xl border transition-all text-xs font-bold font-montserrat ${
                                            selectedPhase === key 
                                            ? "bg-indigo-600 border-indigo-600 text-white translate-x-2" 
                                            : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
                                        }`}
                                    >
                                        {curriculumPhases[key].title}
                                    </button>
                                ))}
                            </div>

                            {/* Phase Content Display */}
                            <div className="lg:col-span-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 min-h-[250px] flex flex-col justify-between">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedPhase}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <h4 className="text-xl font-bold font-montserrat text-indigo-300">{activePhase.title}</h4>
                                            <span className="text-[10px] bg-slate-700 px-3 py-1 rounded-full text-slate-300 font-bold uppercase tracking-wider">Duration: {activePhase.duration}</span>
                                        </div>
                                        <p className="text-slate-300 text-xs leading-relaxed mb-6">{activePhase.description}</p>
                                        
                                        <div>
                                            <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Core Educational Syllabus</h5>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {activePhase.subjects.map((sub, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-100">
                                                        <div className="w-5 h-5 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 shrink-0">
                                                            <CheckCircle size={12} />
                                                        </div>
                                                        <span>{sub}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
