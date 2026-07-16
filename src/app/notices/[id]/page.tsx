"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, FileText, ImageIcon, Tag } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000/api";
const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE || "http://localhost:5000";

interface Notice {
  id: number;
  title: string;
  content: string;
  publishDate: string;
  expiryDate: string | null;
  thumbnail: string | null;
  pdfAttachment: string | null;
  isNewTag: boolean;
  isActive: boolean;
}

const buildAssetUrl = (relative: string) =>
  `${ASSET_BASE}${relative.startsWith("/") ? "" : "/"}${relative}`;

const formatDate = (dateStr: string | null) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
};

export default function NoticeDetailPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;

  const [notice, setNotice] = useState<Notice | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();
    const fetchNotice = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`${API_BASE}/notices/${id}`, {
          signal: controller.signal,
          cache: "no-store",
        });
        const data = await res.json();
        if (data.success && data.data) {
          setNotice(data.data);
        } else {
          setError(data.message || "Notice not found.");
        }
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError("Server not reachable.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotice();
    return () => controller.abort();
  }, [id]);

  return (
    <div className="bg-bgLight min-h-screen">
      <section className="container-custom py-10">
        <Link
          href="/notices"
          className="inline-flex items-center gap-1 text-sm font-semibold text-brandBlue hover:text-brandSaffron transition mb-6"
        >
          <ArrowLeft size={14} /> Back to all notices
        </Link>

        {loading ? (
          <div className="bg-white rounded-xl border border-border p-8 animate-pulse h-[400px]" />
        ) : error ? (
          <div className="bg-white rounded-xl border border-red-200 p-8 text-center text-red-600 text-sm">
            {error}
          </div>
        ) : !notice ? (
          <div className="bg-white rounded-xl border border-border p-8 text-center text-gray-500 text-sm">
            Notice not available.
          </div>
        ) : (
          <article className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            {notice.thumbnail ? (
              <div className="bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={buildAssetUrl(notice.thumbnail)}
                  alt={notice.title}
                  className="w-full max-h-[400px] object-cover"
                />
              </div>
            ) : (
              <div className="h-40 bg-gradient-to-br from-brandBlue to-[#2d5ba0] flex items-center justify-center text-white/30">
                <ImageIcon size={56} />
              </div>
            )}

            <div className="p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-bgLight px-2.5 py-1 rounded-full">
                  <Calendar size={12} /> {formatDate(notice.publishDate)}
                </span>
                {notice.isNewTag && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full">
                    <Tag size={12} /> NEW
                  </span>
                )}
                {notice.expiryDate && (
                  <span className="text-xs font-medium text-gray-500">
                    Valid till: {formatDate(notice.expiryDate)}
                  </span>
                )}
              </div>

              <h1 className="!text-gray-800 text-2xl md:text-3xl font-extrabold leading-tight mb-4">
                {notice.title}
              </h1>

              {notice.content && (
                <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-line">
                  {notice.content}
                </div>
              )}

              {notice.pdfAttachment && (
                <a
                  href={buildAssetUrl(notice.pdfAttachment)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 transition"
                >
                  <FileText size={16} /> Download PDF Attachment
                </a>
              )}
            </div>
          </article>
        )}
      </section>
    </div>
  );
}
