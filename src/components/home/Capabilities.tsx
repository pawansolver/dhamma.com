import { Stethoscope, Ambulance, Users, BedDouble } from "lucide-react";

export default function Capabilities() {
  return (
    <section className="relative bg-bgLight py-16 md:py-24 overflow-hidden">
      {/* Floating social icons — left side */}
      <div className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
        <a href="#" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center bg-[#1877f2] text-white rounded-r-lg hover:scale-110 transition shadow-lg">
          <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
        </a>
        <a href="#" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-r-lg hover:scale-110 transition shadow-lg">
          <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
        </a>
        <a href="#" aria-label="YouTube" className="w-10 h-10 flex items-center justify-center bg-[#ff0000] text-white rounded-r-lg hover:scale-110 transition shadow-lg">
          <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
        </a>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex justify-center mb-5">
          <div className="h-2 w-24 rounded-full bg-gradient-to-r from-brandBlueLight to-brandBlue opacity-60" />
        </div>

        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-brandBlue mb-3">
          Our Capabilities
        </h2>
        <p className="text-center text-textmain/60 text-base md:text-lg max-w-2xl mx-auto mb-14">
          World-class facilities and expertise dedicated to advancing medical science and patient care
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="capability-card group">
            <div className="capability-icon bg-green-50 text-green-600">
              <Stethoscope size={28} strokeWidth={2.2} />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-textmain">Free OPD</h3>
            <p className="text-textmain/50 text-sm font-medium">9AM - 3PM (Mon - Sat)</p>
          </div>

          <div className="capability-card group">
            <div className="capability-icon bg-red-50 text-red-500">
              <Ambulance size={28} strokeWidth={2.2} />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-textmain">24x7</h3>
            <p className="text-textmain/50 text-sm font-medium">Emergency Services</p>
          </div>

          <div className="capability-card group">
            <div className="capability-icon bg-blue-50 text-blue-500">
              <Users size={28} strokeWidth={2.2} />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-textmain">250+</h3>
            <p className="text-textmain/50 text-sm font-medium">Expert Faculty &amp; Doctors</p>
          </div>

          <div className="capability-card group">
            <div className="capability-icon bg-purple-50 text-purple-500">
              <BedDouble size={28} strokeWidth={2.2} />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-textmain">800+</h3>
            <p className="text-textmain/50 text-sm font-medium">Bed Multispeciality Hospital</p>
          </div>
        </div>
      </div>
    </section>
  );
}
