"use client";

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000/api";

interface Dept { id: number; name: string; nameHi: string; icon: string; isActive: boolean; sortOrder: number }

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState<Dept[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", nameHi: "", icon: "", sortOrder: 0 });

  const token = () => localStorage.getItem("admin_token") || "";

  const fetchDepartments = () => {
    setLoading(true);
    fetch(`${API_BASE}/departments`).then(r => r.json()).then(d => { if (d.success) setDepartments(d.data); }).finally(() => setLoading(false));
  };

  useEffect(() => { fetchDepartments(); }, []);

  const handleSave = async () => {
    const url = editId ? `${API_BASE}/departments/${editId}` : `${API_BASE}/departments`;
    const method = editId ? "PUT" : "POST";
    const res = await fetch(url, { method, headers: { "Content-Type": "application/json", Authorization: `Bearer ${token()}` }, body: JSON.stringify(form) });
    const data = await res.json();
    if (data.success) { setShowForm(false); setEditId(null); fetchDepartments(); setForm({ name: "", nameHi: "", icon: "", sortOrder: 0 }); }
  };

  const handleEdit = (dept: Dept) => {
    setEditId(dept.id);
    setForm({ name: dept.name, nameHi: dept.nameHi || "", icon: dept.icon || "", sortOrder: dept.sortOrder });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Deactivate this department?")) return;
    await fetch(`${API_BASE}/departments/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token()}` } });
    fetchDepartments();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800 !text-gray-800">Departments</h1>
        <button onClick={() => { setShowForm(true); setEditId(null); }} className="flex items-center gap-2 px-4 py-2 bg-[#1a3a6b] text-white text-sm font-semibold rounded-lg hover:bg-[#0f2557]">
          <Plus size={16} /> Add Department
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl">
            <h3 className="text-lg font-bold mb-4 !text-gray-800">{editId ? "Edit Department" : "Add Department"}</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-gray-600">Name (English)</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 border rounded-lg text-sm mt-1" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600">Name (Hindi)</label>
                <input value={form.nameHi} onChange={e => setForm({ ...form, nameHi: e.target.value })} className="w-full px-3 py-2 border rounded-lg text-sm mt-1" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600">Icon (Emoji)</label>
                <input value={form.icon} onChange={e => setForm({ ...form, icon: e.target.value })} className="w-full px-3 py-2 border rounded-lg text-sm mt-1" placeholder="🩺" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600">Sort Order</label>
                <input type="number" value={form.sortOrder} onChange={e => setForm({ ...form, sortOrder: Number(e.target.value) })} className="w-full px-3 py-2 border rounded-lg text-sm mt-1" />
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={handleSave} className="flex-1 py-2.5 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700">Save</button>
              <button onClick={() => { setShowForm(false); setEditId(null); }} className="flex-1 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {loading ? <div className="text-center py-12 text-gray-400">Loading...</div> : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {departments.map(dept => (
            <div key={dept.id} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{dept.icon}</span>
                <div className="flex gap-1">
                  <button onClick={() => handleEdit(dept)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"><Edit2 size={14} /></button>
                  <button onClick={() => handleDelete(dept.id)} className="p-1.5 text-red-500 hover:bg-red-50 rounded"><Trash2 size={14} /></button>
                </div>
              </div>
              <h3 className="font-bold text-gray-800 !text-gray-800">{dept.name}</h3>
              <p className="text-xs text-gray-400 mt-0.5">{dept.nameHi}</p>
              <p className="text-xs text-gray-400 mt-1">Order: {dept.sortOrder}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
