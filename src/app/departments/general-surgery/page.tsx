import DepartmentPage from "@/components/departments/DepartmentPage";
import departments from "@/components/departments/departmentData";

export default function Page() {
  const data = departments["general-surgery"];
  if (!data) return <div className="min-h-screen bg-black text-white flex items-center justify-center text-2xl">Department not found</div>;
  return <DepartmentPage data={data} />;
}
