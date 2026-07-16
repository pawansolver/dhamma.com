"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
    CalendarDays, MapPin, Clock, FileText, ImageIcon, Camera,
    Search, ChevronLeft, ChevronRight, X,
} from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000/api";
const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE || "http://localhost:5000";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

interface ApiEvent {
    id: number;
    title: string;
    description: string;
    eventDate: string;
    eventTime: string | null;
    venue: string | null;
    thumbnail: string | null;
    pdfAttachment: string | null;
    isActive: boolean;
}

interface Pagination {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

const buildAssetUrl = (relative: string) =>
    `${ASSET_BASE}${relative.startsWith("/") ? "" : "/"}${relative}`;

const formatEventDate = (dateStr: string) => {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
};

const dateBadge = (dateStr: string) => {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return { day: "--", month: "" };
    return {
        day: d.getDate().toString().padStart(2, "0"),
        month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    };
};

export default function EventsPage() {
    const [events, setEvents] = useState<ApiEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState<Pagination | null>(null);
    const [lightbox, setLightbox] = useState<ApiEvent | null>(null);
    const limit = 9;

    useEffect(() => {
        const controller = new AbortController();

        const fetchEvents = async () => {
            setLoading(true);
            setError("");
            try {
                const params = new URLSearchParams({
                    isActive: "true",
                    page: String(page),
                    limit: String(limit),
                });
                if (search) params.append("search", search);

                const res = await fetch(`${API_BASE}/events?${params.toString()}`, {
                    signal: controller.signal,
                    cache: "no-store",
                });
                const data = await res.json();
                if (data.success) {
                    setEvents(Array.isArray(data.data) ? data.data : []);
                    setPagination(data.pagination || null);
                } else {
                    setError(data.message || "Failed to load events.");
                }
            } catch (err) {
                if ((err as Error).name !== "AbortError") {
                    setError("Server not reachable. Please try again.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
        return () => controller.abort();
    }, [page, search]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setPage(1);
        setSearch(searchInput.trim());
    };

    const totalPages = pagination?.totalPages || 1;

    return (
        <div className="bg-white min-h-screen" style={{ fontFamily: sansFont }}>
            {/* HERO */}
            <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-[#18081c] to-[#041a16] mix-blend-multiply opacity-90 z-10" />
                    <Image src="/carousel-1.png" alt="Events" fill className="object-cover opacity-60" priority />
                </div>
                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-fuchsia-500/10 backdrop-blur-md rounded-full font-bold tracking-widest text-[10px] uppercase border border-fuchsia-500/30 text-fuchsia-300 mb-6">
                        <Camera size={12} /> Institutional Events
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: serifFont }}>
                        Events &amp; Programs
                    </h1>
                    <p className="text-lg text-blue-100 font-medium leading-relaxed max-w-2xl mx-auto opacity-95">
                        Explore upcoming and recent events, cultural festivals, medical seminars and healthcare drives at Dhamma Institute of Medical Sciences Patna.
                    </p>
                </div>
            </section>

            {/* SEARCH BAR */}
            <section className="bg-slate-50 border-b border-slate-100 py-6">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <form onSubmit={handleSearch} className="flex max-w-md mx-auto gap-2">
                        <div className="relative flex-1">
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                placeholder="Search events…"
                                className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm outline-none focus:border-fuchsia-400"
                            />
                        </div>
                        <button type="submit" className="px-5 py-2.5 rounded-lg bg-fuchsia-600 text-white font-bold text-sm hover:bg-fuchsia-700 transition">
                            Search
                        </button>
                    </form>
                </div>
            </section>

            {/* EVENTS GRID */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="bg-slate-50 rounded-2xl border border-slate-100 h-[320px] animate-pulse" />
                            ))}
                        </div>
                    ) : error ? (
                        <div className="bg-white rounded-2xl border border-red-200 p-10 text-center text-red-600">{error}</div>
                    ) : events.length === 0 ? (
                        <div className="bg-slate-50 rounded-2xl border border-dashed border-slate-200 p-16 text-center text-slate-500">
                            <CalendarDays size={44} className="mx-auto mb-3 opacity-30" />
                            <p className="font-semibold text-lg mb-1">No events found.</p>
                            <p className="text-sm">{search ? `Nothing matched "${search}".` : "Please check back later."}</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {events.map((ev) => {
                                    const badge = dateBadge(ev.eventDate);
                                    return (
                                        <div
                                            key={ev.id}
                                            className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-fuchsia-200 transition overflow-hidden flex flex-col"
                                        >
                                            <div
                                                className="relative h-48 bg-slate-100 cursor-pointer"
                                                onClick={() => ev.thumbnail && setLightbox(ev)}
                                            >
                                                {ev.thumbnail ? (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img
                                                        src={buildAssetUrl(ev.thumbnail)}
                                                        alt={ev.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                                                        <ImageIcon size={40} />
                                                    </div>
                                                )}
                                                <div className="absolute top-3 left-3 bg-fuchsia-600 text-white rounded-lg px-3 py-1.5 text-center shadow-lg">
                                                    <span className="block text-lg font-extrabold leading-none">{badge.day}</span>
                                                    <span className="block text-[8px] font-bold uppercase tracking-wide">{badge.month}</span>
                                                </div>
                                                {ev.pdfAttachment && (
                                                    <a
                                                        href={buildAssetUrl(ev.pdfAttachment)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="absolute bottom-3 right-3 bg-white/95 backdrop-blur text-red-600 px-2.5 py-1 rounded-lg shadow text-[10px] font-bold inline-flex items-center gap-1 hover:bg-white transition"
                                                    >
                                                        <FileText size={12} /> PDF
                                                    </a>
                                                )}
                                            </div>

                                            <div className="p-6 flex-1 flex flex-col">
                                                <div className="flex items-center gap-3 mb-2 flex-wrap">
                                                    <span className="text-xs font-bold text-fuchsia-600">{formatEventDate(ev.eventDate)}</span>
                                                    {ev.eventTime && (
                                                        <span className="text-[10px] text-slate-400 flex items-center gap-1">
                                                            <Clock size={10} /> {ev.eventTime}
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 className="font-bold text-slate-900 text-base mb-2 leading-snug">{ev.title}</h3>
                                                <p className="text-xs text-slate-500 line-clamp-3 flex-1">{ev.description}</p>
                                                {ev.venue && (
                                                    <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-3 pt-3 border-t border-slate-100">
                                                        <MapPin size={11} /> {ev.venue}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-2 mt-12">
                                    <button
                                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                                        disabled={page <= 1}
                                        className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40"
                                    >
                                        <ChevronLeft size={16} />
                                    </button>
                                    <span className="text-sm text-slate-600 font-medium px-3">
                                        Page {page} of {totalPages}
                                    </span>
                                    <button
                                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                        disabled={page >= totalPages}
                                        className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40"
                                    >
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* LIGHTBOX */}
            {lightbox && (
                <div
                    onClick={() => setLightbox(null)}
                    className="fixed inset-0 bg-slate-950/95 z-50 flex items-center justify-center p-6 backdrop-blur-sm"
                >
                    <button
                        onClick={() => setLightbox(null)}
                        className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center border border-white/15 transition"
                    >
                        <X size={20} />
                    </button>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl"
                    >
                        {lightbox.thumbnail && (
                            <div className="relative h-80 md:h-[400px] w-full bg-slate-900">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={buildAssetUrl(lightbox.thumbnail)} alt={lightbox.title} className="w-full h-full object-contain" />
                            </div>
                        )}
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
                                <span className="text-xs font-bold text-fuchsia-600">{formatEventDate(lightbox.eventDate)}</span>
                                {lightbox.eventTime && (
                                    <span className="text-xs text-slate-400 flex items-center gap-1"><Clock size={12} /> {lightbox.eventTime}</span>
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2">{lightbox.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-4">{lightbox.description}</p>
                            <div className="flex items-center justify-between flex-wrap gap-3">
                                {lightbox.venue && (
                                    <p className="text-sm text-slate-500 flex items-center gap-1"><MapPin size={14} /> {lightbox.venue}</p>
                                )}
                                {lightbox.pdfAttachment && (
                                    <a
                                        href={buildAssetUrl(lightbox.pdfAttachment)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 transition"
                                    >
                                        <FileText size={14} /> Download PDF
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
