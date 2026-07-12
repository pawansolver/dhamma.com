"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Briefcase, FileText, CheckCircle, ShieldCheck, ChevronRight,
    X, Phone, Mail, Award, Users, Stethoscope, Star, Send, Upload, Check
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

interface JobOpening {
    id: string;
    title: string;
    department: "Clinical" | "Academic" | "Nursing" | "Admin";
    experience: string;
    vacancies: string;
    desc: string;
    duties: string[];
}

const jobOpeningsList: JobOpening[] = [
    {
        id: "1",
        title: "Senior Resident — Department of General Medicine",
        department: "Clinical",
        experience: "MD / DNB in General Medicine with 0-3 Years experience",
        vacancies: "2 Positions Open",
        desc: "Supervise outpatient care units, emergency medical wards, and bedside clinical training galleries for MBBS scholars under the HOD's guidance.",
        duties: [
            "Conducting daily ward rounds in emergency and medical ICU wards",
            "Supervising clinical case taking sessions for MBBS final years",
            "Managing acute poisoning, cardiac, and diabetic emergencies",
            "Participating in community medical health camps"
        ]
    },
    {
        id: "2",
        title: "Assistant Professor — Department of Biochemistry",
        department: "Academic",
        experience: "MD in Medical Biochemistry / Ph.D. with NMC teaching records",
        vacancies: "1 Position Open",
        desc: "Lead medical academic modules, direct diagnostic lab reference boards, check MBBS practical logbooks, and lead student research registrations.",
        duties: [
            "Delivering lectures on molecular genetics and metabolism indices",
            "Evaluating internal assessment practicals and CBME skill-books",
            "Guiding student ICMR paper registries and research projects",
            "Supervising routine automated diagnostic quality control"
        ]
    },
    {
        id: "3",
        title: "Staff Nurse (Grade II) — Critical Care ICU",
        department: "Nursing",
        experience: "B.Sc. Nursing / GNM with 2+ Years ICU clinical registry",
        vacancies: "6 Positions Open",
        desc: "Provide critical bedside ICU nursing care, operate vital ventilators, monitor real-time ECG telemetry indices, and coordinate night shifts.",
        duties: [
            "Monitoring ventilators, arterial lines, and infusion dosages",
            "Maintaining active medication administration charts (MAR)",
            "Assisting doctors in central line placements and intubations",
            "Strict compliance to hospital infection control standards"
        ]
    },
    {
        id: "4",
        title: "Administrative Officer — Billing &amp; Admissions",
        department: "Admin",
        experience: "MBA in Healthcare / MHA with 3+ Years hospital operations",
        vacancies: "1 Position Open",
        desc: "Coordinate patient intake channels, verify insurance desk operations, supervise cashier desks, and prepare daily audit sheets.",
        duties: [
            "Managing patient registration and discharge workflows",
            "Verifying TPA insurance claims and government health schemes",
            "Maintaining cash ledger balance sheets",
            "Coordinating helpdesk queries and customer assistance"
        ]
    }
];

export default function CareerPage() {
    const [activeTab, setActiveTab] = useState<"All" | "Clinical" | "Academic" | "Nursing" | "Admin">("All");
    const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Application Form state
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", exp: "", currentCTC: "", cover: ""
    });

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.phone) {
            setFormSubmitted(true);
        }
    };

    const filteredJobs = jobOpeningsList.filter((job) => {
        return activeTab === "All" || job.department === activeTab;
    });

    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>

            {/* HERO */}
            <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-[#0a1829] to-[#0a2624] mix-blend-multiply opacity-90 z-10" />
                    <Image src="/career_hero.png" alt="Careers" fill className="object-cover" priority />
                </div>

                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto -mt-6">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-teal-500/10 backdrop-blur-md rounded-full font-bold tracking-widest text-[10px] uppercase border border-teal-500/30 text-teal-300 mb-6">
                        <Briefcase size={12} /> Make a Real Impact on Lives
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-montserrat leading-tight" style={{ fontFamily: serifFont }}>
                        Careers at Dhamma Superspeciality Hospital
                    </h1>
                    <p className="text-lg lg:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl mx-auto opacity-95">
                        Join a fast-growing, prestigious medical academy and research hospital. Shape the future of medical education and clinical care in Patna.
                    </p>
                    <button
                        onClick={() => document.getElementById("jobs")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-3.5 bg-gradient-to-r from-teal-600 to-indigo-600 text-white font-bold rounded-full shadow-lg shadow-teal-600/30 transition-all text-xs uppercase tracking-wider"
                    >
                        Explore Open Vacancies
                    </button>
                </div>
            </section>

            {/* CORE VALUE PILLARS */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-3 block">Why Choose Dhamma Superspeciality Hospital?</span>
                        <h2 className="section-heading" style={{ fontFamily: serifFont }}>Fostering Growth &amp; Care</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            We believe that supporting our medical, nursing, and administrative staff is essential to delivering compassionate, premium patient outcomes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-600 shadow-sm mb-6">
                                <Stethoscope size={24} />
                            </div>
                            <h3 className="text-lg font-bold mb-3 font-montserrat text-slate-900">Advanced Infrastructure</h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Practice or instruct with high-fidelity computerized diagnostic panels, modular ICU bays, fully automated reference biochemistry labs, and state-of-the-art radiology.
                            </p>
                        </div>

                        <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-600 shadow-sm mb-6">
                                <Award size={24} />
                            </div>
                            <h3 className="text-lg font-bold mb-3 font-montserrat text-slate-900">Research &amp; CME Grants</h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Access subsidized financial support for academic research paper submissions, PubMed journal listings, WHO seminars, and Continuing Medical Education registries.
                            </p>
                        </div>

                        <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-600 shadow-sm mb-6">
                                <Users size={24} />
                            </div>
                            <h3 className="text-lg font-bold mb-3 font-montserrat text-slate-900">Elite Resident Allowances</h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Work comfortably with standard institutional medical care benefits, structured resident hostel housings, child school support allowances, and competitive pay scales.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE JOBS BOARD CONSOLE */}
            <section id="jobs" className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    <div className="text-center mb-16">
                        <span className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-3 block">Vacancies Board</span>
                        <h2 className="section-heading" style={{ fontFamily: serifFont }}>Active Openings</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            Use the quick department tabs below to filter our clinical, academic, nursing, or administrative vacancy logs immediately.
                        </p>
                    </div>

                    {/* Department Tabs */}
                    <div className="flex justify-center gap-3 flex-wrap mb-12">
                        {[
                            { label: "All Departments", value: "All" },
                            { label: "Clinical / Medical", value: "Clinical" },
                            { label: "Academic Faculty", value: "Academic" },
                            { label: "Nursing Staff", value: "Nursing" },
                            { label: "Administrative Roles", value: "Admin" }
                        ].map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveTab(tab.value as any)}
                                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${activeTab === tab.value
                                        ? "bg-slate-900 border-slate-900 text-white shadow-md"
                                        : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Jobs Deck */}
                    <div className="max-w-4xl mx-auto space-y-6">
                        {filteredJobs.length === 0 ? (
                            <div className="text-center py-16 bg-white border border-slate-100 rounded-[2rem] text-slate-400">
                                <Briefcase size={48} className="mx-auto text-slate-200 mb-4 animate-pulse" />
                                <h4 className="font-bold text-sm">No Active Openings Found</h4>
                                <p className="text-xs mt-1">Submit an unsolicited application below and our HR team will register your resume.</p>
                            </div>
                        ) : (
                            <AnimatePresence mode="popLayout">
                                {filteredJobs.map((job) => (
                                    <motion.div
                                        key={job.id}
                                        layout
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white rounded-[2.5rem] p-8 border border-slate-200/80 hover:border-teal-200 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                                    >
                                        <div className="space-y-3 max-w-xl">
                                            <div className="flex items-center gap-3">
                                                <span className="text-[8px] bg-teal-50 border border-teal-100 text-teal-700 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">{job.department} Role</span>
                                                <span className="text-[8px] bg-slate-100 text-slate-600 font-bold px-3 py-1 rounded-full uppercase tracking-wider">{job.vacancies}</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 font-montserrat leading-snug group-hover:underline">
                                                {job.title}
                                            </h3>
                                            <p className="text-xs text-slate-500 leading-relaxed">{job.desc}</p>

                                            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] text-slate-400 font-semibold border-t border-slate-100 pt-3">
                                                <span>Experience: {job.experience}</span>
                                                <span>—</span>
                                                <span>Location: Patna Campus</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setSelectedJob(job)}
                                            className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl text-[10px] uppercase tracking-wider hover:bg-teal-600 hover:-translate-y-0.5 transition-all shrink-0 w-fit self-end md:self-center"
                                        >
                                            Apply for Role
                                        </button>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        )}
                    </div>
                </div>
            </section>

            {/* UNSOLICITED GENERAL RESUME DROP */}
            <section className="py-24 bg-white relative">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-slate-950 text-white rounded-[3rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <span className="text-teal-400 font-bold text-xs uppercase tracking-widest mb-3 block">Future Opportunities</span>
                            <h2 className="section-heading" style={{ fontFamily: serifFont }}>Drop Your CV / Resume</h2>
                            <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                                Don't see an exact matching profile open? Drop your resume in our global applicant directory. Our talent search team regularly screens this vault for custom clinical recruitments.
                            </p>
                        </div>

                        {!formSubmitted ? (
                            <form onSubmit={handleFormSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Total Years Experience</label>
                                        <input
                                            type="text"
                                            value={formData.exp}
                                            onChange={(e) => setFormData({ ...formData, exp: e.target.value })}
                                            placeholder="e.g. 3 Years, Fresh Graduate"
                                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Brief Statement / Department Interest</label>
                                    <textarea
                                        rows={3}
                                        value={formData.cover}
                                        onChange={(e) => setFormData({ ...formData, cover: e.target.value })}
                                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                                >
                                    <Send size={14} /> Submit Application Dossier
                                </button>
                            </form>
                        ) : (
                            <div className="text-center py-8">
                                <CheckCircle size={48} className="text-teal-400 mx-auto mb-4 animate-bounce" />
                                <h4 className="text-lg font-bold font-montserrat text-slate-100">Application Received!</h4>
                                <p className="text-xs text-slate-400 mt-2 leading-relaxed max-w-sm mx-auto">
                                    Thank you, {formData.name}. Our Chief HR Advisor will register your clinical credentials and contact you at {formData.phone} if a suitable profile matches your profile.
                                </p>
                                <button
                                    onClick={() => setFormSubmitted(false)}
                                    className="mt-6 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-xl transition-all"
                                >
                                    Submit Another Application
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* APPLY MODAL */}
            <AnimatePresence>
                {selectedJob && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedJob(null)}
                        className="fixed inset-0 bg-slate-950/85 z-50 flex items-center justify-center p-6 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 15 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 15 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[2.5rem] overflow-hidden max-w-xl w-full border border-slate-200 shadow-2xl relative p-8"
                        >
                            <button
                                onClick={() => setSelectedJob(null)}
                                className="absolute top-6 right-6 w-10 h-10 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-full flex items-center justify-center border border-slate-150 transition-colors"
                            >
                                <X size={18} />
                            </button>

                            <div className="border-b border-slate-100 pb-4 mb-6">
                                <span className="text-[8px] bg-teal-50 text-teal-700 border border-teal-100 font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider block h-fit w-fit mb-2">{selectedJob.department} Division</span>
                                <h3 className="text-xl font-bold text-slate-900 font-montserrat leading-tight" dangerouslySetInnerHTML={{ __html: selectedJob.title }} />
                                <p className="text-slate-500 text-[10px] mt-1 font-bold">Lending desk window: {selectedJob.vacancies} — patna campus</p>
                            </div>

                            <div className="space-y-4 mb-6">
                                <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Key Duties &amp; Responsibilities:</h4>
                                <div className="space-y-2">
                                    {selectedJob.duties.map((duty, idx) => (
                                        <div key={idx} className="flex items-start gap-2.5 text-[11px] font-semibold text-slate-800 leading-snug">
                                            <div className="w-5 h-5 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 shrink-0 mt-0.5">
                                                <Check size={12} />
                                            </div>
                                            <span>{duty}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Dynamic mini application */}
                            {!formSubmitted ? (
                                <form onSubmit={handleFormSubmit} className="space-y-3 border-t border-slate-100 pt-4">
                                    <h4 className="text-[10px] font-bold text-teal-600 uppercase tracking-wider">Quick Application Form</h4>

                                    <div className="grid grid-cols-2 gap-3">
                                        <input
                                            type="text"
                                            required
                                            placeholder="Your Name *"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-teal-500 text-slate-800"
                                        />
                                        <input
                                            type="tel"
                                            required
                                            placeholder="Phone Number *"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-teal-500 text-slate-800"
                                        />
                                    </div>

                                    <input
                                        type="email"
                                        required
                                        placeholder="Email Address *"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-teal-500 text-slate-800"
                                    />

                                    <div className="border-2 border-dashed border-slate-200 hover:border-teal-400 transition-colors p-4 rounded-xl text-center cursor-pointer">
                                        <Upload className="mx-auto text-slate-400 mb-1" size={16} />
                                        <span className="text-[9px] font-bold text-slate-500 block">Click to attach CV / Resume (PDF / Doc)</span>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-teal-500 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider hover:bg-teal-600 transition-colors"
                                    >
                                        Submit Application
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center py-6 border-t border-slate-100 pt-6">
                                    <CheckCircle size={36} className="text-teal-500 mx-auto mb-2 animate-bounce" />
                                    <h4 className="font-bold text-sm text-slate-800">Position Applied Successfully!</h4>
                                    <p className="text-[10px] text-slate-500 mt-1">Thank you, {formData.name}. Our HR desk will contact you at {formData.phone} shortly.</p>
                                    <button
                                        onClick={() => {
                                            setFormSubmitted(false);
                                            setSelectedJob(null);
                                        }}
                                        className="mt-4 px-6 py-2 bg-slate-900 text-white text-[9px] font-bold rounded-lg uppercase tracking-wider"
                                    >
                                        Close Portal
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
