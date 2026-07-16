"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ShieldCheck, Share2 } from "lucide-react";
import ContactForm from "@/components/home/ContactForm";

// Dummy data for blog details
const BLOG_DETAILS: Record<string, any> = {
  "fluttering-in-chest": {
    title: "Fluttering in Chest: Causes, Symptoms & When to See a Doctor",
    department: "DEPARTMENT OF CARDIOLOGY",
    readTime: "6 Min Read",
    date: "Jun 26, 2026",
    category: "Cardiology",
    author: "Dr. Arvind Kumar",
    image: "/images/blogs/thumb.png",
    content: `
      <p>Experiencing a fluttering sensation in your chest can be alarming. Often described as a butterfly feeling, skipped beats, or a racing heart, this symptom is commonly known as heart palpitations.</p>
      <h2>Common Causes of Chest Fluttering</h2>
      <ul>
        <li><strong>Stress and Anxiety:</strong> Emotional triggers are a leading cause of palpitations.</li>
        <li><strong>Caffeine and Nicotine:</strong> Stimulants can temporarily alter your heart rhythm.</li>
        <li><strong>Arrhythmias:</strong> Medical conditions like atrial fibrillation require clinical diagnosis.</li>
      </ul>
      <p>While most palpitations are harmless, they can sometimes indicate a more serious underlying heart condition. It is crucial to monitor how often they occur and what you are doing when they happen.</p>
      <h2>When to Seek Immediate Medical Attention</h2>
      <p>If your chest fluttering is accompanied by shortness of breath, dizziness, chest pain, or fainting, you should seek emergency medical care immediately at Dhamma Institute of Medical Sciences.</p>
    `
  }
};

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  
  // Use specific data if exists, otherwise fallback to generic
  const blog = BLOG_DETAILS[slug] || {
    title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    department: "DEPARTMENT OF GENERAL MEDICINE",
    readTime: "5 Min Read",
    date: "Jul 10, 2026",
    category: "General Health",
    author: "Dhamma Editorial Team",
    image: "/images/blogs/thumb.png",
    content: `
      <p>This is a detailed article discussing the various aspects of <strong>${slug.replace(/-/g, ' ')}</strong>. At Dhamma Institute of Medical Sciences, we prioritize patient education and preventive healthcare.</p>
      <p>Regular check-ups and a healthy lifestyle are the cornerstones of long-term well-being. Our specialized departments are equipped with state-of-the-art technology to diagnose and treat a wide range of medical conditions.</p>
      <h2>Key Takeaways</h2>
      <ul>
        <li>Always consult with a specialized doctor for accurate diagnosis.</li>
        <li>Do not ignore early warning signs and symptoms.</li>
        <li>Maintain a balanced diet and regular exercise routine.</li>
      </ul>
      <p>For personalized medical advice, please book an appointment with our specialists today.</p>
    `
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      
      {/* ═══ HERO BANNER ═══ */}
      <div className="w-full bg-[#f8fafc] border-b border-gray-100 pt-10 pb-16 px-4">
        <div className="max-w-[800px] mx-auto text-center mt-10">
          
          <Link 
            href="/patient-corner/blogs" 
            className="inline-flex items-center gap-2 text-sm text-[#0057A8] hover:text-[#CC2027] font-semibold mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Back to All Blogs
          </Link>

          <div className="flex justify-center mb-6">
            <span className="bg-[#e6f0fa] text-[#0057A8] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              {blog.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#003b73] leading-tight mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-300">
                <ShieldCheck size={16} className="text-gray-500" />
              </div>
              {blog.author}
            </span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="flex items-center gap-1.5"><Calendar size={16} /> {blog.date}</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="flex items-center gap-1.5"><Clock size={16} /> {blog.readTime}</span>
          </div>

        </div>
      </div>

      {/* ═══ MAIN CONTENT ═══ */}
      <div className="max-w-[800px] mx-auto px-4 py-12">
        
        {/* Featured Image */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative rounded-2xl overflow-hidden mb-12 shadow-md bg-blue-50/50">
          <Image 
            src={blog.image} 
            alt={blog.title} 
            fill 
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body */}
        <div 
          className="prose prose-lg prose-blue max-w-none prose-headings:text-[#003b73] prose-headings:font-bold prose-a:text-[#CC2027] prose-li:marker:text-[#0057A8]"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Department:</span>
            <span className="text-sm text-[#0057A8] font-semibold">{blog.department}</span>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 hover:bg-gray-50 text-sm font-semibold transition-colors">
            <Share2 size={16} /> Share this article
          </button>
        </div>

      </div>

      {/* ═══ CONTACT FORM (Existing) ═══ */}
      <div className="bg-gray-50 border-t border-gray-100 pt-10">
        <div className="max-w-[800px] mx-auto px-4 mb-4 text-center">
          <h2 className="text-2xl font-bold text-[#003b73] mb-2">Have further questions?</h2>
          <p className="text-gray-500">Reach out to our medical experts using the form below.</p>
        </div>
        <ContactForm />
      </div>

    </div>
  );
}
