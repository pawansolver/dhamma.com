"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap, FileText, CheckCircle, Award, Users,
    ShieldCheck, ChevronRight, X, Phone, DollarSign,
    ClipboardList, MapPin, Sparkles, Send, Check
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

type StepKey = "neet" | "choice" | "allotment" | "reporting";

interface CounselingStep {
    title: string;
    stage: string;
    desc: string;
    instructions: string[];
    caution: string;
}

const counselingSteps: Record<StepKey, CounselingStep> = {
    neet: {
        title: "NEET-UG Exam &amp; Merit Rank",
        stage: "Stage 01 — Qualification Phase",
        desc: "All admissions are based strictly on merit ranks obtained in the NEET-UG examination conducted by the National Testing Agency (NTA). Candidates must meet the minimum cutoff percentiles.",
        instructions: [
            "Verify qualification status on standard NTA scorecards",
            "Monitor BCECEB portal for UGMAC rank generation",
            "Keep Roll Number and Application Number handy for state registration",
            "Keep the original Admit Card safe (required at reporting)"
        ],
        caution: "Rank cards must have clear, legible barcodes. Non-qualified NEET candidates are not eligible."
    },
    choice: {
        title: "BCECEB Choice Filling",
        stage: "Stage 02 — Online Counselling Choice",
        desc: "Eligible UGMAC candidates must log in to the official Bihar Combined Entrance Competitive Examination Board portal and select Dhamma Superspeciality Hospital Patna as their high priority preference.",
        instructions: [
            "Log in to bceceboard.bihar.gov.in during choice schedule",
            "Lock 'Dhamma Superspeciality Hospital' as primary medical seat choice",
            "Download and print the Locked Choice Slip",
            "Check round timelines continuously"
        ],
        caution: "Once choices are locked, no modifications are permitted. Locked choice slips must be preserved."
    },
    allotment: {
        title: "Seat Allotment Letter",
        stage: "Stage 03 — Allotment Declaration",
        desc: "BCECEB publishes round-wise provisional seat allotment results. Candidates allotted a seat at Dhamma Superspeciality Hospital must download their official allotment letters.",
        instructions: [
            "Log in to portal to check allotment status",
            "Accept the allotted seat and opt for upgrade status if desired",
            "Download the allotment letter (three copies)",
            "Ensure signature columns are intact"
        ],
        caution: "Failure to accept and download allotment letters within the designated window results in immediate cancellation of the seat."
    },
    reporting: {
        title: "Physical Reporting &amp; Dossier Verification",
        stage: "Stage 04 — Final Admission physical round",
        desc: "Report directly to the Dhamma Superspeciality Hospital Patna admission cell with original academic certificates, allotment letters, biometric forms, and tuition fee drafts.",
        instructions: [
            "Report within the date window specified in allotment letter",
            "Submit academic documents for official physical verification",
            "Perform digital biometric fingerprint verification",
            "Deposit fees and collect institutional admission receipt"
        ],
        caution: "Biometric discrepancy or missing original certificates results in automatic seat cancellation by the board."
    }
};

type FeeQuota = "state" | "management" | "nri";

interface FeeDetails {
    tuition: string;
    hostel: string;
    development: string;
    caution: string;
    total: string;
}

const feeStructure: Record<FeeQuota, FeeDetails> = {
    state: {
        tuition: "? 8,50,000 / Annum",
        hostel: "? 1,50,000 / Annum (Including Mess)",
        development: "? 50,000 (One-Time Payment)",
        caution: "? 50,000 (Refundable Deposit)",
        total: "? 11,00,000 (First Year Total)"
    },
    management: {
        tuition: "? 12,50,000 / Annum",
        hostel: "? 1,50,000 / Annum (Including Mess)",
        development: "? 50,000 (One-Time Payment)",
        caution: "? 50,000 (Refundable Deposit)",
        total: "? 15,00,000 (First Year Total)"
    },
    nri: {
        tuition: "$ 25,000 / Annum",
        hostel: "? 1,50,000 / Annum (Including Mess)",
        development: "? 50,000 (One-Time Payment)",
        caution: "? 50,000 (Refundable Deposit)",
        total: "$ 25,000 + ? 2,50,000 (First Year Total)"
    }
};

export default function AdmissionsPage() {
    const [selectedStep, setSelectedStep] = useState<StepKey>("neet");
    const [selectedQuota, setSelectedQuota] = useState<FeeQuota>("state");

    // Checklist State
    const [checklist, setChecklist] = useState<Record<number, boolean>>({
        0: false, 1: false, 2: false, 3: false, 4: false,
        5: false, 6: false, 7: false, 8: false, 9: false
    });

    const toggleCheck = (idx: number) => {
        setChecklist((prev) => ({ ...prev, [idx]: !prev[idx] }));
    };

    // Form State
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", neetRoll: "", neetScore: "", query: ""
    });

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.phone) {
            setFormSubmitted(true);
        }
    };

    const activeStep = counselingSteps[selectedStep];
    const activeFee = feeStructure[selectedQuota];

    const documentsChecklist = [
        "Provisional BCECEB Allotment Letter (Three original copies)",
        "NEET-UG Official Rank Card &amp; Admit Card",
        "Matriculation (10th) Passing Certificate &amp; Marksheet",
        "Intermediate (12th) Passing Certificate &amp; Marksheet",
        "School/College Leaving Certificate (SLC/CLC)",
        "Character Certificate from Head of Last Attended School",
        "Caste Certificate (For SC, ST, EBC, OBC, EWS candidates)",
        "Recent color passport photographs (10 copies)",
        "Migration Certificate (For other board candidates)",
        "Medical Fitness Certificate (Can be obtained at Dhamma Superspeciality Hospital Campus)"
    ];

    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>

            {/* HERO */}
            <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-[#0c2420] to-[#041a16] mix-blend-multiply opacity-95 z-10" />
                    <Image src="/admissions_hero.png" alt="Admissions Hub" fill className="object-cover" priority />
                </div>

                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto -mt-6">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-emerald-500/10 backdrop-blur-md rounded-full font-bold tracking-widest text-[10px] uppercase border border-emerald-500/30 text-emerald-300 mb-6">
                        <GraduationCap size={12} /> Secure Your Medical Seat
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-montserrat leading-tight" style={{ fontFamily: serifFont }}>
                        Admission Hub
                    </h1>
                    <p className="text-lg lg:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl mx-auto opacity-95">
                        Follow the structured NEET-UG counselling pathway, verify fees details, and pack standard dossiers for physical reporting at Dhamma Superspeciality Hospital.
                    </p>
                    <button
                        onClick={() => document.getElementById("steps")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-full shadow-lg shadow-emerald-600/30 transition-all text-xs uppercase tracking-wider"
                    >
                        Explore Counselling Steps
                    </button>
                </div>
            </section>

            {/* SEAT METRICS STRIP */}
            <section className="py-10 sm:py-12 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-x divide-slate-200">
                        <div>
                            <h3 className="text-3xl font-extrabold text-slate-900">150 Seats</h3>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Total MBBS Intake</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-extrabold text-slate-900">85% Seats</h3>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">State Government Quota</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-extrabold text-slate-900">15% Seats</h3>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Management/NRI Quota</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-extrabold text-slate-900">NMC</h3>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Recognized Board</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE COUNSELLING STAGE TIMELINE */}
            <section id="steps" className="py-16 sm:py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3 block">Admission Process</span>
                        <h2 className="section-heading" style={{ fontFamily: serifFont }}>NEET-UG Counselling Journey</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            Click through each counselling stage below to understand official timelines, Choice Locking regulations, and campus verification checklists.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Phase Tabs */}
                        <div className="lg:col-span-4 space-y-4">
                            {(Object.keys(counselingSteps) as StepKey[]).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedStep(key)}
                                    className={`w-full text-left p-6 rounded-[2rem] border transition-all duration-300 flex items-center justify-between group ${selectedStep === key
                                            ? "bg-slate-900 border-slate-900 text-white shadow-xl translate-x-2"
                                            : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100 hover:border-slate-200"
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${selectedStep === key ? "bg-emerald-500 text-white" : "bg-white text-slate-500 group-hover:text-emerald-600"
                                            } transition-colors shadow-sm shrink-0`}>
                                            {key === "neet" && <Award size={20} />}
                                            {key === "choice" && <FileText size={20} />}
                                            {key === "allotment" && <ClipboardList size={20} />}
                                            {key === "reporting" && <ShieldCheck size={20} />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xs font-montserrat truncate max-w-[180px]">{counselingSteps[key].title}</h4>
                                            <p className={`text-[9px] ${selectedStep === key ? "text-slate-400" : "text-slate-500"}`}>{counselingSteps[key].stage}</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className={`transition-transform ${selectedStep === key ? "rotate-90 text-emerald-500" : "text-slate-400 group-hover:translate-x-1"}`} />
                                </button>
                            ))}
                        </div>

                        {/* Interactive Showcase */}
                        <div className="lg:col-span-8 bg-slate-50 border border-slate-100 rounded-3xl sm:rounded-[3rem] p-6 sm:p-8 lg:p-12 shadow-sm relative overflow-hidden min-h-[400px] sm:min-h-[500px]">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedStep}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="border-b border-slate-200 pb-4 mb-6">
                                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block mb-2">{activeStep.stage}</span>
                                        <h3 className="text-2xl font-bold text-slate-900 font-montserrat" style={{ fontFamily: serifFont }}>
                                            {activeStep.title}
                                        </h3>
                                        <p className="text-slate-600 text-xs mt-3 leading-relaxed">{activeStep.desc}</p>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Required Guidelines:</h5>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {activeStep.instructions.map((inst, i) => (
                                                <div key={i} className="flex items-center gap-2 text-[11px] font-semibold text-slate-800">
                                                    <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                                                        <Check size={12} />
                                                    </div>
                                                    <span>{inst}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4 text-xs text-rose-800 leading-relaxed flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
                                        <span className="font-extrabold text-[10px] bg-rose-200/50 text-rose-900 px-2 py-0.5 rounded-full h-fit shrink-0 self-start">CRITICAL CAUTION</span>
                                        <p>{activeStep.caution}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE FEE STRUCTURE CALCULATOR */}
            <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-16">
                        <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3 block">Tuition Fees</span>
                        <h2 className="section-heading" style={{ fontFamily: serifFont }}>Institutional Fee Structure</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            Select admission quota below to preview standard audited tuition, hostel lodging, and cautions deposits for first professional years.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
                        {[
                            { label: "State Government Quota", value: "state" },
                            { label: "Management Quota", value: "management" },
                            { label: "NRI/International Quota", value: "nri" }
                        ].map((q) => (
                            <button
                                key={q.value}
                                onClick={() => setSelectedQuota(q.value as FeeQuota)}
                                className={`px-6 py-3 rounded-full text-xs font-bold transition-all border ${selectedQuota === q.value
                                        ? "bg-slate-900 border-slate-900 text-white shadow-lg"
                                        : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                                    }`}
                            >
                                {q.label}
                            </button>
                        ))}
                    </div>

                    {/* Fee details sheet */}
                    <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-3xl sm:rounded-[3rem] border border-slate-200/80 shadow-xl max-w-2xl mx-auto relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />

                        <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-6">
                            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block">Audit Sheet: {selectedQuota.toUpperCase()} QUOTA</span>
                            <span className="text-xs bg-slate-100 text-slate-600 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Session 2024-25</span>
                        </div>

                        <div className="space-y-4 text-xs text-slate-600 mb-8">
                            <div className="flex flex-col sm:flex-row justify-between border-b border-slate-100 pb-2 gap-1 sm:gap-0">
                                <span>Annual Tuition Fee:</span>
                                <span className="font-extrabold text-slate-950 sm:text-right">{activeFee.tuition}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between border-b border-slate-100 pb-2 gap-1 sm:gap-0">
                                <span>Hostel Rooms &amp; Mess (AC/Double sharing):</span>
                                <span className="font-extrabold text-slate-950 sm:text-right">{activeFee.hostel}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between border-b border-slate-100 pb-2 gap-1 sm:gap-0">
                                <span>Development Fee (One-Time Audit):</span>
                                <span className="font-extrabold text-slate-950 sm:text-right">{activeFee.development}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between pb-2 gap-1 sm:gap-0">
                                <span>Caution Security Money (Refundable):</span>
                                <span className="font-extrabold text-slate-950 sm:text-right">{activeFee.caution}</span>
                            </div>
                        </div>

                        <div className="bg-slate-950 text-white p-6 rounded-2xl text-center shadow-lg">
                            <span className="text-[9px] text-slate-400 font-bold block mb-1">TOTAL DEMAND DRAFT VALUE</span>
                            <h3 className="text-2xl font-black text-emerald-400 font-montserrat">{activeFee.total}</h3>
                            <p className="text-[8px] text-slate-400 uppercase tracking-wider mt-1">Drawn in favor of Dhamma Superspeciality Hospital, payable at Patna</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE DOCUMENT CHECKLIST */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    <div className="text-center mb-16">
                        <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-3 block">Reporting Dossier</span>
                        <h2 className="section-heading" style={{ fontFamily: serifFont }}>Dossier Pack List Checklist</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            Tick off each required original document below as you compile your physical file before reporting to our admissions desk.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl sm:rounded-[3rem] p-5 sm:p-8 lg:p-12 shadow-sm">
                        <div className="space-y-3">
                            {documentsChecklist.map((doc, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => toggleCheck(idx)}
                                    className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center gap-4 ${checklist[idx]
                                            ? "bg-emerald-50/50 border-emerald-300 text-slate-800"
                                            : "bg-white border-slate-100 text-slate-600 hover:border-slate-200"
                                        }`}
                                >
                                    <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all shrink-0 ${checklist[idx] ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-300 bg-white"
                                        }`}>
                                        {checklist[idx] && <Check size={14} />}
                                    </div>
                                    <span
                                        className={`text-xs font-semibold select-none ${checklist[idx] ? "line-through opacity-65" : ""}`}
                                        dangerouslySetInnerHTML={{ __html: doc }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* QUICK ENQUIRY GLASSMORPHIC PANEL */}
            <section className="py-24 bg-slate-950 text-white relative">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-3 block">Admissions Desk</span>
                            <h2 className="section-heading" style={{ fontFamily: serifFont }}>
                                Admission Query Counselling Cell
                            </h2>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                Have queries regarding choice filling ranks or payment schedules? Reach out directly to our dedicated admission desk team or drop a quick callback request.
                            </p>

                            <div className="space-y-4 mb-8 text-xs text-slate-300">
                                <div className="flex items-center gap-3">
                                    <Phone size={16} className="text-emerald-400" />
                                    <span>Helpline Desk: +91 7643990301 / +9176439 90302</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin size={16} className="text-emerald-400" />
                                    <span>Dhamma Superspeciality Hospital Admissions Desk, Opposite Canara Bank, Phulwari Sharif, Near AIIMS Gate No. 1, Patna, India, Bihar</span>
                                </div>
                            </div>
                        </div>

                        {/* Glassmorphic Form */}
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
                            {!formSubmitted ? (
                                <form onSubmit={handleFormSubmit} className="space-y-4 text-slate-100">
                                    <h3 className="text-lg font-bold mb-4 font-montserrat text-emerald-400">Request Callback</h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-emerald-500 text-white"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-emerald-500 text-white"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-emerald-500 text-white"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">NEET Roll No</label>
                                            <input
                                                type="text"
                                                value={formData.neetRoll}
                                                onChange={(e) => setFormData({ ...formData, neetRoll: e.target.value })}
                                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-emerald-500 text-white"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">NEET Score</label>
                                            <input
                                                type="number"
                                                value={formData.neetScore}
                                                onChange={(e) => setFormData({ ...formData, neetScore: e.target.value })}
                                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-emerald-500 text-white"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Your Enquiry Query</label>
                                        <textarea
                                            rows={3}
                                            value={formData.query}
                                            onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-emerald-500 text-white"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Send size={14} /> Submit Inquiry Call
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center py-10">
                                    <CheckCircle size={48} className="text-emerald-400 mx-auto mb-4 animate-bounce" />
                                    <h4 className="text-lg font-bold font-montserrat text-slate-100">Callback Registered!</h4>
                                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                                        Thank you, {formData.name}. Our chief admission advisor will contact you at {formData.phone} shortly.
                                    </p>
                                    <button
                                        onClick={() => setFormSubmitted(false)}
                                        className="mt-6 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-xl transition-all"
                                    >
                                        Submit Another Enquiry
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
