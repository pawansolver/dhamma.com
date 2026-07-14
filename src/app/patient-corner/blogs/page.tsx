"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Clock, Calendar, ShieldCheck } from "lucide-react";

const CATEGORIES = [
  "All",
  "Accident and Emergency Care",
  "Alzheimers",
  "Arthritis",
  "Bariatric Surgery",
  "Belly Fat Reduction",
  "Cardiology",
  "Gastroenterology",
  "Neurology",
  "Oncology"
];

// Dummy data for blogs
const BLOGS = [
  {
    id: 1,
    title: "Fluttering in Chest: Causes, Symptoms & When to See a Doctor",
    department: "DEPARTMENT OF CARDIOLOGY",
    readTime: "6 Min Read",
    date: "Jun 26, 2026",
    slug: "fluttering-in-chest",
    image: "/images/blogs/thumb.png",
    category: "Cardiology"
  },
  {
    id: 2,
    title: "10 Warning Signs of an Unhealthy Gut You Must Not Ignore",
    department: "DEPARTMENT OF GASTROINTESTINAL SCIENCES",
    readTime: "6 Min Read",
    date: "Jun 26, 2026",
    slug: "warning-signs-unhealthy-gut",
    image: "/images/blogs/thumb.png",
    category: "Gastroenterology"
  },
  {
    id: 3,
    title: "What Creatinine Level Indicates Kidney Failure? Doctors Explain",
    department: "DEPARTMENT OF RENAL SCIENCES",
    readTime: "6 Min Read",
    date: "Jun 22, 2026",
    slug: "creatinine-level-kidney-failure",
    image: "/images/blogs/thumb.png",
    category: "All"
  },
  {
    id: 4,
    title: "Stomach Cancer Lump: What It Feels Like & When to See a Doctor",
    department: "DEPARTMENT OF CANCER CARE/ONCOLOGY",
    readTime: "7 Min Read",
    date: "Jun 22, 2026",
    slug: "stomach-cancer-lump",
    image: "/images/blogs/thumb.png",
    category: "Oncology"
  },
  {
    id: 5,
    title: "Types of Nerve Injury: Causes, Symptoms & Recovery Guide",
    department: "DEPARTMENT OF NEUROLOGY",
    readTime: "6 Min Read",
    date: "Jun 15, 2026",
    slug: "types-of-nerve-injury",
    image: "/images/blogs/thumb.png",
    category: "Neurology"
  },
  {
    id: 6,
    title: "Typhoid Ulcer: What It Is, Symptoms and Treatment Guide",
    department: "DEPARTMENT OF GASTROINTESTINAL SCIENCES",
    readTime: "6 Min Read",
    date: "Jun 15, 2026",
    slug: "typhoid-ulcer-guide",
    image: "/images/blogs/thumb.png",
    category: "Gastroenterology"
  },
  {
    id: 7,
    title: "Understanding CT scan and its role in cancer detection.",
    department: "DEPARTMENT OF MEDICAL ONCOLOGY",
    readTime: "8 Min Read",
    date: "Jun 15, 2026",
    slug: "understanding-ct-scan-cancer",
    image: "/images/blogs/thumb.png",
    category: "Oncology"
  },
  {
    id: 8,
    title: "Weak Nervous System Symptoms: Signs & How to Strengthen",
    department: "DEPARTMENT OF NEUROLOGY",
    readTime: "8 Min Read",
    date: "Jun 12, 2026",
    slug: "weak-nervous-system-symptoms",
    image: "/images/blogs/thumb.png",
    category: "Neurology"
  }
];

export default function BlogListingPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredBlogs = activeCategory === "All" 
    ? BLOGS 
    : BLOGS.filter(b => b.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f3f7fb] font-sans">
      
      {/* ═══ HERO BANNER ═══ */}
      <div className="w-full bg-[#004e92] relative">
        <div className="w-full max-w-[1920px] mx-auto h-[250px] sm:h-[350px] lg:h-[450px] relative">
          <Image 
            src="/images/blogs/hero.png" 
            alt="Dhamma Health Care Blogs" 
            fill 
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>

      {/* ═══ MAIN CONTENT SECTION ═══ */}
      <div className="max-w-[1200px] mx-auto px-4 py-8 lg:py-12">
        
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#003b73] mb-8 uppercase tracking-wide">
          Dhamma Health Care Blogs
        </h1>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-10">
          
          {/* ═══ CATEGORIES TABS ═══ */}
          <div className="border-b border-gray-100">
            <div className="flex overflow-x-auto hide-scrollbar scroll-smooth">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => { setActiveCategory(category); setCurrentPage(1); }}
                  className={`flex-shrink-0 px-6 py-4 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${
                    activeCategory === category 
                      ? "text-[#0057A8] border-[#0057A8] bg-blue-50/50" 
                      : "text-gray-500 border-transparent hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* ═══ BLOG CARDS GRID ═══ */}
          <div className="p-6 lg:p-8 bg-gray-50/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredBlogs.map((blog, idx) => (
                <Link href={`/patient-corner/blogs/${blog.slug}`} key={blog.id}>
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row h-full relative"
                  >
                    {/* Right Blue Thick Border Accent */}
                    <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#0057A8] rounded-r-lg z-10 hidden sm:block"></div>
                    <div className="absolute right-0 top-0 left-0 h-1.5 bg-[#0057A8] rounded-t-lg z-10 sm:hidden"></div>

                    {/* Image Section */}
                    <div className="sm:w-2/5 h-[200px] sm:h-auto relative bg-blue-50/50 border-r border-gray-100 p-2">
                        <div className="w-full h-full relative rounded overflow-hidden">
                            <Image 
                                src={blog.image} 
                                alt={blog.title} 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="sm:w-3/5 p-5 flex flex-col justify-between">
                      <div>
                        <h3 className="text-[#0057A8] font-bold text-base leading-snug mb-3 group-hover:text-[#CC2027] transition-colors pr-2">
                          {blog.title}
                        </h3>
                        
                        {/* Shield icon placeholder for brand logo in screenshot */}
                        <div className="flex justify-center mb-2">
                            <div className="flex flex-col items-center opacity-70">
                                <ShieldCheck size={18} className="text-[#0057A8]" />
                                <span className="text-[8px] font-bold text-[#0057A8]">DHAMMA</span>
                            </div>
                        </div>

                        <p className="text-center text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-4">
                          {blog.department}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <span className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                          <Clock size={14} />
                          {blog.readTime}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                          <Calendar size={14} />
                          {blog.date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {filteredBlogs.length === 0 && (
                <div className="text-center py-20 text-gray-400">
                    <p className="text-lg font-medium">No blogs found in this category.</p>
                </div>
            )}

            {/* ═══ PAGINATION ═══ */}
            {filteredBlogs.length > 0 && (
              <div className="flex justify-center items-center gap-1 mt-12 mb-4">
                <button className="w-8 h-8 flex items-center justify-center text-sm font-bold bg-[#337ab7] text-white rounded transition-colors">
                  1
                </button>
                {[2, 3, 4, 5, 6, 7].map(page => (
                  <button key={page} className="w-8 h-8 flex items-center justify-center text-sm text-[#337ab7] hover:bg-gray-100 rounded transition-colors">
                    {page}
                  </button>
                ))}
                <span className="px-2 text-gray-400">...</span>
                <button className="px-3 h-8 flex items-center justify-center text-sm text-[#337ab7] hover:bg-gray-100 rounded transition-colors">
                  Next
                </button>
                <button className="px-3 h-8 flex items-center justify-center text-sm text-[#337ab7] hover:bg-gray-100 rounded transition-colors">
                  Last »
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
      
      {/* ═══ HELP WIDGET PLACEHOLDER ═══ */}
      <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-black text-white px-4 py-3 rounded-t-lg rounded-bl-lg shadow-xl text-xs font-medium cursor-pointer hover:bg-gray-900 transition-colors">
              Need Assistance?<br/>'Click' to chat!
          </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
