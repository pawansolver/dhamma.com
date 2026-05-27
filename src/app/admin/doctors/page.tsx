"use client";

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, RefreshCw } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000/api";

interface Doctor {
  id: number; name: string; qualification: string; experience: number; opdStartTime: string; opdEndTime: string;
  consultationFee: number; maxDailyPatients: number; slotDuration: number; availableDays: string; isActive: boolean; departmentId: number;
  department?: { id: number; name: string };
}
interface Dept { id: number; name: string }

function formatTime(t: string) { const [h, m] = t.split(":").map(Number); return `${(h % 12 || 12).toString().padStart(2, "0")}:${m.toString().padStart(2, "0")} ${h >= 12 ? "PM" : "AM"}`; }

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [departments, setDepartments] = useState<Dept[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", qualification: "", experience: 0, departmentId: 0, opdStartTime: "09:00", opdEndTime: "14:00", slotDuration: 15, consultationFee: 300, maxDailyPatients: 16, availableDays: "Mon,Tue,Wed,Thu,Fri,Sat" });

  const token = () => localStorage.getItem("admin_token") || "";

  const fetchDoctors = () => {
    setLoading(true);
    fetch(`${API_BASE}/doctors`).then(r => r.json()).then(d => { if (d.success) setDoctors(d.data); }).finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchDoctors();
    fetch(`${API_BASE}/departments`).then(r => r.json()).then(d => { if (d.success) setDepartments(d.data); });
  }, []);

  const handleSave = async () => {
    const url = editId ? `${API_BASE}/doctors/${editId}` : `${API_BASE}/doctors`;
    const method = editId ? "PUT" : "POST";
    const res = await fetch(url, { method, headers: { "Content-Type": "application/json", Authorization: `Bearer ${token()}` }, body: JSON.stringify(form) });
    const data = await res.json();
    if (data.success) {
      alert(data.message || "Saved successfully");
      setShowForm(false);
      setEditId(null);
      fetchDoctors();
      setForm({ name: "", qualification: "", experience: 0, departmentId: 0, opdStartTime: "09:00", opdEndTime: "14:00", slotDuration: 15, consultationFee: 300, maxDailyPatients: 16, availableDays: "Mon,Tue,Wed,Thu,Fri,Sat" });
    } else {
      alert(data.message || "Failed to save doctor");
    }
  };

  const handleEdit = (doc: Doctor) => {
    setEditId(doc.id);
    setForm({ name: doc.name, qualification: doc.qualification, experience: doc.experience, departmentId: doc.departmentId, opdStartTime: doc.opdStartTime, opdEndTime: doc.opdEndTime, slotDuration: doc.slotDuration, consultationFee: doc.consultationFee, maxDailyPatients: doc.maxDailyPatients, availableDays: doc.availableDays });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Deactivate this doctor?")) return;
    await fetch(`${API_BASE}/doctors/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token()}` } });
    fetchDoctors();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800 !text-gray-800">Doctors</h1>
        <button onClick={() => { setShowForm(true); setEditId(null); }} className="flex items-center gap-2 px-4 py-2 bg-[#1a3a6b] text-white text-sm font-semibold rounded-lg hover:bg-[#0f2557]">
          <Plus size={16} /> Add Doctor
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
            <h3 className="text-lg font-bold mb-4 !text-gray-800">{editId ? "Edit Doctor" : "Add New Doctor"}</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className="text-xs font-medium text-gray-600">Name</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 border rounded-lg text-sm mt-1" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600">Department</label>
                <select value={form.departmentId} onChange={e => setForm({ ...form, departmentId: Number(e.target.value) })} className="w-full px-3 py-2 border rounded-lg text-sm mt-1">
                  <option value={0}>Select</option>
                  {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600">Qualification</label>
                <input value={form.qualification} onChange={e => setForm({ ...form, qualification: e.target.value })} className="w-full px-3 py-2 border rounded-lg text-sm mt-1" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600">Experience (Years)</label>
                <input type="number" value={form.experience} onChange={e => setForm({ ...form, experience: Number(e.target.value) })} className="w-full px-3 py-2 border rounded-lg text-sm mt-1" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600">Consultation Fee (₹)</label>
                <input type="number" value={form.consultationFee} onChange={e => setForm({ ...form, consultationFee: Number(e.target.value) })} className="w-full px-3 py-2 border rounded-lg text-sm mt-1" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600">OPD Start Time</label>
                <input type="time" value={form.opdStartTime} onChange={e => setForm({ ...form, opdStartTime: e.target.value })} className="w-full px-3 py-2 border rounded-lg text-sm mt-1" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600">OPD End Time</label>
                <input type="time" value={form.opdEndTime} onChange={e => setForm({ ...form, opdEndTime: e.target.value })} className="w-full px-3 py-2 border rounded-lg text-sm mt-1" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600">Slot Duration (min)</label>
                <input type="number" value={form.slotDuration} onChange={e => setForm({ ...form, slotDuration: Number(e.target.value) })} className="w-full px-3 py-2 border rounded-lg text-sm mt-1" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600">Max Daily Patients</label>
                <input type="number" value={form.maxDailyPatients} onChange={e => setForm({ ...form, maxDailyPatients: Number(e.target.value) })} className="w-full px-3 py-2 border rounded-lg text-sm mt-1" />
              </div>
              <div className="col-span-2">
                <label className="text-xs font-medium text-gray-600">Available Days</label>
                <input value={form.availableDays} onChange={e => setForm({ ...form, availableDays: e.target.value })} className="w-full px-3 py-2 border rounded-lg text-sm mt-1" placeholder="Mon,Tue,Wed,Thu,Fri,Sat" />
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={handleSave} className="flex-1 py-2.5 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700">Save</button>
              <button onClick={() => { setShowForm(false); setEditId(null); }} className="flex-1 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      {loading ? <div className="text-center py-12 text-gray-400">Loading...</div> : (
        <div className="bg-white rounded-xl border overflow-x-auto shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-600">Name</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600">Department</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600">Qualification</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-600">OPD Timing</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-600">Fee</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map(doc => (
                <tr key={doc.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-800">{doc.name}</td>
                  <td className="px-4 py-3 text-gray-600">{doc.department?.name || "-"}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{doc.qualification}</td>
                  <td className="px-4 py-3 text-center font-medium text-[#1a3a6b]">{formatTime(doc.opdStartTime)} - {formatTime(doc.opdEndTime)}</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">₹{doc.consultationFee}</td>
                  <td className="px-4 py-3 text-center">
                    <button onClick={() => handleEdit(doc)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded mr-1"><Edit2 size={14} /></button>
                    <button onClick={() => handleDelete(doc.id)} className="p-1.5 text-red-500 hover:bg-red-50 rounded"><Trash2 size={14} /></button>
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
