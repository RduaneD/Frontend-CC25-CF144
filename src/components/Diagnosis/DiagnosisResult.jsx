// src/components/DiagnosisResult.jsx
import React from "react";

export default function DiagnosisResult({ diagnosisList }) {
  return (
    <div className="mt-10 max-w-3xl mx-auto space-y-6 bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-green-800">Hasil Diagnosis Tanaman:</h2>

      {diagnosisList.map((item, i) => (
        <div key={i} className="border-t pt-4 mt-4">
          <p><strong>Penyakit:</strong> {item.nama}</p>
          <p><strong>Gejala:</strong> {item.gejala}</p>
          <p><strong>Umum Pada:</strong> {item.umum_pada}</p>
          <p><strong>Penanganan:</strong> {item.penanganan}</p>
        </div>
      ))}

      {/* Gambar Rekomendasi Dummy */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {["Penyakit Serupa", "Tanaman Sehat", "Hama Mangga", "Penyakit Serupa"].map((label, i) => (
          <div key={i} className="text-center">
            <img
              src={`https://via.placeholder.com/120?text=${encodeURIComponent(label)}`}
              alt={label}
              className="rounded-lg shadow"
            />
            <p className="mt-2 text-sm text-gray-700">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
