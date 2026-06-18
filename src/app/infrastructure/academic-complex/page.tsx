"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Building2, Monitor, Microscope, Database, Layers, Check,
    ChevronRight, ArrowRight, ShieldCheck, GraduationCap,
    BookOpen, Sparkles, Cpu, Award, X
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

type ZoneKey = "lecture" | "simulation" | "library" | "museum";

interface ZoneData {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
    specs: string[];
    capacity: string;
    tech: string;
}

const zones: Record<ZoneKey, ZoneData> = {
    lecture: {
        title: "Smart Lecture Galleries",
        subtitle: "Centralized AC Multi-Tier Auditoriums",
        desc: "Acoustically treated lecture theatres constructed under NMC guidelines. Every theatre features dual HD projection, digital smart-boards, centralized climate control, and ergonomic multi-tier seating.",
        image: "/carousel-1.png",
        specs: ["Dual high-lumens projection systems", "Ergonomic multi-tier galleries", "Acoustic wood padding", "Centralized Daikin VRV AC loops"],
        capacity: "150+ Students per Gallery",
        tech: "HD Audio-Visual Smart Boards"
    },
    simulation: {
        title: "Skills & Simulation Lab",
        subtitle: "Hands-on High-Fidelity Medical Simulators",
        desc: "Equipped with advanced mechanical trainers, ACLS resuscitator mannequins, and virtual laparoscopy modules where students practice intubations, suturing, and clinical life-support under expert surveillance.",
        image: "/carousel-3.png",
        specs: ["High-fidelity ACLS simulation mannequins", "Interactive laparoscopic training boxes", "Arterial cannulation arm modules", "Mock emergency triage setup"],
        capacity: "50 scholars per batch",
        tech: "Interactive Virtual Anatomical Dissect"
    },
    library: {
        title: "Central Digital Library",
        subtitle: "High-Speed Medline & e-Journal Databases",
        desc: "Our massive computerized reading library features over 10,000 reference textbooks and an advanced e-learning terminal node with direct fiber connections to PubMed, WHO library databases, and top-tier medical journals.",
        image: "/carousel-2.png",
        specs: ["10,000+ Physical Medical Volumes", "24/7 high-speed fiber internet loops", "Soundproof individual reading cubes", "Direct PubMed & Medline network nodes"],
        capacity: "300 simultaneous readers",
        tech: "PACS & digital repository database"
    },
    museum: {
        title: "Anatomy & Pathology Museum",
        subtitle: "Exhaustive biological specimen banks",
        desc: "A highly informative biological specimen gallery containing thousands of wet specimens, detailed organ models, human skeletal structures, and forensic weapon archives for visual and spatial memory modeling.",
        image: "/carousel-1.png",
        specs: ["1,500+ mounted biological wet specimens", "Complete human skeletal bone suites", "Embryological developmental models", "Forensic ballistics and toxic archives"],
        capacity: "80 students simultaneously",
        tech: "Digital QR-code specimen indexing"
    }
};

export default function AcademicComplexPage() {
    const [selectedZone, setSelectedZone] = useState<ZoneKey>("lecture");
    const [simulatorActive, setSimulatorActive] = useState(false);
    const [simStep, setSimStep] = useState(0);

    const activeZone = zones[selectedZone];

    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>

            {/* HERO */}
            <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/80 mix-blend-multiply opacity-90 z-10" />
                    <Image src="/academic_complex_hero.png" alt="Academic complex" fill className="object-cover" priority />
                </div>

                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto -mt-6">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-amber-500/10 backdrop-blur-md rounded-full font-bold tracking-widest text-[10px] uppercase border border-amber-500/30 text-amber-300 mb-6">
                        <GraduationCap size={12} /> Modern Educational Infrastructure
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-montserrat leading-tight" style={{ fontFamily: serifFont }}>
                        Academic Complex
                    </h1>
                    <p className="text-lg lg:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl mx-auto opacity-95">
                        Centralized air-conditioned lecture theatres, smart classrooms, virtual simulation suites, and high-tech biological labs configured to standard NMC mandates.
                    </p>
                    <button
                        onClick={() => document.getElementById("blueprint")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold rounded-full shadow-lg shadow-amber-600/30 transition-all text-xs uppercase tracking-wider"
                    >
                        Explore Blueprint
                    </button>
                </div>
            </section>

            {/* INTERACTIVE BLUEPRINT SELECTOR */}
            <section id="blueprint" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-bold text-sm uppercase tracking-widest mb-3 block">Interactive Map</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Explore Academic Zones</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            Click on any of the academic departments or core facilities below to navigate its specific equipment lists and metrics.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Selector Tabs (4 Columns on Desktop) */}
                        <div className="lg:col-span-4 space-y-4">
                            {(Object.keys(zones) as ZoneKey[]).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedZone(key)}
                                    className={`w-full text-left p-6 rounded-[2rem] border transition-all duration-300 flex items-center justify-between group ${selectedZone === key
                                            ? "bg-slate-900 border-slate-900 text-white shadow-xl translate-x-2"
                                            : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100 hover:border-slate-200"
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${selectedZone === key ? "bg-amber-500 text-white" : "bg-white text-slate-500 group-hover:text-amber-600"
                                            } transition-colors shadow-sm shrink-0`}>
                                            {key === "lecture" && <Layers size={20} />}
                                            {key === "simulation" && <Cpu size={20} />}
                                            {key === "library" && <Database size={20} />}
                                            {key === "museum" && <Microscope size={20} />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm font-montserrat">{zones[key].title}</h4>
                                            <p className={`text-[10px] ${selectedZone === key ? "text-slate-400" : "text-slate-500"}`}>{zones[key].subtitle}</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className={`transition-transform ${selectedZone === key ? "rotate-90 text-amber-500" : "text-slate-400 group-hover:translate-x-1"}`} />
                                </button>
                            ))}
                        </div>

                        {/* Interactive Zone Showcase Panel (8 Columns on Desktop) */}
                        <div className="lg:col-span-8 bg-slate-50 border border-slate-100 rounded-[3rem] p-8 lg:p-12 shadow-sm relative overflow-hidden min-h-[500px]">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedZone}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.4 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                                >
                                    <div>
                                        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block mb-2">{activeZone.subtitle}</span>
                                        <h3 className="text-3xl font-bold text-slate-900 mb-4 leading-tight font-montserrat" style={{ fontFamily: serifFont }}>
                                            {activeZone.title}
                                        </h3>
                                        <p className="text-slate-600 text-xs leading-relaxed mb-6">{activeZone.desc}</p>

                                        <div className="space-y-2 mb-6">
                                            {activeZone.specs.map((spec, i) => (
                                                <div key={i} className="flex items-center gap-2 text-[11px] font-semibold text-slate-800">
                                                    <div className="w-5 h-5 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                                                        <Check size={12} />
                                                    </div>
                                                    <span>{spec}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="border-t border-slate-200 pt-6 grid grid-cols-2 gap-4">
                                            <div>
                                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Max Capacity</span>
                                                <span className="text-sm font-extrabold text-slate-900">{activeZone.capacity}</span>
                                            </div>
                                            <div>
                                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Smart Technology</span>
                                                <span className="text-sm font-extrabold text-slate-900">{activeZone.tech}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-200">
                                        <Image src={activeZone.image} alt={activeZone.title} fill className="object-cover" />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </section>

            {/* HIGH-TECH SIMULATOR CONSOLE WIDGET */}
            <section className="py-24 bg-slate-950 text-white relative">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-3 block">Skills Training Lab</span>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight font-montserrat" style={{ fontFamily: serifFont }}>
                                Virtual Clinical Skills Simulator
                            </h2>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                In line with standard NMC CBME practices, our simulated console helps students learn life support procedures. Click below to experience a mock medical simulation step.
                            </p>

                            {!simulatorActive ? (
                                <button
                                    onClick={() => { setSimulatorActive(true); setSimStep(0); }}
                                    className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-black rounded-full text-xs uppercase tracking-wider transition-colors"
                                >
                                    Activate Skills Simulator
                                </button>
                            ) : (
                                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 relative text-slate-100">
                                    <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 animate-pulse">ACLS Simulation Engine Active</span>
                                        <button onClick={() => setSimulatorActive(false)} className="text-slate-500 hover:text-slate-300"><X size={14} /></button>
                                    </div>

                                    {simStep === 0 && (
                                        <div>
                                            <h4 className="text-xs font-bold mb-2">Step 1: Patient Unresponsive. Select next action:</h4>
                                            <div className="space-y-2">
                                                <button onClick={() => setSimStep(1)} className="w-full text-left p-3 bg-slate-800 hover:bg-slate-700 text-xs rounded-xl transition-colors border border-slate-700 text-slate-100">A. Check carotid pulse &amp; start chest compressions</button>
                                                <button onClick={() => alert("Incorrect! Airway management without pulse audit is high risk.")} className="w-full text-left p-3 bg-slate-800 hover:bg-slate-700 text-xs rounded-xl transition-colors border border-slate-700 text-slate-100">B. Immediately proceed to tracheal intubation</button>
                                            </div>
                                        </div>
                                    )}

                                    {simStep === 1 && (
                                        <div>
                                            <h4 className="text-xs font-bold mb-2 text-emerald-400">Step 1 Successful! Carotid pulse checked. No pulse.</h4>
                                            <p className="text-xs text-slate-400 mb-4">You have initiated chest compressions. What is the compression ratio?</p>
                                            <div className="space-y-2">
                                                <button onClick={() => setSimStep(2)} className="w-full text-left p-3 bg-slate-800 hover:bg-slate-700 text-xs rounded-xl transition-colors border border-slate-700 text-slate-100">A. 30 Compressions to 2 Breaths (30:2)</button>
                                                <button onClick={() => alert("Incorrect! Standard neonatal or adult ratios should be strictly maintained.")} className="w-full text-left p-3 bg-slate-800 hover:bg-slate-700 text-xs rounded-xl transition-colors border border-slate-700 text-slate-100">B. 15 Compressions to 2 Breaths (15:2)</button>
                                            </div>
                                        </div>
                                    )}

                                    {simStep === 2 && (
                                        <div className="text-center py-4">
                                            <Award size={36} className="text-emerald-400 mx-auto mb-2 animate-bounce" />
                                            <h4 className="text-xs font-bold text-emerald-400 mb-1">CPR Simulation Completed Successfully!</h4>
                                            <p className="text-[10px] text-slate-400 mb-4">Patient stabilized. Skills certifications logged on BHRI node.</p>
                                            <button onClick={() => setSimStep(0)} className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-[10px] font-bold rounded-lg transition-colors border border-slate-700 text-slate-100">Run Again</button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="relative w-80 h-80 flex items-center justify-center mx-auto">
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-500/20" />
                            <div className="absolute inset-8 rounded-full border border-white/5 bg-white/5 backdrop-blur-3xl flex flex-col items-center justify-center p-6 text-center shadow-xl">
                                <Cpu size={60} className="text-amber-500 mb-2" />
                                <span className="text-amber-400 font-black text-xs uppercase tracking-widest leading-tight">NMC Certified</span>
                                <span className="text-[9px] text-slate-400 mt-1 uppercase font-semibold">Skills Lab Standards</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
