"use client";

import { ShieldCheck, HeartHandshake, Stethoscope, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: ShieldCheck,
    title: "Not Just Better Care, But A Better Experience",
    desc: "At our medical center, we believe in providing not just better care but a better experience overall. We understand that your journey to health.",
  },
  {
    icon: HeartHandshake,
    title: "Serving All People Through Exemplary Care",
    desc: "At our medical center, we believe in providing not just better care but a better experience overall. We understand that your journey to health.",
  },
  {
    icon: Stethoscope,
    title: "Specialty Medicine with Compassion and Care",
    desc: "At our medical center, we believe in providing not just better care but a better experience overall. We understand that your journey to health.",
  },
];

export default function WhyChooseDhamma() {
  return (
    <section className="py-8 lg:py-10 bg-black text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Side - Video */}
          <div className="lg:col-span-7 relative w-full aspect-video overflow-hidden shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/KRSjnTkJFn8?si=ff1cHO3czr_MzZ52"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-4">
              <h4 className="text-blue-400 font-bold text-[11px] md:text-xs tracking-wider uppercase mb-1.5">
                Why Choose Dhamma Superspeciality Hospital
              </h4>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight">
                We Are Different To Protect Your Health
              </h2>
            </div>

            <div className="space-y-3 xl:space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <feature.icon size={18} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold mb-0.5 text-gray-100">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-[13px] leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
