"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  Phone,
  Stethoscope,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export interface DeptData {
  name: string;
  tagline: string;
  heroImage: string;
  accentColor?: string;
  overview: string;
  highlights: string[];
  services: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
  facilities: string[];
  faqs: { q: string; a: string }[];
  splitImage?: string;
  splitHeading?: string;
  splitText?: string;
}

const BRAND_BLUE = "#0057A8";
const BRAND_RED = "#CC2027";
const BRAND_GOLD = "#F5BE00";

export default function DepartmentPage({ data }: { data: DeptData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openBooking } = useBooking();
  const treatmentItems = data.highlights.slice(0, 6);
  const clinicalServices = data.services.slice(0, 6);

  return (
    <div className="overflow-x-hidden bg-white text-slate-900">
      {/* Cardiology-style hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #003580 0%, #0057A8 55%, #0069CC 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='.5'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative mx-auto flex min-h-[300px] max-w-[1200px] flex-col items-center gap-8 px-5 py-10 sm:px-6 lg:min-h-[340px] lg:flex-row lg:px-12">
          <div className="z-10 flex-1 text-center lg:text-left">
            <p className="mb-3 text-xs font-bold uppercase tracking-[3px]" style={{ color: BRAND_GOLD }}>
              Department of
            </p>
            <h1
              className="mb-4 text-3xl font-black uppercase leading-tight tracking-wide sm:text-5xl lg:text-6xl"
              style={{ color: "#fff", WebkitTextFillColor: "#fff", textShadow: "2px 2px 8px rgba(0,0,0,.35)" }}
            >
              {data.name}
            </h1>
            <p className="mx-auto mb-7 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base lg:mx-0">
              {data.tagline}
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <button
                onClick={openBooking}
                className="flex items-center gap-2 rounded-md px-5 py-3 text-xs font-bold text-white shadow-lg transition hover:opacity-90 sm:text-sm"
                style={{ background: BRAND_RED }}
              >
                <Calendar size={17} /> Book an Appointment
              </button>
              <a
                href="https://wa.me/917643990301"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/20 sm:text-sm"
              >
                <Phone size={17} /> Get a Call Back
              </a>
            </div>
          </div>

          <div className="relative hidden h-[240px] w-[300px] flex-none overflow-hidden rounded-2xl border border-white/20 shadow-2xl sm:block lg:h-[280px] lg:w-[360px]">
            <Image
              src={data.heroImage}
              alt={`${data.name} department`}
              fill
              priority
              sizes="(max-width: 1024px) 300px, 360px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#003580]/20" />
          </div>
        </div>
      </section>

      {/* About and department facts */}
      <section className="border-b border-slate-100 py-12 lg:py-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-12">
          <div className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-9 w-1 rounded-full" style={{ background: BRAND_BLUE }} />
              <h2 className="text-2xl font-bold sm:text-3xl">
                About <span style={{ color: BRAND_BLUE }}>{data.name}</span>
              </h2>
            </div>
            <p className="mb-6 text-[15px] leading-7 text-slate-600">{data.overview}</p>

            <div className="space-y-3">
              {data.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <CheckCircle2 size={19} className="mt-0.5 flex-none text-[#0057A8]" />
                  <p className="text-sm leading-6 text-slate-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg lg:col-span-5">
            <div className="px-6 py-5 text-white" style={{ background: BRAND_BLUE }}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">Department at a glance</p>
              <h3
                className="mt-1 text-xl font-bold"
                style={{ color: "#fff", WebkitTextFillColor: "#fff" }}
              >
                {data.name}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-px bg-slate-200">
              {data.stats.map((stat) => (
                <div key={stat.label} className="bg-white p-5 text-center">
                  <p className="text-2xl font-black" style={{ color: BRAND_BLUE }}>{stat.value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
            <button
              onClick={openBooking}
              className="flex w-full items-center justify-center gap-2 px-5 py-4 text-sm font-bold text-white transition hover:opacity-90"
              style={{ background: BRAND_RED }}
            >
              <Calendar size={17} /> Schedule an Appointment
            </button>
          </aside>
        </div>
      </section>

      {/* What we cover and clinical services */}
      <section className="border-b border-slate-200 bg-slate-50 py-12 lg:py-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-7 px-5 sm:px-6 md:grid-cols-2 lg:px-12">
          <ContentListCard
            image={data.heroImage}
            title="What we cover"
            items={treatmentItems}
            accent={BRAND_GOLD}
          />
          <ContentListCard
            image={data.splitImage || data.heroImage}
            title="Clinical services"
            items={clinicalServices.map((service) => service.title)}
            accent="#60a5fa"
          />
        </div>
      </section>

      {/* Core expertise */}
      <section className="border-b border-slate-100 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-12">
          <SectionTitle eyebrow="Our specialisations" title="Core Expertise" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.services.map((service, index) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0057A8] transition group-hover:bg-[#0057A8] group-hover:text-white">
                  <Stethoscope size={23} />
                </div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Expertise {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2 font-bold text-slate-900">{service.title}</h3>
                <p className="text-sm leading-6 text-slate-500">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-12 lg:py-16" style={{ background: "linear-gradient(135deg, #003580 0%, #0057A8 100%)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-12">
          <div className="mb-9 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[3px]" style={{ color: BRAND_GOLD }}>World Class</p>
            <h2 className="text-3xl font-bold" style={{ color: "#fff", WebkitTextFillColor: "#fff" }}>Our Facilities</h2>
            <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-orange-400" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.facilities.map((facility) => (
              <div key={facility} className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 p-4">
                <CheckCircle2 size={18} className="flex-none text-orange-300" />
                <span className="text-sm font-medium text-white">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department-specific FAQ */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <SectionTitle eyebrow={`${data.name} information`} title="Frequently Asked Questions" />
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            {data.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className="border-b border-slate-200 last:border-0">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold text-slate-800 transition hover:bg-slate-50"
                    aria-expanded={isOpen}
                  >
                    {faq.q}
                    <ChevronDown size={19} className={`flex-none text-[#0057A8] transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && <p className="px-5 pb-5 text-sm leading-7 text-slate-600">{faq.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact information */}
      <section className="border-y border-slate-100 bg-slate-50 py-14">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-6">
          <SectionTitle eyebrow="Get in touch" title="Contact Information" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <ContactCard
              icon={MapPin}
              title="Our Location"
              text="Opposite Canara Bank, Phulwari Sharif, Near AIIMS Gate No. 1, Patna, Bihar"
              color="bg-violet-100 text-violet-950"
            />
            <ContactCard
              icon={Phone}
              title="Connect With Us"
              text="+91 7643990301 / +91 7643990302"
              color="bg-orange-100 text-orange-950"
            />
            <ContactCard
              icon={Clock3}
              title="Visiting Hours"
              text="Monday – Saturday: 9:00 AM – 6:00 PM"
              color="bg-emerald-100 text-emerald-950"
            />
          </div>
        </div>
      </section>

      {/* Appointment strip */}
      <section className="px-5 py-9 sm:px-6" style={{ background: "linear-gradient(90deg, #CC2027, #a01820)" }}>
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-bold" style={{ color: "#fff", WebkitTextFillColor: "#fff" }}>
              Need an Appointment?
            </h2>
            <p className="mt-1 text-sm text-red-100">Our {data.name} team is ready to assist you.</p>
          </div>
          <button
            onClick={openBooking}
            className="rounded-lg bg-white px-8 py-3 text-sm font-bold shadow-sm transition hover:bg-slate-50"
            style={{ color: BRAND_RED }}
          >
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
}

function ContentListCard({
  image,
  title,
  items,
  accent,
}: {
  image: string;
  title: string;
  items: string[];
  accent: string;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-44">
        <Image src={image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        <div className="absolute inset-0 flex items-end bg-gradient-to-r from-slate-950/80 to-slate-900/10 p-5">
          <h2 className="text-xl font-bold" style={{ color: "#fff", WebkitTextFillColor: "#fff" }}>
            {title}<span style={{ color: accent }}>:</span>
          </h2>
        </div>
      </div>
      <ul className="space-y-3 p-6">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
            <span className="mt-2 h-2 w-2 flex-none rounded-full" style={{ background: BRAND_BLUE }} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="mb-2 text-xs font-bold uppercase tracking-[3px]" style={{ color: BRAND_RED }}>{eyebrow}</p>
      <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-3 h-1 w-14 rounded-full" style={{ background: BRAND_GOLD }} />
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  text,
  color,
}: {
  icon: typeof MapPin;
  title: string;
  text: string;
  color: string;
}) {
  return (
    <div className={`rounded-2xl p-6 ${color}`}>
      <Icon size={25} className="mb-4" />
      <h3 className="mb-2 text-sm font-black uppercase tracking-wider">{title}</h3>
      <p className="text-sm leading-6 opacity-80">{text}</p>
    </div>
  );
}
