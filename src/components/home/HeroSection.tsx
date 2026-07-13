"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { MessageCircle, Pause, Play, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const slides = [
  {
    image: "/images/hero/hero-3.png",
    title: (
      <>
        <span className="text-[#003B5C] uppercase">KEEP ON</span>
        <span className="text-[#1D70B8] uppercase">CHANGING</span>
        <span className="text-[#1D70B8] uppercase">LIVES FOR THE BETTER</span>
      </>
    ),
    description: "World-class healthcare driven by compassion, dedicated to making a real difference in your journey to wellness.",
  },
  {
    image: "/images/facilities/operation-theatre.png",
    title: (
      <>
        <span className="text-[#061836]">Safeguarding Tomorrow:</span>
        <span className="text-[#061836]">Our Oath to Preserve Lives</span>
      </>
    ),
    description: "Embrace a world of comprehensive healthcare where your well-being takes center stage. At Dhamma Superspeciality Hospital, we're dedicated to providing you with personalized medical services.",
  },
  {
    image: "/images/herrroo/gfs.png",
    title: (
      <>
        <span className="text-[#061836]">Transforming Lives,</span>
        <span className="text-[#061836]">Restoring Your Health</span>
      </>
    ),
    description: "Embrace a world of comprehensive healthcare where your well-being takes center stage. At Dhamma Superspeciality Hospital, we're dedicated to providing you with personalized medical services.",
    button: "Learn More",
  },
  {
    image: "/images/herrroo/917A1613-scaled.jpg",
    title: (
      <>
        <span className="text-[#003B5C] uppercase">Expert</span>
        <span className="text-[#1D70B8] uppercase">Medical Team</span>
      </>
    ),
    description: "250+ experienced doctors & faculty across 20+ departments ensuring you receive the best care possible.",
  },
  {
    image: "/images/herrroo/917A1641-scaled.jpg",
    title: (
      <>
        <span className="text-[#003B5C] uppercase">Advanced</span>
        <span className="text-[#1D70B8] uppercase">Surgical Care</span>
      </>
    ),
    description: "Equipped with modern OT, ICU, NICU & PICU with ventilator support for critical emergencies.",
  }
];

export default function HeroSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const router = useRouter();

  const nextSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(nextSlide, 5000); // Slightly longer for the animation to complete
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  return (
    <section className="relative w-full h-[calc(100vh-80px)] md:h-[calc(100vh-96px)] min-h-[500px] bg-[#f5f4ef] overflow-hidden flex items-center">

      {/* ── Custom Animation Styles for the Circular Wipe ── */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes wipe-up {
          0% {
            clip-path: circle(0% at 50% 100%);
          }
          100% {
            clip-path: circle(150% at 50% 100%);
          }
        }
        .slide-animate-in {
          animation: wipe-up 1.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          z-index: 10;
        }
        .slide-hidden {
          opacity: 0;
          z-index: 0;
        }
        .slide-visible {
          opacity: 1;
          z-index: 1;
        }
      `}} />

      {/* Main Container for the Image area (Left curve, flush top/right/bottom) */}
      <div
        className="absolute top-0 right-0 w-[80%] md:w-[70%] lg:w-[65%] xl:w-[60%] h-full z-0"
        style={{ clipPath: 'ellipse(100% 100% at 100% 50%)' }}
      >
        {/* Yellow gradient overlay matching the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e3d081] via-[#e3d081]/30 to-transparent z-20 w-[40%] h-full pointer-events-none mix-blend-multiply"></div>

        {/* Sliding Images */}
        {slides.map((slide, idx) => (
          <div
            key={`mask-${idx}`}
            className={`absolute inset-0 ${currentIdx === idx ? 'slide-animate-in' : 'slide-visible'}`}
            style={{ display: currentIdx === idx ? 'block' : 'none' }}
          >
          </div>
        ))}
        {/* Proper layering for animation: previous slide stays, new slide wipes over it */}
        {slides.map((slide, idx) => {
          let className = "absolute inset-0 slide-hidden";
          if (idx === currentIdx) {
            className = "absolute inset-0 slide-animate-in";
          } else if (idx === (currentIdx - 1 + slides.length) % slides.length) {
            // Previous slide stays visible behind the wiping one
            className = "absolute inset-0 slide-visible";
          }

          return (
            <div key={`img-${idx}`} className={className}>
              <Image
                src={slide.image}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover object-center"
                priority={idx === 0 || idx === 1}
              />
            </div>
          );
        })}
      </div>

      {/* Left Content - Typography */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-12 md:px-20 lg:px-24 flex flex-col justify-center">
        {slides.map((slide, idx) => (
          <div 
            key={idx}
            className="absolute transition-all duration-1000 ease-in-out flex flex-col items-start"
            style={{ 
              opacity: currentIdx === idx ? 1 : 0,
              transform: currentIdx === idx ? 'translateY(0)' : 'translateY(20px)',
              pointerEvents: currentIdx === idx ? 'auto' : 'none',
              zIndex: currentIdx === idx ? 20 : 0
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.5rem] font-black leading-[1.05] tracking-tight flex flex-col mb-4 sm:mb-6 max-w-2xl">
              {slide.title}
            </h1>
            <p className="text-base sm:text-lg text-[#061836]/70 font-medium max-w-xl leading-relaxed mb-8">
              {slide.description}
            </p>
            {slide.button && (
              <button 
                onClick={() => router.push('/about')}
                className="flex items-center gap-2 bg-[#0d6efd] hover:bg-[#0b5ed7] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
              >
                <span className="bg-white text-[#0d6efd] rounded-full p-1"><ArrowRight size={16} strokeWidth={3} /></span>
                <span className="text-[15px]">{slide.button}</span>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Right Floating Buttons */}
      <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-16 z-30 flex flex-col items-end gap-4">
        {/* Pause/Play Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#003B5C] text-white flex items-center justify-center hover:bg-[#002840] transition-transform hover:scale-110 shadow-lg mr-2"
          aria-label={isPlaying ? "Pause slider" : "Play slider"}
        >
          {isPlaying ? (
            <Pause size={18} fill="currentColor" />
          ) : (
            <Play size={20} fill="currentColor" className="ml-1" />
          )}
        </button>

        {/* Ask Me Anything Button */}
        <button
          onClick={() => router.push('/contact')}
          className="flex items-center justify-center gap-2 lg:gap-3 bg-[#FFC107] hover:bg-[#FFB300] text-[#003B5C] font-semibold py-3 lg:py-3.5 px-6 lg:px-8 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle size={20} strokeWidth={2} className="rotate-y-180" style={{ transform: 'scaleX(-1)' }} />
          <span className="text-[14px] lg:text-[15px]">Ask Me Anything</span>
        </button>
      </div>

    </section>
  );
}