"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar, ShieldCheck, CheckCircle, Target, Award, 
    ChevronRight, BookOpen, Clock, Users, X
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

interface HolidayData {
    date: string;
    day: string;
    occasion: string;
    type: "Gazetted" | "Academic Vacation" | "Restricted";
}

const holidaysList: HolidayData[] = [
    { date: "January 26", day: "Sunday", occasion: "Republic Day", type: "Gazetted" },
    { date: "March 14", day: "Friday", occasion: "Holi Festival", type: "Gazetted" },
    { date: "April 06", day: "Sunday", occasion: "Ram Navami", type: "Gazetted" },
    { date: "June 01 - June 15", day: "15 Days", occasion: "Summer Institutional Vacation", type: "Academic Vacation" },
    { date: "August 15", day: "Friday", occasion: "Independence Day", type: "Gazetted" },
    { date: "October 02", day: "Thursday", occasion: "Gandhi Jayanti", type: "Gazetted" },
    { date: "October 18 - October 22", day: "5 Days", occasion: "Durga Puja Holidays", type: "Academic Vacation" },
    { date: "November 05", day: "Wednesday", occasion: "Guru Nanak Jayanti", type: "Restricted" },
    { date: "December 25", day: "Thursday", occasion: "Christmas Day", type: "Gazetted" }
];

export default function HolidaysPage() {
    const [filterType, setFilterType] = useState<"All" | "Gazetted" | "Academic Vacation" | "Restricted">("All");

    const filteredHolidays = holidaysList.filter((hol) => {
        return filterType === "All" || hol.type === filterType;
    });

    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>
            
            {/* HERO */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/80 mix-blend-multiply opacity-90 z-10" />
                    <Image src="/cafeteria_mess_hero.png" alt="Holidays list" fill className="object-cover" priority />
                </div>
                
                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto -mt-6">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-amber-500/10 backdrop-blur-md rounded-full font-bold tracking-widest text-[10px] uppercase border border-amber-500/30 text-amber-300 mb-6">
                        <Calendar size={12} /> Institutional Holiday Calendars
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-montserrat leading-tight" style={{ fontFamily: serifFont }}>
                        List of Holidays
                    </h1>
                    <p className="text-lg lg:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl mx-auto opacity-95">
                        National gazetted festivals, restricted vacations, and summer/winter institutional academic recesses configured for Dhamma Superspeciality Hospital.
                    </p>
                    <button 
                        onClick={() => document.getElementById("holiday-deck")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-full shadow-lg shadow-amber-600/30 transition-all text-xs uppercase tracking-wider"
                    >
                        Open Holiday Deck
                    </button>
                </div>
            </section>

            {/* HOLIDAYS DECK DIRECTORY */}
            <section id="holiday-deck" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    
                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {(["All", "Gazetted", "Academic Vacation", "Restricted"] as const).map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilterType(type)}
                                className={`px-6 py-3 rounded-full text-xs font-bold transition-all border ${
                                    filterType === type 
                                    ? "bg-slate-900 border-slate-900 text-white shadow-lg" 
                                    : "bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100"
                                }`}
                            >
                                {type} Holidays
                            </button>
                        ))}
                    </div>

                    {/* Table / List Deck */}
                    <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-100 rounded-[3rem] p-8 lg:p-12 shadow-sm relative overflow-hidden min-h-[450px]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                        
                        <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-8">
                            <div>
                                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">Dhamma Superspeciality Hospital Academic Almanac</span>
                                <h3 className="text-2xl font-bold text-slate-900 font-montserrat">Holiday Schedule</h3>
                            </div>
                            <span className="text-xs bg-slate-100 text-slate-600 font-extrabold px-3 py-1.5 rounded-full">
                                {filteredHolidays.length} Holidays listed
                            </span>
                        </div>

                        <div className="space-y-4">
                            <AnimatePresence mode="popLayout">
                                {filteredHolidays.map((hol, idx) => (
                                    <motion.div
                                        key={hol.occasion}
                                        layout
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2, delay: idx * 0.04 }}
                                        className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group hover:border-amber-200 transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 text-slate-500 group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 group-hover:text-white transition-all shadow-sm">
                                                <Calendar size={18} />
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{hol.date} ({hol.day})</h4>
                                                <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors font-montserrat">{hol.occasion}</h3>
                                            </div>
                                        </div>
                                        <span className={`text-[9px] px-3 py-1 rounded-full font-bold uppercase tracking-wider ${
                                            hol.type === "Gazetted" ? "bg-emerald-50 text-emerald-700" :
                                            hol.type === "Academic Vacation" ? "bg-amber-50 text-amber-700" : "bg-blue-50 text-blue-700"
                                        }`}>{hol.type}</span>
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
