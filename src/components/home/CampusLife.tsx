"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ChevronRight, Calendar, FileText } from "lucide-react";

const galleryImages = [
  { src: "/images/facilities/classroom.png", alt: "Modern Classrooms" },
  { src: "/images/facilities/operation-theatre.png", alt: "Advanced OT" },
  { src: "/images/facilities/hospital-building.png", alt: "Main Campus" },
  { src: "/images/facilities/diagnostic-lab.png", alt: "Diagnostic Lab" },
];

interface Notice {
  id: number;
  title: string;
  content?: string;
  publishDate: string;
  thumbnail?: string | null;
  pdfAttachment?: string | null;
  isNewTag: boolean;
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000/api";
const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE || "http://localhost:5000";

export default function CampusLife() {
  const [activeImg, setActiveImg] = useState(0);
  const [latestUpdates, setLatestUpdates] = useState<Notice[]>([]);
  const [loadingUpdates, setLoadingUpdates] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUpdates = async () => {
      try {
        const res = await fetch(`${API_BASE}/notices?isActive=true&limit=5`, {
          signal: controller.signal,
          cache: "no-store",
        });
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          setLatestUpdates(data.data.slice(0, 5));
        }
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.error("Failed to fetch notices:", err);
        }
      } finally {
        setLoadingUpdates(false);
      }
    };

    fetchUpdates();
    return () => controller.abort();
  }, []);

  const formatDateObj = (dateStr: string) => {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return { day: "--", month: "" };
    const day = d.getDate();
    const month = d.toLocaleString("default", { month: "short" }).toUpperCase();
    return { day, month };
  };

  const buildAssetUrl = (relative: string) => `${ASSET_BASE}${relative.startsWith("/") ? "" : "/"}${relative}`;

  return (
    <section className="relative bg-bgLight py-12 md:py-16 overflow-hidden">
      <div className="container-custom">
        <div className="mb-10">
          <h2 className="section-heading">Welcome to Life at Our Campus</h2>
          <span className="section-heading-line" />
          <p className="section-subheading">
            World-class facilities and expertise dedicated to advancing medical science and patient care
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 items-stretch">
          {/* LEFT — Campus Gallery */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-xl">
              <Image
                src={galleryImages[activeImg].src}
                alt={galleryImages[activeImg].alt}
                width={800}
                height={450}
                className="w-full h-[200px] sm:h-[280px] md:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40 group-hover:scale-110 transition-transform">
                  <Play size={24} className="text-white ml-1" fill="white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Image src="/logo.png" alt="Dhamma Superspeciality Hospital" width={28} height={28} className="rounded-full" />
                    <span className="text-white/80 text-xs font-semibold">Dhamma Superspeciality Hospital, Patna</span>
                  </div>
                  <h3 className="text-white font-bold text-sm md:text-base">{galleryImages[activeImg].alt}</h3>
                </div>
              </div>
            </div>

            <div className="flex gap-1.5 sm:gap-2 mt-2 sm:mt-3">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`relative rounded-lg overflow-hidden flex-1 h-[50px] sm:h-[60px] md:h-[72px] transition-all duration-300 ${
                    activeImg === idx ? "ring-2 ring-brandSaffron scale-[1.03]" : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Latest Updates */}
          <div className="lg:col-span-2 h-full">
            <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden h-full flex flex-col">
              <div className="bg-brandBlue px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between">
                <h3 className="text-white font-extrabold text-sm sm:text-base tracking-wide">Latest Updates</h3>
                <Calendar size={14} className="text-brandSaffron" />
              </div>

              <div className="divide-y divide-border min-h-[300px] flex-1">
                {loadingUpdates ? (
                  <div className="p-8 text-center text-gray-500 text-sm">Loading updates…</div>
                ) : latestUpdates.length === 0 ? (
                  <div className="p-8 text-center text-gray-500 text-sm">No new updates available.</div>
                ) : (
                  latestUpdates.map((update) => {
                    const { day, month } = formatDateObj(update.publishDate);
                    const href = update.pdfAttachment
                      ? buildAssetUrl(update.pdfAttachment)
                      : `/notices/${update.id}`;
                    const isExternal = !!update.pdfAttachment;

                    const Inner = (
                      <div className="flex items-start gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3.5 hover:bg-bgLight transition-colors group">
                        <div className="flex-shrink-0 w-12 sm:w-14 text-center">
                          <span className="block text-lg sm:text-xl font-extrabold text-brandBlue leading-none">
                            {day}
                            <sup className="text-[9px] font-bold">th</sup>
                          </span>
                          <span className="block text-[8px] sm:text-[10px] font-bold text-textmain/40 uppercase tracking-wider">
                            {month}
                          </span>
                        </div>

                        {update.thumbnail && (
                          <div className="hidden sm:block flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-gray-100 border">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={buildAssetUrl(update.thumbnail)}
                              alt={update.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] sm:text-xs text-textmain/80 leading-relaxed line-clamp-2 group-hover:text-brandBlue transition-colors">
                            {update.title}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            {update.isNewTag && (
                              <span className="text-[8px] font-extrabold text-red-500 bg-red-50 px-1.5 py-0.5 rounded uppercase tracking-wider">
                                New
                              </span>
                            )}
                            {update.pdfAttachment && (
                              <span className="text-[8px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded uppercase tracking-wider inline-flex items-center gap-0.5">
                                <FileText size={9} /> PDF
                              </span>
                            )}
                          </div>
                        </div>

                        <ChevronRight
                          size={14}
                          className="flex-shrink-0 text-textmain/20 group-hover:text-brandBlue transition-colors mt-0.5"
                        />
                      </div>
                    );

                    return isExternal ? (
                      <a key={update.id} href={href} target="_blank" rel="noopener noreferrer" className="block">
                        {Inner}
                      </a>
                    ) : (
                      <Link key={update.id} href={href} className="block">
                        {Inner}
                      </Link>
                    );
                  })
                )}
              </div>

              <div className="px-4 py-3 bg-bgLight border-t border-border">
                <Link
                  href="/notices"
                  className="text-xs font-bold text-brandBlue hover:text-brandSaffron transition flex items-center gap-1"
                >
                  View All Notices <ChevronRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
