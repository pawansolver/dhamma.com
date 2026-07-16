"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CheckCircle, XCircle, Clock, Calendar, User, FileText, Phone, Building2 } from "lucide-react";
import Link from "next/link";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000/api";

interface AppointmentData {
  appointmentId: string;
  tokenNumber: number;
  patientName: string;
  gender: string;
  age: number;
  mobile: string;
  date: string;
  time: string;
  status: string;
  department: { name: string };
  doctor: { name: string; qualification: string };
  symptoms?: string;
}

export default function VerifyAppointmentPage() {
  const params = useParams();
  const appointmentId = params.appointmentId as string;
  
  const [appointment, setAppointment] = useState<AppointmentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (appointmentId) {
      fetchAppointment();
    }
  }, [appointmentId]);

  const fetchAppointment = async () => {
    try {
      setLoading(true);
      // Using the public tracking endpoint we already have on backend
      const res = await fetch(`${API_BASE}/appointments/track/${appointmentId}`);
      const data = await res.json();
      
      if (data.success) {
        setAppointment(data.data);
      } else {
        setError(data.message || "Appointment not found");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1a3a6b]"></div>
      </div>
    );
  }

  if (error || !appointment) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <XCircle size={64} className="text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Verification Failed</h1>
        <p className="text-gray-500 mb-6">{error || "Invalid Appointment QR Code"}</p>
        <Link href="/" className="px-6 py-2 bg-[#1a3a6b] text-white rounded-lg font-semibold shadow-md">
          Return to Home
        </Link>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "confirmed":
      case "booked":
        return <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-bold text-sm">CONFIRMED</span>;
      case "completed":
        return <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-bold text-sm">COMPLETED</span>;
      case "cancelled":
        return <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-bold text-sm">CANCELLED</span>;
      default:
        return <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full font-bold text-sm">{status.toUpperCase()}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#1a3a6b] px-6 py-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg">
            <CheckCircle size={36} className="text-green-500" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Appointment Verified</h1>
          <p className="text-blue-100">Official BHRI Patna Hospital Record</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-6 border-b border-gray-100">
            <div>
              <p className="text-sm text-gray-500 font-medium">Appointment ID</p>
              <p className="text-xl font-bold text-gray-800 font-mono">{appointment.appointmentId}</p>
            </div>
            <div className="mt-4 sm:mt-0 text-left sm:text-right">
              <p className="text-sm text-gray-500 font-medium mb-1">Status</p>
              {getStatusBadge(appointment.status)}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg text-[#1a3a6b]">
                <User size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Patient Details</p>
                <p className="font-semibold text-gray-800">{appointment.patientName}</p>
                <p className="text-sm text-gray-500">{appointment.gender} • {appointment.age} yrs</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg text-[#1a3a6b]">
                <Building2 size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Department & Doctor</p>
                <p className="font-semibold text-gray-800">{appointment.department?.name}</p>
                <p className="text-sm text-gray-500">{appointment.doctor?.name}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg text-[#1a3a6b]">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Date</p>
                <p className="font-semibold text-gray-800">{appointment.date}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg text-[#1a3a6b]">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Time & Token</p>
                <p className="font-semibold text-gray-800">{appointment.time}</p>
                <p className="text-sm font-bold text-green-600">Token No. #{appointment.tokenNumber}</p>
              </div>
            </div>
            
            {appointment.symptoms && (
              <div className="flex items-start gap-3 sm:col-span-2">
                <div className="p-2 bg-blue-50 rounded-lg text-[#1a3a6b]">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Symptoms / Reason</p>
                  <p className="font-medium text-gray-700">{appointment.symptoms}</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-1">BHRI Patna Hospital</h3>
            <p className="text-sm text-gray-500 mb-3">Dhamma Institute of Health Sciences, Patna</p>
            <Link 
              href={`${API_BASE}/appointments/slip/${appointment.appointmentId}`} 
              target="_blank"
              className="inline-block w-full sm:w-auto px-6 py-2.5 bg-[#1a3a6b] text-white rounded-lg font-semibold shadow-md hover:bg-[#0f2557] transition"
            >
              Download PDF Slip
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
