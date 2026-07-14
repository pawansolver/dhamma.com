"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/context/BookingContext";

import {
    Activity, ShieldCheck, HeartPulse, Stethoscope, Microscope, 
    Pill, Clock, Award, Users, CheckCircle, ChevronRight,
    Hospital, Target, PhoneCall, Globe, Atom, Network, 
    Dna, GraduationCap, Building2, FlaskConical, Lightbulb,
    FileText, UserCheck, Check, ArrowRight, ArrowLeft, MapPin, Layers, Monitor, 
    Database, Heart, ShieldAlert, AlertTriangle, Eye, Sparkles,
    Volume2, Smile, Baby, Thermometer, Brain, Bone, Activity as MuscleIcon
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

// Custom Blood Drop Lucide Icon replacement representation
function BloodDropIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className={className}
        >
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
    );
}

// Custom Scales of Justice Icon representation for Forensic Medicine
function JusticeIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <path d="M16 16c0-3.5-3.5-3.5-3.5-3.5s-3.5 0-3.5 3.5" />
            <path d="M12 2v20" />
            <path d="M2 22h20" />
            <path d="M7 8h10" />
            <path d="M7 8c0 2 2 3.5 2 3.5s2-1.5 2-3.5" />
            <path d="M13 8c0 2 2 3.5 2 3.5s2-1.5 2-3.5" />
        </svg>
    );
}

// Custom teeth icon representation for Dentistry
function TeethIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <path d="M12 2c-3.3 0-6 2.7-6 6c0 3 2.5 5.5 5 7.5-.8 1-.9 2-.9 3.5 0 2.2 1.8 4 4.9 4 3.1 0 5-1.8 5-4 0-1.5-.1-2.5-.9-3.5 2.5-2 5-4.5 5-7.5 0-3.3-2.7-6-6-6z" />
            <path d="M9.5 8h5" />
        </svg>
    );
}

// Interactive dynamic visual charts representing clinical/practical workflows based on department theme
const PracticalInfographic = ({ type }: { type: string }) => {
    if (type === "forensic-medicine") {
        return (
            <div className="bg-slate-900 border border-zinc-700/30 rounded-3xl p-6 text-white max-w-sm mx-auto shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-500/10 rounded-full blur-xl" />
                <div className="flex items-center justify-between mb-4 border-b border-zinc-800 pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Bone Density & Age profile</span>
                    <span className="text-[9px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-full">Skeletal Audit</span>
                </div>
                <div className="space-y-3 text-xs">
                    <div className="flex justify-between border-b border-zinc-900 pb-1">
                        <span className="text-zinc-500">Femur Fusion:</span>
                        <span className="text-zinc-300 font-bold">Completed (Age &gt; 18)</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-1">
                        <span className="text-zinc-500">Clavicle Medial:</span>
                        <span className="text-zinc-300 font-bold">Unfused (Age &lt; 25)</span>
                    </div>
                    <div className="flex justify-between pb-1">
                        <span className="text-zinc-500">Estimated Range:</span>
                        <span className="text-teal-400 font-black">19 - 24 Years</span>
                    </div>
                </div>
            </div>
        );
    }

    if (type === "orthopaedics") {
        return (
            <div className="bg-slate-900 border border-blue-500/20 rounded-3xl p-6 text-white max-w-sm mx-auto shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
                <div className="flex items-center justify-between mb-4 border-b border-blue-900 pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">Flexion & Extension Angle</span>
                    <span className="text-[9px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">Joint Mobility</span>
                </div>
                <div className="relative h-28 w-full flex items-center justify-center">
                    <svg className="w-24 h-24" viewBox="0 0 100 100">
                        {/* Circular bone joint flexion visual representation */}
                        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                        <motion.circle 
                            cx="50" 
                            cy="50" 
                            r="40" 
                            fill="none" 
                            stroke="#3b82f6" 
                            strokeWidth="4" 
                            strokeDasharray="251"
                            initial={{ strokeDashoffset: 251 }}
                            whileInView={{ strokeDashoffset: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                        />
                        <text x="50" y="55" textAnchor="middle" fill="#ffffff" className="text-sm font-black font-montserrat">135°</text>
                    </svg>
                </div>
                <div className="text-center text-[10px] text-blue-300 mt-2">Active Knee Flexion Scope Verified</div>
            </div>
        );
    }

    // Default neat medical parameter checklist
    return (
        <div className="bg-white border border-slate-200 shadow-xl rounded-3xl p-6 max-w-sm mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 to-blue-600" />
            <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] uppercase font-bold text-slate-400">BHRI Clinical Flow</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-teal-50 text-teal-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                    LIVE
                </span>
            </div>
            <div className="space-y-2">
                {[
                    { label: "Patient Diagnostics Check", val: "100% Accurate" },
                    { label: "Clinical safety Protocols", val: "Enforced" },
                    { label: "Quality Audit Verification", val: "Completed" }
                ].map((item, i) => (
                    <div key={i} className="flex justify-between border-b border-slate-100 pb-1.5 text-[11px]">
                        <span className="text-slate-400">{item.label}</span>
                        <span className="font-bold text-slate-800">{item.val}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Department Content Store for all 15 remaining departments
const departmentData: Record<string, {
    title: string;
    tagline: string;
    description: string;
    heroImage: string;
    badge: string;
    colorTheme: {
        primary: string;
        accent: string;
        badge: string;
        button: string;
        alertBg: string;
        alertText: string;
        alertIcon: string;
        glow: string;
        cardBg: string;
        iconColor: string;
        specialText: string;
    };
    curriculum: Array<{ icon: any; title: string; desc: string }>;
    practicals: string[];
    facilities: Array<{ icon: any; title: string; desc: string }>;
    faculty: Array<{ name: string; role: string; exp: string; tags: string[] }>;
    specialTitle: string;
    specialDesc: string;
    specialList: Array<{ text: string; icon: any }>;
    highlights: Array<{ icon: any; title: string; desc: string }>;
    slides: Array<{ title: string; desc: string; icon: any }>;
}> = {
    "cardiology": {
        title: "Department of Cardiology",
        tagline: "Advanced Heart Care & Interventions",
        description: "The Cardiology Department at Dhamma Hospital provides comprehensive care for heart diseases. We specialize in interventional cardiology, heart failure management, and preventive cardiac screenings.",
        heroImage: "/images/about/surgery_team.png",
        badge: "Cardiology",
        colorTheme: { primary: "", accent: "", badge: "", button: "", alertBg: "", alertText: "", alertIcon: "", glow: "", cardBg: "", iconColor: "", specialText: "" },
        curriculum: [
            { icon: HeartPulse, title: "Interventional Cardiology", desc: "Minimally invasive procedures including angioplasty and stenting." },
            { icon: Activity, title: "Electrophysiology", desc: "Diagnosis and treatment of heart rhythm disorders." },
            { icon: Stethoscope, title: "Preventive Cardiology", desc: "Comprehensive risk assessments and lifestyle intervention programs." },
            { icon: Monitor, title: "Non-Invasive Diagnostics", desc: "Advanced imaging including 2D Echo, TMT, and Holter monitoring." }
        ],
        practicals: [
            "Coronary Angiography and Angioplasty (PTCA)",
            "Pacemaker Implantations",
            "Echocardiography (2D/3D & Transesophageal)",
            "Treadmill Test (TMT) and Stress Echo"
        ],
        facilities: [
            { icon: Hospital, title: "Flat Panel Cath Lab", desc: "State-of-the-art lab for precision interventional procedures." },
            { icon: Heart, title: "Cardiac ICU (CCU)", desc: "Dedicated intensive care for critical cardiac patients." },
            { icon: Activity, title: "Advanced ECG Hub", desc: "24/7 diagnostic ECG and Echo services." }
        ],
        faculty: [
            { name: "Dr. A.K. Sharma", role: "Senior Interventional Cardiologist", exp: "15+ Years Experience", tags: ["Cath Lab", "Angioplasty"] },
            { name: "Dr. Neha Verma", role: "Consultant Cardiologist", exp: "8+ Years Experience", tags: ["Echocardiography", "Heart Failure"] }
        ],
        specialTitle: "24/7 Heart Attack Center",
        specialDesc: "Our primary angioplasty program ensures that patients experiencing a heart attack receive life-saving stent placements within the critical 'golden hour'.",
        specialList: [
            { text: "Rapid Response Protocol", icon: Clock },
            { text: "Primary Angioplasty", icon: Target },
            { text: "Thrombolytic Therapy", icon: Pill },
            { text: "Critical Care Transport", icon: Hospital }
        ],
        highlights: [
            { icon: HeartPulse, title: "Golden Hour Care", desc: "Immediate response for acute myocardial infarction." },
            { icon: ShieldCheck, title: "High Success Rate", desc: "World-class outcomes in complex angioplasties." }
        ],
        slides: [
            { title: "Advanced Cath Lab", desc: "Performing complex angioplasties with pinpoint accuracy.", icon: HeartPulse },
            { title: "Cardiac ICU", desc: "Round-the-clock intensive monitoring for critical heart patients.", icon: Activity },
            { title: "Preventive Care", desc: "Guiding patients toward healthier, heart-conscious lifestyles.", icon: ShieldCheck }
        ]
    },
    "neuro-surgery": {
        title: "Department of Neuro Surgery",
        tagline: "Precision Care for Brain & Spine",
        description: "Our neurosurgical team offers highly advanced surgical interventions for brain tumors, spinal disorders, trauma, and neurovascular diseases using cutting-edge microscopic techniques.",
        heroImage: "/carousel-1.png",
        badge: "Neuro Surgery",
        colorTheme: { primary: "", accent: "", badge: "", button: "", alertBg: "", alertText: "", alertIcon: "", glow: "", cardBg: "", iconColor: "", specialText: "" },
        curriculum: [
            { icon: Brain, title: "Brain Tumor Surgery", desc: "Microsurgical removal of benign and malignant brain tumors." },
            { icon: Bone, title: "Spine Surgery", desc: "Minimally invasive spine procedures for disc herniation and stenosis." },
            { icon: ShieldAlert, title: "Neurotrauma", desc: "Emergency management of traumatic brain and spinal cord injuries." },
            { icon: Network, title: "Neurovascular Surgery", desc: "Treatment of aneurysms, AVMs, and stroke interventions." }
        ],
        practicals: [
            "Awake Craniotomy and Brain Mapping",
            "Minimally Invasive Spine Surgery (MISS)",
            "Endoscopic Pituitary Surgery",
            "Stereotactic Biopsy"
        ],
        facilities: [
            { icon: Hospital, title: "Dedicated Neuro OT", desc: "Equipped with neuro-navigation and high-end operating microscopes." },
            { icon: Brain, title: "Neuro ICU", desc: "Specialized critical care for post-operative and trauma patients." },
            { icon: Monitor, title: "Neuro-Imaging Suite", desc: "In-house advanced MRI and CT for precise surgical planning." }
        ],
        faculty: [
            { name: "Dr. R. Pathak", role: "Chief Neurosurgeon", exp: "20+ Years Experience", tags: ["Brain Tumors", "Spine"] },
            { name: "Dr. S. K. Singh", role: "Consultant Neurosurgeon", exp: "10+ Years Experience", tags: ["Neurotrauma", "Endoscopy"] }
        ],
        specialTitle: "Minimally Invasive Spine Care",
        specialDesc: "We utilize tubular retractors and endoscopic techniques to perform spine surgeries with minimal tissue damage, leading to faster recovery and less pain.",
        specialList: [
            { text: "Microdiscectomy", icon: Bone },
            { text: "Spinal Fusion", icon: ShieldCheck },
            { text: "Kyphoplasty", icon: Target },
            { text: "Pain Management", icon: Pill }
        ],
        highlights: [
            { icon: Brain, title: "Advanced Navigation", desc: "Pinpoint accuracy during complex brain surgeries." },
            { icon: Bone, title: "Rapid Recovery", desc: "Minimally invasive spine techniques." }
        ],
        slides: [
            { title: "Neuro Navigation OT", desc: "State-of-the-art operating rooms designed for neurosurgery.", icon: Brain },
            { title: "Spinal Expertise", desc: "Restoring mobility and relieving pain with precision.", icon: Bone },
            { title: "24/7 Trauma Care", desc: "Immediate surgical intervention for head and spine injuries.", icon: ShieldAlert }
        ]
    },
    "nephrology": {
        title: "Department of Nephrology",
        tagline: "Comprehensive Kidney Care",
        description: "The Nephrology Department provides specialized care for acute and chronic kidney diseases. We offer advanced dialysis services, kidney transplant evaluation, and management of hypertension.",
        heroImage: "/images/about/doctor_child.png",
        badge: "Nephrology",
        colorTheme: { primary: "", accent: "", badge: "", button: "", alertBg: "", alertText: "", alertIcon: "", glow: "", cardBg: "", iconColor: "", specialText: "" },
        curriculum: [
            { icon: FlaskConical, title: "Chronic Kidney Disease", desc: "Comprehensive management to slow CKD progression." },
            { icon: Activity, title: "Hemodialysis", desc: "Advanced maintenance hemodialysis in a state-of-the-art unit." },
            { icon: Target, title: "Transplant Nephrology", desc: "Pre-transplant workup and post-transplant immunosuppression care." },
            { icon: Pill, title: "Hypertension Clinic", desc: "Specialized care for resistant and secondary hypertension." }
        ],
        practicals: [
            "Maintenance Hemodialysis",
            "Continuous Renal Replacement Therapy (CRRT)",
            "Kidney Biopsy",
            "Dialysis Catheter Insertion"
        ],
        facilities: [
            { icon: Monitor, title: "Modern Dialysis Unit", desc: "Equipped with latest machines and RO water plant." },
            { icon: Hospital, title: "Isolation Dialysis", desc: "Dedicated machines for seropositive patients." },
            { icon: Microscope, title: "Renal Pathology Lab", desc: "Advanced diagnostic support for kidney diseases." }
        ],
        faculty: [
            { name: "Dr. M. Kumar", role: "Senior Nephrologist", exp: "12+ Years Experience", tags: ["Dialysis", "Transplant"] },
            { name: "Dr. P. Jha", role: "Consultant Nephrologist", exp: "7+ Years Experience", tags: ["CKD", "Hypertension"] }
        ],
        specialTitle: "Advanced Dialysis Unit",
        specialDesc: "Our dialysis unit is designed for patient comfort and safety, featuring ultra-pure water systems and continuous monitoring by specialized renal nurses.",
        specialList: [
            { text: "Ultra-pure RO Water", icon: CheckCircle },
            { text: "CRRT for Critical Patients", icon: Activity },
            { text: "Dietary Counseling", icon: Users },
            { text: "Vascular Access Care", icon: ShieldCheck }
        ],
        highlights: [
            { icon: Activity, title: "24/7 Dialysis", desc: "Emergency dialysis services available round the clock." },
            { icon: ShieldCheck, title: "Infection Control", desc: "Strict protocols to ensure patient safety." }
        ],
        slides: [
            { title: "State-of-the-Art Dialysis", desc: "Providing safe and comfortable hemodialysis treatments.", icon: Activity },
            { title: "Expert Kidney Care", desc: "Managing complex renal conditions with precision.", icon: FlaskConical },
            { title: "Critical Support", desc: "CRRT for ICU patients with acute kidney injury.", icon: Monitor }
        ]
    },
    "orthopaedics": {
        title: "Department of Orthopaedics",
        tagline: "Restoring Mobility, Relieving Pain",
        description: "Our Orthopaedics team specializes in joint replacements, complex trauma care, sports injuries, and arthroscopic surgeries. We aim to restore function and improve the quality of life for our patients.",
        heroImage: "/images/about/surgery_team.png",
        badge: "Orthopaedics",
        colorTheme: { primary: "", accent: "", badge: "", button: "", alertBg: "", alertText: "", alertIcon: "", glow: "", cardBg: "", iconColor: "", specialText: "" },
        curriculum: [
            { icon: Bone, title: "Joint Replacement", desc: "Total knee and hip arthroplasty using advanced implants." },
            { icon: Target, title: "Sports Medicine", desc: "Arthroscopic ACL reconstruction and meniscus repair." },
            { icon: ShieldAlert, title: "Complex Trauma", desc: "Management of severe fractures and polytrauma." },
            { icon: Activity, title: "Pediatric Orthopaedics", desc: "Correction of congenital deformities like clubfoot." }
        ],
        practicals: [
            "Total Knee Replacement (TKR)",
            "Total Hip Replacement (THR)",
            "Knee and Shoulder Arthroscopy",
            "Fracture Fixation (ORIF/CRIF)"
        ],
        facilities: [
            { icon: Hospital, title: "Laminar Flow OT", desc: "Ultra-clean operating rooms to minimize infection risks." },
            { icon: Users, title: "Physiotherapy Center", desc: "Comprehensive rehab unit for post-operative recovery." },
            { icon: Monitor, title: "C-Arm Imaging", desc: "Intraoperative imaging for precise implant placement." }
        ],
        faculty: [
            { name: "Dr. V. N. Singh", role: "Head of Orthopaedics", exp: "18+ Years Experience", tags: ["Joint Replacement", "Trauma"] },
            { name: "Dr. A. Raj", role: "Orthopaedic Surgeon", exp: "9+ Years Experience", tags: ["Arthroscopy", "Sports Injuries"] }
        ],
        specialTitle: "Advanced Joint Replacement",
        specialDesc: "We use the latest high-flex implants and minimally invasive surgical techniques to ensure a faster return to daily activities with less post-operative pain.",
        specialList: [
            { text: "Computer Navigated Surgery", icon: Monitor },
            { text: "High-Flex Implants", icon: Bone },
            { text: "Rapid Rehab Protocols", icon: Activity },
            { text: "Pain Management", icon: Pill }
        ],
        highlights: [
            { icon: Bone, title: "Precision Surgery", desc: "Excellent outcomes in complex joint replacements." },
            { icon: Activity, title: "Quick Recovery", desc: "Early mobilization post-surgery." }
        ],
        slides: [
            { title: "Joint Replacement", desc: "Regain your active lifestyle with advanced arthroplasty.", icon: Bone },
            { title: "Trauma Care", desc: "Expert management of complex fractures and injuries.", icon: ShieldAlert },
            { title: "Sports Medicine", desc: "Minimally invasive arthroscopy for rapid recovery.", icon: Target }
        ]
    },
    "urology": {
        title: "Department of Urology",
        tagline: "Advanced Urological & Prostate Care",
        description: "The Urology Department offers comprehensive treatment for diseases of the male and female urinary tract. We specialize in endourology, laser stone surgery, prostate management, and reconstructive urology.",
        heroImage: "/carousel-1.png",
        badge: "Urology",
        colorTheme: { primary: "", accent: "", badge: "", button: "", alertBg: "", alertText: "", alertIcon: "", glow: "", cardBg: "", iconColor: "", specialText: "" },
        curriculum: [
            { icon: Target, title: "Endourology & Stone", desc: "Laser lithotripsy for kidney and ureteric stones." },
            { icon: ShieldCheck, title: "Prostate Care", desc: "Medical and surgical management of BPH (TURP/HOLEP)." },
            { icon: Microscope, title: "Uro-Oncology", desc: "Diagnosis and surgery for kidney, bladder, and prostate cancers." },
            { icon: Smile, title: "Andrology", desc: "Treatment for male infertility and sexual dysfunction." }
        ],
        practicals: [
            "PCNL and URS for Stone Disease",
            "TURP/Laser Enucleation of Prostate",
            "Urodynamic Studies",
            "Cystoscopy and Stent Removal"
        ],
        facilities: [
            { icon: Monitor, title: "Laser Surgery Suite", desc: "Equipped with advanced Holmium lasers." },
            { icon: Hospital, title: "Urodynamics Lab", desc: "For evaluation of complex bladder dysfunctions." },
            { icon: Target, title: "Lithotripsy Unit", desc: "Non-invasive stone breaking technology." }
        ],
        faculty: [
            { name: "Dr. S. K. Gupta", role: "Senior Urologist", exp: "14+ Years Experience", tags: ["Laser Surgery", "Endourology"] },
            { name: "Dr. R. Mishra", role: "Consultant Urologist", exp: "8+ Years Experience", tags: ["Prostate Care", "Andrology"] }
        ],
        specialTitle: "Laser Stone & Prostate Surgery",
        specialDesc: "Our department utilizes state-of-the-art Holmium lasers for the bloodless and minimally invasive treatment of complex kidney stones and enlarged prostates.",
        specialList: [
            { text: "Holmium Laser", icon: Sparkles },
            { text: "Day Care Surgery", icon: Clock },
            { text: "Minimal Bleeding", icon: ShieldCheck },
            { text: "Fast Recovery", icon: Activity }
        ],
        highlights: [
            { icon: Target, title: "Stone Clinic", desc: "Comprehensive management of all types of kidney stones." },
            { icon: ShieldCheck, title: "Laser Expertise", desc: "Pioneers in laser urological surgeries." }
        ],
        slides: [
            { title: "Laser Stone Surgery", desc: "Advanced, minimally invasive treatment for kidney stones.", icon: Target },
            { title: "Prostate Health", desc: "Comprehensive solutions for enlarged prostate.", icon: ShieldCheck },
            { title: "Uro-Oncology", desc: "Expert surgical care for urological cancers.", icon: Microscope }
        ]
    },
    "general-medicine": {
        title: "Department of General Medicine",
        tagline: "Comprehensive Adult Care",
        description: "General Medicine forms the backbone of Dhamma Hospital, providing expert diagnosis and management of adult diseases. We handle everything from infectious diseases to complex multisystem disorders.",
        heroImage: "/images/about/patient_story.png",
        badge: "General Medicine",
        colorTheme: { primary: "", accent: "", badge: "", button: "", alertBg: "", alertText: "", alertIcon: "", glow: "", cardBg: "", iconColor: "", specialText: "" },
        curriculum: [
            { icon: Thermometer, title: "Infectious Diseases", desc: "Management of tropical fevers, tuberculosis, and complex infections." },
            { icon: HeartPulse, title: "Lifestyle Diseases", desc: "Expert care for diabetes, hypertension, and dyslipidemia." },
            { icon: ShieldAlert, title: "Critical Care Medicine", desc: "Management of multi-organ failure and sepsis in the ICU." },
            { icon: Stethoscope, title: "Preventive Health", desc: "Comprehensive executive health check-ups and adult vaccination." }
        ],
        practicals: [
            "Management of Diabetic Ketoacidosis",
            "Treatment of Severe Sepsis",
            "Diagnostic Pleural and Ascitic Tapping",
            "Comprehensive Health Assessments"
        ],
        facilities: [
            { icon: Hospital, title: "Medical ICU (MICU)", desc: "Advanced monitoring for critically ill medical patients." },
            { icon: Building2, title: "Isolation Wards", desc: "Dedicated negative pressure rooms for infectious cases." },
            { icon: Monitor, title: "Non-Invasive Diagnostics", desc: "Integrated lab and imaging support." }
        ],
        faculty: [
            { name: "Dr. P. N. Sahay", role: "Senior Physician", exp: "25+ Years Experience", tags: ["Diabetes", "Internal Medicine"] },
            { name: "Dr. K. L. Das", role: "Consultant Physician", exp: "12+ Years Experience", tags: ["Infectious Diseases", "Critical Care"] }
        ],
        specialTitle: "Comprehensive Diabetes Care",
        specialDesc: "We offer a multidisciplinary approach to diabetes management, integrating endocrinology, dietetics, and diabetic foot care to prevent long-term complications.",
        specialList: [
            { text: "HbA1c Monitoring", icon: Activity },
            { text: "Diet & Nutrition", icon: Users },
            { text: "Foot Care Clinic", icon: Target },
            { text: "Neuropathy Screening", icon: Microscope }
        ],
        highlights: [
            { icon: HeartPulse, title: "Holistic Care", desc: "Treating the patient as a whole, not just the disease." },
            { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock expert physician cover." }
        ],
        slides: [
            { title: "Expert Diagnosis", desc: "Accurate diagnosis and treatment of complex medical conditions.", icon: Stethoscope },
            { title: "Critical Care", desc: "Advanced life support in our Medical ICU.", icon: ShieldAlert },
            { title: "Preventive Health", desc: "Comprehensive screening packages for early detection.", icon: ShieldCheck }
        ]
    },
    "neurology": {
        title: "Department of Neurology",
        tagline: "Advanced Brain & Nerve Care",
        description: "The Neurology Department provides expert diagnosis and management for disorders of the nervous system, including stroke, epilepsy, movement disorders, and neuro-immunological conditions.",
        heroImage: "/carousel-1.png",
        badge: "Neurology",
        colorTheme: { primary: "", accent: "", badge: "", button: "", alertBg: "", alertText: "", alertIcon: "", glow: "", cardBg: "", iconColor: "", specialText: "" },
        curriculum: [
            { icon: Brain, title: "Stroke Management", desc: "Acute stroke care including thrombolysis and critical care." },
            { icon: Activity, title: "Epilepsy Clinic", desc: "Comprehensive evaluation and management of seizure disorders." },
            { icon: Network, title: "Movement Disorders", desc: "Care for Parkinson's disease, tremors, and dystonia." },
            { icon: Microscope, title: "Neuromuscular Disorders", desc: "Diagnosis of neuropathies and myopathies." }
        ],
        practicals: [
            "Intravenous Thrombolysis for Stroke",
            "Electroencephalogram (EEG) Interpretation",
            "Nerve Conduction Studies (NCS/EMG)",
            "Botox Therapy for Movement Disorders"
        ],
        facilities: [
            { icon: Hospital, title: "Stroke Unit", desc: "Specialized care unit for acute stroke patients." },
            { icon: Monitor, title: "Neurophysiology Lab", desc: "Equipped for EEG, EMG, NCS, and Evoked Potentials." },
            { icon: Brain, title: "Neuro-Rehabilitation", desc: "Dedicated physiotherapy for neurological recovery." }
        ],
        faculty: [
            { name: "Dr. S. K. Sinha", role: "Senior Neurologist", exp: "16+ Years Experience", tags: ["Stroke", "Epilepsy"] },
            { name: "Dr. A. K. Choudhary", role: "Consultant Neurologist", exp: "9+ Years Experience", tags: ["Movement Disorders", "Headache"] }
        ],
        specialTitle: "Acute Stroke Pathway",
        specialDesc: "Time is brain. Our acute stroke pathway ensures rapid clinical assessment, neuroimaging, and administration of clot-busting drugs within the critical window.",
        specialList: [
            { text: "Rapid CT/MRI", icon: Monitor },
            { text: "Thrombolysis", icon: Pill },
            { text: "Dedicated Stroke ICU", icon: Brain },
            { text: "Early Rehab", icon: Activity }
        ],
        highlights: [
            { icon: Brain, title: "Stroke Ready", desc: "Protocols optimized for rapid stroke intervention." },
            { icon: Network, title: "Comprehensive Diagnostics", desc: "Full suite of neurophysiological tests." }
        ],
        slides: [
            { title: "Stroke Management", desc: "Rapid response and thrombolysis for acute ischemic stroke.", icon: Brain },
            { title: "Neurophysiology", desc: "Advanced diagnostics including EEG and EMG.", icon: Monitor },
            { title: "Epilepsy Care", desc: "Expert management of complex seizure disorders.", icon: Activity }
        ]
    },
    "obstetrics-gynecology": {
        title: "Obstetrics & Gynecology",
        tagline: "Comprehensive Women's Healthcare",
        description: "Providing expert care through every stage of a woman's life. We specialize in high-risk pregnancies, minimally invasive gynecological surgeries, and comprehensive reproductive health.",
        heroImage: "/images/about/doctor_child.png",
        badge: "Obs & Gynae",
        colorTheme: { primary: "", accent: "", badge: "", button: "", alertBg: "", alertText: "", alertIcon: "", glow: "", cardBg: "", iconColor: "", specialText: "" },
        curriculum: [
            { icon: Baby, title: "High-Risk Obstetrics", desc: "Expert management of complicated pregnancies and maternal conditions." },
            { icon: Target, title: "Laparoscopic Gynecology", desc: "Minimally invasive surgeries for cysts, fibroids, and hysterectomy." },
            { icon: ShieldCheck, title: "Preventive Oncology", desc: "Screening for cervical and breast cancer (Pap smear/Mammography)." },
            { icon: HeartPulse, title: "Infertility Clinic", desc: "Basic workup and management of reproductive issues." }
        ],
        practicals: [
            "Normal and Instrumental Deliveries",
            "Caesarean Sections (C-Section)",
            "Laparoscopic Hysterectomy (TLH)",
            "Colposcopy and Hysteroscopy"
        ],
        facilities: [
            { icon: Hospital, title: "Modern Labor Suites", desc: "Fully equipped suites for safe and comfortable deliveries." },
            { icon: Monitor, title: "Fetal Medicine Unit", desc: "Advanced ultrasound for anomaly scans and fetal monitoring." },
            { icon: Baby, title: "Level 3 NICU Support", desc: "Immediate specialized care for premature or sick newborns." }
        ],
        faculty: [
            { name: "Dr. S. Singh", role: "Senior Consultant", exp: "20+ Years Experience", tags: ["High-Risk Pregnancy", "Laparoscopy"] },
            { name: "Dr. M. Kumari", role: "Consultant Gynecologist", exp: "10+ Years Experience", tags: ["Infertility", "Preventive Care"] }
        ],
        specialTitle: "Advanced Minimally Invasive Surgery",
        specialDesc: "We perform complex gynecological surgeries using laparoscopy and hysteroscopy, ensuring smaller scars, less pain, and quicker return to normal life.",
        specialList: [
            { text: "Total Lap Hysterectomy", icon: Target },
            { text: "Myomectomy", icon: Activity },
            { text: "Ovarian Cystectomy", icon: Microscope },
            { text: "Diagnostic Hysteroscopy", icon: Monitor }
        ],
        highlights: [
            { icon: Baby, title: "Safe Deliveries", desc: "Round-the-clock expert obstetric care." },
            { icon: Target, title: "Keyhole Surgery", desc: "Advanced laparoscopic gynecological procedures." }
        ],
        slides: [
            { title: "Maternity Care", desc: "Ensuring a safe and beautiful journey to motherhood.", icon: Baby },
            { title: "Laparoscopic Surgery", desc: "Minimally invasive solutions for gynecological conditions.", icon: Target },
            { title: "Women's Wellness", desc: "Comprehensive screening and preventive healthcare.", icon: ShieldCheck }
        ]
    },
    "general-surgery": {
        title: "Department of General Surgery",
        tagline: "Advanced Laparoscopic & General Surgery",
        description: "Our surgical team offers a wide spectrum of interventions, specializing in minimally invasive (laparoscopic) procedures for the abdomen, gastrointestinal tract, and emergency trauma surgery.",
        heroImage: "/images/about/surgery_team.png",
        badge: "General Surgery",
        colorTheme: { primary: "", accent: "", badge: "", button: "", alertBg: "", alertText: "", alertIcon: "", glow: "", cardBg: "", iconColor: "", specialText: "" },
        curriculum: [
            { icon: Monitor, title: "Laparoscopic Surgery", desc: "Keyhole surgery for gallbladder, appendix, and hernias." },
            { icon: Target, title: "GI Surgery", desc: "Surgical management of the stomach, intestines, and colon." },
            { icon: ShieldAlert, title: "Trauma & Emergency", desc: "24/7 surgical response for accidents and acute abdominal emergencies." },
            { icon: Microscope, title: "Breast & Endocrine", desc: "Surgical treatment for breast lumps, thyroid, and parathyroid diseases." }
        ],
        practicals: [
            "Laparoscopic Cholecystectomy",
            "Laparoscopic Appendectomy",
            "Hernia Repair (Mesh Plasty)",
            "Exploratory Laparotomy for Trauma"
        ],
        facilities: [
            { icon: Hospital, title: "Modular OTs", desc: "Ultra-clean operating theaters with laminar airflow." },
            { icon: Monitor, title: "HD Laparoscopy Towers", desc: "High-definition imaging for precision surgery." },
            { icon: Activity, title: "Surgical ICU", desc: "Dedicated critical care for major post-operative patients." }
        ],
        faculty: [
            { name: "Dr. A. N. Roy", role: "Senior Surgeon", exp: "22+ Years Experience", tags: ["Laparoscopy", "GI Surgery"] },
            { name: "Dr. V. K. Sharma", role: "Consultant Surgeon", exp: "11+ Years Experience", tags: ["Trauma", "Hernia"] }
        ],
        specialTitle: "Center for Minimal Access Surgery",
        specialDesc: "Equipped with advanced HD camera systems, our surgeons perform complex abdominal procedures through tiny incisions, vastly reducing recovery time and hospital stay.",
        specialList: [
            { text: "Sutureless Surgery", icon: Sparkles },
            { text: "Reduced Pain", icon: Pill },
            { text: "Early Discharge", icon: Clock },
            { text: "Minimal Scarring", icon: Eye }
        ],
        highlights: [
            { icon: Monitor, title: "Keyhole Precision", desc: "Advanced laparoscopic techniques for most surgeries." },
            { icon: ShieldAlert, title: "Emergency Ready", desc: "Surgeons available 24/7 for critical emergencies." }
        ],
        slides: [
            { title: "Advanced Laparoscopy", desc: "Minimally invasive surgeries for faster recovery.", icon: Monitor },
            { title: "Modular Operation Theaters", desc: "State-of-the-art facilities ensuring maximum patient safety.", icon: Hospital },
            { title: "Emergency Surgery", desc: "Rapid surgical intervention for trauma and acute conditions.", icon: ShieldAlert }
        ]
    },
    "rheumatology": {
        title: "Department of Rheumatology",
        tagline: "Expert Care for Arthritis & Autoimmune Diseases",
        description: "The Rheumatology Department specializes in the diagnosis and treatment of musculoskeletal diseases and systemic autoimmune conditions, aiming to prevent joint damage and improve function.",
        heroImage: "/carousel-1.png",
        badge: "Rheumatology",
        colorTheme: { primary: "", accent: "", badge: "", button: "", alertBg: "", alertText: "", alertIcon: "", glow: "", cardBg: "", iconColor: "", specialText: "" },
        curriculum: [
            { icon: Bone, title: "Inflammatory Arthritis", desc: "Management of Rheumatoid Arthritis, Ankylosing Spondylitis, etc." },
            { icon: ShieldCheck, title: "Autoimmune Diseases", desc: "Care for SLE (Lupus), Sjogren's, and Scleroderma." },
            { icon: Activity, title: "Osteoarthritis & Osteoporosis", desc: "Degenerative joint disease and bone health management." },
            { icon: Target, title: "Soft Tissue Rheumatism", desc: "Treatment of Fibromyalgia, tendinitis, and bursitis." }
        ],
        practicals: [
            "Intra-articular Joint Injections",
            "Biologic Therapy Infusions",
            "Immunosuppressive Therapy Monitoring",
            "Synovial Fluid Analysis"
        ],
        facilities: [
            { icon: Hospital, title: "Infusion Center", desc: "Dedicated daycare unit for biologic and IV therapies." },
            { icon: Microscope, title: "Immunology Lab", desc: "Advanced diagnostics for autoimmune markers (ANA, ANCA)." },
            { icon: Users, title: "Rheumatology Rehab", desc: "Specialized physiotherapy to maintain joint mobility." }
        ],
        faculty: [
            { name: "Dr. S. K. Pandey", role: "Consultant Rheumatologist", exp: "10+ Years Experience", tags: ["Arthritis", "Lupus"] }
        ],
        specialTitle: "Advanced Biologic Therapy",
        specialDesc: "We offer the latest targeted biologic therapies for severe autoimmune and inflammatory joint diseases, dramatically altering the course of conditions like Rheumatoid Arthritis.",
        specialList: [
            { text: "Targeted Biologics", icon: Target },
            { text: "Daycare Infusions", icon: Clock },
            { text: "Disease Modification", icon: Activity },
            { text: "Pain Relief", icon: Pill }
        ],
        highlights: [
            { icon: Bone, title: "Joint Preservation", desc: "Early intervention to prevent permanent joint damage." },
            { icon: ShieldCheck, title: "Comprehensive Care", desc: "Multidisciplinary approach to complex autoimmune diseases." }
        ],
        slides: [
            { title: "Arthritis Care", desc: "Advanced treatment protocols for inflammatory joint diseases.", icon: Bone },
            { title: "Autoimmune Management", desc: "Expert care for complex systemic conditions like Lupus.", icon: ShieldCheck },
            { title: "Biologic Therapies", desc: "Targeted treatments offering new hope for severe arthritis.", icon: Target }
        ]
    },
    "paediatrics": {
        title: "Department of Paediatrics",
        tagline: "Specialized Care for Children & Newborns",
        description: "Our Paediatrics team provides compassionate and comprehensive care for infants, children, and adolescents. We feature a highly advanced Neonatal ICU (NICU) and Pediatric ICU (PICU).",
        heroImage: "/images/about/doctor_child.png",
        badge: "Paediatrics",
        colorTheme: { primary: "", accent: "", badge: "", button: "", alertBg: "", alertText: "", alertIcon: "", glow: "", cardBg: "", iconColor: "", specialText: "" },
        curriculum: [
            { icon: Baby, title: "Neonatology (NICU)", desc: "Level 3 care for extreme premature and critically ill newborns." },
            { icon: ShieldAlert, title: "Pediatric Intensive Care (PICU)", desc: "Advanced life support for critically ill children." },
            { icon: Smile, title: "General Pediatrics", desc: "Management of childhood infections, asthma, and nutrition." },
            { icon: ShieldCheck, title: "Immunization Clinic", desc: "Comprehensive vaccination programs following IAP guidelines." }
        ],
        practicals: [
            "Neonatal Resuscitation & Ventilation",
            "Exchange Transfusion for Jaundice",
            "Pediatric Advanced Life Support",
            "Growth and Development Assessment"
        ],
        facilities: [
            { icon: Baby, title: "Level 3 NICU", desc: "Equipped with advanced ventilators, incubators, and monitors." },
            { icon: Activity, title: "PICU", desc: "Dedicated intensive care unit for pediatric emergencies." },
            { icon: Smile, title: "Child-Friendly Wards", desc: "Designed to reduce anxiety and promote healing in children." }
        ],
        faculty: [
            { name: "Dr. R. K. Mishra", role: "Head of Paediatrics", exp: "18+ Years Experience", tags: ["Neonatology", "PICU"] },
            { name: "Dr. S. Kumari", role: "Consultant Pediatrician", exp: "9+ Years Experience", tags: ["General Pediatrics", "Asthma"] }
        ],
        specialTitle: "Advanced Neonatal Intensive Care",
        specialDesc: "Our Level 3 NICU is equipped to handle the most complex neonatal emergencies, including extreme prematurity and severe infections, with round-the-clock neonatologist supervision.",
        specialList: [
            { text: "Advanced Ventilation", icon: Activity },
            { text: "Surfactant Therapy", icon: Pill },
            { text: "Phototherapy", icon: Lightbulb },
            { text: "24/7 Neonatologist", icon: Users }
        ],
        highlights: [
            { icon: Baby, title: "Expert Neonatology", desc: "High survival rates for extremely premature babies." },
            { icon: Smile, title: "Compassionate Care", desc: "A family-centered approach to pediatric healing." }
        ],
        slides: [
            { title: "Advanced NICU", desc: "Providing life-saving care to the most delicate newborns.", icon: Baby },
            { title: "Pediatric Intensive Care", desc: "Expert management of critical childhood illnesses.", icon: ShieldAlert },
            { title: "Healthy Growth", desc: "Comprehensive pediatric care from infancy to adolescence.", icon: Smile }
        ]
    },
    "plastic-surgery": {
        title: "Plastic & Reconstructive Surgery",
        tagline: "Restoring Form and Function",
        description: "The Department of Plastic Surgery specializes in reconstructive procedures following trauma or cancer, correction of congenital anomalies, burn care, and aesthetic (cosmetic) surgeries.",
        heroImage: "/carousel-1.png",
        badge: "Plastic Surgery",
        colorTheme: { primary: "", accent: "", badge: "", button: "", alertBg: "", alertText: "", alertIcon: "", glow: "", cardBg: "", iconColor: "", specialText: "" },
        curriculum: [
            { icon: Layers, title: "Reconstructive Surgery", desc: "Flap surgeries for trauma, diabetic foot, and post-cancer defects." },
            { icon: Baby, title: "Congenital Anomalies", desc: "Correction of cleft lip, cleft palate, and syndactyly." },
            { icon: Activity, title: "Burn Care", desc: "Acute burn management and secondary reconstructive procedures." },
            { icon: Sparkles, title: "Aesthetic Surgery", desc: "Rhinoplasty, liposuction, scar revisions, and body contouring." }
        ],
        practicals: [
            "Microvascular Free Flap Surgery",
            "Skin Grafting and Flap Cover",
            "Cleft Lip and Palate Repair",
            "Complex Wound Management"
        ],
        facilities: [
            { icon: Hospital, title: "Dedicated Burn Unit", desc: "Strict isolation protocols for severe burn patients." },
            { icon: Microscope, title: "Microvascular OT", desc: "Advanced operating microscopes for nerve and vessel repair." },
            { icon: Target, title: "Aesthetic Clinic", desc: "Private consultation suites for cosmetic procedures." }
        ],
        faculty: [
            { name: "Dr. P. K. Jha", role: "Consultant Plastic Surgeon", exp: "12+ Years Experience", tags: ["Reconstruction", "Microvascular"] }
        ],
        specialTitle: "Microvascular Reconstructive Surgery",
        specialDesc: "Using high-powered microscopes, our surgeons reconnect tiny blood vessels and nerves, allowing for the transfer of tissue (flaps) to reconstruct complex defects caused by trauma or cancer.",
        specialList: [
            { text: "Free Tissue Transfer", icon: Layers },
            { text: "Nerve Repair", icon: Network },
            { text: "Limb Salvage", icon: Bone },
            { text: "Post-Onco Reconstruction", icon: Target }
        ],
        highlights: [
            { icon: Sparkles, title: "Aesthetic Excellence", desc: "Refining form and enhancing natural appearance." },
            { icon: Layers, title: "Complex Reconstruction", desc: "Restoring function and covering severe tissue defects." }
        ],
        slides: [
            { title: "Reconstructive Mastery", desc: "Restoring form and function after trauma or cancer.", icon: Layers },
            { title: "Cleft Lip Repair", desc: "Transforming smiles for children with congenital anomalies.", icon: Smile },
            { title: "Microvascular Surgery", desc: "Advanced techniques for complex tissue transfer.", icon: Microscope }
        ]
    },
    "gastroenterology": {
        title: "Department of Gastroenterology",
        tagline: "Advanced Digestive & Liver Care",
        description: "The Gastroenterology Department offers comprehensive diagnosis and treatment for diseases of the digestive tract, liver, and pancreas, featuring a highly advanced therapeutic endoscopy suite.",
        heroImage: "/images/about/surgery_team.png",
        badge: "Gastroenterology",
        colorTheme: { primary: "", accent: "", badge: "", button: "", alertBg: "", alertText: "", alertIcon: "", glow: "", cardBg: "", iconColor: "", specialText: "" },
        curriculum: [
            { icon: Monitor, title: "Diagnostic Endoscopy", desc: "Upper GI Endoscopy and Colonoscopy for screening." },
            { icon: Target, title: "Therapeutic Endoscopy", desc: "ERCP, polypectomy, variceal banding, and stenting." },
            { icon: Activity, title: "Hepatology", desc: "Management of chronic liver disease, cirrhosis, and hepatitis." },
            { icon: ShieldCheck, title: "Pancreatico-Biliary Care", desc: "Treatment for acute/chronic pancreatitis and bile duct stones." }
        ],
        practicals: [
            "Diagnostic & Therapeutic ERCP",
            "Endoscopic Variceal Ligation (EVL)",
            "Colonoscopy and Polypectomy",
            "Management of GI Bleed"
        ],
        facilities: [
            { icon: Hospital, title: "Advanced Endoscopy Suite", desc: "Equipped with the latest high-definition endoscopes." },
            { icon: Microscope, title: "GI Pathology", desc: "Rapid biopsy analysis for GI malignancies." },
            { icon: Activity, title: "Medical ICU", desc: "Intensive care for acute severe pancreatitis and GI bleeds." }
        ],
        faculty: [
            { name: "Dr. A. K. Singh", role: "Senior Gastroenterologist", exp: "14+ Years Experience", tags: ["Therapeutic Endoscopy", "Hepatology"] },
            { name: "Dr. N. Kumar", role: "Consultant Gastroenterologist", exp: "8+ Years Experience", tags: ["ERCP", "IBD"] }
        ],
        specialTitle: "Therapeutic ERCP & GI Interventions",
        specialDesc: "Our endoscopy suite specializes in ERCP (Endoscopic Retrograde Cholangiopancreatography) for the minimally invasive removal of bile duct stones and placement of stents.",
        specialList: [
            { text: "Bile Duct Stone Removal", icon: Target },
            { text: "GI Bleed Management", icon: ShieldAlert },
            { text: "Biliary Stenting", icon: Activity },
            { text: "Polyp Removal", icon: Sparkles }
        ],
        highlights: [
            { icon: Monitor, title: "Minimally Invasive", desc: "Advanced endoscopic solutions avoiding open surgery." },
            { icon: Activity, title: "Liver Care Hub", desc: "Comprehensive management of complex liver diseases." }
        ],
        slides: [
            { title: "Advanced Endoscopy", desc: "High-definition diagnostics and therapeutic interventions.", icon: Monitor },
            { title: "Hepatology Expertise", desc: "Specialized care for chronic liver conditions and cirrhosis.", icon: Activity },
            { title: "GI Emergency Care", desc: "Rapid intervention for acute GI bleeds and pancreatitis.", icon: ShieldAlert }
        ]
    },
    "ophthalmology": {
        title: "Department of Ophthalmology",
        tagline: "Advanced Eye Care & Microsurgery",
        description: "The Ophthalmology Department provides comprehensive vision care, from routine check-ups to advanced microsurgeries for cataracts, glaucoma, and retinal disorders.",
        heroImage: "/carousel-1.png",
        badge: "Ophthalmology",
        colorTheme: { primary: "", accent: "", badge: "", button: "", alertBg: "", alertText: "", alertIcon: "", glow: "", cardBg: "", iconColor: "", specialText: "" },
        curriculum: [
            { icon: Eye, title: "Cataract Surgery", desc: "Micro-incision cataract surgery (Phacoemulsification) with IOL implantation." },
            { icon: Target, title: "Glaucoma Care", desc: "Medical and surgical management of intraocular pressure." },
            { icon: Microscope, title: "Medical Retina", desc: "Treatment for diabetic retinopathy and age-related macular degeneration." },
            { icon: Smile, title: "Pediatric Ophthalmology", desc: "Management of squint (strabismus) and refractive errors in children." }
        ],
        practicals: [
            "Phacoemulsification (Sutureless Cataract Surgery)",
            "Intravitreal Injections (Anti-VEGF)",
            "Laser Photocoagulation",
            "Glaucoma Filtering Surgery"
        ],
        facilities: [
            { icon: Hospital, title: "Ophthalmic OT", desc: "Dedicated ultra-clean OT with advanced surgical microscopes." },
            { icon: Monitor, title: "Diagnostic Suite", desc: "Equipped with OCT, Visual Field Analyzer, and Fundus Camera." },
            { icon: Activity, title: "Laser Room", desc: "YAG and Green lasers for precise retinal and anterior segment treatments." }
        ],
        faculty: [
            { name: "Dr. P. K. Sinha", role: "Senior Eye Surgeon", exp: "16+ Years Experience", tags: ["Phaco", "Glaucoma"] },
            { name: "Dr. R. Ranjan", role: "Consultant Ophthalmologist", exp: "9+ Years Experience", tags: ["Medical Retina", "Cataract"] }
        ],
        specialTitle: "Micro-Incision Cataract Surgery",
        specialDesc: "We offer advanced Phacoemulsification for cataract removal through a tiny incision, allowing for rapid healing, no stitches, and quick restoration of clear vision.",
        specialList: [
            { text: "No Stitch Surgery", icon: Sparkles },
            { text: "Foldable IOLs", icon: Eye },
            { text: "Day Care Procedure", icon: Clock },
            { text: "Fast Recovery", icon: Activity }
        ],
        highlights: [
            { icon: Eye, title: "Crystal Clear Vision", desc: "Premium intraocular lenses for optimal surgical outcomes." },
            { icon: Microscope, title: "Advanced Diagnostics", desc: "State-of-the-art OCT and retinal imaging technology." }
        ],
        slides: [
            { title: "Advanced Cataract Surgery", desc: "Restoring clear vision with micro-incision phacoemulsification.", icon: Eye },
            { title: "Retinal Care", desc: "Expert management of diabetic eye disease and macular degeneration.", icon: Microscope },
            { title: "Comprehensive Eye Exams", desc: "State-of-the-art diagnostics for early detection of eye conditions.", icon: Target }
        ]
    }
}
;


export default function DynamicDepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const { openBooking } = useBooking();
    const department = departmentData[slug];

    if (!department) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 py-20 px-6">
                <div className="w-16 h-16 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-6">
                    <AlertTriangle size={28} />
                </div>
                <h1 className="text-3xl font-black text-slate-800 uppercase tracking-tight mb-2">Under Construction</h1>
                <p className="text-slate-500 mb-8 text-center max-w-md text-sm">
                    The department page for &quot;{slug}&quot; is currently being populated.
                </p>
                <Link href="/" className="px-8 py-3 bg-[#0a192f] text-white font-bold rounded-full text-xs uppercase tracking-widest shadow-md hover:bg-red-600 transition-colors">
                    Back to Home
                </Link>
            </div>
        );
    }

    const treatList = department.practicals;
    const nonInvasiveList = department.curriculum.map((c: { title: string }) => c.title);

    return (
        <div className="bg-white text-gray-900 overflow-x-hidden" style={{ fontFamily: sansFont }}>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 1 — HERO BANNER (dark navy gradient + dept image)
            ═══════════════════════════════════════════════════════════ */}
            <section className="relative w-full overflow-hidden" style={{ background: "linear-gradient(135deg, #003580 0%, #0057A8 55%, #0069CC 100%)" }}>
                {/* Subtle grid overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.5'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

                <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center min-h-[260px] lg:min-h-[320px] py-10 gap-8 lg:gap-0">
                    {/* Left: Text */}
                    <div className="flex-1 z-10">
                        <p className="text-xs font-bold uppercase tracking-[3px] mb-3" style={{ color: "#F5BE00" }}>DEPARTMENT OF</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wide leading-tight mb-8" style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF", textShadow: "2px 2px 8px rgba(0,0,0,0.4)" }}>
                            {department.badge.toUpperCase()}
                        </h1>
                        <div className="flex flex-wrap gap-3">
                            <button
                                onClick={openBooking}
                                className="flex items-center gap-2 px-6 py-3 rounded-md font-bold text-sm text-white transition-all duration-200 hover:opacity-90"
                                style={{ background: "#CC2027" }}
                            >
                                <span>📅</span> BOOK AN APPOINTMENT
                            </button>
                            <a
                                href={`https://wa.me/917643990301?text=${encodeURIComponent('Hello! I would like to enquire about an appointment at Dhamma Superspeciality Hospital.')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-md font-bold text-sm text-white border border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-200"
                            >
                                <span>💬</span> Get a Call Back
                            </a>
                        </div>
                    </div>

                    {/* Right: Department Visual Image */}
                    <div className="relative flex-shrink-0 w-[260px] h-[220px] lg:w-[360px] lg:h-[280px] hidden sm:block">
                        <Image
                            src={department.heroImage}
                            alt={department.title}
                            fill
                            priority
                            className="object-cover object-center rounded-xl opacity-70"
                            style={{ filter: "brightness(0.9) saturate(0.6) hue-rotate(210deg)" }}
                        />
                    </div>

                    {/* Side Appointment Ribbon */}
                    <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-50">
                        <div
                            onClick={openBooking}
                            className="flex items-center justify-center text-white text-[11px] font-bold tracking-widest uppercase py-4 px-2 cursor-pointer hover:opacity-90 transition-opacity"
                            style={{ background: "#CC2027", writingMode: "vertical-rl", letterSpacing: "0.2em", borderRadius: "8px 0 0 8px" }}
                        >
                            📅 &nbsp; BOOK AN APPOINTMENT
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 2 — ABOUT + DOCTOR CARD (two column)
            ═══════════════════════════════════════════════════════════ */}
            <section className="py-12 lg:py-16 border-b border-gray-100">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                        {/* Left: Description */}
                        <div className="lg:col-span-7">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 rounded-full" style={{ background: "#0057A8" }} />
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                    {department.title.replace("Department of ", "Department of ")}&nbsp;
                                    <span style={{ color: "#0057A8" }}>{department.badge}</span>
                                </h2>
                            </div>

                            <p className="text-gray-600 leading-relaxed text-[15px] mb-4">{department.description}</p>
                            <p className="text-gray-600 leading-relaxed text-[15px] mb-6">
                                At <strong>Dhamma Superspeciality Hospital</strong>, our {department.badge} department combines advanced clinical expertise with cutting-edge technology. Our specialists are dedicated to delivering evidence-based, patient-centric care with compassion — rooted in our philosophy of <strong style={{ color: "#0057A8" }}>सेवा परमो धर्म:</strong>.
                            </p>

                            {/* USP — Special Highlight */}
                            <div className="mb-2">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                    <span className="inline-block w-1 h-5 mr-2 align-middle rounded-sm" style={{ background: "#0057A8" }} />
                                    {department.specialTitle}
                                </h3>
                                <p className="text-gray-600 text-[14px] leading-relaxed mb-4">{department.specialDesc}</p>
                            </div>

                            {/* USP Items List */}
                            <div className="space-y-3">
                                {department.specialList.map((item: { text: string; icon: any }, idx: number) => (
                                    <div key={idx} className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                                        <div className="w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: "#EBF3FF" }}>
                                            <item.icon size={20} style={{ color: "#0057A8" }} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">{item.text} :–</p>
                                            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                                                Dhamma Hospital&apos;s {department.badge} department provides world-class care with advanced protocols for {item.text.toLowerCase()}.
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Doctor Card Carousel */}
                        <div className="lg:col-span-5">
                            <button
                                className="w-full py-3 mb-6 font-bold text-sm text-white rounded-lg tracking-wide shadow-md hover:shadow-lg transition-all"
                                style={{ background: "#0057A8" }}
                            >
                                SCHEDULE AN APPOINTMENT
                            </button>

                            <div className="space-y-4">
                                {department.faculty.map((doc: { name: string; role: string; exp: string; tags: string[] }, idx: number) => (
                                    <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="flex gap-4 p-4 items-center">
                                            <div className="w-20 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 relative">
                                                <Image
                                                    src={department.heroImage}
                                                    alt={doc.name}
                                                    fill
                                                    className="object-cover object-top grayscale"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-gray-900 text-base">{doc.name}</h3>
                                                <p className="text-gray-500 text-xs mt-0.5 mb-2 leading-snug">{doc.role}</p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {doc.tags.map((tag: string, ti: number) => (
                                                        <span key={ti} className="px-2 py-0.5 text-[10px] font-bold uppercase rounded-sm" style={{ background: "#e8f0fb", color: "#0057A8" }}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <p className="text-[10px] text-gray-400 uppercase font-semibold mt-2">DEPARTMENT OF {department.badge.toUpperCase()}</p>
                                            </div>
                                        </div>
                                        <div className="h-px bg-gray-100" />
                                        <div className="flex">
                                            <button className="flex-1 text-center py-2.5 text-xs font-bold transition-colors hover:bg-blue-50" style={{ color: "#0057A8" }}>
                                                View Profile
                                            </button>
                                            <div className="w-px bg-gray-100" />
                                            <button className="flex-1 text-center py-2.5 text-xs font-bold transition-colors hover:bg-red-50" style={{ color: "#CC2027" }}>
                                                Book Appointment
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 3 — WHAT WE TREAT + NON-INVASIVE (two columns)
            ═══════════════════════════════════════════════════════════ */}
            <section className="py-12 lg:py-16 bg-gray-50 border-b border-gray-200">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Left Column — What We Treat */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="relative h-44 overflow-hidden">
                                <Image
                                    src={department.heroImage}
                                    alt="What We Treat"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-end p-5">
                                    <h3 className="text-white font-bold text-xl">
                                        What we <span style={{ color: "#F5BE00" }}>treat:</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-2.5">
                                    {treatList.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                                            <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#0057A8" }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column — Clinical Expertise */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="relative h-44 overflow-hidden">
                                <Image
                                    src={department.heroImage}
                                    alt="Clinical Expertise"
                                    fill
                                    className="object-cover object-right"
                                    style={{ filter: "hue-rotate(190deg) saturate(0.7)" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0d2a5c]/80 to-transparent flex items-end p-5">
                                    <h3 className="text-white font-bold text-xl">
                                        Clinical <span style={{ color: "#60a5fa" }}>Services:</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-2.5">
                                    {nonInvasiveList.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                                            <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#0057A8" }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 4 — CORE EXPERTISE ICON CARDS
            ═══════════════════════════════════════════════════════════ */}
            <section className="py-14 lg:py-20 bg-white border-b border-gray-100">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <div className="text-center mb-10">
                        <p className="text-xs font-bold uppercase tracking-[3px] mb-2" style={{ color: "#CC2027" }}>OUR SPECIALIZATIONS</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Core <span style={{ color: "#0057A8" }}>Expertise</span>
                        </h2>
                        <div className="w-14 h-1 rounded-full mx-auto mt-3" style={{ background: "#F5BE00" }} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {department.curriculum.map((area: { icon: any; title: string; desc: string }, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors group-hover:scale-110 duration-300" style={{ background: "#EBF3FF" }}>
                                    <area.icon size={26} style={{ color: "#0057A8" }} />
                                </div>
                                <h3 className="font-bold text-gray-900 text-base mb-1">{area.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{area.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 5 — FACILITIES ROW
            ═══════════════════════════════════════════════════════════ */}
            <section className="py-12 lg:py-16" style={{ background: "linear-gradient(135deg, #003580 0%, #0057A8 100%)" }}>
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <div className="text-center mb-10">
                        <p className="text-xs font-bold uppercase tracking-[3px] mb-2" style={{ color: "#F5BE00" }}>WORLD CLASS</p>
                        <h2 style={{ color: "#CC2027", WebkitTextFillColor: "#CC2027", opacity: 1 }} className="text-3xl font-bold">Our Facilities</h2>
                        <div className="w-14 h-1 rounded-full mx-auto mt-3 bg-orange-500" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {department.facilities.map((fac: { icon: any; title: string; desc: string }, idx: number) => (
                            <div
                                key={idx}
                                className="rounded-xl p-6 flex items-start gap-4 border border-white/20 hover:border-white/30 transition-colors"
                                style={{ background: "rgba(255,255,255,0.08)" }}
                            >
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(249,115,22,0.25)" }}>
                                    <fac.icon size={22} style={{ color: "#FB923C" }} />
                                </div>
                                <div style={{ color: "#FFFFFF" }}>
                                    <h3 className="font-bold text-sm mb-1" style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF" }}>{fac.title}</h3>
                                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.90)", WebkitTextFillColor: "rgba(255,255,255,0.90)" }}>{fac.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 6 — CONTACT DETAILS CARDS (matching image 2)
            ═══════════════════════════════════════════════════════════ */}
            <section className="py-14 bg-white border-b border-gray-100">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <div className="text-center mb-10">
                        <p className="text-xs font-bold uppercase tracking-[3px] mb-2" style={{ color: "#CC2027" }}>GET IN TOUCH</p>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Contact <span style={{ color: "#0057A8" }}>Information</span>
                        </h2>
                        <div className="w-14 h-1 rounded-full mx-auto mt-3" style={{ background: "#F5BE00" }} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

                        {/* Card 1 — OUR LOCATIONS (lavender) */}
                        <div className="rounded-2xl p-6" style={{ background: "#DDD6FE" }}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-white/60 flex items-center justify-center">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1e1b4b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="1" y="3" width="15" height="13" rx="2"/>
                                        <path d="M16 8h4l3 5v3h-7V8z"/>
                                        <circle cx="5.5" cy="18.5" r="2.5"/>
                                        <circle cx="18.5" cy="18.5" r="2.5"/>
                                    </svg>
                                </div>
                                <h3 className="font-black text-sm uppercase tracking-widest" style={{ color: "#1e1b4b" }}>OUR LOCATIONS</h3>
                            </div>
                            <p className="text-sm leading-relaxed" style={{ color: "#2d2660" }}>
                                Opposite Canara Bank, Phulwari Sharif,<br />
                                Near AIIMS Gate No. 1, Patna, India, Bihar
                            </p>
                        </div>

                        {/* Card 2 — CONNECT WITH US (peach) */}
                        <div className="rounded-2xl p-6" style={{ background: "#FDDCCC" }}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-white/60 flex items-center justify-center">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a1c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.47a2 2 0 0 1 1.97-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                                        <path d="M14.5 2a5 5 0 0 1 5 5"/>
                                        <path d="M14.5 6a1 1 0 0 1 1 1"/>
                                    </svg>
                                </div>
                                <h3 className="font-black text-sm uppercase tracking-widest" style={{ color: "#4a1c00" }}>CONNECT WITH US</h3>
                            </div>
                            <p className="text-sm leading-relaxed" style={{ color: "#5c2800" }}>
                                CALL: <a href="tel:+917643990301" className="font-bold hover:underline">+91 7643990301</a><br />
                                <a href="tel:+917643990302" className="font-bold hover:underline">+91 7643990302</a>
                            </p>
                        </div>

                        {/* Card 3 — VISITING HOURS (mint green) */}
                        <div className="rounded-2xl p-6" style={{ background: "#C6F2E7" }}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-white/60 flex items-center justify-center">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#064e3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <polyline points="12 6 12 12 16 14"/>
                                    </svg>
                                </div>
                                <h3 className="font-black text-sm uppercase tracking-widest" style={{ color: "#064e3b" }}>VISITING HOURS</h3>
                            </div>
                            <p className="text-sm leading-relaxed" style={{ color: "#065f46" }}>
                                Sunday: 08:00 AM – 10:00 PM<br />
                                Monday – Saturday: 06:00 AM – 12:00 AM
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 7 — APPOINTMENT CTA STRIP
            ═══════════════════════════════════════════════════════════ */}
            <section className="py-10" style={{ background: "linear-gradient(90deg, #CC2027, #a01820)" }}>
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-white text-2xl font-bold">Need an Appointment?</h3>
                        <p className="text-red-100 text-sm mt-1">Our {department.badge} specialists are available Mon–Sat, 9AM–6PM</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={openBooking}
                            className="px-8 py-3 bg-white font-bold text-sm rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                            style={{ color: "#CC2027" }}
                        >
                            Book Now
                        </button>
                        <a
                            href={`https://wa.me/917643990301?text=${encodeURIComponent('Hello! I would like to enquire about an appointment at Dhamma Superspeciality Hospital. Please guide me.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-8 py-3 font-bold text-sm rounded-lg text-white transition-colors shadow-sm hover:opacity-90"
                            style={{ background: "#0057A8" }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Call Us
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}

