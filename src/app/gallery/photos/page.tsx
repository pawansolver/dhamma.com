"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/images/gallery/gallery-1.png", title: "Hospital Campus" },
  { src: "/images/gallery/gallery-2.png", title: "Research Laboratory" },
  { src: "/images/gallery/gallery-3.png", title: "Seminar Hall" },
  { src: "/images/gallery/gallery-4.png", title: "Blood Bank" },
  { src: "/images/gallery/gallery-5.png", title: "Library" },
  { src: "/images/gallery/gallery-6.png", title: "Cafeteria" },
  { src: "/images/gallery/gallery-7.png", title: "Dissection Hall" },
  { src: "/images/gallery/gallery-8.png", title: "Sports Ground" },
  { src: "/images/facilities/pathology.png", title: "Pathology Lab" },
  { src: "/images/facilities/operation-theatre.png", title: "Operation Theatre" },
  { src: "/images/facilities/classroom.png", title: "Classrooms" },
  { src: "/images/facilities/diagnostic-lab.png", title: "Diagnostic Lab" },
];

export default function PhotoGalleryPage() {
  const scrollToGallery = () => {
    const el = document.getElementById("gallery-grid");
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
            src="/images/gallery/gallery-1.png"
            alt="Dhamma Superspeciality Hospital Photo Gallery"
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
              Dhamma Superspeciality Hospital Media
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl" style={{ fontFamily: serifFont }}>
              Photo Gallery
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 font-medium max-w-2xl mb-10 leading-relaxed drop-shadow-md">
              Explore our modern campus, advanced clinical facilities, and state-of-the-art academic infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                onClick={scrollToGallery}
                className="px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center gap-2 max-w-xs"
              >
                Explore Photos
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <div id="gallery-grid" className="w-full max-w-[1440px] mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {galleryImages.map((img) => (
            <div key={img.title} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md group">
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
