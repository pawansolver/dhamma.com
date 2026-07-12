"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Building2, ShieldCheck, Activity, Users, Zap, Check, 
    ChevronRight, Clock, Star, Phone, Home, Heart
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

type TimeKey = "morning" | "afternoon" | "evening" | "night";

interface TimelineData {
    time: string;
    title: string;
    desc: string;
    image: string;
    icon: any;
    color: string;
}

const dailyTimeline: Record<TimeKey, TimelineData> = {
    morning: {
        time: "07:00 AM",
        title: "Morning Garden Stroll",
        desc: "Scholars start their day with refreshing jogs and physical fitness sessions around our beautifully landscaped, lush green central lawns and secure quarters.",
        image: "/carousel-2.png",
        icon: Home,
        color: "text-amber-500"
    },
    afternoon: {
        time: "02:30 PM",
        title: "Focused Study Chambers",
        desc: "Double-sharing student rooms are ventilated, featuring dedicated study tables, private high-capacity wardrobes, bookshelves, and continuous natural daylight.",
        image: "/carousel-1.png",
        icon: Activity,
        color: "text-teal-500"
    },
    evening: {
        time: "06:00 PM",
        title: "Recreation & Common Rooms",
        desc: "Students gather in modern residential lounges equipped with high-definition cable televisions, board games, carrom boards, and high-speed Wi-Fi blocks.",
        image: "/carousel-3.png",
        icon: Users,
        color: "text-emerald-500"
    },
    night: {
        time: "09:30 PM",
        title: "Rigid Security & Silence Wards",
        desc: "Secure, access-controlled security check portals active all night. On-site professional security squads and resident wardens preserve a silent atmosphere.",
        image: "/carousel-2.png",
        icon: ShieldCheck,
        color: "text-indigo-500"
    }
};

type RoomKey = "student-double" | "intern-single" | "faculty-flat";

interface RoomData {
    name: string;
    size: string;
    cooling: string;
    water: string;
    facilities: string[];
}

const rooms: Record<RoomKey, RoomData> = {
    "student-double": {
        name: "MBBS Student Double Sharing",
        size: "180 Sq.Ft.",
        cooling: "Central Ventilation (AC Optional)",
        water: "24/7 Solar Hot Water loop",
        facilities: ["Two premium study decks & chairs", "Bespoke separate steel closets", "Common ventilated washroom blocks", "High-speed Wi-Fi router loops"]
    },
    "intern-single": {
        name: "Medical Intern Private Quarters",
        size: "120 Sq.Ft.",
        cooling: "Fitted window cooling unit",
        water: "24/7 solar hot water loop",
        facilities: ["Private attached bathroom", "Single executive study suite", "Dedicated high-capacity wardrobe", "Direct ward telephone loop"]
    },
    "faculty-flat": {
        name: "Resident Doctor & Faculty Quarters",
        size: "2BHK Fully Furnished Flat",
        cooling: "Split AC units in all rooms",
        water: "Dual geyser + RO drinking water loops",
        facilities: ["Modular kitchen cabinets", "Large master living lounge", "Balconies overlooking lawns", "Private parking slots"]
    }
};

export default function ResidentialBlockPage() {
    const [activeTime, setActiveTime] = useState<TimeKey>("morning");
    const [selectedRoom, setSelectedRoom] = useState<RoomKey>("student-double");

    const activeTimeline = dailyTimeline[activeTime];
    const activeRoom = rooms[selectedRoom];

    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>
            
            {/* HERO */}
            <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-950 via-[#0a2321] to-slate-950 mix-blend-multiply opacity-90 z-10" />
                    <Image src="/residential_block_hero.png" alt="Residential Complex" fill className="object-cover" priority />
                </div>
                
                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-10">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-teal-500/10 backdrop-blur-md rounded-full font-bold tracking-widest text-[10px] uppercase border border-teal-500/30 text-teal-300 mb-6">
                        <Home size={12} /> Secure Campus Life
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-montserrat leading-tight" style={{ fontFamily: serifFont }}>
                        Residential Block
                    </h1>
                    <p className="text-sm sm:text-lg lg:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl mx-auto opacity-95">
                        A peaceful, scenic, and access-controlled home for student doctors, interns, senior residents, and nursing staff.
                    </p>
                    <button 
                        onClick={() => document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold rounded-full shadow-lg shadow-teal-600/30 transition-all text-[11px] sm:text-xs uppercase tracking-wider"
                    >
                        View Lifestyle Timeline
                    </button>
                </div>
            </section>

            {/* INTERACTIVE TIMELINE: A DAY IN THE LIFE */}
            <section id="timeline" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-3 block">Daily Routine</span>
                        <h2 className="section-heading" style={{ fontFamily: serifFont }}>A Day in the Hostels</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            Click through the different hours of the day to visualize the premium daily routine of students within our secure residential quarters.
                        </p>
                    </div>

                    {/* Timeline Navigation Strip */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {(Object.keys(dailyTimeline) as TimeKey[]).map((key) => {
                            const item = dailyTimeline[key];
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveTime(key)}
                                    className={`px-6 py-3 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                                        activeTime === key 
                                        ? "bg-teal-600 text-white shadow-lg" 
                                        : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100"
                                    }`}
                                >
                                    <Clock size={14} />
                                    <span>{item.time}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Timeline Card Show */}
                    <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-8 lg:p-12 shadow-sm max-w-4xl mx-auto relative overflow-hidden min-h-[400px]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
                        
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTime}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                            >
                                <div>
                                    <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">{dailyTimeline[activeTime].time} Routine</span>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4 leading-tight font-montserrat" style={{ fontFamily: serifFont }}>
                                        {dailyTimeline[activeTime].title}
                                    </h3>
                                    <p className="text-slate-600 text-xs leading-relaxed mb-6">
                                        {dailyTimeline[activeTime].desc}
                                    </p>
                                    
                                    <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 bg-teal-50 px-4 py-2 rounded-xl">
                                        <ShieldCheck size={14} /> Fostering Student Discipline &amp; Safety
                                    </div>
                                </div>

                                <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-200">
                                    <Image src={dailyTimeline[activeTime].image} alt={dailyTimeline[activeTime].title} fill className="object-cover" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* ROOM SPECIFICATION INTERACTIVE SPEC SHEET */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-3 block">Room Specs</span>
                        <h2 className="section-heading" style={{ fontFamily: serifFont }}>Hostel Layout Options</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            Compare standard dimensions, hot water utilities, and facilities built within our hostel and resident complexes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {(Object.keys(rooms) as RoomKey[]).map((key) => {
                            const r = rooms[key];
                            const isActive = selectedRoom === key;
                            return (
                                <div
                                    key={key}
                                    onClick={() => setSelectedRoom(key)}
                                    className={`bg-white p-8 rounded-[2.5rem] border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                                        isActive 
                                        ? "border-teal-400 shadow-[0_20px_45px_rgba(20,184,166,0.1)] scale-102" 
                                        : "border-slate-100 hover:border-teal-200"
                                    }`}
                                >
                                    {isActive && (
                                        <div className="absolute top-4 right-4 bg-teal-500 text-white rounded-full p-1 shadow-sm">
                                            <Check size={12} />
                                        </div>
                                    )}
                                    
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-6 font-montserrat leading-tight">{r.name}</h3>
                                        
                                        <div className="space-y-3 mb-8 text-xs text-slate-600">
                                            <div className="flex justify-between border-b border-slate-100 pb-2">
                                                <span>Room Dimensions:</span>
                                                <span className="font-extrabold text-slate-800">{r.size}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-slate-100 pb-2">
                                                <span>Climate Cooling:</span>
                                                <span className="font-extrabold text-slate-800">{r.cooling}</span>
                                            </div>
                                            <div className="flex justify-between pb-2">
                                                <span>Hot Water Loop:</span>
                                                <span className="font-extrabold text-slate-800">{r.water}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-2 border-t border-slate-100 pt-6">
                                            {r.facilities.map((fac, i) => (
                                                <div key={i} className="flex items-center gap-2 text-[10px] font-semibold text-slate-700">
                                                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full shrink-0" />
                                                    <span>{fac}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <button className={`mt-8 px-5 py-2.5 rounded-full text-[10px] font-bold transition-all ${
                                        isActive ? "bg-teal-600 text-white" : "bg-slate-900 text-white hover:bg-slate-800"
                                    }`}>
                                        Select View Specs
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ADVISORY & SECURITY STRIP */}
            <section className="py-20 lg:py-24 bg-[#0a192f] text-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <h2 className="section-heading" style={{ fontFamily: serifFont }}>
                        Anti-Ragging &amp; Absolute Safety
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                        The residential quarters are strictly zero-tolerance zones for ragging. Our 24/7 security desks and on-campus clinic are connected to resident wardens at all times.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <span className="flex items-center gap-2 text-teal-400 text-xs font-semibold">
                            <Phone size={14} /> Warden Desk Helpline: +91 7643990301 / +9176439 90302
                        </span>
                        <span className="flex items-center gap-2 text-rose-400 text-xs font-semibold">
                            <ShieldCheck size={14} /> Emergency Security: +91-7643990302
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
}
