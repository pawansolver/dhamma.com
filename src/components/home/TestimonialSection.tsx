"use client";

import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    rating: 5.0,
    text: "The medical staff was exceptional. They took my concerns seriously and provided the best care possible. The hospital facilities are truly world-class, and the entire process from admission to discharge was seamless.",
    name: "Rajesh Kumar",
    title: "Patient, Cardiology",
    image: "/images/why-choose/patient-centric.png",
  },
  {
    rating: 4.5,
    text: "I am deeply satisfied with the high-quality care at Dhamma Hospital. The doctors made the treatment plan clear and delivered prompt care. The nursing team was easy to talk to and provided daily updates.",
    name: "Priya Sharma",
    title: "Family Member",
    image: "/images/why-choose/expert-faculty.png",
  },
  {
    rating: 5.0,
    text: "Outstanding service and very polite staff. The 24x7 emergency response was a lifesaver for my grandfather. The specialists maintained excellent communication throughout the critical phase.",
    name: "Amit Patel",
    title: "Family Member",
    image: "/images/why-choose/emergency-247.png",
  },
  {
    rating: 4.8,
    text: "Clean, hygienic, and highly professional environment. The diagnostic labs are incredibly fast and accurate. The doctors genuinely care about your well-being beyond just writing prescriptions.",
    name: "Sneha Gupta",
    title: "Patient, General Medicine",
    image: "/images/why-choose/modern-infra.png",
  }
];

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      // Scroll by roughly the width of one visible card + gap
      const scrollAmount = clientWidth > 768 ? clientWidth / 2 : clientWidth * 0.85;
      
      let newScroll = scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount);
      
      // Loop back if at the end
      if (direction === "right" && scrollLeft + clientWidth >= scrollWidth - 10) {
        newScroll = 0;
      }
      // Loop to end if at the start
      if (direction === "left" && scrollLeft <= 10) {
        newScroll = scrollWidth;
      }

      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      scroll("right");
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#0a061d] text-white py-16 md:py-24 overflow-hidden relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Image & Overall Rating */}
          <div className="lg:col-span-4 relative flex flex-col justify-end min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden pt-10 px-6 pb-10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/contact_doctor.png"
                alt="Hospital Care"
                fill
                className="object-cover object-top opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a061d] via-[#0a061d]/80 to-transparent"></div>
            </div>

            {/* Content over image */}
            <div className="relative z-10 mt-auto">
              <h2 className="text-6xl md:text-7xl font-bold mb-4">4.9</h2>
              <p className="text-lg md:text-xl font-medium leading-snug mb-8">
                Average based on 500+ patient reviews. All chances are you'll be impressed with our care too.
              </p>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => scroll("left")}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors z-20 cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => scroll("right")}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors z-20 cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Testimonial Slider */}
          <div className="lg:col-span-8 relative">
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 pt-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="snap-start flex-shrink-0 w-[85%] sm:w-[65%] md:w-[50%] lg:w-[48%] xl:w-[45%] bg-[#3b28cc] p-8 md:p-10 relative flex flex-col min-h-[350px]"
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)",
                    borderTopRightRadius: "8px",
                    borderTopLeftRadius: "16px",
                    borderBottomLeftRadius: "16px",
                    borderBottomRightRadius: "16px",
                  }}
                >
                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl font-bold">{t.rating.toFixed(1)}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill={i < Math.floor(t.rating) ? "currentColor" : "none"}
                          className={i < Math.floor(t.rating) ? "text-yellow-400" : "text-yellow-400/30"}
                        />
                      ))}
                    </div>
                  </div>

                  <hr className="border-white/20 mb-8" />

                  {/* Text */}
                  <p className="text-base md:text-[17px] leading-relaxed font-medium mb-12 flex-grow text-white/95">
                    {t.text}
                  </p>

                  {/* Profile */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-white/10 relative flex-shrink-0">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{t.name}</h4>
                      <p className="text-white/70 text-sm">{t.title}</p>
                    </div>
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
