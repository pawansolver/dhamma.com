"use client";

import HospitalSubPage from "@/components/hospital/HospitalSubPage";
import hospitalSubData from "@/components/hospital/hospitalSubData";

export default function Page() {
  const data = hospitalSubData["diagnostics"];
  if (!data) return <div className="min-h-screen bg-black text-white flex items-center justify-center text-2xl">Page not found</div>;
  return <HospitalSubPage data={data} />;
}

