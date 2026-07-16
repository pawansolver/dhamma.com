import React from "react";
import { ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Dhamma Institute of Medical Sciences Patna",
  description: "Privacy Policy and patient data protection guidelines for Dhamma Institute of Medical Sciences Patna.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-800 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-8">
                <Link href="/" className="hover:text-blue-600 transition">Home</Link>
                <ChevronRight size={12} />
                <span className="text-blue-600 font-medium">Privacy Policy</span>
            </div>

            {/* Header */}
            <div className="mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-600 mb-6">
                    <ShieldCheck size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 font-montserrat tracking-tight">Privacy Policy</h1>
                <p className="text-slate-500 text-sm md:text-base font-medium">Last updated: June 2026</p>
            </div>

            {/* Content */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8 md:p-12 lg:p-16 space-y-10">
                
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">1. Commitment to Privacy</h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        At Dhamma Institute of Medical Sciences , Patna, we are deeply committed to protecting the privacy and confidentiality of our patients, students, faculty, and website visitors. This Privacy Policy explains how we collect, use, and safeguard your personal and medical information in compliance with Indian healthcare and data protection standards.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">2. Information We Collect</h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-3">We may collect the following types of information when you interact with our hospital or academic divisions:</p>
                    <ul className="space-y-3 text-slate-600 list-disc pl-5 text-sm md:text-base leading-relaxed">
                        <li><strong>Personal Details:</strong> Name, age, date of birth, gender, contact number, email address, and residential address.</li>
                        <li><strong>Medical Information:</strong> Past medical history, diagnostic reports, prescriptions, allergies, and treatment records (collected during physical OPD visits, admissions, or tele-consultations).</li>
                        <li><strong>Financial Information:</strong> Health insurance policy details, payment transaction records, and billing history.</li>
                        <li><strong>Digital Data:</strong> IP addresses, browser types, and usage data when you browse our digital platforms.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">3. How We Use Your Information</h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-3">Your data is utilized strictly for the following hospital and academic purposes:</p>
                    <ul className="space-y-3 text-slate-600 list-disc pl-5 text-sm md:text-base leading-relaxed">
                        <li>Providing accurate medical diagnoses, treatment planning, and continuous patient care.</li>
                        <li>Processing hospital admissions, billing, and cashless insurance claims efficiently.</li>
                        <li>Managing academic enrollment, student records, examinations, and hostel administration for medical students.</li>
                        <li>Improving our hospital services, website functionality, and overall patient experience.</li>
                        <li>Complying with legal, regulatory, and public health reporting obligations mandated by the Government of India and the National Medical Commission (NMC).</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">4. Data Protection &amp; Confidentiality</h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        We implement strict physical, electronic, and administrative safeguards to protect your data against unauthorized access, alteration, or destruction. Patient medical records are maintained with the highest degree of medical confidentiality and are accessible only to authorized healthcare professionals directly involved in your care.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">5. Sharing of Information</h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-3">
                        Dhamma Institute of Medical Sciences does not sell, trade, or rent your personal data to third parties. We may share your information only under the following necessary circumstances:
                    </p>
                    <ul className="space-y-3 text-slate-600 list-disc pl-5 text-sm md:text-base leading-relaxed">
                        <li>With specialized doctors, laboratories, or diagnostic centers for referrals and integrated patient care.</li>
                        <li>With insurance providers or Third Party Administrators (TPAs) to process and verify your claims.</li>
                        <li>When required by law, court orders, or government health regulatory bodies (e.g., infectious disease reporting).</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">6. Patient Rights</h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        You have the right to access your personal health records, request corrections to inaccurate data, and request a copy of your diagnostic reports as per hospital policy. Please note that for medical-legal compliance, the original physical/digital records remain the property of Dhamma Institute of Medical Sciences.
                    </p>
                </section>

                <section className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100">
                    <h2 className="text-xl font-bold text-slate-900 mb-3 font-montserrat">7. Contact the Privacy Officer</h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4">
                        If you have any concerns regarding how your data is handled or wish to update your preferences, please reach out to our administration desk:
                    </p>
                    <address className="not-italic text-sm text-slate-700 font-medium">
                        <strong>Data Privacy &amp; Records Department</strong><br />
                        Dhamma Institute of Medical Sciences<br />
                        Opposite Canara Bank, Phulwari Sharif, Near AIIMS Gate No. 1,<br />
                        Patna, India, Bihar<br />
                        <br />
                        <strong>Email:</strong> info@dhammainstitute.com
                    </address>
                </section>

            </div>
        </div>
    </div>
  );
}
