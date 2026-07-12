"use client";

import { useState, useEffect } from "react";
import { Megaphone, CalendarDays, ChevronRight, FileText, MapPin, Clock, ImageIcon } from "lucide-react";
import Link from "next/link";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000/api";
const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE || "http://localhost:5000";

interface AnnouncementItem {
  id: number;
  title: string;
  content: string;
  thumbnail: string | null;
  pdfAttachment: string | null;
  isActive: boolean;
  sortOrder: number;
}

interface EventItem {
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

const buildAssetUrl = (relative: string) =>
  `${ASSET_BASE}${relative.startsWith("/") ? "" : "/"}${relative}`;

export default function Announcements() {
  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loadingA, setLoadingA] = useState(true);
  const [loadingE, setLoadingE] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/announcements?isActive=true`)
      .then((r) => r.json())
      .then((d) => { if (d.success && Array.isArray(d.data)) setAnnouncements(d.data); })
      .catch(() => { })
      .finally(() => setLoadingA(false));

    fetch(`${API_BASE}/events?isActive=true`)
      .then((r) => r.json())
      .then((d) => { if (d.success && Array.isArray(d.data)) setEvents(d.data); })
      .catch(() => { })
      .finally(() => setLoadingE(false));
  }, []);

  const formatEventDate = (dateStr: string) => {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return { day: "--", month: "", year: "" };
    return {
      day: d.getDate().toString().padStart(2, "0"),
      month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
      year: d.getFullYear().toString(),
    };
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-bgLight">
      <div className="container-custom">
        <h2 className="section-heading">Announcements &amp; Events</h2>
        <span className="section-heading-line" />
        <p className="section-subheading">
          Stay updated with the latest announcements and upcoming events at Dhamma Superspeciality Hospital
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          {/* ============ ANNOUNCEMENTS ============ */}
          <div className="flex flex-col rounded-[20px] overflow-hidden shadow-sm border border-slate-100 bg-white min-h-[460px] max-h-[460px]">
            <div className="bg-gradient-to-r from-[#C29239] via-[#F4E19C] to-[#C29239] flex items-center justify-between px-6 py-4">
              <h3 className="!text-[#E53935] text-[#E53935] font-extrabold text-[15px] flex items-center gap-2.5 drop-shadow-sm tracking-wide">
                <Megaphone size={20} strokeWidth={2.5} /> ANNOUNCEMENTS
              </h3>
              <Link
                href="/announcements"
                className="text-[11px] font-semibold text-white bg-black/20 hover:bg-black/30 px-4 py-1.5 rounded-full transition-colors"
              >
                View All
              </Link>
            </div>

            <div className="flex-1 min-h-0 overflow-hidden relative">
              {loadingA ? (
                <div className="space-y-3 p-3 sm:p-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-24 rounded-xl bg-gray-100 animate-pulse" />
                  ))}
                </div>
              ) : announcements.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <Megaphone size={36} className="opacity-30 mb-2" />
                  <p className="text-sm">No announcements available</p>
                </div>
              ) : (
                <>
                  <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
                  <div className="h-full overflow-hidden p-3 sm:p-4">
                    <div className={`space-y-3 ${announcements.length > 1 ? "animate-vscroll" : ""}`}>
                      {[...announcements, ...(announcements.length > 1 ? announcements : [])].map((item, idx) => (
                        <article
                          key={`${item.id}-${idx}`}
                          className="group flex gap-4 rounded-2xl border border-slate-100 bg-white hover:shadow-lg hover:shadow-orange-500/10 hover:border-[#EFA02A]/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden h-[110px] sm:h-[120px]"
                        >
                          <div className="flex-shrink-0 w-24 sm:w-28 bg-gray-100 relative">
                            {item.thumbnail ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={buildAssetUrl(item.thumbnail)}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                                <ImageIcon size={26} />
                              </div>
                            )}
                          </div>

                          <div className="flex-1 min-w-0 py-3 pr-4 flex flex-col justify-center">
                            <h4 className="font-bold text-[14px] text-slate-800 leading-snug line-clamp-2 group-hover:text-[#EFA02A] transition-colors">
                              {item.title}
                            </h4>
                            {item.content && (
                              <p className="text-[12px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                                {item.content}
                              </p>
                            )}
                            <div className="flex items-center gap-3 mt-2.5">
                              {item.pdfAttachment && (
                                <a
                                  href={buildAssetUrl(item.pdfAttachment)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-[10px] font-bold text-red-600 bg-red-50 hover:bg-red-100 px-2.5 py-1 rounded-md transition-colors"
                                >
                                  <FileText size={12} strokeWidth={2.5} /> PDF
                                </a>
                              )}
                              <Link
                                href="/announcements"
                                className="inline-flex items-center gap-0.5 text-[11px] font-bold text-blue-600 hover:text-blue-800 transition-colors"
                              >
                                Read more <ChevronRight size={14} strokeWidth={2.5} />
                              </Link>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ============ UPCOMING EVENTS ============ */}
          <div className="flex flex-col rounded-[20px] overflow-hidden shadow-sm border border-slate-100 bg-white min-h-[460px] max-h-[460px]">
            <div className="bg-gradient-to-r from-[#C29239] via-[#F4E19C] to-[#C29239] flex items-center justify-between px-6 py-4">
              <h3 className="!text-[#E53935] text-[#E53935] font-extrabold text-[15px] flex items-center gap-2.5 drop-shadow-sm tracking-wide">
                <CalendarDays size={20} strokeWidth={2.5} /> UPCOMING EVENTS
              </h3>
              <Link
                href="/gallery/events"
                className="text-[11px] font-semibold text-white bg-black/20 hover:bg-black/30 px-4 py-1.5 rounded-full transition-colors"
              >
                View All
              </Link>
            </div>

            <div className="flex-1 min-h-0 overflow-hidden relative">
              {loadingE ? (
                <div className="space-y-3 p-3 sm:p-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-24 rounded-xl bg-gray-100 animate-pulse" />
                  ))}
                </div>
              ) : events.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <CalendarDays size={36} className="opacity-30 mb-2" />
                  <p className="text-sm">No upcoming events</p>
                </div>
              ) : (
                <>
                  <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
                  <div className="h-full overflow-hidden p-3 sm:p-4">
                    <div className={`space-y-3 ${events.length > 1 ? "animate-vscroll" : ""}`}>
                      {[...events, ...(events.length > 1 ? events : [])].map((event, idx) => {
                        const { day, month, year } = formatEventDate(event.eventDate);
                        return (
                          <article
                            key={`${event.id}-${idx}`}
                            className="group flex gap-4 rounded-2xl border border-slate-100 bg-white hover:shadow-lg hover:shadow-blue-500/10 hover:border-[#2A518B]/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden h-[110px] sm:h-[120px]"
                          >
                            {/* Thumbnail or Date badge */}
                            {event.thumbnail ? (
                              <div className="flex-shrink-0 w-24 sm:w-28 bg-gray-100 relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={buildAssetUrl(event.thumbnail)}
                                  alt={event.title}
                                  className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute top-1.5 left-1.5 bg-brandBlue text-white rounded-md px-2 py-0.5 text-center shadow">
                                  <span className="block text-xs font-extrabold leading-none">{day}</span>
                                  <span className="block text-[7px] font-bold uppercase">{month}</span>
                                </div>
                              </div>
                            ) : (
                              <div className="flex-shrink-0 w-24 sm:w-28 bg-gradient-to-br from-brandBlue to-brandBlueLight flex flex-col items-center justify-center text-white">
                                <span className="text-2xl font-extrabold leading-none">{day}</span>
                                <span className="text-[10px] font-bold uppercase tracking-wider">{month}</span>
                                <span className="text-[9px] text-white/70">{year}</span>
                              </div>
                            )}

                            {/* Content */}
                            <div className="flex-1 min-w-0 py-3 pr-4 flex flex-col justify-center">
                              <h4 className="font-bold text-[14px] text-slate-800 leading-snug line-clamp-2 group-hover:text-[#2A518B] transition-colors">
                                {event.title}
                              </h4>
                              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                                {event.eventTime && (
                                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                                    <Clock size={12} strokeWidth={2.5} /> {event.eventTime}
                                  </span>
                                )}
                                {event.venue && (
                                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                                    <MapPin size={12} strokeWidth={2.5} /> {event.venue}
                                  </span>
                                )}
                              </div>
                              {event.description && (
                                <p className="text-[12px] text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                                  {event.description}
                                </p>
                              )}
                              {event.pdfAttachment && (
                                <a
                                  href={buildAssetUrl(event.pdfAttachment)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-[10px] font-bold text-red-600 bg-red-50 hover:bg-red-100 px-2.5 py-1 rounded-md transition-colors mt-2.5 w-fit"
                                >
                                  <FileText size={12} strokeWidth={2.5} /> PDF
                                </a>
                              )}
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
