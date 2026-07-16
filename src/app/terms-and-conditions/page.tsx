import React from "react";
import { FileText, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | Dhamma Institute of Medical Sciences Patna",
  description: "Terms and conditions of service for Dhamma Institute of Medical Sciences Patna.",
};

export default function TermsAndConditions() {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-800 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-8">
                <Link href="/" className="hover:text-teal-600 transition">Home</Link>
                <ChevronRight size={12} />
                <span className="text-teal-600 font-medium">Terms &amp; Conditions</span>
            </div>

            {/* Header */}
            <div className="mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-500/10 text-teal-600 mb-6">
                    <FileText size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 font-montserrat tracking-tight">Terms &amp; Conditions</h1>
                <p className="text-slate-500 text-sm md:text-base font-medium">Last updated: June 2026</p>
            </div>

            {/* Content */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8 md:p-12 lg:p-16 space-y-10">
                
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">1. Introduction</h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        Welcome to Dhamma Institute of Medical Sciences , Patna. These Terms and Conditions govern your use of our website, hospital facilities, medical services, and academic campus. By accessing our services, physically or digitally, you agree to comply with and be bound by these terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">2. Medical Services &amp; Emergency Care</h2>
                    <ul className="space-y-3 text-slate-600 list-disc pl-5 text-sm md:text-base leading-relaxed">
                        <li>The medical information provided on our website is for general informational purposes only and does not substitute professional medical advice, diagnosis, or treatment from a qualified physician.</li>
                        <li>In case of a medical emergency, do not rely solely on our website or electronic communication. Please visit our Emergency Department immediately or call our emergency hotlines: <strong>+91 7643990302</strong>.</li>
                        <li>Hospital admission, treatment plans, surgical interventions, and discharge protocols are solely at the discretion of the attending medical professionals based on the patient&apos;s clinical condition.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">3. Appointments &amp; Cancellations</h2>
                    <ul className="space-y-3 text-slate-600 list-disc pl-5 text-sm md:text-base leading-relaxed">
                        <li>Appointments booked through our portal or phone are subject to doctor availability. Dhamma Institute of Medical Sciences reserves the right to reschedule or cancel appointments due to unforeseen medical emergencies or administrative reasons.</li>
                        <li>Patients are requested to arrive at least 15 minutes prior to their scheduled appointment time to complete registration formalities.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">4. Billing &amp; Payments</h2>
                    <ul className="space-y-3 text-slate-600 list-disc pl-5 text-sm md:text-base leading-relaxed">
                        <li>All hospital bills must be settled prior to patient discharge unless the patient is covered under pre-approved cashless insurance, government schemes, or corporate tie-ups.</li>
                        <li>We strive for 100% transparency in billing. Cost estimates provided prior to admission are approximate and may vary depending on the actual treatment required, complications, and duration of stay.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">5. Academic &amp; Institute Policies</h2>
                    <ul className="space-y-3 text-slate-600 list-disc pl-5 text-sm md:text-base leading-relaxed">
                        <li>Students enrolled in Dhamma Institute of Medical Sciences's academic and medical programs must adhere strictly to the guidelines and syllabi set by the National Medical Commission (NMC) and the affiliated university.</li>
                        <li>The institute campus is a zero-tolerance zone for ragging, substance abuse, and discriminatory behavior. Any violations will result in immediate disciplinary action including suspension or FIR.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">6. Code of Conduct</h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        Visitors, patients, and students must maintain silence, hygiene, and decorum within the hospital premises. Aggressive behavior or violence against doctors, nurses, or hospital staff will not be tolerated and will lead to strict legal action under the applicable medical protection laws.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">7. Modifications to Terms</h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        Dhamma Institute of Medical Sciences reserves the right to modify these terms at any time without prior notice. Changes will be updated on this page, and continued use of our services implies acceptance of the revised terms.
                    </p>
                </section>

                <section className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100">
                    <h2 className="text-xl font-bold text-slate-900 mb-3 font-montserrat">8. Contact Us</h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4">
                        If you have any questions regarding these Terms and Conditions, please contact our administrative office:
                    </p>
                    <address className="not-italic text-sm text-slate-700 font-medium">
                        <strong>Dhamma Institute of Medical Sciences</strong><br />
                        Opposite Canara Bank, Phulwari Sharif, Near AIIMS Gate No. 1,<br />
                        Patna, India, Bihar<br />
                        <br />
                        <strong>Phone:</strong> +91 7643990301 / +9176439 90302<br />
                        <strong>Email:</strong> info@dhammainstitute.com
                    </address>
                </section>

            </div>
        </div>
    </div>
  );
}
