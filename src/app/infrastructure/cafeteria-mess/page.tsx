"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShieldCheck, CheckCircle, Users, Activity, Check, 
    Clock, Sparkles, ChevronRight, Apple, Heart, Phone
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

type DayKey = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

interface DayMenu {
    breakfast: string;
    lunch: string;
    tea: string;
    dinner: string;
    healthRating: string;
}

const weeklyMenus: Record<DayKey, DayMenu> = {
    Monday: {
        breakfast: "Aloo Paratha with fresh curd, butter, and tea",
        lunch: "Paneer Butter Masala, Dal Makhani, Jeera Rice, Tandoori Roti, Salad",
        tea: "Samosa / Veg Pakora, green chutney, and milk tea",
        dinner: "Mix Seasonal Veg, Chana Dal, Steamed Rice, Phulka, Curd",
        healthRating: "High Protein & Energy"
    },
    Tuesday: {
        breakfast: "Idli, Vada, Coconut Chutney, Sambar, Tea / Coffee",
        lunch: "Kadhi Pakora, Dry Aloo Methi, Steamed Basmati Rice, Chapati, Papad",
        tea: "Paneer Cutlet, Mint Chutney, Lemon Tea",
        dinner: "Seasonal Sabzi, Dal Tadka, Steamed Rice, Phulka, Sweet Curd",
        healthRating: "Hygienic Probiotics & light fibers"
    },
    Wednesday: {
        breakfast: "Veg Upma / Poha with peanuts, lemon, green tea",
        lunch: "Veg Kofta, Rajma Masala, Green Salad, Rice, Butter Chapati",
        tea: "Aloo Bonda, red chutney, milk tea",
        dinner: "Dum Aloo, Dal Fry, Jeera Rice, Tandoori Roti, Salad",
        healthRating: "High energy carb loops"
    },
    Thursday: {
        breakfast: "Stuffed Onion Paratha, pickle, fresh thick curd, tea",
        lunch: "Sahi Paneer, Dal Arhar, Steamed Rice, Butter Phulka, Raita",
        tea: "Bread Pakora, mint chutney, tea",
        dinner: "Seasonal Veg, Black Chana Dal, Rice, Chapati, Sweet",
        healthRating: "Standard amino acids balance"
    },
    Friday: {
        breakfast: "Masala Dosa, Sambhar, Coconut Chutney, Coffee",
        lunch: "Aloo Gobhi Matar, Dal Moong, Steamed Rice, Phulka, Green Salad",
        tea: "Veg Sandwich, tomato ketchup, tea",
        dinner: "Paneer Do Pyaza, Dal Fry, Pulao, Butter Naan, Ice Cream",
        healthRating: "Friday Culinary Treat"
    },
    Saturday: {
        breakfast: "Bread Butter Toast, Jam, boiled milk, tea",
        lunch: "Chole Bhature, Sweet Lassi, Cucumber Raita, Salad",
        tea: "Onion Pakora, green chutney, tea",
        dinner: "Khichdi with ghee, Aloo Chokha, Papad, Pickle, Curd",
        healthRating: "Gentle digestive recovery"
    },
    Sunday: {
        breakfast: "Poori Sabzi, Halwa, boiled milk, tea",
        lunch: "Mutter Paneer, Dal Makhani, Veg Pulao, Missi Roti, Green Raita",
        tea: "Dhokla with chilies, mint tea",
        dinner: "Mix Veg Sabzi, Dal Tadka, Steamed Rice, Phulka, Sweet Curd",
        healthRating: "Sunday Balanced Meal"
    }
};

export default function CafeteriaMessPage() {
    const [selectedDay, setSelectedDay] = useState<DayKey>("Monday");
    const activeMenu = weeklyMenus[selectedDay];

    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>
            
            {/* HERO */}
            <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-950 via-[#26150a] to-slate-950 mix-blend-multiply opacity-90 z-10" />
                    <Image src="/cafeteria_mess_hero.png" alt="Cafeteria & Mess" fill className="object-cover" priority />
                </div>
                
                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-10">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-amber-500/10 backdrop-blur-md rounded-full font-bold tracking-widest text-[10px] uppercase border border-amber-500/30 text-amber-300 mb-6">
                        <Apple size={12} /> Hygienic Culinary Operations
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-montserrat leading-tight" style={{ fontFamily: serifFont }}>
                        Cafeteria &amp; Mess
                    </h1>
                    <p className="text-sm sm:text-lg lg:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl mx-auto opacity-95">
                        Pure steam-boiler cooking, certified water filtration loops, and dietician-curated menus running under rigid FSSAI compliance codes.
                    </p>
                    <button 
                        onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-full shadow-lg shadow-amber-600/30 transition-all text-[11px] sm:text-xs uppercase tracking-wider"
                    >
                        View Weekly Menu
                    </button>
                </div>
            </section>

            {/* WEEKLY NUTRITIONAL MENU NAVIGATOR */}
            <section id="menu" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-bold text-sm uppercase tracking-widest mb-3 block">Food Schedule</span>
                        <h2 className="section-heading" style={{ fontFamily: serifFont }}>Dietician Curated Weekly Menu</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            Click through the calendar days to verify our nutritional weekly plans audited continuously by the hospital food advisory board.
                        </p>
                    </div>

                    {/* Day Selector */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {(Object.keys(weeklyMenus) as DayKey[]).map((day) => (
                            <button
                                key={day}
                                onClick={() => setSelectedDay(day)}
                                className={`px-5 py-3 rounded-full text-xs font-bold transition-all border ${
                                    selectedDay === day 
                                    ? "bg-amber-600 border-amber-600 text-white shadow-lg" 
                                    : "bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100"
                                }`}
                            >
                                {day}
                            </button>
                        ))}
                    </div>

                    {/* Menu Display Card */}
                    <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-8 lg:p-12 shadow-sm max-w-4xl mx-auto relative overflow-hidden min-h-[450px]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                        
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedDay}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.35 }}
                            >
                                <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-8">
                                    <div>
                                        <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">Calendar Day Selection</span>
                                        <h3 className="text-2xl font-bold text-slate-900 font-montserrat">{selectedDay} Menu board</h3>
                                    </div>
                                    <span className="text-xs bg-amber-50 border border-amber-200 text-amber-800 font-extrabold px-4 py-1.5 rounded-full">
                                        Diet Target: {activeMenu.healthRating}
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div className="bg-white p-6 rounded-2xl border border-slate-100">
                                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                                <Clock size={12} className="text-amber-500" /> Breakfast (08:00 AM)
                                            </h4>
                                            <p className="text-xs font-semibold text-slate-800">{activeMenu.breakfast}</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl border border-slate-100">
                                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                                <Clock size={12} className="text-amber-500" /> Lunch (01:00 PM)
                                            </h4>
                                            <p className="text-xs font-semibold text-slate-800">{activeMenu.lunch}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-white p-6 rounded-2xl border border-slate-100">
                                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                                <Clock size={12} className="text-amber-500" /> High Tea (05:00 PM)
                                            </h4>
                                            <p className="text-xs font-semibold text-slate-800">{activeMenu.tea}</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl border border-slate-100">
                                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                                <Clock size={12} className="text-amber-500" /> Dinner (08:00 PM)
                                            </h4>
                                            <p className="text-xs font-semibold text-slate-800">{activeMenu.dinner}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* FOOD SAFETY & CLINICAL HYGIENE CODES */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-bold text-sm uppercase tracking-widest mb-3 block">Hygiene Standards</span>
                        <h2 className="section-heading" style={{ fontFamily: serifFont }}>Pristine Kitchen Safety Checklists</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            We execute highly regulated clean protocols to protect the digestive and metabolic health of medical scholars.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center">
                            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3 font-montserrat">100% Steam Boiler Prep</h3>
                            <p className="text-slate-500 text-xs leading-relaxed">Food prepared inside computerized industrial steam boilers to prevent touching contamination and maintain maximum vitamin levels.</p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center">
                            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <CheckCircle size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3 font-montserrat">Daily Mineral RO Audits</h3>
                            <p className="text-slate-500 text-xs leading-relaxed">Cooking water sourced from high-purity multi-stage RO units checked every morning for standard pH and dissolved solids (TDS).</p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center">
                            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Users size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3 font-montserrat">Food Advisory Committee</h3>
                            <p className="text-slate-500 text-xs leading-relaxed">Monitored by a dedicated Student-Doctor Board, enforcing FSSAI rules and ensuring delicious, balanced meals daily.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
