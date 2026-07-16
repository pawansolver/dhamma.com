"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useBooking } from "@/context/BookingContext";
import { ChevronRight, Calendar, Building2, ArrowLeft, Share2, Phone, Mail, MapPin, Send, User, FileText } from "lucide-react";
import ContactForm from "@/components/home/ContactForm";

// ─── DETAIL DATA (hardcoded — will be dynamic later) ───
type ArticleDetail = {
    title: string;
    hospital: string;
    date: string;
    category: string;
    categoryLabel: string;
    subtitle: string;
    content: string[];
    image: string;
};

const articleData: Record<string, Record<string, ArticleDetail>> = {
    "press-release": {
        "pain-free-mobility-cartilage-repair": {
            title: "Dhamma Institute of Medical Sciences Restores Pain Free Mobility in 38 Year Old Woman Post Advanced Cartilage Repair Surgery",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 30, 2026",
            category: "press-release",
            categoryLabel: "Press Release",
            subtitle: "First-of-its-Kind Hyalofast Cartilage Restoration Procedure in Bihar; A Milestone in Knee Preservation Care",
            image: "/images/media/media_1.png",
            content: [
                "Bodhgaya, June 30, 2026: Doctors at Dhamma Institute of Medical Sciences, successfully treated a 38-year-old woman suffering from a severe knee cartilage injury, following a fall from the stairs. Hyalofast cartilage restoration procedure was used to preserve the natural knee joint. The procedure was performed by a team of doctors led by Dr. Rajesh Kumar, Consultant, Arthroscopy and Sports Medicine, Dhamma Institute of Medical Sciences, using Hyalofast - a special biological implant designed to support cartilage repair and regeneration. The case is particularly significant as it is the first reported procedure of its kind in Bihar.",
                "Following the injury, the patient experienced persistent knee pain and gradually developed a limp that made walking and weight-bearing increasingly difficult. Over the next six months, she sought treatment at multiple healthcare facilities in Gaya and Patna, where her condition was managed conservatively with medications. However, her symptoms persisted, prompting her to seek a specialist opinion at Dhamma Institute of Medical Sciences, following a referral from a family acquaintance.",
                "Upon evaluation, MRI imaging revealed a significant cartilage defect on the weight-bearing surface of the femoral condyle — a critical area of the knee joint. Given her young age and active lifestyle requirements, the medical team recommended the Hyalofast cartilage restoration technique as the most suitable option, aiming to regenerate the damaged cartilage rather than opt for a more invasive joint replacement surgery.",
                "The Hyalofast procedure involves placing a bio-absorbable scaffold made of hyaluronic acid into the damaged area, which serves as a matrix for the body's own stem cells to grow new cartilage tissue. The surgery was completed in approximately 90 minutes, and the patient was discharged within three days of the procedure.",
                "Post-surgery, the patient underwent a structured rehabilitation program including physiotherapy and progressive weight-bearing exercises. Within 12 weeks, she reported significant improvement in mobility and a substantial reduction in pain. At the six-month follow-up, the patient was able to walk, climb stairs, and perform daily activities without discomfort.",
                "Dr. Rajesh Kumar stated, 'This procedure represents a paradigm shift in how we approach cartilage injuries in young patients. Instead of resorting to knee replacement, we can now preserve the natural joint and promote biological healing. This is particularly important for patients in their 30s and 40s, where joint preservation should be the primary goal.'",
                "The Chairman of Dhamma Group, emphasized that the hospital is committed to bringing the latest medical technologies and techniques to Bihar, ensuring that patients in the region have access to world-class healthcare without having to travel to metropolitan cities."
            ]
        },
        "bone-marrow-transplants-milestone": {
            title: "Dhamma Institute of Medical Sciences Marks 2500 Bone Marrow Transplants Transforming Lives Through Advanced Blood Disorder Care",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 30, 2026",
            category: "press-release",
            categoryLabel: "Press Release",
            subtitle: "A milestone achievement in hematological care for the Eastern India region",
            image: "/images/media/media_2.png",
            content: [
                "Bodhgaya, June 30, 2026: Dhamma Institute of Medical Sciences has achieved a remarkable milestone of completing 2,500 bone marrow transplant procedures, making it one of the leading centers for hematological care in Eastern India. This achievement underscores the hospital's commitment to providing advanced medical treatments to patients across Bihar and neighboring states.",
                "The Bone Marrow Transplant (BMT) unit at Dhamma has been instrumental in treating patients suffering from various blood disorders including leukemia, lymphoma, thalassemia, and aplastic anemia. The unit, equipped with state-of-the-art HEPA-filtered transplant rooms and advanced monitoring systems, has maintained a success rate comparable to the best centers nationally.",
                "Dr. Priya Sharma, Head of Hematology and BMT at Dhamma, stated, 'Reaching 2,500 transplants is not just a number — it represents 2,500 lives transformed. Many of our patients come from rural backgrounds where access to such advanced treatment was previously unimaginable. We are proud to bring this level of care to Bihar.'",
                "The hospital has also established a comprehensive donor registry program and conducts regular awareness camps in rural areas to educate communities about blood disorders and the importance of stem cell donation. Over the past year alone, the unit has registered more than 5,000 potential donors."
            ]
        },
        "rare-abdominal-angina-treatment": {
            title: "Dhamma Successfully Treats Rare Abdominal Angina in 42-Year-Old Woman Through Advanced Minimally Invasive Angioplasty",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 29, 2026",
            category: "press-release",
            categoryLabel: "Press Release",
            subtitle: "Complex vascular intervention saves patient from life-threatening condition",
            image: "/images/media/media_1.png",
            content: [
                "Bodhgaya, June 29, 2026: In a complex medical intervention, doctors at Dhamma Institute of Medical Sciences successfully treated a 42-year-old woman suffering from a rare condition known as abdominal angina — chronic abdominal pain caused by reduced blood flow to the intestines. The condition, if left untreated, can lead to intestinal gangrene and can be fatal.",
                "The patient had been experiencing severe post-meal abdominal pain, significant weight loss, and fear of eating for over eight months. She had visited multiple hospitals and was misdiagnosed with various gastrointestinal conditions before being referred to Dhamma Institute of Medical Sciences.",
                "Upon thorough investigation including CT angiography, the vascular surgery team identified critical blockages in the mesenteric arteries — the blood vessels that supply the intestines. The team performed a minimally invasive angioplasty procedure to restore blood flow to the affected arteries.",
                "The procedure was completed within two hours, and the patient reported immediate relief from her chronic abdominal pain. She was able to eat a normal meal within 24 hours of the procedure and was discharged in stable condition within three days."
            ]
        },
        "robotic-rectal-cancer-surgery": {
            title: "After 18 Month Cancer Battle Australian Patient Travels to India for Specialised Robotic Rectal Cancer Surgery",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 24, 2026",
            category: "press-release",
            categoryLabel: "Press Release",
            subtitle: "International patient chooses Dhamma for advanced robotic surgical care",
            image: "/images/media/media_2.png",
            content: [
                "Bodhgaya, June 24, 2026: A 55-year-old Australian patient traveled to Dhamma Institute of Medical Sciences for specialized robotic rectal cancer surgery after an 18-month battle with the disease. The patient chose Dhamma after extensive research into hospitals offering advanced robotic surgical capabilities in the Asia-Pacific region.",
                "The robotic-assisted surgery was performed by the oncosurgery team using the latest da Vinci surgical system, enabling precise tumor removal with minimal tissue damage. The procedure lasted approximately four hours and the patient was able to begin oral feeds within 48 hours post-surgery.",
                "The patient's recovery was remarkable, and she was able to travel back to Australia within three weeks of the surgery. Regular follow-up consultations continue via the hospital's telemedicine platform."
            ]
        },
        "farmer-regains-vision": {
            title: "Blind for Months After Accident 60 Year Old Farmer Regains Vision Following Synthetic Intelligence Assisted Surgery at Dhamma",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 23, 2026",
            category: "press-release",
            categoryLabel: "Press Release",
            subtitle: "AI-assisted ophthalmic surgery restores sight for rural farmer",
            image: "/images/media/media_1.png",
            content: [
                "Bodhgaya, June 23, 2026: A 60-year-old farmer from Nawada district who had been blind for four months following a farming accident has regained his vision after undergoing an AI-assisted ophthalmic surgery at Dhamma Institute of Medical Sciences. The surgery utilized synthetic intelligence technology to plan and guide the complex corneal repair procedure.",
                "The patient had suffered severe corneal damage and traumatic cataract after being struck by a broken tree branch. Despite initial treatment at a local hospital, his vision continued to deteriorate until he was completely blind in the affected eye.",
                "The ophthalmology team at Dhamma used advanced AI-powered diagnostic imaging to map the extent of corneal damage with sub-millimeter precision, enabling a highly targeted surgical approach. The surgery involved corneal repair followed by lens replacement, all performed in a single sitting."
            ]
        },
        "vabb-technique-breast-lumps": {
            title: "First in Bihar Dhamma Institute of Medical Sciences Introduces Minimally Invasive VABB Technique for Scar Minimal Removal of Benign Breast Lumps",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 23, 2026",
            category: "press-release",
            categoryLabel: "Press Release",
            subtitle: "Advanced vacuum-assisted biopsy technique now available in Bihar for the first time",
            image: "/images/media/media_2.png",
            content: [
                "Bodhgaya, June 23, 2026: Dhamma Institute of Medical Sciences has introduced the Vacuum-Assisted Breast Biopsy (VABB) technique for the first time in Bihar, offering women a minimally invasive option for the removal of benign breast lumps with minimal scarring.",
                "The VABB procedure uses a specialized needle guided by ultrasound to remove breast tissue through a tiny incision, eliminating the need for traditional open surgery. The procedure is performed under local anesthesia and takes approximately 30-45 minutes.",
                "The first patient to undergo the procedure at Dhamma was a 35-year-old school teacher who had multiple benign lumps. The procedure was completed successfully, and she was able to return to work the very next day with minimal discomfort."
            ]
        },
        "complex-spine-surgery": {
            title: "Dhamma Institute of Medical Sciences Performs Successful Complex Spine Surgery on 72-Year-Old Patient Using Advanced Navigation Technology",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 20, 2026",
            category: "press-release",
            categoryLabel: "Press Release",
            subtitle: "Navigation-guided spinal fusion restores mobility in elderly patient",
            image: "/images/media/media_1.png",
            content: [
                "Bodhgaya, June 20, 2026: The neurosurgery team at Dhamma Institute of Medical Sciences performed a successful complex spine surgery on a 72-year-old patient using advanced intraoperative navigation technology. The patient had been bedridden for three months due to severe spinal stenosis and degenerative spondylolisthesis.",
                "The surgery involved multi-level spinal decompression and fusion, guided by real-time 3D navigation that allowed surgeons to place spinal implants with millimeter-level accuracy. The patient was able to stand and take assisted steps within 72 hours of the surgery."
            ]
        },
        "free-health-camp-gaya": {
            title: "Dhamma Institute of Medical Sciences Launches Free Health Camp for Rural Communities in Gaya District Covering 500+ Patients",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 18, 2026",
            category: "press-release",
            categoryLabel: "Press Release",
            subtitle: "Community outreach initiative provides free screening and consultations",
            image: "/images/media/media_2.png",
            content: [
                "Bodhgaya, June 18, 2026: Dhamma Institute of Medical Sciences organized a comprehensive free health camp in Gaya district, providing medical screening, consultations, and basic diagnostic services to over 500 patients from rural communities. The camp was conducted across three locations over a span of two days.",
                "The health camp offered free consultations in general medicine, orthopedics, ophthalmology, cardiology, and gynecology. Additionally, free blood sugar, blood pressure, and basic blood tests were conducted for all attendees. Patients requiring further treatment were referred to Dhamma Institute of Medical Sciences with subsidized treatment packages."
            ]
        },
        "child-congenital-heart-surgery": {
            title: "Dhamma Successfully Treats 5-Year-Old Child with Rare Congenital Heart Defect Through Open Heart Surgery",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 15, 2026",
            category: "press-release",
            categoryLabel: "Press Release",
            subtitle: "Pediatric cardiac team saves young life with complex open heart procedure",
            image: "/images/media/media_1.png",
            content: [
                "Bodhgaya, June 15, 2026: The pediatric cardiac surgery team at Dhamma Institute of Medical Sciences successfully operated on a 5-year-old child diagnosed with a rare congenital heart defect — Tetralogy of Fallot with pulmonary atresia. The child, from a farming family in Jehanabad district, had been cyanotic since birth and was unable to play or engage in normal childhood activities.",
                "The complex open heart surgery, lasting approximately six hours, involved repair of the ventricular septal defect and reconstruction of the right ventricular outflow tract. The child was monitored in the pediatric ICU for five days post-surgery and showed remarkable recovery."
            ]
        },
        "knee-replacement-farmer": {
            title: "Advanced Knee Replacement Surgery at Dhamma Helps 65-Year-Old Farmer Walk Again After Years of Arthritis Pain",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 12, 2026",
            category: "press-release",
            categoryLabel: "Press Release",
            subtitle: "Computer-navigated bilateral knee replacement restores mobility",
            image: "/images/media/media_2.png",
            content: [
                "Bodhgaya, June 12, 2026: A 65-year-old farmer from Aurangabad district has been able to walk pain-free after undergoing bilateral total knee replacement surgery at Dhamma Institute of Medical Sciences. The patient had been suffering from severe osteoarthritis in both knees for over a decade.",
                "The surgery was performed using computer-navigated technology, ensuring precise alignment and positioning of the implants. Both knees were operated on in a single sitting, reducing the overall recovery time and hospital stay. The patient began physiotherapy-assisted walking within 48 hours of the surgery."
            ]
        }
    },
    "media-coverage": {
        "national-healthcare-excellence-awards": {
            title: "Dhamma Institute of Medical Sciences Featured in National Healthcare Excellence Awards 2026",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 28, 2026",
            category: "media-coverage",
            categoryLabel: "Media Coverage",
            subtitle: "Recognition for outstanding contribution to healthcare in rural India",
            image: "/images/media/media_1.png",
            content: [
                "Dhamma Institute of Medical Sciences has been recognized at the National Healthcare Excellence Awards 2026 for its outstanding contribution to improving healthcare access in rural India. The award ceremony, held in New Delhi, highlighted Dhamma's innovative approach to bringing super-specialty medical care to underserved regions.",
                "The hospital was specifically lauded for its telemedicine outreach program, which has connected over 200 villages in Bihar with specialist doctors, and its community health worker training initiative that has empowered local healthcare delivery across Gaya, Jehanabad, and Aurangabad districts."
            ]
        },
        "toi-rural-healthcare-coverage": {
            title: "Times of India Covers Dhamma's Revolutionary Approach to Rural Healthcare in Bihar",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 25, 2026",
            category: "media-coverage",
            categoryLabel: "Media Coverage",
            subtitle: "Major national daily spotlights Dhamma's healthcare model",
            image: "/images/media/media_2.png",
            content: [
                "The Times of India published a detailed feature on Dhamma Institute of Medical Sciences's unique approach to delivering super-specialty healthcare in rural Bihar. The article highlighted how the hospital has successfully bridged the healthcare divide by combining advanced medical technology with community-centric care models."
            ]
        },
        "ndtv-healthcare-gap-feature": {
            title: "NDTV Health Feature: How Dhamma Institute of Medical Sciences is Bridging the Healthcare Gap in Eastern India",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 22, 2026",
            category: "media-coverage",
            categoryLabel: "Media Coverage",
            subtitle: "Television feature explores Dhamma's impact on regional healthcare",
            image: "/images/media/media_1.png",
            content: [
                "NDTV Health aired a comprehensive feature on Dhamma Institute of Medical Sciences, exploring how the hospital is transforming healthcare delivery in Eastern India. The feature included interviews with patients, doctors, and hospital leadership."
            ]
        },
        "ht-telemedicine-initiative": {
            title: "Hindustan Times Highlights Dhamma's Telemedicine Initiative Reaching 100+ Villages in Bihar",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 19, 2026",
            category: "media-coverage",
            categoryLabel: "Media Coverage",
            subtitle: "Telemedicine program brings specialist care to remote villages",
            image: "/images/media/media_2.png",
            content: [
                "Hindustan Times published a feature article highlighting Dhamma Institute of Medical Sciences's telemedicine initiative that has successfully connected over 100 villages in Bihar with specialist healthcare consultations."
            ]
        },
        "dainik-bhaskar-cardiac-screening": {
            title: "Dainik Bhaskar Reports on Dhamma's Free Cardiac Screening Camp for Underprivileged Communities",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 16, 2026",
            category: "media-coverage",
            categoryLabel: "Media Coverage",
            subtitle: "Hindi daily covers Dhamma's community cardiac health initiative",
            image: "/images/media/media_1.png",
            content: [
                "Dainik Bhaskar reported on Dhamma Institute of Medical Sciences's free cardiac screening camp organized for underprivileged communities in the Gaya region. The camp screened over 300 individuals for heart disease risk factors."
            ]
        }
    },
    "newsletters": {
        "newsletter-june-2026": {
            title: "Dhamma Monthly Newsletter - June 2026: Advancing Surgical Excellence in Eastern India",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 30, 2026",
            category: "newsletters",
            categoryLabel: "Newsletter",
            subtitle: "Monthly highlights from Dhamma Institute of Medical Sciences",
            image: "/images/media/media_2.png",
            content: [
                "Welcome to the June 2026 edition of the Dhamma Monthly Newsletter. This month has been marked by several significant achievements and milestones that reflect our commitment to advancing healthcare in Eastern India.",
                "Key highlights include the successful completion of our 2,500th bone marrow transplant, the introduction of the VABB technique for breast lump removal — a first in Bihar, and the expansion of our telemedicine network to 50 additional villages."
            ]
        },
        "research-digest-q2-2026": {
            title: "Dhamma Quarterly Research Digest - Q2 2026: Breakthroughs in Minimally Invasive Surgery",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 15, 2026",
            category: "newsletters",
            categoryLabel: "Newsletter",
            subtitle: "Research and innovation highlights from Q2 2026",
            image: "/images/media/media_1.png",
            content: [
                "The Q2 2026 Research Digest presents the latest research findings and clinical innovations from Dhamma Institute of Medical Sciences. This quarter, our focus has been on advancing minimally invasive surgical techniques across multiple specialties."
            ]
        },
        "newsletter-may-2026": {
            title: "Dhamma Monthly Newsletter - May 2026: Community Health Outreach Programs",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "May 31, 2026",
            category: "newsletters",
            categoryLabel: "Newsletter",
            subtitle: "Monthly highlights from Dhamma Institute of Medical Sciences",
            image: "/images/media/media_2.png",
            content: [
                "The May 2026 edition of our newsletter focuses on Dhamma's expanding community health outreach programs that have been instrumental in bringing preventive healthcare to rural Bihar."
            ]
        },
        "newsletter-april-2026": {
            title: "Dhamma Monthly Newsletter - April 2026: Inaugurating Advanced Cath Lab Facility",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Apr 30, 2026",
            category: "newsletters",
            categoryLabel: "Newsletter",
            subtitle: "Monthly highlights from Dhamma Institute of Medical Sciences",
            image: "/images/media/media_1.png",
            content: [
                "In April 2026, Dhamma Institute of Medical Sciences inaugurated its advanced cardiac catheterization laboratory, equipped with the latest biplane angiography system. This addition significantly enhances the hospital's capacity to perform complex cardiac interventions."
            ]
        }
    },
    "media-connect": {
        "national-conference-neurosurgery": {
            title: "Dhamma Institute of Medical Sciences Hosts National Conference on Advances in Neurosurgery 2026",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 27, 2026",
            category: "media-connect",
            categoryLabel: "Media Connect",
            subtitle: "Leading neurosurgeons gather at Dhamma for national conference",
            image: "/images/media/media_2.png",
            content: [
                "Dhamma Institute of Medical Sciences hosted the National Conference on Advances in Neurosurgery 2026, bringing together over 200 neurosurgeons and neurologists from across India. The two-day conference featured live surgical demonstrations, panel discussions, and presentations on the latest developments in neurosurgical care."
            ]
        },
        "mou-aiims-patna-oncology": {
            title: "Dhamma Signs MoU with AIIMS Patna for Joint Research in Oncology and Cancer Care",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 20, 2026",
            category: "media-connect",
            categoryLabel: "Media Connect",
            subtitle: "Strategic partnership to advance cancer research in Bihar",
            image: "/images/media/media_1.png",
            content: [
                "Dhamma Institute of Medical Sciences and AIIMS Patna have signed a Memorandum of Understanding (MoU) for joint research collaboration in the fields of oncology and cancer care. The partnership aims to advance cancer treatment protocols and improve outcomes for patients in Bihar."
            ]
        },
        "expansion-plan-announcement": {
            title: "Press Conference: Dhamma Announces Expansion Plan with New 200-Bed Super Specialty Wing",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 14, 2026",
            category: "media-connect",
            categoryLabel: "Media Connect",
            subtitle: "Major expansion to enhance healthcare capacity in the region",
            image: "/images/media/media_2.png",
            content: [
                "At a press conference held at Dhamma Institute of Medical Sciences, the hospital management announced plans for a major expansion with the construction of a new 200-bed super specialty wing. The expansion is expected to be completed within 18 months and will include dedicated floors for oncology, neurosciences, and organ transplant."
            ]
        },
        "who-rural-health-campaign": {
            title: "Dhamma Partners with WHO for Rural Health Awareness Campaign Across 5 Districts of Bihar",
            hospital: "Dhamma Institute of Medical Sciences, Patna",
            date: "Jun 8, 2026",
            category: "media-connect",
            categoryLabel: "Media Connect",
            subtitle: "WHO partnership to improve rural health awareness",
            image: "/images/media/media_1.png",
            content: [
                "Dhamma Institute of Medical Sciences has partnered with the World Health Organization (WHO) to conduct a comprehensive rural health awareness campaign across five districts of Bihar — Gaya, Jehanabad, Aurangabad, Nawada, and Arwal. The campaign focuses on preventive healthcare, maternal and child health, and non-communicable disease awareness."
            ]
        }
    }
};

function getCategoryLabel(cat: string) {
    const map: Record<string, string> = {
        "press-release": "Press Release",
        "media-coverage": "Media Coverage",
        "newsletters": "Newsletter",
        "media-connect": "Media Connect"
    };
    return map[cat] || cat;
}

export default function MediaDetailPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
    const { category, slug } = React.use(params);
    const { openBooking } = useBooking();

    const article = articleData[category]?.[slug];

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <h1 className="text-4xl font-black text-gray-900 mb-3">Article Not Found</h1>
                <p className="text-gray-500 mb-6">The article you&apos;re looking for does not exist.</p>
                <Link href={`/media/${category}`} className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white" style={{ background: "#0057A8" }}>
                    <ArrowLeft size={16} /> Back to {getCategoryLabel(category)}
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen" style={{ fontFamily: "'Montserrat', sans-serif" }}>

            {/* ═══ HERO BANNER ═══ */}
            <section className="relative w-full overflow-hidden" style={{ background: "linear-gradient(135deg, #003580 0%, #0057A8 55%, #0069CC 100%)" }}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.5'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
                <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 py-10 lg:py-14">
                    <div className="flex flex-col items-start gap-4 mb-6">
                        <Link
                            href={`/media/${category}`}
                            className="inline-flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors"
                        >
                            <ArrowLeft size={16} /> Back to {getCategoryLabel(category)}
                        </Link>
                        <div className="inline-flex px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: "#CC2027", color: "#FFFFFF" }}>
                            {article.categoryLabel}
                        </div>
                    </div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-4" style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF", textShadow: "2px 2px 8px rgba(0,0,0,0.4)" }}>
                        {article.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                        <span className="flex items-center gap-1.5 text-sm text-blue-200">
                            <Building2 size={14} /> {article.hospital}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-blue-200">
                            <Calendar size={14} /> {article.date}
                        </span>
                    </div>
                </div>
            </section>

            {/* ═══ ARTICLE CONTENT ═══ */}
            <section className="py-10 lg:py-16">
                <div className="max-w-[800px] mx-auto px-6 lg:px-12">

                    {/* Share Button */}
                    <div className="flex justify-end mb-6">
                        <button
                            onClick={() => {
                                if (navigator.share) {
                                    navigator.share({ title: article.title, url: window.location.href });
                                } else {
                                    navigator.clipboard.writeText(window.location.href);
                                    alert("Link copied to clipboard!");
                                }
                            }}
                            className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 rounded-lg text-gray-500 hover:text-gray-800 hover:border-gray-400 transition-colors"
                        >
                            <Share2 size={16} /> Share
                        </button>
                    </div>

                    {/* Subtitle */}
                    {article.subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-base font-semibold italic text-gray-700 mb-8 pb-6 border-b border-gray-100"
                        >
                            -{article.subtitle}-
                        </motion.p>
                    )}

                    {/* Content Paragraphs */}
                    <div className="space-y-5">
                        {article.content.map((para, idx) => (
                            <motion.p
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.08 }}
                                className="text-[15px] leading-[1.8] text-gray-700"
                            >
                                {para}
                            </motion.p>
                        ))}
                    </div>

                    {/* Tags */}
                    <div className="mt-10 pt-6 border-t border-gray-100">
                        <div className="flex flex-wrap gap-2">
                            {["Dhamma Institute of Medical Sciences", "Bodhgaya", article.categoryLabel, "Healthcare", "Bihar"].map(tag => (
                                <span key={tag} className="px-3 py-1.5 bg-gray-100 text-xs font-medium text-gray-600 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CONTACT FORM (Existing) ═══ */}
            <ContactForm />

            {/* ═══ APPOINTMENT CTA ═══ */}
            <section className="py-10" style={{ background: "linear-gradient(90deg, #CC2027, #a01820)" }}>
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-white text-2xl font-bold">Need an Appointment?</h3>
                        <p className="text-red-100 text-sm mt-1">Our specialists are available Mon–Sat, 9AM–6PM</p>
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
                            href={`https://wa.me/917643990301?text=${encodeURIComponent('Hello! I would like to enquire about an appointment at Dhamma Institute of Medical Sciences.')}`}
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
