"use client";

import { useState, useEffect } from "react";
import { Clock, User, Stethoscope } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000/api";

interface Doctor {
  id: number;
  name: string;
  qualification: string;
  experience: number;
  opdStartTime: string;
  opdEndTime: string;
  consultationFee: number;
  availableDays: string;
  department?: { id: number; name: string; nameHi?: string };
}

interface Department {
  id: number;
  name: string;
  nameHi: string;
  icon: string;
}

function formatTime(time24: string) {
  if (!time24) return "";
  const [h, m] = time24.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return `${String(h12).padStart(2, "0")}:${String(m).padStart(2, "0")} ${ampm}`;
}

export default function OPDTimetable() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedDept, setSelectedDept] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [deptRes, docRes] = await Promise.all([
          fetch(`${API_BASE}/departments`),
          fetch(`${API_BASE}/doctors`),
        ]);
        const deptData = await deptRes.json();
        const docData = await docRes.json();
        if (deptData.success) setDepartments(deptData.data);
        if (docData.success) setDoctors(docData.data);
      } catch { /* API unavailable */ }
      finally { setLoading(false); }
    };
    fetchData();
  }, []);

  const filteredDoctors = selectedDept
    ? doctors.filter(d => d.department?.id === selectedDept)
    : doctors;

  const today = new Date().toLocaleDateString("en-US", { weekday: "short" });

  if (loading) {
    return (
      <div className="py-12 text-center text-gray-400">
        <Clock size={32} className="mx-auto mb-2 animate-spin" />
        <p>Loading OPD Timetable...</p>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="section-heading">OPD Timetable</h2>
          <span className="section-heading-line" />
          <p className="section-subheading">
            Doctor-wise OPD schedule — check availability and timings
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button
            onClick={() => setSelectedDept(null)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              !selectedDept ? "bg-[#1a3a6b] text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All Departments
          </button>
          {departments.map(dept => (
            <button
              key={dept.id}
              onClick={() => setSelectedDept(dept.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedDept === dept.id ? "bg-[#1a3a6b] text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {dept.icon} {dept.name}
            </button>
          ))}
        </div>

        {/* Timetable */}
        {filteredDoctors.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            <Stethoscope size={40} className="mx-auto mb-2 opacity-40" />
            <p>No doctors found for this department.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-[#1a3a6b] text-white">
                  <th className="text-left px-4 py-3 text-sm font-semibold">Doctor</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Department</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Qualification</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold">OPD Timing</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold">Available Days</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold">Fee</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredDoctors.map((doc, i) => {
                  const isAvailableToday = doc.availableDays.includes(today);
                  return (
                    <tr key={doc.id} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition`}>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1a3a6b] to-[#2d5ba0] flex items-center justify-center flex-shrink-0">
                            <User size={16} className="text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-800">{doc.name}</p>
                            <p className="text-xs text-gray-400">{doc.experience} Yrs Exp</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">{doc.department?.name || "-"}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{doc.qualification}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a3a6b]">
                          <Clock size={14} />
                          {formatTime(doc.opdStartTime)} - {formatTime(doc.opdEndTime)}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center text-xs text-gray-500">{doc.availableDays}</td>
                      <td className="px-4 py-3 text-center text-sm font-bold text-green-700">₹{doc.consultationFee}</td>
                      <td className="px-4 py-3 text-center">
                        {isAvailableToday ? (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Available
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                            Off Today
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
