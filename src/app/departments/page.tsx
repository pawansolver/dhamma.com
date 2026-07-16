import Link from "next/link";
import {
  Activity,
  Baby,
  Bone,
  Brain,
  Droplets,
  Eye,
  HeartPulse,
  Microscope,
  Scissors,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";

type Department = {
  name: string;
  href: string;
  icon: LucideIcon;
};

const departments: Department[] = [
  { name: "Cardiology", href: "/departments/cardiology", icon: HeartPulse },
  { name: "Neuro Surgery", href: "/departments/neuro-surgery", icon: Brain },
  { name: "Nephrology", href: "/departments/nephrology", icon: Droplets },
  { name: "Orthopaedics", href: "/departments/orthopaedics", icon: Bone },
  { name: "Urology", href: "/departments/urology", icon: Syringe },
  { name: "General Medicine", href: "/departments/general-medicine", icon: Stethoscope },
  { name: "Neurology", href: "/departments/neurology", icon: Brain },
  { name: "Obstetrics & Gynaecology", href: "/departments/obstetrics-gynecology", icon: Baby },
  { name: "General Surgery", href: "/departments/general-surgery", icon: Scissors },
  { name: "Rheumatology", href: "/departments/rheumatology", icon: Activity },
  { name: "Paediatrics", href: "/departments/paediatrics", icon: Baby },
  { name: "Plastic Surgery", href: "/departments/plastic-surgery", icon: Scissors },
  { name: "Gastroenterology", href: "/departments/gastroenterology", icon: Microscope },
  { name: "Ophthalmology", href: "/departments/ophthalmology", icon: Eye },
];

export default function DepartmentsPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-gradient-to-br from-[#003f7d] via-[#00509E] to-[#0072CE] px-4 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#FFC107]">
            Centres of Excellence
          </p>
          <h1 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Our Departments
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
            Explore our specialised departments and find the right medical care for your needs.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {departments.map((department) => {
              const Icon = department.icon;

              return (
                <Link
                  key={department.href}
                  href={department.href}
                  className="group flex min-h-40 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:min-h-48 sm:p-6"
                >
                  <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#0072CE] transition duration-300 group-hover:bg-[#0072CE] group-hover:text-white">
                    <Icon size={29} strokeWidth={1.8} />
                  </span>
                  <span className="text-sm font-bold leading-snug text-slate-700 transition group-hover:text-[#00509E] sm:text-base">
                    {department.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
