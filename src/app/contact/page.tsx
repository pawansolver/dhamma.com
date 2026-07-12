"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "@/components/home/ContactForm";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>
            
            {/* HERO */}
            <section className="relative h-[48vh] min-h-[380px] flex items-center justify-center overflow-hidden text-white">
                <div className="absolute inset-0 z-0">
                    {/* Teal gradient overlay matching screenshot */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#006b5e]/90 via-[#00a896]/85 to-[#004d43]/92 z-10" />
                    <Image src="/contact_bg_hospital.png" alt="Contact Us" fill className="object-cover object-center" priority />
                </div>
                <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                        Contact Us
                    </h1>
                    <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
                        We are here 24/7 for clinical enquiries, emergency healthcare, and academic admissions.
                    </p>
                </div>
            </section>

            {/* DETAILS, IMAGES &amp; MAP SPLIT SECTION */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3 block">Reach Out</span>
                        <h2 className="section-heading" style={{ fontFamily: serifFont }}>Location &amp; Highlights</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            Locate Dhamma Superspeciality Hospital in Patna. Browse campus captures and navigate using the interactive map interface below.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                        
                        {/* Left Wing — Descriptive Images */}
                        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
                            
                            <div className="relative h-[240px] w-full rounded-[2.5rem] overflow-hidden shadow-md group bg-slate-100 border border-slate-100">
                                <Image 
                                    src="/carousel-1.png" 
                                    alt="Central Hospital Wing" 
                                    fill 
                                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6">
                                    <span className="text-[8px] bg-emerald-500 text-white font-extrabold px-3 py-1 rounded-full uppercase tracking-wider w-fit mb-2">Hospital Wing</span>
                                    <h4 className="text-white font-bold text-sm font-montserrat">Dhamma Superspeciality Hospital Entrance</h4>
                                    <p className="text-slate-300 text-[10px] mt-1 font-medium">State-of-the-art outpatient OPDs and clinical trauma emergency divisions.</p>
                                </div>
                            </div>

                            <div className="relative h-[240px] w-full rounded-[2.5rem] overflow-hidden shadow-md group bg-slate-100 border border-slate-100">
                                <Image 
                                    src="/carousel-2.png" 
                                    alt="Academic Lecture Galleries" 
                                    fill 
                                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6">
                                    <span className="text-[8px] bg-blue-500 text-white font-extrabold px-3 py-1 rounded-full uppercase tracking-wider w-fit mb-2">Academic Block</span>
                                    <h4 className="text-white font-bold text-sm font-montserrat">Central Reading &amp; Lecture Halls</h4>
                                    <p className="text-slate-300 text-[10px] mt-1 font-medium">Spacious digital learning centers, library archives, and seminar decks.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Wing — Interactive Google Maps */}
                        <div className="lg:col-span-7 bg-slate-50 border border-slate-150 p-6 rounded-[3rem] shadow-sm flex flex-col justify-between min-h-[480px]">
                            <div>
                                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-2">Google Map Navigation</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 font-montserrat" style={{ fontFamily: serifFont }}>
                                    Find Us in Patna
                                </h3>
                                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                                    Dhamma Superspeciality Hospital is prominently situated **Opposite Canara Bank, Phulwari Sharif, Near AIIMS Gate No. 1, Patna, India, Bihar**. Use the live interactive map directions for seamless transit.
                                </p>
                            </div>

                            {/* Google Map Iframe */}
                            <div className="w-full flex-grow rounded-2xl overflow-hidden shadow-inner border border-slate-200 min-h-[320px] relative bg-slate-200">
                                <iframe 
                                    src="https://maps.google.com/maps?q=Opposite+Canara+Bank,+Phulwari+Sharif,+Near+AIIMS+Gate+No.+1,+Patna,+Bihar&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen={true} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* INTEGRATED CONTACT FORM COMPONENT */}
            <section id="contact-form" className="border-t border-slate-100">
                <ContactForm />
            </section>
        </div>
    );
}
