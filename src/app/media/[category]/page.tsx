"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useBooking } from "@/context/BookingContext";
import { ChevronRight, Calendar, Building2, Search, ChevronLeft } from "lucide-react";

// ─── TYPES ───
type MediaItem = {
    id: string;
    title: string;
    hospital: string;
    date: string;
    slug: string;
    category: string;
};

// ─── HARDCODED DATA ───
const mediaData: Record<string, MediaItem[]> = {
    "press-release": [
        {
            id: "pr-1",
            title: "Dhamma Institute of Medical Sciences Restores Pain Free Mobility in 38 Year Old Woman Post Advanced Cartilage Repair Surgery",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 30, 2026",
            slug: "pain-free-mobility-cartilage-repair",
            category: "press-release"
        },
        {
            id: "pr-2",
            title: "Dhamma Institute of Medical Sciences Marks 2500 Bone Marrow Transplants Transforming Lives Through Advanced Blood Disorder Care",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 30, 2026",
            slug: "bone-marrow-transplants-milestone",
            category: "press-release"
        },
        {
            id: "pr-3",
            title: "Dhamma Successfully Treats Rare Abdominal Angina in 42-Year-Old Woman Through Advanced Minimally Invasive Angioplasty",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 29, 2026",
            slug: "rare-abdominal-angina-treatment",
            category: "press-release"
        },
        {
            id: "pr-4",
            title: "After 18 Month Cancer Battle Australian Patient Travels to India for Specialised Robotic Rectal Cancer Surgery",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 24, 2026",
            slug: "robotic-rectal-cancer-surgery",
            category: "press-release"
        },
        {
            id: "pr-5",
            title: "Blind for Months After Accident 60 Year Old Farmer Regains Vision Following Synthetic Intelligence Assisted Surgery at Dhamma",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 23, 2026",
            slug: "farmer-regains-vision",
            category: "press-release"
        },
        {
            id: "pr-6",
            title: "First in Bihar Dhamma Institute of Medical Sciences Introduces Minimally Invasive VABB Technique for Scar Minimal Removal of Benign Breast Lumps",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 23, 2026",
            slug: "vabb-technique-breast-lumps",
            category: "press-release"
        },
        {
            id: "pr-7",
            title: "Dhamma Institute of Medical Sciences Performs Successful Complex Spine Surgery on 72-Year-Old Patient Using Advanced Navigation Technology",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 20, 2026",
            slug: "complex-spine-surgery",
            category: "press-release"
        },
        {
            id: "pr-8",
            title: "Dhamma Institute of Medical Sciences Launches Free Health Camp for Rural Communities in Gaya District Covering 500+ Patients",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 18, 2026",
            slug: "free-health-camp-gaya",
            category: "press-release"
        },
        {
            id: "pr-9",
            title: "Dhamma Successfully Treats 5-Year-Old Child with Rare Congenital Heart Defect Through Open Heart Surgery",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 15, 2026",
            slug: "child-congenital-heart-surgery",
            category: "press-release"
        },
        {
            id: "pr-10",
            title: "Advanced Knee Replacement Surgery at Dhamma Helps 65-Year-Old Farmer Walk Again After Years of Arthritis Pain",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 12, 2026",
            slug: "knee-replacement-farmer",
            category: "press-release"
        }
    ],
    "media-coverage": [
        {
            id: "mc-1",
            title: "Dhamma Institute of Medical Sciences Featured in National Healthcare Excellence Awards 2026",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 28, 2026",
            slug: "national-healthcare-excellence-awards",
            category: "media-coverage"
        },
        {
            id: "mc-2",
            title: "Times of India Covers Dhamma's Revolutionary Approach to Rural Healthcare in Bihar",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 25, 2026",
            slug: "toi-rural-healthcare-coverage",
            category: "media-coverage"
        },
        {
            id: "mc-3",
            title: "NDTV Health Feature: How Dhamma Institute of Medical Sciences is Bridging the Healthcare Gap in Eastern India",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 22, 2026",
            slug: "ndtv-healthcare-gap-feature",
            category: "media-coverage"
        },
        {
            id: "mc-4",
            title: "Hindustan Times Highlights Dhamma's Telemedicine Initiative Reaching 100+ Villages in Bihar",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 19, 2026",
            slug: "ht-telemedicine-initiative",
            category: "media-coverage"
        },
        {
            id: "mc-5",
            title: "Dainik Bhaskar Reports on Dhamma's Free Cardiac Screening Camp for Underprivileged Communities",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 16, 2026",
            slug: "dainik-bhaskar-cardiac-screening",
            category: "media-coverage"
        }
    ],
    "newsletters": [
        {
            id: "nl-1",
            title: "Dhamma Monthly Newsletter - June 2026: Advancing Surgical Excellence in Eastern India",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 30, 2026",
            slug: "newsletter-june-2026",
            category: "newsletters"
        },
        {
            id: "nl-2",
            title: "Dhamma Quarterly Research Digest - Q2 2026: Breakthroughs in Minimally Invasive Surgery",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 15, 2026",
            slug: "research-digest-q2-2026",
            category: "newsletters"
        },
        {
            id: "nl-3",
            title: "Dhamma Monthly Newsletter - May 2026: Community Health Outreach Programs",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "May 31, 2026",
            slug: "newsletter-may-2026",
            category: "newsletters"
        },
        {
            id: "nl-4",
            title: "Dhamma Monthly Newsletter - April 2026: Inaugurating Advanced Cath Lab Facility",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Apr 30, 2026",
            slug: "newsletter-april-2026",
            category: "newsletters"
        }
    ],
    "media-connect": [
        {
            id: "mcon-1",
            title: "Dhamma Institute of Medical Sciences Hosts National Conference on Advances in Neurosurgery 2026",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 27, 2026",
            slug: "national-conference-neurosurgery",
            category: "media-connect"
        },
        {
            id: "mcon-2",
            title: "Dhamma Signs MoU with AIIMS Patna for Joint Research in Oncology and Cancer Care",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 20, 2026",
            slug: "mou-aiims-patna-oncology",
            category: "media-connect"
        },
        {
            id: "mcon-3",
            title: "Press Conference: Dhamma Announces Expansion Plan with New 200-Bed Super Specialty Wing",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 14, 2026",
            slug: "expansion-plan-announcement",
            category: "media-connect"
        },
        {
            id: "mcon-4",
            title: "Dhamma Partners with WHO for Rural Health Awareness Campaign Across 5 Districts of Bihar",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 8, 2026",
            slug: "who-rural-health-campaign",
            category: "media-connect"
        }
    ]
};

const TABS = [
    { key: "press-release", label: "Press Releases" },
    { key: "media-coverage", label: "Media Coverage" },
    { key: "newsletters", label: "Newsletters" },
    { key: "media-connect", label: "Media Connect" }
];

const ITEMS_PER_PAGE = 10;

export default function MediaCategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = React.use(params);
    const { openBooking } = useBooking();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const activeTab = TABS.find(t => t.key === category) ? category : "press-release";
    const items = mediaData[activeTab] || [];

    // Filter items by search
    const filteredItems = searchQuery.trim()
        ? items.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.hospital.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : items;

    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
    const paginatedItems = filteredItems.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Group items by month
    const grouped: Record<string, MediaItem[]> = {};
    paginatedItems.forEach(item => {
        const monthYear = item.date.replace(/\d+,/, "").trim().replace(/\s+/g, " ");
        const key = monthYear;
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(item);
    });

    return (
        <div className="bg-white min-h-screen" style={{ fontFamily: "'Montserrat', sans-serif" }}>

            {/* ═══ HERO BANNER ═══ */}
            <section className="relative w-full overflow-hidden" style={{ background: "linear-gradient(135deg, #003580 0%, #0057A8 55%, #0069CC 100%)" }}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.5'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
                <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 py-14 lg:py-20 text-center">
                    <p className="text-xs font-bold uppercase tracking-[3px] mb-3" style={{ color: "#F5BE00" }}>DHAMMA INSTITUTE OF MEDICAL SCIENCES</p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wide leading-tight mb-4" style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF", textShadow: "2px 2px 8px rgba(0,0,0,0.4)" }}>
                        Media Centre
                    </h1>
                    <p className="text-base text-blue-100 max-w-xl mx-auto">Stay updated with the latest news, press releases, and media coverage from Dhamma Institute of Medical Sciences.</p>
                </div>
            </section>

            {/* ═══ TABS ═══ */}
            <div className="bg-white border-b border-gray-200 sticky top-[70px] z-30">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <div className="flex overflow-x-auto gap-0 -mb-px">
                        {TABS.map(tab => (
                            <Link
                                key={tab.key}
                                href={`/media/${tab.key}`}
                                className={`relative flex-shrink-0 px-6 py-4 text-sm font-bold uppercase tracking-wide transition-colors whitespace-nowrap ${
                                    activeTab === tab.key
                                        ? "text-[#CC2027]"
                                        : "text-gray-500 hover:text-gray-800"
                                }`}
                            >
                                {tab.label}
                                {activeTab === tab.key && (
                                    <motion.div
                                        layoutId="activeMediaTab"
                                        className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full"
                                        style={{ background: "linear-gradient(90deg, #CC2027, #e8521a)" }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* ═══ CONTENT ═══ */}
            <section className="py-10 lg:py-14">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

                    {/* Title + Search */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {TABS.find(t => t.key === activeTab)?.label || "Press Releases"}
                        </h2>
                        <div className="relative max-w-md w-full">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                                placeholder="Search by keyword..."
                                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                            />
                        </div>
                    </div>

                    {/* Grouped List */}
                    {Object.keys(grouped).length === 0 && (
                        <div className="text-center py-20 text-gray-400">
                            <p className="text-lg font-medium">No results found.</p>
                            <p className="text-sm mt-1">Try adjusting your search query.</p>
                        </div>
                    )}

                    {Object.entries(grouped).map(([monthYear, monthItems]) => (
                        <div key={monthYear} className="mb-10">
                            <h3 className="text-lg font-bold text-gray-800 mb-5 pb-2 border-b border-gray-100">{monthYear}</h3>
                            <div className="space-y-0">
                                {monthItems.map((item, idx) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="group border-b border-gray-100 py-5 hover:bg-gray-50/50 px-4 -mx-4 rounded-lg transition-colors"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                            <div className="flex-1">
                                                <h4 className="text-[15px] font-semibold text-gray-900 leading-snug group-hover:text-[#0057A8] transition-colors">
                                                    {item.title}
                                                </h4>
                                                <div className="flex items-center gap-3 mt-2">
                                                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                                                        <Building2 size={13} className="text-gray-400" />
                                                        {item.hospital}
                                                    </span>
                                                    <span className="flex items-center gap-1.5 text-xs" style={{ color: "#CC2027" }}>
                                                        <Calendar size={13} />
                                                        {item.date}
                                                    </span>
                                                </div>
                                            </div>
                                            <Link
                                                href={`/media/${item.category}/${item.slug}`}
                                                className="flex-shrink-0 flex items-center gap-1 text-sm font-bold transition-colors hover:underline"
                                                style={{ color: "#CC2027" }}
                                            >
                                                Read more
                                                <ChevronRight size={16} />
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* ═══ PAGINATION ═══ */}
                    {totalPages > 1 && (
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-8 border-t border-gray-200">
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                >
                                    <ChevronLeft size={16} />
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-10 h-10 text-sm font-bold rounded-lg transition-colors ${
                                            page === currentPage
                                                ? "text-white"
                                                : "text-gray-600 hover:bg-gray-100 border border-gray-200"
                                        }`}
                                        style={page === currentPage ? { background: "#0057A8" } : {}}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                >
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                            <p className="text-xs text-gray-500">
                                Showing results {(currentPage - 1) * ITEMS_PER_PAGE + 1} - {Math.min(currentPage * ITEMS_PER_PAGE, filteredItems.length)} of {filteredItems.length}
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* ═══ APPOINTMENT CTA ═══ */}
            <section className="py-10" style={{ background: "linear-gradient(90deg, #CC2027, #a01820)" }}>
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-white text-2xl font-bold">Need an Appointment?</h3>
                        <p className="text-red-100 text-sm mt-1">Our specialists are available Mon–Sat, 9AM–6PM</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={openBooking}
                            className="px-8 py-3 bg-white font-bold text-sm rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                            style={{ color: "#CC2027" }}
                        >
                            Book Now
                        </button>
                        <a
                            href={`https://wa.me/917643990301?text=${encodeURIComponent('Hello! I would like to enquire about an appointment at Dhamma Institute of Medical Sciences.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-8 py-3 font-bold text-sm rounded-lg text-white transition-colors shadow-sm hover:opacity-90"
                            style={{ background: "#0057A8" }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Call Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
