"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar, Clock, Users, ShieldCheck, Check, 
    ChevronRight, BookOpen, Layers, Target
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

type PhaseKey = "phase1" | "phase2" | "phase3";
type DayKey = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

interface SlotData {
    time: string;
    subject: string;
    type: "Lecture" | "Practical" | "Clinical Posting" | "Recess";
    location: string;
}

const schedules: Record<PhaseKey, Record<DayKey, SlotData[]>> = {
    phase1: {
        Mon: [
            { time: "09:00 AM - 10:00 AM", subject: "Anatomy Lecture", type: "Lecture", location: "Lecture Theatre 1" },
            { time: "10:00 AM - 12:00 PM", subject: "Anatomy Dissection", type: "Practical", location: "Dissection Hall" },
            { time: "12:00 PM - 01:00 PM", subject: "Physiology Lecture", type: "Lecture", location: "Lecture Theatre 1" },
            { time: "01:00 PM - 02:00 PM", subject: "Lunch Break", type: "Recess", location: "Central Mess" },
            { time: "02:00 PM - 04:00 PM", subject: "Biochemistry Lab (Batch A)", type: "Practical", location: "Biochemistry Lab" }
        ],
        Tue: [
            { time: "09:00 AM - 10:00 AM", subject: "Physiology Lecture", type: "Lecture", location: "Lecture Theatre 1" },
            { time: "10:00 AM - 12:00 PM", subject: "Physiology Hematology Lab", type: "Practical", location: "Physiology Lab" },
            { time: "12:00 PM - 01:00 PM", subject: "Biochemistry Lecture", type: "Lecture", location: "Lecture Theatre 1" },
            { time: "01:00 PM - 02:00 PM", subject: "Lunch Break", type: "Recess", location: "Central Mess" },
            { time: "02:00 PM - 04:00 PM", subject: "Anatomy Dissection Hall", type: "Practical", location: "Dissection Hall" }
        ],
        Wed: [
            { time: "09:00 AM - 10:00 AM", subject: "Anatomy Lecture", type: "Lecture", location: "Lecture Theatre 1" },
            { time: "10:00 AM - 12:00 PM", subject: "Anatomy Dissection Hall", type: "Practical", location: "Dissection Hall" },
            { time: "12:00 PM - 01:00 PM", subject: "Early Clinical Exposure (ECE)", type: "Clinical Posting", location: "Medicine OPD" },
            { time: "01:00 PM - 02:00 PM", subject: "Lunch Break", type: "Recess", location: "Central Mess" },
            { time: "02:00 PM - 04:00 PM", subject: "Physiology Lab (Batch B)", type: "Practical", location: "Physiology Lab" }
        ],
        Thu: [
            { time: "09:00 AM - 10:00 AM", subject: "Biochemistry Lecture", type: "Lecture", location: "Lecture Theatre 1" },
            { time: "10:00 AM - 12:00 PM", subject: "Biochemistry Lab (Batch B)", type: "Practical", location: "Biochemistry Lab" },
            { time: "12:00 PM - 01:00 PM", subject: "Physiology Lecture", type: "Lecture", location: "Lecture Theatre 1" },
            { time: "01:00 PM - 02:00 PM", subject: "Lunch Break", type: "Recess", location: "Central Mess" },
            { time: "02:00 PM - 04:00 PM", subject: "Anatomy Dissection", type: "Practical", location: "Dissection Hall" }
        ],
        Fri: [
            { time: "09:00 AM - 10:00 AM", subject: "Anatomy Lecture", type: "Lecture", location: "Lecture Theatre 1" },
            { time: "10:00 AM - 12:00 PM", subject: "Anatomy Histology Lab", type: "Practical", location: "Histology Lab" },
            { time: "12:00 PM - 01:00 PM", subject: "Biochemistry Lecture", type: "Lecture", location: "Lecture Theatre 1" },
            { time: "01:00 PM - 02:00 PM", subject: "Lunch Break", type: "Recess", location: "Central Mess" },
            { time: "02:00 PM - 04:00 PM", subject: "Physiology Amphitheatre", type: "Lecture", location: "Lecture Theatre 1" }
        ],
        Sat: [
            { time: "09:00 AM - 10:00 AM", subject: "Physiology Lecture", type: "Lecture", location: "Lecture Theatre 1" },
            { time: "10:00 AM - 12:00 PM", subject: "AETCOM Module 1.1", type: "Lecture", location: "Lecture Theatre 1" },
            { time: "12:00 PM - 01:00 PM", subject: "Weekly Assessment Test", type: "Lecture", location: "Exam Hall" },
            { time: "01:00 PM - 02:00 PM", subject: "Lunch Break", type: "Recess", location: "Central Mess" },
            { time: "02:00 PM - 04:00 PM", subject: "Sports &amp; Library Hours", type: "Recess", location: "Gym / Library" }
        ]
    },
    phase2: {
        Mon: [
            { time: "09:00 AM - 10:00 AM", subject: "Pathology Lecture", type: "Lecture", location: "Lecture Theatre 2" },
            { time: "10:00 AM - 01:00 PM", subject: "Clinical Bedside Postings", type: "Clinical Posting", location: "Surgical Wards" },
            { time: "01:00 PM - 02:00 PM", subject: "Lunch Break", type: "Recess", location: "Central Mess" },
            { time: "02:00 PM - 04:00 PM", subject: "Pharmacology Lab (Batch A)", type: "Practical", location: "Pharmacology Lab" }
        ],
        Tue: [
            { time: "09:00 AM - 10:00 AM", subject: "Pharmacology Lecture", type: "Lecture", location: "Lecture Theatre 2" },
            { time: "10:00 AM - 01:00 PM", subject: "Clinical Bedside Postings", type: "Clinical Posting", location: "Pediatric Wards" },
            { time: "01:00 PM - 02:00 PM", subject: "Lunch Break", type: "Recess", location: "Central Mess" },
            { time: "02:00 PM - 04:00 PM", subject: "Pathology Museum Work", type: "Practical", location: "Pathology Museum" }
        ],
        Wed: [
            { time: "09:00 AM - 10:00 AM", subject: "Microbiology Lecture", type: "Lecture", location: "Lecture Theatre 2" },
            { time: "10:00 AM - 01:00 PM", subject: "Clinical Bedside Postings", type: "Clinical Posting", location: "OBGYN Wards" },
            { time: "01:00 PM - 02:00 PM", subject: "Lunch Break", type: "Recess", location: "Central Mess" },
            { time: "02:00 PM - 04:00 PM", subject: "Microbiology Culture Lab", type: "Practical", location: "Microbiology Lab" }
        ],
        Thu: [
            { time: "09:00 AM - 10:00 AM", subject: "Pathology Lecture", type: "Lecture", location: "Lecture Theatre 2" },
            { time: "10:00 AM - 01:00 PM", subject: "Clinical Bedside Postings", type: "Clinical Posting", location: "Orthopaedic Wards" },
            { time: "01:00 PM - 02:00 PM", subject: "Lunch Break", type: "Recess", location: "Central Mess" },
            { time: "02:00 PM - 04:00 PM", subject: "Pharmacology Prescription Writing", type: "Practical", location: "Pharmacology Lab" }
        ],
        Fri: [
            { time: "09:00 AM - 10:00 AM", subject: "Pharmacology Lecture", type: "Lecture", location: "Lecture Theatre 2" },
            { time: "10:00 AM - 01:00 PM", subject: "Clinical Bedside Postings", type: "Clinical Posting", location: "Psychiatry Wards" },
            { time: "01:00 PM - 02:00 PM", subject: "Lunch Break", type: "Recess", location: "Central Mess" },
            { time: "02:00 PM - 04:00 PM", subject: "Pathology Practical Bench", type: "Practical", location: "Pathology Lab" }
        ],
        Sat: [
            { time: "09:00 AM - 10:00 AM", subject: "Microbiology Lecture", type: "Lecture", location: "Lecture Theatre 2" },
            { time: "10:00 AM - 12:00 PM", subject: "AETCOM Module 2.1", type: "Lecture", location: "Lecture Theatre 2" },
            { time: "12:00 PM - 01:00 PM", subject: "Weekly Assessment Test", type: "Lecture", location: "Exam Hall" },
            { time: "01:00 PM - 02:00 PM", subject: "Lunch Break", type: "Recess", location: "Central Mess" },
            { time: "02:00 PM - 04:00 PM", subject: "Community Outpost Visits", type: "Clinical Posting", location: "RHTC Outreach" }
        ]
    },
    phase3: {
        Mon: [
            { time: "09:00 AM - 10:00 AM", subject: "General Medicine", type: "Lecture", location: "Lecture Theatre 3" },
            { time: "10:00 AM - 01:00 PM", subject: "Surgical OT Posting", type: "Clinical Posting", location: "Major OT Complex" },
            { time: "01:00 PM - 02:00 PM", subject: "Lunch Break", type: "Recess", location: "Central Mess" },
            { time: "02:00 PM - 04:00 PM", subject: "Case Seminar Presentation", type: "Lecture", location: "Lecture Theatre 3" }
        ],
        Tue: [
            { time: "09:00 AM - 10:00 AM", subject: "General Surgery", type: "Lecture", location: "Lecture Theatre 3" },
            { time: "10:00 AM - 01:00 PM", subject: "Medical ICU Posting", type: "Clinical Posting", location: "MICU / CCU" },
            { time: "01:00 PM - 02:00 PM", subject: "Lunch Break", type: "Recess", location: "Central Mess" },
            { time: "02:00 PM - 04:00 PM", subject: "Pediatrics Clinic Practice", type: "Clinical Posting", location: "NICU Wards" }
        ],
        Wed: [
            { time: "09:00 AM - 10:00 AM", subject: "Obstetrics &amp; Gynecology", type: "Lecture", location: "Lecture Theatre 3" },
            { time: "10:00 AM - 01:00 PM", subject: "Maternity Suite Posting", type: "Clinical Posting", location: "Labor Room Complex" },
            { time: "01:00 PM - 02:00 PM", subject: "Lunch Break", type: "Recess", location: "Central Mess" },
            { time: "02:00 PM - 04:00 PM", subject: "Forensic Autopsy Watch", type: "Practical", location: "Mortuary Complex" }
        ],
        Thu: [
            { time: "09:00 AM - 10:00 AM", subject: "General Medicine", type: "Lecture", location: "Lecture Theatre 3" },
            { time: "10:00 AM - 01:00 PM", subject: "Orthopaedic Ward rounds", type: "Clinical Posting", location: "Ortho Wards" },
            { time: "01:00 PM - 02:00 PM", subject: "Lunch Break", type: "Recess", location: "Central Mess" },
            { time: "02:00 PM - 04:00 PM", subject: "Radiology PACS Doppler", type: "Practical", location: "Radiology Center" }
        ],
        Fri: [
            { time: "09:00 AM - 10:00 AM", subject: "General Surgery", type: "Lecture", location: "Lecture Theatre 3" },
            { time: "10:00 AM - 01:00 PM", subject: "Outpatient Duty (OPD)", type: "Clinical Posting", location: "General Surgery OPD" },
            { time: "01:00 PM - 02:00 PM", subject: "Lunch Break", type: "Recess", location: "Central Mess" },
            { time: "02:00 PM - 04:00 PM", subject: "ENT / Eye Surgical Clinics", type: "Clinical Posting", location: "ENT OPD" }
        ],
        Sat: [
            { time: "09:00 AM - 10:00 AM", subject: "Paediatrics", type: "Lecture", location: "Lecture Theatre 3" },
            { time: "10:00 AM - 12:00 PM", subject: "AETCOM Ethics Case", type: "Lecture", location: "Lecture Theatre 3" },
            { time: "12:00 PM - 01:00 PM", subject: "Weekly Assessment Test", type: "Lecture", location: "Exam Hall" },
            { time: "01:00 PM - 02:00 PM", subject: "Lunch Break", type: "Recess", location: "Central Mess" },
            { time: "02:00 PM - 04:00 PM", subject: "Skill-Book Audit &amp; Revision", type: "Practical", location: "Simulation Lab" }
        ]
    }
};

export default function TimeTablePage() {
    const [selectedPhase, setSelectedPhase] = useState<PhaseKey>("phase1");
    const [selectedDay, setSelectedDay] = useState<DayKey>("Mon");

    const activeSlots = schedules[selectedPhase][selectedDay];

    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>
            
            {/* HERO */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/80 mix-blend-multiply opacity-90 z-10" />
                    <Image src="/pathology_hero.png" alt="Time table" fill className="object-cover" priority />
                </div>
                
                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto -mt-6">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-blue-500/10 backdrop-blur-md rounded-full font-bold tracking-widest text-[10px] uppercase border border-blue-500/30 text-blue-300 mb-6">
                        <Calendar size={12} /> Scheduled Academic Operations
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-montserrat leading-tight" style={{ fontFamily: serifFont }}>
                        Academic Time Table
                    </h1>
                    <p className="text-lg lg:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl mx-auto opacity-95">
                        Interactive daily lectures, skills laboratory practical schedules, and hospital bedside postings arranged by student phases.
                    </p>
                    <button 
                        onClick={() => document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full shadow-lg shadow-blue-600/30 transition-all text-xs uppercase tracking-wider"
                    >
                        Open Daily Schedule
                    </button>
                </div>
            </section>

            {/* INTERACTIVE DAILY SCHEDULE BOARD */}
            <section id="schedule" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    
                    {/* Phase Tabs */}
                    <div className="flex justify-center gap-4 mb-8">
                        {[
                            { label: "Phase I (1st Year)", value: "phase1" },
                            { label: "Phase II (2nd Year)", value: "phase2" },
                            { label: "Phase III (3rd/4th Year)", value: "phase3" }
                        ].map((p) => (
                            <button
                                key={p.value}
                                onClick={() => setSelectedPhase(p.value as PhaseKey)}
                                className={`px-6 py-3 rounded-full text-xs font-bold transition-all border ${
                                    selectedPhase === p.value 
                                    ? "bg-slate-900 border-slate-900 text-white shadow-lg" 
                                    : "bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100"
                                }`}
                            >
                                {p.label}
                            </button>
                        ))}
                    </div>

                    {/* Day Selector */}
                    <div className="flex justify-center gap-2 mb-12">
                        {(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as DayKey[]).map((day) => (
                            <button
                                key={day}
                                onClick={() => setSelectedDay(day)}
                                className={`w-14 h-14 rounded-2xl text-xs font-bold transition-all border flex flex-col items-center justify-center ${
                                    selectedDay === day 
                                    ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-600/20" 
                                    : "bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100"
                                }`}
                            >
                                <span>{day}</span>
                            </button>
                        ))}
                    </div>

                    {/* Schedule Grid Details */}
                    <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-8 lg:p-12 shadow-sm max-w-4xl mx-auto relative overflow-hidden min-h-[450px]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
                        
                        <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-8">
                            <div>
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">Active Phase: {selectedPhase.toUpperCase()}</span>
                                <h3 className="text-2xl font-bold text-slate-900 font-montserrat">{selectedDay}day Schedule</h3>
                            </div>
                            <span className="text-[10px] bg-slate-100 text-slate-600 font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wide">
                                09:00 AM - 04:00 PM
                            </span>
                        </div>

                        <div className="space-y-4">
                            <AnimatePresence mode="popLayout">
                                {activeSlots.map((slot, i) => (
                                    <motion.div
                                        key={slot.time}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.2, delay: i * 0.05 }}
                                        className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:border-blue-200 transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                                                slot.type === "Lecture" ? "bg-blue-50 text-blue-600" :
                                                slot.type === "Practical" ? "bg-amber-50 text-amber-600" :
                                                slot.type === "Clinical Posting" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
                                            }`}>
                                                {slot.type === "Lecture" && <BookOpen size={18} />}
                                                {slot.type === "Practical" && <Layers size={18} />}
                                                {slot.type === "Clinical Posting" && <Target size={18} />}
                                                {slot.type === "Recess" && <Clock size={18} />}
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{slot.time}</h4>
                                                <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors font-montserrat">{slot.subject}</h3>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="text-[9px] bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider">{slot.location}</span>
                                            <span className={`text-[9px] px-3 py-1 rounded-full font-bold uppercase tracking-wider ${
                                                slot.type === "Lecture" ? "bg-blue-50 text-blue-700" :
                                                slot.type === "Practical" ? "bg-amber-50 text-amber-700" :
                                                slot.type === "Clinical Posting" ? "bg-emerald-50 text-emerald-700" : "bg-slate-200 text-slate-600"
                                            }`}>{slot.type}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
