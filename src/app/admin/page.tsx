"use client";

import { useState, useEffect } from "react";
import { CalendarCheck, Users, Building2, Clock, TrendingUp } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000/api";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ totalToday: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0, today: "" });
  const [deptCount, setDeptCount] = useState(0);
  const [docCount, setDocCount] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    const headers: HeadersInit = { Authorization: `Bearer ${token}` };

    fetch(`${API_BASE}/appointments/stats`, { headers }).then(r => r.json()).then(d => { if (d.success) setStats(d.data); }).catch(() => {});
    fetch(`${API_BASE}/departments`).then(r => r.json()).then(d => { if (d.success) setDeptCount(d.data.length); }).catch(() => {});
    fetch(`${API_BASE}/doctors`).then(r => r.json()).then(d => { if (d.success) setDocCount(d.data.length); }).catch(() => {});
  }, []);

  const cards = [
    { label: "Today Appointments", value: stats.totalToday, icon: CalendarCheck, color: "bg-blue-500" },
    { label: "Confirmed", value: stats.confirmed, icon: TrendingUp, color: "bg-green-500" },
    { label: "Pending", value: stats.pending, icon: Clock, color: "bg-yellow-500" },
    { label: "Completed", value: stats.completed, icon: CalendarCheck, color: "bg-purple-500" },
    { label: "Cancelled", value: stats.cancelled, icon: CalendarCheck, color: "bg-red-500" },
    { label: "Total Departments", value: deptCount, icon: Building2, color: "bg-indigo-500" },
    { label: "Total Doctors", value: docCount, icon: Users, color: "bg-teal-500" },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 !text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-500">Today: {stats.today || new Date().toISOString().split("T")[0]}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition">
              <div className={`w-10 h-10 ${card.color} rounded-lg flex items-center justify-center mb-3`}>
                <Icon size={20} className="text-white" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{card.value}</p>
              <p className="text-xs text-gray-500 mt-1">{card.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
