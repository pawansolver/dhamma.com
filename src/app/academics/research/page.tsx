"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap, BookOpen, Search, CheckCircle, 
    X, ChevronRight, Atom, Network, Dna
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

interface ResearchData {
    title: string;
    authors: string;
    journal: string;
    indexing: string;
    abstract: string;
    tags: string[];
}

const publicationsList: ResearchData[] = [
    {
        title: "Evaluation of Glycosylated Haemoglobin (HbA1c) and Lipid Profiles in Newly Diagnosed Type-2 Diabetes Mellitus Cases in Bihar",
        authors: "Dr. S. P. Prasad, Dr. Anjana Kumari",
        journal: "Journal of Medical Biochemistry &amp; Diagnostics (2025)",
        indexing: "Index Medicus / PubMed Index",
        abstract: "A cross-sectional screening study evaluating HbA1c ratios against diagnostic microvascular lipid indexes in diabetic cohorts from Patna. Concluded that early lipid audits reduce retinopathy outcomes.",
        tags: ["Biochemistry", "Diabetes"]
    },
    {
        title: "Comparative Study of Pain Scores and Recovery Times: Laparoscopic vs Open Appendectomies in Rural Hospital Wards",
        authors: "Dr. B. P. Singh, Dr. Anupam Ghosh",
        journal: "Indian Journal of Laparoscopic &amp; General Surgery Sciences (2024)",
        indexing: "Scopus / PubMed Index",
        abstract: "Audited 120 patients recovering from appendectomies. Verified that keyhole surgical models reduce patient post-op pain indicators by over 45% compared to open incision procedures.",
        tags: ["Surgery", "Laparoscopy"]
    },
    {
        title: "Epidemiological study of immunization gaps among rural kids under 5 years: A clinic audit in Patna Outpost",
        authors: "Dr. Shalini Sen, Dr. Alok Ranjan",
        journal: "Journal of Preventive &amp; Social Medicine (2025)",
        indexing: "Index Medicus / WHO Index",
        abstract: "Conducted cold-chain immunization inspections in rural outposts. Found that local village health assemblies increased child vaccination coverages by 20%.",
        tags: ["Community Medicine", "Immunization"]
    },
    {
        title: "Molecular analysis of multi-drug resistant Pseudomonas isolates from secondary wound clinics",
        authors: "Dr. N. K. Prasad, Dr. Swati Kumari",
        journal: "Indian Journal of Diagnostic Microbiology (2024)",
        indexing: "Scopus / Index Medicus",
        abstract: "Isolating high-resistance bacterial strands from surgical wound discharges. Verified active efficacy of third-generation Cephalosporin formulations against local isolates.",
        tags: ["Microbiology", "Isolates"]
    }
];

export default function ResearchPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState("All");

    const filteredPublications = publicationsList.filter((pub) => {
        const matchesQuery = searchQuery === "" || 
            pub.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            pub.authors.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = selectedTag === "All" || pub.tags.includes(selectedTag);
        return matchesQuery && matchesTag;
    });

    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>
            
            {/* HERO */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/80 mix-blend-multiply opacity-90 z-10" />
                    <Image src="/biochemistry_lab.png" alt="Research" fill className="object-cover" priority />
                </div>
                
                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto -mt-6">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-cyan-500/10 backdrop-blur-md rounded-full font-bold tracking-widest text-[10px] uppercase border border-cyan-500/30 text-cyan-300 mb-6">
                        <Atom size={12} /> Scientific Discovery &amp; Publications
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-montserrat leading-tight" style={{ fontFamily: serifFont }}>
                        Medical Research
                    </h1>
                    <p className="text-lg lg:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl mx-auto opacity-95">
                        Discover scientific journals, ICMR-funded student research projects, drug trial reports, and ongoing clinical case publications at Dhamma Superspeciality Hospital.
                    </p>
                    <button 
                        onClick={() => document.getElementById("publications")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold rounded-full shadow-lg shadow-cyan-600/30 transition-all text-xs uppercase tracking-wider"
                    >
                        Search Publications
                    </button>
                </div>
            </section>

            {/* PUBLICATIONS DIRECTORY */}
            <section id="publications" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    
                    {/* Search &amp; Filter Box */}
                    <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 mb-12 shadow-sm max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                            
                            {/* Search Box */}
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                <input 
                                    type="text"
                                    placeholder="Search by title, author name..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white border border-slate-200 rounded-full pl-12 pr-6 py-2.5 text-xs focus:outline-none focus:border-cyan-500 text-slate-800 transition-colors"
                                />
                                {searchQuery && (
                                    <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"><X size={14} /></button>
                                )}
                            </div>

                            {/* Tags Selection */}
                            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                                {["All", "Biochemistry", "Surgery", "Community Medicine", "Microbiology"].map((tag) => (
                                    <button
                                        key={tag}
                                        onClick={() => setSelectedTag(tag)}
                                        className={`px-4 py-2 rounded-full text-[10px] font-bold transition-all border ${
                                            selectedTag === tag 
                                            ? "bg-slate-900 border-slate-900 text-white" 
                                            : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                                        }`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Results Showcase */}
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h3 className="text-xl font-bold text-slate-800 font-montserrat">
                            Scientific Publications Registry ({filteredPublications.length})
                        </h3>

                        {filteredPublications.length === 0 ? (
                            <div className="text-center py-16 bg-slate-50 border border-slate-100 rounded-2xl text-slate-400">
                                <BookOpen size={48} className="mx-auto text-slate-300 mb-4 animate-pulse" />
                                <h4 className="font-bold text-sm">No Publications Found</h4>
                                <p className="text-xs mt-1">Try resetting search filters or keywords.</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {filteredPublications.map((pub, idx) => (
                                    <motion.div
                                        key={idx}
                                        layout
                                        className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:border-cyan-200 hover:shadow-md transition-all group relative overflow-hidden"
                                    >
                                        <span className="text-[9px] font-bold text-cyan-600 uppercase tracking-widest block mb-2">{pub.indexing}</span>
                                        <h4 className="text-lg font-bold text-slate-900 mb-2 font-montserrat group-hover:text-cyan-700 transition-colors leading-snug">
                                            {pub.title}
                                        </h4>
                                        <p className="text-xs font-semibold text-slate-500 mb-4">Lead Investigators: {pub.authors}</p>
                                        
                                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-600 text-xs mb-4 leading-relaxed">
                                            <span className="font-bold text-slate-800 block mb-1">Project Abstract Summary:</span>
                                            {pub.abstract}
                                        </div>

                                        <div className="flex justify-between items-center text-[10px]">
                                            <span className="font-bold text-slate-400 uppercase tracking-wider">Indexed in: {pub.journal}</span>
                                            <div className="flex gap-1.5">
                                                {pub.tags.map((t, i) => (
                                                    <span key={i} className="px-3 py-0.5 bg-cyan-50 border border-cyan-100 rounded-full text-[9px] font-bold text-cyan-700">{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </section>
        </div>
    );
}
