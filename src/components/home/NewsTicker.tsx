"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface TickerItem {
  id: number;
  textEnglish: string;
  textHindi: string | null;
  link: string | null;
}

export default function NewsTicker() {
  const [tickers, setTickers] = useState<TickerItem[]>([]);
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000/api";

  useEffect(() => {
    fetch(`${API_BASE}/news-tickers/active`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setTickers(data.data);
        }
      })
      .catch(err => console.error("Failed to fetch news tickers", err));
  }, [API_BASE]);

  // If no tickers are available, we can either return null or show a default message.
  // We'll show a default message to keep the layout stable.
  const displayTickers = tickers.length > 0 ? tickers : [
    { id: 'default', textEnglish: 'Welcome to Buddha Hospital & Research Institute', textHindi: '', link: null }
  ];

  return (
    <div className="bg-brandBlueDark border-t-2 border-brandSaffron">
      <div className="flex items-stretch">
        {/* Left badge — flush left */}
        <div className="bg-red-600 flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 flex-shrink-0">
          <span className="text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-wider whitespace-nowrap">
            What&apos;s New
          </span>
        </div>

        {/* Ticker area */}
        <div className="flex-1 overflow-hidden flex items-center bg-brandBlueDark px-2 sm:px-3 relative">
          <div className="whitespace-nowrap animate-marquee flex items-center gap-4 sm:gap-6 text-white text-[11px] sm:text-xs font-medium hover:[animation-play-state:paused]">
            {displayTickers.map((ticker) => (
              <span key={ticker.id} className="flex items-center gap-2">
                <Star size={10} className="text-brandSaffron fill-brandSaffron flex-shrink-0" />
                {ticker.link ? (
                  <a href={ticker.link} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-brandSaffron transition-colors">
                    {ticker.textHindi ? `${ticker.textHindi} — ` : ''}{ticker.textEnglish}
                  </a>
                ) : (
                  <>
                    {ticker.textHindi ? `${ticker.textHindi} — ` : ''}{ticker.textEnglish}
                  </>
                )}
              </span>
            ))}
            
            {/* Duplicate for seamless marquee if needed, animate-marquee usually handles this with duplicated content in CSS, 
                but just in case we add it twice for longer screens if there are very few tickers. */}
            {tickers.length > 0 && tickers.length < 5 && displayTickers.map((ticker) => (
              <span key={`dup-${ticker.id}`} className="flex items-center gap-2" aria-hidden="true">
                <Star size={10} className="text-brandSaffron fill-brandSaffron flex-shrink-0" />
                {ticker.link ? (
                  <a href={ticker.link} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-brandSaffron transition-colors">
                    {ticker.textHindi ? `${ticker.textHindi} — ` : ''}{ticker.textEnglish}
                  </a>
                ) : (
                  <>
                    {ticker.textHindi ? `${ticker.textHindi} — ` : ''}{ticker.textEnglish}
                  </>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
