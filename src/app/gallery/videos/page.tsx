"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const videos = [
  { id: "dQw4w9WgXcQ", title: "Hospital Overview" },
  { id: "dQw4w9WgXcQ", title: "Campus Tour" },
  { id: "dQw4w9WgXcQ", title: "Medical Facilities" },
  { id: "dQw4w9WgXcQ", title: "Student Life at Dhamma Superspeciality Hospital" },
  { id: "dQw4w9WgXcQ", title: "OPD & Emergency Services" },
  { id: "dQw4w9WgXcQ", title: "Annual Day Celebration" },
];

export default function VideoGalleryPage() {
  const scrollToVideos = () => {
    const el = document.getElementById("videos-grid");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const serifFont = "'Playfair Display', serif";

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[65vh] min-h-[480px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
          <Image 
            src="/images/gallery/gallery-3.png"
            alt="Dhamma Superspeciality Hospital Video Gallery"
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
            <span className="inline-block py-1.5 px-4 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold tracking-[0.2em] text-xs mb-6 border border-white/20 uppercase">
              Dhamma Superspeciality Hospital Broadcasts
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl" style={{ fontFamily: serifFont }}>
              Video Gallery
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 font-medium max-w-2xl mb-10 leading-relaxed drop-shadow-md">
              Watch walk-throughs, campus tours, clinical facility previews, and event highlights from our institution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                onClick={scrollToVideos}
                className="px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center gap-2 max-w-xs"
              >
                Explore Videos
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <div id="videos-grid" className="w-full max-w-[1440px] mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((vid, i) => (
            <div key={i}>
              <div className="rounded-xl overflow-hidden shadow-lg bg-black aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${vid.id}`}
                  title={vid.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="mt-2 text-[15px] font-semibold text-[#1a1a2e]">{vid.title}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
