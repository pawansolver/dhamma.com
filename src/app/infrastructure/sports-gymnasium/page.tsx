"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Activity, Award, Users, ShieldCheck, Check,
    ChevronRight, HeartPulse, Sparkles, Trophy, X
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

type ArenaKey = "gym" | "badminton" | "outdoor";

interface ArenaData {
    name: string;
    subtitle: string;
    desc: string;
    specs: string[];
    hours: string;
    brands: string;
    image: string;
}

const arenas: Record<ArenaKey, ArenaData> = {
    gym: {
        name: "Central Health Club & Gym",
        subtitle: "Multi-Station Cardiorespiratory & Weight Room",
        desc: "A fully furnished 2,000 sq.ft. physical center featuring high-grade multi-press weight benches, cable crossover towers, heavy-duty cardio mills, and custom dumbbell suites designed for muscle conditioning and vascular diagnostics.",
        specs: ["Jerai Fitness commercial gym cable lines", "Central climate conditioning VRV zones", "Non-slip high-density impact rubber flooring", "Separate cardiovascular treadmill sectors"],
        hours: "05:00 AM - 09:00 PM Daily",
        brands: "Jerai Fitness & Reebok commercial lines",
        image: "/carousel-3.png"
    },
    badminton: {
        name: "Indoor Laminated Court Rooms",
        subtitle: "Acoustic Non-Slip Sensory Play Fields",
        desc: "Two high-standard, beautifully lined indoor badminton arena complexes featuring professional laminated wooden subflooring. The indoor arena hosts floodlight networks to enjoy long stress-relief matches after deep laboratory rounds.",
        specs: ["Acoustically sound indoor high-ceilings", "Laminated non-slip wooden subfloors", "Standard Yonex post assemblies & net loops", "Targeted daylight-balanced court floodlighting"],
        hours: "04:00 PM - 09:30 PM",
        brands: "Yonex & Cosco Sports certified",
        image: "/carousel-1.png"
    },
    outdoor: {
        name: "Floodlit Volley & Basketball Grounds",
        subtitle: "Multipurpose outdoor athletic grounds",
        desc: "Large concrete volleyball and basketball playing fields with durable painted surfaces and heavy-duty steel hoop systems, positioned near the student hostels to host active inter-department championships.",
        specs: ["Smooth standard painted concrete fields", "Perimeter high-intensity LED light towers", "Heavy-duty outdoor iron hoops & nets", "Integrated campus athletic spectator galleries"],
        hours: "05:00 AM - 08:30 PM",
        brands: "Standard concrete markings",
        image: "/carousel-2.png"
    }
};

export default function SportsGymnasiumPage() {
    const [selectedArena, setSelectedArena] = useState<ArenaKey>("gym");
    const [liveScore, setLiveScore] = useState(false);

    const activeArena = arenas[selectedArena];

    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>

            {/* HERO */}
            <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-[#1e0808] to-slate-950 mix-blend-multiply opacity-90 z-10" />
                    <Image src="/sports_gymnasium_hero.png" alt="Sports & Gym" fill className="object-cover" priority />
                </div>

                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto -mt-6">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-rose-500/10 backdrop-blur-md rounded-full font-bold tracking-widest text-[10px] uppercase border border-rose-500/30 text-rose-300 mb-6">
                        <Award size={12} /> Physical Wellness &amp; Recreation
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-montserrat leading-tight" style={{ fontFamily: serifFont }}>
                        Sports &amp; Gymnasium
                    </h1>
                    <p className="text-lg lg:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl mx-auto opacity-95">
                        High-tech indoor gym clubs, badminton courts, floodlit athletic grounds, and group meditation programs to balance academic rigor.
                    </p>
                    <button
                        onClick={() => document.getElementById("arenas")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-3.5 bg-gradient-to-r from-rose-600 to-orange-600 text-white font-bold rounded-full shadow-lg shadow-rose-600/30 transition-all text-xs uppercase tracking-wider"
                    >
                        Explore Arenas
                    </button>
                </div>
            </section>

            {/* INTERACTIVE ARENA SELECTOR */}
            <section id="arenas" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-rose-600 font-bold text-sm uppercase tracking-widest mb-3 block">Fitness Arenas</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Interactive Sports Arenas</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            Select any wellness sector to view specific gym brands, timing windows, and standard court dimensions configured within our green campus.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Selector Tabs */}
                        <div className="lg:col-span-4 space-y-4">
                            {(Object.keys(arenas) as ArenaKey[]).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedArena(key)}
                                    className={`w-full text-left p-6 rounded-[2rem] border transition-all duration-300 flex items-center justify-between group ${selectedArena === key
                                            ? "bg-slate-900 border-slate-900 text-white shadow-xl translate-x-2"
                                            : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100 hover:border-slate-200"
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${selectedArena === key ? "bg-rose-500 text-white" : "bg-white text-slate-500 group-hover:text-rose-600"
                                            } transition-colors shadow-sm shrink-0`}>
                                            {key === "gym" && <Activity size={20} />}
                                            {key === "badminton" && <Award size={20} />}
                                            {key === "outdoor" && <Users size={20} />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm font-montserrat">{arenas[key].name}</h4>
                                            <p className={`text-[10px] ${selectedArena === key ? "text-slate-400" : "text-slate-500"}`}>{arenas[key].subtitle}</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className={`transition-transform ${selectedArena === key ? "rotate-90 text-rose-500" : "text-slate-400 group-hover:translate-x-1"}`} />
                                </button>
                            ))}
                        </div>

                        {/* Interactive Showcase */}
                        <div className="lg:col-span-8 bg-slate-50 border border-slate-100 rounded-[3rem] p-8 lg:p-12 shadow-sm relative overflow-hidden min-h-[500px]">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl pointer-events-none" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedArena}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.4 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                                >
                                    <div>
                                        <span className="text-[10px] font-bold text-rose-600 uppercase tracking-widest block mb-2">{activeArena.subtitle}</span>
                                        <h3 className="text-3xl font-bold text-slate-900 mb-4 leading-tight font-montserrat" style={{ fontFamily: serifFont }}>
                                            {activeArena.name}
                                        </h3>
                                        <p className="text-slate-600 text-xs leading-relaxed mb-6">{activeArena.desc}</p>

                                        <div className="space-y-2 mb-6">
                                            {activeArena.specs.map((spec, i) => (
                                                <div key={i} className="flex items-center gap-2 text-[11px] font-semibold text-slate-800">
                                                    <div className="w-5 h-5 bg-rose-50 rounded-full flex items-center justify-center text-rose-600 shrink-0">
                                                        <Check size={12} />
                                                    </div>
                                                    <span>{spec}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="border-t border-slate-200 pt-6 grid grid-cols-2 gap-4">
                                            <div>
                                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Access Hours</span>
                                                <span className="text-sm font-extrabold text-slate-900">{activeArena.hours}</span>
                                            </div>
                                            <div>
                                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Equip Brands</span>
                                                <span className="text-sm font-extrabold text-slate-900">{activeArena.brands}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-200">
                                        <Image src={activeArena.image} alt={activeArena.name} fill className="object-cover" />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </section>

            {/* LIVE SIMULATED SCOREBOARD WIDGET */}
            <section className="py-24 bg-slate-950 text-white relative">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-rose-400 font-bold text-sm uppercase tracking-widest mb-3 block">Annual Tournaments</span>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight font-montserrat" style={{ fontFamily: serifFont }}>
                                Inter-Batch Athletic Championships
                            </h2>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                Relive the active sporting camaraderie built on our campuses. Click below to view the simulated live scoreboard of our latest MBBS Volleyball finals!
                            </p>

                            {!liveScore ? (
                                <button
                                    onClick={() => setLiveScore(true)}
                                    className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-slate-900 font-black rounded-full text-xs uppercase tracking-wider transition-colors"
                                >
                                    Show Simulated Scoreboard
                                </button>
                            ) : (
                                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 relative text-slate-100">
                                    <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-2">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 animate-pulse">Live Scoreboard - Volleyball Finals</span>
                                        <button onClick={() => setLiveScore(false)} className="text-slate-500 hover:text-slate-300"><X size={14} /></button>
                                    </div>

                                    <div className="flex justify-between items-center text-center mb-6">
                                        <div className="space-y-1">
                                            <span className="text-[9px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full">TEAM A</span>
                                            <h4 className="text-sm font-bold">MBBS Batch 2024</h4>
                                            <span className="text-2xl font-black block text-rose-400">25</span>
                                        </div>
                                        <div className="text-slate-500 font-black text-lg">vs</div>
                                        <div className="space-y-1">
                                            <span className="text-[9px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full">TEAM B</span>
                                            <h4 className="text-sm font-bold">Medical Interns</h4>
                                            <span className="text-2xl font-black block text-slate-400">23</span>
                                        </div>
                                    </div>

                                    <div className="text-center py-2 bg-slate-950 rounded-xl border border-slate-800">
                                        <span className="text-[10px] font-bold text-emerald-400 flex items-center justify-center gap-1.5">
                                            <Trophy size={12} /> MATCH COMPLETED - Batch 24 Wins (Set 3)
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Garmin style stat widgets */}
                        <div className="grid grid-cols-2 gap-6 w-full max-w-md mx-auto">
                            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-white text-center shadow-xl">
                                <span className="text-[9px] text-slate-400 font-bold block mb-1">GYM CAPACITY</span>
                                <h3 className="text-3xl font-black mb-1 text-rose-400">2,000 SF</h3>
                                <p className="text-[8px] text-slate-500 uppercase tracking-wider">Professional Space</p>
                            </div>
                            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-white text-center shadow-xl">
                                <span className="text-[9px] text-slate-400 font-bold block mb-1">COURTS MARKS</span>
                                <h3 className="text-3xl font-black mb-1 text-orange-400">3 Large</h3>
                                <p className="text-[8px] text-slate-500 uppercase tracking-wider">Outdoor Arena Courts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
