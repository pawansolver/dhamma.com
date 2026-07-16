"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap, ShieldCheck, CheckCircle, Target, Award, 
    Layers, Cpu, ChevronRight, Sparkles, BookOpen
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

type DomainKey = "ethics" | "early" | "skills" | "assessment";

interface DomainData {
    title: string;
    badge: string;
    description: string;
    specs: string[];
    goals: string;
}

const domains: Record<DomainKey, DomainData> = {
    ethics: {
        title: "Attitude, Ethics &amp; Communication (AETCOM)",
        badge: "Humanitarian Medical Training",
        description: "A mandatory NMC curriculum module structured to groom scholars in emotional intelligence, patient bedside empathy, legal medical ethics, and standard clinical communication models.",
        specs: ["Bedside communication drills", "Informed consent simulation cases", "Grave prognosis communication guides", "Professional code of medical ethics"],
        goals: "Standard Compassionate Physician"
    },
    early: {
        title: "Early Clinical Exposure (ECE)",
        badge: "Immediate Bedside Discovery",
        description: "Introduced during the first 12 months. ECE bridges core anatomical and biochemistry lectures with live cases in OPD corridors to help scholars learn practical significance.",
        specs: ["Early hospital walk-through cycles", "Case study clinical validations", "Correlating normal physiology with pathological diagnostics", "Basic patient diagnostics observation"],
        goals: "NMC Clinical Preparedness"
    },
    skills: {
        title: "Competency Skill Certification Book",
        badge: "Standardized Task Audits",
        description: "Under the CBME blueprint, medical students must perform specific skills under direct faculty supervision until they achieve zero-error standard certifications.",
        specs: ["Standard peripheral vein cannulations", "Sterile hand scrubbing &amp; gown procedures", "Basic cardiopulmonary resuscitations", "Arterial pressure and glucose measurements"],
        goals: "NMC Skill Log Book Certification"
    },
    assessment: {
        title: "Continuous Formative Evaluations",
        badge: "Performance Analytics Tracking",
        description: "Regular classroom tests, practical OSPE/OSCE checkposts, and clinical feedback loops to check student learning metrics before standard university finals.",
        specs: ["Objective Structured Practical Exam (OSPE)", "Objective Structured Clinical Exam (OSCE)", "Regular e-portfolio log audits", "Bi-monthly classroom checkposts"],
        goals: "NEXT Exam Readiness"
    }
};

export default function NmcCbmeCurriculumPage() {
    const [selectedDomain, setSelectedDomain] = useState<DomainKey>("ethics");
    const activeDomain = domains[selectedDomain];

    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>
            
            {/* HERO */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/80 mix-blend-multiply opacity-90 z-10" />
                    <Image src="/pathology_overview.png" alt="NMC CBME" fill className="object-cover" priority />
                </div>
                
                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto -mt-6">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-emerald-500/10 backdrop-blur-md rounded-full font-bold tracking-widest text-[10px] uppercase border border-emerald-500/30 text-emerald-300 mb-6">
                        <ShieldCheck size={12} /> NMC Regulatory Guidelines
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-montserrat leading-tight" style={{ fontFamily: serifFont }}>
                        NMC CBME Curriculum
                    </h1>
                    <p className="text-lg lg:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl mx-auto opacity-95">
                        Competency-Based Medical Education (CBME) — Fostering patient-centric and outcome-based professional learning grids.
                    </p>
                    <button 
                        onClick={() => document.getElementById("competencies")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-full shadow-lg shadow-emerald-600/30 transition-all text-xs uppercase tracking-wider"
                    >
                        Explore Curriculum Modules
                    </button>
                </div>
            </section>

            {/* INTERACTIVE COMPETENCIES TIMELINE */}
            <section id="competencies" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3 block">CBME Modules</span>
                        <h2 className="section-heading" style={{ fontFamily: serifFont }}>Curriculum Domains &amp; Logbooks</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            Click on any of the regulatory domains below to explore competency criteria and mandatory skill-book lists.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Selector Tabs */}
                        <div className="lg:col-span-4 space-y-4">
                            {(Object.keys(domains) as DomainKey[]).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedDomain(key)}
                                    className={`w-full text-left p-6 rounded-[2rem] border transition-all duration-300 flex items-center justify-between group ${
                                        selectedDomain === key 
                                        ? "bg-slate-900 border-slate-900 text-white shadow-xl translate-x-2" 
                                        : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100 hover:border-slate-200"
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                            selectedDomain === key ? "bg-emerald-500 text-white" : "bg-white text-slate-500 group-hover:text-emerald-600"
                                        } transition-colors shadow-sm shrink-0`}>
                                            {key === "ethics" && <BookOpen size={20} />}
                                            {key === "early" && <Layers size={20} />}
                                            {key === "skills" && <Cpu size={20} />}
                                            {key === "assessment" && <Award size={20} />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xs font-montserrat truncate max-w-[180px]">{key === "ethics" ? "AETCOM Ethics" : key === "early" ? "Early Clinical Exposure" : key === "skills" ? "Skill Logbooks" : "Formative Assessment"}</h4>
                                            <p className={`text-[9px] ${selectedDomain === key ? "text-slate-400" : "text-slate-500"}`}>{domains[key].badge}</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className={`transition-transform ${selectedDomain === key ? "rotate-90 text-emerald-500" : "text-slate-400 group-hover:translate-x-1"}`} />
                                </button>
                            ))}
                        </div>

                        {/* Interactive Showcase */}
                        <div className="lg:col-span-8 bg-slate-50 border border-slate-100 rounded-[3rem] p-8 lg:p-12 shadow-sm relative overflow-hidden min-h-[500px]">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                            
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedDomain}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.4 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                                >
                                    <div>
                                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block mb-2">{activeDomain.badge}</span>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight font-montserrat" style={{ fontFamily: serifFont }} dangerouslySetInnerHTML={{ __html: activeDomain.title }} />
                                        <p className="text-slate-600 text-xs leading-relaxed mb-6">{activeDomain.description}</p>
                                        
                                        <div className="space-y-2 mb-6">
                                            {activeDomain.specs.map((spec, i) => (
                                                <div key={i} className="flex items-center gap-2 text-[11px] font-semibold text-slate-800">
                                                    <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                                                        <CheckCircle size={12} />
                                                    </div>
                                                    <span dangerouslySetInnerHTML={{ __html: spec }} />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="border-t border-slate-200 pt-6">
                                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">NMC Target Goal</span>
                                            <span className="text-sm font-extrabold text-slate-900">{activeDomain.goals}</span>
                                        </div>
                                    </div>

                                    <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-200">
                                        <Image src="/carousel-3.png" alt={activeDomain.title} fill className="object-cover" />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
