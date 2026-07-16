"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap, Award, ShieldCheck, CheckCircle, 
    ChevronRight, BookOpen, Clock, Users, Trophy, Sparkles
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

interface TopperData {
    rank: string;
    name: string;
    percentage: string;
    subject: string;
    batch: string;
}

const universityToppers: TopperData[] = [
    { rank: "1st Topper", name: "Ananya Mishra", percentage: "84.5% Marks", subject: "Anatomy &amp; Biochemistry Honours", batch: "MBBS Batch 2023" },
    { rank: "2nd Topper", name: "Rahul Kumar Sinha", percentage: "82.2% Marks", subject: "Physiology Honours", batch: "MBBS Batch 2023" },
    { rank: "3rd Topper", name: "Priya Raj", percentage: "81.0% Marks", subject: "Pathology &amp; Pharmacology Honours", batch: "MBBS Batch 2022" }
];

export default function ResultsPage() {
    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>
            
            {/* HERO */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/80 mix-blend-multiply opacity-90 z-10" />
                    <Image src="/sports_gymnasium_hero.png" alt="Results" fill className="object-cover" priority />
                </div>
                
                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto -mt-6">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-yellow-500/10 backdrop-blur-md rounded-full font-bold tracking-widest text-[10px] uppercase border border-yellow-500/30 text-yellow-300 mb-6">
                        <Trophy size={12} className="animate-bounce" /> Meritorious Academic Milestones
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-montserrat leading-tight" style={{ fontFamily: serifFont }}>
                        Academic Results
                    </h1>
                    <p className="text-lg lg:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl mx-auto opacity-95">
                        University examination pass percentages, gold medalists lists, batch toppers, and subject-wise honors achievements.
                    </p>
                    <button 
                        onClick={() => document.getElementById("wall-of-merit")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-3.5 bg-gradient-to-r from-yellow-600 to-amber-600 text-white font-bold rounded-full shadow-lg shadow-yellow-600/30 transition-all text-xs uppercase tracking-wider"
                    >
                        View Wall of Merit
                    </button>
                </div>
            </section>

            {/* WALL OF MERIT DIRECTORY */}
            <section id="wall-of-merit" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    
                    <div className="text-center mb-16">
                        <span className="text-yellow-600 font-bold text-sm uppercase tracking-widest mb-3 block">Wall of Merit</span>
                        <h2 className="section-heading" style={{ fontFamily: serifFont }}>University Exam Toppers</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            We take immense pride in celebrating our high-achieving medical scholars who topped the annual university clinical and practical board assessments.
                        </p>
                    </div>

                    {/* Toppers Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
                        {universityToppers.map((topper, idx) => (
                            <motion.div
                                key={topper.name}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -6 }}
                                className="bg-slate-900 text-white p-8 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between text-center"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 rounded-full blur-xl pointer-events-none" />
                                <div>
                                    <div className="w-14 h-14 bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                                        <Trophy size={24} />
                                    </div>
                                    
                                    <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest block mb-2">
                                        {topper.rank}
                                    </span>
                                    <h3 className="text-xl font-bold font-montserrat mb-1" style={{ fontFamily: serifFont }}>
                                        {topper.name}
                                    </h3>
                                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-4">
                                        {topper.batch}
                                    </p>
                                    
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6">
                                        <Sparkles size={10} className="animate-pulse" /> {topper.percentage}
                                    </div>
                                </div>
                                <div className="border-t border-slate-800 pt-6 text-[10px] text-slate-400 font-semibold">
                                    Awarded: {topper.subject}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats strip */}
                    <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-10 max-w-4xl mx-auto text-center">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                            <div className="py-4">
                                <h3 className="text-3xl font-extrabold text-slate-900 font-montserrat">94.8%</h3>
                                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Overall Pass Percentage</p>
                            </div>
                            <div className="py-4">
                                <h3 className="text-3xl font-extrabold text-slate-900 font-montserrat">25+</h3>
                                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Honors Citations Logged</p>
                            </div>
                            <div className="py-4">
                                <h3 className="text-3xl font-extrabold text-slate-900 font-montserrat">100%</h3>
                                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">NMC Compliant Internships</p>
                            </div>
                            <div className="py-4">
                                <h3 className="text-3xl font-extrabold text-slate-900 font-montserrat">3 Gold</h3>
                                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Medalists in Anatomy</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
