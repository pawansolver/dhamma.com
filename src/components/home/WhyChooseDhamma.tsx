"use client";

import { ShieldCheck, HeartHandshake, Stethoscope } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Not Just Better Care, But A Better Experience",
    desc: "At our medical center, we believe in providing not just better care but a better experience overall. We understand that your journey to health.",
    linkText: "Learn More",
  },
  {
    icon: HeartHandshake,
    title: "Serving All People Through Exemplary Care",
    desc: "At our medical center, we believe in providing not just better care but a better experience overall. We understand that your journey to health.",
    linkText: "Learn More",
  },
  {
    icon: Stethoscope,
    title: "Specialty Medicine with Compassion and Care",
    desc: "At our medical center, we believe in providing not just better care but a better experience overall. We understand that your journey to health.",
    linkText: "Learn More",
  },
];

export default function WhyChooseDhamma() {
  return (
    <section className="w-full bg-[#00509E] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="section-heading-white">
            We Are Different To Protect Your Health
          </h2>
          <span className="section-heading-line-white" />
          <p className="text-brandSaffron font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 mt-2">
            WHY CHOOSE DHAMMA INSTITUTE OF MEDICAL SCIENCES
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-md p-8 md:p-10 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-5 text-[#00509E]">
                <item.icon size={48} strokeWidth={1.5} />
              </div>
              
              {/* Title */}
              <h3 className="text-[#00509E] text-xl md:text-[22px] font-medium mb-4">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-700 text-[15px] leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>
              
              {/* Button */}
              <button className="w-full border-2 border-[#00509E] text-[#00509E] font-semibold py-3 px-6 rounded hover:bg-[#00509E] hover:text-white transition-colors duration-300 text-[15px]">
                {item.linkText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
