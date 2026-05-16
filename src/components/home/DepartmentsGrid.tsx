import Link from "next/link";
import {
  Stethoscope,
  ShieldPlus,
  Syringe,
  Bone,
  Baby,
  Eye,
  Ear,
  Brain,
  HeartPulse,
  TestTubeDiagonal,
} from "lucide-react";
import { SparkleButton } from "@/components/ui/button-8";

const departments = [
  { icon: Stethoscope, name: "Anatomy", href: "/departments/anatomy" },
  { icon: ShieldPlus, name: "General Medicine", href: "/departments/general-medicine" },
  { icon: Syringe, name: "General Surgery", href: "/departments/general-surgery" },
  { icon: Bone, name: "Orthopaedics", href: "/departments/orthopaedics" },
  { icon: Baby, name: "Paediatrics", href: "/departments/paediatrics" },
  { icon: Eye, name: "Ophthalmology", href: "/departments/ophthalmology" },
  { icon: Ear, name: "ENT", href: "/departments/ent" },
  { icon: Brain, name: "Psychiatry", href: "/departments/psychiatry" },
  { icon: HeartPulse, name: "Obstetrics & Gynecology", href: "/departments/obstetrics-gynecology" },
  { icon: TestTubeDiagonal, name: "Biochemistry", href: "/departments/biochemistry" },
  { icon: ShieldPlus, name: "Radiology", href: "/departments/radiology" },
  { icon: Syringe, name: "Anaesthesiology", href: "/departments/anaesthesiology" },
];

export default function DepartmentsGrid() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <h2 className="heading-xl">Our Departments</h2>
        <p className="text-muted mb-10">
          Specialized care across all major medical disciplines
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {departments.map((dept) => (
            <Link
              key={dept.name}
              href={dept.href}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-bgLight hover:bg-brandBlue hover:text-white transition-all duration-300 group shadow-sm hover:shadow-lg"
            >
              <dept.icon
                size={36}
                className="text-brandBlue group-hover:text-brandSaffron transition-colors"
              />
              <span className="text-sm font-bold text-center">{dept.name}</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <SparkleButton href="/departments">View All Departments</SparkleButton>
        </div>
      </div>
    </section>
  );
}
