"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImageIcon, Video, ArrowRight } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider-horizontal";
import { CometCard } from "@/components/ui/comet-card";

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
    <section className="py-8 md:py-10 bg-bgLight">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6">
        <h2 className="section-heading">Gallery &amp; Media</h2>
        <span className="section-heading-line" />
        <p className="section-subheading mb-4">
          Explore our campus, facilities, and life at Dhamma Institute of Medical Sciences through photos and videos
        </p>

        {/* Toggle tabs */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setActiveTab("gallery")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide transition-all ${
              activeTab === "gallery"
                ? "bg-[#0072CE] text-white shadow-lg"
                : "bg-white text-gray-500 border border-gray-200 hover:border-[#0072CE] hover:text-[#0072CE]"
            }`}
          >
            <ImageIcon size={16} />
            Photo Gallery
          </button>
          <button
            onClick={() => setActiveTab("video")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide transition-all ${
              activeTab === "video"
                ? "bg-[#0072CE] text-white shadow-lg"
                : "bg-white text-gray-500 border border-gray-200 hover:border-[#0072CE] hover:text-[#0072CE]"
            }`}
          >
            <Video size={16} />
            Video Gallery
          </button>
        </div>

        {/* Gallery content */}
        {activeTab === "gallery" && (
          <div>
            <div className="py-4">
              <InfiniteSlider direction="horizontal" duration={45} durationOnHover={9999} gap={24}>
                {galleryImages.map((img) => (
                  <CometCard key={img.title} className="w-[280px] sm:w-[340px] md:w-[420px] flex-shrink-0">
                    <div className="flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border border-gray-100 bg-white p-2.5 shadow-md transition-all md:p-3">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px]">
                        <Image
                          src={img.src}
                          alt={img.title}
                          fill
                          sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 420px"
                          className="object-cover"
                        />
                      </div>
                      <div className="mt-3 flex items-center justify-between px-2 pb-1 font-sans text-gray-800">
                        <div className="text-[13px] sm:text-[14px] font-bold">{img.title}</div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">View</div>
                      </div>
                    </div>
                  </CometCard>
                ))}
              </InfiniteSlider>
            </div>
            <div className="text-center mt-6">
              <Link href="/gallery/photos" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0072CE] text-white font-bold text-sm rounded-full hover:bg-[#00509E] transition-colors shadow-md">
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
              <Link href="/gallery/videos" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0072CE] text-white font-bold text-sm rounded-full hover:bg-[#00509E] transition-colors shadow-md">
                View All Videos <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
