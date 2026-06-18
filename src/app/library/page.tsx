"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    BookOpen, Search, ShieldCheck, CheckCircle, Award,
    ChevronRight, Clock, Users, X, Database, Terminal, Check
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

type WingKey = "reading" | "digital" | "journal";

interface LibraryWing {
    title: string;
    subtitle: string;
    desc: string;
    capacity: string;
    specs: string[];
    hours: string;
    image: string;
}

const libraryWings: Record<WingKey, LibraryWing> = {
    reading: {
        title: "Main Reading Galleries",
        subtitle: "Dual 150-Seat Silence Halls",
        desc: "Two massive, beautifully insulated reading halls designed for deep study. Featuring ergonomic high-back chairs, large customized personal study tables with individual power ports, and strict sound-proofing partitions keeping noise under 30dB.",
        capacity: "300 Readers Simultaneously",
        specs: [
            "Ergonomic high-back study chairs",
            "Individual laptop charging ports",
            "Central air-conditioning VRV loops",
            "Acoustic noise-muffling panels"
        ],
        hours: "08:00 AM - 10:00 PM Daily",
        image: "/carousel-1.png"
    },
    digital: {
        title: "Digital E-Library Terminal",
        subtitle: "Medline &amp; WHO Hinari Access Nodes",
        desc: "Equipped with 40 high-performance computer nodes directly connected to high-speed fiber internet. Scholars have immediate index access to international journals, PubMed databases, Medline, and WHO Hinari e-learning libraries.",
        capacity: "40 High-End Workstations",
        specs: [
            "High-speed fiber direct internet loops",
            "Direct node access to PubMed / Medline",
            "Free access to international e-journals",
            "Central diagnostic printing terminals"
        ],
        hours: "09:00 AM - 08:00 PM Daily",
        image: "/carousel-3.png"
    },
    journal: {
        title: "Reference &amp; Journal Vault",
        subtitle: "10,000+ Physical Medical Volumes",
        desc: "A massive, meticulously organized book vault holding over 10,000 reference textbooks and monographs. Subscribed to over 30 national and international prestigious print journals, fully categorized under standard computer barcode systems.",
        capacity: "10,000+ Print Volumes",
        specs: [
            "Barcoded electronic catalog classification",
            "30+ National &amp; International Print Journals",
            "Latest editions of standard MBBS textbooks",
            "Rare medical monograph collections"
        ],
        hours: "08:00 AM - 08:00 PM Daily",
        image: "/carousel-2.png"
    }
};

interface BookData {
    title: string;
    author: string;
    edition: string;
    subject: string;
    shelf: string;
    available: boolean;
}

const bookCatalog: BookData[] = [
    { title: "Gray's Anatomy for Students", author: "Richard L. Drake", edition: "4th Edition", subject: "Anatomy", shelf: "Shelf A-3", available: true },
    { title: "Guyton &amp; Hall Textbook of Medical Physiology", author: "John E. Hall", edition: "14th Edition", subject: "Physiology", shelf: "Shelf B-12", available: true },
    { title: "Harper's Illustrated Biochemistry", author: "Victor W. Rodwell", edition: "32nd Edition", subject: "Biochemistry", shelf: "Shelf C-5", available: false },
    { title: "Robbins &amp; Cotran Pathologic Basis of Disease", author: "Vinay Kumar", edition: "10th Edition", subject: "Pathology", shelf: "Shelf D-2", available: true },
    { title: "KDT Essentials of Medical Pharmacology", author: "K.D. Tripathi", edition: "8th Edition", subject: "Pharmacology", shelf: "Shelf D-9", available: true },
    { title: "Bailey &amp; Love's Short Practice of Surgery", author: "Norman S. Williams", edition: "27th Edition", subject: "Surgery", shelf: "Shelf F-4", available: false }
];

export default function LibraryPage() {
    const [selectedWing, setSelectedWing] = useState<WingKey>("reading");
    const [searchQuery, setSearchQuery] = useState("");
    const [activeSubject, setActiveSubject] = useState("All");

    const activeWing = libraryWings[selectedWing];

    const filteredBooks = bookCatalog.filter((book) => {
        const matchesQuery = searchQuery === "" ||
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSubject = activeSubject === "All" || book.subject === activeSubject;
        return matchesQuery && matchesSubject;
    });

    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>

            {/* HERO */}
            <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-[#0a1829] to-indigo-950 mix-blend-multiply opacity-90 z-10" />
                    <Image src="/library_hero.png" alt="Central Library" fill className="object-cover" priority />
                </div>

                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto -mt-6">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-indigo-500/10 backdrop-blur-md rounded-full font-bold tracking-widest text-[10px] uppercase border border-indigo-500/30 text-indigo-300 mb-6">
                        <BookOpen size={12} /> The Intellectual Heart of BHRI
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-montserrat leading-tight" style={{ fontFamily: serifFont }}>
                        Central Library
                    </h1>
                    <p className="text-lg lg:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl mx-auto opacity-95">
                        Expand your medical horizon with over 10,000 print volumes, high-speed digital e-learning portals, and strict distraction-free silence study wings.
                    </p>
                    <button
                        onClick={() => document.getElementById("wings")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold rounded-full shadow-lg shadow-indigo-600/30 transition-all text-xs uppercase tracking-wider"
                    >
                        Explore Library Wings
                    </button>
                </div>
            </section>

            {/* CORE METRICS STRIP */}
            <section className="py-12 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-slate-200">
                        <div>
                            <h3 className="text-3xl font-extrabold text-slate-900">10,000+</h3>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Physical Volumes</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-extrabold text-slate-900">40 Nodes</h3>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">E-Library Terminals</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-extrabold text-slate-900">30+</h3>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Subscribed Journals</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-extrabold text-slate-900">14 Hours</h3>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Daily Study Window</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE LIBRARY WINGS SELECTOR */}
            <section id="wings" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-3 block">Library Sectors</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Core Learning Wings</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            Click on any of the library zones below to browse their specific equipment, reading capacities, and access timetables.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Selector Tabs */}
                        <div className="lg:col-span-4 space-y-4">
                            {(Object.keys(libraryWings) as WingKey[]).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedWing(key)}
                                    className={`w-full text-left p-6 rounded-[2rem] border transition-all duration-300 flex items-center justify-between group ${selectedWing === key
                                            ? "bg-slate-900 border-slate-900 text-white shadow-xl translate-x-2"
                                            : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100 hover:border-slate-200"
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${selectedWing === key ? "bg-indigo-500 text-white" : "bg-white text-slate-500 group-hover:text-indigo-600"
                                            } transition-colors shadow-sm shrink-0`}>
                                            {key === "reading" && <Users size={20} />}
                                            {key === "digital" && <Terminal size={20} />}
                                            {key === "journal" && <Database size={20} />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xs font-montserrat truncate max-w-[180px]">{libraryWings[key].title}</h4>
                                            <p className={`text-[9px] ${selectedWing === key ? "text-slate-400" : "text-slate-500"}`}>{libraryWings[key].subtitle}</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className={`transition-transform ${selectedWing === key ? "rotate-90 text-indigo-500" : "text-slate-400 group-hover:translate-x-1"}`} />
                                </button>
                            ))}
                        </div>

                        {/* Interactive Showcase */}
                        <div className="lg:col-span-8 bg-slate-50 border border-slate-100 rounded-[3rem] p-8 lg:p-12 shadow-sm relative overflow-hidden min-h-[500px]">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedWing}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.4 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                                >
                                    <div>
                                        <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest block mb-2">{activeWing.subtitle}</span>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight font-montserrat" style={{ fontFamily: serifFont }} dangerouslySetInnerHTML={{ __html: activeWing.title }} />
                                        <p className="text-slate-600 text-xs leading-relaxed mb-6">{activeWing.desc}</p>

                                        <div className="space-y-2 mb-6">
                                            {activeWing.specs.map((spec, i) => (
                                                <div key={i} className="flex items-center gap-2 text-[11px] font-semibold text-slate-800">
                                                    <div className="w-5 h-5 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 shrink-0">
                                                        <Check size={12} />
                                                    </div>
                                                    <span dangerouslySetInnerHTML={{ __html: spec }} />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="border-t border-slate-200 pt-6 grid grid-cols-2 gap-4">
                                            <div>
                                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Wing Capacity</span>
                                                <span className="text-sm font-extrabold text-slate-900">{activeWing.capacity}</span>
                                            </div>
                                            <div>
                                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Wing Hours</span>
                                                <span className="text-sm font-extrabold text-slate-900">{activeWing.hours}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-200">
                                        <Image src={activeWing.image} alt={activeWing.title} fill className="object-cover" />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE BOOK CATALOG FINDER */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    <div className="text-center mb-16">
                        <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-3 block">Catalog Finder</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Reference Book Catalog</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            Query our physical catalog immediately. Toggle by medical subjects to search shelf indexes and active lending availabilities.
                        </p>
                    </div>

                    {/* Search &amp; Subject filter box */}
                    <div className="bg-white border border-slate-200/80 p-8 rounded-[2.5rem] shadow-md max-w-4xl mx-auto mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                <input
                                    type="text"
                                    placeholder="Search by book title or authors..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-full pl-12 pr-6 py-2.5 text-xs focus:outline-none focus:border-indigo-500 text-slate-800 transition-colors"
                                />
                                {searchQuery && (
                                    <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"><X size={14} /></button>
                                )}
                            </div>

                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                                {["All", "Anatomy", "Physiology", "Biochemistry", "Pathology", "Surgery"].map((sub) => (
                                    <button
                                        key={sub}
                                        onClick={() => setActiveSubject(sub)}
                                        className={`px-4 py-2 rounded-full text-[10px] font-bold transition-all border ${activeSubject === sub
                                                ? "bg-slate-900 border-slate-900 text-white"
                                                : "bg-slate-50 border-slate-100 text-slate-600 hover:border-slate-200"
                                            }`}
                                    >
                                        {sub}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Result Book Deck */}
                    <div className="max-w-4xl mx-auto space-y-4">
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">CATALOG RESULTS ({filteredBooks.length} VOLUMES)</h4>

                        {filteredBooks.length === 0 ? (
                            <div className="text-center py-16 bg-white border border-slate-100 rounded-[2rem] text-slate-400">
                                <BookOpen size={48} className="mx-auto text-slate-200 mb-4 animate-pulse" />
                                <h4 className="font-bold text-sm">No Medical Volumes Found</h4>
                                <p className="text-xs mt-1">Try resetting search keywords or subject tabs.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <AnimatePresence mode="popLayout">
                                    {filteredBooks.map((book) => (
                                        <motion.div
                                            key={book.title}
                                            layout
                                            initial={{ opacity: 0, scale: 0.98 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.98 }}
                                            transition={{ duration: 0.25 }}
                                            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-indigo-200 transition-all group"
                                        >
                                            <div>
                                                <div className="flex justify-between items-start mb-3">
                                                    <span className="text-[8px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">{book.subject}</span>
                                                    <span className={`text-[8px] px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider ${book.available ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-rose-50 text-rose-700 border border-rose-100"
                                                        }`}>{book.available ? "Available" : "Lent Out"}</span>
                                                </div>
                                                <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-indigo-700 transition-colors font-montserrat leading-snug mb-1" dangerouslySetInnerHTML={{ __html: book.title }} />
                                                <p className="text-[11px] text-slate-500 font-semibold mb-3">By: {book.author} — {book.edition}</p>
                                            </div>
                                            <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-[10px] text-slate-400 font-bold">
                                                <span>Location: {book.shelf}</span>
                                                <span className="text-indigo-600 uppercase tracking-widest text-[9px]">Lending Desk A</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
