"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImageIcon, Video, ArrowRight } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider-horizontal";

const galleryImages = [
  { src: "/images/gallery/gallery-1.png", title: "Hospital Campus" },
  { src: "/images/gallery/gallery-2.png", title: "Research Laboratory" },
  { src: "/images/gallery/gallery-3.png", title: "Seminar Hall" },
  { src: "/images/gallery/gallery-4.png", title: "Blood Bank" },
  { src: "/images/gallery/gallery-5.png", title: "Library" },
  { src: "/images/gallery/gallery-6.png", title: "Cafeteria" },
  { src: "/images/gallery/gallery-7.png", title: "Dissection Hall" },
  { src: "/images/gallery/gallery-8.png", title: "Sports Ground" },
];

const previewVideos = [
  { id: "dQw4w9WgXcQ", title: "Hospital Overview" },
  { id: "dQw4w9WgXcQ", title: "Campus Tour" },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<"gallery" | "video">("gallery");

  return (
    <section className="py-12 md:py-16 bg-bgLight">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6">
        <h2 className="section-heading">Gallery &amp; Media</h2>
        <span className="section-heading-line" />
        <p className="section-subheading">
          Explore our campus, facilities, and life at Dhamma Superspeciality Hospital through photos and videos
        </p>

        {/* Toggle tabs */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab("gallery")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide transition-all ${
              activeTab === "gallery"
                ? "bg-[#0f766e] text-white shadow-lg"
                : "bg-white text-gray-500 border border-gray-200 hover:border-[#0f766e] hover:text-[#0f766e]"
            }`}
          >
            <ImageIcon size={16} />
            Photo Gallery
          </button>
          <button
            onClick={() => setActiveTab("video")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide transition-all ${
              activeTab === "video"
                ? "bg-[#0f766e] text-white shadow-lg"
                : "bg-white text-gray-500 border border-gray-200 hover:border-[#0f766e] hover:text-[#0f766e]"
            }`}
          >
            <Video size={16} />
            Video Gallery
          </button>
        </div>

        {/* Gallery content */}
        {activeTab === "gallery" && (
          <div>
            <div className="space-y-5">
              <InfiniteSlider direction="horizontal" duration={35} durationOnHover={9999} gap={16}>
                {galleryImages.map((img) => (
                  <div key={img.title} className="relative w-[160px] sm:w-[200px] md:w-[280px] aspect-[4/3] rounded-lg overflow-hidden shadow-md group flex-shrink-0">
                    <Image src={img.src} alt={img.title} fill sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 280px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <p className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.title}</p>
                  </div>
                ))}
              </InfiniteSlider>
              <InfiniteSlider direction="horizontal" reverse duration={38} durationOnHover={9999} gap={16}>
                {galleryImages.map((img) => (
                  <div key={`r-${img.title}`} className="relative w-[160px] sm:w-[200px] md:w-[280px] aspect-[4/3] rounded-lg overflow-hidden shadow-md group flex-shrink-0">
                    <Image src={img.src} alt={img.title} fill sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 280px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <p className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.title}</p>
                  </div>
                ))}
              </InfiniteSlider>
            </div>
            <div className="text-center mt-8">
              <Link href="/gallery/photos" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0f766e] text-white font-bold text-sm rounded-full hover:bg-[#115e59] transition-colors shadow-md">
                View All Photos <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}

        {/* Video content — only 2 preview */}
        {activeTab === "video" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {previewVideos.map((vid, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-lg bg-black aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${vid.id}`}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/gallery/videos" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0f766e] text-white font-bold text-sm rounded-full hover:bg-[#115e59] transition-colors shadow-md">
                View All Videos <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
