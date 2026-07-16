"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search, Filter, X, Star, GraduationCap, Briefcase,
    Building2, Clock, Phone, ChevronRight, Users
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000/api";
const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE || "http://localhost:5000";

// ─── Data Types ────────────────────────────────
type Doctor = {
    id: number;
    name: string;
    designation: string;
    department: string;
    experience: string;
    photo: string | null;
};


const DESIGNATION_FILTERS = [
    { label: "All", value: "all" },
    { label: "HOD", value: "hod" },
    { label: "Professor", value: "professor" },
    { label: "Associate Prof.", value: "associate" },
    { label: "Assistant Prof.", value: "assistant" },
];

// Initials avatar color palette
const AVATAR_COLORS = [
    "from-blue-600 to-indigo-700",
    "from-emerald-600 to-teal-700",
    "from-purple-600 to-violet-700",
    "from-rose-600 to-pink-700",
    "from-amber-600 to-orange-700",
    "from-cyan-600 to-sky-700",
];

function getInitials(name: string) {
    return name
        .split(" ")
        .filter((w) => w.startsWith("Dr.") === false && w !== "&")
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase();
}

export default function FacultyDoctorsPage() {
    const [search, setSearch] = useState("");
    const [deptFilter, setDeptFilter] = useState("All Departments");
    const [desigFilter, setDesigFilter] = useState("all");
    const [modal, setModal] = useState<Doctor | null>(null);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 40;

    const [facultyList, setFacultyList] = useState<Doctor[]>([]);
    const [apiLoading, setApiLoading] = useState(true);
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        setApiLoading(true);
        fetch(`${API_BASE}/faculty`)
            .then((r) => r.json())
            .then((d) => {
                if (d.success && Array.isArray(d.data)) {
                    const normalized = d.data.map((f: any) => ({
                        id: f.id,
                        name: f.name,
                        designation: f.designation || f.role || "",
                        department: f.department || f.dept || "",
                        experience: f.experience || f.exp || "",
                        photo: f.photo
                            ? f.photo.startsWith("http") ? f.photo : `${ASSET_BASE}${f.photo}`
                            : null,
                    }));
                    setFacultyList(normalized);
                    setApiError(false);
                } else {
                    setApiError(true);
                }
            })
            .catch(() => setApiError(true))
            .finally(() => setApiLoading(false));
    }, []);

    const allDepts = ["All Departments", ...Array.from(new Set(facultyList.map((f) => f.department))).filter(Boolean).sort()];

    const filtered = facultyList.filter((f) => {
        const q = search.toLowerCase();
        const matchSearch =
            !q ||
            f.name.toLowerCase().includes(q) ||
            f.department.toLowerCase().includes(q) ||
            f.designation.toLowerCase().includes(q);

        const matchDept = deptFilter === "All Departments" || f.department === deptFilter;

        let matchDesig = true;
        if (desigFilter === "hod") matchDesig = f.designation.toLowerCase().includes("hod");
        else if (desigFilter === "professor") matchDesig = f.designation.toLowerCase().includes("professor") && !f.designation.toLowerCase().includes("associate") && !f.designation.toLowerCase().includes("assistant");
        else if (desigFilter === "associate") matchDesig = f.designation.toLowerCase().includes("associate");
        else if (desigFilter === "assistant") matchDesig = f.designation.toLowerCase().includes("assistant");

        return matchSearch && matchDept && matchDesig;
    });

    return (
        <div className="min-h-screen bg-[#f4f6fb]" style={{ fontFamily: sansFont }}>

            {/* ── HERO ── */}
            <section className="relative bg-gradient-to-br from-[#0f2460] via-[#1a3a8f] to-[#0e6ab5] py-20 px-6 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-6">
                        <Users size={12} /> Academic Faculty Directory
                    </span>
                    <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight" style={{ fontFamily: serifFont }}>
                        Our Distinguished Faculty
                    </h1>
                    <p className="text-blue-200 text-base lg:text-lg max-w-2xl mx-auto">
                        Meet the experienced medical professionals shaping the future of healthcare at Dhamma Institute of Medical Sciences Patna.
                    </p>
                </div>
            </section>

            {/* ── FILTERS ── */}
            <section className="sticky top-0 z-30 bg-white shadow-md border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-3 items-center">

                    {/* Search */}
                    <div className="relative flex-1 min-w-0 w-full md:max-w-xs">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9333ea]" />
                        <input
                            value={search}
                            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                            placeholder="Search name, department..."
                            className="w-full pl-9 pr-8 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400"
                        />
                        {search && (
                            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                                <X size={14} />
                            </button>
                        )}
                    </div>

                    {/* Department Dropdown */}
                    <div className="relative w-full md:max-w-xs">
                        <Building2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9333ea]" />
                        <select
                            value={deptFilter}
                            onChange={(e) => { setDeptFilter(e.target.value); setCurrentPage(1); }}
                            className="w-full pl-8 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 cursor-pointer"
                        >
                            {allDepts.map((d) => <option key={d}>{d}</option>)}
                        </select>
                    </div>

                    {/* Designation Tabs */}
                    <div className="flex flex-wrap gap-2">
                        {DESIGNATION_FILTERS.map((f) => (
                            <button
                                key={f.value}
                                onClick={() => { setDesigFilter(f.value); setCurrentPage(1); }}
                                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${desigFilter === f.value
                                    ? "bg-[#1a3a8f] text-white shadow-sm"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    {/* Count */}
                    <span className="ml-auto text-xs text-slate-500 font-semibold whitespace-nowrap">
                        {filtered.length} Faculty Found
                    </span>
                </div>
            </section>

            {/* ── CARD GRID ── */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                {apiLoading ? (
                    <div className="flex flex-col items-center justify-center py-24 text-slate-400">
                        <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4" />
                        <p className="font-semibold text-sm">Loading faculty directory...</p>
                    </div>
                ) : apiError ? (
                    <div className="text-center py-20 text-red-400">
                        <Users size={48} className="mx-auto mb-3 opacity-40 text-red-300" />
                        <p className="font-semibold text-slate-700">Failed to load data from server.</p>
                        <button onClick={() => window.location.reload()} className="mt-4 px-6 py-2 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-slate-800">Retry</button>
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="text-center py-20 text-slate-400">
                        <Users size={48} className="mx-auto mb-3 opacity-40" />
                        <p className="font-semibold">No faculty found matching your filters.</p>
                    </div>
                ) : (
                    <>
                        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            <AnimatePresence mode="popLayout">
                                {filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((doc, idx) => {
                                    const isHOD = doc.designation.toLowerCase().includes("hod");
                                const colorClass = AVATAR_COLORS[idx % AVATAR_COLORS.length];
                                return (
                                    <motion.div
                                        key={doc.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.25, delay: idx * 0.04 }}
                                        className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-row p-4 gap-4 border border-slate-100 items-stretch group"
                                    >
                                        {/* ── Info Area (Left) ── */}
                                        <div className="flex flex-col flex-1 justify-between">
                                            <div>
                                                <h3 className="font-bold text-[15px] text-slate-800 leading-tight mb-1 group-hover:text-[#9333ea] transition-colors">
                                                    {doc.name}
                                                </h3>
                                                <p className="text-[12px] font-semibold text-slate-700 mb-0.5">
                                                    {doc.designation}
                                                </p>
                                                <p className="text-[12px] text-slate-500 mb-2 line-clamp-1">
                                                    {doc.department}
                                                </p>
                                                
                                                <div className="flex items-center gap-1.5 text-slate-500">
                                                    <Clock size={12} className="text-[#9333ea]" />
                                                    <span className="text-[11px] font-medium">{doc.experience || "Dhamma Institute of Medical Sciences Patna"}</span>
                                                </div>
                                            </div>

                                            {/* View Details Button */}
                                            <button
                                                onClick={() => setModal(doc)}
                                                className="mt-4 px-4 py-2 rounded-lg bg-[#f3e8ff] hover:bg-[#e9d5ff] text-[#9333ea] text-[11px] font-bold tracking-wide transition-colors w-max"
                                            >
                                                View Profile
                                            </button>
                                        </div>

                                        {/* ── Photo Area (Right) ── */}
                                        <div className="w-24 h-32 md:w-28 md:h-36 shrink-0 rounded-xl overflow-hidden border-[1.5px] border-[#d8b4fe] relative bg-slate-50">
                                            {doc.photo ? (
                                                <img
                                                    src={doc.photo}
                                                    alt={doc.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${colorClass}`}>
                                                    <span className="text-3xl font-black text-white/90 tracking-tight" style={{ fontFamily: serifFont }}>
                                                        {getInitials(doc.name)}
                                                    </span>
                                                </div>
                                            )}

                                            {/* HOD Badge */}
                                            {isHOD && (
                                                <div className="absolute top-1 right-1 bg-amber-400 text-amber-900 text-[8px] font-black px-1.5 py-0.5 rounded flex items-center gap-0.5 shadow">
                                                    <Star size={7} className="fill-amber-900" /> HOD
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>

                    {/* Pagination Controls */}
                    {filtered.length > itemsPerPage && (
                        <div className="flex justify-center items-center gap-4 mt-12">
                            <button
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                            >
                                Previous
                            </button>
                            <span className="text-sm font-semibold text-slate-600">
                                Page {currentPage} of {Math.ceil(filtered.length / itemsPerPage)}
                            </span>
                            <button
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filtered.length / itemsPerPage)))}
                                disabled={currentPage === Math.ceil(filtered.length / itemsPerPage)}
                                className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
                )}
            </section>

            {/* ── MODAL ── */}
            <AnimatePresence>
                {modal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setModal(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 30 }}
                            className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="bg-gradient-to-br from-[#0f2460] to-[#1a3a8f] p-8 text-white relative">
                                <button
                                    onClick={() => setModal(null)}
                                    className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <X size={16} />
                                </button>

                                {/* Avatar in modal */}
                                <div className={`w-24 h-24 rounded-2xl mb-4 flex items-center justify-center bg-white shadow-lg overflow-hidden`}>
                                    {modal.photo ? (
                                        <img src={modal.photo} alt={modal.name} className="w-full h-full object-contain" />
                                    ) : (
                                        <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${AVATAR_COLORS[modal.id % AVATAR_COLORS.length]}`}>
                                            <span className="text-3xl font-black text-white" style={{ fontFamily: serifFont }}>
                                                {getInitials(modal.name)}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <h2 className="text-2xl font-bold leading-tight" style={{ fontFamily: serifFont }}>{modal.name}</h2>
                                <p className="text-blue-200 text-sm mt-1">{modal.designation}</p>
                            </div>

                            {/* Modal Body */}
                            <div className="p-8 space-y-4">

                                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl">
                                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                        <Briefcase size={18} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Designation</p>
                                        <p className="text-sm font-bold text-slate-800 mt-0.5">{modal.designation}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-2xl">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                                        <Building2 size={18} className="text-indigo-600" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Department</p>
                                        <p className="text-sm font-bold text-slate-800 mt-0.5">{modal.department}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                                        <Clock size={18} className="text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Experience</p>
                                        <p className="text-sm font-bold text-slate-800 mt-0.5">{modal.experience}</p>
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-slate-100">
                                    <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">OPD Booking</p>
                                            <p className="text-base font-black text-emerald-600 mt-0.5">+91 7643990301 / +9176439 90302</p>
                                        </div>
                                        <Phone size={20} className="text-slate-300" />
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
