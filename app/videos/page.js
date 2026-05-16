"use client";

import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function VideosPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <div className="p-10">
          <h1 className="text-5xl font-bold text-red-600 mb-8">
            Videos
          </h1>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <p className="text-lg text-gray-700">
              English learning videos will appear here.
            </p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}