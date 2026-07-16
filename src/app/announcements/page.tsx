"use client";

import { useEffect, useState } from "react";
import { Megaphone, Search, ChevronLeft, ChevronRight, FileText, ImageIcon } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000/api";
const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE || "http://localhost:5000";

interface Announcement {
  id: number;
  title: string;
  content: string;
  thumbnail: string | null;
  pdfAttachment: string | null;
  isActive: boolean;
  sortOrder: number;
  createdAt: string;
}

const buildAssetUrl = (relative: string) =>
  `${ASSET_BASE}${relative.startsWith("/") ? "" : "/"}${relative}`;

interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
};

export default function AnnouncementsListingPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const limit = 12;

  useEffect(() => {
    const controller = new AbortController();

    const fetchAnnouncements = async () => {
      setLoading(true);
      setError("");
      try {
        const params = new URLSearchParams({
          isActive: "true",
          page: String(page),
          limit: String(limit),
        });
        if (search) params.append("search", search);

        const res = await fetch(`${API_BASE}/announcements?${params.toString()}`, {
          signal: controller.signal,
          cache: "no-store",
        });
        const data = await res.json();
        if (data.success) {
          setAnnouncements(Array.isArray(data.data) ? data.data : []);
          setPagination(data.pagination || null);
        } else {
          setError(data.message || "Failed to load announcements.");
        }
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError("Server not reachable. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
    return () => controller.abort();
  }, [page, search]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    setSearch(searchInput.trim());
  };

  const totalPages = pagination?.totalPages || 1;

  return (
    <div className="bg-bgLight min-h-screen">
      {/* Hero */}
      <section className="relative bg-brandBlue text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="container-custom relative">
          <p className="text-brandSaffron text-xs font-bold tracking-[0.25em] uppercase mb-2">Announcements</p>
          <h1 className="text-3xl md:text-4xl font-extrabold !text-white">Important Announcements</h1>
          <p className="text-white/70 text-sm md:text-base mt-2 max-w-2xl">
            Stay informed about the latest announcements, circulars and important updates from Dhamma Institute of Medical Sciences Patna.
          </p>

          <form onSubmit={handleSearch} className="mt-6 flex max-w-md gap-2">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search announcements…"
                className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/10 backdrop-blur border border-white/20 placeholder-white/60 text-white text-sm outline-none focus:border-brandSaffron"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2.5 rounded-lg bg-brandSaffron text-brandBlue font-bold text-sm hover:bg-yellow-400 transition"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Listing */}
      <section className="container-custom py-10">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl border border-border h-[180px] animate-pulse" />
            ))}
          </div>
        ) : error ? (
          <div className="bg-white rounded-xl border border-red-200 p-8 text-center text-red-600 text-sm">{error}</div>
        ) : announcements.length === 0 ? (
          <div className="bg-white rounded-xl border border-border p-12 text-center text-gray-500">
            <p className="font-semibold text-base mb-1">No announcements found.</p>
            <p className="text-sm">
              {search ? `Nothing matched "${search}". Try a different search.` : "Please check back later."}
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {announcements.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
                >
                  <div className="h-40 bg-gray-100 relative">
                    {item.thumbnail ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={buildAssetUrl(item.thumbnail)} alt={item.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300">
                        <ImageIcon size={40} />
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-brandBlue/10 flex items-center justify-center">
                        <Megaphone size={16} className="text-brandBlue" />
                      </div>
                      <span className="text-[11px] text-gray-400 font-semibold">{formatDate(item.createdAt)}</span>
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm leading-snug line-clamp-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-3 flex-1">{item.content}</p>
                    {item.pdfAttachment && (
                      <a
                        href={buildAssetUrl(item.pdfAttachment)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition self-start"
                      >
                        <FileText size={14} /> View PDF
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="p-2 rounded-lg bg-white border border-border text-gray-700 hover:bg-bgLight disabled:opacity-40"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-sm text-gray-600 font-medium px-3">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages}
                  className="p-2 rounded-lg bg-white border border-border text-gray-700 hover:bg-bgLight disabled:opacity-40"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
