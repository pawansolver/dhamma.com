import {
  Stethoscope,
  Ambulance,
  HeartPulse,
  Baby,
  ShieldPlus,
  Building2,
  TestTubeDiagonal,
  BedDouble,
} from "lucide-react";
import SkewCards from "@/components/ui/gradient-card-showcase";

const services = [
  {
    title: "OPD",
    desc: "Outpatient consultations across all major specialities, Mon-Sat",
    gradientFrom: "#1a3a6b",
    gradientTo: "#3b82f6",
    icon: Stethoscope,
  },
  {
    title: "24 X 7 Emergency",
    desc: "Round-the-clock trauma & critical emergency care with ICU backup",
    gradientFrom: "#dc2626",
    gradientTo: "#ff6b6b",
    icon: Ambulance,
  },
  {
    title: "ICU (With Ventilator)",
    desc: "Advanced intensive care unit with modern ventilator support systems",
    gradientFrom: "#059669",
    gradientTo: "#34d399",
    icon: HeartPulse,
  },
  {
    title: "NICU (With Ventilator)",
    desc: "Neonatal intensive care for critically ill newborns & premature babies",
    gradientFrom: "#7c3aed",
    gradientTo: "#c084fc",
    icon: Baby,
  },
  {
    title: "PICU (With Ventilator)",
    desc: "Paediatric ICU with advanced life support & child-friendly care",
    gradientFrom: "#d97706",
    gradientTo: "#fbbf24",
    icon: ShieldPlus,
  },
  {
    title: "Special Ward",
    desc: "Premium private & semi-private wards with personalised nursing care",
    gradientFrom: "#0d9488",
    gradientTo: "#5eead4",
    icon: Building2,
  },
  {
    title: "24 X 7 Pharmacy",
    desc: "In-house pharmacy stocked with all essential & emergency medicines",
    gradientFrom: "#ea580c",
    gradientTo: "#fb923c",
    icon: TestTubeDiagonal,
  },
  {
    title: "General Ward",
    desc: "Comfortable multi-bed general ward with round-the-clock nursing",
    gradientFrom: "#475569",
    gradientTo: "#94a3b8",
    icon: BedDouble,
  },
];

export default function Services() {
  return (
    <section className="relative bg-[#0a0a1a] py-16 md:py-24 overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(139,92,246,0.08),transparent_50%)]" />

      <div className="container-custom relative z-10">
        <div className="flex justify-center mb-5">
          <div className="h-2 w-24 rounded-full bg-gradient-to-r from-brandSaffron to-brandSaffronLight opacity-70" />
        </div>
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-3 uppercase tracking-tight">
          Services
        </h2>
        <p className="text-center text-white/50 text-base md:text-lg max-w-2xl mx-auto mb-8">
          Comprehensive healthcare facilities under one roof for complete patient care
        </p>

        <SkewCards cards={services} />
      </div>
    </section>
  );
}
