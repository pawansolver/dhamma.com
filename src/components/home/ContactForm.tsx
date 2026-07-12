"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Bookmark } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = e.target.value;
    if (e.target.name === "phone") {
      value = value.replace(/\D/g, ""); // Keep only digits
    }
    setForm({ ...form, [e.target.name]: value });
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
    <section id="contact-form" className="py-14 md:py-20 bg-[#fcfbf7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* ── LEFT — Image with Glassmorphism Info Panel ── */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-lg h-[500px] lg:h-[650px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/herrroo/gfs.png"
              alt="Doctor at Dhamma Superspeciality Hospital"
              className="w-full h-full object-cover object-center"
            />
            {/* Glassmorphism Panel */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 text-white flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-base">Phone</div>
                  <div className="text-white/80 text-sm">+91 7643990301 / +9176439 90302</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-base">Email</div>
                  <div className="text-white/80 text-sm">info@dhammainstitute.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-base">Location</div>
                  <div className="text-white/80 text-sm">Opposite Canara Bank, Phulwari Sharif, Near AIIMS Gate No. 1, Patna, India, Bihar</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT — Form ── */}
          <div className="flex flex-col gap-6 pt-4 lg:pt-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-gray-200 text-[13px] font-semibold text-gray-700 shadow-sm mb-5">
                <Bookmark className="w-4 h-4 text-emerald-800 fill-emerald-800" />
                Book Your Visit
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 tracking-tight">Book Appointment</h2>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label className="text-black font-bold text-sm">First name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-transparent border border-gray-300 text-black placeholder-gray-400 text-sm focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 outline-none transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-black font-bold text-sm">Contact Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-transparent border border-gray-300 text-black placeholder-gray-400 text-sm focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 outline-none transition"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label className="text-black font-bold text-sm">Contact Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    minLength={10}
                    maxLength={12}
                    className="w-full px-4 py-3.5 rounded-xl bg-transparent border border-gray-300 text-black placeholder-gray-400 text-sm focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 outline-none transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-black font-bold text-sm">Message</label>
                <textarea
                  name="message"
                  placeholder="Type here......"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3.5 rounded-xl bg-transparent border border-gray-300 text-black placeholder-gray-400 text-sm focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2d5a3f] hover:bg-[#234731] text-white font-medium px-6 py-3.5 rounded-xl transition disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {loading ? "Sending..." : "Book an Appointment"}
              </button>
              <p className="text-center text-xs text-gray-500 font-medium mt-1">We respect your privacy. Your data is safe.</p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
