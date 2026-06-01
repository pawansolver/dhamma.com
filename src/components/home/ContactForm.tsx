"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      let data;
      const responseText = await response.text();
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error("Non-JSON response from server:", responseText);
        throw new Error("Invalid response from server. Please check your API connection.");
      }

      if (response.ok) {
        alert("Thank you! Your message has been sent. We will contact you shortly.");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        alert(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
      alert("An error occurred while sending your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-10 md:py-14 bg-gradient-to-br from-[#0f2557] via-[#1a3a6b] to-[#14532d] overflow-hidden">
      {/* Medical background art */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-[5%] text-white/[0.06] text-[120px] font-black leading-none select-none">+</div>
        <div className="absolute bottom-12 right-[8%] text-white/[0.05] text-[100px] font-black leading-none select-none">+</div>
        <div className="absolute top-[40%] right-[3%] text-white/[0.04] text-[80px] font-black leading-none select-none">+</div>
        <svg className="absolute bottom-0 left-0 w-full h-20 opacity-[0.08]" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path d="M0 40 L200 40 L230 10 L260 70 L290 20 L320 60 L350 40 L600 40 L630 15 L660 65 L690 25 L720 55 L750 40 L1000 40 L1030 10 L1060 70 L1090 20 L1120 60 L1150 40 L1440 40" stroke="#ffffff" strokeWidth="3" fill="none" />
        </svg>
        <div className="absolute top-[15%] left-[40%] w-[300px] h-[300px] rounded-full border border-white/[0.06]" />
        <div className="absolute bottom-[10%] left-[20%] w-[200px] h-[200px] rounded-full border border-white/[0.05]" />
        <div className="absolute top-[25%] left-[15%] w-2 h-2 rounded-full bg-white/10" />
        <div className="absolute top-[60%] right-[20%] w-2.5 h-2.5 rounded-full bg-white/10" />
        <div className="absolute top-[45%] left-[55%] w-1.5 h-1.5 rounded-full bg-white/10" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
        <h2 className="section-heading-white">Contact Us</h2>
        <span className="section-heading-line-white" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {/* Left — Contact cards (2 cols) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3">
            <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2.5 sm:p-3.5 border border-white/10">
              <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                <Phone size={14} className="text-brandSaffron" />
              </div>
              <div className="min-w-0">
                <h4 className="text-white font-bold text-[11px] sm:text-[13px]">Emergency</h4>
                <p className="text-white/60 text-[11px] sm:text-[13px] truncate">+91 8603048174</p>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2.5 sm:p-3.5 border border-white/10">
              <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                <Mail size={14} className="text-brandSaffron" />
              </div>
              <div className="min-w-0">
                <h4 className="text-white font-bold text-[11px] sm:text-[13px]">Email</h4>
                <a href="mailto:bhribodhgaya@gmail.com" className="text-white/60 text-[11px] sm:text-[13px] hover:text-white transition truncate block">BHRI@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2.5 sm:p-3.5 border border-white/10">
              <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                <MapPin size={14} className="text-brandSaffron" />
              </div>
              <div className="min-w-0">
                <h4 className="text-white font-bold text-[11px] sm:text-[13px]">Location</h4>
                <p className="text-white/60 text-[11px] sm:text-[13px] line-clamp-2">Gaya-Dobhi Road, Gaya</p>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2.5 sm:p-3.5 border border-white/10">
              <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                <Clock size={14} className="text-brandSaffron" />
              </div>
              <div className="min-w-0">
                <h4 className="text-white font-bold text-[11px] sm:text-[13px]">OPD Timing</h4>
                <p className="text-white/60 text-[11px] sm:text-[13px] truncate">9:00 AM - 3:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right — Form (3 cols) */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Full Name</label>
                  <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-[#f8fafc] border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-brandBlue focus:ring-1 focus:ring-brandBlue/30 transition" />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Email</label>
                  <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-[#f8fafc] border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-brandBlue focus:ring-1 focus:ring-brandBlue/30 transition" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] sm:text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Phone</label>
                <input type="tel" name="phone" placeholder="Your phone number" value={form.phone} onChange={handleChange} className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-[#f8fafc] border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-brandBlue focus:ring-1 focus:ring-brandBlue/30 transition" />
              </div>
              <div>
                <label className="block text-[10px] sm:text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Message</label>
                <textarea name="message" placeholder="How can we help you?" value={form.message} onChange={handleChange} rows={3} required className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-[#f8fafc] border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-brandBlue focus:ring-1 focus:ring-brandBlue/30 transition resize-none" />
              </div>
              <button type="submit" disabled={loading} className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-brandBlue to-brandBlueDark text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                <Send size={13} /> <span className="hidden sm:inline">{loading ? "Sending..." : "Send Message"}</span><span className="sm:hidden">{loading ? "Sending..." : "Send"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
// Trigger HMR
