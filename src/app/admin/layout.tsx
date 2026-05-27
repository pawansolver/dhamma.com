"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, CalendarCheck, Building2, Clock, LogOut, Menu, X, Stethoscope, Timer } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000/api";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Appointments", href: "/admin/appointments", icon: CalendarCheck },
  { label: "Doctors", href: "/admin/doctors", icon: Stethoscope },
  { label: "Departments", href: "/admin/departments", icon: Building2 },
  { label: "OPD Timing", href: "/admin/opd-timing", icon: Timer },
  { label: "Slots", href: "/admin/slots", icon: Clock },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const t = localStorage.getItem("admin_token");
    const u = localStorage.getItem("admin_user");
    if (t && u) {
      setToken(t);
      setUser(JSON.parse(u));
    } else if (pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
    router.push("/admin/login");
  };

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (!token) {
    return <div className="h-screen flex items-center justify-center text-gray-400">Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#1a3a6b] text-white transform transition-transform duration-200 lg:relative lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-5 border-b border-white/10">
          <h1 className="font-bold text-lg !text-white">BHRI Admin</h1>
          <p className="text-xs text-white/50 mt-0.5">Hospital Management</p>
        </div>
        <nav className="p-3 space-y-1">
          {sidebarLinks.map(link => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
                <Icon size={18} />
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <div className="text-xs text-white/50 mb-2">{user?.email}</div>
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-red-300 hover:text-red-200 transition">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between flex-shrink-0">
          <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <h2 className="font-bold text-gray-800 text-lg hidden sm:block">
            {sidebarLinks.find(l => l.href === pathname)?.label || "Admin Panel"}
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#1a3a6b] flex items-center justify-center text-white text-xs font-bold">
              {user?.name?.charAt(0) || "A"}
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
