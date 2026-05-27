"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search, Filter, Stethoscope, GraduationCap, Award, CheckCircle, 
    Calendar, Clock, Phone, ShieldCheck, UserCheck, Users, 
    MapPin, Activity, Info, X, ChevronRight, Star, HeartPulse, Sparkles
} from "lucide-react";

// --- Google Web Fonts Setup ---
const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

// --- Types & Data ---
type Doctor = {
    name: string;
    role: string;
    dept: string;
    credentials: string;
    exp: string;
    specialty: string;
    tags: string[];
    image?: string;
};

const facultyList: Doctor[] = [
    // Academic Leadership
    {
        name: "Dr. (Prof.) Chandra Shekhar",
        role: "Dean & Professor",
        dept: "Dean Office",
        credentials: "MS (General Surgery)",
        exp: "25+ Years Experience",
        specialty: "Senior Surgical Educator & Administrator",
        tags: ["Dean", "Surgical Pioneer"],
    },
    {
        name: "Dr. (Prof.) Alok Kumar",
        role: "Medical Superintendent & Professor",
        dept: "Superintendent Office",
        credentials: "MD (Pediatrics)",
        exp: "22+ Years Experience",
        specialty: "Clinical Operations & Neonatal Expert",
        tags: ["Medical Supt.", "Child Specialist"],
    },
    // Biochemistry
    {
        name: "Dr. S. P. Prasad",
        role: "Professor & HOD",
        dept: "Biochemistry",
        credentials: "MD, Ph.D. (Medical Biochemistry)",
        exp: "20+ Years Experience",
        specialty: "Molecular Diagnostics & Metabolic Pathways",
        tags: ["HOD", "Biochemist"],
    },
    {
        name: "Dr. Anjana Kumari",
        role: "Associate Professor",
        dept: "Biochemistry",
        credentials: "MD (Biochemistry)",
        exp: "12+ Years Experience",
        specialty: "Clinical Enzymology & Immunoassays",
        tags: ["Associate Professor", "Diagnostics Lead"],
    },
    // Pharmacology
    {
        name: "Dr. Amit Kumar",
        role: "Professor & HOD",
        dept: "Pharmacology",
        credentials: "MD (Pharmacology)",
        exp: "18+ Years Experience",
        specialty: "Clinical Trials, Pharmacovigilance & Drug Assays",
        tags: ["HOD", "Drug Expert"],
    },
    {
        name: "Dr. Priyadarshini",
        role: "Associate Professor",
        dept: "Pharmacology",
        credentials: "MD (Pharmacology)",
        exp: "10+ Years Experience",
        specialty: "Neuro-pharmacology & Therapeutics Research",
        tags: ["Associate Professor", "Researcher"],
    },
    // Pathology
    {
        name: "Dr. Vinay Kumar",
        role: "Professor & HOD",
        dept: "Pathology",
        credentials: "MD (Pathology), DCP",
        exp: "19+ Years Experience",
        specialty: "Histopathology, Cytopathology & Cancer Diagnostics",
        tags: ["HOD", "Pathologist"],
    },
    {
        name: "Dr. Pragya Singh",
        role: "Associate Professor",
        dept: "Pathology",
        credentials: "MD (Pathology)",
        exp: "11+ Years Experience",
        specialty: "Haematology & Blood Transfusion Medicine",
        tags: ["Associate Professor", "Hematology Specialist"],
    },
    // Forensic Medicine
    {
        name: "Dr. R. K. Singh",
        role: "Professor & HOD",
        dept: "Forensic Medicine & Toxicology",
        credentials: "MD (Forensic Medicine)",
        exp: "18+ Years Experience",
        specialty: "Medical Jurisprudence, Autopsies & Courtroom Testimony",
        tags: ["HOD", "Forensic Expert"],
    },
    {
        name: "Dr. Vibha Kumari",
        role: "Associate Professor",
        dept: "Forensic Medicine & Toxicology",
        credentials: "MD (Forensic Medicine & Toxicology)",
        exp: "11+ Years Experience",
        specialty: "Clinical Forensic Medicine & Poisons Center",
        tags: ["Associate Professor", "Toxicologist"],
    },
    // Orthopaedics
    {
        name: "Dr. S. N. Prasad",
        role: "Professor & HOD",
        dept: "Orthopaedics",
        credentials: "MS (Orthopaedics)",
        exp: "20+ Years Experience",
        specialty: "Total Joint Replacements & Complex Trauma Surgery",
        tags: ["HOD", "Joint Surgeon"],
    },
    {
        name: "Dr. Harsh Vardhan",
        role: "Associate Professor",
        dept: "Orthopaedics",
        credentials: "MS (Orthopaedics), M.Ch",
        exp: "12+ Years Experience",
        specialty: "Spine Surgery & Minimally Invasive Arthroscopy",
        tags: ["Associate Professor", "Spine Expert"],
    },
    // Community Medicine
    {
        name: "Dr. Shalini Sen",
        role: "Professor & HOD",
        dept: "Community Medicine",
        credentials: "MD (Community Medicine), Ph.D.",
        exp: "16+ Years Experience",
        specialty: "Epidemiology, Biostatistics & Universal Health",
        tags: ["HOD", "Public Health HOD"],
    },
    {
        name: "Dr. Alok Ranjan",
        role: "Associate Professor",
        dept: "Community Medicine",
        credentials: "MD (Preventive & Social Medicine)",
        exp: "10+ Years Experience",
        specialty: "Rural Healthcare Outposts & Child Immunization cold chains",
        tags: ["Associate Professor", "Immunization Lead"],
    },
    // ENT
    {
        name: "Dr. Vinod Mehta",
        role: "Professor & HOD",
        dept: "Oto-Rhino-Laryngology (ENT)",
        credentials: "MS (ENT)",
        exp: "19+ Years Experience",
        specialty: "Micro-Ear Surgery, Tympanoplasties & Cochlear Implants",
        tags: ["HOD", "Micro-Ear Surgeon"],
    },
    {
        name: "Dr. Shweta Pathak",
        role: "Associate Professor",
        dept: "Oto-Rhino-Laryngology (ENT)",
        credentials: "MS (ENT)",
        exp: "10+ Years Experience",
        specialty: "Endoscopic Sinus Surgery (FESS) & Voice Rehab",
        tags: ["Associate Professor", "Sinus Specialist"],
    },
    // General Medicine
    {
        name: "Dr. Rajiv Nayan",
        role: "Professor & HOD",
        dept: "General Medicine",
        credentials: "MD (General Medicine)",
        exp: "22+ Years Experience",
        specialty: "Critical Care, Infectious Diseases & Metabolic Cases",
        tags: ["HOD", "Critical Care HOD"],
    },
    {
        name: "Dr. P. K. Jha",
        role: "Associate Professor",
        dept: "General Medicine",
        credentials: "MD (Medicine)",
        exp: "15+ Years Experience",
        specialty: "Endocrinology, Thyroid Clinics & Diabetes Care",
        tags: ["Associate Professor", "Diabetologist"],
    },
    // Ophthalmology
    {
        name: "Dr. S. K. Gupta",
        role: "Professor & HOD",
        dept: "Ophthalmology",
        credentials: "MS (Ophthalmology)",
        exp: "18+ Years Experience",
        specialty: "Sutureless Phacoemulsification & Glaucoma Surgery",
        tags: ["HOD", "Phaco Surgeon"],
    },
    {
        name: "Dr. Arpana Sahay",
        role: "Associate Professor",
        dept: "Ophthalmology",
        credentials: "MS (Ophthalmology)",
        exp: "11+ Years Experience",
        specialty: "Retinal Lasers, Diabetic Retinopathy & Squint Correction",
        tags: ["Associate Professor", "Retina Expert"],
    },
    // Paediatrics
    {
        name: "Dr. M. P. Singh",
        role: "Professor & HOD",
        dept: "Paediatrics",
        credentials: "MD (Paediatrics)",
        exp: "20+ Years Experience",
        specialty: "Neonatal Resuscitation, Preterm Incubator Care & Level-3 NICU",
        tags: ["HOD", "Neonatologist"],
    },
    {
        name: "Dr. Sunita Roy",
        role: "Associate Professor",
        dept: "Paediatrics",
        credentials: "MD (Paediatrics), DNB",
        exp: "12+ Years Experience",
        specialty: "Child Growth Milestones, Pediatric ICUs & Asthma Clinics",
        tags: ["Associate Professor", "Growth Specialist"],
    },
    // OBGYN
    {
        name: "Dr. Renu Singh",
        role: "Professor & HOD",
        dept: "Obstetrics & Gynecology",
        credentials: "MS (Obstetrics & Gynecology)",
        exp: "19+ Years Experience",
        specialty: "High-Risk Pregnancy, Antenatal Care & Maternity Suites",
        tags: ["HOD", "Maternity Expert"],
    },
    {
        name: "Dr. Pooja Sinha",
        role: "Associate Professor",
        dept: "Obstetrics & Gynecology",
        credentials: "MS (Obstetrics & Gynecology)",
        exp: "11+ Years Experience",
        specialty: "Gynaecological Keyhole Laparoscopy & PCOS Hormonal Recovery",
        tags: ["Associate Professor", "Laparoscopy Specialist"],
    },
    // Psychiatry
    {
        name: "Dr. S. K. Mitra",
        role: "Professor & HOD",
        dept: "Psychiatry",
        credentials: "MD (Psychiatry)",
        exp: "18+ Years Experience",
        specialty: "Neuropsychiatry, Addictions Rehab & Brain EEG diagnostics",
        tags: ["HOD", "Neuropsychiatrist"],
    },
    {
        name: "Dr. Neha Sharma",
        role: "Associate Professor",
        dept: "Psychiatry",
        credentials: "MD (Psychiatric Medicine), DNB",
        exp: "9+ Years Experience",
        specialty: "Child & Teen Behavioral Counseling, CBT Therapy",
        tags: ["Associate Professor", "Psychotherapist"],
    },
    // Radiology
    {
        name: "Dr. A. P. Sinha",
        role: "Professor & HOD",
        dept: "Radiology",
        credentials: "MD (Radiology & Radiodiagnosis)",
        exp: "21+ Years Experience",
        specialty: "High-Field Brain MRIs, Multislice CT Trauma Diagnostics",
        tags: ["HOD", "Radiologist"],
    },
    {
        name: "Dr. Kiran Mishra",
        role: "Associate Professor",
        dept: "Radiology",
        credentials: "MD (Radiology)",
        exp: "13+ Years Experience",
        specialty: "Fetal Doppler Ultrasound, 3D/4D scans & PACS Server Network",
        tags: ["Associate Professor", "Fetal Imaging Expert"],
    },
    // Microbiology
    {
        name: "Dr. N. K. Prasad",
        role: "Professor & HOD",
        dept: "Microbiology",
        credentials: "MD (Microbiology)",
        exp: "19+ Years Experience",
        specialty: "Clinical Virology, Infection Control & PCR Diagnostics",
        tags: ["HOD", "Virology Specialist"],
    },
    {
        name: "Dr. Swati Kumari",
        role: "Associate Professor",
        dept: "Microbiology",
        credentials: "MD (Microbiology)",
        exp: "11+ Years Experience",
        specialty: "Diagnostic Bacteriology, Culture AST & Immunology Assays",
        tags: ["Associate Professor", "AST Culture Expert"],
    },
    // Dermatology
    {
        name: "Dr. S. S. Roy",
        role: "Professor & HOD",
        dept: "Dermatology, Venereology & Leprosy",
        credentials: "MD (Dermatology)",
        exp: "16+ Years Experience",
        specialty: "Clinical Dermatology, Laser Surgery & Phototherapy Clinics",
        tags: ["HOD", "Laser Surgeon"],
    },
    {
        name: "Dr. Monika Sinha",
        role: "Associate Professor",
        dept: "Dermatology, Venereology & Leprosy",
        credentials: "MD (Dermatology, Venereology & Leprosy)",
        exp: "10+ Years Experience",
        specialty: "Cosmetic Dermato-Surgery, Vitiligo & Leprosy Multi-drug Chemotherapy",
        tags: ["Associate Professor", "Skin Specialist"],
    },
    // Dentistry
    {
        name: "Dr. A. K. Sen",
        role: "Professor & HOD",
        dept: "Dentistry",
        credentials: "MDS (Oral & Maxillofacial Surgery)",
        exp: "17+ Years Experience",
        specialty: "Maxillofacial Trauma, Facial Fracture Reconstruction & Jaw Surgery",
        tags: ["HOD", "Maxillofacial Surgeon"],
    },
    {
        name: "Dr. Ritu Kumari",
        role: "Associate Professor",
        dept: "Dentistry",
        credentials: "MDS (Conservative Dentistry & Endodontics)",
        exp: "11+ Years Experience",
        specialty: "Single-Visit Painless RCTs, Dental Implants & Cosmetic Veneers",
        tags: ["Associate Professor", "Endodontist"],
    },
    // Anaesthesiology
    {
        name: "Dr. S. K. Das",
        role: "Professor & HOD",
        dept: "Anaesthesiology",
        credentials: "MD (Anaesthesiology)",
        exp: "20+ Years Experience",
        specialty: "General Anaesthesia, Intubation, Regional Blocks & ACLS Resuscitation",
        tags: ["HOD", "Anaesthetist"],
    },
    {
        name: "Dr. Meena Kumari",
        role: "Associate Professor",
        dept: "Anaesthesiology",
        credentials: "MD (Anaesthesiology)",
        exp: "12+ Years Experience",
        specialty: "Ultrasound-guided Nerve Blocks, Chronic Pain Clinics & PACU ICU Beds",
        tags: ["Associate Professor", "Pain Specialist"],
    },
    // General Surgery
    {
        name: "Dr. B. P. Singh",
        role: "Professor & HOD",
        dept: "General Surgery",
        credentials: "MS (General Surgery)",
        exp: "21+ Years Experience",
        specialty: "Advanced Laparoscopic (Keyhole) Appendix/Gallbladder & Hernia Surgery",
        tags: ["HOD", "Laparoscopic HOD"],
    },
    {
        name: "Dr. Anupam Ghosh",
        role: "Associate Professor",
        dept: "General Surgery",
        credentials: "MS (General Surgery)",
        exp: "13+ Years Experience",
        specialty: "Gastrointestinal Surgery, Soft Tissue Onco-surgery & Diabetic Foot care",
        tags: ["Associate Professor", "Gastro Surgeon"],
    }
];

const departments = [
    "All Departments",
    "Biochemistry",
    "Pharmacology",
    "Pathology",
    "Forensic Medicine & Toxicology",
    "Orthopaedics",
    "Community Medicine",
    "Oto-Rhino-Laryngology (ENT)",
    "General Medicine",
    "Ophthalmology",
    "Paediatrics",
    "Obstetrics & Gynecology",
    "Psychiatry",
    "Radiology",
    "Microbiology",
    "Dermatology, Venereology & Leprosy",
    "Dentistry",
    "Anaesthesiology",
    "General Surgery"
];

const ranks = [
    { label: "All Faculty", value: "all" },
    { label: "Heads of Department (HOD)", value: "hod" },
    { label: "Professors", value: "professor" },
    { label: "Associate Professors", value: "associate" }
];

export default function FacultyDoctorsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDept, setSelectedDept] = useState("All Departments");
    const [selectedRank, setSelectedRank] = useState("all");
    const [activeDoctorModal, setActiveDoctorModal] = useState<Doctor | null>(null);

    // --- Filter Logics ---
    const filteredFaculty = useMemo(() => {
        return facultyList.filter((doc) => {
            // Search Query
            const query = searchQuery.toLowerCase().trim();
            const matchesQuery = query === "" || 
                doc.name.toLowerCase().includes(query) || 
                doc.dept.toLowerCase().includes(query) ||
                doc.specialty.toLowerCase().includes(query) ||
                doc.credentials.toLowerCase().includes(query);

            // Department
            const matchesDept = selectedDept === "All Departments" || doc.dept === selectedDept;

            // Rank
            let matchesRank = true;
            if (selectedRank === "hod") {
                matchesRank = doc.role.toLowerCase().includes("hod");
            } else if (selectedRank === "professor") {
                matchesRank = doc.role.toLowerCase().includes("professor") && !doc.role.toLowerCase().includes("associate");
            } else if (selectedRank === "associate") {
                matchesRank = doc.role.toLowerCase().includes("associate");
            }

            return matchesQuery && matchesDept && matchesRank;
        });
    }, [searchQuery, selectedDept, selectedRank]);

    // --- Leadership Division ---
    const leadershipTeam = useMemo(() => {
        return facultyList.filter(doc => doc.dept.includes("Office"));
    }, []);

    // --- Non-Leadership Division for Directory ---
    const directoryFaculty = useMemo(() => {
        return filteredFaculty.filter(doc => !doc.dept.includes("Office"));
    }, [filteredFaculty]);

    // Handle scroll to directory
    const scrollToDirectory = () => {
        const el = document.getElementById("directory-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>
            
            {/* ===== HERO SECTION ===== */}
            <section className="relative h-[75vh] min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
                    <Image 
                        src="/carousel-3.png"
                        alt="BHRI Medical Faculty"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                
                <div className="relative z-20 container mx-auto px-6 lg:px-12 text-left max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1.5 px-4 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold tracking-[0.2em] text-xs mb-6 border border-white/20 uppercase font-montserrat">
                            Clinical & Academic Excellence
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl font-montserrat" style={{ fontFamily: serifFont }}>
                            Faculty & Doctors
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-300 font-medium max-w-3xl mb-10 leading-relaxed drop-shadow-md font-montserrat">
                            Meet our distinguished medical professors, HODs, and veteran surgical specialists dedicated to healing patients and grooming tomorrow's healthcare leaders.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                onClick={scrollToDirectory}
                                className="px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center gap-2 max-w-xs font-montserrat"
                            >
                                Find Your Doctor
                            </motion.button>
                            <motion.a 
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all shadow-xl flex items-center justify-center gap-2 max-w-xs font-montserrat"
                            >
                                Contact Board
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== CORE MEDICAL & ACADEMIC LEADERSHIP ===== */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3 block">Institutional Leadership</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Dean & Medical Superintendent</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-base lg:text-lg">
                            Steering Buddha Hospital & Research Institute toward medical breakthroughs and unparalleled clinical training standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                        {leadershipTeam.map((leader, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 0.7 }}
                                className="relative group bg-slate-900 rounded-[3rem] p-8 text-white border border-slate-800 shadow-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500"
                            >
                                <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                                
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-emerald-500 flex items-center justify-center mb-6 shadow-xl relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                        <Users size={40} className="text-slate-400 opacity-60" />
                                    </div>
                                    
                                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4">
                                        {leader.role}
                                    </span>
                                    
                                    <h3 className="text-2xl font-bold font-montserrat mb-1" style={{ fontFamily: serifFont }}>
                                        {leader.name}
                                    </h3>
                                    
                                    <p className="text-slate-400 font-semibold text-xs mb-3">
                                        {leader.credentials}
                                    </p>
                                    
                                    <p className="text-slate-300 text-sm leading-relaxed max-w-xs mb-6 opacity-90">
                                        {leader.specialty}
                                    </p>
                                    
                                    <div className="flex gap-2">
                                        {leader.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-0.5 bg-slate-800 border border-slate-700 rounded-full text-[10px] font-semibold text-slate-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <button 
                                        onClick={() => setActiveDoctorModal(leader)}
                                        className="mt-8 px-6 py-2.5 bg-white/10 hover:bg-emerald-600 hover:text-white border border-white/10 hover:border-emerald-600 text-white rounded-full text-xs font-bold transition-all w-full"
                                    >
                                        View Schedule
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== STATS BAR ===== */}
            <section className="bg-slate-50 border-y border-slate-100 py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 text-center">
                        <div className="py-4">
                            <h3 className="text-4xl font-extrabold text-slate-900 font-montserrat mb-1">38+</h3>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Expert Faculty Members</p>
                        </div>
                        <div className="py-4">
                            <h3 className="text-4xl font-extrabold text-slate-900 font-montserrat mb-1">15+</h3>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Advanced Specialties</p>
                        </div>
                        <div className="py-4">
                            <h3 className="text-4xl font-extrabold text-slate-900 font-montserrat mb-1">20+ Years</h3>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">HOD Clinical Standing</p>
                        </div>
                        <div className="py-4">
                            <h3 className="text-4xl font-extrabold text-slate-900 font-montserrat mb-1">100%</h3>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">NMC CBME Compliant</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== DYNAMIC SEARCH & DIRECTORY SECTION ===== */}
            <section id="directory-section" className="py-20 lg:py-28 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    
                    {/* Filter controls panel */}
                    <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-8 lg:p-12 mb-16 shadow-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
                            
                            {/* Search Box */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Search Faculty</label>
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input 
                                        type="text"
                                        placeholder="Search by name, credentials, specialty..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-white border border-slate-200 rounded-full pl-12 pr-6 py-3 text-sm focus:outline-none focus:border-emerald-500 text-slate-800 transition-colors"
                                    />
                                    {searchQuery && (
                                        <button 
                                            onClick={() => setSearchQuery("")}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                        >
                                            <X size={16} />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Department Dropdown */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Clinical Department</label>
                                <div className="relative">
                                    <select
                                        value={selectedDept}
                                        onChange={(e) => setSelectedDept(e.target.value)}
                                        className="w-full bg-white border border-slate-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-emerald-500 text-slate-800 transition-colors appearance-none cursor-pointer"
                                    >
                                        {departments.map((dept, i) => (
                                            <option key={i} value={dept}>{dept}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                        <Filter size={14} />
                                    </div>
                                </div>
                            </div>

                            {/* Rank Selection Tabs */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Academic Rank</label>
                                <div className="flex flex-wrap gap-2">
                                    {ranks.map((rank, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedRank(rank.value)}
                                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                                                selectedRank === rank.value 
                                                ? "bg-slate-900 text-white shadow-md shadow-slate-900/10" 
                                                : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
                                            }`}
                                        >
                                            {rank.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Reset Filters button */}
                        {(searchQuery || selectedDept !== "All Departments" || selectedRank !== "all") && (
                            <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
                                <span className="text-xs font-semibold text-slate-500">
                                    Active filters showing {filteredFaculty.length} clinicians.
                                </span>
                                <button
                                    onClick={() => {
                                        setSearchQuery("");
                                        setSelectedDept("All Departments");
                                        setSelectedRank("all");
                                    }}
                                    className="text-xs font-bold text-rose-600 hover:text-rose-800 transition-colors flex items-center gap-1"
                                >
                                    Clear All Filters <X size={12} />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* RESULTS AREA */}
                    <div className="mb-10 flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-slate-800 font-montserrat">
                            {selectedDept === "All Departments" ? "All Faculty Directory" : `${selectedDept} Wards`}
                        </h3>
                        <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                            {directoryFaculty.length} Doctors Found
                        </span>
                    </div>

                    {directoryFaculty.length === 0 ? (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-slate-50 border border-slate-100 rounded-[2rem] p-16 text-center text-slate-500 max-w-xl mx-auto"
                        >
                            <Stethoscope size={48} className="mx-auto text-slate-300 mb-4 animate-bounce" />
                            <h4 className="font-bold text-lg text-slate-800 mb-2">No Clinicians Found</h4>
                            <p className="text-sm leading-relaxed mb-6">
                                We couldn't find any doctor matching your current search parameters. Try broadening your keywords or removing filters.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedDept("All Departments");
                                    setSelectedRank("all");
                                }}
                                className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-slate-800 transition-colors"
                            >
                                Reset Search Parameters
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div 
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            <AnimatePresence mode="popLayout">
                                {directoryFaculty.map((doc, idx) => {
                                    const isHOD = doc.role.toLowerCase().includes("hod");
                                    return (
                                        <motion.div
                                            key={doc.name}
                                            layout
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.3 }}
                                            whileHover={{ y: -6 }}
                                            className={`bg-white p-8 rounded-[2.5rem] border transition-all duration-300 group flex flex-col justify-between relative overflow-hidden ${
                                                isHOD 
                                                ? "border-emerald-100 hover:border-emerald-300 hover:shadow-[0_20px_45px_rgba(16,185,129,0.08)] bg-gradient-to-b from-white to-emerald-50/5" 
                                                : "border-slate-100 hover:border-teal-100 hover:shadow-[0_20px_45px_rgba(20,184,166,0.06)]"
                                            }`}
                                        >
                                            {/* Grommet decorative watermark for HODs */}
                                            {isHOD && (
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/5 to-teal-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                                            )}

                                            <div>
                                                {/* Header (Avatar & Badge) */}
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden ${
                                                        isHOD 
                                                        ? "bg-emerald-50 text-emerald-600 group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:text-white" 
                                                        : "bg-slate-50 text-slate-500 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-indigo-600 group-hover:text-white"
                                                    } transition-all duration-300`}>
                                                        <Stethoscope size={22} strokeWidth={1.5} />
                                                    </div>
                                                    <div>
                                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                                                            {doc.dept}
                                                        </span>
                                                        <span className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[9px] font-bold ${
                                                            isHOD 
                                                            ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                                                            : "bg-slate-100 text-slate-600"
                                                        }`}>
                                                            {isHOD && <Sparkles size={10} className="animate-pulse" />}
                                                            {doc.role}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Details */}
                                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1 font-montserrat" style={{ fontFamily: serifFont }}>
                                                    {doc.name}
                                                </h3>
                                                <p className="text-xs font-semibold text-slate-500 mb-4">{doc.credentials}</p>
                                                
                                                <p className="text-xs text-slate-600 leading-relaxed min-h-[40px] mb-6">
                                                    {doc.specialty}
                                                </p>
                                            </div>

                                            {/* Bottom (Schedule button & Experience) */}
                                            <div className="border-t border-slate-100 pt-6 flex items-center justify-between mt-auto">
                                                <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                                                    {doc.exp}
                                                </span>
                                                <button
                                                    onClick={() => setActiveDoctorModal(doc)}
                                                    className={`px-5 py-2 rounded-full text-[10px] font-bold transition-all flex items-center gap-1.5 ${
                                                        isHOD 
                                                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-600/10" 
                                                        : "bg-slate-900 hover:bg-slate-800 text-white"
                                                    }`}
                                                >
                                                    View Hours <ChevronRight size={12} />
                                                </button>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* ===== ACADEMIC TEACHING METHODOLOGY ===== */}
            <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3 block">Pedagogical Framework</span>
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight font-montserrat" style={{ fontFamily: serifFont }}>
                                Hand-in-Hand Mentorship & Clinical Exposure
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-base">
                                <p>
                                    At BHRI, medical education is not confined to reading textbooks. Under our senior faculty's direct mentorship, MBBS scholars actively observe outpatient consultations, join surgical scrubs, and conduct hands-on laboratory diagnostic analyses.
                                </p>
                                <p>
                                    Our bedside teaching methods prioritize medical ethics, compassionate communication, and high-frequency training simulations, assuring our students achieve total clinical preparedness.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-6 mt-10">
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                        <CheckCircle size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-0.5">Live Case Studies</h4>
                                        <p className="text-xs text-slate-500">Real clinical scenarios discussed daily.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                                        <GraduationCap size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-0.5">MCQ Workstations</h4>
                                        <p className="text-xs text-slate-500">Systematic NEXT exam revisions.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] lg:h-[480px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
                        >
                            <Image 
                                src="/carousel-1.png"
                                alt="Academics training at BHRI"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== BOARD OF RECRUITMENT & ADVISORY COMMITMENTS ===== */}
            <section className="py-20 lg:py-24 bg-[#0a192f] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay" />
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight font-montserrat" style={{ fontFamily: serifFont }}>
                            Professional Ethics & Anti-Ragging Guarantees
                        </h2>
                        <p className="text-slate-400 text-base lg:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                            BHRI operates a highly transparent and supportive medical training system. Our expert grievance and anti-ragging committees maintain constant vigil to assure a secure, respectful academic campus.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <span className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                                <ShieldCheck size={18} /> Grievance Desk: +91-9060646592
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden sm:block" />
                            <span className="flex items-center gap-2 text-rose-400 text-sm font-semibold">
                                <Award size={18} /> Anti-Ragging Desk: +91-9060646592
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== DOCTOR SCHEDULE & PROFILE MODAL ===== */}
            <AnimatePresence>
                {activeDoctorModal && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                        onClick={() => setActiveDoctorModal(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            className="bg-white rounded-[3rem] w-full max-w-2xl overflow-hidden shadow-2xl relative border border-slate-100"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Close Button */}
                            <button
                                onClick={() => setActiveDoctorModal(null)}
                                className="absolute right-6 top-6 w-10 h-10 bg-slate-50 hover:bg-slate-100 text-slate-500 rounded-full flex items-center justify-center transition-colors z-20 border border-slate-100"
                            >
                                <X size={18} />
                            </button>

                            {/* Header Gradient */}
                            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-10 pt-14 text-white relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
                                
                                <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest block mb-1">
                                    {activeDoctorModal.dept}
                                </span>
                                <h3 className="text-3xl font-bold font-montserrat tracking-tight mb-2" style={{ fontFamily: serifFont }}>
                                    {activeDoctorModal.name}
                                </h3>
                                <p className="text-xs font-semibold text-slate-300 mb-1">{activeDoctorModal.credentials}</p>
                                <p className="text-[11px] bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full text-indigo-100 font-bold inline-block">
                                    {activeDoctorModal.role}
                                </p>
                            </div>

                            {/* Modal Body */}
                            <div className="p-10 space-y-8">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                                        <Info size={14} /> Clinical Focus & Specialty
                                    </h4>
                                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                                        {activeDoctorModal.specialty}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-100">
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                                            <Calendar size={14} /> Consultation Hours
                                        </h4>
                                        <div className="space-y-2">
                                            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-center">
                                                <Clock size={20} className="mx-auto text-blue-500 mb-2" />
                                                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider block mb-1">OPD Timing</span>
                                                <span className="text-sm font-bold text-slate-800 block mb-2">Mon – Sat | Morning & Evening</span>
                                                <a
                                                    href="/hospital/opd"
                                                    className="text-[10px] font-bold text-blue-600 hover:underline flex items-center justify-center gap-1"
                                                >
                                                    View Exact OPD Timetable <ChevronRight size={10} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                                            <Phone size={14} /> Direct Booking Helpline
                                        </h4>
                                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">OPD Booking Desk</span>
                                            <span className="text-lg font-black text-emerald-600 block mb-1">+91-8603048174</span>
                                            <span className="text-[9px] text-slate-500 leading-normal block">State doctor's department during the appointment call.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
