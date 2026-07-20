"use client";

import { useState, useEffect } from "react";
import { X, ChevronRight, ChevronLeft, Clock, User, Calendar, CheckCircle, Phone } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000/api";

interface DeptType { id: number; name: string; nameHi: string; icon: string; consultationFee: number }
interface DocType { id: number; name: string; qualification: string; experience: number; opdStartTime: string; opdEndTime: string; consultationFee: number; photo: string; maxDailyPatients: number }
interface SlotType { id: number; startTime: string; endTime: string }
interface BookingResult {
  appointmentId: string;
  tokenNumber: number;
  patientName: string;
  date: string;
  time: string;
  status: string;
  slipUrl: string;          // PDF download URL
  whatsappLink: string;     // wa.me pre-filled link
  qrCodeDataUrl: string;    // base64 PNG QR code
}

function formatTime(time24: string) {
  const [h, m] = time24.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return `${String(h12).padStart(2, "0")}:${String(m).padStart(2, "0")} ${ampm}`;
}

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Data from API
  const [departments, setDepartments] = useState<DeptType[]>([]);
  const [doctors, setDoctors] = useState<DocType[]>([]);
  const [slots, setSlots] = useState<SlotType[]>([]);
  const [bookingResult, setBookingResult] = useState<BookingResult | null>(null);

  // Selections
  const [selectedDept, setSelectedDept] = useState<number | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [selectedSlotTime, setSelectedSlotTime] = useState("");

  // Patient form
  const [formData, setFormData] = useState({
    fullName: "", gender: "", age: "", mobile: "", address: "", symptoms: "", aadhaar: "", email: "",
  });

  // Date strip — use local date (not UTC) to avoid IST timezone offset issues
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const [dateStripStart, setDateStripStart] = useState(todayStr);

  // Fetch departments
  async function fetchDepartments() {
    try {
      const res = await fetch(`${API_BASE}/departments`);
      const data = await res.json();
      if (data.success) setDepartments(data.data);
    } catch { /* API not reachable */ }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchDepartments();
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /*
   * FUTURE DOCTOR FLOW (currently disabled as per requirement)
   * ---------------------------------------------------------
   * Earlier flow was:
   * Department -> Doctor/Time -> Date/Slot -> Patient Details -> Confirmation
   *
   * To enable it later:
   * 1. Restore doctor fetching by department.
   * 2. Restore the Select Doctor UI block.
   * 3. Fetch slots with doctorId instead of departmentId.
   * 4. Send doctorId in appointment booking payload.
   */
  // useEffect(() => {
  //   if (selectedDept) {
  //     setDoctors([]);
  //     setSelectedDoctor(null);
  //     setLoading(true);
  //     fetch(`${API_BASE}/doctors?departmentId=${selectedDept}`)
  //       .then(r => r.json())
  //       .then(data => { if (data.success) setDoctors(data.data); })
  //       .catch(() => {})
  //       .finally(() => setLoading(false));
  //   }
  // }, [selectedDept]);

  // Fetch department-level slots when department + date selected
  useEffect(() => {
    if (selectedDept && selectedDate) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSlots([]);
      setSelectedSlot(null);
      setSelectedSlotTime("");
      setLoading(true);
      fetch(`${API_BASE}/slots?departmentId=${selectedDept}&date=${selectedDate}`)
        .then(r => r.json())
        .then(data => { if (data.success) setSlots(data.data); })
        .catch(() => { })
        .finally(() => setLoading(false));
    }
  }, [selectedDept, selectedDate]);

  if (!isOpen) return null;

  const steps = [
    { num: 1, label: "Select Department" },
    { num: 2, label: "Select Date & Slot" },
    { num: 3, label: "Patient Details" },
    { num: 4, label: "Confirmation" },
  ];

  const selectedDeptData = departments.find(d => d.id === selectedDept);
  // Future doctor flow uses this value when the disabled doctor step is restored.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const selectedDoctorData = doctors.find(d => d.id === selectedDoctor);

  const toLocalDateString = (d: Date) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  const getNext7DaysFrom = (startDate: string) => {
    const days = [];
    const start = new Date(startDate + "T00:00:00");
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      days.push({
        date: toLocalDateString(d),
        dayName: d.toLocaleDateString("en-IN", { weekday: "short" }),
        dayNum: d.getDate(),
        monthShort: d.toLocaleDateString("en-IN", { month: "short" }),
        isSunday: d.getDay() === 0,
      });
    }
    return days;
  };

  const handleSubmitForm = async () => {
    if (!selectedDept || !selectedSlot || !selectedDate) return;

    if (formData.mobile && formData.mobile.length < 10) {
      alert("Mobile number must be between 10 and 12 digits.");
      return;
    }
    if (formData.aadhaar && formData.aadhaar.length !== 12) {
      alert("Aadhaar number must be exactly 12 digits.");
      return;
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/appointments/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientName: formData.fullName,
          gender: formData.gender,
          age: parseInt(formData.age),
          mobile: formData.mobile,
          address: formData.address,
          symptoms: formData.symptoms,
          aadhaar: formData.aadhaar || null,
          email: formData.email || null,
          departmentId: selectedDept,
          slotId: selectedSlot,
          date: selectedDate,
          time: selectedSlotTime,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setBookingResult(data.data);
        setStep(4);
      } else {
        alert(data.message || "Booking failed. Please try again.");
      }
    } catch {
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setSelectedDept(null);
    setSelectedDoctor(null);
    setSelectedDate("");
    setSelectedSlot(null);
    setSelectedSlotTime("");
    setFormData({ fullName: "", gender: "", age: "", mobile: "", address: "", symptoms: "", aadhaar: "", email: "" });
    setBookingResult(null);
    setDoctors([]);
    setSlots([]);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={resetAndClose} />

      <div className="relative w-[98%] sm:w-[95%] max-w-[900px] h-[95vh] sm:h-auto sm:max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between flex-shrink-0" style={{ background: "linear-gradient(135deg, #0072CE 0%, #00509E 100%)" }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Calendar size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg !text-white">Book OPD Appointment</h2>
              <p className="text-white/70 text-xs">ओपीडी अपॉइंटमेंट बुक करें</p>
            </div>
          </div>
          <button onClick={resetAndClose} className="text-white/80 hover:text-white transition p-1">
            <X size={24} />
          </button>
        </div>

        {/* Step Progress */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-blue-100 flex-shrink-0" style={{ background: "#EBF5FF" }}>
          <div className="flex items-center justify-between max-w-[600px] mx-auto">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${step >= s.num ? "text-white shadow-md" : "bg-gray-200 text-gray-500"
                    }`} style={step >= s.num ? { background: "#0072CE", boxShadow: "0 4px 12px rgba(0,114,206,0.3)" } : {}}>
                    {step > s.num ? <CheckCircle size={16} /> : s.num}
                  </div>
                  <span className={`text-[10px] mt-1 whitespace-nowrap hidden sm:block ${step >= s.num ? "font-semibold" : "text-gray-400"}`} style={step >= s.num ? { color: "#0072CE" } : {}}>
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-6 sm:w-10 h-0.5 mx-1 transition-all duration-300`} style={{ background: step > s.num ? "#0072CE" : "#d1d5db" }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">

          {/* STEP 1: Select Department */}
          {step === 1 && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1 !text-gray-800">Select Department</h3>
              <p className="text-sm text-gray-500 mb-4">विभाग चुनें</p>
              {departments.length === 0 ? (
                <div className="text-center py-10 text-gray-400">Loading departments...</div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDept(dept.id)}
                      className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-200 text-left hover:shadow-md ${selectedDept === dept.id
                          ? "shadow-md"
                          : "border-gray-200 bg-white"
                        }`}
                      style={selectedDept === dept.id ? { borderColor: "#0072CE", background: "#EBF5FF" } : { border: "2px solid #e5e7eb" }}
                      onMouseEnter={e => { if (selectedDept !== dept.id) (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,114,206,0.4)"; }}
                      onMouseLeave={e => { if (selectedDept !== dept.id) (e.currentTarget as HTMLButtonElement).style.borderColor = "#e5e7eb"; }}
                    >
                      <span className="text-2xl block mb-2">{dept.icon}</span>
                      <span className="text-sm font-semibold text-gray-800 block leading-tight">{dept.name}</span>
                      <span className="text-[11px] text-gray-400 block mt-0.5">{dept.nameHi}</span>
                      <span className="inline-flex mt-2 text-[11px] font-bold px-2 py-0.5 rounded-full" style={{ color: "#0072CE", background: "#EBF5FF" }}>
                        ₹{Number(dept.consultationFee || 0)}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* STEP 2: Select Doctor (future flow preserved, currently disabled) */}
          {false && step === 2 && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1 !text-gray-800">
                Select Doctor — {selectedDeptData?.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">डॉक्टर चुनें</p>

              {loading ? (
                <div className="text-center py-12 text-gray-400">Loading doctors...</div>
              ) : doctors.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <User size={48} className="mx-auto mb-3 opacity-50" />
                  <p>No doctors available for this department.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {doctors.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => setSelectedDoctor(doc.id)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 text-left hover:shadow-md ${selectedDoctor === doc.id
                          ? "border-green-500 bg-green-50 shadow-md"
                          : "border-gray-200 hover:border-[#1a3a6b]/30 bg-white"
                        }`}
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-[#1a3a6b] to-[#2d5ba0] flex items-center justify-center flex-shrink-0">
                        {doc.photo ? (
                          <img
                            src={`${API_BASE.replace("/api", "")}${doc.photo}`}
                            alt={doc.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User size={28} className="text-white" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-800 text-base !text-gray-800">{doc.name}</h4>
                        <p className="text-sm text-gray-500">{doc.qualification}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock size={12} /> {formatTime(doc.opdStartTime)} - {formatTime(doc.opdEndTime)}
                          </span>
                          <span className="text-xs text-gray-500">Exp: {doc.experience} Years</span>
                          <span className="text-xs font-semibold text-green-600">₹{doc.consultationFee}</span>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                          {doc.maxDailyPatients} Max
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* STEP 2: Select Date & Slot */}
          {step === 2 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 !text-gray-800">{selectedDeptData?.name}</h3>
                  <p className="text-sm text-gray-500">
                    Consultation Fee: <span className="font-bold text-green-700">₹{Number(selectedDeptData?.consultationFee || 0)}</span>
                  </p>
                </div>
                <div className="flex items-center gap-0.5 sm:gap-1 border border-gray-300 rounded-lg overflow-hidden flex-shrink-0">
                  <button onClick={() => {
                    const d = new Date(dateStripStart + "T00:00:00"); d.setDate(d.getDate() - 7);
                    setDateStripStart(toLocalDateString(d));
                  }} className="p-1.5 sm:p-2 hover:bg-gray-100 transition">
                    <ChevronLeft size={16} className="text-gray-600" />
                  </button>
                  <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="text-xs sm:text-sm font-medium text-gray-700 border-none outline-none px-1 py-1.5 w-[110px] sm:w-[130px]"
                  />
                  <button onClick={() => {
                    const d = new Date(dateStripStart + "T00:00:00"); d.setDate(d.getDate() + 7);
                    setDateStripStart(toLocalDateString(d));
                  }} className="p-2 hover:bg-gray-100 transition">
                    <ChevronRight size={16} className="text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Horizontal Date Strip */}
              <div className="flex items-center gap-0 mb-5">
                <button onClick={() => {
                  const d = new Date(dateStripStart + "T00:00:00"); d.setDate(d.getDate() - 7);
                  setDateStripStart(toLocalDateString(d));
                }} className="p-1.5 hover:bg-gray-100 rounded transition flex-shrink-0">
                  <ChevronLeft size={18} className="text-gray-500" />
                </button>
                <div className="flex gap-1 overflow-x-auto no-scrollbar flex-1">
                  {getNext7DaysFrom(dateStripStart).map((d) => (
                    <button key={d.date} onClick={() => setSelectedDate(d.date)} disabled={d.isSunday}
                      className={`flex-shrink-0 px-3 sm:px-4 py-2 rounded-lg border text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${d.isSunday ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed" : "bg-white text-gray-700 border-gray-300"
                        }`}
                      style={!d.isSunday && selectedDate === d.date ? { background: "#0072CE", color: "#fff", borderColor: "#0072CE", boxShadow: "0 4px 12px rgba(0,114,206,0.3)" } : {}}
                    >
                      {d.dayName}, {d.monthShort} {d.dayNum}
                    </button>
                  ))}
                </div>
                <button onClick={() => {
                  const d = new Date(dateStripStart + "T00:00:00"); d.setDate(d.getDate() + 7);
                  setDateStripStart(toLocalDateString(d));
                }} className="p-1.5 hover:bg-gray-100 rounded transition flex-shrink-0">
                  <ChevronRight size={18} className="text-gray-500" />
                </button>
              </div>

              {/* Slots */}
              {!selectedDate ? (
                <div className="text-center py-10 text-gray-400">
                  <Clock size={36} className="mx-auto mb-2 opacity-40" />
                  <p className="text-sm">Select a date to view available slots</p>
                </div>
              ) : loading ? (
                <div className="text-center py-10 text-gray-400">Loading slots...</div>
              ) : slots.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-500 font-medium">No slots available for selected date.</p>
                  <p className="text-xs text-gray-400 mt-1">कोई स्लॉट उपलब्ध नहीं। Admin se department slots add karwayein.</p>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Available Slots</span>
                    <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">{slots.length} slots</span>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                    {slots.map((slot) => (
                      <button key={slot.id}
                        onClick={() => { setSelectedSlot(slot.id); setSelectedSlotTime(slot.startTime); }}
                        className={`py-2.5 px-1 rounded-md border text-[13px] font-semibold transition-all`}
                        style={selectedSlot === slot.id
                          ? { borderColor: "#0072CE", background: "#0072CE", color: "#fff", boxShadow: "0 4px 12px rgba(0,114,206,0.3)" }
                          : { borderColor: "#e5e7eb", color: "#374151" }}
                        onMouseEnter={e => { if (selectedSlot !== slot.id) { (e.currentTarget as HTMLButtonElement).style.borderColor = "#0072CE"; (e.currentTarget as HTMLButtonElement).style.background = "#EBF5FF"; } }}
                        onMouseLeave={e => { if (selectedSlot !== slot.id) { (e.currentTarget as HTMLButtonElement).style.borderColor = "#e5e7eb"; (e.currentTarget as HTMLButtonElement).style.background = "#fff"; } }}
                      >
                        {formatTime(slot.startTime)}
                      </button>
                    ))}
                  </div>
                  {selectedSlot && (
                    <div className="mt-4 p-3 rounded-lg border flex items-center gap-3" style={{ background: "#EBF5FF", borderColor: "#B8D4F0" }}>
                      <CheckCircle size={18} style={{ color: "#0072CE" }} className="flex-shrink-0" />
                      <p className="text-sm font-semibold" style={{ color: "#00509E" }}>
                        Selected: {selectedDate} at {formatTime(selectedSlotTime)}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* STEP 3: Patient Details */}
          {step === 3 && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1 !text-gray-800">Patient Details</h3>
              <p className="text-sm text-gray-500 mb-4">मरीज की जानकारी भरें</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Full Name *</label>
                  <input type="text" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-sm" placeholder="पूरा नाम" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Gender *</label>
                  <select value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-sm">
                    <option value="">-- Select --</option>
                    <option value="Male">Male (पुरुष)</option>
                    <option value="Female">Female (महिला)</option>
                    <option value="Other">Other (अन्य)</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Age *</label>
                  <input type="number" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-sm" placeholder="उम्र" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Mobile Number *</label>
                  <input type="tel" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-sm" placeholder="मोबाइल नंबर" maxLength={12} />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-gray-700 block mb-1">Address *</label>
                  <input type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-sm" placeholder="पता" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-gray-700 block mb-1">Problem / Symptoms *</label>
                  <textarea value={formData.symptoms} onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-sm resize-none" rows={3} placeholder="समस्या / लक्षण बताएं" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-400 block mb-1">Aadhaar Number</label>
                  <input type="text" value={formData.aadhaar} onChange={(e) => setFormData({ ...formData, aadhaar: e.target.value.replace(/\D/g, '') })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-sm" maxLength={12} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-400 block mb-1">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-sm" />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Confirmation */}
          {step === 4 && bookingResult && (
            <div className="flex flex-col items-center justify-center py-2 sm:py-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2 animate-bounce shadow-sm" style={{ background: "#EBF5FF" }}>
                <CheckCircle size={32} style={{ color: "#0072CE" }} />
              </div>
              <h3 className="text-xl font-bold mb-0.5 !text-[#0072CE]" style={{ color: "#0072CE" }}>Appointment Confirmed!</h3>
              <p className="text-xs text-gray-500 mb-4">अपॉइंटमेंट कन्फर्म हो गई</p>

              {/* Compact Ticket Layout */}
              <div className="w-full max-w-md rounded-xl border p-3 sm:p-4 flex items-center gap-4 shadow-sm" style={{ background: "#F4F7FB", borderColor: "#B8D4F0" }}>

                {/* Details Section */}
                <div className="flex-1 space-y-1.5 sm:space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="text-xs text-gray-500">Appointment ID</span>
                    <span className="text-[13px] font-bold text-gray-800">{bookingResult.appointmentId}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="text-xs text-gray-500">Token No.</span>
                    <span className="text-[13px] font-bold" style={{ color: "#0072CE" }}>#{String(bookingResult.tokenNumber).padStart(2, "0")}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="text-xs text-gray-500">Department</span>
                    <span className="text-[13px] font-semibold text-gray-800 text-right">{selectedDeptData?.name}</span>
                  </div>
                  {/* Doctor flow is disabled currently. Restore this row when doctor selection is enabled again. */}
                  {/* <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="text-xs text-gray-500">Doctor</span>
                    <span className="text-[13px] font-semibold text-gray-800 text-right">{selectedDoctorData?.name}</span>
                  </div> */}
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="text-xs text-gray-500">Date & Time</span>
                    <span className="text-[13px] font-semibold text-gray-800 text-right">{bookingResult.date} | {formatTime(bookingResult.time)}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="text-xs text-gray-500">Patient</span>
                    <span className="text-[13px] font-semibold text-gray-800 text-right">{bookingResult.patientName}</span>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="w-px h-32 bg-gray-200 hidden sm:block"></div>

                {/* QR Code Section */}
                <div className="flex flex-col items-center justify-center flex-shrink-0">
                  {bookingResult.qrCodeDataUrl ? (
                    <div className="p-1.5 bg-white border border-gray-200 rounded-lg shadow-sm">
                      <img
                        src={bookingResult.qrCodeDataUrl}
                        alt="QR Code"
                        width={80}
                        height={80}
                        className="rounded"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 bg-white border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                      <span className="text-[9px] text-gray-400 text-center">QR Code<br />Loading...</span>
                    </div>
                  )}
                  <span className="text-[9px] text-gray-400 mt-1.5 font-medium">Scan to Verify</span>
                </div>
              </div>

              <div className="flex gap-3 mt-5">
                {/* WhatsApp button */}
                <button
                  onClick={() => {
                    if (bookingResult.whatsappLink) {
                      window.open(bookingResult.whatsappLink, "_blank", "noopener,noreferrer");
                    } else {
                      alert("WhatsApp link not available. Please check your mobile number.");
                    }
                  }}
                  className="px-4 py-2 text-white text-sm font-semibold rounded-lg active:scale-95 transition-all flex items-center gap-2 shadow-md"
                  style={{ background: "#25D366" }}
                >
                  <Phone size={14} /> WhatsApp
                </button>

                {/* Download Slip button */}
                <button
                  onClick={() => {
                    if (bookingResult.slipUrl) {
                      window.open(bookingResult.slipUrl, "_blank", "noopener,noreferrer");
                    } else {
                      alert("Slip URL not available.");
                    }
                  }}
                  className="px-4 py-2 text-white text-sm font-semibold rounded-lg active:scale-95 transition-all shadow-md"
                  style={{ background: "#0072CE" }}
                >
                  Download Slip
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        {step < 4 && (
          <div className="border-t border-blue-100 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between flex-shrink-0" style={{ background: "#F4F7FB" }}>
            <button onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}
              className="flex items-center gap-1 px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition disabled:opacity-40 disabled:cursor-not-allowed">
              <ChevronLeft size={16} /> Back
            </button>

            <button
              onClick={() => { if (step === 3) handleSubmitForm(); else setStep(step + 1); }}
              disabled={
                loading ||
                (step === 1 && !selectedDept) ||
                (step === 2 && (!selectedDate || !selectedSlot)) ||
                (step === 3 && (!formData.fullName || !formData.gender || !formData.age || !formData.mobile || !formData.address || !formData.symptoms))
              }
              className="flex items-center gap-1 px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-bold text-white rounded-lg transition disabled:opacity-40 disabled:cursor-not-allowed shadow-md whitespace-nowrap"
              style={{ background: "#0072CE" }}
            >
              {loading ? "Please wait..." : step === 3 ? "Confirm Booking" : "Next"} <ChevronRight size={16} />
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="border-t border-blue-100 px-4 sm:px-6 py-3 sm:py-4 flex justify-center flex-shrink-0" style={{ background: "#F4F7FB" }}>
            <button onClick={resetAndClose} className="px-8 py-2.5 text-sm font-bold text-white rounded-lg transition" style={{ background: "#00509E" }}>
              Done — Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
