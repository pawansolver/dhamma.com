"use client";

import { useState, useEffect } from "react";
import { Search, Filter, RefreshCw } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000/api";

interface Appointment {
  id: number; appointmentId: string; tokenNumber: number; patientName: string; gender: string; age: number; mobile: string; date: string; time: string; status: string;
  department?: { id: number; name: string }; doctor?: { id: number; name: string };
}

function formatTime(t: string) { const [h, m] = t.split(":").map(Number); return `${(h % 12 || 12).toString().padStart(2, "0")}:${m.toString().padStart(2, "0")} ${h >= 12 ? "PM" : "AM"}`; }

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterDate, setFilterDate] = useState(new Date().toISOString().split("T")[0]);
  const [filterStatus, setFilterStatus] = useState("");

  const fetchAppointments = () => {
    const token = localStorage.getItem("admin_token");
    let url = `${API_BASE}/appointments?date=${filterDate}`;
    if (filterStatus) url += `&status=${filterStatus}`;
    setLoading(true);
    fetch(url, { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.json())
      .then(d => { if (d.success) setAppointments(d.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchAppointments(); }, [filterDate, filterStatus]);

  const updateStatus = (id: number, status: string) => {
    const token = localStorage.getItem("admin_token");
    fetch(`${API_BASE}/appointments/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ status }),
    }).then(r => r.json()).then(d => { if (d.success) fetchAppointments(); });
  };

  const statusColors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-700",
    confirmed: "bg-blue-100 text-blue-700",
    completed: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 !text-gray-800">Appointments</h1>
        <div className="flex items-center gap-3 flex-wrap">
          <input type="date" value={filterDate} onChange={e => setFilterDate(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <button onClick={fetchAppointments} className="p-2 bg-[#1a3a6b] text-white rounded-lg hover:bg-[#0f2557]">
            <RefreshCw size={16} />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-400">Loading...</div>
      ) : appointments.length === 0 ? (
        <div className="text-center py-12 text-gray-400 bg-white rounded-xl border">
          <p className="text-lg">No appointments found</p>
          <p className="text-sm mt-1">Try changing the date or filter</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-600">Token</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600">Appointment ID</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600">Patient</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600">Mobile</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600">Department</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600">Doctor</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-600">Time</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-600">Status</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(apt => (
                <tr key={apt.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-[#1a3a6b]">#{String(apt.tokenNumber).padStart(2, "0")}</td>
                  <td className="px-4 py-3 text-xs font-mono text-gray-500">{apt.appointmentId}</td>
                  <td className="px-4 py-3">
                    <div className="font-semibold text-gray-800">{apt.patientName}</div>
                    <div className="text-xs text-gray-400">{apt.gender}, {apt.age} yrs</div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{apt.mobile}</td>
                  <td className="px-4 py-3 text-gray-600">{apt.department?.name || "-"}</td>
                  <td className="px-4 py-3 text-gray-600">{apt.doctor?.name || "-"}</td>
                  <td className="px-4 py-3 text-center font-medium">{formatTime(apt.time)}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${statusColors[apt.status] || "bg-gray-100 text-gray-600"}`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <select value={apt.status} onChange={e => updateStatus(apt.id, e.target.value)}
                      className="text-xs border border-gray-300 rounded px-2 py-1">
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
