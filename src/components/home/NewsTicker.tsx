import { Star } from "lucide-react";

export default function NewsTicker() {
  return (
    <div className="bg-brandBlueDark border-t-2 border-brandSaffron">
      <div className="flex items-stretch">
        {/* Left badge — flush left */}
        <div className="bg-red-600 flex items-center gap-1.5 px-4 py-2 flex-shrink-0">
          <span className="text-white text-xs font-extrabold uppercase tracking-wider whitespace-nowrap">
            What&apos;s New
          </span>
        </div>

        {/* Ticker area */}
        <div className="flex-1 overflow-hidden flex items-center bg-brandBlueDark px-3">
          <div className="whitespace-nowrap animate-marquee flex items-center gap-6 text-white text-xs font-medium">
            <span className="flex items-center gap-2">
              <Star size={10} className="text-brandSaffron fill-brandSaffron flex-shrink-0" />
              राजभाषा (हिंदी) रोस्टर हेतु जानकारी उपलब्ध कराने के संबंध में।
            </span>
            <span className="flex items-center gap-2">
              <Star size={10} className="text-brandSaffron fill-brandSaffron flex-shrink-0" />
              Result of Senior Resident (Non-Academic) on ad-hoc basis
            </span>
            <span className="flex items-center gap-2">
              <Star size={10} className="text-brandSaffron fill-brandSaffron flex-shrink-0" />
              Admissions Open for MBBS 2026-27 — Apply Now
            </span>
            <span className="flex items-center gap-2">
              <Star size={10} className="text-brandSaffron fill-brandSaffron flex-shrink-0" />
              New MRI Machine Installed — Advanced 1.5T Imaging Available 24x7
            </span>
            <span className="flex items-center gap-2">
              <Star size={10} className="text-brandSaffron fill-brandSaffron flex-shrink-0" />
              Free Health Camp on 25th June — Registration Open
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
