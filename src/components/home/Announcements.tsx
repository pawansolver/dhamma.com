"use client";

import { useState, useEffect } from "react";
import { Megaphone, CalendarDays, ChevronRight } from "lucide-react";
import Link from "next/link";

const announcements = [
  "Admissions Open for MBBS 2026-27 — Apply through NMC Counselling Portal",
  "Office Order: Posting of Dr. Ramesh Kumar as HOD, General Medicine",
  "राजभाषा (हिंदी) रोस्टर हेतु जानकारी उपलब्ध कराने के संबंध में।",
  "Suspension of Classes on 15.06.2026 on occasion of Foundation Day, BHRI Gaya",
  "Summer Vacation of UG Students — 01 June to 30 June 2026",
  "Result of Senior Resident (Non-Academic) on ad-hoc basis published",
  "New MRI Machine commissioned — Advanced 1.5T imaging now available",
  "Free Mega Health Camp on 25th June — Registration Open for all",
];

const events = [
  { date: "25 Jun", title: "Free Mega Health Camp — OPD Ground, 9AM-3PM" },
  { date: "15 Jun", title: "Foundation Day Celebration — Auditorium" },
  { date: "01 Jul", title: "MBBS Orientation Programme 2026-27 Batch" },
  { date: "10 Jul", title: "Blood Donation Camp — In association with Red Cross" },
  { date: "15 Jul", title: "Annual Sports Meet — Sports Complex" },
];

export default function Announcements() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollY((prev) => prev + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-bgLight">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Important Announcement */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-border">
            {/* Header */}
            <div className="bg-brandSaffron flex items-center justify-between px-5 py-3">
              <h3 className="text-white font-extrabold text-sm flex items-center gap-2">
                <Megaphone size={16} />
                Important Announcement
              </h3>
              <Link
                href="/notices"
                className="text-[11px] font-bold text-white bg-white/20 hover:bg-white/30 px-3 py-1 rounded transition"
              >
                View All &gt;&gt;
              </Link>
            </div>

            {/* Scrolling content */}
            <div className="bg-brandBlueDark h-[260px] overflow-hidden relative">
              <div
                className="absolute left-0 right-0 transition-none"
                style={{
                  transform: `translateY(-${scrollY % (announcements.length * 52)}px)`,
                }}
              >
                {[...announcements, ...announcements].map((item, idx) => (
                  <Link
                    key={idx}
                    href="/notices"
                    className="block px-5 py-3 text-sm text-white/80 hover:text-brandSaffron hover:bg-white/5 transition border-b border-white/5 leading-relaxed"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              {/* Top fade */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-brandBlueDark to-transparent z-10 pointer-events-none" />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-brandBlueDark to-transparent z-10 pointer-events-none" />
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-border">
            {/* Header */}
            <div className="bg-brandSaffron flex items-center justify-between px-5 py-3">
              <h3 className="text-white font-extrabold text-sm flex items-center gap-2">
                <CalendarDays size={16} />
                Upcoming Event
              </h3>
              <Link
                href="/notices"
                className="text-[11px] font-bold text-white bg-white/20 hover:bg-white/30 px-3 py-1 rounded transition"
              >
                View All &gt;&gt;
              </Link>
            </div>

            {/* Events list */}
            <div className="bg-brandBlueDark h-[260px] overflow-hidden">
              {events.map((event, idx) => (
                <Link
                  key={idx}
                  href="/notices"
                  className="flex items-start gap-4 px-5 py-3.5 border-b border-white/5 hover:bg-white/5 transition group"
                >
                  {/* Date badge */}
                  <div className="flex-shrink-0 w-14 text-center bg-brandSaffron/20 rounded-lg py-1.5">
                    <span className="block text-sm font-extrabold text-brandSaffron leading-tight">
                      {event.date.split(" ")[0]}
                    </span>
                    <span className="block text-[9px] font-bold text-white/50 uppercase">
                      {event.date.split(" ")[1]}
                    </span>
                  </div>
                  {/* Title */}
                  <p className="text-sm text-white/70 group-hover:text-brandSaffron transition flex-1 leading-relaxed">
                    {event.title}
                  </p>
                  <ChevronRight size={14} className="text-white/20 group-hover:text-brandSaffron transition mt-1 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
