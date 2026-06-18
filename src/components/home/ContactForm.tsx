"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      let data;
      const responseText = await response.text();
      try {
        data = JSON.parse(responseText);
      } catch {
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
    <section id="contact-form" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">

          {/* ── LEFT — Teal gradient form card ── */}
          <div
            className="rounded-3xl p-8 sm:p-10 flex flex-col justify-between gap-6"
            style={{ background: "linear-gradient(145deg, #3ecfb8 0%, #1ab4a0 40%, #0e9d8c 100%)" }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
              {/* Full name */}
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/80 text-sm font-medium border border-white/10 outline-none focus:bg-white/30 transition"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/80 text-sm font-medium border border-white/10 outline-none focus:bg-white/30 transition"
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/80 text-sm font-medium border border-white/10 outline-none focus:bg-white/30 transition"
              />

              {/* Message */}
              <input
                type="text"
                name="message"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/80 text-sm font-medium border border-white/10 outline-none focus:bg-white/30 transition"
              />

              {/* Button — inside the form so submit works correctly */}
              <button
                type="submit"
                disabled={loading}
                className="self-start inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold px-6 py-3 rounded-full transition disabled:opacity-60 disabled:cursor-not-allowed shadow-md mt-2"
              >
                {loading ? "Sending..." : "Contact Us"}
                <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <ArrowRight size={14} className="text-gray-900" />
                </span>
              </button>
            </form>
          </div>

          {/* ── RIGHT — Doctor image ── */}
          <div className="relative rounded-3xl overflow-hidden min-h-[380px] lg:min-h-0 shadow-md group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/contact_doctor.png"
              alt="Doctor at BHRI"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-[#0ea895] hover:bg-[#0d9585] flex items-center justify-center shadow-xl cursor-pointer transition-transform hover:scale-110">
                {/* Triangle play icon */}
                <svg width="18" height="20" viewBox="0 0 18 20" fill="white" className="ml-1">
                  <path d="M0 0L18 10L0 20V0Z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
