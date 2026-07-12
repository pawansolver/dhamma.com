"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap, Users, ShieldCheck, CheckCircle, 
    ChevronRight, BookOpen, AlertTriangle, FileText
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

interface StudentStats {
    batch: string;
    totalSeats: string;
    boys: string;
    girls: string;
    advisor: string;
}

const batchesList: StudentStats[] = [
    { batch: "MBBS Batch 2024", totalSeats: "150 Seats", boys: "78 Students", girls: "72 Students", advisor: "Dr. Rajiv Nayan (HOD, General Medicine)" },
    { batch: "MBBS Batch 2023", totalSeats: "150 Seats", boys: "81 Students", girls: "69 Students", advisor: "Dr. S. N. Prasad (HOD, Orthopaedics)" },
    { batch: "MBBS Batch 2022", totalSeats: "150 Seats", boys: "75 Students", girls: "75 Students", advisor: "Dr. Vinay Kumar (HOD, Pathology)" }
];

export default function StudentDetailsPage() {
    const [selectedBatch, setSelectedBatch] = useState(0);
    const activeBatch = batchesList[selectedBatch];

    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>
            
            {/* HERO */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/80 mix-blend-multiply opacity-90 z-10" />
                    <Image src="/residential_block_hero.png" alt="Student details" fill className="object-cover" priority />
                </div>
                
                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto -mt-6">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-blue-500/10 backdrop-blur-md rounded-full font-bold tracking-widest text-[10px] uppercase border border-blue-500/30 text-blue-300 mb-6">
                        <Users size={12} /> Student Welfare &amp; Batches
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-montserrat leading-tight" style={{ fontFamily: serifFont }}>
                        Student Details
                    </h1>
                    <p className="text-lg lg:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl mx-auto opacity-95">
                        Student batch ratios, gender-harassment cell guidelines, anti-ragging undertakings, and chief advisor list at Dhamma Superspeciality Hospital.
                    </p>
                    <button 
                        onClick={() => document.getElementById("batches")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full shadow-lg shadow-blue-600/30 transition-all text-xs uppercase tracking-wider"
                    >
                        View Student Batches
                    </button>
                </div>
            </section>

            {/* BATCH DIRECTORY */}
            <section id="batches" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3 block">Student Batches</span>
                        <h2 className="section-heading" style={{ fontFamily: serifFont }}>Institutional Admissions Directory</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        
                        {/* Selector Tabs */}
                        <div className="lg:col-span-4 space-y-4">
                            {batchesList.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedBatch(idx)}
                                    className={`w-full text-left p-6 rounded-[2rem] border transition-all duration-300 flex items-center justify-between group ${
                                        selectedBatch === idx 
                                        ? "bg-slate-900 border-slate-900 text-white shadow-xl translate-x-2" 
                                        : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100 hover:border-slate-200"
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                            selectedBatch === idx ? "bg-blue-500 text-white" : "bg-white text-slate-500 group-hover:text-blue-600"
                                        } transition-colors shadow-sm shrink-0`}>
                                            <GraduationCap size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm font-montserrat">{item.batch}</h4>
                                            <p className={`text-[10px] ${selectedBatch === idx ? "text-slate-400" : "text-slate-500"}`}>{item.totalSeats}</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className={`transition-transform ${selectedBatch === idx ? "rotate-90 text-blue-500" : "text-slate-400 group-hover:translate-x-1"}`} />
                                </button>
                            ))}
                        </div>

                        {/* Interactive Showcase */}
                        <div className="lg:col-span-8 bg-slate-50 border border-slate-100 rounded-[3rem] p-8 lg:p-12 shadow-sm relative overflow-hidden min-h-[400px]">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
                            
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedBatch}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-2">Student Demography</span>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4 leading-tight font-montserrat" style={{ fontFamily: serifFont }}>
                                        {activeBatch.batch} Enrollment
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                        <div className="bg-white p-6 rounded-2xl border border-slate-100">
                                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">MALE SCHOLARS</span>
                                            <span className="text-xl font-extrabold text-slate-900">{activeBatch.boys}</span>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl border border-slate-100">
                                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">FEMALE SCHOLARS</span>
                                            <span className="text-xl font-extrabold text-slate-900">{activeBatch.girls}</span>
                                        </div>
                                    </div>

                                    <div className="border-t border-slate-200 pt-6">
                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Chief Academic Advisor</span>
                                        <span className="text-sm font-extrabold text-slate-900">{activeBatch.advisor}</span>
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
